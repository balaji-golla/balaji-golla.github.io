
import { Project } from '../types';
import { CodeBracketIcon, ExternalLinkIcon } from '../components/Icons';

export const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'Portfolio Website',
    description: 'This very portfolio website, built with React, TypeScript, and Tailwind CSS.',
    longDescription: 'A personal showcase of skills and projects, designed to be clean, responsive, and easily updatable. Hosted on GitHub Pages.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'GitHub Pages'],
    imageUrl: './assets/images/project-portfolio.png', // User needs to create: assets/images/project-portfolio.png
    repoUrl: 'https://github.com/yourgithubusername/your-portfolio-repo', // Update with actual repo
    liveUrl: '#', // Current site
    date: '2024',
  },
  {
    id: 'proj2',
    title: 'E-commerce Platform UI',
    description: 'Frontend for a modern e-commerce platform with a focus on user experience.',
    longDescription: 'Developed a responsive and interactive user interface for an online store, featuring product listings, search, cart management, and checkout process. Implemented with React and Redux for state management.',
    technologies: ['React', 'Redux', 'Tailwind CSS', 'Stripe API (mocked)', 'Firebase (mocked)'],
    imageUrl: './assets/images/project-ecommerce.png', // User needs to create: assets/images/project-ecommerce.png
    repoUrl: 'https://github.com/yourgithubusername/ecommerce-ui',
    liveUrl: '#', // Placeholder for live demo
    date: '2023',
  },
  {
    id: 'proj3',
    title: 'Task Management App',
    description: 'A collaborative task management tool for small teams.',
    longDescription: 'Designed and built a web application that allows users to create, assign, and track tasks. Features include drag-and-drop boards, real-time updates, and user authentication.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    imageUrl: './assets/images/project-taskmanager.png', // User needs to create: assets/images/project-taskmanager.png
    repoUrl: 'https://github.com/yourgithubusername/task-manager',
    date: '2022',
  },
];
