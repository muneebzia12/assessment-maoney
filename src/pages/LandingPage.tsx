import React from "react";
import DrawerAppBar from "../../src/components/AppHeader";
import Intro from "../components/intro";
import Mobiles from "../components/Mobiles";
import AllCliens from "../components//AllCliens";
import TelInput from "../components/TelInput";
import PaymentIntro from "../components/PaymentIntro";
import GlobalCompare from "../components/GlobalCompare";
import CurrencyIntro from "../components/CurrencyIntro";
import FeesCompare from "../components/FeesCompare";
import QuestionIntro from "../components/QuestionIntro";
import Accordion from "../components/Accordions";
import CardCarousel from "../components/CardCarousel";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <DrawerAppBar />
      <Intro />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TelInput />
      </div>
      <div style={{ position: "relative" }}>
        <Mobiles />
        <AllCliens />
      </div>
      <PaymentIntro />
      <GlobalCompare />
      <CurrencyIntro />
      <FeesCompare />
      {/* <CrousalText /> */}
      {/* <CrousalBanner /> */}
      <QuestionIntro />
      <Accordion />
      <Banner />
      <Footer />
      {/* <p className="download-btn ">Download Now</p> */}
    </>
  );
};

export default LandingPage;
