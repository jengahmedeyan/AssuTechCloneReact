import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <div className="section-header">
          <h2 className="section-title text-center">About us</h2>
        </div>

        <Row>
          <Col sm={12}>
            <h3>High Tech Assured</h3>
            <p>
              By automating manually carried out business processes with
              tailored software and technological solutions, we help businesses
              increase productivity, save time, improve quality and increase
              their customer base.
            </p>
            <p>
              Assutech is a software engineering company that specializes in
              developing tailor-made cross-platform software solutions for
              multiple-level organizations. We help our clients realize their
              full potentials by automating manually carried out business
              processes with a technological approach, while strengthening
              partnership at all levels. We always dive into each project
              keeping a few important things in mind.
            </p>

            <Row>
              <Col sm={6}>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} /> Support for all
                    major platforms
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} /> Automatically
                    update changes
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} /> Simple and elegant
                    design
                  </li>
                </ul>
              </Col>
              <Col sm={6}>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    Adaptability for all screen sizes
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    great custom support
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    User-friendly interface
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
