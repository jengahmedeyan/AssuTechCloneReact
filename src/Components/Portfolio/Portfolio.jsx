import React from "react";
import Container from "react-bootstrap/esm/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Nav from "react-bootstrap/esm/Nav";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Container style={{ padding: "100px 0px" }}>
        <div className="section-header">
          <h1 className="text-center section-title">Our work</h1>

          <p className="text-center">
            Adapting a tecnological solution should be as smooth as possible.
            We'll build you what you need and help get
            <br /> your organization to smoothly adapt to it, as we have done
            with many of our clients.
            <br />
            <strong className="text-center">Here are some of our works.</strong>
          </p>
        </div>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Nav variant="pills" className="filter-portfolio">
              <Nav.Item>
                <Nav.Link eventKey="all">All works</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="website">Websites</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="mobile">mobile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="desktop">Desktop & web apps</Nav.Link>
              </Nav.Item>
            </Nav>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="all">
                  All works
                </Tab.Pane>
                <Tab.Pane eventKey="website">Website</Tab.Pane>
                <Tab.Pane eventKey="mobile">mobile</Tab.Pane>
                <Tab.Pane eventKey="desktop">desktop and web apps</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Portfolio;
