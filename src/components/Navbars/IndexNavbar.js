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

  const toggle = () => {
    setIsOpen(!isOpen);
    // Toggle body class to prevent scrolling
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

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        document.body.classList.remove('nav-open');
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <Navbar
        className={`fixed-top custom-navbar simple-navbar navbar-transparent ${
          isVisible ? "visible" : "hidden"
        } ${isOpen ? "nav-open" : ""}`}
        expand="md"
      >
        <Container className="d-flex justify-content-between align-items-center position-relative">
          <NavbarBrand 
            href="/index" 
            id="navbar-brand" 
            className={`navbar-text mobile-brand ${isOpen ? 'fade-out' : 'fade-in'}`}
          >
            ronghe chen
          </NavbarBrand>
          
          {/* Custom hamburger button */}
          <button 
            className={`mobile-menu-toggle d-md-none ${isOpen ? 'open' : ''}`}
            onClick={toggle}
            type="button"
            aria-label="Toggle menu"
          >
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          
          <Collapse isOpen={isOpen} navbar className="justify-content-end mobile-menu-collapse">
            <div className="mobile-menu-content">
              <Nav className="mobile-nav" navbar>
                <NavItem>
                  <NavLink href="/portfolio" onClick={handleNavClick} className="nav-link-hover">
                    <p className="navbar-text">work</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projects" onClick={handleNavClick} className="nav-link-hover">
                    <p className="navbar-text">projects</p>
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
            </div>
          </Collapse>
        </Container>
      </Navbar>
      
      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={toggle}></div>
      )}
    </>
  );
}

export default IndexNavbar;