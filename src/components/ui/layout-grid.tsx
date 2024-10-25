'use client';

/* eslint-disable @next/next/no-img-element */

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';

interface Certification {
  id: number;
  name: string;
  provider: string;
  logo: string;
  description: string;
}

const certificationData = [
  {
    id: 1,
    name: "AWS Cloud Foundations",
    provider: "Amazon AWS Academy",
    logo: "/images/certifications/aws.png",
    description: "Core AWS services and architectural best practices for cloud computing."
    
  },
  {
    id: 2,
    name: "Machine Learning Specialization",
    provider: "Stanford, Andrew NG",
    logo: "/images/certifications/deep.png",
    description: "Comprehensive specialization covering ML algorithms, neural networks, and deep learning."
  },
  {
    id: 3,
    name: "Artificial Intelligence Course",
    provider: "Samsung SIC",
    logo: "/images/certifications/sam.png",
    description: "Fundamentals of AI, machine learning, and deep learning."
  },
  {
    id: 4,
    name: "Google IT Support",
    provider: "Google, Coursera",
    logo: "/images/certifications/Google-IT-Professional-Certificate-Logo.png",
    description: "Essential skills for IT support professionals."
  },
  {
    id: 5,
    name: "Python Essentials",
    provider: "Cisco",
    logo: "/images/certifications/cisco.png",
    description: "Foundational knowledge of Python programming."
  },
  {
    id: 6,
    name: "Data Analytics Professional Certificate",
    provider: "Google",
    logo: "/images/certifications/image.png",
    description: "Data analysis and visualization skills."
  }
];

const achievements = [
  "Awarded 'Medal of Merit' for academic excellence throughout Engineering.",
  "Second Best 'Student Project' among top Universities in Nokia (NBUC) 2024 for pioneering work in 6G network optimization.",
  "Represented RNSIT in the GenAI hackathon organized by GLC and HP in January 2024.",
  "Represented RNSIT in the Samsung SSIR Hackathon in August 2024.",
  "Consistently recognised 'Student of the Year' in High School for excelling in sports, academics and leadership."
];

interface AchievementsLayoutProps {
  certifications: {
    id: number;
    name: string;
    description: string;
    issueDate: string;
    logo: string;
  }[];
  achievements: {
    id: number;
    title: string;
    date: string;
  }[];
}

const AchievementsLayout: React.FC<AchievementsLayoutProps> = ({ certifications, achievements }) => {
  // Use the props to render the UI
  return (
    <div>
      {/* Render certifications */}
      {certifications.map(cert => (
        <div key={cert.id}>
          <img src={cert.logo} alt={cert.name} />
          <h3>{cert.name}</h3>
          <p>{cert.description}</p>
          <span>{cert.issueDate}</span>
        </div>
      ))}

      {/* Render achievements */}
      {achievements.map(ach => (
        <div key={ach.id}>
          <h3>{ach.title}</h3>
          <span>{ach.date}</span>
        </div>
      ))}
    </div>
  );
};

export default AchievementsLayout;
