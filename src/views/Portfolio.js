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
import PortfolioHeader from "components/Headers/PortfolioHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter";

function Portfolio() {
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
        <PortfolioHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
            <Col className="ml-auto mr-auto text-right" md="6" style={{ marginTop: "100px"}}>
                <h3>product manager accelerator (echolab)</h3>
                <h4>ux design</h4>
                <p>
                during my internship at product manager accelerator, i collaborated with developers and PMs to design a B2B SaaS platform called echolab, which utilizes AI to convert raw customer feedback into actionable A/B tests. this project strengthened my skills in design systems, front-end collaboration, and applying user feedback to product strategy.
                </p>
                <Button
                    outline
                    color="dark"
                    className="custom-btn"
                    href="/echolab"
                    >
                    view project
                    </Button>
              </Col>
            <Col md="6">
                <img src={require("assets/img/echolab_round.png")} alt="Echolab project" className="project-img"/>
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
                <img src={require("assets/img/notesync_round.png")} alt="Notesync" className="project-img"/>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
            <Col className="ml-auto mr-auto text-right" md="6" style={{ marginTop: "100px"}}>
                <h3>notesync</h3>
                <h4>software engineering</h4>
                <p>
                for my software studio project, i worked with a group of fellow students on a band calendar called notesync. working on this project honed my skills in full-stack software development, agile methodologies, and designing interfaces.
                </p>
                <Button
                    outline
                    color="dark"
                    className="custom-btn"
                    href="/notesync"
                    >
                    view project
                    </Button>
              </Col>
            </Row>
            <Row>
            <Col className="ml-auto mr-auto text-right" md="6" style={{ marginTop: "100px"}}>
                <h3>transportation app interface</h3>
                <h4>ux design</h4>
                <p>
                for my human-computer interaction (cs 330) class, i interviewed a classmate on their transportation habits, as well as their pain points using various transportation apps such as NUTransit and tripshot. after a series of user interviews, i was able to design a wireframe for a transportation app that aligned with their needs.
                </p>
                <Button
                    outline
                    color="dark"
                    className="custom-btn"
                    href="/nu-transport-app"
                    >
                    view project
                    </Button>
              </Col>
            <Col md="6">
                <img src={require("assets/img/transport app.png")} alt="RAISO" className="project-img"/>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
            </Row>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Portfolio;