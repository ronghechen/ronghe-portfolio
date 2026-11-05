import React from "react";
import { Container, Button } from "reactstrap";
import HolographicLaptop from "../HolographicLaptop";

function BasicElements() {
  return (
    <>
      <div
        className="section section-basic"
        id="basic-elements"
        style={{ marginTop: "-200px" }}
      >
        <Container>
          <h3 className="title">hi, i’m ronghe .˚｡⋆౨ৎ˚</h3>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            i'm a senior at northwestern pursuing a combined bs/ms degree in computer science, a psychology minor, and a design/digital product certificate.
          </p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}> i chose cs because it's one of the few fields where logic and creativity share the same desk. i’m interested in software engineering (especially frontend), applied AI, and HCI, and i’m happiest when i take an idea from a blank screen to something i fully own.</p>
          <p style={{ maxWidth: "1500px", marginTop: "30px"}}> at cvs health, i worked at the intersection of software, ai, and employee experience, building an internal ai assistant, a python/fastapi retrieval service, and workflow automations. beyond cvs, my experience spans full-stack engineering and ui/ux design at startups, as well as building personal projects. a project that i’m the most proud of is <strong>softwear.engineer</strong>, a full-stack digital lookbook that brings together two things i love: software and personal style.</p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            some of my current goals is to learn three.js and get better at webgl, and some of my hobbies include: doing pilates, traveling and{" "}
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
          <div className="featured-project-section">
            <div className="featured-project-layout">

              {/* LEFT: Project information */}
              <div className="featured-project-info">
                <p className="featured-project-label intel-mono">
                  FEATURED PROJECT
                </p>

                <h3 className="featured-project-title">
                  softwear.engineer 💻
                </h3>

                <p className="featured-project-description">
                  a full-stack fashion lookbook web app that allows you to
                  upload, categorize, and analyze outfits by occasion,
                  vibe, color, and season.
                </p>

                <Button
                  outline
                  color="dark"
                  className="btn-round btn-glass"
                  href="https://softwear-engineer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW LIVE ↗
                </Button>
              </div>

              {/* RIGHT: 3D Laptop */}
              <div className="featured-project-visual">
                <HolographicLaptop />
              </div>

            </div>
          </div>
          {/*<p style = {{ maxWidth: "1500px", marginTop: "30px" }}><strong>things i love:</strong></p>
          <ThingsILove/>*/}

        </Container>
      </div>
    </>
  );
}

export default BasicElements;

