import React from 'react';
import { Text } from '../atoms';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Text size="4xl" weight="bold">{title}</Text>
        {subtitle && (
          <Text size="lg" variant="muted" className="mt-2">{subtitle}</Text>
        )}
      </div>
    </header>
  );
};

export default Header;