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
import ProjectsHeader from "components/Headers/ProjectsHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter";

function Projects() {
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
        <ProjectsHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
            <Col className="ml-auto mr-auto text-right" md="6" style={{ marginTop: "100px"}}>
                <h3>wandering skies</h3>
                <h4>software engineering</h4>
                <p>
                wandering skies is an interactive sky scene built using javascript and webgl, deployed on vercel, customizing the ui with html/css. users can toggle between 3 times of day (day, sunset, night) and 2 different shading modes (phong, toon w/ purple tint).
                </p>
                <Button
                    outline
                    color="dark"
                    className="custom-btn"
                    href="https://wanderingskies.vercel.app/"
                    >
                    view project
                    </Button>
              </Col>
            <Col md="6">
                <img src={require("assets/img/wanderingskies.png")} alt="Wandering Skies" className="project-img"/>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
            </Row>
            <Row>
            <Col md="6">
                <img src={require("assets/img/twr.png")} alt="Travel With Ronghe" className="project-img"/>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
            <Col className="ml-auto mr-auto text-right" md="6" style={{ marginTop: "100px"}}>
                <h3>travel with ronghe</h3>
                <h4>software engineering</h4>
                <p>
                because i am passionate about food, photography, and travel, i built my own travel blog with hugo, customizing inputs with bootstrap css and sorting my experiences by continent using taxonomies.
                </p>
                <Button
                    outline
                    color="dark"
                    className="custom-btn"
                    href="https://travelwithronghe.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    view project
                    </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Projects;