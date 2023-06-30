import { NextResponse } from "next/server";
import { WebClient } from "@slack/web-api";

export async function GET(request: Request) {
    // Get stats from Mailchimp
    const mc = require("@mailchimp/mailchimp_marketing");

    mc.setConfig({
        apiKey: process.env.MC_API_KEY,
        server: process.env.MC_SERVER,
    });

    const listId = "267911a165";
    const segmentId = 3577267;

    const segment = await mc.lists.getSegment(listId, segmentId);

    if (!segment) {
        return NextResponse.json({
            status: 500,
            body: {
                error: "Mailchimp segment not found",
            },
        });
    }

    const subscribers = segment.member_count.toLocaleString();

    // Post to Slack
    const token = process.env.SLACK_TOKEN;
    const web = new WebClient(token);

    const channelId = "C05F0H5D7K7";

    const result = await web.chat.postMessage({
        channel: channelId,
        text: `Confirmed subscribers: ${subscribers}`,
        blocks: [
            {
                type: "context",
                elements: [
                    {
                        type: "mrkdwn",
                        text: `*Confirmed subscribers:* ${subscribers}`,
                    },
                ],
            },
        ],
    });

    console.log(result);

    return NextResponse.json({
        status: 200,
    });
}
