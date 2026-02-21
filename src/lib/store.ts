import type { AgentResult, MemoryEntry, DashboardMetrics, User } from '@/types/agent';

// In-memory session store (simulates Redis)
let agentResults: AgentResult[] = [];
let memoryEntries: MemoryEntry[] = [];
let currentUser: User | null = null;

export function setUser(user: User | null) { currentUser = user; }
export function getUser(): User | null { return currentUser; }

export function addAgentResult(result: AgentResult) { agentResults.push(result); }
export function getAgentResults(): AgentResult[] { return [...agentResults]; }

export function addMemoryEntry(entry: MemoryEntry) { memoryEntries.push(entry); }
export function getMemoryEntries(): MemoryEntry[] { return [...memoryEntries]; }

export function getDashboardMetrics(): DashboardMetrics {
  const total = agentResults.length;
  const incidents = agentResults.filter(r => r.incidentScore.score > 0);
  const minor = agentResults.filter(r => r.incidentScore.severity === 'MINOR').length;
  const major = agentResults.filter(r => r.incidentScore.severity === 'MAJOR').length;
  const critical = agentResults.filter(r => r.incidentScore.severity === 'CRITICAL').length;
  const avgLatency = total > 0 ? agentResults.reduce((s, r) => s + r.totalLatency, 0) / total : 0;
  const failureRate = total > 0 ? (incidents.length / total) * 100 : 0;

  // Score distribution buckets
  const buckets: Record<number, number> = {};
  agentResults.forEach(r => {
    const bucket = Math.floor(r.incidentScore.score / 10) * 10;
    buckets[bucket] = (buckets[bucket] || 0) + 1;
  });
  const scoreDistribution = Object.entries(buckets).map(([score, count]) => ({ score: Number(score), count })).sort((a, b) => a.score - b.score);

  const latencyOverhead = agentResults.map((r, i) => ({ run: i + 1, latency: r.totalLatency }));

  return { totalRuns: total, totalIncidents: incidents.length, minorCount: minor, majorCount: major, criticalCount: critical, averageLatency: Math.round(avgLatency), failureRate: Math.round(failureRate * 10) / 10, scoreDistribution, latencyOverhead };
}

export function clearStore() {
  agentResults = [];
  memoryEntries = [];
  currentUser = null;
}
