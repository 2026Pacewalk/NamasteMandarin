import jwt from 'jsonwebtoken';

// Defaults are used only when the matching env var in server/.env is not set.
const JWT_SECRET = process.env.JWT_SECRET || 'nm-default-4f7a9c2e8b1d6035-change-me';
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'namastemandarin@gmail.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Namaste@Mandarin2026';

export function login(username, password) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ sub: username, role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    return { token, user: { username } };
  }
  return null;
}

/** Express middleware — rejects requests without a valid admin token. */
export function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Authentication required' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired session' });
  }
}
