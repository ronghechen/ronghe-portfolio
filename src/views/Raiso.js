import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import RaisoHeader from "components/Headers/RaisoHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter";
import InfoCardRaiso from "./index-sections/InfoCardRaiso.js";
import Wireframe from "assets/img/wireframe.png";

function Raiso() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <RaisoHeader />
        <div className="section section-about-us">
          <Container>
            <InfoCardRaiso/>
            <h3>background</h3>
            <Row>
            <Col className="ml-auto mr-auto text-left" md="6">
            <p>the responsible use of ai student organization (raiso) is an organization dedicated to educating students about the societal impacts of artificial intelligence, hosting programs that promote the discussion of societal and ethical implications of technology. sometimes, raiso holds events and invites ai researchers and designers to talk about their work and their views on the future of ai, and raiso also hosts workshops where students can build ai/ml projects.</p>
            </Col>
            <Col md="6" style={{ marginTop: "-140px"}}>
                <img src={require("assets/img/ai.png")} alt="AI" className="project-img"/>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/ai.png") + ")"
                    }}
                  ></div>
                </Col>
            </Row>
            <h3>challenge</h3>
            <Row>
            <Col md="6">
                <img src={require("assets/img/web.png")} alt="Website" className="project-img"/>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/web.png") + ")"
                    }}
                  ></div>
                </Col>
            <Col className="ml-auto mr-auto text-right" md="6" style={{ marginTop: "180px"}}>
            <p>our current website is outdated, missing key features like a projects page, which is essential for providing students hands-on experience in ai programming. furthermore, we need to add an events page to better promote our events and increase attendance.</p>
            </Col>
            </Row>
            <h4>goals</h4>
            <ul>
              <li>design a projects page</li>
              <li>design an events page</li>
              <li>design an about page</li>
            </ul>
            <h4>research process</h4>
            <p>i was mostly in charge of redesigning the projects page, so i interviewed the projects team, asking them questions about their needs and goals. here are the following questions i have asked and the responses that i have received:</p>
            <h5>1. what is the core purpose of your committee?</h5>
            <p>"the core purpose of projects is to take the skills learned in workshops through classes and spend the quarter building projects in small groups to refine the knowledge of ml/ai."</p>
            <h5>2. who do you want to engage with this section of the website? who is your audience?</h5>
            <p>"people interested in ml, people who want to build projects outside of the classroom, people who care about ethics and how ml can be ethically applied."</p>
            <h5>3. what do you want the main takeaway to be? what do you want the user to do once at the page of your website?</h5>
            <p>"i want users to look at the website and go 'wow they build really awesome projects' or just generally spark an interest in ml."</p>
            <h5>4. are there any features you want for your section/page on the RAISO website (e.g. subscription, event calendar/rsvp)?</h5>
            <p>"i think showing off old projects would be really cool. i am thinking we could sort by quarter/year and have each group's project shown off with a link to the product/github and a little blurb."</p>
            <p>on the other side are the users, whose needs are just as important when it comes to designing the website. so i conducted some interviews with two people in my cs class, showed them the current site, and asked them a series of questions about whether they have heard of raiso, if they would be interested in joining, and what would be the first thing they would click on. from these interviews, i have gathered the following information about our audience:</p>
            <Row>
            <Col md="6">
                <img src={require("assets/img/person1.png")} alt="Person 1" className="project-img"/>
              </Col>
            <Col className="ml-auto mr-auto text-left" md="6" style={{ marginTop: "180px"}}>
                <h5>person 1</h5>
                <ul>
                  <li>has never heard of raiso</li>
                  <li>says they are "not too involved in clubs on campus"</li>
                  <li>would be interested in joining</li>
                </ul>
            </Col>
            </Row>
            <Row>
            <Col className="ml-auto mr-auto text-left" md="6" style={{ marginTop: "180px"}}>
                <h5>person 1</h5>
                <ul>
                  <li>has never heard of raiso</li>
                  <li>says they are "not too involved in clubs on campus"</li>
                  <li>would be interested in joining</li>
                </ul>
            </Col>
            <Col md="6">
                <img src={require("assets/img/person2.png")} alt="Person 2" className="project-img"/>
              </Col>
            </Row>
            <Row>
            <Col md="6">
                <img src={require("assets/img/uxresearch.png")} alt="UX Research" className="project-img"/>
              </Col>
            <Col className="ml-auto mr-auto text-left" md="6"style={{ marginTop: "70px"}}>
                <h5 >interview takeaways</h5>
                <ul>
                    <li>we're missing an about page, which we haven't really thought of until now. therefore, incorporating one would be one of our top priorities. an about page is important because it would be the first point of contact with users unfamiliar with raiso, and it can give them information about the mission, values, and purpose of our organization. furthermore, it can help boost engagement, encouraging users to explore other parts of the website.</li>
                    <li>an events page and projects page are two key points of engagement, which is why building these pages are such a high priority.</li>
                    <li>the projects page should leave users impressed, or just generally spark an interest in ai. therefore, the page must show high-quality, visually appealing, well-documented projects.</li>
                    <li>we also need to fix our nav bar, since it contains links to pages that don't exist yet.</li>
                    <li>emphasize the ethical aspects of our projects, as it resonates with user values.</li>
                  </ul>
            </Col>
            </Row>
            <h3 style={{ marginTop: "70px"}}>wireframe</h3>
            <p>from the information gathered from both exec and user interviews, i created a wireframe for the projects page.</p>
            <Row style={{ marginTop: "100px"}}>
              <Col md="6">
                  <img src={require("assets/img/wireframe.png")} alt="Wireframe" className="project-img"/>
                    <div
                      className="image-container"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/wireframe.png") + ")"
                      }}
                    ></div>
                  </Col>
              <Col className="ml-auto mr-auto text-left" md="6">
              <p>the first thing that users should see is an image carousel showing off current projects, as it's designed to capture the attention of potential users, showing them the scope and creativity of what we do in raiso workshops and reinforcing the "wow" factor that the projects team wants to convey. it also highlights key projects, allowing for users to explore individual projects in depth. by focusing on current projects, we give potential users a sense of what we are doing now in raiso, encouraging them to join and participate in these projects.</p>
              <p>in addition to that, each project should contain a link to its website or github page, giving users an opportunity to interact with that project, as well as a description that engages the audience, sparking a sense of curiosity.</p>
              <p>after the carousel should be a section for past projects, shown in order from most to least recent, since it's organized by time frame and emphasizes how raiso is evolving and what we've been working on lately. furthermore, this chronological organization helps users find projects from a certain time frame more easily, if that's what they're looking for.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default Raiso;