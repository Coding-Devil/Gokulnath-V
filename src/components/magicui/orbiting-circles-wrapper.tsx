import dynamic from 'next/dynamic';

const OrbitingCircles = dynamic(() => import('./orbiting-circles'), { ssr: false });

export default OrbitingCircles;
