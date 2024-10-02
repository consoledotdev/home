import arcjet, { createMiddleware, shield, detectBot } from "@arcjet/next";
export const config = {
    // matcher tells Next.js which routes to run the middleware on
    matcher: ["/((?!_next/static|_next/image|favicon.ico|favicon.png|img).*)"],
};
const aj = arcjet({
    key: process.env.ARCJET_KEY!,
    rules: [
        shield({ mode: "LIVE" }),
        detectBot({
            mode: "DRY_RUN", // will block requests. Use "DRY_RUN" to log only
            // Block all bots except search engine crawlers. See the full list of bots
            // for other options: https://arcjet.com/bot-list
            allow: ["CATEGORY:SEARCH_ENGINE", "CATEGORY:FEEDFETCHER", "CATEGORY:PREVIEW", "CATEGORY:SOCIAL"],
        }),
    ],
});

export default createMiddleware(aj);
