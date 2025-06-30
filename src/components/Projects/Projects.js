import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Thumbnail_2 from "../../Assets/Projects/Thumbnail_2.png";
import Multilingual from "../../Assets/Projects/Multilingual_QA.png";
import XMeridianWorkflow from "../../Assets/Projects/XMeridianWorkflow.png.png";
import ChicagoCrime from "../../Assets/Projects/ChicagoCrime.jpg";
import FakeNews from "../../Assets/Projects/FakeNews.jpg";
import SentimentAnalysis from "../../Assets/Projects/SentimentAnalysis.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few public projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={XMeridianWorkflow}
              isBlog={false}
              title="AI Medical Insurance Claims Evaluator"
              description="Developed an award-winning AI system that automates medical insurance claim evaluation. Engineered the full RAG pipeline, leveraging LangChain for LLM orchestration, FAISS for high-speed semantic search, and HuggingFace Transformers for vector embeddings."
              ghLink="https://devpost.com/software/meridian_rag?ref_content=my-projects-tab&ref_feature=my_projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Multilingual}
              isBlog={false}
              title="AI-Driven Multilingual QA System"
              description="Built a multi-agent question-answering system using LangChain orchestration and RAG architecture with dual database integration (PostgreSQL/MongoDB) and FAISS vector search. Implemented intelligent query routing, semantic embeddings via HuggingFace Transformers. Utilized evaluation frameworks: ROUGE, BERTScore, and RAGAS."
              ghLink="https://github.com/MDheeraj500/capstone-2025/tree/Sudhanshu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SentimentAnalysis}
              isBlog={false}
              title="IMDB Movie Review Sentiment Analyzer 🎥"
              description="Built a sentiment analysis system that classifies movie reviews using the IMDB dataset. Designed an NLP pipeline with NLTK preprocessing, TF-IDF feature extraction, and trained multiple models achieving ~90% F1 score with Logistic Regression. The system is deployed via Flask REST API and includes a React frontend for real-time predictions."
              ghLink="https://github.com/MDheeraj500/IMDB-Movie-Review-Sentiment-Analyzer"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChicagoCrime}
              isBlog={false}
              title="Chicago-crime-2023-data-analysis"
              description="Leveraging Python and Tableau, this project uncovers spatial, temporal, and crime‐type trends in Chicago’s 2023 crime data. Built ETL pipelines with pandas for geospatial and time‐series analysis, designed dashboards in Tableau to visualize monthly crime trajectories and heatmaps of high‐incident streets, and comparative arrest‐rate analyses."
              ghLink="https://github.com/MDheeraj500/Chicago-crime-2023-data-analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Thumbnail_2}
              isBlog={false}
              title="AI-powered budgeting application"
              description="ClearCash is an AI-driven budgeting app built for UNT Hackathon 2024 that pairs a React + Tailwind UI with a Flask API backed by MySQL. It integrates large-language-model prompts to analyze spending patterns and deliver personalized financial advice, all secured through authenticated REST endpoints and encrypted data storage."
              ghLink="https://github.com/STAVAN-2710/UNTHakathon2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FakeNews}
              isBlog={false}
              title="Fake News Classifier"
              description="This project builds a fake news detection system using dataset of 20,000+ news articles. The pipeline includes comprehensive NLP preprocessing and TF-IDF vectorization with 5,000 features. Three classifiers were implemented and compared: Multinomial Naive Bayes (82.1% accuracy), Random Forest (96.2%), and XGBoost (97.6%)"
              ghLink="https://github.com/MDheeraj500/fake-news-classifier-project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
