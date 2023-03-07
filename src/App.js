import React from "react";
import Hero from "./components/home/hero";
import Navbar from "./components/home/navbar";
import SectionTitle from "./components/home/sectionTitle";
import {
  benefitOne,
  milestones,
  gtechAbout,
  importanceOne,
  eventOne,
  eventTwo
  // importanceTwo,
} from "./components/home/data";
// import Video from "./components/home/video";
import Benefits from "./components/home/benefits";
import Stakeholders from "./components/home/stakeholders";
import Importance from "./components/home/importance";
import Footer from "./components/home/footer";
// import PopupWidget from "./components/home/popupWidget";
import ContactGrid from "./components/home/contactgrid.js"

function App() {
  return (
    <div className="bg-[#eee]">
      <Navbar />
      <Hero />
      <Benefits data={gtechAbout} />
      <SectionTitle
        pretitle="GTECH GLOBAL INTEGRATED"
        title="Gtech Global R and D Network"
      >
        In August 2021, as part of activities marking the firm’s 13 years
        anniversary, the management of the firm initiated the Gtech
        Global R and D Network – a Network of Research institutions working
        collaboratively to strengthen Global R and D ecosystem
      </SectionTitle>
      <Stakeholders data={benefitOne} />
      <Benefits data={milestones} />
      <Stakeholders  data={eventOne} />
      <Stakeholders imgPos="right" data={eventTwo} />
      <Importance data={importanceOne} />

      

      {/* <Importance imgPos="right" data={importanceTwo} /> */}
      <div className="bg-[#01d1f6]">
        <SectionTitle
          pretitle="COUNT DOWN TO GTECH GLOBAL INTEGRATED"
          title="15TH YEARS ANNIVERSARY"
        >
          13th August 2023 marks the 15th Year Anniversary of Gtech Global
          Integrated Limited , we have several Philanthropic events lines. To
          Join the celebrations, Please contact us .
        </SectionTitle>
      </div>
      <SectionTitle pretitle="Contact us" title="Get in touch">
        If you're interested in learning more about our public health consulting
        services or have any questions, please don't hesitate to reach out to
        us.
      </SectionTitle>
      <ContactGrid/>
      <Footer />
      {/* <PopupWidget /> */}
    </div>
  );
}

export default App;
