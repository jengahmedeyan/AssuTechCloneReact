import React from "react";
import Container from "react-bootstrap/esm/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./Portfolio.css";


const Portfolio = () => {
  return (
    <div id="portfolio">
    <Container style={{padding: "100px 0px"}} >
      <div className="section-header">
      <h1 className="text-center section-title">Our work</h1>
      
      
      <p className="text-center">
        Adapting a tecnological solution should be as smooth as possible. We'll
        build you what you need and help get
        <br /> your organization to smoothly adapt to it, as we have done with
        many of our clients.
        <br />
        <strong className="text-center">Here are some of our works.</strong>
      </p>
      </div>
   
      <Tabs className="text-center mb-4 filter-portfolio" defaultActiveKey="all">
        <Tab eventKey="all" title="All Works">
          <h1>All works</h1>
        </Tab>
        <Tab eventKey="HOME" title="Websites">
          <h1>Websites</h1>
        </Tab>
        <Tab eventKey="sdf" title="Mobile Apps">
          <h1>Mobile apps</h1>
        </Tab>
        <Tab eventKey="sdfsdf" title="Desktop &amp; Web apps">
          <h1>Desktop and webapps</h1>
        </Tab>
      </Tabs>
     
    </Container>
    </div>
  );
};

export default Portfolio;
