import React, { useEffect, useState } from "react";
import { 
  Navbar, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink, 
  Container
} from "reactstrap";

function IndexNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  };

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
      document.body.classList.remove('nav-open');
    }
  };

  return (
    <>
      <Navbar
        className={`fixed-top custom-navbar simple-navbar navbar-transparent ${
          isVisible ? "visible" : "hidden"
        } ${isOpen ? "nav-open" : ""}`}
        expand="md"
      >
        <Container className="d-flex justify-content-between align-items-center">
          <NavbarBrand 
            href="/index" 
            id="navbar-brand" 
            className="navbar-text"
          >
            ronghe chen
          </NavbarBrand>
          
          {/* Custom hamburger button */}
          <button 
            className={`mobile-toggle d-md-none ${isOpen ? 'open' : ''}`}
            onClick={toggle}
            type="button"
            aria-label="Toggle menu"
          >
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="d-none d-md-flex">
            <Nav navbar>
              <NavItem>
                <NavLink href="/portfolio" className="nav-link-hover">
                  <p className="navbar-text">work</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects" className="nav-link-hover">
                  <p className="navbar-text">projects</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-hover"
                >
                  <p className="navbar-text">resume</p>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Container>
      </Navbar>
      
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-container">
          <Nav vertical className="mobile-nav">
            <NavItem>
              <NavLink href="/portfolio" onClick={handleNavClick} className="mobile-nav-link">
                <p className="navbar-text">work</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects" onClick={handleNavClick} className="mobile-nav-link">
                <p className="navbar-text">projects</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="mobile-nav-link"
              >
                <p className="navbar-text">resume</p>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </>
  );
}

export default IndexNavbar;