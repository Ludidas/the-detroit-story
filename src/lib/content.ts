import type { Story, Voice } from './types';
import { placeholderStories, placeholderVoices } from '../data/placeholders';

/*
  Every page gets its content through these functions, so connecting real
  sources only changes this file:
  - Step 5: stories come from Sanity instead of placeholderStories.
  - Step 7: voices come from the Instagram feed instead of placeholderVoices.
*/

const newestFirst = <T extends { publishedAt?: string; postedAt?: string }>(a: T, b: T) =>
  (b.publishedAt ?? b.postedAt ?? '').localeCompare(a.publishedAt ?? a.postedAt ?? '');

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

export async function getVoices(limit?: number): Promise<Voice[]> {
  const voices = [...placeholderVoices].sort(newestFirst);
  return limit ? voices.slice(0, limit) : voices;
}

export const storyUrl = (story: Story) => `/stories/${story.slug}`;
