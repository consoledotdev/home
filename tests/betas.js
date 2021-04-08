// ./test.js
import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from "k6/metrics";

export let errorRate = new Rate("errors");
export const options = {
    duration: "5s",
    vus: 5,
    thresholds: {
        http_req_duration: ["p(95)<1500"],
        errors: ["rate<0.01"], // <1% errors
    },
};
export default function () {
    const res = http.get("https://home-perftest.consoledev.workers.dev/betas/");
    const result = check(res, {
        "status is 200": (r) => r.status == 200,
    });

    errorRate.add(!result);
    sleep(1);
}
