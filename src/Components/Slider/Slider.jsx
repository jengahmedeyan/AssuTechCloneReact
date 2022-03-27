import React from "react";
import "./Slider.css";
import bg1 from "../../Assets/bg1.jpg";
import bg2 from "../../Assets/bg2.jpg";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";

function Slider() {
  return (
    <div style={{ padding: "100px 0px" }} id="main-slider">
      <Carousel>
      <Carousel.Item>
          <img className="d-block w-100" src={bg1} alt="First slide" />

          <Container>
            <Row>
              <Col sm={6}>
                <Carousel.Caption>
                  <h2>
                    We build <span>apps</span> for mobile,
                    web and desktop.
                  </h2>
                  <p>
                    Want to burst your business with a substantial revenue stream? we'll 
                    give you the platform to make it happen
                  </p>
                  <a href="#features" className="btn btn-primary btn-lg">
                    Read More
                  </a>
                </Carousel.Caption>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bg2} alt="Second slide" />

          <Container>
            <Row>
              <Col sm={6}>
                <Carousel.Caption>
                  <h2>
                    Technologies <span>tailored</span> to your specific needs
                  </h2>
                  <p>
                    We adapt our technology to fit each customer's workflow, not
                    change a customer's workflow to fit our technology.
                  </p>
                  <a href="#features" className="btn btn-primary btn-lg">
                    Read More
                  </a>
                </Carousel.Caption>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
