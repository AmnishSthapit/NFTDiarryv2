import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { images } from "@/assets";
import { Calendar } from "../HomePage/components/Calendar";
const AboutPage = () => {
  return (
    <>
      <section>
        <div className="container mx-auto  ">
          <h1> Upcoming NFT</h1>
          <Calendar />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
