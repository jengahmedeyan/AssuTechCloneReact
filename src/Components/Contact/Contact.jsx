import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Map from "./Map";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import { send } from "emailjs-com";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
    subject: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send("assutechclone", "template_knvp3p6", toSend, "ES27Cf2ymIk5f7HiW")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div id="contact">
      <Map />

      <Container className="form-container mt-4">
        <Row>
          <Col sm={4} md={4} sm-offset={8}>
            <div className="form-inner-container">
              <div className="contact-form">
                <h3>Contact info</h3>
                <address>
                  <strong>AssuTech</strong>
                  <p>
                    7 &amp; 8 Madiba Mall, Brufut Gardens Estate
                    <br />
                    Brufut, The Gambia, West Africa
                  </p>
                  <div className="contact-info">
                    <div id="contact-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                      (220) <span>3814760</span>
                      <strong> | </strong>
                      <span>3500008</span>
                      <strong> | </strong>
                      <span>4465130</span>
                      <br />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                      </svg>
                      <span>info@assutech.gm</span>
                    </div>
                  </div>
                </address>
              </div>

              <form onSubmit={onSubmit} className="form">
                {/* <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  value={toSend.from_name}
                  onChange={handleChange}
                  className="mb-3"
                />
               
                <input
                  type="text"
                  name="reply_to"
                  placeholder="Email"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
                <input
                 type="text"
                 name="subject"
                 placeholder="subject"
                 value={toSend.subject}
                 onChange={handleChange}
                /> */}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="from_name"
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="reply_to"
                    value={toSend.reply_to}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={toSend.subject}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                
                  <Form.Control as="textarea" rows={6} 
                  name="message" placeholder="Your message"
                  value={toSend.message}
                  onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
               
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
