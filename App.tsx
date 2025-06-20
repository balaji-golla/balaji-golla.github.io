
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProjectsPage from './pages/ProjectsPage';
import LearningPage from './pages/LearningPage';
import WritingsPage from './pages/WritingsPage';
import GithubReposPage from './pages/GithubReposPage';
import ContactPage from './pages/ContactPage';
import { SITE_TITLE } from './constants';
import { NAV_ITEMS } from './constants';

// Component to handle dynamic page titles
const PageTitleUpdater: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const currentNavItem = NAV_ITEMS.find(item => item.path === location.pathname);
    if (currentNavItem) {
      document.title = `${currentNavItem.label} | ${SITE_TITLE}`;
    } else if (location.pathname === '/') {
       document.title = `Home | ${SITE_TITLE}`;
    } else {
      document.title = SITE_TITLE;
    }
  }, [location]);

  return null;
};


const App: React.FC = () => {
  return (
    <>
      <PageTitleUpdater />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="learning" element={<LearningPage />} /> {/* Courses & Certificates */}
          <Route path="writings" element={<WritingsPage />} /> {/* Blog & Whitepapers */}
          <Route path="github" element={<GithubReposPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} /> {/* Fallback to HomePage or a 404 component */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
