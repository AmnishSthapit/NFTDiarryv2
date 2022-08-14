import React, { useEffect, useState } from "react";
import Image from "next/image";
import { k1, k2, k3, k4, k5 } from "@/assets";
import { Icon } from "@iconify/react";
import { images } from "@/assets";
import Link from "next/link";

import { fetchAPI } from "lib/api";
import VerticalNFTGridCard from "@/components/VerticalNFTGridCard";

export const KeyFeatures = () => {
  const [popular, setPopular] = useState({});
  const [upcoming, setUpcoming] = useState({});

  useEffect(() => {
    fetchAPI("/most-popular", {
      populate: {
        populate: "*",
        most_popular_nfts: {
          populate: "*",
          populate: {
            nfts: {
              populate: "*",
              populate: {
                populate: "*",
                display_image: "*",
              },
            },
          },
        },
      },
    }).then((res) =>
      setPopular(res?.data?.attributes?.most_popular_nfts?.nfts)
    );
    fetchAPI("/upcoming", {
      populate: {
        populate: "*",
        upcoming_nfts: {
          populate: "*",
          populate: {
            nfts: {
              populate: "*",
              populate: {
                populate: "*",
                display_image: "*",
              },
            },
          },
        },
      },
    }).then((res) => setUpcoming(res?.data?.attributes?.upcoming_nfts?.nfts));
  }, []);

  console.log(popular, upcoming)

  return (
    <>
      <section className="relative">
        <div className="container mx-auto">
          <div className="key-features grid lg:grid-cols-12 justify-center gap-x-10">
            <div className="lg:col-start-2 col-span-5">
              <h2>Most Popular</h2>
              <div>
                {popular?.data?.slice(0, 4).map((grid, i) => (
                  <div key={i}>
                    <VerticalNFTGridCard nft={grid.attributes} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-5">
              <h2>Upcoming</h2>
              <div>
                {upcoming?.data?.slice(0, 4).map((grid, i) => (
                  <div key={i}>
                    <VerticalNFTGridCard nft={grid.attributes} />
                  </div>
                ))}
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
