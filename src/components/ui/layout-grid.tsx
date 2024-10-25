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

export const AchievementsLayout = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 w-full">
      {/* Left Side - Achievements List */}
      <div className="md:w-1/2 ">
      <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
        Notable Achievements :
        </h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-900 to-black/90 p-6 rounded-xl shadow-sm border border-gray-800/20 hover:shadow-md transition-all duration-300"
            >
              <p className="text-gray-700 text-m leading-relaxed">{achievement}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right Side - Certification Grid */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
          Certifications :
        </h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4"
        >
          {certificationData.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: hoveredIndex === index ? 2 : 0 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative cursor-pointer overflow-hidden bg-[#111111] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-800/20"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="absolute inset-10 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src={cert.logo}
                  alt={cert.provider}
                  width={100}
                  height={50}
                />
              </motion.div>
              <div className="text-center">
                <p className="text-xs text-gray-800 font-medium group-hover:text-gray-300 transition-colors">
                  {cert.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedCert && (
          <Dialog
            open={true}
            onClose={() => setSelectedCert(null)}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative cursor-pointer overflow-hidden bg-[#111111] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-800/20"
>
<div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-900" />
      

                <div className="relative">
                  <Image 
                    src={selectedCert.logo}
                    alt={selectedCert.name}
                    width={100}
                    height={50}
                  />
                  <Dialog.Title className="text-xl font-bold text-center">
                    {selectedCert.name}
                  </Dialog.Title>
                  <p className="text-black font-bold mt-2 text-center text-sm">
                    {selectedCert.provider}
                  </p>
                  <p className="mt-4 text-gray-700 text-center">
                    {selectedCert.description}
                  </p>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};
