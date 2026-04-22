import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

   export const client = createClient({
        projectId: "7h9esbmd",
        dataset: "production",
        apiVersion: "2026-04-22",
        useCdn: true,
    });
    
    const builder = ImageUrlBuilder(client);

    export function urlFor(source: any) {
        return builder.image(source);
    }
