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
import EcholabHeader from "components/Headers/EcholabHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter";
import InfoCardEcholab from "./index-sections/InfoCardEcholab.js";
import WorkflowDiagram from "./index-sections/WorkflowDiagram.js";
import PainpointImage from "assets/img/painpointpage.png";
import Painpoints from "assets/img/painpoints.png";
import DesignProcess from "./index-sections/DesignProcess.js";

function Echolab() {
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
        <EcholabHeader />
        <div className="section section-about-us">
          <Container>
            <InfoCardEcholab/>
            <h3>background</h3>
            <Row>
            <Col className="ml-auto mr-auto text-left" md="6">
            <p>during my internship at product manager accelerator, i worked on a project to address one of the most common and frustrating issues for SaaS products: a confusing onboarding process.</p>
            <p>but the challenge wasn't just onboarding itself - it was that product teams were overwhelmed by raw feedback, struggling what to prioritize, and how to turn those insights into experiments. this reflects a broader industry problem: most customer feedback never makes it into roadmaps, and latency between feedback and action creates a “revenue leak”.</p>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6" style={{ marginTop: "-100px"}}>
              <img src={require("assets/img/revenueleak.png")} alt="Revenue Leak" width="400"/>
              </Col>
            </Row>
            <h3>from pain points to hypotheses</h3>
            <p>to solve this, i helped design a workflow that connects customer pain points directly to hypotheses and experiments.</p>
            <WorkflowDiagram/>
            <p>here are the core improvements i worked on:</p>
            <h4>1. generate hypotheses automatically</h4>
            <p>using customer quotes and ticket clusters, our system generates hypotheses for testing. this speeds up the process from weeks to hours, ensuring teams can move from “what are users frustrated about?” to “what can we test this week?”.</p>
            <div className="image-wrapper">
            <img
              src={PainpointImage}
              alt="Echolab Pain Points Page"
              className="center-image"
            />
            </div>
            <h4>2. filter pain points</h4>
            <p>i proposed and designed a filtering feature for the pain points dashboard, allowing product managers to sort issues by:</p>
            <ul>
              <li>type: bug vs. feature request</li>
              <li>urgency: high-priority issues surface faster</li>
              <li>date created: identify new vs. longstanding problems</li>
              <li>trend: this helps teams quickly spot whether a pain point is growing (like a broken shipping calculator) or fading</li>
            </ul>
            <div className="image-wrapper">
            <img
              src={Painpoints}
              alt="Echolab Pain Points"
              className="center-image"
            />
            </div>
            <h4>3. visualize ticket trends</h4>
            <Row>
            <Col className="ml-auto mr-auto text-right" md="6" style={{ marginTop: "70px"}}>
                <p>
                each pain point card shows ticket counts over the last 90 days, with % increase or decrease. this makes it easy to see which issues are accelerating and demand immediate action.
                </p>
              </Col>
            <Col md="6">
                <img src={require("assets/img/painptcard.png")} alt="Pain Point Card" className="project-img"/>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
            </Row>
            <h4 style={{ marginTop: "70px"}}>4. design process</h4>
            <DesignProcess/>
            <ul style={{ marginTop: "50px"}}>
              <li>inspiration: i drew on ideas from loveable.ai, an ai-powered software engineer that makes mockups.</li>
              <li>collaboration: i worked closely with another designer on the pain points page and attended weekly team meetings to get feedback from our lead and peers.</li>
              <li>prototyping: i built wireframes in figma and refined them into high-fidelity designs.</li>
              <li>design systems & dev mode: i learned to work within a shared design system and used figma dev mode to collaborate seamlessly with developers, applying my knowledge of front-end languages to ensure smooth handoff.</li>
              <li>iterating together: through critiques, we identified UX issues and proposed fixes.</li>
            </ul>
            <h4>conclusion</h4>
            <Row>
            <Col md="6">
                <img src={require("assets/img/feedbackloop.png")} alt="Pain Point Card" className="project-img"/>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/feedbackloop.png") + ")"
                    }}
                  ></div>
                </Col>
                <Col className="ml-auto mr-auto text-left" md="6" style={{ marginTop: "160px"}}>
                  <p>
                  by the end of the internship, i helped build a framework where customer pain points no longer sit idle in support queues. instead, they fuel hypotheses, experiments, and product improvements — accelerating the cycle from feedback to learning.
                  </p>
              </Col>
            </Row>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Echolab;