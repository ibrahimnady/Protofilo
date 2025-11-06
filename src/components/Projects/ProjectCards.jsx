import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ color: "#ffd700", fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" className="ms-md-2 mt-2 mt-md-0">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }} className="ms-md-2 mt-2 mt-md-0">
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        {!props.isBlog && props.ReportLink && (
          <Button variant="primary" href={props.ReportLink} target="_blank" style={{ marginLeft: "10px" }} className="ms-md-2 mt-2 mt-md-0">
            <TbReportAnalytics /> &nbsp;
            {"Report"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
