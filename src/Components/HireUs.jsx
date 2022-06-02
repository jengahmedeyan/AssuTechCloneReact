import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import hireSectionBg from "../Assets/hireSectionBg.jpg";

const HireUs = () => {
  return (
    <div id="hire-section">
      <Row>
        <div class="text-center">
          <h2>
            <span>
              <strong>ASSUTECH</strong>
            </span>
            IS TEAMWORK. GOALS. RESULTS.
          </h2>
          <p>
            We can help you build your business fast. Our dedicated team is
            committed to making things happen!
          </p>
          <p>
            <a href="#contact-anchor" class="btn btn-primary btn-lg">
              Hire us
            </a>
          </p>
        </div>
      </Row>
    </div>
  );
};

export default HireUs;
