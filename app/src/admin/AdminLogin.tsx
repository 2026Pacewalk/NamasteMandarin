import { useState } from 'react';
import { Lock, Loader2 } from 'lucide-react';
import { api, setToken } from '../lib/api';
import { Field, Input, Btn } from './ui';

export default function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-nm-red text-white flex items-center justify-center mx-auto mb-3">
            <Lock size={22} />
          </div>
          <h1 className="text-xl font-semibold text-slate-900">Admin Login</h1>
          <p className="text-sm text-slate-500 mt-1">Namaste Mandarin — Content Manager</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <Field label="Username">
            <Input value={username} onChange={(e) => setUsername(e.target.value)} autoFocus required />
          </Field>
          <Field label="Password">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Field>
          {err && <p className="text-sm text-red-600">{err}</p>}
          <Btn type="submit" disabled={busy} className="w-full">
            {busy ? <Loader2 size={15} className="animate-spin" /> : null}
            {busy ? 'Signing in…' : 'Sign in'}
          </Btn>
        </form>
      </div>
    </div>
  );
}
