import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import onlineCourses from "../../Assets/Projects/online-courses.png";
import SalesDashBoard from "../../Assets/Projects/Sales_Dashboard.png";
import DashBoardEcomerce from "../../Assets/Projects/DashoardSales_Ecomerce.png";
import OnlineEcomerce from "../../Assets/Projects/OnlineEcomerce.png";
import laptopImg from "../../Assets/Data-extraction-bro.svg";

function Projects() {
  const projects = [
    {
      img: onlineCourses,
      title: "Online Courses Data Analysis Dashboard (Power BI)",
      description: `This project presents an interactive data analysis dashboard built using Microsoft Power BI to evaluate the performance, pricing, and content quality of online courses. 
      The dashboard delivers actionable insights into subscriber behavior, content value perception, and subject popularity.`,
      gh: "https://github.com/ibrahimnady/Online-Courses",
      demo: "https://app.powerbi.com/view?r=eyJrIjoiMjMzMDhlNzItNTU5MC00N2VjLTg1OTMtNTk5NjAxZDRhNTMyIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
      report: "https://github.com/ibrahimnady/Online-Courses/blob/main/README.md",
    },
    {
      img: DashBoardEcomerce,
      title: "Analysis Dashboard Sales Project Excel By PowerBi",
      description: `This interactive Power BI dashboard provides a comprehensive view of company sales performance across multiple dimensions, including time, geography, product, and customer segmentation. 
      It offers clear visual insights into total sales, profit, discount value, and cost of goods sold (COGS).`,
      gh: "https://github.com/ibrahimnady/DashBoard_Ecomerce",
      demo: "https://app.powerbi.com/view?r=eyJrIjoiZDUwZWEwNmEtOTAwZC00MjRjLTgyNjMtNWE3ZTgxMTY5MWY0IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
      report: "https://github.com/ibrahimnady/DashBoard_Ecomerce/blob/main/README.md",
    },
    {
      img: OnlineEcomerce,
      title: "DashBoard Sales Ecomerce By PowerBi",
      description: `This Power BI dashboard provides a global view of company performance across 2012–2015, analyzing sales, profits, losses, and return orders by market, region, and customer segment. 
      It delivers deep insights to support executive decisions and highlight key markets and products affecting profitability.`,
      gh: "https://github.com/ibrahimnady/EcomerceOnline",
      demo: "https://app.powerbi.com/view?r=eyJrIjoiMjY3M2QxNmQtZTI4NS00NTljLTkzMWUtYmQ0ZjgxNWM3ZDM3IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
      report: "https://github.com/ibrahimnady/EcomerceOnline/blob/main/README.md",
    },
    {
      img: SalesDashBoard,
      title: "Sales Dashboard – Excel Data Analysis Project",
      description: `This project presents a Sales Dashboard built in Microsoft Excel to visualize key sales performance metrics and trends. 
      The dashboard provides an interactive overview of Total Sales and Total Customers, with breakdowns by Branch, Payment Method, Date, and Product Category.`,
      gh: "https://github.com/ibrahimnady/Sales-DashBoard",
      demo: "https://github.com/ibrahimnady/Sales-DashBoard/blob/main/Sales_DashBoard.png",
      report: "https://github.com/ibrahimnady/Sales-DashBoard/blob/main/README.md",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <img
          src={laptopImg}
          alt="about"
          loading="lazy"
          style={{ width: "400px", maxWidth: "80%", height: "auto" }}
        />

        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col
              key={index}
              xs={12}
              sm={12}
              md={6}
              lg={4}
              className="project-card"
            >
              <ProjectCard
                imgPath={project.img}
                title={project.title}
                description={project.description}
                ghLink={project.gh}
                demoLink={project.demo}
                ReportLink={project.report}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
