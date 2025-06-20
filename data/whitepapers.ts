
import { Whitepaper } from '../types';
import { BookOpenIcon } from '../components/Icons';

export const whitepapersData: Whitepaper[] = [
  {
    id: 'wp1',
    title: 'Scalable React Architectures for Enterprise Applications',
    date: 'June 10, 2023',
    summary: 'An in-depth analysis of architectural patterns and best practices for building large-scale, maintainable React applications.',
    fileUrl: './assets/documents/scalable-react-architectures.pdf', // User needs to create
    imageUrl: './assets/images/wp-react-architecture.png', // User needs to create
    authors: ['Your Name', 'Co-author Name'],
  },
  {
    id: 'wp2',
    title: 'The Impact of WebAssembly on Frontend Performance',
    date: 'November 5, 2022',
    summary: 'Investigating the potential of WebAssembly to enhance frontend application performance and user experience.',
    fileUrl: './assets/documents/webassembly-frontend-performance.pdf', // User needs to create
    imageUrl: './assets/images/wp-webassembly.png', // User needs to create
    authors: ['Your Name'],
  },
];
