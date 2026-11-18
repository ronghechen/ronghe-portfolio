import React, { useState, useMemo } from "react";

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar";
import PortfolioHeader from "components/Headers/PortfolioHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter";

function Portfolio() {
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const allProjects = [
    {
      id: 1,
      title: "softwear.engineer",
      keywords: ["full-stack dev", "react", "node.js", "aws", "databases"],
      description: "a full-stack fashion lookbook web app that allows you to upload, categorize, and analyze outfits by occasion, vibe, color, and season.",
      image: require("assets/img/sw_round.png"),
      link: "https://softwear-engineer.vercel.app/",
      alt: "Softwear Engineer",
      colOrder: "text-right"
    },
    {
      id: 2,
      title: "product manager accelerator (echolab)",
      keywords: ["ux design", "web", "design systems", "ai", "enterprise software"],
      description: "during my internship at product manager accelerator, i collaborated with developers and PMs to design a B2B SaaS platform called echolab, which utilizes AI to convert raw customer feedback into actionable A/B tests.",
      image: require("assets/img/echolab_round.png"),
      buttonText: "read more",
      link: "/echolab",
      alt: "Echolab project",
      colOrder: "text-right"
    },
    {
      id: 3,
      title: "wandering skies",
      keywords: ["graphics", "webgl", "frontend"],
      description: " wandering skies is an interactive sky scene built using javascript and webgl, deployed on vercel, customizing the ui with html/css. users can toggle between 3 times of day (day, sunset, night) and 2 different shading modes (phong, toon w/ purple tint).",
      image: require("assets/img/wanderingskies.png"),
      link: "https://wanderingskies.vercel.app/",
      alt: "Wandering Skies",
      colOrder: "text-right"
    },
    {
      id: 4,
      title: "openqquantify",
      keywords: ["full-stack dev", "web", "ai integration", "information design"],
      description: "designed and built an ai medical regulation assistant web app, where i implemented the frontend in html/css/js and the backend in flask using openai apis and sqlalchemy.",
      image: require("assets/img/openqquantify.png"),
      link: "/openqquantify",
      alt: "OpenQQuantify",
      colOrder: "text-left"
    }
  ];

  const filteredProjects = useMemo(() => {
    if (selectedKeywords.length === 0) return allProjects;
    
    return allProjects.filter(project =>
      selectedKeywords.every(keyword => project.keywords.includes(keyword))
    );
  }, [selectedKeywords]);

  const handleKeywordClick = (keyword) => {
    setSelectedKeywords(prev =>
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };

  const clearAllFilters = () => {
    setSelectedKeywords([]);
  };

  const TagButton = ({ keyword, isActive, onClick }) => (
    <button
      className={`tag-btn btn-glass ${isActive ? 'tag-btn-active' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick(keyword);
      }}
    >
      {keyword}
    </button>
  );

  const renderKeywords = (keywords) => (
    <div className="keywords-container mb-3">
      {keywords.map(keyword => (
        <TagButton
          key={keyword}
          keyword={keyword}
          isActive={selectedKeywords.includes(keyword)}
          onClick={handleKeywordClick}
        />
      ))}
    </div>
  );

  const renderProject = (project, index) => {
    const isEven = index % 2 === 0;
    
    return (
      <Row key={project.id} className="mb-5 align-items-center">
        {isEven ? (
          <>
            <Col className="ml-auto mr-auto" md="6">
              <h3>{project.title}</h3>
              {renderKeywords(project.keywords)}
              <p>{project.description}</p>
              <Button
            className="btn-round btn-glass"
            href={project.link}
          >
            {project.id === 2 ? "read more" : "view live ↗"}
          </Button>
            </Col>
            <Col md="6">
              <div className="project-img">
                <img src={project.image} alt={project.alt} className="img-fluid"/>
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col md="6">
              <div className="project-img">
                <img src={project.image} alt={project.alt} className="img-fluid"/>
              </div>
            </Col>
            <Col className="ml-auto mr-auto" md="6">
              <h3>{project.title}</h3>
              {renderKeywords(project.keywords)}
              <p>{project.description}</p>
              <Button
                className="btn-round btn-glass"
                href={project.link}
              >
                {project.id === 2 ? "read more" : "view live ↗"}
              </Button>
            </Col>
          </>
        )}
      </Row>
    );
  };

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PortfolioHeader />
        <div className="section section-about-us">
          <Container>
            {selectedKeywords.length > 0 && (
              <div className="active-filters-card">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h6
                      className="mb-2"
                      style={{
                        fontWeight: 600,
                        color: "#ffffff"
                      }}
                    >
                      active filters:
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {selectedKeywords.map(keyword => (
                        <button
                          key={keyword}
                          className="active-filter-btn"
                          onClick={() => handleKeywordClick(keyword)}
                        >
                          <span>{keyword}</span>
                          <span className="close-icon">×</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <button 
                    className="clear-all-btn"
                    onClick={clearAllFilters}
                  >
                    clear all
                  </button>
                </div>
                <div className="filter-count">
                  showing {filteredProjects.length} of {allProjects.length} projects matching your filters
                </div>
              </div>
            )}
            
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => renderProject(project, index))
            ) : (
              <div className="text-center py-5">
                <h4>no projects match your selected filters</h4>
                <p className="text-muted">try clicking different keywords or <button className="text-link" onClick={clearAllFilters}>clear all filters</button></p>
              </div>
            )}
            
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Portfolio;