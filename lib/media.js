import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const url = media?.data?.attributes?.url;
  const imageUrl = url?.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}

//replace image url in mdtext
export function changeStrapiMarkdown(mdText) {
  return mdText.replace(/(!\[.*?\]\()(.+?)(\))/g, function (whole, a, b, c) {
    return a + getStrapiURL(b) + c;
  });
}
