import React, { useState } from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="card">
      <div
        className="project-item-inner"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={props.smallImage} alt="" srcset="" />
        {isHover ? (
          <div className="card-content">
            <p>{props.title}</p>
            <p>{props.description}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectCard;
