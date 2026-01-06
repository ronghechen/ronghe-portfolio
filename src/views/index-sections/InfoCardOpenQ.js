import React from "react";

// reactstrap components
import { Container, Row, Col, Card, CardBody } from "reactstrap";

// core components

function InfoCardOpenQ() {
    return (
      <div className="section section-info-card">
        <Container>
          <Row className="justify-content-center">
            <Col md="12" lg="10">
              <Card className="info-card">
                <CardBody className="info-card-body d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                  <div className="info-item">
                    <p className="info-label">role</p>
                    <p className="info-value">full-stack software engineer</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">timeline</p>
                    <p className="info-value">nov – dec 2025</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">skills</p>
                    <p className="info-value">full-stack development, api integration, information design</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">tools</p>
                    <p className="info-value">flask, html, css, javascript, openai api, sqlalchemy</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  export default InfoCardOpenQ;