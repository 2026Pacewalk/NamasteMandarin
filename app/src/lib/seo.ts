import { pages, SITE_URL, DEFAULT_OG_IMAGE } from './siteData';

function setMetaByName(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProp(property: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const FALLBACK = pages[0];

/** Update <title>, meta description, canonical, and Open Graph/Twitter tags for a route. */
export function applySeo(pathname: string) {
  const meta = pages.find((p) => p.path === pathname) ?? FALLBACK;
  const url = SITE_URL + (pathname === '/' ? '' : pathname);
  const ogImage = SITE_URL + DEFAULT_OG_IMAGE;

  document.title = meta.title;
  setMetaByName('description', meta.description);
  setCanonical(url);

  setMetaByProp('og:title', meta.title);
  setMetaByProp('og:description', meta.description);
  setMetaByProp('og:url', url);
  setMetaByProp('og:type', 'website');
  setMetaByProp('og:site_name', 'Namaste Mandarin');
  setMetaByProp('og:image', ogImage);

  setMetaByName('twitter:card', 'summary_large_image');
  setMetaByName('twitter:title', meta.title);
  setMetaByName('twitter:description', meta.description);
  setMetaByName('twitter:image', ogImage);
}
