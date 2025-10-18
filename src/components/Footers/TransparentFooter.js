/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul style={{ textTransform: "none" }}>
            <li>
              <a
                href="https://www.linkedin.com/in/ronghe-chen/"
                target="_blank"
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ronghechen"
                target="_blank"
              >
                github
              </a>
            </li>
            <li>
              <a
                href="mailto:ronghechen2027@u.northwestern.edu"
                target="_blank"
              >
                email
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © 2025 ronghe chen ⋆୨୧˚⋆ ˚
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
