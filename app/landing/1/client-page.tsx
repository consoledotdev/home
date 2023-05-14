"use client";

import React, { useLayoutEffect } from "react";

import { settings } from "@/app/lib/settings";

import { GetTheme } from "@/components/providers/theme-provider";

import { useMediaQuery } from "@/components/effects/use-media-query";

import { categories } from "@/components/effects/filters-handler";
import scrollAppearance from "@/app/landing/scroll-appearance";

import Link from "next/link";
import ImageProvider from "@/components/elements/image-provider";
import PageSection from "@/components/elements/page-section";
import FormSubscribe from "@/components/compositions/form-subscribe";
import NeonPlanes from "@/components/elements/neon-planes";
import Category from "@/components/elements/category";
import Button from "@/components/elements/button";
import IconProvider from "@/components/elements/icon-provider";

import baseStyles from "@/app/landing/landing.scss";
import styles from "./client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    page: { meta: any };
}

export default function Page({ page, ...props }: Props) {
    // get theme provider info
    const theme = GetTheme();

    const max560 = useMediaQuery({
        w: 560,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    useLayoutEffect(scrollAppearance, []);

    return (
        <>
            <PageSection classes={["opening"]}>
                <div className="top">
                    <h2 className="title title-1">Discover the best tools for developers</h2>
                    <p className="description">A free weekly email digest of the best tools and beta releases for developers.</p>
                    <FormSubscribe layout={max560 ? "block" : "inline"} />
                    <p>
                        Every Thursday.{" "}
                        <Link className="link" href="/latest">
                            See the latest email
                        </Link>
                    </p>
                </div>
                <div className="bottom">
                    {theme == "dark" && <ImageProvider src="/img/landing/newsletter-dark.png" alt="Console Newsletter" />}
                    {theme == "light" && <ImageProvider src="/img/landing/newsletter-light.png" alt="Console Newsletter" />}
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

            <PageSection classes={["what-we-do-1"]}>
                <div className="top">
                    <h3 className="title title-2">Interesting tools & new betas</h3>
                    <span data-checkpoint-other-content></span>
                    <ul>
                        <li>2-3 developer tool recommendations.</li>
                        <li>3-5 interesting new beta releases.</li>
                        <li>Interviews with the people behind the tools.</li>
                    </ul>
                    <Button
                        appearance="text"
                        icon={{
                            group: "generic",
                            name: "arrow-right",
                        }}
                        el="link"
                        iconPos="right"
                        href="/tools"
                        title="See all developer tool reviews"
                    >
                        <span className="long">Check out all our past reviews</span>
                        <span className="short">See past reviews</span>
                    </Button>
                </div>
                <div className="bottom">
                    <div className="neon-planes-wrapper">
                        <NeonPlanes cnslType="two" />
                    </div>
                    <div className="categories-wrapper">
                        {categories.map((c, idx) => (
                            <Category
                                key={c.slug + "-" + idx}
                                category={{
                                    main: {
                                        label: c.label,
                                        slug: c.slug,
                                    },
                                }}
                            />
                        ))}
                    </div>
                </div>
            </PageSection>

            <div className="console-separator light"></div>

            <PageSection classes={["what-we-do-2"]}>
                <div className="col">
                    <IconProvider group="generic" name="tool" />
                    <h4 className="title title-3">Only the most interesting new tools</h4>
                    <p>We use our years of development experience to review and recommend the best tools.</p>
                </div>
                <div className="col">
                    <IconProvider group="generic" name="beta" />
                    <h4 className="title title-3">Access the latest beta releases</h4>
                    <p>We keep track of all the latest news and releases, highlighting the most interesting announcements.</p>
                </div>
                <div className="col">
                    <IconProvider group="generic" name="console-mini" />
                    <h4 className="title title-3">All tools must meet our selection criteria</h4>
                    <p>
                        All reviews are independently assessed against our strict{" "}
                        <Link className="link" href="/selection-criteria">
                            selection criteria
                        </Link>
                        .
                    </p>
                </div>
            </PageSection>

            <PageSection classes={["cta"]}>
                <div className="neon-planes-wrapper">
                    <NeonPlanes cnslType="all" />
                </div>
                <div className="subscribe-cta">
                    <h4 className="title title-3">Discover the best tools for developers</h4>
                    <FormSubscribe layout={max560 ? "block" : "inline"} />
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
