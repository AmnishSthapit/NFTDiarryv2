/* eslint-disable @next/next/no-img-element */
import React from "react";
import { images } from "@/assets";
import Link from "next/link";
import { Icon } from "@iconify/react";
import VerticalNFTCard from "@/components/VerticalNFTCard";

export const Banner = ({ homepageData }) => {
  var settings = {
    fade: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { banner_title, banner_subtitle, banner_button_text, banner_nfts } =
    homepageData.attributes;
  return (
    <div className="banner lg:py-20 py-16 relative">
      <img
        className="absolute left-0 top-0   -z-0"
        src={images.lines.src}
        alt=""
      />

      <div className="container mx-auto relative z-40 ">
        <div className="grid lg:grid-cols-5 grid-cols-1 items-center">
          <div className="col-span-2">
            <span className="text-blue-900 text-2xl font-medium">
              {banner_subtitle}
            </span>
            <h1 className="my-9">{banner_title}</h1>
            <div className="flex md:flex-row flex-col justify-start">
              <a className="btn btn-primary md:mr-10 mb-10 mdLmb-0">
                {banner_button_text}
              </a>
              {/* <a className="btn btn-secondary">Learn More</a> */}
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid md:grid-cols-2 grid-cols-1">
              {banner_nfts.map((nft, index) => (
                <VerticalNFTCard
                  nft={nft?.nft?.data?.attributes}
                  bg="bg-violet-50"
                  key={"nftt" + index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
