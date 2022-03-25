import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import desktopFeatures from '../Assets/images-main-feature.png';
import Categories from './Categories';



const Services = props => {
  return (
    <div> 
      <Container style={{padding: "100px 0px"}}  >
        <Row >
          <div className="section-header">
          <h3 className="text-center  section-title">what  We do</h3>
       
      
      <p className="wow fadeInDown text-center">
              Over the years, we have specialized in developing fast and secure
              software solutions that are<br />packed with great features to
              boost sales, notify and engage users and serve content to those
              that matter to you.
            </p>
            </div>
       </Row>
      <Row >
        <Col sm={6}>
        <img src={desktopFeatures} alt="apple desktop with website slider on display" className="img-fluid"  />
        </Col>
        <Col sm={6}>

        <Categories />
        </Col>
      </Row>
      </Container>
       
    </div>
  )
}



export default Services