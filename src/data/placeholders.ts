import type { Story, Voice } from '../lib/types';

/*
  Stand-in content so the pages can be built and reviewed before Sanity and
  Instagram are connected. Bracketed text marks what real content replaces.
  Dates only exist to give the lists an order.
*/

const storyExcerpt =
  '[A sentence or two that sets up the story and gives people a reason to read on.]';

export const placeholderStories: Story[] = [
  {
    slug: 'featured-story',
    title: '[Featured story headline goes here, about ten words long]',
    excerpt:
      '[Two or three sentences that introduce the featured story or video and tell readers why it matters.]',
    publishedAt: '2026-10-28',
    featured: true,
  },
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    slug: `story-${n}`,
    title: '[Story headline goes here in one or two lines]',
    excerpt: storyExcerpt,
    publishedAt: `2026-10-${String(28 - n).padStart(2, '0')}`,
  })),
];

export const placeholderVoices: Voice[] = [
  {
    id: 'voice-1',
    title: '“What do you wish more people knew about you?”',
    person: '[Name, neighborhood]',
    permalink: '/voices',
    postedAt: '2026-10-28',
  },
  ...[2, 3, 4].map((n) => ({
    id: `voice-${n}`,
    title: '[Interview question goes here]',
    person: '[Name, neighborhood]',
    permalink: '/voices',
    postedAt: `2026-10-${String(29 - n).padStart(2, '0')}`,
  })),
];
