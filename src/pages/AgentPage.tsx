import { useState } from 'react';
import { Play, Zap, Brain, HardDrive, Clock, ToggleLeft, ToggleRight, ListPlus, Loader2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import SeverityBadge from '@/components/SeverityBadge';
import StatusDot from '@/components/StatusDot';
import AppLayout from '@/components/AppLayout';
import { runAgent } from '@/lib/agent-engine';
import { addAgentResult, addMemoryEntry, getUser } from '@/lib/store';
import type { AgentResult, FailureToggles } from '@/types/agent';
import { toast } from 'sonner';

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
  const [batchMode, setBatchMode] = useState(false);
  const [batchPrompts, setBatchPrompts] = useState('');
  const [batchResults, setBatchResults] = useState<AgentResult[]>([]);
  const [batchRunning, setBatchRunning] = useState(false);
  const [batchProgress, setBatchProgress] = useState({ current: 0, total: 0 });
  const user = getUser();

  const handleRun = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    try {
      const { agentResult, memoryEntry } = await runAgent(prompt, toggles, user?.sessionId);
      addAgentResult(agentResult);
      addMemoryEntry(memoryEntry);
      setResult(agentResult);

      // Alert on critical incidents
      if (agentResult.incidentScore.severity === 'CRITICAL') {
        toast.error(`🚨 CRITICAL Incident Detected! Score: ${agentResult.incidentScore.score}`, {
          duration: 8000,
          description: `Session ${agentResult.sessionId} — Tool failures: ${agentResult.incidentScore.toolFailures}, Excess steps: ${agentResult.incidentScore.excessReasoningSteps}, Memory violations: ${agentResult.incidentScore.memoryViolations}`,
        });
      } else if (agentResult.incidentScore.severity === 'MAJOR') {
        toast.warning(`⚠️ MAJOR Incident — Score: ${agentResult.incidentScore.score}`, {
          duration: 5000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleBatchRun = async () => {
    const prompts = batchPrompts.split('\n').map(p => p.trim()).filter(p => p.length > 0);
    if (prompts.length === 0) return;
    setBatchRunning(true);
    setBatchResults([]);
    setBatchProgress({ current: 0, total: prompts.length });

    const results: AgentResult[] = [];
    for (let i = 0; i < prompts.length; i++) {
      setBatchProgress({ current: i + 1, total: prompts.length });
      try {
        const { agentResult, memoryEntry } = await runAgent(prompts[i], toggles, user?.sessionId);
        addAgentResult(agentResult);
        addMemoryEntry(memoryEntry);
        results.push(agentResult);

        if (agentResult.incidentScore.severity === 'CRITICAL') {
          toast.error(`🚨 CRITICAL on batch #${i + 1}: Score ${agentResult.incidentScore.score}`);
        }
      } catch {
        // continue batch on individual failure
      }
    }

    setBatchResults(results);
    setBatchRunning(false);
    toast.success(`Batch complete: ${results.length}/${prompts.length} runs finished`);
  };

  const toggleKey = (key: keyof FailureToggles) =>
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Agent Execution</h2>
            <p className="text-xs text-muted-foreground">Run tool-augmented LLM tasks with execution tracing</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setBatchMode(!batchMode)}
            className="gap-1.5 text-xs"
          >
            <ListPlus className="h-3.5 w-3.5" />
            {batchMode ? 'Single Mode' : 'Batch Mode'}
          </Button>
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

        {/* Single Mode Input */}
        {!batchMode && (
          <>
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
          </>
        )}

        {/* Batch Mode */}
        {batchMode && (
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Batch Prompts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground">Enter one prompt per line. Each will be executed sequentially with the current failure toggle settings.</p>
                <Textarea
                  value={batchPrompts}
                  onChange={e => setBatchPrompts(e.target.value)}
                  placeholder={`Calculate 25 * 4 + 10\nWhat is the speed of light?\nConvert 100°F to Celsius\nExplain Newton's second law`}
                  className="bg-card border-border font-mono text-sm min-h-[120px]"
                />
                <div className="flex items-center gap-3">
                  <Button
                    onClick={handleBatchRun}
                    disabled={batchRunning || !batchPrompts.trim()}
                    className="gap-2"
                  >
                    {batchRunning ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
                    {batchRunning ? `Running ${batchProgress.current}/${batchProgress.total}...` : 'Run Batch'}
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    {batchPrompts.split('\n').filter(p => p.trim()).length} prompts queued
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Batch Results Summary */}
            {batchResults.length > 0 && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Batch Results</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs w-10">#</TableHead>
                        <TableHead className="text-xs">Prompt</TableHead>
                        <TableHead className="text-xs w-16">Score</TableHead>
                        <TableHead className="text-xs w-24">Severity</TableHead>
                        <TableHead className="text-xs w-20">Latency</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {batchResults.map((r, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-mono text-xs">{i + 1}</TableCell>
                          <TableCell className="text-xs truncate max-w-xs">{r.userPrompt}</TableCell>
                          <TableCell className="font-mono text-xs">{r.incidentScore.score}</TableCell>
                          <TableCell><SeverityBadge severity={r.incidentScore.severity} /></TableCell>
                          <TableCell className="font-mono text-xs text-muted-foreground">{r.totalLatency}ms</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
