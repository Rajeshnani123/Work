import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import Herosection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjtwo,
  homeObjthree,
  homeObjfour,
  homeObjzero,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
function Home() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Herosection />
      <InfoSection {...homeObjzero} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjtwo} />
      <InfoSection {...homeObjthree} />
      <InfoSection {...homeObjfour} />
      <Services />
      <Footer />
    </Router>
  );
}

export default Home;
