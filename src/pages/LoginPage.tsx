import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import soxitLogo from '@/assets/soxit-logo.png';
import { setUser } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please enter both fields');
      return;
    }
    const sessionId = 'sess_' + Math.random().toString(36).substring(2, 10);
    setUser({ username: username.trim(), sessionId, loginTime: new Date().toISOString() });
    navigate('/agent');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg mb-2">
            <img src={soxitLogo} alt="SOXIT Logo" className="h-16 w-16 object-contain" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">SOXIT</h1>
          <p className="text-xs text-muted-foreground">Agentic AI Incident Detection & Correction</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground">Username</label>
            <Input
              value={username}
              onChange={e => { setUsername(e.target.value); setError(''); }}
              placeholder="researcher"
              className="bg-card border-border"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground">Password</label>
            <Input
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(''); }}
              placeholder="••••••••"
              className="bg-card border-border"
            />
          </div>
          {error && <p className="text-xs severity-critical">{error}</p>}
          <Button type="submit" className="w-full gap-2">
            Enter System <ArrowRight className="h-3.5 w-3.5" />
          </Button>
          <p className="text-[10px] text-muted-foreground text-center">Academic simulation — any credentials accepted</p>
        </form>
      </div>
    </div>
  );
}
