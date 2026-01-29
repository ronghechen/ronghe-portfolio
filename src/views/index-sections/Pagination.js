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
                  building a full-stack ai-powered web app that supports
                  medical compliance and regulation workflows at{" "}
                  <strong>openqquantify</strong>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md="6" className="mb-3">
            <Card className="experience-card h-100">
              <CardBody>
                <h4 className="title">⋆°🎧ྀི previously</h4>
                <p>
                  designed dashboards and ai workflows for{" "}
                  <strong>echolab</strong> via {" "}
                  <strong>product manager accelerator</strong>
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
