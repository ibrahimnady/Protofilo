import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crud_system from "../../Assets/Projects/Crud-system.png"
import e_commerce from "../../Assets/Projects/E-comerce.png"
import protofilo from "../../Assets/Projects/protofilo-img.png"
import movi_nexo from "../../Assets/Projects/Movi_nexo.png"
import system_salse from "../../Assets/Projects/System-Salse.png"
import dashboard from "../../Assets/Projects/Dashboard.png"
import crud_system_v2 from "../../Assets/Projects/Crud-system-v2.png"
import dashboard_control from "../../Assets/Projects/Dashboard-Control.png"
import card_name from "../../Assets/Projects/curd-name.png"
import Registration_page from "../../Assets/Projects/Registration-page.png"
import protofilo_v_1 from "../../Assets/Projects/protofilo-V-1.png"
import protofilo_v_2 from "../../Assets/Projects/protofilo-v-2.png"
import notes from "../../Assets/Projects/Notes.png"
import game from "../../Assets/Projects/game.png"
import GoLearn from "../../Assets/Projects/Go-Learn.png"

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protofilo}
              isBlog={false}
              title="Protofilo"
              description="This Site Was Created by html , css , react.js ,bootstrap ,reactIcons , reactstrap and fontawesome"
              ghLink="https://github.com/ibrahimnady/protofilo-official.git"
              demoLink="https://ibrahimnady.github.io/protofilo-official/"      
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
