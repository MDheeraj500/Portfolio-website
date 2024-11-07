import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/swiper.min.css';
//import SwiperCore from 'swiper';
import fake_news_classifier_image from '../assets/images/fake-news-classifier-image.webp';
import chicago_crime_data_analysis_image from '../assets/images/chicago-crime-data-analysis-image.webp';
import movie_review_sentiment_analyzer_image from '../assets/images/movie-review-sentiment-analyzer-image.webp';

// Initialize Swiper modules
//SwiperCore.use([Pagination, Navigation]);

const projects = [
  {
    title: 'Fake-News Classifier',
    image: fake_news_classifier_image,
    tags: ['Natural Language Processing (NLP)', 'Machine Learning', 'Text Classification', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'NLTK'],
    github: 'https://github.com/MDheeraj500/fake-news-classifier-project/tree/master',
    demo: 'https://yourproject1demo.com',
  },
  {
    title: 'Chicago Crime Data Analysis',
    image: chicago_crime_data_analysis_image,
    tags: ['Python', 'Data Visualization', 'Data Analysis', 'Hypothesis Testing', 'Geospatial Analysis', 'Temporal Analysis', 'Tableau', 'Statistical Inference', 'Google Colab', 'Anomaly Detection'],
    github: 'https://github.com/MDheeraj500/Chicago-crime-2023-data-analysis',
    demo: 'https://yourproject2demo.com',
  },
  {
    title: 'IMDB Movie Review Sentiment Analyzer',
    image: movie_review_sentiment_analyzer_image,
    tags: ['Machine Learning', 'Scikit-learn', 'Pandas', 'Natural Language Processing (NLP)', 'Sentiment Analysis', 'Logistic Regression', 'Flask', 'Vite + React', 'Google Colab'],
    github: 'https://github.com/MDheeraj500/IMDB-Movie-Review-Sentiment-Analyzer',
    demo: 'https://yourproject3demo.com',
  },
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className="min-w-[300px] bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
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
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-600 text-xs font-semibold px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
