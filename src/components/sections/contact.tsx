'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useState } from 'react';

const email = 'gokulnathvwork@gmail.com';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Coding-Devil',
    gradient: 'from-slate-900 to-emerald-900',
    hoverGradient: 'hover:from-emerald-800 hover:to-green-900',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gokulnath-v-2003g/',
    gradient: 'from-sky-700 to-blue-700',
    hoverGradient: 'hover:from-indigo-700 hover:to-blue-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 32 32">
        <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/gokulnath.03',
    gradient: 'from-purple-900 to-red-600',
    hoverGradient: 'hover:from-pink-900 hover:to-red-700',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.354 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  }
];

const ContactSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[#111111] overflow-hidden" id="contact">
      {/* Premium subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-48 h-48 bg-purple-600 rounded-full filter blur-[80px] opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-48 h-48 bg-blue-600 rounded-full filter blur-[80px] opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-40 h-40 bg-indigo-600 rounded-full filter blur-[80px] opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold  mb-4 text-purple-800">
            Let's Build Something Together
          </h2>

          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-lg mx-auto">
            Got an idea? Let's bring it to life. I'm just a message away.
          </p>

          {/* Email button - optimized sizing */}
          <div className="relative inline-flex group mt-7">
            <div className="absolute -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-sm group-hover:blur-md transition-all"></div>
            <div className="relative">
              <motion.a 
                href={`mailto:${email}`}
                className="relative inline-flex items-center gap-2 text-white bg-gradient-to-r from-slate-900 to-zinc-900 hover:from-purple-800 hover:to-blue-800 transition-all duration-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg border border-slate-800"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">{email}</span>
              </motion.a>
            </div>
          </div>

          {/* Social icons - adjusted spacing */}
          <div className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-12">
            {socialLinks.map(({ icon, href, name, gradient, hoverGradient }) => (
              <motion.a
                key={name}
                href={href}
                className={`text-white bg-gradient-to-r ${gradient} ${hoverGradient} transition-all duration-300 p-1.5 md:p-2 rounded-full shadow-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-6 md:w-7 md:h-7">
                  {icon}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
