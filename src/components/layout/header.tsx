'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from '@/components/navigation/drawer';
import { NAV_LINKS } from '@/lib/data';
import useWindowSize from '@/hooks/use-window-size';
import Link from '@/components/navigation/link';
import IconButton from '@/components/general/icon-button';
import DownloadCV from '@/components/general/download-cv';
import Typography from '@/components/general/typography';

const Logo = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Typography 
      variant="h3" 
      className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 ease-in-out transform hover:drop-shadow-[0_0_0.3rem_#4f46e570] hover:drop-shadow-[0_0_0.8rem_#7c3aed30]"
    >
      Gokulnath V
    </Typography>
  </motion.div>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-30 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-[#111111]/80 backdrop-blur-lg border-b border-gray-800/20 shadow-[0_2px_8px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Link href="/" noCustomization>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden items-center gap-6 md:flex"
        >
          <ul className="flex list-none items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link 
                  href={link.href}
                  className="text-gray-700 hover:text-indigo-500 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="h-6 w-[1px] bg-gradient-to-b from-gray-800 to-gray-700"></div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4"
          >
            <DownloadCV />
          </motion.div>
        </motion.div>

        {/* Mobile Navigation - Compact Dark Version */}
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton className="bg-black hover:bg-[#111111] border border-gray-800/20">
              <Menu className="h-5 w-5 text-gray-700 hover:text-green-800 transition-colors" />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent className="w-[280px] right-0 bg-black border-l border-gray-800/20">
            {/* Header Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between p-4 mb-2 "
            >
              <Logo />
              <DrawerClose asChild>
                <IconButton className="bg-black hover:bg-[#1a1a1a] border border-gray-800/20">
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-200 transition-colors" />
                </IconButton>
              </DrawerClose>
            </motion.div>

            {/* Navigation Links with Download CV */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-4 py-2 "
            >
              <ul className="grid gap-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center p-3 text-gray-400 hover:text-sky-500 bg-[#111111] hover:bg-[#1a1a1a] rounded-lg transition-all duration-200 group"
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 300);
                      }}
                    >
                      <span className="text-sm font-medium">{link.label}</span>
                      <motion.span 
                        className="ml-auto text-gray-600"
                        whileHover={{ x: 2 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
                
                {/* Download CV Button */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.1 }}
                  className="mt-2"
                >
                  <div className="flex items-center p-3 text-gray-400 bg-[#111111] rounded-lg">
                    <span className="text-sm font-medium">Resume</span>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="ml-auto"
                    >
                      <DownloadCV />
                    </motion.div>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.header>
  );
};

export default Header;
