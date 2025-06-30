import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const workData = [
  // {
  //   company: "Zof AI",
  //   role: "Machine Learning Engineer Intern", 
  //   duration: "Jun 2025 - Present",
  //   description: ["Architected and deployed AI testing agents using LangGraph and LangChain frameworks to automate endurance, scalability, and load/stress testing","Developed and containerized custom tools using Docker and deployed scalable solutions on AWS cloud infrastructure (EC2, Lambda, ECS), establishing robust CI/CD pipelines for seamless production deployment","Enhanced testing platform efficiency by creating modular, reusable AI components that automatically adapt to varying client requirements"],
  // },
  {
    company: "University of North Texas",
    role: "Graduate Student Assistant",
    duration: "Oct 2023 - May 2025", 
    description: ["Conducted pre-post analysis of career readiness programs using Likert-scale surveys and transformer-based AspectSentiment Analysis (BERT) on qualitative feedback", "Architected Data Pipelines using Python for UNT’s Annual Report, processing Multi-Source datasets that increased analytical efficiency by 55% across 7+ Departments", "Developed Statistical & Predictive Models that powered interactive dashboards, delivering predictive insights to 17 Stakeholders, directly influencing strategic planning."],
  },
  {
    company: "Green Breathe Innovations",
    role: "Data Scientist Intern",
    duration: "May 2024 - Aug 2024", 
    description: ["Designed and deployed an LSTM Anomaly Detection model (PyTorch) using IoT sensor data from 50+ air purifiers", "Implemented feature engineering pipelines for structured/unstructured chemical data, achieving 25% faster ROI", "Containerized preprocessing and model training pipelines with Docker, orchestrated via GitHub, resulting in reduced reactive maintenance costs by 35%"],
  },
  {
    company: "Bobalicious",
    role: "Data Scientist Intern",
    duration: "Jun 2023 - Aug 2023", 
    description: ["Designed and deployed an AI-powered inventory management system using time-series forecasting (Prophet) and demand prediction models, reducing food waste by 35%", "Built data-intensive backend services in Python that processed real-time sales data, and seasonal trends to generate automated purchase orders", "Implemented a conversational analytics interface using GPT-3 and LangChain, enabling staff to query inventory status and receive replenishment recommendations via natural language"],
  },
  {
    company: "OpenText Corp.",
    role: "Associate Software Engineer",
    duration: "Oct 2021 - Jun 2022", 
    description: ["Utilized SQL and Data Manipulation techniques to analyze and prepare structured data from extensive MySQL databases,delivering insights to enhance decision-making for web content strategies","Built Data Models and implemented data management workflows to ensure accuracy and consistency across projects","Enhanced analytics processes by increasing testing efficiency by 20% and managing the OpenText Testcase Repository,contributing to data quality and operational improvements across data-driven initiatives"],
  },
  // Add more experience entries as needed
];

function WorkExperience() {
  return (
    <Container fluid className="work-experience-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={10} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 className="project-heading">
              Professional <strong className="purple">Experience</strong>
            </h1>
            <div className="timeline-container">
              {workData.map((item, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-badge">
                    <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="experience-content">
                    <div className="experience-header">
                      <div className="company-info">
                        <h3 className="company-name">{item.company}</h3>
                        <h4 className="role-title">{item.role}</h4>
                      </div>
                      <div className="duration-badge">{item.duration}</div>
                    </div>
                    <div className="experience-description">
                        <ul>
                            {item.description.map((point, index) => (
                            <li key={index}>{point}</li>
                            ))}
                        </ul>
                        </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}


export default WorkExperience;



