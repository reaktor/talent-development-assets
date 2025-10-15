import React from 'react';
import { Header } from '../organisms';

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ 
  title, 
  subtitle, 
  children 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={title} subtitle={subtitle} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;