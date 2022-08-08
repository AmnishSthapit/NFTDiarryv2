import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/assets";
import { headers } from "next.config";
// import { Link } from "next/link";
import { Icon } from "@iconify/react";

export const Header = () => {
  const [istop, setistop] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const listenScrollEvent = (e) => {
    if (window.scrollY > 0) {
      setistop(false);
    } else {
      setistop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <>
      <header
        className={`${istop ? "" : " shrink-header "} sticky z-50  top-0 `}
        style={{
          // background: istop ? "transparent" : "#1b2230",
          transition: "all ease 0.3s",
        }}
      >
        <div className=" ">
          <nav className={`navbar py-2 ${isSidebarOpen ? "hide " : " "} `}>
            <div className="container mx-auto">
              <div className="">
                <Link href="/">
                  <a>
                    <img src={images.logo.src} alt="" />
                  </a>
                </Link>
              </div>
              <ul
                className={`nav-menu menu-horizontal  flex flex-col lg:flex-row justify-center px-3 lg:px-0 ml-auto items-center ${
                  isNavOpen ? "active" : ""
                }
                `}
              >
                <li className="nav-link hidden lg:block">
                  <Link href="/">About </Link>
                </li>
                <li className="nav-link hidden lg:block">
                  <Link href="/">Contact </Link>
                </li>

                <li className="nav-link hidden lg:block">
                  <Link
                    target="_blank"
                    href="https://forms.clickup.com/f/3feky-8681/GSSEQN7P7QHKDH0Y39"
                  >
                    <a className="btn btn-primary btn-sm">
                      Submit Your Project
                    </a>
                  </Link>
                </li>
                <li className="nav-link menu-button">
                  <Icon
                    className=" text-gray-900 cursor"
                    height={36}
                    icon="ci:menu-alt-02"
                    onClick={() => {
                      setIsSidebarOpen((prevState) => !prevState);
                    }}
                  />
                </li>
              </ul>
            </div>
          </nav>
          <nav
            className={`side-nav fixed  left-0 top-0 ${
              isSidebarOpen ? " " : "hide "
            }`}
          >
            <div className="text-right md:p-10 p-3 absolute top-3 right-3">
              <Icon
                className=" md:text-white cursor text-primary"
                height={36}
                icon="gridicons:cross"
                onClick={() => {
                  setIsSidebarOpen((prevState) => {
                    return !prevState;
                  });
                }}
              />
            </div>
            <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-1 h-screen">
              <div className="lg:p-20 px-6 pb-6 pt-12 md:col-span-2  lg:col-span-3">
                <div className="grid grid-cols-2 md:gap-20 gap-4 md:h-full h-auto md:pb-36">
                  <ul className="flex flex-col h-full justify-end">
                    <li className=" lg:pl-6 pl-0 text-primary font-bold">
                      Event feed{" "}
                    </li>

                    <li className="nav-link">
                      <Link href="/">Today</Link>{" "}
                    </li>
                    <li className="nav-link">
                      <Link href="/">Upcoming</Link>{" "}
                    </li>
                    <li className="nav-link">
                      <Link href="/">Ongoing</Link>{" "}
                    </li>
                    <li className="nav-link">
                      <Link href="/">Newest</Link>{" "}
                    </li>
                  </ul>
                  <ul className="flex flex-col  h-full justify-end">
                    <li className="md:text-xl md:py-3 py-2">
                      <Link href="/">About</Link>{" "}
                    </li>
                    <li className="md:text-xl md:py-3 py-2">
                      <Link href="/">News</Link>{" "}
                    </li>
                    <li className="md:text-xl md:py-3 py-2">
                      <Link href="/">MediaX Agency</Link>{" "}
                    </li>
                    <li className="md:text-xl md:py-3 py-2">
                      <Link href="/">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" bg-primary py-8 md:px-20 px-4 flex flex-col justify-center md:col-span-2">
                <div>
                  <span className="text-white text-xl ">Got an NFT?</span>

                  <h3 className="text-white md:text-4xl text-2xl md:pt-10 md:pb-4 py-4">
                    Let&apos;s promote <br /> your NFT together!
                  </h3>
                  <Link
                    target="_blank"
                    href="https://forms.clickup.com/f/3feky-8681/GSSEQN7P7QHKDH0Y39"
                  >
                    <a className="btn btn-outline rounded-full btn-sm px-8 font-bold">
                      Submit Project
                    </a>
                  </Link>
                </div>
                <div className="md:mt-20 mt-10">
                  <h5 className="text-white text-xl">Join our Community</h5>
                  <a href="#" target="_blank" rel="noreferrer">
                    <Icon
                      icon="dashicons:facebook-alt"
                      height={50}
                      className="text-white hover:text-white transition-all pr-4"
                    />
                  </a>
                  <a
                    href="https://twitter.com/nft_dairy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      icon="dashicons:twitter"
                      height={50}
                      className="text-white hover:text-white transition-all pr-4"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <Icon
                      icon="dashicons:instagram"
                      height={50}
                      className="text-white hover:text-white transition-all pr-4"
                    />
                  </a>

                  <a href="#" target="_blank" rel="noreferrer">
                    <Icon
                      icon="ic:baseline-telegram"
                      height={50}
                      className="text-white hover:text-white transition-all pr-4"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <Icon
                      icon="ic:outline-discord"
                      height={50}
                      className="text-white hover:text-white transition-all pr-4"
                    />
                  </a>
                </div>
              </div>
            </div>{" "}
          </nav>
        </div>
      </header>
    </>
  );
};
