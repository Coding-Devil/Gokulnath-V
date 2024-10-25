"use client";

import React from 'react';
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const IconCloudClient = dynamic(() => import('./IconCloudClient'), { ssr: false });

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="mt-4 py-10">
    <Typography variant="h4" className="text-sm font-semibold mb-2 text-purple-400">
      {title}
    </Typography>
    <div className="flex flex-wrap gap-1">
      {skills.map((skill, index) => (
        <span key={index} className="text-xs bg-gray-700 text-gray-200 rounded px-2 py-1">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const { theme } = useTheme();
  const skillCategories = [
    {
      title: "Languages I Work With",
      skills: ["Python", "Java", "C", "C++", "SQL", "JavaScript", "R", "HTML5", "CSS3"],
    },
    {
      title: "Libraries & Frameworks",
      skills: ["React", "Tailwind", "Angular", "Bootstrap", "NodeJS", "Next.js", "Express"],
    },
    {
      title: "Python Libraries",
      skills: ["Pandas", "TensorFlow", "PyTorch", "Scikit Learn", "Matplotlib"],
    },
    {
      title: "Databases & Cloud",
      skills: ["MySQL", "MongoDB", "Amazon Web Services" ],
    },
    {
      title: "Control Tools",
      skills: ["Git", "Power BI", "Photoshop", "MS Office", "Vercel", "VS Code"],
    },
  ];

  return (
    <section className="py-1 w-full overflow-hidden" id="skills">
  <Container className="overflow-hidden">
        <div className="flex flex-col items-center gap-4 mb-12">
          <motion.div
            className="self-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Tag 
              label="Skills" 
              className="text-xl font-semibold px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-black shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
          <Typography variant="subtitle1" className="max-w-xl text-center">
            The skills, tools and technologies I am really good at:
          </Typography>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full overflow-hidden">
  <div className="w-full lg:w-1/2 overflow-hidden">
    <IconCloudClient />
  </div>

          <div className="w-full lg:w-1/2">
          <div className="gradient-border p-6 shadow-xl animated-gradient">
              {skillCategories.map((category, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <Typography variant="h5" className={`text-sm font-semibold mb-3 ${
                    theme === 'dark' ? 'text-sky-100' : 'text-blue-400'
                  }`}>
                    {category.title}
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`text-xs px-2 py-1 rounded-full ${
                          theme === 'dark'
                            ? 'bg-green-400 text-black font-semibold hover:bg-blue-600'
                            : 'bg-pink-200 text-black font-semibold hover:bg-gray-300'
                        } transition-colors duration-200`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
