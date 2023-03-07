import {
  LocationMarkerIcon, MailIcon
} from "@heroicons/react/outline";
import benefitOneImg from "../../img/3.png";
// import benefitTwoImg from "../../img/2.jpg";
import stakeOneImg from "../../img/4.png";
// import stakeTwoImg from "../../img/5.png";
import stakeThreeImg from "../../img/6.png";

const benefitOne = {
  title: "Aim of Gtech Global R and D Network",
  desc: "The aim of the Gtech Global R and D Network is to strengthen the Global R and D Ecosystem , Support the development of new medicines and Food through a collaborative effort that is home grown in Africa with support from the Global North. Presently the focus of our research is developing new contraceptives, Cancer drugs and Improved Agricultural Products. The Network is an important Global Platform that enhances Global Health and Food Security.",
  image: benefitOneImg,
};
const eventOne = {
  // title: "Aim of Gtech Global R and D Network",
  desc: "L-R. MD/CEO Gtech Global Integrated and Founder Gtech Global Contraceptives R and D Network Mr. Sulaiman Gbadamosi with Prof Babatunde Salako Director General of Nigerian institute of Medical Research and Dr. Habeeb Salami Director of Global Strategy and Partnerships Gtech Global Contraceptives R and D network during the signing of official MOU between Gtech Global Integrated limited and Nigerian institute of Medical Research on the Gtech Global Contraceptives R and D Network on 5 th August 2021 at NIMR , Lagos Nigeria.",
  image: stakeOneImg,
};
const eventTwo = {
  // title: "Aim of Gtech Global R and D Network",
  desc: "Signing of Memorandum of Understanding (MOU) between Gtech Global Integrated and National Bureau of Statistics (NBS) on Strengthening Data Architecture for Gtech Global Contraceptives R and D Network. The official MOU signing took place at NBS , Abuja Nigeria on 17th May 2021.",
  image: stakeThreeImg,
};
const gtechAbout = {
  title: "Strategic Network",
  desc: "Gtech Global also boost of very strong relationships with various stakeholders- Government at the Federal and state levels, Private sector, Traditional and Religious Leaders, Elderstatemen , Media , Academia , Informal sector leaders , Key  Opinion leaders and Community gate Keepers.",
  descTwo:
    "The Experts and promoters of the Firm have cumulative 30years of experience programming in Nigeria. Gtech Global believe in bringing  High Impact practices (HIPs) to scale. We also have a strong research background and believe in contributing to knowledge.",
};
const milestones = {
  title:
    "Important Milestones of the Gtech Global Contraceptives R and D Network",
  desc: "The Gtech Global Contraceptives R and D Network leverages connected thinking and intends to push the boundary of science and innovation in developing atleast 1 new Contraceptives Technology by 2030. Important Milestones and partnerships have been consummated as part of this process.",
  descTwo:
    "The Gtech Global Contraceptives Technologies R and D Network presently has Existing Memoranda of Understanding (MOU) with 4 institutions across 3 African countries – Nigeria, Cameroun and Togo. These institutions include The Federal Ministry of Health’s Nigerian Institute of Medical Research- Nigeria, National Bureau of Statistics – Nigeria, International University of Bamenda- Cameroun and Global Health International Institute (Gh2i) Togo. It is worthy of note that we are still working hard to grow this collaboration further across several other countries.",
};

const importanceOne = {
  titleTwo: "Gtech Global Cancer R and D Network",
  // image: stakeOneImg,
  bulletsTwo: [
    {
      // title: "Focus",
      desc: "Our Researchers are working collaboratively to push the boundary of science to develop new and improved Cancer Drugs in more efficient manner.",
      icon: <LocationMarkerIcon />,
    },
    {
      desc: "However Just because it’s new and innovative does not mean it should break the bank.",
      icon: <LocationMarkerIcon />,
    },
    {
      desc: "We can innovate and develop new and improved Cancer Drugs in a more efficient manner.",
      icon: <LocationMarkerIcon />,
    },
    {
      desc: "To find out how to partner with us contact us at Gtech@gtechintegrated.com",
      icon: <MailIcon/>
    }
  ],
  title:
    "Gtech Global Agricultural R and D Network is working to develop Agricultural Products with:",
  // image2: stakeTwoImg,
  bullets: [
    {
      // title: "Focus",
      desc: "Higher Yield and Higher Productivity",
      icon: <LocationMarkerIcon />,
    },
    {
      desc: "Drought resistant Agricultural Products",
      icon: <LocationMarkerIcon />,
    },
    {
      desc: "Climate Smart Agriculture",
      icon: <LocationMarkerIcon />,
    },
    {
      desc: "Use of Disruptive Technology to achieve Food Self-Sufficiency and ensure Africa becomes net Exporter of Food",
      icon: <LocationMarkerIcon />,
    },
  ],
};

export {
  benefitOne,
  milestones,
  gtechAbout,
  importanceOne,
  eventOne,
  eventTwo
};
