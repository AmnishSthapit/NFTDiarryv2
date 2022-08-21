import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { images } from "@/assets";

export const Community = () => {
  return (
    <>
      <section className="py-0 ">
        <div className="container mx-auto">
          <div className="rounded-lg bg-slate-900 py-20 px-6 text-center">
            <h3 className="text-white text-3xl">JOIN OUR COMMUNITY</h3>
            <p className="text-white text-xl">
              {" "}
              NFT Drops, News, Giveaways, Digital Art Daily Alerts &amp;
              Insights
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <button className="btn bg-white text-slate-900 hover:bg-gray-100 flex items-center py-3 mx-5 px-4 mb-3 md:mb-0">
                <Icon
                  icon="dashicons:twitter"
                  height={40}
                  color="#00acee"
                  className=" transition-all pr-4"
                />
                Join us on Twitter
              </button>
              <button className="btn bg-white text-slate-900 hover:bg-gray-100 flex items-center py-3 mx-5 px-4 mb-3 md:mb-0">
                <Icon
                  icon="dashicons:instagram"
                  height={40}
                  color="#e12f6b"
                  className=" transition-all pr-4"
                />
                Join us on Instagram
              </button>
              <button className="btn bg-white text-slate-900 hover:bg-gray-100 flex items-center py-3 mx-5 px-4">
                <Icon
                  icon="ic:baseline-telegram"
                  height={40}
                  color="#229ED9"
                  className=" transition-all pr-4"
                />
                Join us on Telegram
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
