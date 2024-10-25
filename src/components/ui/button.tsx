import React from 'react';
import { mergeClasses } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'solid', className, children, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors duration-200';
  const variantClasses = variant === 'outline'
    ? 'border border-gray-300 text-gray-700 hover:bg-gray-100'
    : 'bg-blue-600 text-white hover:bg-blue-700';

  return (
    <button className={mergeClasses(baseClasses, variantClasses, className)} {...props}>
      {children}
    </button>
  );
};
