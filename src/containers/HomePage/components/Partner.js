import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { images } from "@/assets";

export const Partner = () => {
  return (
    <>
      <section className="py-0 ">
        <div className="container mx-auto">
          <h2>Our Partners</h2>
          <div className="flex py-4 flex-wrap">
            <div className="mr-6 mb-10">
              <img
                className="h-12"
                src="https://brandpalettes.com/wp-content/uploads/2021/05/CMC-02.png"
                alt=""
              />
            </div>
            <div className="mr-6 mb-10">
              <img
                className="h-12"
                src="https://influencermarketinghub.com/wp-content/uploads/2021/03/Rarible.png"
                alt=""
              />
            </div>
            <div className="mr-6 mb-10">
              <img
                className="h-12"
                src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).png"
                alt=""
              />
            </div>
            <div className="mr-6 mb-10">
              <img
                className="h-12"
                src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
                alt=""
              />
            </div>
            <div className="mr-6 mb-10">
              <img
                className="h-12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2vv0iA-mCYCJF7MPi0c3RU05JNtecYGzqTFC2q0BaX1uFqG-iGzAzqoIdc3TXsjk0Q&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
