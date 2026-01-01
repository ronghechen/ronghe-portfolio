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
              style={{ 
                textTransform: "none"
              }}
            >ronghe chen.</h1>
            <h3 style={{ marginBottom: "3rem" }}>
              developer & designer.
            </h3>
          </div>
          <p 
            className="category category-absolute"
            style={{ 
              top: "calc(50% + 100px)", /* Positions it well below the heading */
              transform: "translateY(-50%)",
              fontWeight: 400,
              padding: "0 1rem",
              maxWidth: "800px",
              margin: "0 auto",
              width: "100%",
              left: "0",
              right: "0"
            }}
          >
            i'm a junior at northwestern studying computer science, psychology, and design. i'm passionate about bridging the gap between design and implementation, and my current interests lie in ux design and software engineering (front-end/full-stack).
          </p>
        </Container>
      </div>
      
      {/* Responsive adjustments to maintain spacing */}
      <style jsx>{`
        /* Base styles - consistent spacing on all screens */
        .content-center.brand h3 {
          margin-bottom: 3rem !important;
        }
        
        .category.category-absolute {
          top: calc(50% + 100px) !important;
        }
        
        /* Tablet adjustments */
        @media (max-width: 1024px) {
          .content-center.brand h3 {
            margin-bottom: 2.5rem !important;
          }
          
          .category.category-absolute {
            top: calc(50% + 80px) !important;
            max-width: 700px !important;
          }
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
          .content-center.brand h3 {
            margin-bottom: 2rem !important;
          }
          
          .category.category-absolute {
            top: calc(50% + 60px) !important;
            max-width: 90% !important;
            padding: 0 1.5rem !important;
            position: relative !important;
            top: auto !important;
            transform: none !important;
            margin-top: 2rem !important;
          }
        }
        
        /* Small mobile adjustments */
        @media (max-width: 480px) {
          .content-center.brand h3 {
            margin-bottom: 1.5rem !important;
          }
          
          .category.category-absolute {
            max-width: 95% !important;
            padding: 0 1rem !important;
            margin-top: 1.5rem !important;
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>
    </>
  );
}

export default IndexHeader;