import React from 'react';
import { mergeClasses } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={mergeClasses(
        'rounded-lg shadow-lg bg-white',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({ className, children, ...props }) => {
  return (
    <div className={mergeClasses('p-4', className)} {...props}>
      {children}
    </div>
  );
};
