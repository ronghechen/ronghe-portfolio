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
      title: "product manager accelerator (echolab)",
      keywords: ["ux design", "web", "design systems", "ai", "enterprise software"],
      description: "during my internship at product manager accelerator, i collaborated with developers and PMs to design a B2B SaaS platform called echolab, which utilizes AI to convert raw customer feedback into actionable A/B tests. this project strengthened my skills in design systems, front-end collaboration, and applying user feedback to product strategy.",
      image: require("assets/img/echolab_round.png"),
      link: "/echolab",
      alt: "Echolab project",
      colOrder: "text-right"
    },
    {
      id: 2,
      title: "notesync",
      keywords: ["full-stack dev", "web", "agile methodologies"],
      description: "for my software studio project, i worked with a group of fellow students on a band calendar called notesync. working on this project honed my skills in full-stack software development, agile methodologies, and designing interfaces.",
      image: require("assets/img/notesync_round.png"),
      link: "/notesync",
      alt: "Notesync",
      colOrder: "text-left"
    },
    {
      id: 3,
      title: "transportation app interface",
      keywords: ["ux design", "ux research", "mobile"],
      description: "for my human-computer interaction (cs 330) class, i interviewed a classmate on their transportation habits, as well as their pain points using various transportation apps such as NUTransit and tripshot. after a series of user interviews, i was able to design a wireframe for a transportation app that aligned with their needs.",
      image: require("assets/img/transport app.png"),
      link: "/nu-transport-app",
      alt: "Transportation App",
      colOrder: "text-right"
    },
    {
      id: 4,
      title: "openqquantify",
      keywords: ["full-stack dev", "web", "ai integration", "information design"],
      description: "designed and built an ai medical regulation assistant web app, where i implemented the frontend in html/css/js and the backend in flask using openai apis and sqlalchemy. focused on clarity, trust, and information presentation in a regulated domain.",
      image: require("assets/img/openqquantify.png"),
      link: "/placeholder",
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
      className={`tag-btn ${isActive ? 'tag-btn-active' : ''}`}
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
      <Row key={project.id} className="mb-5">
        {isEven ? (
          <>
            <Col className="ml-auto mr-auto" md="6" style={{ marginTop: "100px"}}>
              <h3>{project.title}</h3>
              {renderKeywords(project.keywords)}
              <p>{project.description}</p>
              <Button
                outline
                color="dark"
                className="custom-btn"
                href={project.link}
              >
                view project
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
            <Col className="ml-auto mr-auto" md="6" style={{ marginTop: "100px"}}>
              <h3>{project.title}</h3>
              {renderKeywords(project.keywords)}
              <p>{project.description}</p>
              <Button
                outline
                color="dark"
                className="custom-btn"
                href={project.link}
              >
                view project
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
                    <h6 className="mb-2" style={{ fontWeight: 600, color: '#333' }}>Active filters:</h6>
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