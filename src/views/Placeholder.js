import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PlaceholderHeader from "components/Headers/PlaceholderHeader";
import TransparentFooter from "components/Footers/TransparentFooter";

function Placeholder() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PlaceholderHeader/>
        <div className="section section-about-us">
          <Container>
            <h3>this case study is a work in progress. please check back soon!</h3>  
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Placeholder;