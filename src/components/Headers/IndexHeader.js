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
          <div 
            className="content-center brand"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "60vh",
              paddingBottom: "4rem"
            }}
          >
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/rc-logo.png")}
              style={{ marginBottom: "1rem" }}
            ></img>
            <h1 className="h1-seo"
              style={{ 
                textTransform: "none",
                marginBottom: "0.5rem"
              }}
            >ronghe chen.</h1>
            <h3 style={{ marginBottom: "4rem" }}>
              where software meets design.
            </h3>
            
            <p 
              style={{ 
                fontWeight: 350,
                opacity: 0.7,
                maxWidth: "1000px", 
                margin: "0 auto",
                width: "100%",
                textAlign: "center",
                padding: "0 2rem", 
                lineHeight: "1.6",
                fontSize: "1.1rem" 
              }}
            >
              product-obsessed creative technologist studying computer science, psychology, and design. i build intuitive, scalable systems with a focus on frontend engineering, ux, and real-world impact.
            </p>
          </div>
        </Container>
      </div>
      
      <style jsx>{`
        /* Large desktop screens */
        @media (min-width: 1200px) {
          .content-center.brand p {
            max-width: 1100px !important;
            padding: 0 3rem !important;
            font-size: 1.15rem !important;
            line-height: 1.7 !important;
          }
        }
        
        /* Standard desktop */
        @media (min-width: 992px) and (max-width: 1199px) {
          .content-center.brand p {
            max-width: 950px !important;
            padding: 0 2.5rem !important;
          }
        }
        
        /* Tablet */
        @media (min-width: 768px) and (max-width: 991px) {
          .content-center.brand {
            padding-bottom: 3rem !important;
          }
          
          .content-center.brand h3 {
            margin-bottom: 3rem !important;
          }
          
          .content-center.brand p {
            max-width: 800px !important;
            padding: 0 2rem !important;
            font-size: 1.05rem !important;
          }
        }
        
        /* Tablet portrait */
        @media (max-width: 767px) {
          .content-center.brand {
            padding-bottom: 2rem !important;
          }
          
          .content-center.brand h3 {
            margin-bottom: 2.5rem !important;
          }
          
          .content-center.brand p {
            max-width: 90% !important;
            padding: 0 1.5rem !important;
            font-size: 1rem !important;
          }
        }
        
        /* Mobile */
        @media (max-width: 480px) {
          .content-center.brand {
            padding-bottom: 1.5rem !important;
          }
          
          .content-center.brand h3 {
            margin-bottom: 2rem !important;
            font-size: 1.25rem !important;
          }
          
          .content-center.brand p {
            max-width: 95% !important;
            padding: 0 1rem !important;
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
          }
        }
        
        /* Extra large screens]*/
        @media (min-width: 1920px) {
          .content-center.brand p {
            max-width: 1300px !important;
            padding: 0 4rem !important;
            font-size: 1.2rem !important;
          }
        }
        
        /* Ultra-wide screens */
        @media (min-width: 2560px) {
          .content-center.brand p {
            max-width: 1400px !important;
            padding: 0 5rem !important;
            font-size: 1.25rem !important;
            line-height: 1.8 !important;
          }
        }
      `}</style>
    </>
  );
}

export default IndexHeader;