import React, { useState } from "react";
import "./ProjectCard.css";
import Col from "react-bootstrap/esm/Col";



function ProjectCard(props) {
  const [isHover, setIsHover] = useState(false);
  return (

      <div className="project-item  m-2">
        <a href="#">
          <div
            className="project-item-inner"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <img src={props.smallImage} alt="" className="img-responsive" />
            {isHover ? (
              <div className="project-info">
                <h3>{props.title}</h3>
                <span>{props.description}</span>
              </div>
            ) : null}
          </div>
        </a>
      </div>
   
  );
}

export default ProjectCard;
