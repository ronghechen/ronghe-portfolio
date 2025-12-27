import React, { useEffect, useState } from "react";
import { 
  Navbar, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink, 
  Container,
  NavbarToggler,
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
        // Scrolling down — hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up — show navbar
        setIsVisible(true);
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

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

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
        
        <NavbarToggler onClick={toggle} className="d-md-none">
          <span className="navbar-toggler-bar navbar-toggler-bar-top"></span>
          <span className="navbar-toggler-bar navbar-toggler-bar-middle"></span>
          <span className="navbar-toggler-bar navbar-toggler-bar-bottom"></span>
        </NavbarToggler>
        
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
