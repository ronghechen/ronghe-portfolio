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
            <p>during my internship at product manager accelerator, i worked on a project to address one of the most common and frustrating issues for SaaS products: a confusing onboarding process.</p>
            <p><strong>my role: </strong>as an ai ui/ux design intern, i focused on experience design for feedback-to-experiment workflows, including dashboard ux, filtering logic, and trend visualization.</p>
            <p><strong>primary user: </strong>product managers at saas companies responsible for prioritizing customer feedback and planning experiments.</p>

            <h3 style={{ marginTop: "80px"}}>challenges</h3>
            <Row>
            <Col className="ml-auto mr-auto text-left" md="6">
            <p>the challenge wasn't just onboarding itself - it was that product teams were overwhelmed by raw feedback, struggling what to prioritize, and how to turn those insights into experiments.</p>
            <p>this reflects a broader industry problem: most customer feedback never makes it into roadmaps, and latency between feedback and action creates a “revenue leak”.</p>
            <p>the goal of this project was to <strong>design a workflow</strong> that connects customer pain points <strong>directly to hypotheses and experiments.</strong></p>
            </Col>
              <Col className="ml-auto mr-auto text-center" md="6" style={{ marginTop: "-80px"}}>
              <img src={require("assets/img/revenueleak.png")} alt="Revenue Leak" className="img-fluid revenue-leak-img"/>
              </Col>
            </Row>
            
            <WorkflowDiagram/>
            <h3 style={{ marginTop: "80px"}}>key improvements</h3>
            <h4>1. generate hypotheses automatically</h4>
            <p>using customer quotes and ticket clusters, our system generates draft hypotheses for experimentation.</p>
            <p><strong>design focus: </strong>i designed the ui and flow around how hypotheses were presented so that PMs could quickly review, refine, and decide whether to test them - treating ai output as a starting point, not a final answer.</p>
            <p><strong>decision supported: </strong>"what can we reasonably test next based on real customer pain?"</p>
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
              <li>type</li>
              <li>urgency</li>
              <li>date created</li>
              <li>trend over time</li>
            </ul>
            <p><strong>design rationale: </strong>without filtering, PMs defaulted to reacting to the loudest issues rather than the most impactful ones.</p>
            <p><strong>decision supported: </strong>"which problems deserve attention right now?"</p>
            <div className="image-wrapper">
            <img
              src={Painpoints}
              alt="Echolab Pain Points"
              className="center-image"
            />
            </div>
            <h4>3. visualize ticket trends</h4>
            <Row style={{ marginTop: "70px"}}>
            <Col className="ml-auto mr-auto text-left" md="6">
                <p>
                each pain point card shows ticket counts over the last 90 days, with % increase or decrease.</p>
                <p><strong>design rationale: </strong>surfacing trends reduced the need for manual analysis and helped teams quickly identify accelerating issues versus those resolving naturally.</p>
                <p><strong>decision supported: </strong>"is this issue getting worse, stable, or improving?"</p>
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
            <h3 style={{ marginTop: "70px"}}>design process</h3>
            <DesignProcess/>
            <ul style={{ marginTop: "50px"}}>
              <li>inspiration: i drew on ideas from loveable.ai, an ai-powered software engineer that makes mockups.</li>
              <li>collaboration: i worked closely with another designer on the pain points page and attended weekly team meetings to get feedback from our lead and peers.</li>
              <li>prototyping: i built wireframes in figma and refined them into high-fidelity designs.</li>
              <li>design systems & dev mode: i learned to work within a shared design system and used figma dev mode to collaborate seamlessly with developers, applying my knowledge of front-end languages to ensure smooth handoff.</li>
              <li>iteration: through critiques, we incorporated feedback to refine information hierarchy and reduce cognitive load.</li>
            </ul>
            <h3>conclusion</h3>
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
                  by the end of the internship, i helped build a framework where customer pain points no longer sit idle in support queues. instead, they fuel hypotheses, experiments, and product improvements - accelerating the cycle from feedback to learning.
                  </p>
                  <p><strong>key takeaway: </strong>designing ai-powered products isn't just about automation, it's about supporting human judgement. this project reinforced the importance of clarity, trust, and decision support when designing enterprise tools.</p>
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