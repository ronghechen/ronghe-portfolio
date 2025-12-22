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
            with a tech background and keen interest in design, i love being able to speak both languages. as a designer, i'm drawn to complex systems where user trust and systems thinking are crucial. as an engineer, i love building user-facing products where design quality and ease of use matters.
          </p>
          <p style={{ maxWidth: "1500px", marginTop: "30px" }}>
            whether i'm sketching flows or writing code, i love to make complex systems feel simple and great design feel real.
          </p>
          <p style = {{ maxWidth: "1500px", marginTop: "30px" }}>things i love:</p>
          <ul style = {{ maxWidth: "1500px", marginTop: "30px" }}>
            <li>🧘‍♀️ doing pilates</li>
            <li>🧋 iced coffee</li>
            <li>💻 coding my own designs</li>
          </ul>
        </Container>
      </div>
    </>
  );
}

export default BasicElements;

