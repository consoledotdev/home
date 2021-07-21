import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from "k6/metrics";
import { parseHTML } from 'k6/html';

export let errorRate = new Rate("errors");
export const options = {
    duration: "5s",
    vus: 5,
    thresholds: {
        http_req_duration: ["p(95)<1000"],
        errors: ["rate<0.01"], // <1% errors
    },
};
export default function () {
    // Use service tokens to access the test URL behind Cloudflare
    // https://developers.cloudflare.com/cloudflare-one/identity/service-auth/service-tokens
    const res = http.get("https://test.console.dev/tools/", {
        headers: {
            "CF-Access-Client-Id": `${__ENV.CF_CLIENT_ID}`,
            "CF-Access-Client-Secret": `${__ENV.CF_CLIENT_SECRET}`
        }
    });

    // Basic HTML parsing
    // https://k6.io/docs/examples/parse-html/
    const doc = parseHTML(res.body); // equivalent to res.html()
    const pageTitle = doc.find("head title").text();

    const result = check(res, {
        "status is 200": (r) => r.status == 200,
        "page title is correct": (r) => pageTitle == "Developer tools reviews by Console",
    });

    errorRate.add(!result);
    sleep(1);
}