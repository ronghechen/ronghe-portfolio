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
            hi! my name is ronghe (she/her) and i'm passionate about the intersection between design and technology. as a junior at northwestern's mccormick school of engineering pursuing a bs in computer science and a ba in psychology with a segal design certificate, i design and develop products that are creative, intuitive, and appeal to user needs.
          </p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            growing up, i discovered my love for creative coding from scratch, a programming language and online community where i created video games, art, and animations. i discovered my passion for product design years later - freshman year of college, where i designed prototypes for the website of raiso (responsible use of ai student organization). 
          </p>
          <p style = {{ maxWidth: "1500px", marginTop: "30px" }}>last summer, i interned as an ai ui/ux designer at product manager accelerator, where i collaborated with pms, devs, and data scientists to launch echolab, an ai-powered b2b saas platform that turns customer feedback into a/b tests.</p>
          <p style = {{ maxWidth: "1500px", marginTop: "30px" }}>while i'm not staying up until the am debugging at mudd, i enjoy designing graphics, traveling, cafe hopping, cooking/baking, and hanging out with friends.</p>
        </Container>
      </div>
    </>
  );
}

export default BasicElements;

