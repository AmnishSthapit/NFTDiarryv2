import { fetchAPI } from "lib/api";
import Head from "next/head";
import HomePage from "../src/containers/HomePage";
import { AppWrapper } from "../src/layout/AppWrapper";
import { getStrapiMedia } from "lib/media";

export default function Home(props) {
  const seo =
    props?.homepageData?.attributes.seo ||
    props?.globalData?.attributes?.defaultSeo;
  return (
    <AppWrapper footerData={props.footerData}>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta property="og:image" content={getStrapiMedia(seo.shareImage)} />
      </Head>
      <HomePage homepageData={props.homepageData} />
    </AppWrapper>
  );
}

export async function getStaticProps(context) {
  let [homepageRes, footerRes] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        populate: "*",
        banner_nfts: {
          populate: {
            populate: "*",
            nft: {
              populate: {
                populate: "*",
                display_image: "*",
              },
            },
          },
        },
        seo: { populate: "*" },
      },
    }),
    fetchAPI("/footer", {
      populate: "*",
    }),
  ]);
  return {
    props: {
      homepageData: homepageRes.data,
      footerData: footerRes.data,
    },
    revalidate: 3,
  };
}
