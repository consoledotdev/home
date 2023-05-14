"use client";

import React from "react";

import { settings } from "@/app/lib/settings";

import { useMediaQuery } from "@/components/effects/use-media-query";

import { GetTheme } from "@/components/providers/theme-provider";

import Link from "next/link";
import ImageProvider from "@/components/elements/image-provider";
import PageSection from "@/components/elements/page-section";
import FormSubscribe from "@/components/compositions/form-subscribe";
import NeonPlanes from "@/components/elements/neon-planes";
import RichTitle from "@/components/elements/rich-title";

import baseStyles from "@/app/landing/landing.scss";
import styles from "./client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    page: { meta: any };
}

export default function Page({ page, ...props }: Props) {
    // get theme provider info
    const theme = GetTheme();

    const min723 = useMediaQuery({
        w: 723,
        op: "min",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const max480 = useMediaQuery({
        w: 480,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    return (
        <>
            <PageSection classes={["opening"]}>
                <div className="top">
                    <h2 className="title title-1">Discover the best tools for developers</h2>
                    <h4 className="title title-3">A weekly digest of the best tools and beta releases.</h4>
                    <p className="description">We keep track of everything new - dev tools, devops, open source, cloud, APIs... so you don&apos;t have to.</p>
                </div>
                <div className="bottom">
                    <div className="neon-planes-wrapper">
                        <NeonPlanes cnslType="all" />
                    </div>
                    <div className="content-wrapper">
                        <RichTitle tag="h5" icon={{ group: "generic", name: "console-mini" }}>
                            Console Weekly
                        </RichTitle>
                        <FormSubscribe layout={min723 ? "block" : max480 ? "block" : "inline"} />
                        <p>Free. Sent every Thursday. </p>
                    </div>
                </div>
            </PageSection>

            <PageSection classes={["page-section-plane trust-signals"]}>
                <div className="top">
                    <h3 className="title title-2 rich-title">Trusted by {settings.subscribersCount}+ developers</h3>
                    <p className="quote">
                        <span>
                            “If you&apos;re interested in cool new developer tools check out Console it&apos;s a great, short and sharp roundup newsletter, well worth a follow” <span>James Governor, Co-founder, RedMonk</span>
                        </span>
                    </p>
                </div>
                <div className="bottom">
                    <p>Join subscribers from:</p>
                    <div className="logo-cloud-artwork">
                        <div className="logo-cloud">
                            {theme == "dark" && (
                                <>
                                    <ImageProvider className="image" src="/img/landing/company-logo-github-dark.png" alt="GitHub" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-atlassian-dark.png" alt="Atlassian" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-microsoft-dark.png" alt="Microsoft" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-cloudflare-dark.png" alt="Cloudflare" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-adobe-dark.png" alt="Adobe" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-sourcegraph-dark.png" alt="Sourcegraph" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-twilio-dark.png" alt="Twilio" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-snyk-dark.png" alt="Snyk" />
                                </>
                            )}
                            {theme == "light" && (
                                <>
                                    <ImageProvider className="image" src="/img/landing/company-logo-github-light.png" alt="GitHub" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-atlassian-light.png" alt="Atlassian" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-microsoft-light.png" alt="Microsoft" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-cloudflare-light.png" alt="Cloudflare" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-adobe-light.png" alt="Adobe" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-sourcegraph-light.png" alt="Sourcegraph" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-twilio-light.png" alt="Twilio" />
                                    <ImageProvider className="image" src="/img/landing/company-logo-snyk-light.png" alt="Snyk" />
                                </>
                            )}
                        </div>
                        <div className="vapor-globe"></div>
                    </div>
                </div>
            </PageSection>

            <style jsx global>
                {baseStyles}
            </style>
            <style jsx global>
                {styles}
            </style>
        </>
    );
}
