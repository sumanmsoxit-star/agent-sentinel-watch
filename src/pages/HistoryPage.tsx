import { useState, useMemo } from 'react';
import { History, Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SeverityBadge from '@/components/SeverityBadge';
import StatusDot from '@/components/StatusDot';
import AppLayout from '@/components/AppLayout';
import { getAgentResults } from '@/lib/store';
import type { AgentResult, Severity } from '@/types/agent';

export default function HistoryPage() {
  const allResults = getAgentResults();
  const [search, setSearch] = useState('');
  const [severityFilter, setSeverityFilter] = useState<string>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const filtered = useMemo(() => {
    let results = [...allResults];

    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(r =>
        r.userPrompt.toLowerCase().includes(q) ||
        r.sessionId.toLowerCase().includes(q) ||
        r.result.toLowerCase().includes(q)
      );
    }

    if (severityFilter !== 'ALL') {
      results = results.filter(r => r.incidentScore.severity === severityFilter);
    }

    results.sort((a, b) => {
      const diff = new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      return sortOrder === 'newest' ? diff : -diff;
    });

    return results;
  }, [allResults, search, severityFilter, sortOrder]);

  return (
    <AppLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div>
          <h2 className="text-lg font-semibold">Run History</h2>
          <p className="text-xs text-muted-foreground">Browse and filter all past agent execution runs</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by prompt, session ID, or result..."
              className="pl-9 bg-card border-border text-sm"
            />
          </div>
          <Select value={severityFilter} onValueChange={setSeverityFilter}>
            <SelectTrigger className="w-36 bg-card border-border text-sm">
              <Filter className="h-3.5 w-3.5 mr-1.5" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Severity</SelectItem>
              <SelectItem value="NONE">NONE</SelectItem>
              <SelectItem value="MINOR">MINOR</SelectItem>
              <SelectItem value="MAJOR">MAJOR</SelectItem>
              <SelectItem value="CRITICAL">CRITICAL</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSortOrder(s => s === 'newest' ? 'oldest' : 'newest')}
            className="gap-1.5 text-xs"
          >
            {sortOrder === 'newest' ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronUp className="h-3.5 w-3.5" />}
            {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
          </Button>
        </div>

        {/* Stats */}
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>Showing <strong className="text-foreground">{filtered.length}</strong> of {allResults.length} runs</span>
        </div>

        {filtered.length > 0 ? (
          <div className="space-y-2">
            {filtered.map(run => (
              <RunCard
                key={run.sessionId + run.timestamp}
                run={run}
                expanded={expandedId === run.sessionId + run.timestamp}
                onToggle={() => setExpandedId(prev => prev === run.sessionId + run.timestamp ? null : run.sessionId + run.timestamp)}
              />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <History className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                {allResults.length === 0 ? 'No runs yet. Execute agent tasks to see history.' : 'No runs match your filters.'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}

function RunCard({ run, expanded, onToggle }: { run: AgentResult; expanded: boolean; onToggle: () => void }) {
  return (
    <Card className="overflow-hidden">
      <button onClick={onToggle} className="w-full text-left">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{run.userPrompt}</p>
              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                <span className="font-mono">{run.sessionId}</span>
                <span>·</span>
                <span>{new Date(run.timestamp).toLocaleString()}</span>
                <span>·</span>
                <span>{run.totalLatency}ms</span>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono text-muted-foreground">Score: {run.incidentScore.score}</span>
              <SeverityBadge severity={run.incidentScore.severity} />
              {expanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
            </div>
          </div>
        </CardContent>
      </button>

      {expanded && (
        <div className="border-t border-border">
          <CardContent className="p-4 space-y-4">
            {/* Result */}
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">Result</p>
              <p className="text-sm font-mono bg-muted/50 p-3 rounded-md">{run.result}</p>
            </div>

            {/* Metrics */}
            <div className="flex gap-6 text-xs text-muted-foreground">
              <span>Tool Failures: <strong className="text-foreground">{run.incidentScore.toolFailures}</strong></span>
              <span>Excess Steps: <strong className="text-foreground">{run.incidentScore.excessReasoningSteps}</strong></span>
              <span>Mem Violations: <strong className="text-foreground">{run.incidentScore.memoryViolations}</strong></span>
            </div>

            {/* Trace */}
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">Execution Trace</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs w-12">Step</TableHead>
                    <TableHead className="text-xs">Name</TableHead>
                    <TableHead className="text-xs w-20">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {run.trace.map(step => (
                    <TableRow key={step.stepId}>
                      <TableCell className="font-mono text-xs">{step.stepId}</TableCell>
                      <TableCell className="text-xs">
                        <div>{step.stepName}</div>
                        {step.details && <div className="text-muted-foreground text-[10px]">{step.details}</div>}
                      </TableCell>
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
            </div>
          </CardContent>
        </div>
      )}
    </Card>
  );
}
