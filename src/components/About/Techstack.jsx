import React from "react";
import { Col, Row } from "react-bootstrap";
import {  SiAdobe, SiPython } from "react-icons/si";
import {VscJson} from "react-icons/vsc"
import {
  DiNodejsSmall,
  DiMongodb,
  DiMysql,
  DiGit,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPython style={{color:"#0417c5ff"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql style={{color:"#f29111"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{color:"#bd2c00"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscJson style={{color:"#f7df1e"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejsSmall style={{color:"#00ff08"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{color:"#34be5b"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe style={{color:"#d62119"}}/>
      </Col>
    </Row>
  );
}

export default Techstack;
