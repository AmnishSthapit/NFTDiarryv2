import Head from "next/head";
import DetailPage from "@/containers/DetailPage";
import { AppWrapper } from "@/layout/AppWrapper";

export default function About() {
  return (
    <AppWrapper>
      <Head>
        <title>Detail</title>
        <meta name="description" content="DetailPage" />
      </Head>

      <DetailPage />
    </AppWrapper>
  );
}
