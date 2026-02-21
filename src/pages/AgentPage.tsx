import { useState } from 'react';
import { Play, Zap, Brain, HardDrive, Clock, ToggleLeft, ToggleRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import SeverityBadge from '@/components/SeverityBadge';
import StatusDot from '@/components/StatusDot';
import AppLayout from '@/components/AppLayout';
import { runAgent } from '@/lib/agent-engine';
import { addAgentResult, addMemoryEntry, getUser } from '@/lib/store';
import type { AgentResult, FailureToggles } from '@/types/agent';

const toggleItems: { key: keyof FailureToggles; label: string; icon: React.ElementType }[] = [
  { key: 'toolFailure', label: 'Tool Failure', icon: Zap },
  { key: 'reasoningLoop', label: 'Reasoning Loop', icon: Brain },
  { key: 'memoryCorruption', label: 'Memory Corruption', icon: HardDrive },
  { key: 'latencySpike', label: 'Latency Spike', icon: Clock },
];

export default function AgentPage() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AgentResult | null>(null);
  const [toggles, setToggles] = useState<FailureToggles>({
    toolFailure: false,
    reasoningLoop: false,
    memoryCorruption: false,
    latencySpike: false,
  });
  const user = getUser();

  const handleRun = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    try {
      const { agentResult, memoryEntry } = await runAgent(prompt, toggles, user?.sessionId);
      addAgentResult(agentResult);
      addMemoryEntry(memoryEntry);
      setResult(agentResult);
    } finally {
      setLoading(false);
    }
  };

  const toggleKey = (key: keyof FailureToggles) =>
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <h2 className="text-lg font-semibold">Agent Execution</h2>
          <p className="text-xs text-muted-foreground">Run tool-augmented LLM tasks with execution tracing</p>
        </div>

        {/* Failure Simulation Toggles */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Failure Simulation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {toggleItems.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => toggleKey(key)}
                  className={`flex items-center gap-2 p-2.5 rounded-md border text-xs font-medium transition-colors ${
                    toggles[key]
                      ? 'border-severity-critical/30 bg-severity-critical/10 severity-critical'
                      : 'border-border bg-card text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                  {toggles[key] ? <ToggleRight className="h-3.5 w-3.5 ml-auto" /> : <ToggleLeft className="h-3.5 w-3.5 ml-auto" />}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Prompt Input */}
        <div className="flex gap-2">
          <Input
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleRun()}
            placeholder="Enter a prompt (e.g., 'Calculate 25 * 4 + 10')"
            className="bg-card border-border font-mono text-sm"
          />
          <Button onClick={handleRun} disabled={loading || !prompt.trim()} className="gap-2 shrink-0">
            <Play className="h-3.5 w-3.5" />
            {loading ? 'Running...' : 'Run Agent'}
          </Button>
        </div>

        {/* Result */}
        {result && (
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm">Result</CardTitle>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground font-mono">{result.totalLatency}ms</span>
                    <SeverityBadge severity={result.incidentScore.severity} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-mono bg-muted/50 p-3 rounded-md">{result.result}</p>
                <div className="flex gap-6 mt-3 text-xs text-muted-foreground">
                  <span>Score: <strong className="text-foreground">{result.incidentScore.score}</strong></span>
                  <span>Tool Failures: <strong className="text-foreground">{result.incidentScore.toolFailures}</strong></span>
                  <span>Excess Steps: <strong className="text-foreground">{result.incidentScore.excessReasoningSteps}</strong></span>
                  <span>Mem Violations: <strong className="text-foreground">{result.incidentScore.memoryViolations}</strong></span>
                </div>
              </CardContent>
            </Card>

            {/* Execution Trace */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Execution Trace</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs w-16">Step</TableHead>
                      <TableHead className="text-xs">Name</TableHead>
                      <TableHead className="text-xs">Start</TableHead>
                      <TableHead className="text-xs">End</TableHead>
                      <TableHead className="text-xs w-20">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {result.trace.map(step => (
                      <TableRow key={step.stepId}>
                        <TableCell className="font-mono text-xs">{step.stepId}</TableCell>
                        <TableCell className="text-xs">
                          <div>{step.stepName}</div>
                          {step.details && <div className="text-muted-foreground text-[10px] mt-0.5">{step.details}</div>}
                        </TableCell>
                        <TableCell className="font-mono text-[10px] text-muted-foreground">{new Date(step.startTime).toLocaleTimeString()}</TableCell>
                        <TableCell className="font-mono text-[10px] text-muted-foreground">{new Date(step.endTime).toLocaleTimeString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1.5">
                            <StatusDot status={step.status} />
                            <span className="text-[10px] font-mono">{step.status}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
