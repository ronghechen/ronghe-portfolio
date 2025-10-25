import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import TransportHeader from "components/Headers/TransportHeader.js";
import TransparentFooter from "components/Footers/TransparentFooter";
import InfoCardTransport from "./index-sections/InfoCardTransport.js";
import TransportCarousel from './TransportCarousel.js';
import PainpointImage from "assets/img/painpointpage.png";
import PaperProto from "assets/img/paperprototype.png";
import DesignProcess from "./index-sections/DesignProcess.js";

function TransportApp() {
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
        <TransportHeader />
        <div className="section section-about-us">
          <Container>
            <InfoCardTransport/>
            <h3>background</h3>
            <p>in an increasingly digital age, there are plenty of transportation apps on the market. some examples of which include tripshot, an app providing info about upcoming buses or trains, and NUTransit, an app that provides rides for northwestern students around campus. for my human-computer interaction class, i interviewed a classmate for a project where i designed an interface for a transportation app, finding out their needs and pain points in the process.</p>
            <h3>research process</h3>
            <p>for this project, i was tasked with interviewing a classmate about their transportation habits. i did this in the form of an unstructured interview, where i had a general list of questions that i wanted to ask but let the conversation guide itself. i found out, that at northwestern, they use the following forms of transport:</p>
            <ul>
              <li>bus</li>
              <ul>
                <li>uses an app called tripshot</li>
                <li>buses on campus don’t really come in early hours, moreso in afternoon/evening</li>
                <li>probably it’s free for us students and there’s more of an incentive to use transportation when it’s later/darker out</li>
                <li>interviewee wishes it operated during earlier hours</li>
              </ul>
              <li>NUTransit</li>
              <ul>
                <li>can't use the app until 7 pm</li>
                <li>they find this policy pretty reasonable, because not many drivers + free for students</li>
              </ul>
            </ul>
            <Row>
            <Col className="ml-auto mr-auto text-left" md="6" style={{ marginTop: "50px"}}>
                <h5>walkthrough of NUTransit</h5>
                <p>NUTransit, formerly known as saferide, is an app that allows drivers to drive students around campus after 7 pm. once you open the app, you should see a prompt showing your current location, asking you to put in your desired location. you will see rides that will help you get there, as well as their corresponding arrival times. however, a pain point that i found out from my interviewee is that ridesharing, although more efficient than solo rides, causes delays in pickup. my interviewee wishes that feature could be more reliable in terms of timing and also doesn't like the fact that they can't change the number of passengers. they believe that adding a ~5 min "buffer time" would make the time estimate more realistic and would prefer knowing if their ride was cancelled rather than being "left on limbo".</p>
              </Col>
            <Col md="6">
                <img src={require("assets/img/nutransit.png")} alt="NUTransit" className="project-img" style={{ marginTop: "40px"}}/>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
            </Row>
            <Row>
            <Col md="6">
                <img src={require("assets/img/tripshot.png")} alt="Tripshot" className="project-img" style={{ marginTop: "40px"}}/>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col className="ml-auto mr-auto text-left" md="6" style={{ marginTop: "70px"}}>
                    <h5>walkthrough of tripshot</h5>
                    <p>tripshot is an app that provides info about upcoming buses or trains, providing possibles ways to get to a certain destination. it also tells about potential lane closures/warnings, which is a feature lacking on most map apps. my interviewee said that they like that tripshot shows options to get to a particular location but doesn't really look at those since they find it hard to memorize the bus stop closest to the location. they also would like closure regarding delayed buses/trains, and thinks that a feature allowing them to edit the number of passengers on a bus/public transport app is a bit redundant. they also feel like the app is almost copying google maps in some respect, such as adding options for driving.</p>
              </Col>
            </Row>
            <h5>interviewee needs</h5>
            <ul>
              <li>clarity</li>
              <li>closure</li>
              <li>relevant features only</li>
              <li>to be able to get across campus without walking too much</li>
            </ul>
            <h3>ideation</h3>
            <h5>after the interview, i found the following opportunities for design:</h5>
            <ul>
              <li>a feature that allows the user to change the # of passengers</li>
              <li>a post-cancellation notification or message</li>
              <li>an algorithm that pairs the user with another upcoming ride</li>
            </ul>
            <h5>feature ideas that i came up with:</h5>
            <TransportCarousel/>
            <h5 style={{ marginTop: "70px"}}>which ideas did i choose to move forward with?</h5>
            <p>i decided to combine multiple ideas into one interface: the +/- buttons, the cancellation message, and the upcoming ride matching algorithm.</p>
            <p>i chose these because it provides my user with a sense of closure if their ride gets cancelled, and the matching algorithm guarantees them another ride so they can get across campus without walking too much. this design allows them to edit the number of passengers, so it addresses most of their needs and pain points.</p>
            <h5>my first prototype, on paper:</h5>
            <div className="d-flex justify-content-center" style={{ marginTop: "70px"}}>
              <img
                src={PaperProto}
                alt="Paper Prototype"
                className="img-fluid"
                style={{ width: "50%", height: "auto" }}
              />
            </div>
            <h3 style={{ marginTop: "70px"}}>user testing</h3>
            <p>for user testing, i used a thinkaloud, reading out a script like a second-person story, asking the user to imagine themselves getting out of the library at 9 pm after a long study sesh, calling a saferide and adjusting the number of passengers. i then ask them to imagine their ride being canceled and the algorithm matching them up with another ride, displaying info about their new ride. after my thinkaloud, i gather feedback from my user.</p>
            <h3>feedback</h3>
            <p>the user really liked it!</p>
            <p>they think it sufficiently addressed all their needs. however, one thing i could have done better was adding paper flaps to the prototype to imitate buttons, scrolling, and changes of screens, allowing the user to interact with it more realistically.</p>
            <h3>final prototype (figma)</h3>
            <p>here is my final prototype, done on figma, to mimic what it would actually look like on a phone screen:</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="1200"
                height="700"
                src="https://embed.figma.com/design/wAuBDtKiUjtUa8D5EDGBVC/Untitled?node-id=0-1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default TransportApp;