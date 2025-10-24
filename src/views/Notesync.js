import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import NotesyncHeader from "components/Headers/NotesyncHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter";
import InfoCardNotesync from "./index-sections/InfoCardNotesync.js";
import NotesyncImage from "assets/img/notesync_img.png";
import Geocoding from "./index-sections/Geocoding.js";
import DevJourney from "./index-sections/DevJourney.js";
import Crud from "./index-sections/Crud.js";

function Notesync() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <NotesyncHeader />
        <div className="section section-about-us">
          <Container>
            <InfoCardNotesync/>
            <h3>background</h3>
            <Row style={{ marginTop: "-40px"}}>
              <Col className="ml-auto mr-auto text-left" md="6" style={{ marginTop: "40px"}}>
                <p>for my software studio class, my group & i created this website called notesync, a website that serves as a live music calendar where users can add and view events in their area. our team consisted of 4 full-stack developers, although we all contributed across the stack, i specialized in front-end architecture, accessibility, and geolocation-based event filtering — bridging ui/ux design with backend functionality. notesync is created in ruby on rails, and deployed using heroku.</p>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6" style={{ marginTop: "-40px"}}>
              <img src={require("assets/img/techstack.png")} alt="Tech Stack" className="project-img"/>
              </Col>
            </Row>
            <h3 style={{ marginTop: "-40px"}}>challenges</h3>
            <Row>
              <Col className="ml-auto mr-auto text-left" md="6" style={{ marginTop: "-40px"}}>
                <img src={require("assets/img/wcag.png")} alt="WCAG" width="400"/>
                </Col>
              <Col className="ml-auto mr-auto text-left" md="6" style={{ marginTop: "40px"}}>
                <p>for milestone 3, which judges ux and accessibility, we noticed that we failed a lot of the accessibility checks due to the color of our background.</p>
                <p>to troubleshoot, we took a look at which specific tests we were failing on accessibilitychecker and used diffchecker to check the difference between passing and failing tests. by changing the color of the foreground text and buttons, we were able to make them "pop" more against our purple background. this helped us pass a lot of the accessibility checks.</p>
              </Col>
            </Row>
            <p>another challenge we faced was "show events near me", which i worked on. during development, i realized that location geocoding was taking too long and that the system was returning every event, not just those close to the user. i fixed this problem by extending the timeout to allow more complete data retrieval, debugging inefficient code, and implementing a radius-based filter so users now see only relevant nearby events.</p>
            <Geocoding/>
            <h3>takeaways</h3>
            <p>as someone with more of a ux/front-end background, i intentionally challenged myself to take on backend responsibilities within this project - gaining full-stack development exposure, as well as familiarity with database systems. because i've only had experience building static websites, i've always wondered how people are able to build websites that incorporate log in/log out and track user data. notesync was a key turning point for me - it was the first time i worked on a fully dynamic, full-stack application. working on this project really allowed me to push beyond my comfort zone create more meaningful, impactful saas applications.</p>
            <DevJourney/>
            <p style={{ marginTop: "70px"}}>after gaining familiarity with ruby on rails, i realized that the devise gem provided the inner workings behind authentication. i also learned about crud and the 7 restful actions, which play a role in authentication, since a session is essentially being "created" once you log in and "destroyed" once you log out.</p>
            <Crud/>
            <Row style={{ marginTop: "40px"}}>
              <Col className="ml-auto mr-auto text-left" md="6" style={{ marginTop: "40px"}}>
                <p>in addition to my full-stack software engineering skills, working on notesync also helped me hone my ui/ux skills, teaching me how to design with empathy. i ran the words on our website through an understandability checker to check that all terminology used was understandable for the average person and also made sure that the text sizes were responsive so that people with vision impairments could zoom in and the text size would change accordingly - making our product accessible for a wider audience.</p>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6" style={{ marginTop: "-40px"}}>
              <img src={require("assets/img/uiux.png")} alt="Tech Stack" className="project-img"/>
              </Col>
            </Row>
            <Row style={{ marginTop: "40px"}}>
              <Col className="ml-auto mr-auto text-center" md="6" style={{ marginTop: "-40px"}}>
              <img src={require("assets/img/agile.png")} alt="Tech Stack" width="400" className="project-img"/>
              </Col>
              <Col className="ml-auto mr-auto text-left" md="6" style={{ marginTop: "40px"}}>
                <p>i also noticed that i really like using agile methodology, since it helps break down a large, daunting project into smaller, manageable chunks. sometimes, when i struggled with theory classes, i wondered if cs was for me, but this project made me realize that i like the practical and creative side of cs. i now feel more confident navigating the full stack, and i’m excited to keep building that foundation. i want to pursue a career in ui/ux design or software engineering - one where i can bridge the gap between design and implementation.</p>
              </Col>
            </Row>
            <p>(click on image below to access website)</p>
            <a
              href="https://software-studio-d7d9fa70f610.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={NotesyncImage}
                alt="Notesync Image"
                className="center-image"
              />
            </a>
            <h4>tech stack:</h4>
            <ul>
              <li>ruby on rails</li>
              <li>heroku</li>
              <li>bootstrap css</li>
              <li>devise gem (authentication)</li>
              <li>geocoder gem</li>
              <li>agile methodology</li>
            </ul>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Notesync;