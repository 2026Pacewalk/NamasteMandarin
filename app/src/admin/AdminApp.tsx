import { useEffect, useState } from 'react';
import {
  MessageSquareQuote,
  Newspaper,
  Images,
  Award,
  Settings as SettingsIcon,
  Inbox,
  LogOut,
  ExternalLink,
  Loader2,
} from 'lucide-react';
import { api, getToken, clearToken } from '../lib/api';
import AdminLogin from './AdminLogin';
import CrudSection from './CrudSection';
import ImageCollectionAdmin from './ImageCollectionAdmin';
import SettingsAdmin from './SettingsAdmin';
import LeadsAdmin from './LeadsAdmin';

type SectionKey = 'leads' | 'testimonials' | 'news' | 'gallery' | 'certificates' | 'settings';

const NAV: { key: SectionKey; label: string; icon: typeof Images }[] = [
  { key: 'leads', label: 'Leads', icon: Inbox },
  { key: 'testimonials', label: 'Testimonials', icon: MessageSquareQuote },
  { key: 'news', label: 'News & Articles', icon: Newspaper },
  { key: 'gallery', label: 'Gallery', icon: Images },
  { key: 'certificates', label: 'Certificates', icon: Award },
  { key: 'settings', label: 'Settings', icon: SettingsIcon },
];

export default function AdminApp() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [section, setSection] = useState<SectionKey>('leads');

  useEffect(() => {
    if (!getToken()) {
      setAuthed(false);
      return;
    }
    api
      .me()
      .then(() => setAuthed(true))
      .catch(() => {
        clearToken();
        setAuthed(false);
      });
  }, []);

  if (authed === null) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        <Loader2 size={28} className="animate-spin" />
      </div>
    );
  }

  if (!authed) return <AdminLogin onSuccess={() => setAuthed(true)} />;

  const logout = () => {
    clearToken();
    setAuthed(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-slate-900 text-white flex flex-col fixed inset-y-0 left-0">
        <div className="px-5 py-5 border-b border-white/10">
          <p className="font-display text-lg font-semibold">Namaste Mandarin</p>
          <p className="text-xs text-white/50">Content Manager</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {NAV.map((n) => (
            <button
              key={n.key}
              onClick={() => setSection(n.key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                section === n.key ? 'bg-nm-red text-white' : 'text-white/70 hover:bg-white/5'
              }`}
            >
              <n.icon size={18} />
              {n.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10 space-y-1">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/5"
          >
            <ExternalLink size={18} /> View site
          </a>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/5"
          >
            <LogOut size={18} /> Log out
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 ml-60 p-6 lg:p-10">
        <div className="max-w-4xl">
          {section === 'leads' && <LeadsAdmin />}
          {section === 'testimonials' && (
            <CrudSection
              collection="testimonials"
              title="Testimonials"
              fields={[
                { key: 'name', label: 'Name', type: 'text', required: true },
                { key: 'role', label: 'Role / Designation', type: 'text' },
                { key: 'quote', label: 'Testimonial', type: 'textarea', required: true },
                { key: 'img', label: 'Photo', type: 'image' },
                { key: 'rating', label: 'Rating (1–5)', type: 'number' },
              ]}
              summary={(r) => ({ title: String(r.name), subtitle: String(r.role || ''), image: String(r.img || '') })}
            />
          )}
          {section === 'news' && (
            <CrudSection
              collection="news"
              title="News & Articles"
              fields={[
                { key: 'title', label: 'Title', type: 'text', required: true },
                { key: 'excerpt', label: 'Excerpt', type: 'textarea' },
                { key: 'image', label: 'Image', type: 'image' },
                { key: 'link', label: 'Link URL', type: 'text' },
              ]}
              summary={(r) => ({ title: String(r.title), subtitle: String(r.link || ''), image: String(r.image || '') })}
            />
          )}
          {section === 'gallery' && (
            <ImageCollectionAdmin
              collection="gallery"
              heading="Gallery"
              captionField="alt"
              helpText="Photos shown on the Gallery page."
            />
          )}
          {section === 'certificates' && (
            <ImageCollectionAdmin
              collection="certificates"
              heading="Certificates"
              captionField="title"
              tall
              helpText="Certificates shown on the Certificates page. Upload the new ones, then delete the old."
            />
          )}
          {section === 'settings' && <SettingsAdmin />}
        </div>
      </main>
    </div>
  );
}
