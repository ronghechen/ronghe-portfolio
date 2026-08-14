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
            hi! my name is <strong>ronghe (she/her)</strong> and i'm a senior at northwestern pursuing a combined bs/ms degree in computer science, a psychology minor, and a design/digital product certificate.
          </p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}> at <strong>cvs health</strong>, i worked at the intersection of software, ai, and employee experience, building an internal ai assistant, backend services, and workflow automations. beyond cvs, my experience spans full-stack engineering and ui/ux design at startups, where i've built ai-integrated applications and designed b2b saas products.</p>
          <p style={{ maxWidth: "1500px", marginTop: "30px"}}> i've always been a very visual person, so when i started studying computer science, i naturally gravitated toward the ui layer - where code becomes something you can see, interact with, and experience. that same love of visual expression shapes my interest in fashion and inspired me to build <strong>softwear.engineer</strong>, a full-stack digital lookbook that brings together two things i love: software and personal style.</p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            some of my hobbies include: doing pilates, traveling and{" "}
          <a
            href="https://travelwithronghe.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            writing about my adventures
          </a>
            , or rating every restaurant i try on beli.
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

