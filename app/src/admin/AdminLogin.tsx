import { useState } from 'react';
import {
  User,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  ArrowRight,
  Inbox,
  MessageSquareQuote,
  Images,
  ShieldCheck,
} from 'lucide-react';
import { api, setToken } from '../lib/api';

const features = [
  { icon: Inbox, text: 'Manage enquiries & leads' },
  { icon: MessageSquareQuote, text: 'Edit testimonials & news' },
  { icon: Images, text: 'Update gallery & banners' },
  { icon: ShieldCheck, text: 'Secure single-admin access' },
];

export default function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr('');
    try {
      const { token } = await api.login(username, password);
      setToken(token);
      onSuccess();
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Login failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Brand panel */}
      <div className="hidden lg:flex w-1/2 bg-red-rich star-bg relative overflow-hidden flex-col justify-between p-12 xl:p-16">
        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-white rounded-xl px-3 py-2 shadow-sm">
            <img src="/assets/logo.jpg" alt="Namaste Mandarin" className="h-10 w-auto" />
          </div>
        </div>

        <div className="relative z-10 max-w-md">
          <span className="kicker text-nm-gold-light mb-5">Content Management System</span>
          <h1 className="font-display text-4xl xl:text-5xl text-white font-semibold leading-tight">
            Manage your website, beautifully.
          </h1>
          <p className="text-white/70 mt-4 leading-relaxed">
            One secure place to keep your Mandarin institute’s content fresh — leads, testimonials,
            news, gallery and more.
          </p>

          <ul className="mt-9 space-y-3.5">
            {features.map((f) => (
              <li key={f.text} className="flex items-center gap-3 text-white/85">
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <f.icon size={17} className="text-nm-gold-light" />
                </span>
                {f.text}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-white/45 text-xs">
          ISO 9001:2015 Certified · © Namaste Mandarin
        </p>
      </div>

      {/* Form panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <img src="/assets/logo.jpg" alt="Namaste Mandarin" className="h-14 w-auto" />
          </div>

          <div className="mb-8">
            <h2 className="font-display text-3xl text-slate-900 font-semibold">Welcome back</h2>
            <p className="text-slate-500 text-sm mt-1.5">Sign in to your content dashboard.</p>
          </div>

          <form onSubmit={submit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <div className="relative">
                <User size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                  required
                  placeholder="you@example.com"
                  autoComplete="username"
                  className="w-full rounded-xl border border-slate-300 pl-11 pr-3 py-3 text-sm text-slate-900 focus:outline-none focus:border-nm-red focus:ring-2 focus:ring-nm-red/15 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-300 pl-11 pr-11 py-3 text-sm text-slate-900 focus:outline-none focus:border-nm-red focus:ring-2 focus:ring-nm-red/15 transition"
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label={show ? 'Hide password' : 'Show password'}
                >
                  {show ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {err && (
              <div className="rounded-lg bg-red-50 border border-red-100 px-3.5 py-2.5 text-sm text-red-600">
                {err}
              </div>
            )}

            <button
              type="submit"
              disabled={busy}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-nm-red text-white font-medium py-3 hover:bg-nm-red-dark disabled:opacity-60 transition shadow-sm shadow-nm-red/20"
            >
              {busy ? <Loader2 size={17} className="animate-spin" /> : null}
              {busy ? 'Signing in…' : 'Sign in'}
              {!busy && <ArrowRight size={16} />}
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-8">
            Secure admin area · Namaste Mandarin
          </p>
        </div>
      </div>
    </div>
  );
}
