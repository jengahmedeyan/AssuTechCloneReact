import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Carousel from "react-bootstrap/esm/Carousel";
import alieu from "../../Assets/03.jpg";
import style from "./Testimonial.module.css";

function Testimonial() {
  
  return (
    <div id={style.testimonial}>
      <Container>
        <Row className="justify-content-center" >
          <Col sm={8} sm-offset={2}>
            <Carousel className="text-center">
              <Carousel.Item>
                <p>
                  <img
                    className={`${style.imgCircle} ${style.imgThumbnail}`}
                    alt="alieu seck thumbnail"
                    src={alieu}
                  />
                </p>

                <span>
                  <h4>Alieu</h4>
                </span>
                <small>
                  <strong>CEO</strong> | Gambia Chamber of Commerce and Industry
                </small>
                <p itemprop="reviewBody">
                  As one of the pioneer clients, the GCCI have been quite
                  impressed with the standard of work produced by Assutech which
                  compares to any worldwide. We congratulate the team and trust
                  it will continue to develop great applications.
                </p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonial;
