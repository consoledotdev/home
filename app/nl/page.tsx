import { getLatestItems as getLatestToolItems, Tool } from "@/app/lib/tools";
import { getLatestItems as getLatestBetasItems } from "@/app/lib/betas";
import { notFound } from "next/navigation";

export default async function Page() {
    if (process.env.NODE_ENV !== "development") {
        return notFound();
    }

    // Get the latest tools
    const toolItems = await getLatestToolItems();
    if (!toolItems) {
        console.error("Latest tools not found");
        return notFound();
    }
    const sortedToolItems = toolItems
        .sort(function (itemA: any, itemB: any) {
            return new Date(itemA.date).getTime() - new Date(itemB.date).getTime();
        })
        .reverse();

    // Get the latest betas
    const betasItems = await getLatestBetasItems();
    if (!betasItems) {
        console.error("Latest betas not found");
        return notFound();
    }

    // Sort betas by reverse date, but if a beta is sponsored it should be at the top
    const sortedBetasItems = betasItems
        .sort(function (itemA: any, itemB: any) {
            return new Date(itemA.date).getTime() - new Date(itemB.date).getTime();
        })
        .reverse()
        .sort(function (itemA: any, itemB: any) {
            if (itemA.sponsored && !itemB.sponsored) {
                return -1;
            }
            if (!itemA.sponsored && itemB.sponsored) {
                return 1;
            }
            return 0;
        });

    let preview = "";

    // Contents: Top
    let contents = `<table style="line-height: 150%; border-collapse:separate; border-spacing: 0 6px">
                <tbody>`;

    // An array of Tweets for each tool
    const tweets: string[] = [];

    // Contents: Tools
    sortedToolItems.forEach((tool) => {
        // Add the tweet to the array
        let tweet = `Interesting tool of the week: ${tool.url} by ${tool.twitter}\n\nWe like: ${tool.like}`;

        if (tool.sponsored) {
            tweet += `\n\n✦ Sponsored`;
        }

        tweets.push(tweet);

        // Parse the URL and append ?ref=console.dev to the query string
        const url = new URL(tool.url);
        url.searchParams.append("ref", "console.dev");

        contents += `
            <tr>
                <td style="vertical-align: top; width: 12px;">
                    <strong style="display:block; font-size:12px; font-weight:bold; margin-right:4px; margin-top:1px; width:12px">＋</strong>
                </td>
                <td>
                    <a href="${url}"><strong>${tool.name}</strong></a> &ndash; ${tool.description}
                </td>
            </tr>`;
    });

    // Contents: Betas
    sortedBetasItems.forEach((beta) => {
        // Parse the URL and append ?ref=console.dev to the query string
        const url = new URL(beta.url);
        url.searchParams.append("ref", "console.dev");

        contents += `
        <tr>
			<td style="vertical-align: top; width: 12px;">
                <span style="display:block; font-size:15px; margin-left:2px; margin-right:4px; width:12px"><em>&beta;</em></span></td>
			<td>
                <a href="${url}" target="_blank"><strong>${beta.name.trim()}</strong></a> &ndash; ${beta.description}
            </td>
		</tr>`;
    });

    // Contents: Bottom
    contents += `<tr>
            <td style="vertical-align: top; width: 12px;"><span style="display:block; font-size:16px; margin-left:2px; margin-right:4px; width:12px">&gt;</span></td>
            <td><a href="https://console.dev/podcast/SLUG" target="_blank"><strong>Podcast</strong></a> &ndash; Topic, with Guest (Org).</td>
        </tr>
        </tbody>
        </table>

        <hr style="border: none; border-top: none; padding-top: 6px; padding-bottom: 12px;" />`;

    // Tools section
    let tools = "";

    sortedToolItems.forEach((tool) => {
        preview += `${tool.name}, `;

        // Parse the URL and append ?ref=console.dev to the query string
        const url = new URL(tool.url);
        url.searchParams.append("ref", "console.dev");

        tools += `<h2><a href="${url}"><strong>${tool.name}</strong></a></h2>

        <h4>${tool.description}</h4>
        
        <p><strong>What we like:</strong> ${tool.like}</p>
        
        <p><strong>What we don&#39;t like:</strong> ${tool.dislike}</p>`;

        if (tool.sponsored) {
            tools += `<p><strong>✦ <em style="font-size:14px; font-style:italic">Sponsored:</em></strong> <em style="font-size:14px; font-style:italic">All reviews are editorially independent, and partners must meet our <a href="https://console.dev/selection-criteria/">selection criteria</a>.</em></p>`;
        }

        // If this is the last item we add a rule with more padding
        if (tool === sortedToolItems[sortedToolItems.length - 1]) {
            tools += `<hr style="border: none; border-top: none; padding-top: 6px; padding-bottom: 12px;" />`;
        } else {
            tools += `<hr style="border: none; border-top: none; padding-top: 6px;" />`;
        }
    });

    // Betas section
    let betas = "";

    sortedBetasItems.forEach((beta) => {
        // Parse the URL and append ?ref=console.dev to the query string
        const url = new URL(beta.url);
        url.searchParams.append("ref", "console.dev");

        betas += `<h2><a href="${url}" target="_blank"><strong>${beta.name}</strong></a></h2>

        <h4>${beta.description}</h4>
        <span style="font-family:courier new,courier,lucida sans typewriter,lucida typewriter,monospace">${beta.category.main.label}, ${beta.type.label}, ${beta.access} access`;

        if (beta.sponsored) {
            betas += `, ✦ Sponsored</span>`;
        } else {
            betas += `</span>`;
        }

        // If this is the last item we add a rule with more padding
        if (beta === sortedBetasItems[sortedBetasItems.length - 1]) {
            preview += `${beta.name}`;
            betas += `<hr style="border: none; border-top: none; padding-top: 6px; padding-bottom: 12px;" />`;
        } else {
            preview += `${beta.name}, `;
            betas += `<hr style="border: none; border-top: none; padding-top: 6px;" />`;
        }
    });

    preview += ` - the best tools for developers.`;

    return (
        <>
            <h1>Newsletter generator</h1>
            <p>Use this page to generate the newsletter.</p>
            <h2>Preview</h2>
            <textarea rows={2} cols={100} value={preview} spellCheck={false} />
            <h2>Contents</h2>
            <textarea rows={10} cols={100} value={contents} spellCheck={false} />
            <h2>Tools</h2>
            <textarea rows={10} cols={100} value={tools} spellCheck={false} />
            <h2>Betas</h2>
            <textarea rows={10} cols={100} value={betas} spellCheck={false} />
            <h2>Tweets</h2>
            {tweets.map((tweet) => (
                <textarea rows={4} cols={100} value={tweet} spellCheck={false} />
            ))}
        </>
    );
}
