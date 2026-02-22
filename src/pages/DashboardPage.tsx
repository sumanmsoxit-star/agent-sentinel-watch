import { useMemo, useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, AlertTriangle, Clock, TrendingUp, Database, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import AppLayout from '@/components/AppLayout';
import { getDashboardMetrics, getAgentResults, getMemoryEntries } from '@/lib/store';
import { loadSampleData } from '@/lib/seed-data';
import { exportAgentRunsCsv, exportMemoryEntriesCsv, exportIncidentReportCsv } from '@/lib/csv-export';
import { toast } from 'sonner';

const SEVERITY_COLORS = [
  'hsl(142, 71%, 45%)',
  'hsl(48, 96%, 53%)',
  'hsl(25, 95%, 53%)',
  'hsl(0, 72%, 51%)',
];

function MetricCard({ label, value, sub, icon: Icon }: { label: string; value: string | number; sub?: string; icon: React.ElementType }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
            {sub && <p className="text-[10px] text-muted-foreground mt-0.5">{sub}</p>}
          </div>
          <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
            <Icon className="h-4 w-4 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  const [refresh, setRefresh] = useState(0);
  const metrics = useMemo(() => getDashboardMetrics(), [refresh]);
  const hasData = metrics.totalRuns > 0;

  const severityPieData = useMemo(() => {
    const none = metrics.totalRuns - metrics.totalIncidents;
    return [
      { name: 'NONE', value: none },
      { name: 'MINOR', value: metrics.minorCount },
      { name: 'MAJOR', value: metrics.majorCount },
      { name: 'CRITICAL', value: metrics.criticalCount },
    ].filter(d => d.value > 0);
  }, [metrics]);

  const handleLoadSample = () => {
    const count = loadSampleData();
    setRefresh(r => r + 1);
    toast.success(`Loaded ${count} sample agent runs across all severity levels`);
  };

  const handleExport = (type: 'runs' | 'memory' | 'incidents') => {
    const results = getAgentResults();
    const memory = getMemoryEntries();
    if (results.length === 0) {
      toast.error('No data to export');
      return;
    }
    if (type === 'runs') exportAgentRunsCsv(results);
    else if (type === 'memory') exportMemoryEntriesCsv(memory);
    else exportIncidentReportCsv(results);
    toast.success(`Exported ${type} data as CSV`);
  };

  return (
    <AppLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Incident Dashboard</h2>
            <p className="text-xs text-muted-foreground">Aggregated metrics across all agent runs</p>
          </div>
          {hasData && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                  <Download className="h-3.5 w-3.5" />
                  Export CSV
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleExport('runs')}>All Agent Runs</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('incidents')}>Incident Report</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('memory')}>Memory Entries</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard label="Total Runs" value={metrics.totalRuns} icon={Activity} />
          <MetricCard label="Incidents" value={metrics.totalIncidents} sub={`${metrics.minorCount} minor · ${metrics.majorCount} major · ${metrics.criticalCount} critical`} icon={AlertTriangle} />
          <MetricCard label="Avg Latency" value={`${metrics.averageLatency}ms`} icon={Clock} />
          <MetricCard label="Failure Rate" value={`${metrics.failureRate}%`} icon={TrendingUp} />
        </div>

        {hasData ? (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Incident Score Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={metrics.scoreDistribution}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="score" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
                      <YAxis tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
                      <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 6, fontSize: 12 }} />
                      <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Severity Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                      <Pie data={severityPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name, value }) => `${name}: ${value}`}>
                        {severityPieData.map((entry, i) => {
                          const colorIdx = entry.name === 'NONE' ? 0 : entry.name === 'MINOR' ? 1 : entry.name === 'MAJOR' ? 2 : 3;
                          return <Cell key={i} fill={SEVERITY_COLORS[colorIdx]} />;
                        })}
                      </Pie>
                      <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 6, fontSize: 12 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Latency Overhead</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={metrics.latencyOverhead}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="run" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} label={{ value: 'Run #', position: 'insideBottom', offset: -2, fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
                    <YAxis tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} label={{ value: 'ms', angle: -90, position: 'insideLeft', fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
                    <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 6, fontSize: 12 }} />
                    <Line type="monotone" dataKey="latency" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={{ r: 3, fill: 'hsl(var(--chart-3))' }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <Activity className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-4">No runs yet. Execute some agent tasks or load sample data to see metrics.</p>
              <Button onClick={handleLoadSample} variant="outline" className="gap-2">
                <Database className="h-4 w-4" />
                Load Sample Data
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}
