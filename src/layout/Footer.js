/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { images } from "@/assets";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";

const Footer = ({ footerData }) => {
  const { logo, description, discord, facebook, telegram, twitter, instagram } =
    footerData.attributes;
  return (
    <footer className=" pt-20 pb-10 bg-slate-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="">
            <img className="h-24" src={images.logo.src} alt="" />
          </div>
          <div className="mx-auto">
            <ul className="nav-link flex flex-col lg:flex-row">
              <li className="mr-6">
                <Link href="/about">
                  <a className="text-lg">About</a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/upcoming">
                  <a className="text-lg">Upcoming</a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/contact">
                  <a className="text-lg">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {facebook && (
              <a href={facebook} target="_blank" rel="noreferrer">
                <Icon
                  icon="dashicons:facebook-alt"
                  height={40}
                  className="text-primary hover:text-primary transition-all pr-4"
                />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noreferrer">
                <Icon
                  icon="dashicons:twitter"
                  height={40}
                  className="text-primary hover:text-primary transition-all pr-4"
                />
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noreferrer">
                <Icon
                  icon="dashicons:instagram"
                  height={40}
                  className="text-primary hover:text-primary transition-all pr-4"
                />
              </a>
            )}
            {telegram && (
              <a href={telegram} target="_blank" rel="noreferrer">
                <Icon
                  icon="ic:baseline-telegram"
                  height={40}
                  className="text-primary hover:text-primary transition-all pr-4"
                />
              </a>
            )}
            {discord && (
              <a href={discord} target="_blank" rel="noreferrer">
                <Icon
                  icon="ic:outline-discord"
                  height={40}
                  className="text-primary hover:text-primary transition-all pr-4"
                />
              </a>
            )}
          </div>
        </div>
        <div className="text-center   text-gray-400 py-5">
          &copy; 2022 NFT Dairy - All rights reserved.
        </div>
      </div>
    </footer>
    // <footer className=" pt-32 pb-10 bg-slate-40">
    //   <div className="container mx-auto">
    //     <div className="grid lg:grid-cols-6 gap-12">
    //       <div className="col-span-3">
    //         <img src={images.logo.src} alt="" />
    //         <div className="mt-10 lg:w-2/3">{parse(description)}</div>
    //       </div>
    //       <div>
    //         <h5>Company</h5>
    //         <ul className="nav-link">
    //           <li>
    //             <Link href="/">
    //               <a>About</a>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/">
    //               <a>Upcoming</a>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/">
    //               <a>Contact</a>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/">
    //               <a>About</a>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-span-2">
    //         <h5>Join Our Community</h5>
    //         <div>
    //           {facebook && (
    //             <a href={facebook} target="_blank" rel="noreferrer">
    //               <Icon
    //                 icon="dashicons:facebook-alt"
    //                 height={40}
    //                 className="text-primary hover:text-primary transition-all pr-4"
    //               />
    //             </a>
    //           )}
    //           {twitter && (
    //             <a href={twitter} target="_blank" rel="noreferrer">
    //               <Icon
    //                 icon="dashicons:twitter"
    //                 height={40}
    //                 className="text-primary hover:text-primary transition-all pr-4"
    //               />
    //             </a>
    //           )}
    //           {instagram && (
    //             <a href={instagram} target="_blank" rel="noreferrer">
    //               <Icon
    //                 icon="dashicons:instagram"
    //                 height={40}
    //                 className="text-primary hover:text-primary transition-all pr-4"
    //               />
    //             </a>
    //           )}
    //           {telegram && (
    //             <a href={telegram} target="_blank" rel="noreferrer">
    //               <Icon
    //                 icon="ic:baseline-telegram"
    //                 height={40}
    //                 className="text-primary hover:text-primary transition-all pr-4"
    //               />
    //             </a>
    //           )}
    //           {discord && (
    //             <a href={discord} target="_blank" rel="noreferrer">
    //               <Icon
    //                 icon="ic:outline-discord"
    //                 height={40}
    //                 className="text-primary hover:text-primary transition-all pr-4"
    //               />
    //             </a>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="text-center  pt-20 text-gray-400">
    //       &copy; {new Date().getFullYear()} NFT Dairy - All rights reserved.
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
