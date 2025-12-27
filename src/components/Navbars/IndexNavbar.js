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
  const [isScrolled, setIsScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Add background when scrolled
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <Navbar
      className={`fixed-top custom-navbar simple-navbar navbar-transparent ${
        isVisible ? "visible" : "hidden"
      } ${isOpen ? "nav-open" : ""} ${isScrolled ? "scrolled" : ""}`}
      expand="md"
    >
      <Container className="d-flex justify-content-between align-items-center">
        <NavbarBrand href="/index" id="navbar-brand" className="navbar-text">
          ronghe chen
        </NavbarBrand>
        
        {/* Custom hamburger button - NOT using NavbarToggler */}
        <button 
          className={`navbar-toggler-custom d-md-none ${isOpen ? 'open' : ''}`}
          onClick={toggle}
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
        </button>
        
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/portfolio" onClick={handleNavClick} className="nav-link-hover">
                <p className="navbar-text">portfolio</p>
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