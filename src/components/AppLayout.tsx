import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Terminal, BarChart3, Database, BookOpen, LogOut, History } from 'lucide-react';
import soxitLogo from '@/assets/soxit-logo.png';
import { getUser, setUser } from '@/lib/store';

const navItems = [
  { path: '/agent', label: 'Agent', icon: Terminal },
  { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  { path: '/history', label: 'History', icon: History },
  { path: '/memory', label: 'Memory', icon: Database },
  { path: '/docs', label: 'Docs', icon: BookOpen },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-card">
        <div className="container flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-3">
            <img src={soxitLogo} alt="SOXIT Logo" className="h-7 w-7 object-contain" />
            <span className="font-semibold text-sm tracking-wide">SOXIT</span>
            <span className="text-xs text-muted-foreground hidden sm:inline">Agentic AI Incident Detection</span>
          </div>
          <nav className="flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <item.icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
            {user && (
              <button onClick={handleLogout} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent ml-2">
                <LogOut className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{user.username}</span>
              </button>
            )}
          </nav>
        </div>
      </header>
      <main className="flex-1 container px-4 py-6">{children}</main>
    </div>
  );
}
