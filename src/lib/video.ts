/**
  Turns a YouTube link (watch, youtu.be, Shorts, live or embed) into a
  privacy-friendly embed address. Returns undefined for anything else,
  such as an Instagram link, which the page shows as a link instead.
*/
export function youtubeEmbedUrl(url: string): string | undefined {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return undefined;
  }

  const host = parsed.hostname.replace(/^www\.|^m\./, '');
  let id: string | null | undefined;

  if (host === 'youtu.be') {
    id = parsed.pathname.slice(1);
  } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    const [, section, segment] = parsed.pathname.split('/');
    id = section === 'watch' ? parsed.searchParams.get('v') : ['shorts', 'embed', 'live'].includes(section) ? segment : null;
  }

  return id && /^[\w-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : undefined;
}

/**
  Turns an Instagram post or reel link into the address of Instagram's
  embedded player, used by the Voices pop-up. Returns undefined for anything else.
*/
export function instagramEmbedUrl(url: string): string | undefined {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return undefined;
  }

  if (parsed.hostname.replace(/^www\./, '') !== 'instagram.com') return undefined;
  const match = parsed.pathname.match(/^\/(?:[\w.]+\/)?(p|reel|reels|tv)\/([\w-]+)/);
  if (!match) return undefined;
  const kind = match[1] === 'reels' ? 'reel' : match[1];
  return `https://www.instagram.com/${kind}/${match[2]}/embed/`;
}
