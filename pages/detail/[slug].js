import React, { useEffect, useState } from "react";
import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";
import DetailPage from "@/containers/DetailPage";
import { AppWrapper } from "@/layout/AppWrapper";
import Head from "next/head";

const NFTDetailPage = ({ nftData, footerData }) => {

  const router = useRouter();
  let loading = router.isFallback;

  //   const { title, body, image } = nft.attributes
  //   const seo = {
  //     title: title,
  //     metaDescription: normalizeMarkdownText(body),
  //     shareImage: image,
  //   }
  return (
    <AppWrapper footerData={footerData}>
      <Head>
        <title>Details</title>
        <meta name="description" content="DetailPage" />
      </Head>

      <DetailPage nftData={nftData} />
    </AppWrapper>
  );
};

export async function getStaticPaths() {
  const res = await fetchAPI("/nfts", {
    populate: {
      slug: "*",
    },
  });

  const paths = res?.data.map((nft) => ({
    params: { slug: nft?.attributes?.slug },
  }));
  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  // Run API calls in parallel
  const [footerRes, nftRes] = await Promise.all([
    fetchAPI("/footer", {
      populate: "*",
    }),
    fetchAPI(`/nfts`, {
      populate: "*",
      filters: {
        slug: params.slug,
      },
    }),
  ]);
  return {
    props: {
      nftData: nftRes?.data[0],
      footerData: footerRes?.data,
    },
    revalidate: 1,
  };
}

export default NFTDetailPage;
