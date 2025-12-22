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
              i’m a junior at northwestern studying computer science, psychology, and design. i'm passionate about bridging the gap between design and implementation, and my current interests lie in ux design, front-end engineering, and web development.
          </p>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
