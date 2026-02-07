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
            hi! my name is ronghe (she/her) and i'm a junior at northwestern majoring in computer science (with a concentration in software engineering), minoring in psychology, and pursuing a segal design certificate. 
          </p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            i come from a cs background and enjoy thinking about systems end-to-end, but i’ve always gravitated toward human-facing products. while many of my peers preferred backend services or infrastructure, I found myself drawn to the ui layer - not just for aesthetics, but for the challenge of translating complex systems into intuitive, responsive experiences. 
          </p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            as a product-minded engineer and designer, i'm a problem solver at heart. whether it's a mobile app or a microwave ui, i enjoy analyzing how things work under the hood and how to make them work better for people.
          </p>
          <p style = {{ maxWidth: "1500px", marginTop: "30px" }}>things i love:</p>
          <ThingsILove/>
        </Container>
      </div>
    </>
  );
}

export default BasicElements;

