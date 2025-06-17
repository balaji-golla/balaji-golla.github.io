
import { Project, BlogPost, NavItem } from './types';

export const YOUR_NAME = "Alex Johnson"; // Replace with your name
export const YOUR_TITLE = "Senior Frontend React Engineer & UI/UX Designer"; // Replace with your title
export const YOUR_LINKEDIN_URL = "https://www.linkedin.com/in/yourprofile"; // Replace with your LinkedIn
export const YOUR_GITHUB_URL = "https://github.com/yourusername"; // Replace with your GitHub
export const YOUR_EMAIL = "youremail@example.com"; // Replace with your email

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Tech Feed', href: '#technews' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    title: 'AI-Powered E-commerce Platform',
    description: 'A cutting-edge e-commerce solution leveraging AI for personalized recommendations and dynamic pricing. Built with React, Next.js, and Python backend.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    githubUrl: `${YOUR_GITHUB_URL}/ecommerce-ai`,
    liveUrl: '#',
    tags: ['React', 'Next.js', 'AI', 'TailwindCSS', 'Python'],
  },
  {
    id: 'proj2',
    title: 'Interactive Data Visualization Dashboard',
    description: 'A dashboard for visualizing complex datasets using D3.js and Recharts, offering interactive charts and real-time data updates.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    githubUrl: `${YOUR_GITHUB_URL}/data-viz-dashboard`,
    tags: ['React', 'D3.js', 'Recharts', 'TypeScript'],
  },
  {
    id: 'proj3',
    title: 'Mobile-First Social Networking App',
    description: 'A responsive social app focused on community building and content sharing, developed with React Native and Firebase.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    githubUrl: `${YOUR_GITHUB_URL}/social-app`,
    liveUrl: '#',
    tags: ['React Native', 'Firebase', 'Mobile App'],
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'blog1',
    title: 'The Future of UI/UX with AI',
    summary: 'Exploring how artificial intelligence is reshaping user interface and user experience design, and what it means for developers and designers.',
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    postUrl: '#', // Link to your actual blog post
    publishDate: '2024-07-15',
  },
  {
    id: 'blog2',
    title: 'Mastering State Management in Large React Applications',
    summary: 'A deep dive into advanced state management techniques, comparing Redux, Zustand, and React Query for scalability and performance.',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    postUrl: '#',
    publishDate: '2024-06-28',
  },
  {
    id: 'blog3',
    title: 'Building Performant Web Animations',
    summary: 'Tips and tricks for creating smooth, performant animations on the web using CSS, JavaScript, and libraries like Framer Motion.',
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    postUrl: '#',
    publishDate: '2024-05-10',
  },
];

export const ABOUT_ME_TEXT = `
Hello! I'm ${YOUR_NAME}, a passionate ${YOUR_TITLE} with over 8 years of experience in crafting beautiful, responsive, and user-centric web applications. 
My expertise lies in the React ecosystem, TypeScript, and modern frontend technologies. I have a keen eye for UI/UX design and a strong believer in building software that not only functions flawlessly but also provides an enjoyable user experience. 
I'm proficient in leveraging AI APIs like Gemini to build intelligent features and always eager to explore new technologies to push the boundaries of web development.
When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or hiking in nature.
`;

export const SKILLS_LIST: string[] = [
  'React', 'TypeScript', 'JavaScript (ESNext)', 'Next.js', 'Node.js', 
  'Tailwind CSS', 'UI/UX Design', 'Responsive Design', 'API Integration (REST & GraphQL)', 
  'Gemini API', 'State Management (Redux, Zustand)', 'Testing (Jest, RTL)', 'CI/CD', 'Git'
];

export const TECH_NEWS_SERVICE_UNAVAILABLE_MESSAGE = "The Tech News service is currently unavailable. This feature requires API configuration that is not active.";
// GEMINI_MODEL_TEXT is no longer used by the service if it's disabled.
// export const GEMINI_MODEL_TEXT = 'gemini-2.5-flash-preview-04-17';
