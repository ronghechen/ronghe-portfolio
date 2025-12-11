import React from "react";
import { Container } from "reactstrap";

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
            hi! my name is ronghe (she/her) and i'm passionate about the intersection between design and technology. as a junior at northwestern's mccormick school of engineering pursuing a bs in computer science (with a concentration in software engineering), a minor in psychology, and a segal design certificate, i design and develop products that are creative, intuitive, and appeal to user needs.
          </p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            i am currently interning at openqquantify as a software engineer, building ai-powered web apps that provide medical compliance assistance. i am also involved in design, technology, and research (dtr), where i am starting a project called the experiential computing platform, an AI-powered platform that lets designers explore how different users experience a product across demographics, regions, and accessibility constraints.
          </p>
          <p style = {{ maxWidth: "1500px", marginTop: "30px" }}>last summer, i interned as an ai ui/ux designer at product manager accelerator, where i collaborated with pms, devs, and data scientists to launch echolab, an ai-powered b2b saas platform that turns customer feedback into a/b tests.</p>
          <p style = {{ maxWidth: "1500px", marginTop: "30px" }}>while i'm not staying up until the am debugging at mudd, i enjoy designing graphics, traveling, cafe hopping, cooking/baking, and hanging out with friends.</p>
        </Container>
      </div>
    </>
  );
}

export default BasicElements;

