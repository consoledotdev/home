import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/landing", "/reddit", "/confirm"],
        },
        sitemap: "https://console.dev/sitemap.xml",
    };
}
