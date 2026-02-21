import { Database, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/components/AppLayout';
import { getMemoryEntries } from '@/lib/store';

export default function MemoryPage() {
  const entries = getMemoryEntries();

  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <h2 className="text-lg font-semibold">Memory Viewer</h2>
          <p className="text-xs text-muted-foreground">Session-based context storage and integrity monitoring</p>
        </div>

        {entries.length > 0 ? (
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Session ID</TableHead>
                    <TableHead className="text-xs">Context</TableHead>
                    <TableHead className="text-xs w-24">Integrity</TableHead>
                    <TableHead className="text-xs w-20">Size</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {entries.map((entry, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-mono text-xs text-primary">{entry.sessionId}</TableCell>
                      <TableCell className="font-mono text-[10px] text-muted-foreground max-w-xs truncate">{entry.context}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          {entry.integrityStatus === 'Valid' ? (
                            <CheckCircle className="h-3.5 w-3.5 text-severity-none" />
                          ) : (
                            <AlertCircle className="h-3.5 w-3.5 text-severity-critical" />
                          )}
                          <span className={`text-xs font-mono ${entry.integrityStatus === 'Valid' ? 'severity-none' : 'severity-critical'}`}>
                            {entry.integrityStatus}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">{entry.memorySize}B</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <Database className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No memory entries yet. Run agent tasks to populate.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}
