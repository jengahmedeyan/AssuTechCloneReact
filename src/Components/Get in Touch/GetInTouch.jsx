import React from "react";
import Container from "react-bootstrap/esm/Container";
import styles from "./GetInTouch.module.css";

function GetInTouch() {
  return (
    <div id={styles.getInTouch}>
      <Container>
        <div className={styles.section_header}>
          <h2
            class={`text-center ${styles.wow} ${styles.fadeInDown}
              ${styles.section_title} ${styles.animated}`}
          >
            Get in Touch
          </h2>
          <p class="wow fadeInDown text-center animated" id="contact-anchor">
            We'll be glad to hear from you. Drop us a line.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default GetInTouch;
