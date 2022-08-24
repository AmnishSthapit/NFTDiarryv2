import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getStrapiMedia } from "lib/media";

const VerticalNFTCard = ({ nft, bg }) => {
  const options = { year: "numeric", month: "short", day: "numeric" };

  return (
    <div className={`card mb-10 md:mb-0 ${bg}`}>
      <figure className="figure relative">
        {nft?.display_image && (
          <img
            src={getStrapiMedia(nft?.display_image)}
            className="figure-img img-fluid rounded"
            alt=""
          />
        )}
        <figcaption className="badge badge-success ">
          {nft?.minting_status
            .split(" ")
            .map((word) => word[0].toUpperCase().concat(word.slice(1)))
            .join(" ")}
        </figcaption>
      </figure>
      <div className="flex items-center py-2 text-sm">
        <Icon height={16} icon="ep:calendar" className="text-gray-400" />{" "}
        <span className="pl-1 pr-0.5 text-gray-400 text-sm whitespace-nowrap">
          Pre-sale:{" "}
        </span>
        <span className="text-blue-600 ">
          {" "}
          {new Date(nft.presale_date).toLocaleDateString("en-US", options)}
        </span>
        <div className="ml-auto">
          {/* <img src="" alt="" /> */}
          {nft?.event_category}
        </div>
      </div>
      <h3>{nft?.title}</h3>
      <div className="grid lg:grid-cols-2 gap-x-8 py-3">
        <div className="border-r border-gray-300">
          <span className="text-gray-400 text-sm">Supply </span>
          <div className="font-medium text-lg">{nft?.maximum_supply}</div>
        </div>
        <div className="">
          <span className="text-gray-400 text-sm">Public sale </span>
          <div className="font-medium text-lg">{nft?.public_mint_price}</div>
        </div>
      </div>
      <div className="flex items-center pt-3">
        <a href={nft?.twitter} target="_blank">
          <div className="flex items-center">
            <div className="icon w-7 h-7 rounded-full bg-twitter-100 p-1 flex flex-col justify-center items-center cursor-pointer">
              <Icon height={22} icon="bxl:twitter" className="text-white" />
            </div>
            <span className="pl-1 font-bold text-sm">
              {nft?.twitter_followers}
            </span>
          </div>
        </a>
        <a href={nft?.discord} target="_blank">
          <div className="flex items-center pl-3">
            <div className="icon w-7 h-7 rounded-full bg-discord-100 p-1 flex flex-col justify-center items-center cursor-pointer">
              <Icon height={22} icon="bxl:discord-alt" className="text-white" />
            </div>
            <span className="pl-1 font-bold text-sm">
              {nft?.discord_members}
            </span>
          </div>
        </a>
        <div className="ml-auto">
          <Link href={"/detail/" + nft?.slug}>
            <a className="btn btn-primary btn-sm">View Detail</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

VerticalNFTCard.propTypes = {};

export default VerticalNFTCard;
