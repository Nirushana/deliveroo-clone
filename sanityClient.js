import { createClient } from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

const client = createClient({
    projectId: '64uibb2x',
    dataset: "production",
    apiVersion: "2023-10-06",
    useCdn: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client