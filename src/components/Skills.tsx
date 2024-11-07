import React from 'react';
import Flask2 from '../assets/images/flask2.png'
import tensorflow from '..//assets/images/tensorflow.png'
import jupyter from '../assets/images/jupyter.png'
import matplotlib from '../assets/images/matplotlib.png'
import mysql from '../assets/images/mysql.webp'
import pandas from '../assets/images/pandas.png'
import tableau from '../assets/images/tableau.png'
import numpy from '../assets/images/numpy.png'
import keras from '../assets/images/Keras.png'
import scikitlearn from '../assets/images/scikit.png'

const skills = [
  { name: 'Flask', image: Flask2, color: 'bg-blue-500' },
  { name: 'TensorFlow', image: tensorflow, color: 'bg-orange-500' },
  { name: 'Jupyter', image: jupyter, color: 'bg-gray-200' },
  { name: 'Matplotlib', image: matplotlib, color: 'bg-green-500' },
  { name: 'MySQL', image: mysql, color: 'bg-white' },
  { name: 'Pandas', image: pandas, color: 'bg-teal-500' },
  { name: 'Tableau', image: tableau, color: 'bg-blue-300' },
  { name: 'NumPy', image: numpy, color: 'bg-yellow-500' },
  { name: 'Keras', image: keras, color: 'bg-red-500' },
  { name: 'SciKit Learn', image: scikitlearn, color: 'bg-gray-800' },
  // Add more skills if needed
];

const Skills: React.FC = () => {
  // Split the skills into rows of 4 items each
  const rows = [];
  for (let i = 0; i < skills.length; i += 4) {
    rows.push(skills.slice(i, i + 4));
  }

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Tech Stack</h2>
        <div className="flex flex-col items-center space-y-8">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-8">
              {/* Blank bubble at the start of the row */}
              <div className="w-32 h-32 rounded-full bg-transparent" />
              
              {row.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex flex-col items-center">
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center ${skill.color} transition-transform duration-300 transform hover:scale-110`}>
                    <img src={skill.image} alt={skill.name} className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold mt-4 text-white">{skill.name}</h3>
                </div>
              ))}

              {/* Blank bubble at the end of the row */}
              <div className="w-32 h-32 rounded-full bg-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
