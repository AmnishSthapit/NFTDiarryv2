import Head from "next/head";
import AboutPage from "@/containers/AboutPage";
import { AppWrapper } from "@/layout/AppWrapper";

export default function About() {
  return (
    <AppWrapper>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>

      <AboutPage />
    </AppWrapper>
  );
}
