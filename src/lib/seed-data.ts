import type { AgentResult, MemoryEntry } from '@/types/agent';
import { addAgentResult, addMemoryEntry } from '@/lib/store';

function ts(minutesAgo: number): string {
  return new Date(Date.now() - minutesAgo * 60000).toISOString();
}

function traceTime(baseMinutesAgo: number, stepOffsetSec: number): string {
  return new Date(Date.now() - baseMinutesAgo * 60000 + stepOffsetSec * 1000).toISOString();
}

const sampleRuns: { result: AgentResult; memory: MemoryEntry }[] = [
  // --- NONE severity (score 0) ---
  {
    result: {
      sessionId: 'demo-001',
      userPrompt: 'Calculate 25 * 4 + 10',
      result: 'The result of 25 × 4 + 10 is 110.',
      trace: [
        { stepId: 1, stepName: 'Parse Input', startTime: traceTime(30, 0), endTime: traceTime(30, 1), status: 'SUCCESS', details: 'Identified arithmetic expression' },
        { stepId: 2, stepName: 'Tool: Calculator', startTime: traceTime(30, 1), endTime: traceTime(30, 2), status: 'SUCCESS', details: 'Computed 25*4+10 = 110' },
        { stepId: 3, stepName: 'Format Response', startTime: traceTime(30, 2), endTime: traceTime(30, 3), status: 'SUCCESS' },
      ],
      incidentScore: { score: 0, severity: 'NONE', toolFailures: 0, excessReasoningSteps: 0, memoryViolations: 0 },
      totalLatency: 320,
      timestamp: ts(30),
    },
    memory: { sessionId: 'demo-001', context: 'Arithmetic calculation: 25*4+10=110', integrityStatus: 'Valid', memorySize: 48, timestamp: ts(30) },
  },
  {
    result: {
      sessionId: 'demo-002',
      userPrompt: 'What is 100 / 5?',
      result: '100 ÷ 5 = 20.',
      trace: [
        { stepId: 1, stepName: 'Parse Input', startTime: traceTime(28, 0), endTime: traceTime(28, 1), status: 'SUCCESS' },
        { stepId: 2, stepName: 'Tool: Calculator', startTime: traceTime(28, 1), endTime: traceTime(28, 2), status: 'SUCCESS', details: '100/5 = 20' },
        { stepId: 3, stepName: 'Format Response', startTime: traceTime(28, 2), endTime: traceTime(28, 3), status: 'SUCCESS' },
      ],
      incidentScore: { score: 0, severity: 'NONE', toolFailures: 0, excessReasoningSteps: 0, memoryViolations: 0 },
      totalLatency: 280,
      timestamp: ts(28),
    },
    memory: { sessionId: 'demo-002', context: 'Division: 100/5=20', integrityStatus: 'Valid', memorySize: 32, timestamp: ts(28) },
  },
  {
    result: {
      sessionId: 'demo-003',
      userPrompt: 'Convert 72°F to Celsius',
      result: '72°F is approximately 22.22°C.',
      trace: [
        { stepId: 1, stepName: 'Parse Input', startTime: traceTime(25, 0), endTime: traceTime(25, 1), status: 'SUCCESS', details: 'Temperature conversion request' },
        { stepId: 2, stepName: 'Tool: Calculator', startTime: traceTime(25, 1), endTime: traceTime(25, 2), status: 'SUCCESS', details: '(72-32)*5/9 = 22.22' },
        { stepId: 3, stepName: 'Format Response', startTime: traceTime(25, 2), endTime: traceTime(25, 3), status: 'SUCCESS' },
      ],
      incidentScore: { score: 0, severity: 'NONE', toolFailures: 0, excessReasoningSteps: 0, memoryViolations: 0 },
      totalLatency: 305,
      timestamp: ts(25),
    },
    memory: { sessionId: 'demo-003', context: 'Temp conversion: 72F=22.22C', integrityStatus: 'Valid', memorySize: 40, timestamp: ts(25) },
  },

  // --- MINOR severity (score 1-20) ---
  {
    result: {
      sessionId: 'demo-004',
      userPrompt: 'Calculate sqrt(144) + log(100)',
      result: 'sqrt(144) = 12, log(100) = 2. Total = 14.',
      trace: [
        { stepId: 1, stepName: 'Parse Input', startTime: traceTime(22, 0), endTime: traceTime(22, 1), status: 'SUCCESS' },
        { stepId: 2, stepName: 'Tool: Calculator', startTime: traceTime(22, 1), endTime: traceTime(22, 3), status: 'FAILURE', details: 'Timeout on first attempt' },
        { stepId: 3, stepName: 'Tool: Calculator (retry)', startTime: traceTime(22, 3), endTime: traceTime(22, 5), status: 'SUCCESS', details: 'Computed on retry' },
        { stepId: 4, stepName: 'Format Response', startTime: traceTime(22, 5), endTime: traceTime(22, 6), status: 'SUCCESS' },
      ],
      incidentScore: { score: 10, severity: 'MINOR', toolFailures: 1, excessReasoningSteps: 0, memoryViolations: 0 },
      totalLatency: 620,
      timestamp: ts(22),
    },
    memory: { sessionId: 'demo-004', context: 'Math: sqrt(144)+log(100)=14', integrityStatus: 'Valid', memorySize: 45, timestamp: ts(22) },
  },
  {
    result: {
      sessionId: 'demo-005',
      userPrompt: 'Explain Newton\'s second law and compute F for m=5kg a=3m/s²',
      result: 'F = ma = 5 × 3 = 15 N. Newton\'s second law states force equals mass times acceleration.',
      trace: [
        { stepId: 1, stepName: 'Parse Input', startTime: traceTime(20, 0), endTime: traceTime(20, 1), status: 'SUCCESS' },
        { stepId: 2, stepName: 'Reasoning Step 1', startTime: traceTime(20, 1), endTime: traceTime(20, 3), status: 'SUCCESS', details: 'Identified physics concept' },
        { stepId: 3, stepName: 'Reasoning Step 2', startTime: traceTime(20, 3), endTime: traceTime(20, 5), status: 'WARNING', details: 'Unnecessary re-evaluation of formula' },
        { stepId: 4, stepName: 'Tool: Calculator', startTime: traceTime(20, 5), endTime: traceTime(20, 6), status: 'SUCCESS', details: '5*3=15' },
        { stepId: 5, stepName: 'Format Response', startTime: traceTime(20, 6), endTime: traceTime(20, 7), status: 'SUCCESS' },
      ],
      incidentScore: { score: 15, severity: 'MINOR', toolFailures: 0, excessReasoningSteps: 1, memoryViolations: 0 },
      totalLatency: 710,
      timestamp: ts(20),
    },
    memory: { sessionId: 'demo-005', context: 'Physics: F=ma=15N', integrityStatus: 'Valid', memorySize: 62, timestamp: ts(20) },
  },

  // --- MAJOR severity (score 21-50) ---
  {
    result: {
      sessionId: 'demo-006',
      userPrompt: 'Solve the quadratic x²-5x+6=0 step by step',
      result: 'x = 2 or x = 3 (factored as (x-2)(x-3)=0).',
      trace: [
        { stepId: 1, stepName: 'Parse Input', startTime: traceTime(18, 0), endTime: traceTime(18, 1), status: 'SUCCESS' },
        { stepId: 2, stepName: 'Reasoning Step 1', startTime: traceTime(18, 1), endTime: traceTime(18, 3), status: 'SUCCESS' },
        { stepId: 3, stepName: 'Tool: Calculator', startTime: traceTime(18, 3), endTime: traceTime(18, 4), status: 'FAILURE', details: 'Parse error on expression' },
        { stepId: 4, stepName: 'Tool: Calculator (retry)', startTime: traceTime(18, 4), endTime: traceTime(18, 5), status: 'FAILURE', details: 'Second failure' },
        { stepId: 5, stepName: 'Reasoning Step 2', startTime: traceTime(18, 5), endTime: traceTime(18, 7), status: 'WARNING', details: 'Fell back to manual computation' },
        { stepId: 6, stepName: 'Memory Write', startTime: traceTime(18, 7), endTime: traceTime(18, 8), status: 'FAILURE', details: 'Context overwrite detected' },
        { stepId: 7, stepName: 'Format Response', startTime: traceTime(18, 8), endTime: traceTime(18, 9), status: 'SUCCESS' },
      ],
      incidentScore: { score: 40, severity: 'MAJOR', toolFailures: 2, excessReasoningSteps: 0, memoryViolations: 1 },
      totalLatency: 920,
      timestamp: ts(18),
    },
    memory: { sessionId: 'demo-006', context: 'Quadratic solve corrupted ctx', integrityStatus: 'Corrupted', memorySize: 128, timestamp: ts(18) },
  },
  {
    result: {
      sessionId: 'demo-007',
      userPrompt: 'Summarize and compare GDP of India and China for 2023',
      result: 'India GDP ~$3.7T, China GDP ~$17.8T. China\'s GDP is approximately 4.8x India\'s.',
      trace: [
        { stepId: 1, stepName: 'Parse Input', startTime: traceTime(15, 0), endTime: traceTime(15, 1), status: 'SUCCESS' },
        { stepId: 2, stepName: 'Reasoning Step 1', startTime: traceTime(15, 1), endTime: traceTime(15, 3), status: 'SUCCESS' },
        { stepId: 3, stepName: 'Reasoning Step 2', startTime: traceTime(15, 3), endTime: traceTime(15, 5), status: 'WARNING', details: 'Redundant data retrieval loop' },
        { stepId: 4, stepName: 'Reasoning Step 3', startTime: traceTime(15, 5), endTime: traceTime(15, 7), status: 'WARNING', details: 'Repeated comparison logic' },
        { stepId: 5, stepName: 'Tool: Calculator', startTime: traceTime(15, 7), endTime: traceTime(15, 8), status: 'FAILURE', details: 'Ratio calc failed' },
        { stepId: 6, stepName: 'Format Response', startTime: traceTime(15, 8), endTime: traceTime(15, 9), status: 'SUCCESS' },
      ],
      incidentScore: { score: 40, severity: 'MAJOR', toolFailures: 1, excessReasoningSteps: 2, memoryViolations: 0 },
      totalLatency: 980,
      timestamp: ts(15),
    },
    memory: { sessionId: 'demo-007', context: 'GDP comparison India vs China', integrityStatus: 'Valid', memorySize: 85, timestamp: ts(15) },
  },

  // --- CRITICAL severity (score >50) ---
  {
    result: {
      sessionId: 'demo-008',
      userPrompt: 'Analyze multi-step financial portfolio rebalancing for 10 assets',
      result: 'Partial result: Rebalancing computed for 7/10 assets before failure cascade.',
      trace: [
        { stepId: 1, stepName: 'Parse Input', startTime: traceTime(12, 0), endTime: traceTime(12, 1), status: 'SUCCESS' },
        { stepId: 2, stepName: 'Reasoning Step 1', startTime: traceTime(12, 1), endTime: traceTime(12, 3), status: 'SUCCESS' },
        { stepId: 3, stepName: 'Tool: Calculator', startTime: traceTime(12, 3), endTime: traceTime(12, 4), status: 'FAILURE', details: 'Overflow on large values' },
        { stepId: 4, stepName: 'Tool: Calculator (retry)', startTime: traceTime(12, 4), endTime: traceTime(12, 5), status: 'FAILURE', details: 'Persistent overflow' },
        { stepId: 5, stepName: 'Tool: Calculator (retry 2)', startTime: traceTime(12, 5), endTime: traceTime(12, 6), status: 'FAILURE', details: 'Third consecutive failure' },
        { stepId: 6, stepName: 'Reasoning Step 2', startTime: traceTime(12, 6), endTime: traceTime(12, 8), status: 'WARNING', details: 'Looping on fallback logic' },
        { stepId: 7, stepName: 'Reasoning Step 3', startTime: traceTime(12, 8), endTime: traceTime(12, 10), status: 'WARNING', details: 'Re-entered same reasoning path' },
        { stepId: 8, stepName: 'Memory Write', startTime: traceTime(12, 10), endTime: traceTime(12, 11), status: 'FAILURE', details: 'Memory integrity check failed' },
        { stepId: 9, stepName: 'Format Response', startTime: traceTime(12, 11), endTime: traceTime(12, 13), status: 'WARNING', details: 'Partial output generated' },
      ],
      incidentScore: { score: 80, severity: 'CRITICAL', toolFailures: 3, excessReasoningSteps: 2, memoryViolations: 1 },
      totalLatency: 1340,
      timestamp: ts(12),
    },
    memory: { sessionId: 'demo-008', context: 'Portfolio rebalance CORRUPTED', integrityStatus: 'Corrupted', memorySize: 256, timestamp: ts(12) },
  },
  {
    result: {
      sessionId: 'demo-009',
      userPrompt: 'Run recursive Fibonacci(50) with memoization check',
      result: 'Fibonacci(50) computation timed out after exceeding reasoning depth.',
      trace: [
        { stepId: 1, stepName: 'Parse Input', startTime: traceTime(8, 0), endTime: traceTime(8, 1), status: 'SUCCESS' },
        { stepId: 2, stepName: 'Reasoning Step 1', startTime: traceTime(8, 1), endTime: traceTime(8, 3), status: 'SUCCESS' },
        { stepId: 3, stepName: 'Reasoning Step 2', startTime: traceTime(8, 3), endTime: traceTime(8, 6), status: 'WARNING', details: 'Recursive depth exceeded' },
        { stepId: 4, stepName: 'Reasoning Step 3', startTime: traceTime(8, 6), endTime: traceTime(8, 9), status: 'WARNING', details: 'Re-entered recursion loop' },
        { stepId: 5, stepName: 'Reasoning Step 4', startTime: traceTime(8, 9), endTime: traceTime(8, 12), status: 'FAILURE', details: 'Stack overflow in reasoning' },
        { stepId: 6, stepName: 'Memory Write', startTime: traceTime(8, 12), endTime: traceTime(8, 13), status: 'FAILURE', details: 'Corrupted memo table' },
        { stepId: 7, stepName: 'Memory Write (retry)', startTime: traceTime(8, 13), endTime: traceTime(8, 14), status: 'FAILURE', details: 'Second corruption event' },
        { stepId: 8, stepName: 'Format Response', startTime: traceTime(8, 14), endTime: traceTime(8, 16), status: 'WARNING', details: 'Timeout forced output' },
      ],
      incidentScore: { score: 95, severity: 'CRITICAL', toolFailures: 0, excessReasoningSteps: 4, memoryViolations: 2 },
      totalLatency: 1620,
      timestamp: ts(8),
    },
    memory: { sessionId: 'demo-009', context: 'CORRUPTED: fib memo table destroyed', integrityStatus: 'Corrupted', memorySize: 512, timestamp: ts(8) },
  },
  {
    result: {
      sessionId: 'demo-010',
      userPrompt: 'Calculate compound interest for 20 years with variable rates',
      result: 'Compound interest: ₹1,00,000 → ₹3,21,942 at avg 6% over 20 years.',
      trace: [
        { stepId: 1, stepName: 'Parse Input', startTime: traceTime(5, 0), endTime: traceTime(5, 1), status: 'SUCCESS' },
        { stepId: 2, stepName: 'Tool: Calculator', startTime: traceTime(5, 1), endTime: traceTime(5, 2), status: 'SUCCESS', details: 'Year 1-10 computed' },
        { stepId: 3, stepName: 'Tool: Calculator', startTime: traceTime(5, 2), endTime: traceTime(5, 3), status: 'SUCCESS', details: 'Year 11-20 computed' },
        { stepId: 4, stepName: 'Format Response', startTime: traceTime(5, 3), endTime: traceTime(5, 4), status: 'SUCCESS' },
      ],
      incidentScore: { score: 0, severity: 'NONE', toolFailures: 0, excessReasoningSteps: 0, memoryViolations: 0 },
      totalLatency: 410,
      timestamp: ts(5),
    },
    memory: { sessionId: 'demo-010', context: 'Compound interest 20yr calc', integrityStatus: 'Valid', memorySize: 55, timestamp: ts(5) },
  },
];

export function loadSampleData(): number {
  sampleRuns.forEach(({ result, memory }) => {
    addAgentResult(result);
    addMemoryEntry(memory);
  });
  return sampleRuns.length;
}
