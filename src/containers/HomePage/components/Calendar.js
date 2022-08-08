import React from "react";
import Image from "next/image";
import { k1, k2, k3, k4, k5 } from "@/assets";
import { Icon } from "@iconify/react";
import { images } from "@/assets";
import Link from "next/link";
import StickyBox from "react-sticky-box";

export const Calendar = () => {
  return (
    <>
      <section className="relative">
        <div className="container mx-auto">
          <div className="">
            <h2>#1 NFT Calendar</h2>
          </div>
          <div className="flex items-start mt-10 ">
            <div className="calendar-list mr-8 w-full">
              <div className="media bg-violet-50 mb-6 w-full">
                <figure className="figure figure-lg  relative flex flex-col justify-center bg-black">
                  <img
                    src="https://upcomingnft.net/wp-content/uploads/2022/07/292221401_563801108698311_6771917701811431011_n-1657369444.jpg"
                    className="figure-img img-fluid rounded"
                    alt=""
                  />
                  <figcaption className=" badge badge-success ">
                    Sponsored
                  </figcaption>
                </figure>
                <div className="pl-2 w-full">
                  <div className="flex">
                    <h3 className="text-xl truncate">
                      Crypto Doctors Club NFT
                    </h3>

                    <div className="flex items-center py-1 text-sm ml-auto">
                      <Icon
                        height={16}
                        icon="ep:calendar"
                        className="text-slate-500"
                      />{" "}
                      <span className="pl-1 text-slate-500">Pre-sale:</span>
                      <span className="text-blue-600 ">15 Jul 2022</span>
                    </div>
                  </div>
                  <p className="mb-0">
                    Snow Leopard Kids Club (SLEKCLUB). All Snow Leopard Kids
                    Club owners will become millionaires! How to get rich by
                    becoming...
                  </p>
                  <div className="grid grid-cols-4 gap-x-8 py-2">
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Blockchain </span>
                      <div className="font-semibold text-lg">Ethereum</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Mint Price </span>
                      <div className="font-semibold text-lg">0.08 ETH</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Supply </span>
                      <div className="font-semibold text-lg">32434 ETH</div>
                    </div>
                    <div className="">
                      <span className="text-slate-500">Public sale </span>
                      <div className="font-semibold text-lg">0.12 ETH</div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <div className="flex items-center">
                      <div className="icon w-5 h-5 rounded-full bg-twitter-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:twitter"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="flex items-center pl-3">
                      <div className="icon w-5 h-5 rounded-full bg-discord-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:discord-alt"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="ml-auto">
                      <Link href="detail-page">
                        <a className="btn btn-primary btn-sm">View Detail</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media bg-violet-50 mb-6 w-full">
                <figure className="figure figure-lg  relative flex flex-col justify-center bg-black">
                  <img
                    src="https://upcomingnft.net/wp-content/uploads/2022/07/292221401_563801108698311_6771917701811431011_n-1657369444.jpg"
                    className="figure-img img-fluid rounded"
                    alt=""
                  />
                  <figcaption className=" badge badge-success ">
                    Sponsored
                  </figcaption>
                </figure>
                <div className="pl-2 w-full">
                  <div className="flex">
                    <h3 className="text-xl truncate">
                      Crypto Doctors Club NFT
                    </h3>

                    <div className="flex items-center py-1 text-sm ml-auto">
                      <Icon
                        height={16}
                        icon="ep:calendar"
                        className="text-slate-500"
                      />{" "}
                      <span className="pl-1 text-slate-500">Pre-sale:</span>
                      <span className="text-blue-600 ">15 Jul 2022</span>
                    </div>
                  </div>
                  <p className="mb-0">
                    Snow Leopard Kids Club (SLEKCLUB). All Snow Leopard Kids
                    Club owners will become millionaires! How to get rich by
                    becoming...
                  </p>
                  <div className="grid grid-cols-4 gap-x-8 py-2">
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Blockchain </span>
                      <div className="font-semibold text-lg">Ethereum</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Mint Price </span>
                      <div className="font-semibold text-lg">0.08 ETH</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Supply </span>
                      <div className="font-semibold text-lg">32434 ETH</div>
                    </div>
                    <div className="">
                      <span className="text-slate-500">Public sale </span>
                      <div className="font-semibold text-lg">0.12 ETH</div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <div className="flex items-center">
                      <div className="icon w-5 h-5 rounded-full bg-twitter-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:twitter"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="flex items-center pl-3">
                      <div className="icon w-5 h-5 rounded-full bg-discord-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:discord-alt"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="ml-auto">
                      <Link href="detail-page">
                        <a className="btn btn-primary btn-sm">View Detail</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media bg-violet-50 mb-6 w-full">
                <figure className="figure figure-lg  relative flex flex-col justify-center bg-black">
                  <img
                    src="https://global-uploads.webflow.com/61a98989a418f6f2acefef70/62c204d765c2ff05b1658456_WSW.gif"
                    className="figure-img img-fluid rounded"
                    alt=""
                  />
                  <figcaption className=" badge badge-success ">
                    Sponsored
                  </figcaption>
                </figure>
                <div className="pl-2 w-full">
                  <div className="flex flex-col md:flex-row">
                    <h3 className="text-xl truncate">
                      Crypto Doctors Club NFT
                    </h3>

                    <div className="flex items-center py-1 text-sm ml-auto">
                      <Icon
                        height={16}
                        icon="ep:calendar"
                        className="text-slate-500"
                      />{" "}
                      <span className="pl-1 text-slate-500">Pre-sale:</span>
                      <span className="text-blue-600 ">15 Jul 2022</span>
                    </div>
                  </div>
                  <p className="mb-0">
                    Snow Leopard Kids Club (SLEKCLUB). All Snow Leopard Kids
                    Club owners will become millionaires! How to get rich by
                    becoming...
                  </p>
                  <div className="grid grid-cols-4 gap-x-8 py-2">
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Blockchain </span>
                      <div className="font-semibold text-lg">Ethereum</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Mint Price </span>
                      <div className="font-semibold text-lg">0.08 ETH</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Supply </span>
                      <div className="font-semibold text-lg">32434 ETH</div>
                    </div>
                    <div className="">
                      <span className="text-slate-500">Public sale </span>
                      <div className="font-semibold text-lg">0.12 ETH</div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <div className="flex items-center">
                      <div className="icon w-5 h-5 rounded-full bg-twitter-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:twitter"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="flex items-center pl-3">
                      <div className="icon w-5 h-5 rounded-full bg-discord-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:discord-alt"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="ml-auto">
                      <Link href="detail-page">
                        <a className="btn btn-primary btn-sm">View Detail</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media bg-violet-50 mb-6 w-full">
                <figure className="figure figure-lg  relative flex flex-col justify-center bg-black">
                  <img
                    src="https://global-uploads.webflow.com/61a98989a418f6f2acefef70/62b7760df586795248425bac_ezgif.com-gif-maker%20(5)%20(1).gif"
                    className="figure-img img-fluid rounded"
                    alt=""
                  />
                  <figcaption className=" badge badge-success ">
                    Sponsored
                  </figcaption>
                </figure>
                <div className="pl-2 w-full">
                  <div className="flex">
                    <h3 className="text-xl truncate">
                      Crypto Doctors Club NFT
                    </h3>

                    <div className="flex items-center py-1 text-sm ml-auto">
                      <Icon
                        height={16}
                        icon="ep:calendar"
                        className="text-slate-500"
                      />{" "}
                      <span className="pl-1 text-slate-500">Pre-sale:</span>
                      <span className="text-blue-600 ">15 Jul 2022</span>
                    </div>
                  </div>
                  <p className="mb-0">
                    Snow Leopard Kids Club (SLEKCLUB). All Snow Leopard Kids
                    Club owners will become millionaires! How to get rich by
                    becoming...
                  </p>
                  <div className="grid grid-cols-4 gap-x-8 py-2">
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Blockchain </span>
                      <div className="font-semibold text-lg">Ethereum</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Mint Price </span>
                      <div className="font-semibold text-lg">0.08 ETH</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Supply </span>
                      <div className="font-semibold text-lg">32434 ETH</div>
                    </div>
                    <div className="">
                      <span className="text-slate-500">Public sale </span>
                      <div className="font-semibold text-lg">0.12 ETH</div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <div className="flex items-center">
                      <div className="icon w-5 h-5 rounded-full bg-twitter-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:twitter"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="flex items-center pl-3">
                      <div className="icon w-5 h-5 rounded-full bg-discord-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:discord-alt"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="ml-auto">
                      <Link href="detail-page">
                        <a className="btn btn-primary btn-sm">View Detail</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media bg-violet-50 mb-6 w-full">
                <figure className="figure figure-lg  relative flex flex-col justify-center bg-black">
                  <img
                    src="https://global-uploads.webflow.com/61a98989a418f6f2acefef70/62db22d49e48e5dbe5c946a8_animated-2%20(1).gif"
                    className="figure-img img-fluid rounded"
                    alt=""
                  />
                  <figcaption className=" badge badge-success ">
                    Sponsored
                  </figcaption>
                </figure>
                <div className="pl-2 w-full">
                  <div className="flex">
                    <h3 className="text-xl truncate">
                      Crypto Doctors Club NFT
                    </h3>

                    <div className="flex items-center py-1 text-sm ml-auto">
                      <Icon
                        height={16}
                        icon="ep:calendar"
                        className="text-slate-500"
                      />{" "}
                      <span className="pl-1 text-slate-500">Pre-sale:</span>
                      <span className="text-blue-600 ">15 Jul 2022</span>
                    </div>
                  </div>
                  <p className="mb-0">
                    Snow Leopard Kids Club (SLEKCLUB). All Snow Leopard Kids
                    Club owners will become millionaires! How to get rich by
                    becoming...
                  </p>
                  <div className="grid grid-cols-4 gap-x-8 py-2">
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Blockchain </span>
                      <div className="font-semibold text-lg">Ethereum</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Mint Price </span>
                      <div className="font-semibold text-lg">0.08 ETH</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Supply </span>
                      <div className="font-semibold text-lg">32434 ETH</div>
                    </div>
                    <div className="">
                      <span className="text-slate-500">Public sale </span>
                      <div className="font-semibold text-lg">0.12 ETH</div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <div className="flex items-center">
                      <div className="icon w-5 h-5 rounded-full bg-twitter-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:twitter"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="flex items-center pl-3">
                      <div className="icon w-5 h-5 rounded-full bg-discord-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:discord-alt"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="ml-auto">
                      <Link href="detail-page">
                        <a className="btn btn-primary btn-sm">View Detail</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media bg-violet-50 mb-6 w-full">
                <figure className="figure figure-lg  relative flex flex-col justify-center bg-black">
                  <img
                    src="https://global-uploads.webflow.com/61a98989a418f6f2acefef70/62c702109e79f09e7930be67_res1suit_3.gif"
                    className="figure-img img-fluid rounded"
                    alt=""
                  />
                  <figcaption className=" badge badge-success ">
                    Sponsored
                  </figcaption>
                </figure>
                <div className="pl-2 w-full">
                  <div className="flex">
                    <h3 className="text-xl truncate">
                      Crypto Doctors Club NFT
                    </h3>

                    <div className="flex items-center py-1 text-sm ml-auto">
                      <Icon
                        height={16}
                        icon="ep:calendar"
                        className="text-slate-500"
                      />{" "}
                      <span className="pl-1 text-slate-500">Pre-sale:</span>
                      <span className="text-blue-600 ">15 Jul 2022</span>
                    </div>
                  </div>
                  <p className="mb-0">
                    Snow Leopard Kids Club (SLEKCLUB). All Snow Leopard Kids
                    Club owners will become millionaires! How to get rich by
                    becoming...
                  </p>
                  <div className="grid grid-cols-4 gap-x-8 py-2">
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Blockchain </span>
                      <div className="font-semibold text-lg">Ethereum</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Mint Price </span>
                      <div className="font-semibold text-lg">0.08 ETH</div>
                    </div>
                    <div className="border-r border-gray-300">
                      <span className="text-slate-500">Supply </span>
                      <div className="font-semibold text-lg">32434 ETH</div>
                    </div>
                    <div className="">
                      <span className="text-slate-500">Public sale </span>
                      <div className="font-semibold text-lg">0.12 ETH</div>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <div className="flex items-center">
                      <div className="icon w-5 h-5 rounded-full bg-twitter-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:twitter"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="flex items-center pl-3">
                      <div className="icon w-5 h-5 rounded-full bg-discord-100 p-1 flex flex-col justify-center items-center">
                        <Icon
                          height={16}
                          icon="bxl:discord-alt"
                          className="text-white"
                        />
                      </div>
                      <span className="pl-1 font-bold text-sm">23.3K</span>
                    </div>
                    <div className="ml-auto">
                      <Link href="detail-page">
                        <a className="btn btn-primary btn-sm">View Detail</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
