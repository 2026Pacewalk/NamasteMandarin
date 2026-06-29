import { useState, type ReactNode } from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { api } from '../lib/api';

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-nm-red focus:ring-2 focus:ring-nm-red/15 transition';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputCls} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputCls} resize-y min-h-[90px]`} />;
}

export function Btn({
  children,
  variant = 'primary',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' | 'danger' }) {
  const styles = {
    primary: 'bg-nm-red text-white hover:bg-nm-red-dark',
    ghost: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    danger: 'bg-red-50 text-red-600 hover:bg-red-100',
  }[variant];
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition disabled:opacity-50 ${styles} ${props.className || ''}`}
    >
      {children}
    </button>
  );
}

/** File input that uploads to the API and returns the served URL. */
export function ImageInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (url: string) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setErr('');
    try {
      const { url } = await api.upload(file);
      onChange(url);
    } catch {
      setErr('Upload failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {value ? (
        <img src={value} alt="" className="w-16 h-16 rounded-lg object-cover border border-slate-200" />
      ) : (
        <div className="w-16 h-16 rounded-lg bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-xs">
          none
        </div>
      )}
      <div>
        <label className="inline-flex items-center gap-2 cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 px-3 py-2 text-sm font-medium text-slate-700">
          {busy ? <Loader2 size={15} className="animate-spin" /> : <Upload size={15} />}
          {busy ? 'Uploading…' : 'Upload image'}
          <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </label>
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="ml-2 text-xs text-red-600 hover:underline"
          >
            remove
          </button>
        )}
        {err && <p className="text-xs text-red-600 mt-1">{err}</p>}
      </div>
    </div>
  );
}
