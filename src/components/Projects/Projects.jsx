import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protofilo}
              isBlog={false}
              title="Protofilo"
              description="This Site Was Created by html , css , react.js ,bootstrap ,reactIcons , reactstrap and fontawesome"
              ghLink="https://github.com/ibrahimnady/protofilo-official.git"
              demoLink="https://ibrahimnady.github.io/protofilo-official/"      
            />
          </Col> */}
          <h1 style={{ color: "white" }}>SOOOOON </h1>
          <h1 style={{ color: "white" }}>We working to add More Projects Now  </h1>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
