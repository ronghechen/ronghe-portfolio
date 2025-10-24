import React from "react";

// reactstrap components
import { Container, Row, Col, Card, CardBody } from "reactstrap";

// core components

function InfoCardRaiso() {
    return (
      <div className="section section-info-card">
        <Container>
          <Row className="justify-content-center">
            <Col md="12" lg="10">
              <Card className="info-card">
                <CardBody className="info-card-body d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                  <div className="info-item">
                    <p className="info-label">role</p>
                    <p className="info-value">ux researcher, ux designer</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">timeline</p>
                    <p className="info-value">winter-spring 2024</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">skills</p>
                    <p className="info-value">ui design, ux research, prototyping</p>
                  </div>
                  <div className="info-item">
                    <p className="info-label">tools</p>
                    <p className="info-value">figma</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  export default InfoCardRaiso;