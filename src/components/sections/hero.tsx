import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Github, Linkedin, Instagram } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

import SagarHeadshot from '/public/images/gokulnath.png';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const heroItems = [
  {
    title: "GitHub",
    icon: (
      <svg
        className="w-5 h-5 mr-2 text-emerald-900 dark:text-indigo-500"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: "https://github.com/Coding-Devil",
  },
  {
    title: "LinkedIn",
    icon: (
      <svg
        className="w-5 h-5 mr-2 text-indigo-300 dark:text-indigo-500"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/gokulnath-v-2003g/",
  },
  {
    title: "Instagram",
    icon: (
      <Instagram className="w-5 h-5 mr-2 text-indigo-300 dark:text-indigo-500" />
    ),
    href: "https://instagram.com/gokulnath.03",
  },
];

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Container id="hero" className="relative z-10">
        <div className="flex flex-col md:gap-24 md:flex-row items-center">
          {/* Simplified Image Section */}
          <div className="w-full max-w-[280px] mb-10 md:max-w-[300px] md:order-last">
            <div className="relative w-full aspect-square">
              <Image
                src={SagarHeadshot}
                alt="Headshot of Gokulnath"
                width={300}
                height={300}
                className="rounded-lg w-full h-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                priority
              />
            </div>
          </div>
          {/* Content */}
          <div className="flex max-w-2xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <Typography variant="h1" className="flex flex-col">
                <span className="text-2xl font-normal">Hi 👋 I&apos;m</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-bold relative mt-2 transition-all duration-500 hover:from-blue-400 hover:via-purple-500 hover:to-cyan-400 hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  GOKULNATH V
                </span>
              </Typography>
              <br />
              <Typography className="text-justify text-md font-serif">
                Passionate Software Developer specializing in Python, C++ & web development. 
                Expert in Machine learning, AWS deployment and DevOps tools. 
                Proven track record in AI-driven applications and agile environments. 
                Eager to leverage my technical and analytical skills to tackle complex challenges and deliver impactful software solutions.
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <MapPin className="stroke-gray-600" />
                <Typography>Bangalore, India</Typography>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <Typography className="text-primary-100" style={{ fontFamily: 'georgia, serif' }}>
                  &quot;It's not who you are underneath, but what you do defines you.&quot;
                </Typography>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/Coding-Devil"
                className="text-white border-white bg-gradient-to-r from-slate-900 to-emerald-900 hover:from-emerald-800 hover:to-green-900 transition-all duration-300 p-2 rounded-full shadow-lg"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/gokulnath-v-2003g/"
                className="text-blue border-white bg-gradient-to-r from-sky-700 to-blue-700 hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 p-2 rounded-full shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"  // Increased size
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/gokulnath.03"
                className="text-white border-white bg-gradient-to-r from-purple-900 to-red-600 hover:from-slate-900 hover:to-blue-700 transition-all duration-300 p-2 rounded-full shadow-lg"
              >
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
