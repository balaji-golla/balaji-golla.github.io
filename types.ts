
export interface NavItem {
  name: string;
  href: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  url?: string;
}

export interface ReleaseItem {
  id: string;
  productName: string;
  description: string;
  releaseDate: string;
  category: string;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  url: string;
  imageUrl?: string;
}

export interface Tidbit {
  id: string;
  text: string;
}

export interface ContactLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}
    