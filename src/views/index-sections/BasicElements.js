import React from "react";
import { Container } from "reactstrap";
import ThingsILove from "./ThingsILove";
import SoftwearImg from "assets/img/softwear.png";

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
            hi! my name is <strong>ronghe (she/her)</strong> and i'm a an engineer, designer, and creative techie at heart. 
          </p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}> i’m a junior at northwestern majoring in computer science, minoring in psychology, and pursuing a segal design certificate. while studying computer science, i found myself especially drawn to the ui layer - not just for aesthetics, but for the challenge of translating complex systems into intuitive, responsive experiences.</p>
          <p style={{ maxWidth: "1500px", marginTop: "30px"}}> when i'm not coding or prototyping, i like to express myself through fashion. i love thrifting and building pinterest moodboards to experiment with different aesthetics and visual identities. this interest led me to build <strong>softwear.engineer</strong>, an outfit lookbook web app with filtering, recommendations, and closet analytics.</p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            i’m also deeply hands-on in other areas: from cooking & baking (savory > sweet) to staying active through pilates and dance workouts. i’m drawn to anything that blends creativity, iteration, and intentional design.
          </p>
          <h3>featured project: softwear.engineer</h3>
          <a
              href="https://softwear-engineer.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={SoftwearImg}
                alt="Softwear Engineer Image"
                className="center-image"
              />
            </a>
          {/*<p style = {{ maxWidth: "1500px", marginTop: "30px" }}><strong>things i love:</strong></p>
          <ThingsILove/>*/}

        </Container>
      </div>
    </>
  );
}

export default BasicElements;

