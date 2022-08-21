import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { images } from "@/assets";

const AboutPage = () => {
  return (
    <>
      <section>
        <div className="container mx-auto lg:w-3/5 ">
          <h1 className="text-center">About NFT Diaries</h1>
          <div className="py-10 text-center">
            <p>
              NFT Diaries is an enthusiastic platform that is dedicated to
              providing information about upcoming nft launches, drops, events,
              auctions, giveaways etc.
            </p>
            <p>
              We respect each person’s time and work in joining the non-fungible
              movement. That’s why we developed a center in the digital
              collectibles universe that’s always up to date on new NFT
              releases, news, and events.
            </p>
            <p>
              The aim is to help creators and contribute to their growth in the
              crypto art sector. As a result, any developer can freely add his
              or her drop or event to the upcomingnft.
            </p>
            <img
              className="img-fluid mb-10"
              src="https://lh3.googleusercontent.com/8HysXOLKBhs44Qoq4_ap95X87rs55F3Pf13BSQFpN0efQJAz2CAuIbhSAVAUoU8DCHlbzUMcqjWraDS6G31ZoUZZv-e9LplKoQmnm41Ed3l_6DKehUyYFsuY9RaeBp081A=w1086"
              alt=""
            />
            <p>
              This website is dedicated to giving you information about
              generative art and collectibles.
            </p>

            <p>
              We are constantly providing and updating the website to give you
              information about upcoming nft projects.
            </p>
            <p>
              We are trying to build a community that gives all of these
              services for free, and you can also submit your upcoming nft
              projects with us, and it is accessible to all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
