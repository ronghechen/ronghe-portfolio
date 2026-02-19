import React from "react";
import { Container } from "reactstrap";
import ThingsILove from "./ThingsILove";

function BasicElements() {
  return (
    <>
      <div
        className="section section-basic"
        id="basic-elements"
        style={{ marginTop: "-200px" }}
      >
        <Container>
          <h3 className="title">˚｡⋆୨୧˚about me</h3>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            hi! my name is <strong>ronghe (she/her)</strong> and i'm a junior at northwestern majoring in computer science (with a concentration in software engineering), minoring in psychology, and pursuing a segal design certificate. 
          </p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            i come from a cs background and enjoy thinking about systems end-to-end, but i’ve always gravitated toward <strong>human-facing products.</strong> while many of my peers preferred backend services or infrastructure, I found myself drawn to the ui layer - not just for aesthetics, but for the challenge of translating complex systems into intuitive, responsive experiences. 
          </p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            <strong>from there, my interest expanded outward.</strong> my background in psychology sharpened how I think about perception, cognition, and behavior - allowing myself to design interfaces that align with how people actually process information. so far, i’ve worked in multiple roles spanning software engineering and design - including developing a full-stack music calendar web app, building an ai-powered medical regulation assistant chat interface, and leading research and the end-to-end product vision for a platform that encourages mindful, reflective travel. whether it’s a mobile app or a microwave interface, i’m always asking: <strong>how can this be simpler, smarter, and more human?</strong>
          </p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>i’m always down to connect and chat about ui engineering, human-centered systems, or anything you’re building right now.</p>
          <p style = {{ maxWidth: "1500px", marginTop: "30px" }}><strong>things i love:</strong></p>
          <ThingsILove/>
        </Container>
      </div>
    </>
  );
}

export default BasicElements;

