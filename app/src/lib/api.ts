const TOKEN_KEY = 'nm_admin_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t: string) => localStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

interface ReqOpts {
  method?: string;
  json?: unknown;
  auth?: boolean;
}

async function request<T = unknown>(path: string, opts: ReqOpts = {}): Promise<T> {
  const headers: Record<string, string> = {};
  let body: string | undefined;
  if (opts.json !== undefined) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(opts.json);
  }
  if (opts.auth) {
    const token = getToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }
  const res = await fetch('/api' + path, { method: opts.method || 'GET', headers, body });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error || res.statusText);
  }
  return res.json();
}

export interface Testimonial { id: number; name: string; role: string; quote: string; img: string; rating: number; sort: number; }
export interface NewsItem { id: number; title: string; excerpt: string; image: string; link: string; sort: number; }
export interface GalleryItem { id: number; src: string; alt: string; sort: number; }
export interface CertificateItem { id: number; src: string; title: string; sort: number; }
export interface ContactInfo { phone: string; email: string; whatsapp: string; facebook: string; instagram: string; youtube: string; }
export interface AboutInfo { intro: string; mission: string; vision: string; }
export interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  goal: string;
  message: string;
  status: string;
  notes: string;
  created_at: string;
}
export interface SiteContent {
  testimonials: Testimonial[];
  news: NewsItem[];
  gallery: GalleryItem[];
  certificates: CertificateItem[];
  settings: { contact: ContactInfo; hero_banners: string[]; about: AboutInfo };
}

export const api = {
  login: (username: string, password: string) =>
    request<{ token: string; user: { username: string } }>('/auth/login', { method: 'POST', json: { username, password } }),
  me: () => request<{ user: { username: string } }>('/auth/me', { auth: true }),
  content: () => request<SiteContent>('/content'),
  list: <T>(col: string) => request<T[]>('/' + col),
  create: <T>(col: string, data: unknown) => request<T>('/' + col, { method: 'POST', auth: true, json: data }),
  update: <T>(col: string, id: number, data: unknown) => request<T>(`/${col}/${id}`, { method: 'PUT', auth: true, json: data }),
  remove: (col: string, id: number) => request(`/${col}/${id}`, { method: 'DELETE', auth: true }),
  leads: {
    submit: (data: Partial<Lead>) => request<{ ok: boolean }>('/leads', { method: 'POST', json: data }),
    list: () => request<Lead[]>('/leads', { auth: true }),
    update: (id: number, data: Partial<Lead>) => request<Lead>(`/leads/${id}`, { method: 'PUT', auth: true, json: data }),
    remove: (id: number) => request(`/leads/${id}`, { method: 'DELETE', auth: true }),
  },
  getSetting: <T>(key: string) => request<T>('/settings/' + key),
  setSetting: <T>(key: string, value: unknown) => request<T>('/settings/' + key, { method: 'PUT', auth: true, json: value }),
  upload: async (file: File): Promise<{ url: string }> => {
    const fd = new FormData();
    fd.append('file', file);
    const token = getToken();
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      body: fd,
    });
    if (!res.ok) throw new Error('Upload failed');
    return res.json();
  },
};
