import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
          Let's Connect
        </h2>
        <div className="flex justify-center space-x-20">
          <a
            href="https://www.linkedin.com/in/dheeraj-m-7a9112224/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-50 blur-xl transition duration-500 group-hover:opacity-75 group-hover:animate-spin-slow"></div>
            <Linkedin size={60} className="relative z-10 text-white transition-transform duration-300 group-hover:scale-125 group-hover:shadow-lg" />
          </a>
          <a
            href="https://github.com/MDheeraj500"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 opacity-50 blur-xl transition duration-500 group-hover:opacity-75 group-hover:animate-spin-slow"></div>
            <Github size={60} className="relative z-10 text-white transition-transform duration-300 group-hover:scale-125 group-hover:shadow-lg" />
          </a>
          <a
            href="mailto:dheerajmachiraju24@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 opacity-50 blur-xl transition duration-500 group-hover:opacity-75 group-hover:animate-spin-slow"></div>
            <Mail size={60} className="relative z-10 text-white transition-transform duration-300 group-hover:scale-125 group-hover:shadow-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
