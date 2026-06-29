import { useEffect, useState } from 'react';
import { Loader2, Trash2, Upload, Check } from 'lucide-react';
import { api, type ContactInfo, type AboutInfo } from '../lib/api';
import { Field, Input, Textarea, Btn } from './ui';

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
      {children}
    </section>
  );
}

function Saved() {
  return (
    <span className="inline-flex items-center gap-1 text-green-600 text-sm">
      <Check size={15} /> Saved
    </span>
  );
}

export default function SettingsAdmin() {
  const [contact, setContact] = useState<ContactInfo | null>(null);
  const [about, setAbout] = useState<AboutInfo | null>(null);
  const [banners, setBanners] = useState<string[]>([]);
  const [savedKey, setSavedKey] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api.getSetting<ContactInfo>('contact').then(setContact);
    api.getSetting<AboutInfo>('about').then(setAbout);
    api.getSetting<string[]>('hero_banners').then((b) => setBanners(b || []));
  }, []);

  const flash = (k: string) => {
    setSavedKey(k);
    setTimeout(() => setSavedKey(''), 2000);
  };

  const saveContact = async () => {
    await api.setSetting('contact', contact);
    flash('contact');
  };
  const saveAbout = async () => {
    await api.setSetting('about', about);
    flash('about');
  };
  const saveBanners = async (next: string[]) => {
    setBanners(next);
    await api.setSetting('hero_banners', next);
    flash('banners');
  };
  const uploadBanner = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    try {
      const { url } = await api.upload(file);
      await saveBanners([...banners, url]);
    } finally {
      setBusy(false);
      e.target.value = '';
    }
  };

  if (!contact || !about) {
    return (
      <div className="flex items-center gap-2 text-slate-500 text-sm">
        <Loader2 size={16} className="animate-spin" /> Loading…
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-semibold text-slate-900">Settings</h2>

      {/* Hero banners */}
      <Card title="Homepage Hero Banners">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {banners.map((b, i) => (
            <div key={i} className="relative group rounded-lg overflow-hidden border border-slate-200">
              <img src={b} alt="" className="w-full h-24 object-cover" />
              <button
                onClick={() => saveBanners(banners.filter((_, j) => j !== i))}
                className="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
              >
                <Trash2 size={13} />
              </button>
            </div>
          ))}
        </div>
        <label className="inline-flex items-center gap-2 cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
          {busy ? <Loader2 size={15} className="animate-spin" /> : <Upload size={15} />}
          Add banner
          <input type="file" accept="image/*" className="hidden" onChange={uploadBanner} />
        </label>
        {savedKey === 'banners' && <span className="ml-3"><Saved /></span>}
      </Card>

      {/* Contact info */}
      <Card title="Contact Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Phone">
            <Input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
          </Field>
          <Field label="Email">
            <Input value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
          </Field>
          <Field label="WhatsApp URL">
            <Input value={contact.whatsapp} onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })} />
          </Field>
          <Field label="Facebook URL">
            <Input value={contact.facebook} onChange={(e) => setContact({ ...contact, facebook: e.target.value })} />
          </Field>
          <Field label="Instagram URL">
            <Input value={contact.instagram} onChange={(e) => setContact({ ...contact, instagram: e.target.value })} />
          </Field>
          <Field label="YouTube URL">
            <Input value={contact.youtube} onChange={(e) => setContact({ ...contact, youtube: e.target.value })} />
          </Field>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <Btn onClick={saveContact}>Save contact</Btn>
          {savedKey === 'contact' && <Saved />}
        </div>
      </Card>

      {/* About text */}
      <Card title="About Text">
        <div className="space-y-4">
          <Field label="Intro">
            <Textarea value={about.intro} onChange={(e) => setAbout({ ...about, intro: e.target.value })} />
          </Field>
          <Field label="Our Mission">
            <Textarea value={about.mission} onChange={(e) => setAbout({ ...about, mission: e.target.value })} />
          </Field>
          <Field label="Our Vision">
            <Textarea value={about.vision} onChange={(e) => setAbout({ ...about, vision: e.target.value })} />
          </Field>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <Btn onClick={saveAbout}>Save about</Btn>
          {savedKey === 'about' && <Saved />}
        </div>
      </Card>
    </div>
  );
}
