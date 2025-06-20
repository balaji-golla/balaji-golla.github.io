
import React from 'react';
import { coursesData } from '../data/courses';
import { certificatesData } from '../data/certificates';
import Card from '../components/Card';
import Section from '../components/Section';
import { Course, Certificate } from '../types';
import { AcademicCapIcon, CheckCircleIcon, ExternalLinkIcon, DocumentArrowDownIcon } from '../components/Icons';

const LearningPage: React.FC = () => {
  return (
    <div>
      <Section title="Courses & Continuous Learning" subtitle="My commitment to staying updated with the latest technologies and skills.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coursesData.map((course: Course) => (
            <Card
              key={course.id}
              title={course.title}
              subtitle={course.institution}
              description={course.description || ''}
              date={course.date}
              imagePlaceholder={course.icon || <AcademicCapIcon className="w-12 h-12" />}
              links={course.certificateUrl ? [{ href: course.certificateUrl, text: 'View Certificate', icon: <DocumentArrowDownIcon className="w-4 h-4 mr-1" /> }] : []}
            />
          ))}
        </div>
      </Section>

      <Section title="Certifications" subtitle="Official recognitions of my skills and knowledge.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert: Certificate) => (
            <Card
              key={cert.id}
              title={cert.title}
              subtitle={cert.issuingOrganization}
              description={cert.credentialId ? `Credential ID: ${cert.credentialId}` : ''}
              imageUrl={cert.imageUrl}
              imagePlaceholder={cert.icon || <CheckCircleIcon className="w-12 h-12" />}
              date={cert.date}
              links={cert.credentialUrl ? [{ href: cert.credentialUrl, text: 'View Credential', icon: <ExternalLinkIcon className="w-4 h-4 mr-1" /> }] : []}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default LearningPage;
