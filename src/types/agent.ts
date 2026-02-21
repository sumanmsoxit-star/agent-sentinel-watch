export type Severity = 'NONE' | 'MINOR' | 'MAJOR' | 'CRITICAL';

export interface TraceStep {
  stepId: number;
  stepName: string;
  startTime: string;
  endTime: string;
  status: 'SUCCESS' | 'FAILURE' | 'WARNING';
  details?: string;
}

export interface IncidentScore {
  score: number;
  severity: Severity;
  toolFailures: number;
  excessReasoningSteps: number;
  memoryViolations: number;
}

export interface AgentResult {
  sessionId: string;
  userPrompt: string;
  result: string;
  trace: TraceStep[];
  incidentScore: IncidentScore;
  totalLatency: number;
  timestamp: string;
}

export interface MemoryEntry {
  sessionId: string;
  context: string;
  integrityStatus: 'Valid' | 'Corrupted';
  memorySize: number;
  timestamp: string;
}

export interface DashboardMetrics {
  totalRuns: number;
  totalIncidents: number;
  minorCount: number;
  majorCount: number;
  criticalCount: number;
  averageLatency: number;
  failureRate: number;
  scoreDistribution: { score: number; count: number }[];
  latencyOverhead: { run: number; latency: number }[];
}

export interface FailureToggles {
  toolFailure: boolean;
  reasoningLoop: boolean;
  memoryCorruption: boolean;
  latencySpike: boolean;
}

export interface User {
  username: string;
  sessionId: string;
  loginTime: string;
}
