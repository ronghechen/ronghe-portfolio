import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/heart.png")}
                  className="hero-heart"
                ></img>
              </div>
              <div className="hero-images-container-1" style={{ marginTop: "-500px"}}>
                <img
                  alt="..."
                  src={require("assets/img/star.png")}
                  className="hero-star"
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/sparkles.png")}
                  className="hero-sparkles"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
