import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMicrosoftoutlook,
  SiGithub,
  SiMicrosoftteams
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2} className="tech-icons">
        <SiMicrosoftteams />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiMicrosoftoutlook />
      </Col>
    </Row>
  );
}

export default Toolstack;
