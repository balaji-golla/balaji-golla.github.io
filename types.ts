
export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  longBio: string;
  email: string;
  linkedinUsername?: string; 
  githubUsername: string;
  avatarUrl: string; // e.g., './assets/images/profile.png'
  resumeUrl?: string; // e.g., './assets/documents/resume.pdf'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string; // e.g., './assets/images/project-image.png'
  repoUrl?: string; 
  liveUrl?: string;
  date: string;
}

export interface Course {
  id: string;
  title: string;
  institution: string;
  date: string;
  description?: string;
  certificateUrl?: string; // e.g., './assets/documents/course-certificate.pdf'
  icon?: React.ReactNode;
}

export interface Certificate {
  id: string;
  title: string;
  issuingOrganization: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string; // e.g., './assets/documents/certificate.pdf'
  imageUrl?: string; // e.g., './assets/images/certificate-badge.png'
  icon?: React.ReactNode;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  // For a full blog, you'd link to a markdown file or have full content
  // For simplicity, we'll keep it to summary for now or a link to an external blog if absolutely necessary
  // Or, slug: string; // to point to a local markdown file or sub-route
  contentPreview: string; // First few lines or key points
  imageUrl?: string; // e.g., './assets/images/blog-post-banner.png'
  link?: string; // Could be a relative path to a markdown file or an external link if permitted by user interpretation
}

export interface Whitepaper {
  id: string;
  title: string;
  date: string;
  summary: string;
  fileUrl: string; // e.g., './assets/documents/whitepaper.pdf'
  imageUrl?: string; // e.g., './assets/images/whitepaper-cover.png'
  authors?: string[];
}

export interface GithubRepoInfo {
  id: string;
  name: string;
  description: string;
  url: string; 
  stars?: number;
  forks?: number;
  language?: string;
  updatedAt: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export interface ContactLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  text?: string; // For things like email address
}
