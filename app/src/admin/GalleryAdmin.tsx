import { useEffect, useState } from 'react';
import { Upload, Trash2, Loader2 } from 'lucide-react';
import { api, type GalleryItem } from '../lib/api';

export default function GalleryAdmin() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);

  const load = () => {
    setLoading(true);
    api
      .list<GalleryItem>('gallery')
      .then(setItems)
      .finally(() => setLoading(false));
  };
  useEffect(load, []);

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setBusy(true);
    try {
      for (const file of files) {
        const { url } = await api.upload(file);
        await api.create('gallery', { src: url, alt: 'Namaste Mandarin', sort: items.length });
      }
      load();
    } finally {
      setBusy(false);
      e.target.value = '';
    }
  };

  const del = async (id: number) => {
    if (!confirm('Remove this photo?')) return;
    await api.remove('gallery', id);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Gallery</h2>
        <label className="inline-flex items-center gap-2 cursor-pointer rounded-lg bg-nm-red text-white hover:bg-nm-red-dark px-4 py-2 text-sm font-medium">
          {busy ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
          {busy ? 'Uploading…' : 'Upload photos'}
          <input type="file" accept="image/*" multiple className="hidden" onChange={onUpload} />
        </label>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Loader2 size={16} className="animate-spin" /> Loading…
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((g) => (
            <div key={g.id} className="relative group rounded-xl overflow-hidden border border-slate-200">
              <img src={g.src} alt={g.alt} className="w-full h-32 object-cover" />
              <button
                onClick={() => del(g.id)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                aria-label="Delete"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
          {items.length === 0 && <p className="text-sm text-slate-500">No photos yet.</p>}
        </div>
      )}
    </div>
  );
}
