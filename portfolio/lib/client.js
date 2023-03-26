import SanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "v59lstdq",
  dataset: "portfolio-v2",
  apiVersion: "2023-01-15",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);