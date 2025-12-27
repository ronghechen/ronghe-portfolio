import React, { useEffect, useState } from "react";
import { 
  Navbar, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink, 
  Container,
  Collapse
} from "reactstrap";

function IndexNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <Navbar
      className={`fixed-top custom-navbar simple-navbar navbar-transparent ${
        isVisible ? "visible" : "hidden"
      } ${isOpen ? "nav-open" : ""}`}
      expand="md"
    >
      <Container className="d-flex justify-content-between align-items-center">
        <NavbarBrand href="/index" id="navbar-brand" className="navbar-text">
          ronghe chen
        </NavbarBrand>
        
        {/* Custom hamburger button */}
        <button 
          className={`hamburger hamburger--spin d-md-none ${isOpen ? 'is-active' : ''}`}
          onClick={toggle}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={isOpen}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/portfolio" onClick={handleNavClick} className="nav-link-hover">
                <p className="navbar-text">work</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="nav-link-hover"
              >
                <p className="navbar-text">resume</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;