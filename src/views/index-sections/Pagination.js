import React from "react";

// reactstrap components
import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function PaginationSection() {
  const [pills, setPills] = React.useState("2");
  return (
    <>
      <div className="section section-pagination">
        <Container>
          <Row style={{ marginTop: "-100px" }}>
            <Col md="6">
              <h3 className="title">･ﾟ✧ tools & tech:</h3>
            </Col>
          </Row>
          <p style = {{ maxWidth: "1500px"}}> ☆ react.js ☆ figma ☆ html/css/js ☆ ruby on rails ☆ python ☆ canva ☆ sql ☆ bootstrap ☆ tailwind css</p>
          <br></br>
        </Container>
      </div>
    </>
  );
}

export default PaginationSection;
