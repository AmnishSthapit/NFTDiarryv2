import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { images } from "@/assets";

export const About = () => {
  return (
    <>
      <section className="relative z-10 pt-0">
        <img
          className="absolute right-0 -top-2/3 e1 hidden md:block"
          src={images.element1.src}
          alt=""
        />
        <img
          src={images.element2.src}
          alt=""
          className="absolute left-0 -bottom-40 e2 hidden md:block"
        />
        <div className="container mx-auto">
          <div className="about">
            <h2 className="">Sponsored</h2>
            <div className="flex lg:flex-row flex-col justify-center items-center ">
              <div className="card mb-10 md:mb-0">
                <figure className="figure relative">
                  <img
                    src="https://upcomingnft.net/wp-content/uploads/2022/07/SCpost-1658282208.png"
                    className="figure-img img-fluid rounded"
                    alt=""
                  />
                  <figcaption className="badge badge-success ">Live</figcaption>
                </figure>
                <div className="flex items-center py-2 text-sm">
                  <Icon
                    height={16}
                    icon="ep:calendar"
                    className="text-gray-400"
                  />{" "}
                  <span className="pl-1 text-gray-400">Pre-sale:</span>
                  <span className="text-blue-600 ">15 Jul 2022</span>
                  <div className="ml-auto">
                    {/* <img src="" alt="" /> */}
                    Ethereum
                  </div>
                </div>
                <h3>Crypto Doctors Club NFT</h3>
                <div className="grid grid-cols-2 gap-x-8 py-3">
                  <div className="border-r border-gray-300">
                    <span className="text-gray-400">Pre-sale </span>
                    <div className="font-bold text-xl">0.08 ETH</div>
                  </div>
                  <div className="">
                    <span className="text-gray-400">Public sale </span>
                    <div className="font-bold text-xl">0.12 ETH</div>
                  </div>
                </div>
                <div className="flex items-center pt-3">
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
              <div>
                <div className="flex ">
                  <div className="media">
                    <figure className="figure relative flex flex-col justify-center bg-black">
                      <img
                        src="https://upcomingnft.net/wp-content/uploads/2022/07/292221401_563801108698311_6771917701811431011_n-1657369444.jpg"
                        className="figure-img img-fluid rounded"
                        alt=""
                      />
                      <figcaption className="badge badge-warning">
                        Coming Soon
                      </figcaption>
                    </figure>
                    <div className="pl-2">
                      <div className="flex items-center py-1 text-sm">
                        <Icon
                          height={16}
                          icon="ep:calendar"
                          className="text-gray-400"
                        />{" "}
                        <span className="pl-1 text-gray-400">Pre-sale:</span>
                        <span className="text-blue-600 ">15 Jul 2022</span>
                      </div>
                      <h3 className="text-xl truncate">
                        Crypto Doctors Club NFT
                      </h3>
                      <div className="grid grid-cols-2 gap-x-8 py-1">
                        <div className="border-r border-gray-300">
                          <span className="text-gray-400">Pre-sale </span>
                          <div className="font-bold text-xl">0.08 ETH</div>
                        </div>
                        <div className="">
                          <span className="text-gray-400">Public sale </span>
                          <div className="font-bold text-xl">0.12 ETH</div>
                        </div>
                      </div>
                      <div className="flex items-center pt-2">
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
                            <a className="btn btn-link">View Detail</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="media">
                    <figure className="figure relative flex flex-col justify-center bg-black">
                      <img
                        src="https://upcomingnft.net/wp-content/uploads/2022/07/292221401_563801108698311_6771917701811431011_n-1657369444.jpg"
                        className="figure-img img-fluid rounded"
                        alt=""
                      />
                      <figcaption className="badge badge-warning">
                        Coming Soon
                      </figcaption>
                    </figure>
                    <div className="pl-2">
                      <div className="flex items-center py-1 text-sm">
                        <Icon
                          height={16}
                          icon="ep:calendar"
                          className="text-gray-400"
                        />{" "}
                        <span className="pl-1 text-gray-400">Pre-sale:</span>
                        <span className="text-blue-600 ">15 Jul 2022</span>
                      </div>
                      <h3 className="text-xl truncate">
                        Crypto Doctors Club NFT
                      </h3>
                      <div className="grid grid-cols-2 gap-x-8 py-1">
                        <div className="border-r border-gray-300">
                          <span className="text-gray-400">Pre-sale </span>
                          <div className="font-bold text-xl">0.08 ETH</div>
                        </div>
                        <div className="">
                          <span className="text-gray-400">Public sale </span>
                          <div className="font-bold text-xl">0.12 ETH</div>
                        </div>
                      </div>
                      <div className="flex items-center pt-2">
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
                          <a className="btn btn-link">View Detail</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mt-6 md:mt-0">
                  <div className="media">
                    <figure className="figure relative flex flex-col justify-center bg-black">
                      <img
                        src="https://global-uploads.webflow.com/61a98989a418f6f2acefef70/62c702109e79f09e7930be67_res1suit_3.gif"
                        className="figure-img img-fluid rounded"
                        alt=""
                      />
                      <figcaption className="badge badge-warning">
                        Coming Soon
                      </figcaption>
                    </figure>
                    <div className="pl-2">
                      <div className="flex items-center py-1 text-sm">
                        <Icon
                          height={16}
                          icon="ep:calendar"
                          className="text-gray-400"
                        />{" "}
                        <span className="pl-1 text-gray-400">Pre-sale:</span>
                        <span className="text-blue-600 ">15 Jul 2022</span>
                      </div>
                      <h3 className="text-xl truncate">
                        Crypto Doctors Club NFT
                      </h3>
                      <div className="grid grid-cols-2 gap-x-8 py-1">
                        <div className="border-r border-gray-300">
                          <span className="text-gray-400">Pre-sale </span>
                          <div className="font-bold text-xl">0.08 ETH</div>
                        </div>
                        <div className="">
                          <span className="text-gray-400">Public sale </span>
                          <div className="font-bold text-xl">0.12 ETH</div>
                        </div>
                      </div>
                      <div className="flex items-center pt-2">
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
                            <a className="btn btn-link">View Detail</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="media">
                    <figure className="figure relative flex flex-col justify-center bg-black">
                      <img
                        src="https://upcomingnft.net/wp-content/uploads/2022/07/FYKndf3VQAARsxk-1658399541.jpg"
                        className="figure-img img-fluid rounded"
                        alt=""
                      />
                      <figcaption className="badge badge-warning">
                        Coming Soon
                      </figcaption>
                    </figure>
                    <div className="pl-2">
                      <div className="flex items-center py-1 text-sm">
                        <Icon
                          height={16}
                          icon="ep:calendar"
                          className="text-gray-400"
                        />{" "}
                        <span className="pl-1 text-gray-400">Pre-sale:</span>
                        <span className="text-blue-600 ">15 Jul 2022</span>
                      </div>
                      <h3 className="text-xl truncate">
                        Crypto Doctors Club NFT
                      </h3>
                      <div className="grid grid-cols-2 gap-x-8 py-1">
                        <div className="border-r border-gray-300">
                          <span className="text-gray-400">Pre-sale </span>
                          <div className="font-bold text-xl">0.08 ETH</div>
                        </div>
                        <div className="">
                          <span className="text-gray-400">Public sale </span>
                          <div className="font-bold text-xl">0.12 ETH</div>
                        </div>
                      </div>
                      <div className="flex items-center pt-2">
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
                            <a className="btn btn-link">View Detail</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
