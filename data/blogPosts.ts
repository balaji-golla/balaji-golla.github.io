
import { BlogPost } from '../types';
import { DocumentTextIcon } from '../components/Icons';

export const blogPostsData: BlogPost[] = [
  {
    id: 'blog1',
    title: 'The Future of Frontend Development in 2024',
    date: 'March 15, 2024',
    summary: 'Exploring upcoming trends, tools, and techniques that will shape the frontend landscape.',
    contentPreview: 'The world of frontend development is ever-evolving. In this post, we look at AI-powered tools, the rise of server components, and new CSS features...',
    imageUrl: './assets/images/blog-future-frontend.png', // User needs to create
    link: '#', // Placeholder, could link to a markdown file or external blog
  },
  {
    id: 'blog2',
    title: 'Mastering Tailwind CSS for Rapid UI Development',
    date: 'January 20, 2024',
    summary: 'A comprehensive guide to leveraging Tailwind CSS for building beautiful and responsive UIs quickly.',
    contentPreview: 'Tailwind CSS has revolutionized how developers approach styling. Learn tips, tricks, and best practices for becoming a Tailwind pro...',
    imageUrl: './assets/images/blog-tailwind-mastery.png', // User needs to create
    link: '#',
  },
];
