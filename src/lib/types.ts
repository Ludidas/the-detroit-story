export interface ImageRef {
  src: string;
  alt: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

/**
  One piece of a story's body text. Step 5 replaces this with Sanity's rich
  text, which has the same kinds of pieces: paragraphs, subheadings, quotes.
*/
export type StoryBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; attribution?: string };

/** A writer or contributor. In step 5 these come from Sanity. */
export interface Author {
  slug: string;
  name: string;
  /** e.g. "Founder and editor". */
  role?: string;
  /** A few sentences for the profile page. */
  bio?: string;
  photo?: ImageRef;
  links?: SocialLink[];
}

/** A written or video story. In step 5 these come from Sanity. */
export interface Story {
  slug: string;
  title: string;
  /** One or two sentences shown on cards and under the headline. */
  excerpt: string;
  /** ISO date or date-time, shown on the story page and used for ordering. */
  publishedAt: string;
  author?: Author;
  /** Main photo. For a video story, used as the thumbnail. */
  image?: ImageRef;
  /** Caption under the main photo or video. */
  caption?: string;
  /** Who took the photo or video. */
  credit?: string;
  /** Shown in the large featured slot on the home page. */
  featured?: boolean;
  /** YouTube or Instagram link when the story is a video. */
  videoUrl?: string;
  body?: StoryBlock[];
}

/** A street interview. In step 7 these come from the Instagram feed. */
export interface Voice {
  id: string;
  /** First line of the Instagram caption, usually the question asked. */
  title: string;
  /** Second caption line, e.g. name and neighborhood. */
  person?: string;
  /** Link to the post on Instagram. */
  permalink: string;
  thumbnailUrl?: string;
  /** ISO date, used for ordering. */
  postedAt: string;
}

/** Text for the About page. In step 5 this is edited in Sanity. */
export interface AboutPage {
  /** Opening sentence, shown large. */
  lead: string;
  body: StoryBlock[];
}
