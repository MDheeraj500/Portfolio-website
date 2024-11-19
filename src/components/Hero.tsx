import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-white relative">
      <div className="text-center">
        <p className="text-lg md:text-xl mb-2 animate-fade-in"></p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
        <span className="text-blue-500">Machiraju </span><span>Dheeraj </span><span className="text-red-500">Marthand</span>
        </h1>
        <h2 className="text-3xl md:text-3xl font-bold mb-6 animate-pulse">
        <span className="text-blue-500">A </span><span className="text-blue-600">Data </span><span className="text-blue-700">Science</span> <span className="text-blue-800">Visionary </span>
        <span>and </span> 
        <span className="text-red-500">Machine </span><span className="text-red-600">Learning </span><span className="text-red-700">Aficionado</span>
        </h2>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto animate-fade-in">
        I am a passionate Data Scientist specializing in NLP, Deep Learning, and Generative AI, 
        with a strong drive to harness the power of data to solve complex challenges. 
        My expertise was recognized when I was awarded the title of "Outstanding Skill Individual" 
        at the United States' second-largest hackathon HackUTD2024. Currently, I thrive in my role at the 
        University of North Texas Assessment Team, where I collaborate closely with the Vice President of 
        Student Affairs' team to enable data-driven decisions that enhance institutional effectiveness. 
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
