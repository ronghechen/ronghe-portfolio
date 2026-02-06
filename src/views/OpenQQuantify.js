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
import OpenQHeader from "components/Headers/OpenQHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter";
import InfoCardOpenQ from "./index-sections/InfoCardOpenQ.js";
import Architecture from "assets/img/architecture.png";
import Tradeoffs from "./index-sections/BackendTradeoffs.js";
import ApiTradeoffs from "./index-sections/ApiTradeoffs.js";

function OpenQQuantify() {
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
        <OpenQHeader />
        <div className="section section-about-us">
          <Container>
            <InfoCardOpenQ/>
            <h3>problem statement</h3>
            <Row style={{ marginTop: "-40px"}}>
              <Col className="ml-auto mr-auto text-left" md="6" style={{ marginTop: "40px"}}>
               <p><strong>goal: </strong> build a lightweight ai-powered web app that answers international medical compliance questions, with optional persistence of user queries.</p>
                <p><strong>constraints:</strong></p>
                <ul>
                  <li>small scope/demo-level infra</li>
                  <li>need for rapid iteration</li>
                  <li>privacy-sensitive domain (medical compliance)</li>
                  <li>low operational overhead</li>
                </ul>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6" style={{ marginTop: "-100px"}}>
              <img src={require("assets/img/globe.png")} alt="Globe" className="project-img"/>
              </Col>
            </Row>
            <h3 style={{ marginTop: "-40px"}}>architecture</h3>
            <img
                src={Architecture}
                alt="Architecture"
                className="center-image"
              />
            <p>the system follows a simple request–response architecture, with a flask app acting as the orchestration layer between a server-rendered frontend, an external llm api, and an opt-in persistence layer.</p>
            <p><strong>why this architecture?</strong> i chose a monolithic flask app rather than a microservices architecture to minimize operational complexity and deployment overhead for a demo-scale product.</p>
            <h3>backend design decisions</h3>
            <p>for the backend, i decided to use flask and sqlalchemy because it's lightweight, supports chronological history, and respects privacy (optional persistence).</p>
            <Tradeoffs/>
            <h3>data privacy</h3>
            <p><strong>design decision: </strong> only save q&a pairs when users explicitly opt in.</p>
            <p><strong>why?</strong></p>
            <ul>
              <li>reduces privacy risk</li>
              <li>aligns with compliance-first messaging</li>
              <li>avoids storing unnecessary sensitive data</li>
            </ul>
            <p>being a good engineer isn't just about raw technical ability - but incorporating user empathy and ethics into system design. i implemented this feature via checkbox-based opt-in and conditional database writes database writes only when save == True.</p>
            <h3>api & ai integration decisions</h3>
            <p><strong>decision: </strong>use a single-turn completion model with a strong system prompt.</p>
            <p><strong>why?</strong></p>
            <ul>
              <li>predictable outputs</li>
              <li>easier to control tone and domain expertise</li>
              <li>avoids storing unnecessary sensitive data</li>
            </ul>
           <ApiTradeoffs/>
           <p>by prompt engineering the phrase "you are an expert in international medical regulation and data compliance..." i constrained the ai's expertise to medical regulation and data compliance to balance accuracy, safety, and predictability in a regulated domain.</p>
          <h3>frontend architecture</h3>
          <p>the frontend is built using server-side rendering with flask and jinja, prioritizing simplicity, reliability, and low overhead over rich client-side interactivity.</p>
          <p>rather than implementing a javascript-heavy spa, i chose an html-first architecture where user input is submitted via a single form and the same template is re-rendered with server-provided state. this keeps the client stateless and reduces frontend complexity.</p>
          <p>the core interaction flow is intentionally simple: </p>
          <ul>
            <li>users submit a compliance question in the text box</li>
            <li>the backend processes the request and returns a response</li>
            <li>the page re-renders conditionally with the ai answer displayed</li>
          </ul>
          <p>the response container is only rendered when data exists, avoiding placeholder ui and keeping the initial experience focused. for the layout, i decided to use reusable css patterns rather than a framework, which provides visual consistency while keeping the codebase lightweight and easy to extend.</p>
          <p>overall, this architecture avoids client-side state management and build tooling, enabling faster iteration and easier debugging, but sacrifices advanced interactivity (e.g. streaming responses, multi-turn chat ui) which would be a great stretch goal if this product scaled.</p>
          <h3>reflection</h3>
          <Row>
            <Col className="ml-auto mr-auto text-left" md="6">
              <p>this project reinforced that effective software engineering is largely about making intentional tradeoffs under real constraints. rather than over-optimizing for scale or complexity, i prioritized clarity, privacy, and maintainability - important for product’s demo scope and regulatory context. designing opt-in data persistence and a predictable ai interaction model pushed me to think beyond implementation details and consider ethical, operational, and long-term implications of technical decisions. overall, this project strengthened my ability to reason about system design holistically, balancing product goals with engineering practicality.</p>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6" style={{ marginTop: "-80px"}}>
                <img src={require("assets/img/medicalreg.png")} alt="Medical Regulation" className="img-fluid revenue-leak-img"/>
              </Col>
            </Row>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default OpenQQuantify;