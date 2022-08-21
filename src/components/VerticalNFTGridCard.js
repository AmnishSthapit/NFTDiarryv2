import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getStrapiMedia } from "lib/media";

const VerticalNFTGridCard = ({ nft }) => {
  return (
    <div className="flex ">
      <div className="media mb-4">
        <figure className="figure relative flex flex-col justify-center bg-black">
          {nft.display_image && (
            <img
              src={getStrapiMedia(nft.display_image)}
              className="figure-img img-fluid rounded "
              alt=""
            />
          )}
          <figcaption className="badge badge-success ">Live</figcaption>
        </figure>
        <div className="pl-2 w-full">
          <div className="flex items-center py-1 text-sm">
            <Icon height={16} icon="ep:calendar" className="text-gray-400 " />{" "}
            <span className="pl-1 text-gray-400 text-sm">Pre-sale: </span>
            <span className="text-blue-600 "> {nft.presale_date}</span>
            {/* <div className="ml-auto">
                {nft.event_category}
              </div> */}
          </div>
          <h3 className="text-xl truncate">{nft.title}</h3>
          <div className="grid lg:grid-cols-2 gap-x-8 py-2">
            <div className="border-r border-gray-300">
              <span className="text-gray-400 text-sm">Supply </span>
              <div className="font-medium text-lg">{nft.maximum_supply}</div>
            </div>
            <div className="">
              <span className="text-gray-400 text-sm">Public sale </span>
              <div className="font-medium text-lg">{nft.public_mint_price}</div>
            </div>
          </div>
          <div className="flex items-center pt-2">
            <div className="flex items-center">
              <div className="icon w-7 h-7 rounded-full bg-twitter-100 p-1 flex flex-col justify-center items-center">
                <Icon height={22} icon="bxl:twitter" className="text-white" />
              </div>
              <span className="pl-1 font-bold text-sm">
                {nft.twitter_followers}
              </span>
            </div>
            <div className="flex items-center pl-3">
              <div className="icon w-7 h-7 rounded-full bg-discord-100 p-1 flex flex-col justify-center items-center">
                <Icon
                  height={22}
                  icon="bxl:discord-alt"
                  className="text-white"
                />
              </div>
              <span className="pl-1 font-bold text-sm">
                {nft.discord_members}
              </span>
            </div>
            <div className="ml-auto">
              <Link href={"/detail/" + nft.slug}>
                <a className="btn btn-primary btn-sm">View Detail</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalNFTGridCard;
