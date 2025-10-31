import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiAdobeaftereffects, SiAdobeindesign, SiAdobepremierepro, SiAdobexd, SiAdobe, SiPython } from "react-icons/si";
import {VscJson} from "react-icons/vsc"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiNodejsSmall,
  DiMongodb,
  DiPhotoshop,
  DiMysql,
  DiSass,
  DiCss3,
  DiHtml5,
  DiIllustrator,
  DiGit,
} from "react-icons/di";
import {
  // SiPytorch,
  // SiFirebase,
  SiNextdotjs,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 style={{color:"#dd4b25"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython style={{color:"#0417c5ff"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 style={{color:"#254bdd"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass style={{color:"#ca6296"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{color:"#f7df1e"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{color:"#00ff08"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscJson style={{color:"#f7df1e"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejsSmall style={{color:"#00ff08"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{color:"#00d8ff"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs style={{color:"#00d8ff"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{color:"#34be5b"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql style={{color:"#f29111"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{color:"#bd2c00"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop style={{color:"#00a4e4"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIllustrator style={{color:"#fbb034"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeindesign style={{color:"#f73163"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects style={{color:"#9999ff"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro style={{color:"#9999ff"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd style={{color:"#ff61f6"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe style={{color:"#d62119"}}/>
      </Col>
    </Row>
  );
}

export default Techstack;
