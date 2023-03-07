import React from "react";
import Hero from "./components/home/hero";
import Navbar from "./components/home/navbar";
import SectionTitle from "./components/home/sectionTitle";
import {
  benefitOne,
  benefitTwo,
  stakeOne,
  stakeTwo,
  stakeThree,
} from "./components/home/data";
import Video from "./components/home/video";
import Benefits from "./components/home/benefits";
import Stakeholders from "./components/home/stakeholders";
import Footer from "./components/home/footer";
import PopupWidget from "./components/home/popupWidget";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="COUNT DOWN TO GTECH GLOBAL INTEGRATED"
        title="15TH YEARS ANNIVERSARY"
      >
        13th August 2023 marks the 15th Year Anniversary of Gtech Global
        Integrated Limited , we have several Philanthropic events lines. To Join
        the celebrations, Please contact us .
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Stakeholders data={stakeOne} />
      <Stakeholders imgPos="right" data={stakeTwo} />
      <Stakeholders data={stakeThree} />
      <div className="bg-[#01d1f6]">
        <SectionTitle
          pretitle="Background"
          title="2023 Project Kick-off Schedule"
        ></SectionTitle>
        <Video />
      </div>

      <Footer />
      <PopupWidget />
    </>
  );
}

export default App;
