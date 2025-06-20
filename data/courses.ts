
import { Course } from '../types';
import { AcademicCapIcon } from '../components/Icons';

export const coursesData: Course[] = [
  {
    id: 'course1',
    title: 'Advanced React Patterns',
    institution: 'Frontend Masters',
    date: '2023',
    description: 'Deep dive into advanced React concepts, performance optimization, and architectural patterns.',
    certificateUrl: './assets/documents/advanced-react-cert.pdf', // User needs to create
    icon: <AcademicCapIcon className="w-10 h-10 text-blue-500" />
  },
  {
    id: 'course2',
    title: 'TypeScript Fundamentals',
    institution: 'Udemy',
    date: '2022',
    description: 'Comprehensive course on TypeScript, covering everything from basics to advanced types and integration with React.',
    icon: <AcademicCapIcon className="w-10 h-10 text-blue-500" />
  },
  {
    id: 'course3',
    title: 'UI/UX Design Specialization',
    institution: 'Coursera (CalArts)',
    date: '2021',
    description: 'Specialization covering visual design principles, user research, and prototyping.',
    certificateUrl: './assets/documents/uiux-spec-cert.pdf', // User needs to create
    icon: <AcademicCapIcon className="w-10 h-10 text-blue-500" />
  },
];
