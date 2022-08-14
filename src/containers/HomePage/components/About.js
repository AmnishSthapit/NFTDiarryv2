import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { images } from "@/assets";

import { fetchAPI } from "lib/api";
import VerticalNFTCard from "@/components/VerticalNFTCard";
import VerticalNFTGridCard from "@/components/VerticalNFTGridCard";

export const About = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchAPI("/sponsored", {
      populate: {
        populate: "*",
        sponsored_nfts: {
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
    }).then((res) => setData(res?.data?.attributes?.sponsored_nfts?.nfts));
  }, []);

  console.log(data);

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
            {data.data?.length > 0 && (
              <div className="flex lg:flex-row flex-col justify-center items-center ">
                  <VerticalNFTCard
                    nft={data?.data[0]?.attributes}
                    bg="white"
                  />
                <div className="grid grid-cols-2 gap-4 mt-2 lg:ml-2">
                  {data?.data?.slice(1, 5).map((grid, i) => (
                    <div key={i}>
                      <VerticalNFTGridCard nft={grid.attributes} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
