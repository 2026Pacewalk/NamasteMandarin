import { useEffect, useState } from 'react';
import { Upload, Trash2, Loader2 } from 'lucide-react';
import { api } from '../lib/api';

interface ImageRow {
  id: number;
  src: string;
}

interface Props {
  collection: string;
  heading: string;
  /** Which caption column the collection uses ('alt' for gallery, 'title' for certificates). */
  captionField?: 'alt' | 'title';
  /** Portrait items (certificates) look better tall; wide items (gallery) shorter. */
  tall?: boolean;
  helpText?: string;
}

export default function ImageCollectionAdmin({
  collection,
  heading,
  captionField = 'alt',
  tall = false,
  helpText,
}: Props) {
  const [items, setItems] = useState<ImageRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);

  const load = () => {
    setLoading(true);
    api
      .list<ImageRow>(collection)
      .then(setItems)
      .finally(() => setLoading(false));
  };
  useEffect(load, [collection]);

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setBusy(true);
    try {
      for (const file of files) {
        const { url } = await api.upload(file);
        await api.create(collection, { src: url, [captionField]: 'Namaste Mandarin', sort: items.length });
      }
      load();
    } finally {
      setBusy(false);
      e.target.value = '';
    }
  };

  const del = async (id: number) => {
    if (!confirm('Remove this image?')) return;
    await api.remove(collection, id);
    setItems((xs) => xs.filter((x) => x.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold text-slate-900">{heading}</h2>
        <label className="inline-flex items-center gap-2 cursor-pointer rounded-lg bg-nm-red text-white hover:bg-nm-red-dark px-4 py-2 text-sm font-medium">
          {busy ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
          {busy ? 'Uploading…' : 'Upload'}
          <input type="file" accept="image/*" multiple className="hidden" onChange={onUpload} />
        </label>
      </div>
      {helpText && <p className="text-sm text-slate-500 mb-6">{helpText}</p>}

      {loading ? (
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Loader2 size={16} className="animate-spin" /> Loading…
        </div>
      ) : (
        <div className={`grid gap-4 ${tall ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'}`}>
          {items.map((it) => (
            <div key={it.id} className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
              <img
                src={it.src}
                alt=""
                className={`w-full object-cover ${tall ? 'h-48' : 'h-32'}`}
              />
              <button
                onClick={() => del(it.id)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                aria-label="Delete"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
          {items.length === 0 && <p className="text-sm text-slate-500">No images yet.</p>}
        </div>
      )}
    </div>
  );
}
