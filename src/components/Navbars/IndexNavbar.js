import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from "reactstrap";

function IndexNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <Navbar
      className={`fixed-top custom-navbar simple-navbar ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <NavbarBrand href="/index" id="navbar-brand">
          ronghe chen
        </NavbarBrand>
        <Nav className="ml-auto d-flex flex-row align-items-center">
          <NavItem>
            <NavLink href="/portfolio">
              <p style={{ textTransform: "none" }}>portfolio</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p style={{ textTransform: "none" }}>resume</p>
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;

