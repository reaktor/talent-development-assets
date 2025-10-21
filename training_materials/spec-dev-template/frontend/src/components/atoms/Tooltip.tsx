import React from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  return (
    <div className="group relative inline-flex">
      {children}
      <div
        role="tooltip"
        className="
          invisible group-hover:visible
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          z-50 overflow-hidden rounded-md bg-gray-900 px-3 py-1.5
          text-xs text-white shadow-md whitespace-nowrap
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
        "
      >
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-gray-900" />
      </div>
    </div>
  );
};

export default Tooltip;
