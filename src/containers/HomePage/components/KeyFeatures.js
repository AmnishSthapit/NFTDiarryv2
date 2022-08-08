import React from "react";
import Image from "next/image";
import { k1, k2, k3, k4, k5 } from "@/assets";
import { Icon } from "@iconify/react";
import { images } from "@/assets";
import Link from "next/link";

export const KeyFeatures = () => {
  return (
    <>
      <section className="relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 justify-center gap-x-10">
            <div className="lg:col-start-2 col-span-5">
              <h2>Most Popular</h2>
              <div>
                <div className="media bg-violet-50 mb-6">
                  <figure className="figure figure-sm  relative flex flex-col justify-center bg-black">
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
                <div className="media bg-violet-50 mb-6">
                  <figure className="figure figure-sm  relative flex flex-col justify-center bg-black">
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
                <div className="media bg-violet-50 mb-6">
                  <figure className="figure figure-sm  relative flex flex-col justify-center bg-black">
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
                <div className="media bg-violet-50 mb-6">
                  <figure className="figure figure-sm  relative flex flex-col justify-center bg-black">
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
            <div className="col-span-5">
              <h2>Upcoming</h2>
              <div>
                <div className="media bg-violet-50 mb-6">
                  <figure className="figure figure-sm  relative flex flex-col justify-center bg-black">
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
                <div className="media bg-violet-50 mb-6">
                  <figure className="figure figure-sm  relative flex flex-col justify-center bg-black">
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
                <div className="media bg-violet-50 mb-6">
                  <figure className="figure figure-sm  relative flex flex-col justify-center bg-black">
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
                <div className="media bg-violet-50 mb-6">
                  <figure className="figure figure-sm  relative flex flex-col justify-center bg-black">
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
          <div className="py-4 text-center">
            <a className="btn btn-secondary">See all collections</a>
          </div>
        </div>
      </section>
    </>
  );
};
