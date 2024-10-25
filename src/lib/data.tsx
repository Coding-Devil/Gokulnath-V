import { Github, Linkedin, Instagram } from 'lucide-react';


import AI from '/public/images/antigpt.jpeg'; // Ensure correct path
import SCI from '/public/images/scimom.jpeg'; // Ensure correct path
import EB from '/public/images/electricity-bill-payment-online.jpg'; // Ensure correct path
import CAR from '/public/images/carprice.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

import LogoNokia from '/public/images/logos/logo-nokia.png';
import LogoProdigy from '/public/images/logos/logop.svg';


export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Accomplishments',
    href: '#certifications',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/Coding-Devil',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/gokulnath-v-2003g/',
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/gokulnath.03',
  },
];


export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoNokia,
    logoAlt: 'Nokia logo',
    position: 'Undergrad Research Student (Lead)',
    company: 'NOKIA NBUC - RNSIT',
    startDate: new Date(2024, 4), // May 2024
    endDate: new Date(2024, 8), // September 2024
    currentlyWorkHere: false,
    summary: [
      "Improved 'Self-Optimization' and enhanced the 'Quality of Service' for 6G Cellular Base Stations using Reinforcement Learning.",
      "Leveraged advanced RL & FL techniques to significantly enhance network efficiency and user experience.",
      "Developed novel algorithms to dynamically adjust network parameters, ensuring optimal resource allocation and QoS levels in real-time."
    ],
  },
  {
    logo: LogoProdigy,
    logoAlt: 'Prodigy Infotech logo',
    position: 'Web Developer Intern',
    company: 'PRODIGY INFOTECH',
    startDate: new Date(2023, 10), // November 2023
    endDate: new Date(2023, 11), // December 2023
    currentlyWorkHere: false,
    summary: [
      "Developed and enhanced web applications using HTML, CSS & JavaScript, focusing on improving user experience and functionality."
    ],
  },
];
export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Anti-GPT',
    description: `
      Implemented an AI multi-modal, integrating multiple open-source models from HuggingFace 
      for specific AI tasks like text-to-image generation, Natural Language Chat, and interactive 
      PDF querying, with a responsive Streamlit UI, ensuring seamless functionality.
    `,
    technologies: ['Gen-AI', 'Python', 'LLM', 'NVIDIA DGX'],
    url: 'https://gokulnath2003-anti-gpt.hf.space/', // Replace with actual GitHub URL
    
    previewImage: AI, // Retain the existing image
    liveDemo: "https://gokulnath2003-anti-gpt.hf.space/",  // Optional
    githubUrl: "https://github.com/Coding-Devil/AI-Multimodel-Hub"    
  },
  {
    name: 'Sci-Mom',
    description: `
      Developed Sci-Mom, powered by the fine-tuned Zephyr 7B β (Mistral-7B-v0.1) using Direct 
      Preference Optimization & AutoTrain using textbooks, offering instant science query 
      resolution and custom question paper generation, with a user-friendly interface.
    `,
    technologies: ['Zephyr 7B', 'NLP', 'HuggingFace', 'DPO'],
    url: 'https://gokulnath2003-scimom.hf.space/', // Replace with actual GitHub URL
    liveDemo: "https://gokulnath2003-scimom.hf.space/",  // Optional
    githubUrl: "https://github.com/Coding-Devil/SciMom",    
    previewImage: SCI, // Retain the existing image
  },
  {
    name: 'Electricity Bill Management System',
    description: `
      Built an Electricity bill management system, using Java & MySQL with optimized queries, 
      offering faster data retrieval and streamlined electricity bill management through a 
      user-friendly interface.
    `,
    technologies: ['Java', 'MySQL', 'JDBC'],
    url: 'https://github.com/Coding-Devil/Electricity-bill-DBMS', // Replace with actual GitHub URL
    previewImage: EB, // Retain the existing image
    liveDemo: "https://github.com/Coding-Devil/Electricity-bill-DBMS",  // Optional
    githubUrl: "https://github.com/Coding-Devil/Electricity-bill-DBMS"    
  },
  {
    name: 'Car Resale Value Analyser Model',
    description: `
      Deployed a data-driven machine learning model for accurate prediction of used car resale 
      values from CarDekho’s dataset, utilizing EDA for feature optimization, and deployed for 
      real-time prediction services.
    `,
    technologies: ['Python', 'EDA', 'Multi-linear Regression'],
    url: 'https://github.com/Coding-Devil/Car-Resale', // Replace with actual GitHub URL
    liveDemo: "https://gokulnath2003-car-price-pred.hf.space/",  // Optional
    githubUrl: "https://github.com/Coding-Devil/Car-Resale",    
    previewImage: CAR, // Retain the existing image
  },
];

