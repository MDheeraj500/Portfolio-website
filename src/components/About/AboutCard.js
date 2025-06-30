import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Dheeraj Marthand Machiraju </span> !
            <br>
            </br>
            <br />
            A <span className="purple"> Data Scientist-in-the-making, </span> 
            <br />
            I have 2+ years of experience building AI solutions, specializing in generative AI, machine learning, and data engineering. 
            <br />
            <br />
            My expertise spans developing RAG systems, multi-agent frameworks with, and deep learning models including. 
            <br />
            <br />
            Apart from digging into data, I am
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> A passionate Fitness Instructor <a href="https://www.linkedin.com/posts/mdheeraj-m_fitnessjourney-groupfitness-unt-activity-7203416858727735297--5F6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADhB7vEBRybdfo4nCtycshv09MB7wcC3IgQ" target="_blank">One of the best!</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> UNT Gread Grad <a href="https://www.unt.edu/commencement/great-grads/spring-2025.html#dheerajmm" target="_blank">(Story Here!)</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> A sucker for Hackathons <a href="https://www.linkedin.com/posts/mdheeraj-m_infosys-hackutd-secondabrlargestabrhackathon-activity-7265085240082075648-ldp2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADhB7vEBRybdfo4nCtycshv09MB7wcC3IgQ" target="_blank"> Winner too!</a>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The scientific man does not aim at an immediate result"{" "}
          </p>
          <footer className="blockquote-footer">Nikola Tesla</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
