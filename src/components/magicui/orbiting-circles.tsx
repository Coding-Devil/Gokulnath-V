"use client";

import React, { ReactNode, useEffect, useRef } from 'react';

interface OrbitingCirclesProps {
  className?: string;
  duration?: number;
  delay?: number;
  radius?: number;
  reverse?: boolean;
  children: ReactNode;
}

const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  children,
  className,
  duration = 20,
  delay = 0,
  radius = 100,
  reverse = false,
}) => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    const childElements = Array.from(orbit.children) as HTMLElement[];
    const angleStep = (2 * Math.PI) / childElements.length;

    childElements.forEach((child, index) => {
      const angle = angleStep * index;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      child.style.position = 'absolute';
      child.style.left = `calc(50% + ${x}px)`;
      child.style.top = `calc(50% + ${y}px)`;
      child.style.transform = 'translate(-50%, -50%)';

      const animation = child.animate(
        [
          { transform: `translate(-50%, -50%) rotate(${reverse ? '360deg' : '0deg'})` },
          { transform: `translate(-50%, -50%) rotate(${reverse ? '0deg' : '360deg'})` },
        ],
        {
          duration: duration * 1000,
          iterations: Infinity,
          delay: (delay * index * 1000) / childElements.length,
        }
      );

      return () => animation.cancel();
    });
  }, [duration, delay, radius, reverse]);

  return (
    <div ref={orbitRef} className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default OrbitingCircles;
