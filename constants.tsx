
import React from 'react';
import type { SVGProps } from 'react';
import { NavItem, Project, BlogPost, ContactLink } from './types';

export const API_FETCH_DELAY = 100; // ms, to simulate network latency if needed for loading states

export const NAV_ITEMS: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'News', href: '#news' },
  { name: 'Releases', href: '#releases' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Tidbits', href: '#tidbits' },
  { name: 'Contact', href: '#contact' },
];

interface IconProps extends SVGProps<SVGSVGElement> {}

const GithubIconSvg: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIconSvg: React.FC<IconProps> = (props) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const ExternalLinkIconSvg: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={`w-4 h-4 ml-1 ${className || ''}`.trim()} 
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const GITHUB_ICON = <GithubIconSvg />;
export const LINKEDIN_ICON = <LinkedinIconSvg />;
export const EXTERNAL_LINK_ICON = <ExternalLinkIconSvg />;


export const STATIC_PROJECTS: Project[] = [
  {
    id: 'proj1',
    name: 'AI Powered Code Reviewer',
    description: 'A tool that uses large language models to automatically review pull requests and provide feedback.',
    techStack: ['Python', 'FastAPI', 'Docker', 'React', 'Gemini API'],
    githubUrl: 'https://github.com/yourusername/ai-code-reviewer',
    liveUrl: '#',
    imageUrl: 'https://picsum.photos/seed/project1/400/250',
  },
  {
    id: 'proj2',
    name: 'Decentralized Social Network',
    description: 'A social media platform built on decentralized technologies, ensuring user data privacy and control.',
    techStack: ['Solidity', 'IPFS', 'Next.js', 'Ethers.js'],
    githubUrl: 'https://github.com/yourusername/decentralized-social',
    imageUrl: 'https://picsum.photos/seed/project2/400/250',
  },
  {
    id: 'proj3',
    name: 'Personal Portfolio Website v2',
    description: 'This very website! Built with React, Tailwind CSS, and Gemini API for dynamic content.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    githubUrl: 'https://github.com/yourusername/portfolio-v2',
    liveUrl: '#',
    imageUrl: 'https://picsum.photos/seed/project3/400/250',
  }
];

export const STATIC_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog1',
    title: 'The Future of AI in Software Development',
    summary: 'Exploring how artificial intelligence is reshaping the landscape of software engineering, from automated testing to AI-assisted coding.',
    date: 'October 15, 2023',
    url: '#',
    imageUrl: 'https://picsum.photos/seed/blog1/400/200',
  },
  {
    id: 'blog2',
    title: 'Getting Started with Tailwind CSS: A Beginner\'s Guide',
    summary: 'A comprehensive walkthrough for developers looking to integrate Tailwind CSS into their projects for rapid UI development.',
    date: 'September 28, 2023',
    url: '#',
    imageUrl: 'https://picsum.photos/seed/blog2/400/200',
  },
];

export const YOUR_NAME = "Your Name"; // Replace with your name
export const YOUR_TITLE = "Senior Frontend React Engineer & AI Enthusiast";
export const YOUR_LINKEDIN_URL = "https://www.linkedin.com/in/yourprofile"; // Replace
export const YOUR_GITHUB_URL = "https://github.com/yourusername"; // Replace
export const YOUR_EMAIL = "your.email@example.com"; // Replace

export const CONTACT_LINKS: ContactLink[] = [
    { name: 'LinkedIn', url: YOUR_LINKEDIN_URL, icon: LINKEDIN_ICON },
    { name: 'GitHub', url: YOUR_GITHUB_URL, icon: GITHUB_ICON },
];
