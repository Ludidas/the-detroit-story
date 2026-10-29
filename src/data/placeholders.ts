import type { AboutPage, Author, Story, StoryBlock, Voice } from '../lib/types';

/*
  Stand-in content so the pages can be built and reviewed before Sanity and
  Instagram are connected. Bracketed text marks what real content replaces.
  Dates only exist to give the lists an order.
*/

export const placeholderAuthors: Author[] = [
  {
    slug: 'author-name',
    name: '[Author name]',
    role: '[Founder and editor]',
    bio: '[A few sentences about who he is, his connection to Detroit, and why he started The Detroit Story.]',
    links: [{ label: 'Instagram', url: 'https://www.instagram.com/' }],
  },
];

const [author] = placeholderAuthors;

const storyExcerpt =
  '[A sentence or two that sets up the story and gives people a reason to read on.]';

const storyBody: StoryBlock[] = [
  {
    type: 'paragraph',
    text: '[Opening paragraph: who this story is about, where it happens, and why it matters to Detroit.]',
  },
  {
    type: 'paragraph',
    text: '[The next few paragraphs tell the story in the words of the people living it. Keep paragraphs short so they read well on a phone.]',
  },
  {
    type: 'quote',
    text: '[A striking line from someone in the story, pulled out so it stands on its own.]',
    attribution: '[Name, neighborhood]',
  },
  { type: 'heading', text: '[Optional subheading]' },
  {
    type: 'paragraph',
    text: '[More of the story. Subheadings help break up longer pieces.]',
  },
  {
    type: 'paragraph',
    text: '[Closing paragraph: where things stand now, or what comes next.]',
  },
];

const sharedStoryFields = {
  author,
  caption: '[Caption describing the photo or video]',
  credit: '[Photographer name]',
  body: storyBody,
};

export const placeholderStories: Story[] = [
  {
    slug: 'featured-story',
    title: '[Featured story headline goes here, about ten words long]',
    excerpt:
      '[Two or three sentences that introduce the featured story or video and tell readers why it matters.]',
    publishedAt: '2026-10-28',
    featured: true,
    ...sharedStoryFields,
  },
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    slug: `story-${n}`,
    title: '[Story headline goes here in one or two lines]',
    excerpt: storyExcerpt,
    publishedAt: `2026-10-${String(28 - n).padStart(2, '0')}`,
    ...sharedStoryFields,
  })),
];

/* 16 interviews so the Voices page shows its "Load more" button. */
export const placeholderVoices: Voice[] = [
  {
    id: 'voice-1',
    title: '“What do you wish more people knew about you?”',
    person: '[Name, neighborhood]',
    permalink: '/voices',
    postedAt: '2026-10-28',
  },
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `voice-${i + 2}`,
    title: '[Interview question goes here]',
    person: '[Name, neighborhood]',
    permalink: '/voices',
    postedAt: `2026-10-${String(27 - i).padStart(2, '0')}`,
  })),
];

export const placeholderAbout: AboutPage = {
  lead: 'The Detroit Story is a community storytelling project focused on the people, experiences, and issues that make Detroit what it is.',
  body: [
    { type: 'paragraph', text: '[Why The Detroit Story exists: what was missing, and what made him start it.]' },
    { type: 'paragraph', text: '[What it covers: the kinds of people, places and issues that show up in the stories and street interviews.]' },
    { type: 'heading', text: '[How to get involved]' },
    { type: 'paragraph', text: '[How people can take part: share their own story, suggest someone to interview, or follow along on Instagram.]' },
  ],
};
