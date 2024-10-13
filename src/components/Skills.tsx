import React from 'react';
import { Database, TrendingUp, BarChart2, Brain } from 'lucide-react';

const skills = [
  { name: 'Data Analysis', icon: TrendingUp, color: 'text-blue-500', percentage: '85%', description: 'Extract actionable insights from data' },
  { name: 'Machine Learning', icon: Brain, color: 'text-green-500', percentage: '90%', description: 'Build predictive models to automate tasks' },
  { name: 'Data Visualization', icon: BarChart2, color: 'text-purple-500', percentage: '80%', description: 'Create meaningful visual representations of data' },
  { name: 'Big Data', icon: Database, color: 'text-red-500', percentage: '75%', description: 'Handle and process large datasets' }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Core Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
              {skill.icon ? <skill.icon size={48} className={`mx-auto mb-4 ${skill.color}`} /> : <div className="text-gray-400">Icon not available</div>}
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400 mb-2">{skill.description}</p>
              <div className="w-full bg-gray-600 rounded-full h-2.5 mb-4">
               <div className={`${skill.color} h-2.5 rounded-full`} style={{ width: skill.percentage }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
