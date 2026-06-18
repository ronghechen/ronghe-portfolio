import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

function ExperienceSection() {
  return (
    <div className="section section-experience">
      <Container>
        <Row className="mb-4" style={{ marginTop: "-80px"}}>
          <Col md="6" className="mb-3">
            <Card className="experience-card h-100">
              <CardBody>
                <h4 className="title">₊˚ෆ currently</h4>
                <p>
                  building a talent operations chatbot at{" "}
                  <strong>cvs health</strong>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md="6" className="mb-3">
            <Card className="experience-card h-100">
              <CardBody>
                <h4 className="title">⋆°🎧ྀི previously</h4>
                <p>
                  researched and developed a platform that seeks to encourage users experientially travel at{" "}
                  <strong>northwestern's dtr lab</strong>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ExperienceSection;
