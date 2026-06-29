import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { api, type SiteContent } from './api';

const ContentContext = createContext<SiteContent | null>(null);

/**
 * Fetches the public site content once and provides it to the tree.
 * Components fall back to their built-in defaults while this is null
 * (instant first paint, and resilient if the API is unavailable).
 */
export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    let active = true;
    api
      .content()
      .then((c) => active && setContent(c))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export const useContent = () => useContext(ContentContext);
