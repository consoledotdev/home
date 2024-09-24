"use client";

import React, { useLayoutEffect } from "react";

import { settings } from "@/app/lib/settings";
import { Tool } from "@/app/lib/tools";
import { Beta } from "@/app/lib/betas";

import { GetTheme } from "@/components/providers/theme-provider";

import { categories } from "@/components/effects/filters-handler";
import { useMediaQuery } from "@/components/effects/use-media-query";

import scrollAppearance from "@/app/landing/scroll-appearance";
import { consoleISODate } from "@/components/effects/utils";

import Link from "next/link";
import ImageProvider from "@/components/elements/image-provider";
import PageSection from "@/components/elements/page-section";
import NeonPlanes from "@/components/elements/neon-planes";
import Category from "@/components/elements/category";
import Button from "@/components/elements/button";
import IconProvider from "@/components/elements/icon-provider";
import PageSplit from "@/components/elements/page-split";
import Tag from "@/components/elements/tag";
import FormSubscribe from "@/components/compositions/form-subscribe";
import SponsorDisclosure from "@/components/compositions/sponsor-disclosure";

import baseStyles from "@/app/landing/landing.scss";
import styles from "./client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    page: { meta: any };
    toolItems: Tool[];
    betaItems: Beta[];
}

export default function Page({ page, toolItems, betaItems, ...props }: Props) {
    // get theme provider info
    const theme = GetTheme();

    const max1024 = useMediaQuery({
        w: 1024,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const max560 = useMediaQuery({
        w: 560,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    useLayoutEffect(scrollAppearance, []);

    const latestNewsletterDate = toolItems[0].date;

    return (
        <>
            <PageSection classes={["opening"]}>
                <div className="top">
                    <h2 className="title title-1">Discover the best tools for developers</h2>
                    <p className="description">A free weekly email digest of the best tools and beta releases for developers.</p>
                    <FormSubscribe layout={max560 ? "block" : "inline"} />
                    <p>
                        Every Thursday.{" "}
                        <Button
                            appearance="text"
                            icon={{
                                group: "generic",
                                name: "scroll-down",
                            }}
                            iconPos="right"
                            el="anchor"
                            href="#latest-newsletter"
                            title="Read the latest email"
                        >
                            Read the latest email
                        </Button>
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

            <span data-checkpoint-latest-newsletter id="latest-newsletter"></span>

            <div className="console-separator light"></div>

            <PageSplit classes={["newsletter-split"]} layout="aside">
                <div>
                    <PageSection classes={["latest-newsletter"]}>
                        <h3 className="title title-2">Latest Console newsletter</h3>
                        <p>
                            <span className="text-medium">A weekly digest of the best developer tools</span> – We keep track of everything - dev tools, devops, cloud, and APIs - so you don&apos;t have to.
                        </p>
                        <p className="small date">
                            {settings.forceNewsletterDate ? (
                                <>
                                    We&apos;re currently taking a short break.
                                    <br />
                                    This was the content of the newsletter sent on {settings.forceNewsletterDate}. We&apos;ll be back on {settings.returnNewsletterDate}.
                                </>
                            ) : (
                                <>This is the content of the newsletter sent on {consoleISODate(latestNewsletterDate)}.</>
                            )}
                        </p>

                        <h4 className="title title-3">Contents</h4>
                        <div className="latest-newsletter-list">
                            {toolItems.map((item: Tool, idx: number) => {
                                return (
                                    <p key={"summary-tool-item-" + idx}>
                                        <IconProvider group="generic" name="tool" />
                                        <a href={item.url} className="link" target="_blank" rel={"noreferrer noopener" + (item.sponsored ? " sponsored" : "")}>
                                            {item.name}
                                        </a>{" "}
                                        – {item.description}
                                    </p>
                                );
                            })}
                            {betaItems.map((item: Beta, idx: number) => {
                                return (
                                    <p key={"summary-beta-item-" + idx}>
                                        <IconProvider group="generic" name="beta" />
                                        <a href={item.url} className="link" target="_blank" rel="noreferrer noopener">
                                            {item.name}
                                        </a>{" "}
                                        – {item.description}
                                    </p>
                                );
                            })}
                        </div>

                        <h3 className="title title-2">Interesting tools</h3>
                        <p>
                            Each week we review 2-3 of the most interesting developer tools. Here&apos;s what we featured this week.{" "}
                            <Link href="/tools" className="link">
                                View the full archive
                            </Link>
                            .
                        </p>
                        {toolItems.map((item: Tool, idx: number) => {
                            return (
                                <div key={"tool-item-" + idx} className="latest-newsletter-item">
                                    <h4 className="title title-3">
                                        <a className="link" href={item.url} target="_blank" rel={"noreferrer noopener" + (item.sponsored ? " sponsored" : "")}>
                                            {item.name}
                                        </a>
                                    </h4>
                                    <h6 className="title title-5">{item.description}</h6>
                                    <p>
                                        <b>What we like:</b> {item.like}
                                    </p>
                                    <p>
                                        <b>What we don&apos;t like:</b> {item.dislike}
                                    </p>
                                    {item.sponsored && <SponsorDisclosure />}
                                    <Button
                                        appearance="text"
                                        cnslColor="triad-01"
                                        cnslSize="medium"
                                        icon={{
                                            group: "generic",
                                            name: "tool",
                                        }}
                                        iconPos="left"
                                        el="anchor"
                                        href={"/tools/" + item.slug}
                                        title={item.name + " full review"}
                                    >
                                        Review permalink
                                    </Button>
                                </div>
                            );
                        })}

                        <h3 className="title title-2">New betas &amp; early release programs</h3>
                        {betaItems.length > 0 ? (
                            <>
                                <p>
                                    We also include some of the more interesting beta and early access releases. Here&apos;s the ones we featured this week. View the live list on{" "}
                                    <Link href="/betas" className="link">
                                        Beta Console
                                    </Link>
                                    .
                                </p>

                                {betaItems.map((item: Beta, idx: number) => {
                                    return (
                                        <div key={"beta-item-" + idx} className="latest-newsletter-item">
                                            <h4 className="title title-3">
                                                <a href={item.url} className="link" target="_blank" rel={"noreferrer noopener" + (item.sponsored ? "sponsored" : "")}>
                                                    {item.name}
                                                </a>
                                            </h4>
                                            <h6 className="title title-5">{item.description}</h6>

                                            <div className="inline-items">
                                                <Category
                                                    category={{
                                                        main: item.category.main,
                                                    }}
                                                    cnslSize="small"
                                                    inline
                                                />
                                                <Tag
                                                    tag={{
                                                        ...item.type,
                                                        label: item.type.label + ", " + item.access + " access",
                                                    }}
                                                    cnslSize="small"
                                                    inline
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <p>
                                Nothing of note this week. We only feature the most interesting beta releases you should actually check out. In the meantime, have a look at
                                <Link href="/betas" className="link">
                                    Beta Console
                                </Link>{" "}
                                our live list of every developer tool and early access release.
                            </p>
                        )}
                    </PageSection>
                </div>

                {!max1024 && <aside></aside>}
            </PageSplit>

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
