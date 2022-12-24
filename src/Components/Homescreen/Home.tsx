import React from "react";
import Define from "../Define/Define";
import Footer from "../Footer/Footer";
import Happen from "../Happen/Happen";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import LandingPage from "../LandingPage/LandingPage";
import Popular from "../Popular/Popular";
import Started from "../Started/Started";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Define />
      <Happen />
      <LandingPage />
      <Popular />
      <Started />
      <Footer />
    </div>
  );
};

export default Home;
