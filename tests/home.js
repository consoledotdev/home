import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from "k6/metrics";
import { parseHTML } from "k6/html";

export let errorRate = new Rate("errors");
export const options = {
    duration: "5s",
    vus: 5,
    thresholds: {
        //http_req_duration: ["p(95)<500"],
        errors: ["rate<0.01"], // <1% errors
    },
};
export default function () {
    // Use service tokens to access the test URL behind Cloudflare
    // https://developers.cloudflare.com/cloudflare-one/identity/service-auth/service-tokens
    const res = http.get("https://test.console.dev", {
        headers: {
            "CF-Access-Client-Id": `${__ENV.CF_CLIENT_ID}`,
            "CF-Access-Client-Secret": `${__ENV.CF_CLIENT_SECRET}`,
        },
    });
    //const res = http.get("http://localhost:1313/");

    // Basic HTML parsing
    // https://k6.io/docs/examples/parse-html/
    const doc = parseHTML(res.body); // equivalent to res.html()
    const pageTitle = doc.find("head title").text();
    console.log("pageTitle", pageTitle);
    const metaDescription = doc.find("meta[name='description']").attr("content");
    console.log("metaDescription", metaDescription);
    const relCanonical = doc.find("link[rel='canonical']").attr("href");
    console.log("relCanonical", relCanonical);
    const ogSiteName = doc.find("meta[property='og:site_name']").attr("content");
    console.log("ogSiteName", ogSiteName);
    const ogTitle = doc.find("meta[property='og:title']").attr("content");
    console.log("ogTitle", ogTitle);
    const ogDescription = doc.find("meta[property='og:description']").attr("content");
    console.log("ogDescription", ogDescription);
    const ogURL = doc.find("meta[property='og:url']").attr("content");
    console.log("ogURL", ogURL);

    // What are we expecting?
    const expectedCanonical = "https://console.dev/";
    const expectedTitle = "Console Newsletter - The best tools for developers";
    const expectedDescription = "A free weekly email digest of the best tools and beta releases for developers.";

    const result = check(res, {
        "status is 200": (r) => r.status == 200,
        "page title is correct": (r) => pageTitle == expectedTitle,
        "correct meta description": (r) => metaDescription == expectedDescription,
        "correct link rel canonical": (r) => relCanonical == expectedCanonical,
        "correct og:site_name": (r) => ogSiteName == "Console",
        "correct og:title": (r) => ogTitle == pageTitle,
        "correct og:decription": (r) => ogDescription == expectedDescription,
        "correct og:url": (r) => ogURL == expectedCanonical,
    });

    errorRate.add(!result);
    sleep(1);
}
