import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/Design-stats.gif";
import Toolstack from "./Toolstack";
import Certificate from "./Certificate";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px",}}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color:"gold" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
            <img src={laptopImg} alt="about" className="" style={{ width: "600px", maxWidth: "80%", height: "auto" }}/>
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">My </strong>Certificates 
        </h1>
        <Certificate />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
