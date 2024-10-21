import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import fake_news_classifier_image from '../assets/images/fake-news-classifier-image.webp';
import chicago_crime_data_analysis_image from '../assets/images/chicago-crime-data-analysis-image.webp'
import movie_review_sentiment_analyzer_image from '../assets/images/movie-review-sentiment-analyzer-image.webp'

const projects = [
  {
    title: 'Fake-News Classifier',
    // description: 'A brief description of your first project.',
    image: fake_news_classifier_image,
    tags: ['Natural Language Processing (NLP)', 'Machine Learning', 'Text Classification', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'NLTK'],
    github: 'https://github.com/MDheeraj500/fake-news-classifier-project/tree/master',
    demo: 'https://yourproject1demo.com',
  },
  {
    title: 'Chicago Crime Data Analysis',
    // description: 'Description of your second project.',
    image: chicago_crime_data_analysis_image,
    tags: ['Python', 'Data Visualization', 'Data Analysis', 'Hypothesis Testing', 'Geospatial Analysis', 'Temporal Analysis', 'Tableau', 'Statistical Inference', 'Google Colab', 'Anomaly Detection'],
    github: 'https://github.com/MDheeraj500/Chicago-crime-2023-data-analysis',
    demo: 'https://yourproject2demo.com',
  },
  {
    title: 'IMDB Movie Review sentiment Analyzer',
    // description: 'Brief overview of your third project.',
    image: movie_review_sentiment_analyzer_image,
    tags: ['Machine Learning', 'Scikit-learn', 'Pandas', 'Natural Language Processing (NLP)', 'Sentiment Analysis', 'Logistic Regression', 'Flask', 'Vite + React', 'Google Colab'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://yourproject3demo.com',
  },
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                    <div className="space-x-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                        <Github size={24} />
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                {/* <p className="text-gray-400 mb-4">{project.description}</p> */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-600 text-xs font-semibold px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
