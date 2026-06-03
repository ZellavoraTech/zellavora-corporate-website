export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
  publishedAt: string;
  readTimeMinutes: number;
  category: string;
  tags: string[];
  coverImage: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}
