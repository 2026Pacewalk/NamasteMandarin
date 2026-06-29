import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
import { db, getSetting, setSetting, seedIfEmpty } from './db.js';
import { login, requireAuth } from './auth.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const UPLOAD_DIR = join(__dirname, '..', 'uploads');
const PORT = process.env.PORT || 4000;

seedIfEmpty();

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use('/uploads', express.static(UPLOAD_DIR));

/* ---------- helpers ---------- */
const listOrdered = (table) =>
  db.prepare(`SELECT * FROM ${table} ORDER BY sort ASC, id ASC`).all();

function crud(table, fields) {
  const router = express.Router();
  router.get('/', (_req, res) => res.json(listOrdered(table)));
  router.post('/', requireAuth, (req, res) => {
    const cols = fields.join(', ');
    const ph = fields.map((f) => `@${f}`).join(', ');
    const data = Object.fromEntries(fields.map((f) => [f, req.body[f] ?? null]));
    const info = db.prepare(`INSERT INTO ${table} (${cols}) VALUES (${ph})`).run(data);
    res.json(db.prepare(`SELECT * FROM ${table} WHERE id = ?`).get(info.lastInsertRowid));
  });
  router.put('/:id', requireAuth, (req, res) => {
    const set = fields.map((f) => `${f} = @${f}`).join(', ');
    const data = Object.fromEntries(fields.map((f) => [f, req.body[f] ?? null]));
    db.prepare(`UPDATE ${table} SET ${set} WHERE id = @id`).run({ ...data, id: req.params.id });
    res.json(db.prepare(`SELECT * FROM ${table} WHERE id = ?`).get(req.params.id));
  });
  router.delete('/:id', requireAuth, (req, res) => {
    db.prepare(`DELETE FROM ${table} WHERE id = ?`).run(req.params.id);
    res.json({ ok: true });
  });
  return router;
}

/* ---------- auth ---------- */
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body || {};
  const result = login(username, password);
  if (!result) return res.status(401).json({ error: 'Invalid username or password' });
  res.json(result);
});
app.get('/api/auth/me', requireAuth, (req, res) => res.json({ user: { username: req.user.sub } }));

/* ---------- content collections ---------- */
app.use('/api/testimonials', crud('testimonials', ['name', 'role', 'quote', 'img', 'rating', 'sort']));
app.use('/api/news', crud('news', ['title', 'excerpt', 'image', 'link', 'sort']));
app.use('/api/gallery', crud('gallery', ['src', 'alt', 'sort']));

/* ---------- settings (key/value JSON) ---------- */
app.get('/api/settings/:key', (req, res) => res.json(getSetting(req.params.key, null)));
app.put('/api/settings/:key', requireAuth, (req, res) => {
  setSetting(req.params.key, req.body);
  res.json(getSetting(req.params.key));
});

/* ---------- aggregate (one call for the public site) ---------- */
app.get('/api/content', (_req, res) => {
  res.json({
    testimonials: listOrdered('testimonials'),
    news: listOrdered('news'),
    gallery: listOrdered('gallery'),
    settings: {
      contact: getSetting('contact'),
      hero_banners: getSetting('hero_banners'),
      about: getSetting('about'),
    },
  });
});

/* ---------- image upload ---------- */
const storage = multer.diskStorage({
  destination: UPLOAD_DIR,
  filename: (_req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_').slice(-40);
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e6)}-${safe}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => cb(null, /^image\//.test(file.mimetype)),
});
app.post('/api/upload', requireAuth, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
  res.json({ url: `/uploads/${req.file.filename}` });
});

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Namaste Mandarin API listening on :${PORT}`));
