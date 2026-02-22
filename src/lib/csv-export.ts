import type { AgentResult, MemoryEntry } from '@/types/agent';

function escapeCsv(value: string): string {
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function exportAgentRunsCsv(results: AgentResult[]): void {
  const headers = ['Session ID', 'Timestamp', 'Prompt', 'Result', 'Score', 'Severity', 'Tool Failures', 'Excess Steps', 'Memory Violations', 'Latency (ms)', 'Trace Steps'];
  const rows = results.map(r => [
    r.sessionId,
    r.timestamp,
    escapeCsv(r.userPrompt),
    escapeCsv(r.result.substring(0, 200)),
    String(r.incidentScore.score),
    r.incidentScore.severity,
    String(r.incidentScore.toolFailures),
    String(r.incidentScore.excessReasoningSteps),
    String(r.incidentScore.memoryViolations),
    String(r.totalLatency),
    String(r.trace.length),
  ]);

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  downloadCsv(csv, 'aaidc-agent-runs.csv');
}

export function exportMemoryEntriesCsv(entries: MemoryEntry[]): void {
  const headers = ['Session ID', 'Timestamp', 'Context', 'Integrity Status', 'Memory Size (B)'];
  const rows = entries.map(e => [
    e.sessionId,
    e.timestamp,
    escapeCsv(e.context.substring(0, 200)),
    e.integrityStatus,
    String(e.memorySize),
  ]);

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  downloadCsv(csv, 'aaidc-memory-entries.csv');
}

export function exportIncidentReportCsv(results: AgentResult[]): void {
  const incidents = results.filter(r => r.incidentScore.score > 0);
  const headers = ['Session ID', 'Timestamp', 'Severity', 'Score', 'Prompt', 'Tool Failures', 'Excess Steps', 'Memory Violations', 'Latency (ms)'];
  const rows = incidents.map(r => [
    r.sessionId,
    r.timestamp,
    r.incidentScore.severity,
    String(r.incidentScore.score),
    escapeCsv(r.userPrompt),
    String(r.incidentScore.toolFailures),
    String(r.incidentScore.excessReasoningSteps),
    String(r.incidentScore.memoryViolations),
    String(r.totalLatency),
  ]);

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  downloadCsv(csv, 'aaidc-incident-report.csv');
}

function downloadCsv(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
