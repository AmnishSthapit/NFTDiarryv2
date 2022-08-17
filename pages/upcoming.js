import Head from "next/head";
import UpcomingPage from "@/containers/UpcomingPage";
import { AppWrapper } from "@/layout/AppWrapper";

export default function About() {
  return (
    <AppWrapper>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>

      <UpcomingPage />
    </AppWrapper>
  );
}
