import { getAssetFromKV, mapRequestToAsset } from "@cloudflare/kv-asset-handler";

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
if (ENVIRONMENT === "production") {
    var DEBUG = false;
} else {
    var DEBUG = true;
}

/**
 * HTML rewriter implementation based on https://developers.cloudflare.com/workers/tutorials/localize-a-website
 * to rewrite the hidden input referrer field. Defaults to "direct" but if ?ref
 * is appended to the URL e.g. ?ref=social then this will be rewritten.
 */
class ElementHandler {
    constructor(referrer) {
        if (referrer == false) {
            // If nothing is set
            referrer = "direct";
        }

        this.referrer = referrer;
    }

    // Rewrite the element attribute
    element(element) {
        element.setAttribute("value", this.referrer);
    }
}

addEventListener("fetch", (event) => {
    try {
        event.respondWith(handleEvent(event));
    } catch (e) {
        if (DEBUG) {
            return event.respondWith(
                new Response(e.message || e.toString(), {
                    status: 500,
                })
            );
        }
        event.respondWith(new Response("Internal Error", { status: 500 }));
    }
});

async function handleEvent(event) {
    const url = new URL(event.request.url);
    let options = {};

    try {
        if (DEBUG) {
            // customize caching
            options.cacheControl = {
                bypassCache: true,
            };
        }

        const page = await getAssetFromKV(event, options);

        // allow headers to be altered
        const response = new Response(page.body, page);

        response.headers.set("X-XSS-Protection", "1; mode=block");
        response.headers.set("X-Content-Type-Options", "nosniff");
        response.headers.set("X-Frame-Options", "DENY");
        response.headers.set("Referrer-Policy", "strict-origin");
        response.headers.set("Feature-Policy", "none");

        // Get the referrer from the URL string, false if not set
        var referrer = url.searchParams.get("ref") || false;

        // Run the response through the HTML rewriter, looking for the mc-referrer
        // input element. See https://developers.cloudflare.com/workers/runtime-apis/html-rewriter
        return new HTMLRewriter().on("input#mc-referrer", new ElementHandler(referrer)).transform(response);
    } catch (e) {
        // if an error is thrown try to serve the asset at 404.html
        if (!DEBUG) {
            try {
                let notFoundResponse = await getAssetFromKV(event, {
                    mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/404.html`, req),
                });

                return new Response(notFoundResponse.body, {
                    ...notFoundResponse,
                    status: 404,
                });
            } catch (e) {}
        }

        return new Response(e.message || e.toString(), { status: 500 });
    }
}
