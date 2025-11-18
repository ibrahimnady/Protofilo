import React from "react";
import { Button, Col, Row } from "react-bootstrap";

import { BsGithub } from "react-icons/bs";
// import { Si365Datascience } from "react-icons/si";
import Data_Visulization from "../../Assets/Certificates/Data_Visulization.jpeg";
import AdvancedSQL from "../../Assets/Certificates/AdvancedSQL.jpeg";
import PowerBI from "../../Assets/Certificates/PowerBI.jpeg";
import Statistics from "../../Assets/Certificates/Statistics.jpeg";
import DataScience from "../../Assets/Certificates/DataScience.jpeg";
import Excel from "../../Assets/Certificates/Excel.jpg";
import Python from "../../Assets/Certificates/python.jpeg";
import Pandas from "../../Assets/Certificates/pandas.jpg";
import Datascience from "../../Assets/svgexport-1.svg";


function Certificate() {
  const certificates = [
    {
      img: Data_Visulization,
      checkLink: "https://learn.365datascience.com/c/2275a49cda/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Data_Visulaziation.pdf"
    },
    {
      img: AdvancedSQL,
      checkLink: "https://learn.365datascience.com/c/860fee2230/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Advanced%20SQL.pdf"
    },
    {
      img: PowerBI,
      checkLink: "https://learn.365datascience.com/c/6ee39ddca2/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Power%20BI.pdf"
    },
    {
      img: Statistics,
      checkLink: "https://learn.365datascience.com/c/53f3dca992/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Statistics.pdf"
    },
    {
      img: DataScience,
      checkLink: "https://learn.365datascience.com/c/05b37031e1/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Introduction%20to%20Data%20and%20Data%20Science.pdf"
    },
    {
      img: Excel,
      checkLink: "https://learn.365datascience.com/c/0ecf3cc1eb/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/AdvancedExcel.pdf"
    },
    {
      img: Python,
      checkLink: "https://learn.365datascience.com/c/b57b1d0ec5/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Introduction%20to%20Python.pdf"
    },
    {
      img: Pandas,
      checkLink: "https://learn.365datascience.com/c/1f3c1dc69f/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Pandas.pdf"
    },
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {certificates.map((cert, index) => (
        <Col xs={12} md={4} lg={3} key={index} className="tech-icons" style={{ marginBottom: "30px" }}>
          <img src={cert.img} alt="certificate" style={{ width: "100%", maxWidth: "", height: "auto", marginBottom: "15px", borderRadius: "8px" }} />
          <div className="d-flex gap-2 justify-content-center flex-column flex-md-row">
            <Button variant="primary" href={cert.githubLink} target="_blank">
              <BsGithub /> &nbsp;
              GitHub
            </Button>
            <Button variant="primary" href={cert.checkLink} target="_blank" >
              <img src={Datascience} style={{ width: "50px", height: "auto", marginBottom: "8px" }} />  &nbsp;
              Verify &nbsp;
            </Button>
          </div>
        </Col>
      ))}

      {/* <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/ibrahimnady/Certificates/blob/main/Data_Visulaziation.pdf">
          <img src={Data_Visulization} alt="about" className="" style={{ with: "300px", height: "300px" }} />
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
      </Col> */}
    </Row>
  );
}

export default Certificate;
