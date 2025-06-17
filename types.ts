
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  postUrl: string;
  publishDate: string;
}

export interface NewsItem {
  title: string;
  summary: string;
  sourceUrl?: string; // Optional: Gemini might not always provide a URL
  publishedDate?: string; // Optional
}

// For navigation items in Header
export interface NavItem {
  name: string;
  href: string;
}
