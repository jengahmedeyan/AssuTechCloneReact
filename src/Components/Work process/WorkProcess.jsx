import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./WorkProcess.css";
import {
  faSpaceShuttle,
  faPaintbrush,
  faCoffee,
  faCalendar,
  faBlush,
  faCogs,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
function WorkProcess() {
  const items = [
    { id: 0, title: "meet", icon: faCoffee},
    { id: 1, title: "plan", icon: faCalendar, },
    { id: 2, title: "design", icon: faPaintbrush },
    { id: 3, title: "Develop", icon: faCogs },
    { id: 4, title: "test", icon: faThList },
    { id: 5, title: "launch", icon: faSpaceShuttle },
  ];
  return (
    <div>
      <section id="work-process">
        <Container>
          <Row className="section-header">
            <h2 className="section-title text-center ">Our Process</h2>
          </Row>
          <Row className="text-center">
            {items.map((item) => {
              return (
                <Col md={2} xs={6}>
                  <div className="wow fadeInUp" key={item.id}>
                    <div class="icon-circle">
                      <span>{item.id}</span>
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default WorkProcess;
