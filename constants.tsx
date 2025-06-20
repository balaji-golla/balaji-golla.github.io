import React from 'react';
import { NavItem } from './types';
import { HomeIcon, BriefcaseIcon, AcademicCapIcon, DocumentTextIcon, CodeBracketIcon, ChatBubbleLeftEllipsisIcon, IdentificationIcon } from './components/Icons';

export const SITE_TITLE = "My Portfolio";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: <HomeIcon className="w-5 h-5 mr-2" /> },
  { label: 'Profile', path: '/profile', icon: <IdentificationIcon className="w-5 h-5 mr-2" /> },
  { label: 'Projects', path: '/projects', icon: <BriefcaseIcon className="w-5 h-5 mr-2" /> },
  { label: 'Learning', path: '/learning', icon: <AcademicCapIcon className="w-5 h-5 mr-2" /> }, // For Courses and Certificates
  { label: 'Writings', path: '/writings', icon: <DocumentTextIcon className="w-5 h-5 mr-2" /> }, // For Blog and Whitepapers
  { label: 'GitHub', path: '/github', icon: <CodeBracketIcon className="w-5 h-5 mr-2" /> },
  { label: 'Contact', path: '/contact', icon: <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-2" /> },
];