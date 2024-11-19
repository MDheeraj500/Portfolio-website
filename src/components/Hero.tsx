import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-white relative">
      <div className="text-center">
        <p className="text-lg md:text-xl mb-2 animate-fade-in">Hello, I am</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
        <span className="text-blue-500">Machiraju </span><span className="text-green-500">Dheeraj </span><span className="text-purple-500">Marthand</span>
        </h1>
        <h2 className="text-3xl md:text-3xl font-bold mb-6 animate-pulse">
        A <span className="text-blue-200">Data </span><span className="text-blue-300">Science</span> <span className="text-blue-400">Visionary </span>
        <span className="text-green-500">and </span> 
        <span className="text-purple-300">Generative </span><span className="text-purple-400">AI </span><span className="text-purple-500">Aficionado</span>
        </h2>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto animate-fade-in">
        I’m passionate about transforming raw data into meaningful insights that drive impactful decisions. 
        With a love for all things data, I dive deep into Machine Learning, specializing in NLP and generative AI. 
        But my journey doesn’t stop there – I balance my love for data with a dedication to fitness, making these two passions the fuel that drives me forward.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-flex items-center mt-6 animate-bounce"
        >
          Explore My Work
          <ChevronDown className="ml-2" />
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
