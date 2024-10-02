import arcjet, { shield, detectBot } from "@arcjet/next";
import { NextRequest, NextResponse } from "next/server";
export const config = {
    // matcher tells Next.js which routes to run the middleware on
    matcher: ["/((?!_next/static|_next/image|favicon.ico|favicon.png|img).*)"],
};
const aj = arcjet({
    key: process.env.ARCJET_KEY!,
    rules: [
        shield({ mode: "LIVE" }),
        detectBot({
            mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
            // Block all bots except search engine crawlers. See the full list of bots
            // for other options: https://arcjet.com/bot-list
            allow: ["CATEGORY:SEARCH_ENGINE", "CATEGORY:FEEDFETCHER", "CATEGORY:PREVIEW", "CATEGORY:SLACK", "CATEGORY:SOCIAL"],
        }),
    ],
});

export default async function middleware(request: NextRequest) {
    const decision = await aj.protect(request);

    if (
        // If this deny comes from a bot rule then block the request. You can
        // customize this logic to fit your needs e.g. changing the status code.
        decision.isDenied() &&
        decision.reason.isBot()
    ) {
        return NextResponse.json({ error: "Bots forbidden" }, { status: 403 });
    } else if (decision.isErrored()) {
        if (decision.reason.message.contains("requires user-agent header")) {
            console.error("Arcjet user-agent warning", decision.reason.message);
            return NextResponse.json({ error: "Bad request - missing user-agent" }, { status: 400 });
        } else {
            console.error("Arcjet error", decision.reason.message);
            return NextResponse.next();
        }
    } else {
        return NextResponse.next();
    }
}
