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
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <img src={laptopImg} alt="about" className="" style={{ width: "400px", maxWidth: "80%", height: "auto" }} />
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={12} sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={onlineCourses}
              isBlog={false}
              title="Online Courses Data Analysis Dashboard (Power BI)"
              description="This project presents an interactive data analysis dashboard built using Microsoft Power BI to evaluate the performance, pricing, and content quality of online courses.
              The dashboard delivers actionable insights into subscriber behavior, content value perception, and subject popularity "
              ghLink="https://github.com/ibrahimnady/Online-Courses"
              demoLink="https://app.powerbi.com/view?r=eyJrIjoiMjMzMDhlNzItNTU5MC00N2VjLTg1OTMtNTk5NjAxZDRhNTMyIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
              ReportLink="https://github.com/ibrahimnady/Online-Courses/blob/main/README.md"
            />
          </Col>
          
          <Col xs={12} sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={DashBoardEcomerce}
              isBlog={false}
              title="Analysis Dashboard Sales Project Excel By PowerBi"
              description="This interactive Power BI dashboard provides a comprehensive view of company sales performance across multiple dimensions, including time, geography, product, and customer segmentation.
              It offers clear visual insights into key performance metrics such as total sales, profit, discount value, and cost of goods sold (COGS).."
              ghLink="https://github.com/ibrahimnady/DashBoard_Ecomerce"
              demoLink="https://app.powerbi.com/view?r=eyJrIjoiZDUwZWEwNmEtOTAwZC00MjRjLTgyNjMtNWE3ZTgxMTY5MWY0IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
              ReportLink="https://github.com/ibrahimnady/DashBoard_Ecomerce/blob/main/README.md"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={OnlineEcomerce}
              isBlog={false}
              title="DashBoard Sales Ecomerce By PowerBi "
              description="This Power BI dashboard provides a global view of company performance across 2012–2015, analyzing sales, profits, losses, and return orders by market, region, and customer segment.
              It delivers data-driven insights to support executive decisions and identify key markets and products that impact overall profitability."
              ghLink="https://github.com/ibrahimnady/EcomerceOnline"
              demoLink="https://app.powerbi.com/view?r=eyJrIjoiMjY3M2QxNmQtZTI4NS00NTljLTkzMWUtYmQ0ZjgxNWM3ZDM3IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
              ReportLink="https://github.com/ibrahimnady/EcomerceOnline/blob/main/README.md"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={SalesDashBoard}
              isBlog={false}
              title="Sales Dashboard – Excel Data Analysis Project"
              description="This project presents a Sales Dashboard built in Microsoft Excel to visualize key sales performance metrics and trends.
              The dashboard provides an interactive overview of Total Sales and Total Customers, with detailed analysis by Branch, Payment Method, Date, and Product Category."
              ghLink="https://github.com/ibrahimnady/Sales-DashBoard"
              demoLink="https://github.com/ibrahimnady/Sales-DashBoard/blob/main/Sales_DashBoard.png"
              ReportLink="https://github.com/ibrahimnady/Sales-DashBoard/blob/main/README.md"
            />
          </Col>
          {/* <h1 style={{ color: "white" }}>SOOOOON </h1>
          <h1 style={{ color: "white" }}>We working to add More Projects Now  </h1> */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
