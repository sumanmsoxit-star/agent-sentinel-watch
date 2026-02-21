import type { TraceStep, IncidentScore, AgentResult, MemoryEntry, Severity, FailureToggles } from '@/types/agent';
import { supabase } from '@/integrations/supabase/client';

function generateSessionId(): string {
  return 'sess_' + Math.random().toString(36).substring(2, 10);
}

function now(): string {
  return new Date().toISOString();
}

function delay(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

function classifySeverity(score: number): Severity {
  if (score === 0) return 'NONE';
  if (score <= 20) return 'MINOR';
  if (score <= 50) return 'MAJOR';
  return 'CRITICAL';
}

function computeIncidentScore(toolFailures: number, excessSteps: number, memViolations: number): IncidentScore {
  const score = (10 * toolFailures) + (15 * excessSteps) + (20 * memViolations);
  return { score, severity: classifySeverity(score), toolFailures, excessReasoningSteps: excessSteps, memoryViolations: memViolations };
}

function executeTool(expression: string): { result: string; success: boolean } {
  try {
    const sanitized = expression.replace(/[^0-9+\-*/().%\s]/g, '');
    if (!sanitized.trim()) return { result: 'No valid expression found', success: true };
    const result = Function(`"use strict"; return (${sanitized})`)();
    return { result: String(result), success: true };
  } catch {
    return { result: 'Calculation error', success: false };
  }
}

async function callAI(prompt: string): Promise<{ result: string; success: boolean; latency: number }> {
  const start = Date.now();
  try {
    const { data, error } = await supabase.functions.invoke('agent-ai', {
      body: { prompt },
    });
    const latency = Date.now() - start;
    if (error) return { result: `AI Error: ${error.message}`, success: false, latency };
    if (data?.error) return { result: data.error, success: false, latency };
    return { result: data.result, success: true, latency };
  } catch (e) {
    return { result: `Network error: ${e instanceof Error ? e.message : 'unknown'}`, success: false, latency: Date.now() - start };
  }
}

export async function runAgent(
  prompt: string,
  toggles: FailureToggles,
  sessionId?: string
): Promise<{ agentResult: AgentResult; memoryEntry: MemoryEntry }> {
  const sid = sessionId || generateSessionId();
  const trace: TraceStep[] = [];
  let stepCounter = 0;
  let toolFailures = 0;
  let excessSteps = 0;
  let memViolations = 0;
  const executionStart = Date.now();

  // Step 1: Parse Input
  const s1Start = now();
  await delay(toggles.latencySpike ? 1500 : 100);
  stepCounter++;
  trace.push({ stepId: stepCounter, stepName: 'Parse User Input', startTime: s1Start, endTime: now(), status: 'SUCCESS', details: `Parsed: "${prompt.substring(0, 60)}..."` });

  // Step 2: AI Reasoning (real LLM call)
  const s2Start = now();
  let aiResult = '';
  if (toggles.reasoningLoop) {
    excessSteps = 4;
    await delay(800);
    stepCounter++;
    trace.push({ stepId: stepCounter, stepName: 'AI Reasoning', startTime: s2Start, endTime: now(), status: 'WARNING', details: `Excessive reasoning: 5 iterations (simulated loop)` });
    // Still call AI but note the loop
    const ai = await callAI(prompt);
    aiResult = ai.result;
    stepCounter++;
    trace.push({ stepId: stepCounter, stepName: 'AI Response', startTime: s2Start, endTime: now(), status: ai.success ? 'SUCCESS' : 'FAILURE', details: `LLM responded in ${ai.latency}ms` });
    if (!ai.success) toolFailures++;
  } else {
    const ai = await callAI(prompt);
    aiResult = ai.result;
    stepCounter++;
    trace.push({ stepId: stepCounter, stepName: 'AI Reasoning (LLM)', startTime: s2Start, endTime: now(), status: ai.success ? 'SUCCESS' : 'FAILURE', details: `LLM responded in ${ai.latency}ms` });
    if (!ai.success) toolFailures++;
  }

  // Step 3: Tool Execution (Calculator)
  const s3Start = now();
  await delay(toggles.latencySpike ? 1000 : 50);
  stepCounter++;
  const mathMatch = prompt.match(/[\d+\-*/().]+/);
  if (toggles.toolFailure) {
    toolFailures++;
    trace.push({ stepId: stepCounter, stepName: 'Tool: Calculator', startTime: s3Start, endTime: now(), status: 'FAILURE', details: 'Simulated tool failure' });
  } else if (mathMatch) {
    const toolResult = executeTool(mathMatch[0]);
    trace.push({ stepId: stepCounter, stepName: 'Tool: Calculator', startTime: s3Start, endTime: now(), status: toolResult.success ? 'SUCCESS' : 'FAILURE', details: `Calc result: ${toolResult.result}` });
    if (!toolResult.success) toolFailures++;
  } else {
    trace.push({ stepId: stepCounter, stepName: 'Tool: Calculator', startTime: s3Start, endTime: now(), status: 'SUCCESS', details: 'No calculation needed' });
  }

  // Step 4: Memory Storage
  const s4Start = now();
  await delay(50);
  stepCounter++;
  if (toggles.memoryCorruption) {
    memViolations = 1;
    trace.push({ stepId: stepCounter, stepName: 'Memory Store', startTime: s4Start, endTime: now(), status: 'FAILURE', details: 'Memory corruption detected' });
  } else {
    trace.push({ stepId: stepCounter, stepName: 'Memory Store', startTime: s4Start, endTime: now(), status: 'SUCCESS', details: 'Context stored' });
  }

  // Step 5: Incident Scoring
  const s5Start = now();
  await delay(30);
  stepCounter++;
  const incidentScore = computeIncidentScore(toolFailures, excessSteps, memViolations);
  trace.push({ stepId: stepCounter, stepName: 'Incident Scoring', startTime: s5Start, endTime: now(), status: incidentScore.score > 0 ? 'WARNING' : 'SUCCESS', details: `Score: ${incidentScore.score} | ${incidentScore.severity}` });

  const totalLatency = Date.now() - executionStart;

  const agentResult: AgentResult = {
    sessionId: sid, userPrompt: prompt, result: aiResult, trace, incidentScore, totalLatency, timestamp: now(),
  };

  const memoryEntry: MemoryEntry = {
    sessionId: sid,
    context: JSON.stringify({ prompt, resultPreview: aiResult.substring(0, 100), traceSteps: trace.length }),
    integrityStatus: toggles.memoryCorruption ? 'Corrupted' : 'Valid',
    memorySize: new Blob([JSON.stringify({ prompt, result: aiResult })]).size,
    timestamp: now(),
  };

  return { agentResult, memoryEntry };
}
