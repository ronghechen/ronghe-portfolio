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
import PainToDesign from "./index-sections/PainToDesign.js";
import FeaturesNotUsed from "./index-sections/FeaturesNotUsed.js";
import PaperProto from "assets/img/paperprototype.png";
import AffinityMap from "assets/img/affinitymap.png";

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
            <p>in an increasingly digital transportation ecosystem, students rely on multiple apps to navigate campus safely and efficiently. however, fragmented experiences and unclear system states can make already inconvenient travel feel stressful, especially at night.</p>
            <p>for the scope of this project, i interviewed a northwestern student to understand how they navigate campus transportation and identify opportunities to improve clarity, reliability, and recovery when plans change.</p>
            <h3>research process</h3>
            <p>i conducted a 30-minute unstructured interview to explore my participant’s transportation habits, motivations, and frustrations. i chose an unstructured format to allow unexpected themes, including responses to uncertainty, to emerge naturally. i found out that the participant regularly used two transportation services:</p>
            <ul>
              <li>bus</li>
              <ul>
                <li>uses an app called tripshot for public transit</li>
              </ul>
              <li>NUTransit</li>
            </ul>
           <h5>research insights</h5>
           <p>from this interview, i gathered the following insights:</p>
           <ul>
            <li>NUTransit is used more often at night due to safety concerns and convenience</li>
            <li>ridesharing causes delays in pickup</li>
            <li>users are frustrated by unreliable ETAs as well as being given little notice in case of a cancellation</li>
            <li>feature overload reduces trust, especially when features feel irrelevant to the context</li>
           </ul>
            <h5>interviewee needs</h5>
            <p>i distilled these insights into four core user needs:</p>
            <ul>
              <li>clarity - accurate expectations around timing and ride status</li>
              <li>closure - being given notice when a ride is canceled or delayed</li>
              <li>relevance - only including features that directly support student transportation needs</li>
              <li>convenience - minimize walking across campus late at night</li>
            </ul>
            <h3>ideation</h3>
            <p>i used affinity mapping to cluster interview observations into themes, which i then synthesized into actionable pain points and design opportunities.</p>
            <div className="image-wrapper">
              <img
                src={AffinityMap}
                alt="Affinity Map"
                className="center-image"
              />
            </div>
            <PainToDesign/>
            <h5>feature ideas that i came up with:</h5>
            <TransportCarousel/>
            <h5 style={{ marginTop: "70px"}}>which ideas did i choose to move forward with?</h5>
            <p>i decided to combine multiple ideas into one interface: the +/- buttons, the cancellation message, and the upcoming ride matching algorithm.</p>
            <p>i chose these because it provides my user with a sense of closure if their ride gets cancelled, and the matching algorithm guarantees them another ride so they can get across campus without walking too much. this design allows them to edit the number of passengers, so it addresses most of their needs and pain points.</p>
            <FeaturesNotUsed/>
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
            <p>i conducted a thinkaloud usability test using a scenario-based script. the participant verbalized their thoughts while requesting a ride, adjusting passenger count, and experiencing a cancellation.</p>
            <p>key findings:</p>
            <ul>
              <li>the cancellation state provided reassurance and reduced uncertainty</li>
              <li>the rematching flow made recovery feel “automatic” rather than stressful</li>
              <li>interaction affordances could be improved in low-fidelity prototypes</li>
            </ul>
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
            <h3 style={{ marginTop: "40px"}}>takeaways</h3>
            <h5>more isn't always better</h5>
            <p>as a designer from a cs background, i think about ux complexity the same way i think about algorithmic complexity. every additional option increases the cost to the user, whether it be cognitive load or the potential for error.</p>
            <h5>focus on edge cases & failure states</h5>
            <p>it's important to look beyond the normal path - what happens if it fails? designing for failure states, such as ride delays, is pivotal to user trust.</p>
            <h5>strike a balance between aesthetics and implementation constraints</h5>
            <p>a great design isn't just pretty - it needs to be technically realistic, especially designs with a lot of emphasis on algorithms and system states like this one. if i had more time, i would test with multiple students to validate patterns across different schedules, explore more edge cases such as repeated cancellations, and collaborate with engineers to assess feasibility of real-time matching algorithms.</p>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default TransportApp;