import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function PortfolioHeader() {
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
        <div className="page-header page-header-small video-hero">
          <div
            className="page-header-image"
            ref={pageHeader}
          ></div>
    
          <div className="content-center">
            <Container>
              <h3>⋆˚࿔ play 𝜗𝜚˚⋆</h3>
              <p className="category category-absolute"
                  style={{marginTop: "100px", fontWeight: 400 }}
              >
                 self-directed explorations in engineering, visuals, and interaction.
              </p>
            </Container>
          </div>
        </div>
      </>
  );
}

export default PortfolioHeader;