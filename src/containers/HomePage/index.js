import React from "react";
import { Banner } from "./components/Banner";
import { KeyFeatures } from "./components/KeyFeatures";
import { About } from "./components/About";
import { Calendar } from "./components/Calendar";
import { Partner } from "./components/Partner";
import { Community } from "./components/Community";

const HomePage = ({ homepageData }) => {
  return (
    <div>
      <Banner homepageData={homepageData} />
      <About />
      <KeyFeatures />
      <Calendar />
      <Partner />
      <Community />
    </div>
  );
};

export default HomePage;
