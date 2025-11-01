import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsFillBarChartFill } from "react-icons/bs"
import {
  SiVisualstudiocode,
  SiGithub,
  SiPandas
} from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";




function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <RiFileExcel2Fill style={{ color: "#03641fff" }} /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFillBarChartFill style={{ color: "#b8a608ff" }} /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas style={{ color: "#0e56a8ff" }} /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub style={{color:"#f5f5f5"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{color:"#14acf2"}}/>
      </Col>
    </Row>
  );
}

export default Toolstack;
