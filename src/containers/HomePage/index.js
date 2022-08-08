import React from "react";
import { Banner } from "./components/Banner";
import { KeyFeatures } from "./components/KeyFeatures";
import { About } from "./components/About";
import { Calendar } from "./components/Calendar";

const HomePage = ({ homepageData }) => {
  
  return (
    <div>
      <Banner homepageData={homepageData}/>
      <About />
      <KeyFeatures />
      <Calendar />
    </div>
  );
};

export default HomePage;
