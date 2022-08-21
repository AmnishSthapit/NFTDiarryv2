import React, { useEffect, useState } from "react";
import Image from "next/image";
import { k1, k2, k3, k4, k5 } from "@/assets";
import { Icon } from "@iconify/react";
import { images } from "@/assets";
import Link from "next/link";
import StickyBox from "react-sticky-box";
import { getStrapiMedia } from "lib/media";

import { fetchAPI } from "lib/api";

export const Calendar = () => {
  const [all, setAll] = useState({});
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    fetchAPI("/nfts", {
      populate: "*",
      populate: {
        populate: "*",
        display_image: "*",
      },
    }).then((res) => setAll(res?.data));
  }, []);

  return (
    <>
      <section className="relative">
        <div className="container mx-auto">
          <div className="">
            <h2>#1 NFT Calendar</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-start mt-10 ">
            <div className="calendar-list mr-8 w-full">
              {all.length > 0 &&
                all?.map((nft, i) => (
                  <div key={i} className="media bg-violet-50 mb-6 w-full">
                    <figure className="figure figure-lg  relative flex flex-col justify-center bg-black">
                      {nft.attributes.display_image && (
                        <img
                          src={getStrapiMedia(nft?.attributes.display_image)}
                          className="figure-img img-fluid rounded"
                          alt=""
                        />
                      )}
                      <figcaption className=" badge badge-success ">
                        Sponsored
                      </figcaption>
                    </figure>
                    <div className="pl-3 w-full">
                      <div className="flex">
                        <h3 className="text-xl truncate">
                          {nft.attributes.title}
                        </h3>
                        <div className="flex items-center py-1 text-sm ml-auto">
                          <Icon
                            height={16}
                            icon="ep:calendar"
                            className="text-slate-500"
                          />{" "}
                          <span className="pl-1 text-slate-500">Pre-sale:</span>
                          <span className="text-blue-600 ">
                            {nft.attributes.presale_price}
                          </span>
                        </div>
                      </div>
                      <div
                        className="mb-0 truncate-overflow "
                        dangerouslySetInnerHTML={{
                          __html: nft.attributes.description,
                        }}
                      ></div>
                      <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-8 py-2">
                        <div className="border-r border-gray-300 mb-2 md:mb-0">
                          <span className="text-slate-500">Blockchain </span>
                          <div className="font-medium text-lg">Ethereum</div>
                        </div>
                        <div className="md:border-r border-gray-300 mb-2  md:mb-0">
                          <span className="text-slate-500">Mint Price </span>
                          <div className="font-medium text-lg">
                            {nft.attributes.public_mint_price}
                          </div>
                        </div>
                        <div className="border-r border-gray-300 mb-2  md:mb-0">
                          <span className="text-slate-500">Supply </span>
                          <div className="font-medium text-lg">
                            {nft.attributes.maximum_supply}
                          </div>
                        </div>
                        <div className=" mb-2 md:mb-0">
                          <span className="text-slate-500">Public sale </span>
                          <div className="font-medium text-lg">
                            {nft.attributes.public_mint_price}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center mt-3">
                        <div className="flex items-center mb-3 md:mb-0">
                          <a className="w-1/2 md:w-auto" href="">
                            <div className="p-2 rounded-sm border border-slate-2 bg-white flex items-center hover:border-violet-400 ">
                              <div className="icon w-6 h-6 rounded-full bg-twitter-100 p-1 flex flex-col justify-center items-center">
                                <Icon
                                  height={32}
                                  icon="bxl:twitter"
                                  className="text-white"
                                />
                              </div>
                              <span className="text-sm pl-2">Twitter</span>
                            </div>
                          </a>

                          <a className="w-1/2 md:w-auto" href="">
                            <div className="p-2 ml-2 rounded-sm border border-slate-2 bg-white flex items-center hover:border-violet-400">
                              <div className="icon w-6 h-6 rounded-full bg-discord-100 p-1 flex flex-col justify-center items-center">
                                <Icon
                                  height={32}
                                  icon="bxl:discord-alt"
                                  className="text-white"
                                />
                              </div>
                              <span className="text-sm pl-2">Discord</span>
                            </div>
                          </a>
                        </div>
                        <div className="md:ml-auto ml-0 flex ">
                          <button
                            onClick={handleToggle}
                            className={`btn-vote ${isActive ? "active" : null}`}
                          >
                            <Icon
                              className={
                                isActive ? "text-white" : "text-rose-400"
                              }
                              height={22}
                              icon={
                                isActive
                                  ? "ant-design:heart-filled"
                                  : "ant-design:heart-outlined"
                              }
                            />
                            <div className="text-rose-400 pl-1">Vote</div>
                          </button>
                          <div className="w-1/2 md:w-auto">
                            <Link href={"/detail/" + nft.attributes.slug}>
                              <a className="btn btn-primary btn-sm ">
                                View Detail
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <StickyBox className="max-w-xs" offsetTop={100}>
              <div className="box mb-4">
                <figure className="figure">
                  <img
                    src="https://global-uploads.webflow.com/61a98989a418f6f2acefef70/62c88fbe37579376f4da60eb_Formula%20X.gif"
                    className="figure-img img-fluid rounded"
                    alt=""
                  />
                </figure>
              </div>
              <div className="box">
                <figure className="figure">
                  <img
                    src="https://global-uploads.webflow.com/61a98989a418f6f2acefef70/62bb2422b8029277fc976ca4_ezgif.com-gif-maker%20(13).gif"
                    className="figure-img img-fluid rounded"
                    alt=""
                  />
                </figure>
              </div>
            </StickyBox>
          </div>
        </div>
      </section>
    </>
  );
};
