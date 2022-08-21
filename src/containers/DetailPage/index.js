import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import StickyBox from "react-sticky-box";
import { About } from "../HomePage/components/About";
import { getStrapiMedia } from "lib/media";
import parse from "html-react-parser";

const DetailPage = ({ nftData }) => {

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a className="text-slate-400 font-bold">Home</a>
              </li>
              <li>
                <Link href="/">
                  <a className="text-blue-900 font-bold">Upcoming</a>
                </Link>
              </li>
              <li className="font-bold">NFT</li>
            </ul>
          </div>

          <div className="flex items-start mt-10">
            <StickyBox className="max-w-lg" offsetTop={100}>
              <div className="box">
                <figure className="figure">
                  <img
                    src={getStrapiMedia(nftData?.display_image)}
                    className="figure-img img-fluid rounded"
                    alt=""
                  />
                </figure>
              </div>
            </StickyBox>
            <div className="w-full pl-8">
              <h1 className="text-4xl mb-6">{nftData?.title}</h1>
              <div className="box box-filled">
                <div className="flex items-center py-2 text-l">
                  <Icon
                    height={24}
                    icon="ep:calendar"
                    className="text-gray-400"
                  />{" "}
                  <span className="pl-1 text-gray-400 whitespace-nowrap">Pre-sale:</span>
                  <span className="text-gray-600 ">
                    {" "}
                    {nftData?.presale_date}
                  </span>
                </div>
                <h2 className="border-0 p-0 mb-0">
                  {" "}
                  Minting is {nftData?.minting_status}{" "}
                  <span className="blink-me"></span>{" "}
                </h2>
                <div className="flex items-center pt-3 ">
                  <div className="flex items-center ">
                    <div className="icon w-8 h-8 rounded-full bg-twitter-100 p-1 flex flex-col justify-center items-center">
                      <Icon
                        height={24}
                        icon="bxl:twitter"
                        className="text-white"
                      />
                    </div>
                    <span className="pl-1 font-bold text-sm">
                      {nftData?.twitter_followers}
                    </span>
                  </div>
                  <div className="flex  items-center  pl-3">
                    <div className="icon w-8 h-8 rounded-full bg-discord-100 p-1 flex flex-col justify-center items-center">
                      <Icon
                        height={24}
                        icon="bxl:discord-alt"
                        className="text-white"
                      />
                    </div>
                    <span className="pl-1 font-bold text-sm">
                      {nftData?.aattributes?.discord_members}
                    </span>
                  </div>
                  <div className="ml-auto">
                    <a
                      className="btn btn-secondary btn-sm"
                      href={nftData?.website_link}
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
              <div className="box box-filled mt-6">
                <h3>Project Details:</h3>
                <div className=" mb-10 md:mb-0">
                  <div className="grid lg:grid-cols-2 gap-x-8 py-3 ">
                    <div className="mb-6">
                      <span className="text-gray-400">Pre-sale </span>
                      <div className="font-bold text-xl">
                        {nftData?.presale}
                      </div>
                    </div>
                    <div className="mb-6">
                      <span className="text-gray-400">Maximum Supply:</span>
                      <div className="font-bold text-xl">
                        {nftData?.maximum_supply}
                      </div>
                    </div>
                    <div className="mb-6">
                      <span className="text-gray-400">Pre-sale Price:</span>
                      <div className="font-bold text-xl">
                        {nftData?.presale_price}
                      </div>
                    </div>
                    <div className="mb-6">
                      <span className="text-gray-400">Public Mint Price: </span>
                      <div className="font-bold text-xl">
                        {nftData?.public_mint_price}
                      </div>
                    </div>
                    <div className="mb-6">
                      <span className="text-gray-400">Event Category:</span>
                      <div className="font-bold text-xl">
                        {nftData?.event_category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box box-filled mt-6">
                <h3>Description</h3>
                {parse(nftData?.description)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="no-float">
        <About />
      </div>
    </>
  );
};

export default DetailPage;
