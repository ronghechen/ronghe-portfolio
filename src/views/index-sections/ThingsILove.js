import React from "react";
import { Container, Row, Col } from "reactstrap";

import pilates from "assets/img/pilates.png";
import icedcoffee from "assets/img/icedcoffee.png";
import digitalArt from "assets/img/digital art.png";

function ThingsILove() {
  return (
    <div className="things-i-love-section">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs="4" md="3" className="d-flex justify-content-center">
            <img
              src={pilates}
              alt="Doing pilates"
              className="things-i-love-img glow-pink"
            />
          </Col>

          <Col xs="4" md="3" className="d-flex justify-content-center">
            <img
              src={icedcoffee}
              alt="Iced coffee"
              className="things-i-love-img glow-purple"
            />
          </Col>

          <Col xs="4" md="3" className="d-flex justify-content-center">
            <img
              src={digitalArt}
              alt="Creating digital art"
              className="things-i-love-img glow-blue"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ThingsILove;
