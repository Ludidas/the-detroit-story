export interface ImageRef {
  src: string;
  alt: string;
}

/** A written or video story. In step 5 these come from Sanity. */
export interface Story {
  slug: string;
  title: string;
  /** One or two sentences shown on cards. */
  excerpt: string;
  /** ISO date, used for ordering. */
  publishedAt: string;
  image?: ImageRef;
  /** Shown in the large featured slot on the home page. */
  featured?: boolean;
  /** YouTube or Instagram link when the story is a video. */
  videoUrl?: string;
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
