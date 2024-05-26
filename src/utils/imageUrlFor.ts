import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "~/sanity/config/sanity.client";

const imageBuilder = imageUrlBuilder(client);

const imageUrlFor = (source: SanityImageSource) => imageBuilder.image(source);

export default imageUrlFor;