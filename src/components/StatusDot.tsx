export default function StatusDot({ status }: { status: 'SUCCESS' | 'FAILURE' | 'WARNING' }) {
  const color = status === 'SUCCESS' ? 'bg-severity-none' : status === 'FAILURE' ? 'bg-severity-critical' : 'bg-severity-minor';
  return <span className={`inline-block h-2 w-2 rounded-full ${color}`} />;
}
