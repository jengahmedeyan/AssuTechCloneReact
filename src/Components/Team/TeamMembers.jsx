import React from "react";
import "./TeamMembers.css";
import "./MemberCard.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import MemberCard from "./MemberCard";
import TeamData from "./TeamData";
// import ReactHtmlParser from "react-html-parser";

const TeamMembers = () => {
 
  return (
    <div id="meet-team" style={{padding:"100px 0px"}}>
      <Container>
        <div className="section-header">
          <div className="section-title text-center">Our Team</div>

          <p className="text-center">
            Behind every successful project is our passionate team working to
            give you, as a client, the best possible experience in working with
            us.
            <br />
            Performance and possibilites are endless. We're here to help every
            step of the way.
          </p>
        </div>

        <Row>
        
          {TeamData.map((item) => {
            
            return (
              <Col md={4} sm={6} className="pt-2 pb-2" >
                <MemberCard
                  memberName={item.memberName}
                  memberJobTitle={item.memberJobTitle}
                  p1={item.description.p1}
                  p2={item.description.p2}
                  facebook={item.links.facebook}
                  gmail={item.links.gmail}
                  twitter={item.links.twitter}
                  linkedin={item.links.linkedin}
                  imgSrc={item.imgUrl}
                />
             </Col>
            )
          })}
           
        </Row>
      </Container>
    </div>
  );
};

export default TeamMembers;
