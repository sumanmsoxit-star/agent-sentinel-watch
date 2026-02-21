import type { TraceStep, IncidentScore, AgentResult, MemoryEntry, Severity, FailureToggles } from '@/types/agent';

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
  return {
    score,
    severity: classifySeverity(score),
    toolFailures,
    excessReasoningSteps: excessSteps,
    memoryViolations: memViolations,
  };
}

// Simple calculator tool
function executeTool(expression: string): { result: string; success: boolean } {
  try {
    // Safe math evaluation
    const sanitized = expression.replace(/[^0-9+\-*/().%\s]/g, '');
    if (!sanitized.trim()) return { result: 'No valid expression found', success: true };
    const result = Function(`"use strict"; return (${sanitized})`)();
    return { result: String(result), success: true };
  } catch {
    return { result: 'Calculation error', success: false };
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
  await delay(toggles.latencySpike ? 1500 : 200);
  stepCounter++;
  trace.push({
    stepId: stepCounter,
    stepName: 'Parse User Input',
    startTime: s1Start,
    endTime: now(),
    status: 'SUCCESS',
    details: `Parsed prompt: "${prompt.substring(0, 50)}..."`,
  });

  // Step 2: Reasoning
  const s2Start = now();
  const reasoningSteps = toggles.reasoningLoop ? 5 : 1;
  await delay(toggles.latencySpike ? 800 : 300);
  stepCounter++;
  if (toggles.reasoningLoop) {
    excessSteps = 4; // 4 excess steps beyond the expected 1
    trace.push({
      stepId: stepCounter,
      stepName: 'Agent Reasoning',
      startTime: s2Start,
      endTime: now(),
      status: 'WARNING',
      details: `Excessive reasoning detected: ${reasoningSteps} iterations`,
    });
  } else {
    trace.push({
      stepId: stepCounter,
      stepName: 'Agent Reasoning',
      startTime: s2Start,
      endTime: now(),
      status: 'SUCCESS',
      details: 'Reasoning completed in 1 iteration',
    });
  }

  // Step 3: Tool Execution (Calculator)
  const s3Start = now();
  await delay(toggles.latencySpike ? 1000 : 250);
  stepCounter++;
  const mathMatch = prompt.match(/[\d+\-*/().]+/);
  if (toggles.toolFailure) {
    toolFailures = 1;
    trace.push({
      stepId: stepCounter,
      stepName: 'Tool: Calculator',
      startTime: s3Start,
      endTime: now(),
      status: 'FAILURE',
      details: 'Tool execution failed: simulated failure',
    });
  } else {
    const toolResult = mathMatch ? executeTool(mathMatch[0]) : { result: 'No calculation needed', success: true };
    trace.push({
      stepId: stepCounter,
      stepName: 'Tool: Calculator',
      startTime: s3Start,
      endTime: now(),
      status: toolResult.success ? 'SUCCESS' : 'FAILURE',
      details: `Result: ${toolResult.result}`,
    });
    if (!toolResult.success) toolFailures = 1;
  }

  // Step 4: Memory Storage
  const s4Start = now();
  await delay(150);
  stepCounter++;
  if (toggles.memoryCorruption) {
    memViolations = 1;
    trace.push({
      stepId: stepCounter,
      stepName: 'Memory Store',
      startTime: s4Start,
      endTime: now(),
      status: 'FAILURE',
      details: 'Memory integrity check failed: corruption detected',
    });
  } else {
    trace.push({
      stepId: stepCounter,
      stepName: 'Memory Store',
      startTime: s4Start,
      endTime: now(),
      status: 'SUCCESS',
      details: 'Context stored successfully',
    });
  }

  // Step 5: Compute Incident Score
  const s5Start = now();
  await delay(100);
  stepCounter++;
  const incidentScore = computeIncidentScore(toolFailures, excessSteps, memViolations);
  trace.push({
    stepId: stepCounter,
    stepName: 'Incident Scoring',
    startTime: s5Start,
    endTime: now(),
    status: incidentScore.score > 0 ? 'WARNING' : 'SUCCESS',
    details: `Score: ${incidentScore.score} | Severity: ${incidentScore.severity}`,
  });

  const totalLatency = Date.now() - executionStart;

  // Generate response
  let result = `Agent processed your query: "${prompt}".`;
  if (mathMatch && !toggles.toolFailure) {
    const calc = executeTool(mathMatch[0]);
    result += ` Calculator result: ${calc.result}.`;
  }
  if (incidentScore.score > 0) {
    result += ` [${incidentScore.severity} incident detected with score ${incidentScore.score}]`;
  }

  const agentResult: AgentResult = {
    sessionId: sid,
    userPrompt: prompt,
    result,
    trace,
    incidentScore,
    totalLatency,
    timestamp: now(),
  };

  const memoryEntry: MemoryEntry = {
    sessionId: sid,
    context: JSON.stringify({ prompt, result: result.substring(0, 100), trace: trace.length }),
    integrityStatus: toggles.memoryCorruption ? 'Corrupted' : 'Valid',
    memorySize: new Blob([JSON.stringify({ prompt, result })]).size,
    timestamp: now(),
  };

  return { agentResult, memoryEntry };
}
