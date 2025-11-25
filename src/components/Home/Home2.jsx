import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myImg1 from "../../Assets/Projects/1670871717317.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "gold" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m deeply passionate about <b className="purple">Data Analysis</b> —
              transforming raw data into meaningful insights that help businesses make smarter decisions.
              <br />
              <br />
              I have strong experience working with tools like{" "}
              <i>
                <b className="purple">Excel, SQL, Power BI, SQL, and Python</b>
              </i>{" "}
              to clean, analyze, and visualize data effectively.
              <br />
              <br />
              My main interests include{" "}
              <i>
                <b className="purple">data visualization, dashboard design, and business analytics</b>
              </i>{" "}
              — always aiming to turn complex data into clear stories.
              <br />
              <br />
              I’m constantly learning new techniques in{" "}
              <b className="purple">machine learning</b> and{" "}
              <b className="purple">data-driven decision making</b> to grow as a modern analyst.
              <br />
              <br />
              When I’m not analyzing data, I enjoy exploring{" "}
              <i>
                <b className="purple">new tools and technologies</b>
              </i>{" "}
              that can make analytics more powerful and accessible.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg1} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row > 
          <Col md={12} className="home-about-social">
            <h1 style={{color:"gold" }}>FIND ME ON</h1>
            <p style={{color:"gold" }}>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links ">
              <li className="social-icons">
                <a href="https://github.com/ibrahimnady" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/IbrahimNadyabdelrahman" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.facebook.com/IbrahimNadyabdelrahman" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://wa.me/+201151262332" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaWhatsapp  />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/IbrahimNadyabdelrahman/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://twitter.com/Ibrahim59887371" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
