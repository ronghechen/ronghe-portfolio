/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="red">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/rc-logo.png")}
            ></img>
            <h1 className="h1-seo"
              style={{ textTransform: "none"}}
            >ronghe chen.</h1>
            <h3>developer & designer.</h3>
          </div>
          <p className="category category-absolute"
              style={{ marginTop: "-300px", fontWeight: 400 }}
          >
              i am a junior at northwestern studying computer science, psychology, and design. i am passionate about bridging the gap between design and implementation, and am seeking a product or swe internship for the summer of 2026.
          </p>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
