import type { Severity } from '@/types/agent';

const config: Record<Severity, { bg: string; text: string }> = {
  NONE: { bg: 'severity-bg-none', text: 'severity-none' },
  MINOR: { bg: 'severity-bg-minor', text: 'severity-minor' },
  MAJOR: { bg: 'severity-bg-major', text: 'severity-major' },
  CRITICAL: { bg: 'severity-bg-critical', text: 'severity-critical' },
};

export default function SeverityBadge({ severity }: { severity: Severity }) {
  const c = config[severity];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-semibold border ${c.bg} ${c.text}`}>
      {severity}
    </span>
  );
}
