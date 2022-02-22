import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from "k6/metrics";
import { parseHTML } from 'k6/html';

export let errorRate = new Rate("errors");
export const options = {
    duration: "5s",
    vus: 5,
    thresholds: {
        http_req_duration: ["p(95)<500"],
        errors: ["rate<0.01"], // <1% errors
    },
};
export default function () {
    // Use service tokens to access the test URL behind Cloudflare
    // https://developers.cloudflare.com/cloudflare-one/identity/service-auth/service-tokens
    const res = http.get("https://test.console.dev/podcast/s02e01-dev-infrastructure-john-graham-cumming-cloudflare/", {
        headers: {
            "CF-Access-Client-Id": `${__ENV.CF_CLIENT_ID}`,
            "CF-Access-Client-Secret": `${__ENV.CF_CLIENT_SECRET}`
        }
    });
    //const res = http.get("http://localhost:1313/");

    // Basic HTML parsing
    // https://k6.io/docs/examples/parse-html/
    const doc = parseHTML(res.body); // equivalent to res.html()
    const pageTitle = doc.find("head title").text();
    const metaDescription = doc.find("meta[name='description']").attr("content");
    const relCanonical = doc.find("link[rel='canonical']").attr("href");
    const ogSiteName = doc.find("meta[property='og:site_name']").attr("content");
    const ogTitle = doc.find("meta[property='og:title']").attr("content");
    const ogDescription = doc.find("meta[property='og:description']").attr("content");
    const ogURL = doc.find("meta[property='og:url']").attr("content");
    const twitterSite = doc.find("meta[name='twitter:site']").attr("content");
    const twitterCard = doc.find("meta[name='twitter:card']").attr("content");
    const twitterTitle = doc.find("meta[name='twitter:title']").attr("content");
    const twitterDescription = doc.find("meta[name='twitter:description']").attr("content");
    const twitterImage = doc.find("meta[name='twitter:image']").attr("content");
    const twitterPlayer = doc.find("meta[name='twitter:player']").attr("content");
    const twitterPlayerWidth = doc.find("meta[name='twitter:player:width']").attr("content");
    const twitterPlayerHeight = doc.find("meta[name='twitter:player:height']").attr("content");

    // What are we expecting?
    const expectedCanonical = "https://console.dev/podcast/s02e01-dev-infrastructure-john-graham-cumming-cloudflare/"
    const expectedTitle = "Dev infrastructure, with John Graham Cumming - Console DevTools Podcast";
    const expectedOgTitle = "Dev infrastructure - Console DevTools Podcast"
    const expectedDescription = "Dev infrastructure - a devtools discussion with John Graham-Cumming (Cloudflare). Episode 1 (Season 2) of the Console DevTools Podcast.";
    const expectedPlayer = "https://player.simplecast.com/a810f07c-1df0-4198-bd2f-a2629d3eeee3?dark=true";

    const result = check(res, {
        "status is 200": (r) => r.status == 200,
        "page title is correct": (r) => pageTitle == expectedTitle,
        "correct meta description": (r) => metaDescription == expectedDescription,
        "correct link rel canonical": (r) => relCanonical == expectedCanonical,
        "correct og:site_name": (r) => ogSiteName == "Console",
        "correct og:title": (r) => ogTitle == expectedOgTitle,
        "correct og:decription": (r) => ogDescription == expectedDescription,
        "correct og:url": (r) => ogURL == expectedCanonical,
        "correct twitter:site": (r) => twitterSite == "@consoledotdev",
        "correct twitter:card": (r) => twitterCard == "player",
        "correct twitter:title": (r) => twitterTitle == expectedOgTitle,
        "correct twitter:description": (r) => twitterDescription == expectedDescription,
        "correct twitter:image": (r) => twitterImage == "https://console.dev/img/podcast/podcast-cover.jpeg",
        "correct twitter:player": (r) => twitterPlayer == expectedPlayer,
        "correct twitter:player:width": (r) => twitterPlayerWidth == "200",
        "correct twitter:player:height": (r) => twitterPlayerHeight == "200",
    });

    errorRate.add(!result);
    sleep(1);
}