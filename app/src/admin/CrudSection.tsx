import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, Loader2 } from 'lucide-react';
import { api } from '../lib/api';
import { Field, Input, Textarea, Btn, ImageInput } from './ui';

type FieldType = 'text' | 'textarea' | 'image' | 'number';
export interface CrudField {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
}
type Record_ = Record<string, string | number>;

interface Props {
  collection: string;
  title: string;
  fields: CrudField[];
  summary: (r: Record_) => { title: string; subtitle?: string; image?: string };
}

export default function CrudSection({ collection, title, fields, summary }: Props) {
  const [items, setItems] = useState<Record_[]>([]);
  const [editing, setEditing] = useState<Record_ | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = () => {
    setLoading(true);
    api
      .list<Record_>(collection)
      .then(setItems)
      .finally(() => setLoading(false));
  };
  useEffect(load, [collection]);

  const blank = (): Record_ => {
    const o: Record_ = {};
    fields.forEach((f) => (o[f.key] = f.type === 'number' ? 5 : ''));
    return o;
  };

  const save = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      if (editing.id) await api.update(collection, editing.id as number, editing);
      else await api.create(collection, { ...editing, sort: items.length });
      setEditing(null);
      load();
    } finally {
      setSaving(false);
    }
  };

  const del = async (id: number) => {
    if (!confirm('Delete this item? This cannot be undone.')) return;
    await api.remove(collection, id);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <Btn onClick={() => setEditing(blank())}>
          <Plus size={16} /> Add new
        </Btn>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Loader2 size={16} className="animate-spin" /> Loading…
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => {
            const s = summary(item);
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-4"
              >
                {s.image !== undefined &&
                  (s.image ? (
                    <img src={s.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-slate-100" />
                  ))}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 truncate">{s.title}</p>
                  {s.subtitle && <p className="text-sm text-slate-500 truncate">{s.subtitle}</p>}
                </div>
                <button
                  onClick={() => setEditing({ ...item })}
                  className="p-2 text-slate-500 hover:text-nm-red"
                  aria-label="Edit"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => del(item.id as number)}
                  className="p-2 text-slate-500 hover:text-red-600"
                  aria-label="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            );
          })}
          {items.length === 0 && <p className="text-sm text-slate-500">No items yet.</p>}
        </div>
      )}

      {/* Editor modal */}
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-slate-900">
                {editing.id ? 'Edit' : 'Add'} {title.replace(/s$/, '')}
              </h3>
              <button onClick={() => setEditing(null)} className="text-slate-400 hover:text-slate-700">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              {fields.map((f) => (
                <Field key={f.key} label={f.label}>
                  {f.type === 'textarea' ? (
                    <Textarea
                      value={String(editing[f.key] ?? '')}
                      onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })}
                    />
                  ) : f.type === 'image' ? (
                    <ImageInput
                      value={String(editing[f.key] ?? '')}
                      onChange={(url) => setEditing({ ...editing, [f.key]: url })}
                    />
                  ) : (
                    <Input
                      type={f.type === 'number' ? 'number' : 'text'}
                      value={String(editing[f.key] ?? '')}
                      onChange={(e) =>
                        setEditing({
                          ...editing,
                          [f.key]: f.type === 'number' ? Number(e.target.value) : e.target.value,
                        })
                      }
                    />
                  )}
                </Field>
              ))}
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Btn variant="ghost" onClick={() => setEditing(null)}>
                Cancel
              </Btn>
              <Btn onClick={save} disabled={saving}>
                {saving ? <Loader2 size={15} className="animate-spin" /> : null}
                {saving ? 'Saving…' : 'Save'}
              </Btn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
