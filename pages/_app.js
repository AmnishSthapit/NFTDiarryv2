import { useEffect } from "react";
import AOS from "aos";
import App from "next/app";
import { fetchAPI } from "lib/api";

import "aos/dist/aos.css";
import Head from "next/head";
import { getStrapiMedia } from "lib/media";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  const { globalData } = pageProps;

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="website, blog, foo, bar" />
        <title>{globalData.attributes.siteName}</title>
				<meta
					name="description"
					content={globalData.attributes.siteDescription}
				/>

				<link
					rel="shortcut icon"
					href={getStrapiMedia(globalData?.attributes.favicon)}
				/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
MyApp.getInitialProps = async (ctx) => {
	// Calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(ctx);
	// Fetch global site settings from Strapi
	const globalRes = await fetchAPI("/global", {
		populate: {
			populate: "*",
      favicon: '*',
			defaultSeo: {
				populate: "*",
			},
		},
	});
	// Pass the data to our page via props
	return { ...appProps, pageProps: { globalData: globalRes.data } };
};
