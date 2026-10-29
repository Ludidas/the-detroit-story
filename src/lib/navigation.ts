export const mainNav = [
  { href: '/', label: 'Home' },
  { href: '/stories', label: 'Stories' },
  { href: '/voices', label: 'Voices' },
  { href: '/about', label: 'About' },
] as const;

export const tellYourStory = { href: '/tell-your-story', label: 'Tell Your Story' } as const;

/** True when `href` is the current page or a page inside that section. */
export function isCurrent(href: string, pathname: string): boolean {
  const path = pathname.replace(/\/$/, '') || '/';
  if (href === '/') return path === '/';
  return path === href || path.startsWith(`${href}/`);
}
