import { ServerThemeProvider } from "next-themes";
import ThemeProvider from "@/components/providers/theme-provider";
import OriginProvider from "@/components/providers/origin-provider";
import PlausibleProvider from "next-plausible";
import Header from "@/components/compositions/header";
import Footer from "@/components/compositions/footer";
import PageWrapper from "@/components/elements/page-wrapper";

import StyledJsxRegistry from "@/components/providers/registry";

import "@/styles/normalize.css";
import "@/styles/vars.scss";
import "@/styles/dark.scss";
import "@/styles/light.scss";
import "@/styles/main.scss";
import "@/styles/components.scss";
import "@/styles/header.scss";
import "@/styles/footer.scss";
import "@/styles/logo.scss";

import { Rubik } from "next/font/google";

const rubik = Rubik({
    weight: ["300", "400", "500"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

// https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
    title: "Console Newsletter - The best tools for developers",
    description: "A free weekly email digest of the best tools for developers.",
    icons: {
        icon: [
            // favicon.ico in /app is automatically added
            {
                url: "/favicon.svg",
                type: "image/svg+xml",
            },
            {
                url: "/favicon.png",
                type: "image/png",
            },
        ],
    },
    openGraph: {
        title: "Console Newsletter - The best tools for developers",
        siteName: "Console",
        description: "A free weekly email digest of the best tools for developers.",
        url: "https://console.dev",
        type: "website",
        images: [
            {
                url: "https://console.dev/img/console-mark.png",
                width: 200,
                height: 200,
                alt: "Console Newsletter",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Console Newsletter - The best tools for developers",
        site: "@consoledotdev",
        creator: "@consoledotdev",
    },
    alternates: {
        types: {
            "application/rss+xml": [
                {
                    url: "https://console.dev/tools/rss.xml",
                    title: "Console - Tool reviews",
                },
                {
                    url: "https://console.dev/betas/rss.xml",
                    title: "Console - Betas",
                },
                {
                    url: "https://feeds.simplecast.com/T80CJwln",
                    title: "Console - Podcast",
                },
                {
                    url: "https://console.dev/interviews/rss.xml",
                    title: "Console - Developer interviews",
                },
                {
                    url: "https://console.dev/profiles/rss.xml",
                    title: "Console - Devtools company profiles",
                },
            ],
        },
    },
};

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    let cls = "theme";
    cls += " " + rubik.className;

    // Commented out because this causes every page to be deopted into client-side
    // rendering, which prevents caching. Need an alternative approache to this.
    // Check same origin for animations
    /*const headersList = headers();
  const referrer = headersList.get("referer") || "";
  const host = headersList.get("host") || "";
  const isSameOrigin = referrer.indexOf(host) >= 0;
  if (isSameOrigin) cls += " is-same-origin";*/
    cls += " is-same-origin";

    return (
        <ServerThemeProvider>
            <html lang="en">
                <head>
                    <PlausibleProvider domain="console.dev" trackOutboundLinks={true} />
                </head>
                <body className={cls}>
                    <StyledJsxRegistry>
                        <ThemeProvider>
                            <OriginProvider>
                                <PageWrapper>
                                    <div className="content">
                                        <Header />

                                        <main className="main">{children}</main>
                                        <Footer />
                                    </div>
                                </PageWrapper>
                            </OriginProvider>
                        </ThemeProvider>
                    </StyledJsxRegistry>
                </body>
            </html>
        </ServerThemeProvider>
    );
}
