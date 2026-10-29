import type { AboutPage, Author, Story, Voice } from './types';
import { placeholderAbout, placeholderAuthors, placeholderStories, placeholderVoices } from '../data/placeholders';

/*
  Every page gets its content through these functions, so connecting real
  sources only changes this file:
  - Step 5: stories, authors and the About page come from Sanity.
  - Step 7: voices come from the Instagram feed instead of placeholderVoices.
*/

const newestFirst = <T extends { publishedAt?: string; postedAt?: string }>(a: T, b: T) =>
  (b.publishedAt ?? b.postedAt ?? '').localeCompare(a.publishedAt ?? a.postedAt ?? '');

/* Stories */

export async function getStories(): Promise<Story[]> {
  return [...placeholderStories].sort(newestFirst);
}

export async function getStoryBySlug(slug: string): Promise<Story | undefined> {
  return (await getStories()).find((story) => story.slug === slug);
}

/** The story marked featured, or the newest one if none is. */
export async function getFeaturedStory(): Promise<Story | undefined> {
  const stories = await getStories();
  return stories.find((story) => story.featured) ?? stories[0];
}

/** Newest stories, leaving out the featured one so it isn't shown twice. */
export async function getLatestStories(limit = 6): Promise<Story[]> {
  const featured = await getFeaturedStory();
  return (await getStories()).filter((story) => story.slug !== featured?.slug).slice(0, limit);
}

/** Newest stories other than the one being read, for "More stories". */
export async function getMoreStories(currentSlug: string, limit = 3): Promise<Story[]> {
  return (await getStories()).filter((story) => story.slug !== currentSlug).slice(0, limit);
}

export const STORIES_PER_PAGE = 12;

/** One page of the Stories list. Page 1 is /stories, later pages are /stories/page/N. */
export async function getStoryPage(page: number) {
  const stories = await getStories();
  const totalPages = Math.max(1, Math.ceil(stories.length / STORIES_PER_PAGE));
  const start = (page - 1) * STORIES_PER_PAGE;
  return { stories: stories.slice(start, start + STORIES_PER_PAGE), page, totalPages };
}

export const storyUrl = (story: Story) => `/stories/${story.slug}`;
export const storiesPageUrl = (page: number) => (page <= 1 ? '/stories' : `/stories/page/${page}`);

/* Authors */

export async function getAuthors(): Promise<Author[]> {
  return placeholderAuthors;
}

export async function getStoriesByAuthor(slug: string): Promise<Story[]> {
  return (await getStories()).filter((story) => story.author?.slug === slug);
}

export const authorUrl = (author: Author) => `/authors/${author.slug}`;

/* Voices */

export async function getVoices(limit?: number): Promise<Voice[]> {
  const voices = [...placeholderVoices].sort(newestFirst);
  return limit ? voices.slice(0, limit) : voices;
}

/* About */

export async function getAboutPage(): Promise<AboutPage> {
  return placeholderAbout;
}
