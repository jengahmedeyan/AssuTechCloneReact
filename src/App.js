import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import HireUs from "./Components/HireUs";
import Slider from "./Components/Slider/Slider";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import AboutUs from "./Components/AboutUs/AboutUs";
import WorkProcess from "./Components/Work process/WorkProcess";
import TeamMembers from "./Components/Team/TeamMembers";
import Testimonial from "./Components/Testimonial/Testimonial";
import GetInTouch from "./Components/Get in Touch/GetInTouch";
import Contact from "./Components/Contact/Contact";
import Container from "react-bootstrap/esm/Container";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />

      <div style={{ marginTop: "2.5%" }}>
        <Slider />
      </div>
      <Container>
        <Services />
      </Container>

      <HireUs />

      <Portfolio />
      <Container>
        <AboutUs />
      </Container>
      <WorkProcess />

      <TeamMembers />
      <Testimonial />
      <GetInTouch />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
