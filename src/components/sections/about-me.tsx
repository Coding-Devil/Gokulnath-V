'use client'; // Add this line at the top

import React from 'react';
import { motion } from 'framer-motion'; // Ensure this import is present
import { CalendarIcon, GraduationCapIcon, BookIcon, SchoolIcon, BriefcaseIcon, ChevronRightIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const EducationTimeline = () => {
  const educationData = [
    {
      institution: "RNS INSTITUTE OF TECHNOLOGY, Bangalore",
      period: "2021 - present",
      degree: "Bachelor of Engineering in Computer Science & Data Science",
      details: [
        "CGPA: 9.41",
        "Coursework: Programming, DBMS, Networks, DSA, OS, ML, Cloud"
      ]
    },
    {
      institution: "KLE SNC PU COLLEGE, Bangalore",
      period: "2019 - 2021",
      degree: "PUC (PCMB)",
      details: [
        "Scored 99.3%"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <div key={index} className="border-l-2 border-green-500 pl-4 py-2">
          <Typography variant="h4" className="text-l font-bold text-blue-500 mb-1">{edu.institution}</Typography>
          <div className="flex items-center text-gray-600 mb-1">
            <CalendarIcon className="w-3 h-3 mr-2 mb-2" />
            <Typography className="text-s mb-2">{edu.period}</Typography>
          </div>
          <Typography variant="h5" className="text-xl font-semibold text-purple-600 mb-2">{edu.degree}</Typography>
          <ul className="list-none space-y-1">
            {edu.details.map((detail, detailIndex) => (
              <li key={detailIndex}>
                <Typography className="text-gray-700 text-sm">
                  • {detail}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const AboutMeSection = () => {
  return (
    <Container className="bg-slate-950" id="about">
      <div className="self-center mb-8">
        <Tag 
          label="About me" 
          className="text-xl font-semibold px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-black shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <Typography variant="h3" className="text-3xl font-bold text-sky-500 mb-4" style={{ fontFamily: 'Lora, serif' }}>
            Hey there, I'm Gokulnath
          </Typography>
          <Typography className="text-justify text-white-700 leading-relaxed" style={{ fontFamily: 'Georgia, sans-serif' }}>
            I'm wrapping up my Bachelor's in Data Science at RNS Institute of Technology, rocking a 9.41 CGPA, with a solid grip on Python, C++ and SQL. Pretty neat, right?
          </Typography>
          <Typography className="text-justify text-white-700 leading-relaxed" style={{ fontFamily: 'Georgia, sans-serif' }}>
            Machine learning and cloud computing? That's my jam. I've built some cool stuff like an AI Multimodal Hub and an Electricity Bill System. It's not just theoretical – I'm all about solving real-world problems.
          </Typography>
          <Typography className="text-justify text-white-700 leading-relaxed" style={{ fontFamily: 'Georgia, sans-serif' }}>
            Recently, I got to work with Nokia on some cutting-edge 6G tech. We're talking reinforcement learning and federated learning to make base stations smarter. It's like being in a sci-fi movie, but it's real life!
          </Typography>
          <Typography className="text-justify text-white-700 leading-relaxed" style={{ fontFamily: 'Georgia, sans-serif' }}>
            When I'm not knee-deep in code, I'm running workshops,  Sharing knowledge on prompt engineering and web dev with the next generation of tech enthusiasts is my way of giving back.
          </Typography>
          <Typography className="text-justify text-white-700 leading-relaxed" style={{ fontFamily: 'Georgia, sans-serif' }}>
            Looking ahead, I'm pumped to dive into the tech industry, bringing fresh ideas and a collaborative spirit. I'm all about pushing boundaries and exploring what's next in tech.
          </Typography>
          <Typography className="text-xl font-semibold text-stone-400 mt-4 mb-2">Quick facts about me:</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ul className="space-y-4">
          {[
            { text: "Data Science Aspirant", icon: "📊" },
            { text: "AI-developer", icon: "🤖" },
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-black rounded-full text-blue-500 text-xl">
                {item.icon}
              </span>
              <Typography className="text-justify flex-grow">{item.text}</Typography>
            </li>
          ))}
        </ul>
        <ul className="space-y-4">
          {[
            { text: "ML & Cloud enthusiast", icon: "☁️" },
            { text: "6G research contributor", icon: "📡" },
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-black rounded-full text-green-500 text-xl">
                {item.icon}
              </span>
              <Typography className="text-justify flex-grow">{item.text}</Typography>
            </li>
          ))}
        </ul>
        </div>
          <Typography className="text-justify text-white-700 leading-relaxed mt-8" style={{ fontFamily: 'Georgia, sans-serif' }}>
            Want to chat tech or collaborate on something cool? Hit me up on LinkedIn or check out my projects on GitHub. Let's make some digital magic happen!
          </Typography>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/gokulnath-v-2003g/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-white border-white bg-gradient-to-r from-slate-900 to-blue-900 hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/Coding-Devil" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-white border-white bg-gradient-to-r from-stone-900 to-emerald-900 hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </Button>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
      <div className="bg-gray-80 p-4 rounded-lg shadow-md mt-8">
        <div className="flex items-center mb-4">
          <GraduationCapIcon className="w-6 h-10 text-blue-500 mr-2" />
          <Typography variant="h3" className="text-l font-bold">Education Journey</Typography>
        </div>
        <EducationTimeline />
      </div>
    </div>
  </div>
    </Container>
  )
}

export default AboutMeSection;
