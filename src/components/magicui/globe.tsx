import React from 'react';

interface GlobeProps {
  className?: string;
}

const Globe: React.FC<GlobeProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-48 h-48 rounded-full bg-blue-500 bg-opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-blue-400 bg-opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-300 bg-opacity-40"></div>
    </div>
  );
};

export default Globe;
