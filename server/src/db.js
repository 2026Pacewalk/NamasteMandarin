import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, '..', 'data');
mkdirSync(dataDir, { recursive: true });

export const db = new Database(join(dataDir, 'namaste.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT,
    quote TEXT NOT NULL,
    img TEXT,
    rating INTEGER DEFAULT 5,
    sort INTEGER DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    excerpt TEXT,
    image TEXT,
    link TEXT,
    sort INTEGER DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS gallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    src TEXT NOT NULL,
    alt TEXT,
    sort INTEGER DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS certificates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    src TEXT NOT NULL,
    title TEXT,
    sort INTEGER DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    goal TEXT,
    message TEXT,
    status TEXT DEFAULT 'new',
    notes TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);

export function getSetting(key, fallback = null) {
  const row = db.prepare('SELECT value FROM settings WHERE key = ?').get(key);
  return row ? JSON.parse(row.value) : fallback;
}

export function setSetting(key, value) {
  db.prepare(
    'INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value'
  ).run(key, JSON.stringify(value));
}

export function seedIfEmpty() {
  const count = (t) => db.prepare(`SELECT COUNT(*) AS n FROM ${t}`).get().n;

  if (count('testimonials') === 0) {
    const insert = db.prepare(
      'INSERT INTO testimonials (name, role, quote, img, rating, sort) VALUES (@name, @role, @quote, @img, 5, @sort)'
    );
    seedTestimonials.forEach((t, i) => insert.run({ ...t, sort: i }));
  }

  if (count('news') === 0) {
    const insert = db.prepare(
      'INSERT INTO news (title, excerpt, image, link, sort) VALUES (@title, @excerpt, @image, @link, @sort)'
    );
    seedNews.forEach((n, i) => insert.run({ ...n, sort: i }));
  }

  if (count('gallery') === 0) {
    const insert = db.prepare('INSERT INTO gallery (src, alt, sort) VALUES (?, ?, ?)');
    seedGallery.forEach((src, i) => insert.run(src, `Namaste Mandarin gallery ${i + 1}`, i));
  }

  if (count('certificates') === 0) {
    const insert = db.prepare('INSERT INTO certificates (src, title, sort) VALUES (?, ?, ?)');
    seedCertificates.forEach((src, i) => insert.run(src, `Certificate ${i + 1}`, i));
  }

  if (getSetting('contact') === null) {
    setSetting('contact', {
      phone: '+91 98806 87766',
      email: 'namastemandarin@gmail.com',
      whatsapp: 'https://wa.me/+919880687766',
      facebook: 'https://www.facebook.com/people/Namaste-Mandarin/100063924019806/',
      instagram: 'https://www.instagram.com/namaste_mandarin',
      youtube: 'https://www.youtube.com/@namastemandarin7160',
    });
  }
  if (getSetting('hero_banners') === null) {
    setSetting('hero_banners', ['/assets/banner-home.jpg']);
  }
  if (getSetting('about') === null) {
    setSetting('about', {
      intro: ABOUT_INTRO,
      mission:
        'Our Mission is to teach Chinese language through easy and simple methods yet cover all important aspects of the language and to provide high quality Chinese language courses to non-native speakers.',
      vision:
        'Our Vision is to reach majority of people who are interested in learning Chinese language through modern educational technologies.',
    });
  }
}

// The expanded "Who we are and What we do?" intro (paragraphs split on \n\n).
const ABOUT_INTRO =
  'Namaste Mandarin is a premier Chinese language training institute dedicated to promoting Mandarin among students, working professionals, entrepreneurs, and corporate teams. With extensive experience in teaching children, mentoring working professionals, and training business leaders, we design customized learning programs that cater to different goals—whether it\'s academic excellence, career growth, business communication, travel, or cultural understanding.\n\nBeyond language training, we also specialize in developing high-quality content for virtual learning programs, ensuring interactive and effective learning experiences. At Namaste Mandarin, we believe that language learning goes beyond textbooks, which is why we emphasize real-world communication, cultural immersion, and practical application in every course.';

/**
 * One-time, idempotent data migrations for existing databases.
 * Safe to run on every startup — each step only acts when the data still
 * matches the exact previous default, so it never clobbers admin edits.
 */
export function migrate() {
  // Replace the original 3-banner homepage carousel with the single designed banner.
  const OLD_HERO = ['/assets/banner-2.jpg', '/assets/banner2.jpg', '/assets/banner1.jpg'];
  const hero = getSetting('hero_banners');
  if (
    Array.isArray(hero) &&
    hero.length === OLD_HERO.length &&
    hero.every((v, i) => v === OLD_HERO[i])
  ) {
    setSetting('hero_banners', ['/assets/banner-home.jpg']);
  }

  // Expand the About intro (only if it still holds the original seeded text).
  const OLD_INTRO =
    'Namaste Mandarin is a Chinese language training institute. We are committed towards promoting Mandarin among the student community & working professionals. We have strong experience in teaching children, coaching working professionals & in content development for virtual training programs.';
  const about = getSetting('about');
  if (about && about.intro === OLD_INTRO) {
    setSetting('about', { ...about, intro: ABOUT_INTRO });
  }
}

const seedTestimonials = [
  { name: 'Suresh Kumar', role: 'Partner – Encube Venture Partners LLP', img: '/assets/testimonial7.jpg', quote: 'All my apprehension of undergoing a virtual class “via skype” and that too a foreign language class, was laid to rest. The module is very well conceived and a beginner like me was not rushed. Credit goes to Sonia, who not only has the knowledge but very good teaching skills. This was just like physically attending any class and never felt like a virtual class.' },
  { name: 'Sheetal V.Harne', role: 'Solution Architect – E2open', img: '/assets/testimonial5.jpg', quote: 'It has been an excellent experience learning from Sonia. The method of connecting on Skype is extremely hassle free. It’s as good as a classroom session with the added advantage of a 1:1 session. She also shares a lot of information on Chinese culture based on her experience of staying in the country for over 3 years.' },
  { name: 'Sachchidanand Hegde', role: 'Design Director | Great Wall Motors', img: '/assets/testimonial6.jpg', quote: 'I admire her as a very good teacher. I appreciate her for exhibiting great professionalism and a deeper understanding of the language and the process of teaching. Her friendly, interpersonal savviness and greater patience plays a bigger role. Bangalore needs a Mandarin teacher like you.' },
  { name: 'Ganesh H R', role: 'General Manager, Jintex Group – Taiwan', img: '/assets/testimonial9.jpg', quote: 'She is very professional and methodical. For me it was a strange language but her modules made it easy to learn. Very prompt in her class schedules and flexible too. I got through level 1 and now I am able to use it with my Taiwan colleagues.' },
  { name: 'Saravanan K', role: 'Delivery Head | KPIT Technologies Ltd.', img: '/assets/testimonial8.jpg', quote: 'Sonia Mam ensures that your motivation level and spirit are well maintained throughout the course duration and beyond. One-on-one sessions are very helpful, flexible and well-tuned to individual need. Skype class conducted by her was highly effective — I felt like being in a class room.' },
  { name: 'Nupur Bhardwaj', role: 'IT Analyst – TCS Limited, Shanghai', img: '/assets/testimonial1.jpg', quote: 'With great support and efforts from Sonia I could finish the complete book and really feel happy that I learnt Chinese. She is a very patient teacher and explains everything with examples. A very cooperative and dedicated teacher whose engaging style motivates students to learn more and more.' },
  { name: 'Mayur', role: 'Director – Stanley Black & Decker', img: '/assets/testimonial3.jpg', quote: 'Mandarin is one of the most difficult languages and teaching it to kids of 5–8 years can be even more challenging. This is where Ms Sonia Ghosh has made a great difference. Her teaching methodology is very practical & interesting — the sessions are fun learning for kids.' },
  { name: 'Manishree', role: 'Senior Manager Technology | SapientRazorfish', img: '', quote: 'Sonia is one of the best teachers I have seen so far. She demonstrates amazing patience and creativity. In a batch of 5 kids all of them qualified Level One and are happily preparing for YCT Level II. Really lucky to find her.' },
  { name: 'Kaviangkanni Giridharan', role: 'Managing Director, Yaadhum Consulting', img: '', quote: 'Mandarin is one of the toughest languages to learn and speak. But she taught me in such a way that I got interested and learning became easier. I recommend Sonia for everyone who wants to learn mandarin in an easy way.' },
  { name: 'Alok Arora', role: 'Director – Insperia Education Pvt. Ltd.', img: '/assets/testimonial2.jpg', quote: 'She is an excellent teacher and has a great command of the language. Was able to explain concepts well. Also encourages you to converse in mandarin which is always a good thing. Would strongly recommend!!' },
  { name: 'Dr. Ganesh', role: 'Mandarin Learner', img: '/assets/testimonial4.jpg', quote: 'I have been Sonia’s colleague for a while now. She was posted in Shanghai and whenever I visited, Sonia always helped me while interacting with my Chinese colleagues. I recommend her to other students.' },
];

const seedNews = [
  { title: 'IIT Ropar to start certificate course', excerpt: 'IIT Ropar is starting a certificate course in Mandarin. It has also opened a Taiwan Education Centre on its campus to facilitate cooperation among the higher educational institutions of Taiwan and India...', image: '/assets/103874071-3.jpg', link: 'https://timesofindia.indiatimes.com/india/iit-ropar-to-start-certificate-course-in-mandarin/articleshow/86571236.cms' },
  { title: 'A new lingo: Students are taking to Chinese', excerpt: 'By Esita Rani Mandal BCU To hire native teachers, as foreign languages open doors to better job prospects, scholarships, and cultural enrichment among students...', image: '/assets/103874071.jpg', link: 'https://bangaloremirror.indiatimes.com/bangalore/others/a-new-lingo-students-are-taking-to-chinese/articleshow/103874055.cms' },
  { title: 'Mandarin lessons for Army troops along China border', excerpt: 'The Army utilizes officers trained in Chinese language as interpreters to break the language barrier. GUWAHATI: In a first such move, Army troops deployed along the entire...', image: '/assets/103874071-2.jpg', link: 'https://timesofindia.indiatimes.com/city/guwahati/mandarin-lessons-for-army-troops-along-china-border/articleshow/99626978.cms' },
  { title: 'Why being bilingual is good for your brain | BBC Ideas', excerpt: 'What does bilingualism do to the brain? And are there benefits to being bilingual? Turns out there are lots of upsides...', image: '/assets/maxresdefault-1.jpg', link: 'https://www.youtube.com/watch?v=nzHY-muy2Mw' },
  { title: 'Sushma Swaraj: Need for Indians and Chinese to learn each other’s language', excerpt: 'I want to say that the way India and China’s relations are strengthening, trade is increasing, we are working together on international forums, it has become increasingly...', image: '/assets/Sushma-Swaraj-Need-for-Indians-and-Chinese.jpg', link: 'https://timesofindia.indiatimes.com/india/sushma-swaraj-need-for-indians-and-chinese-to-learn-each-others-language/articleshow/63877293.cms' },
];

const seedGallery = [
  'g3-big.jpg', 'g5-big.jpg', 'g7-big.jpg', 'g8-big.jpg', 'g9-big.jpg',
  'g10-big.jpg', 'g19-big.jpg', 'g21-big.jpg', 'g31-big.jpg', 'g32-big.jpg',
  'g33-big.jpg', 'g34-big.jpg', 'g35-big.jpg', 'g36-big.jpg', 'g37-big.jpg',
  'g38-big.jpg', 'g39-big.jpg', 'g40-big.jpg', 'g42-big.jpg',
].map((f) => `/assets/gallery/${f}`);

const seedCertificates = [
  '/assets/certificates.jpg',
  '/assets/certificates1.jpg',
  '/assets/certificates2.jpg',
  '/assets/certificates3.jpg',
];
