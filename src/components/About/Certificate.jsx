import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAdobe, SiPython } from "react-icons/si";
import { VscJson } from "react-icons/vsc"
import {
  DiNodejsSmall,
  DiMongodb,
  DiMysql,
  DiGit,
} from "react-icons/di";
import Data_Visulization from "../../Assets/Certificates/Data_Visulization.jpeg";
import AdvancedSQL from "../../Assets/Certificates/AdvancedSQL.jpeg";
import PowerBI from "../../Assets/Certificates/PowerBI.jpeg";
import Statistics from "../../Assets/Certificates/Statistics.jpeg"; 
import DataScience from "../../Assets/Certificates/DataScience.jpeg"; 
import Excel from "../../Assets/Certificates/Excel.jpg"; 
import Python from "../../Assets/Certificates/python.jpeg"; 


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/ibrahimnady/Certificates/blob/main/Data_Visulaziation.pdf">
          <img src={Data_Visulization} alt="about" className="" style={{ width: "300px", height: "300px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/ibrahimnady/Certificates/blob/main/Advanced%20SQL.pdf">
          <img src={AdvancedSQL} alt="about" className="" style={{ width: "300px", height: "300px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/ibrahimnady/Certificates/blob/main/Power%20BI.pdf">
          <img src={PowerBI} alt="about" className="" style={{ width: "300px", height: "300px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/ibrahimnady/Certificates/blob/main/Statistics.pdf">
          <img src={Statistics} alt="about" className="" style={{ width: "300px", height: "300px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/ibrahimnady/Certificates/blob/main/Introduction%20to%20Data%20and%20Data%20Science.pdf">
          <img src={DataScience} alt="about" className="" style={{ width: "300px", height: "300px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/ibrahimnady/Certificates/blob/main/AdvancedExcel.pdf">
          <img src={Excel} alt="about" className="" style={{ width: "300px", height: "300px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/ibrahimnady/Certificates/blob/main/Introduction%20to%20Python.pdf">
          <img src={Python} alt="about" className="" style={{ width: "300px", height: "300px" }} />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
