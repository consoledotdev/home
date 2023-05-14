"use client";

import React from "react";
import { useMediaQuery } from "@/components/effects/use-media-query";

import { settings } from "@/app/lib/settings";

import { Tool } from "@/app/lib/tools";
import { Beta } from "@/app/lib/betas";

import PageSection from "@/components/elements/page-section";
import { consoleISODate } from "@/components/effects/utils";
import LaunchSubscribe from "@/components/compositions/launch-subscribe";
import IconProvider from "@/components/elements/icon-provider";
import FormSubscribe from "@/components/compositions/form-subscribe";
import PageSplit from "@/components/elements/page-split";
import Link from "next/link";
import SponsorDisclosure from "@/components/compositions/sponsor-disclosure";
import Category from "@/components/elements/category";
import Tag from "@/components/elements/tag";
import Button from "@/components/elements/button";

import styles from "@/app/latest/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    page: { meta: any };
    toolItems: Tool[];
    betaItems: Beta[];
}

export default function Page({ page, toolItems, betaItems, ...props }: Props) {
    const max1024 = useMediaQuery({
        w: 1024,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const max768 = useMediaQuery({
        w: 768,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const max560 = useMediaQuery({
        w: 560,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const max480 = useMediaQuery({
        w: 480,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const latestNewsletterDate = toolItems[0].date;

    return (
        <>
            <PageSection fullWidth classes={["opening"]}>
                <div className="top">
                    <div className="left">
                        <h2 className="title title-1">{page.meta.title}</h2>
                        <div className="title-extras">
                            <h4 className="title title-3">A weekly digest of the best developer tools</h4>
                        </div>
                        <p className="description">We keep track of everything - dev tools, devops, cloud, and APIs - so you don&apos;t have to.</p>
                    </div>
                    <div className="right">
                        <div className="form-wrapper">
                            <p className="small subscribers-count">
                                <IconProvider group="generic" name="console-mini-filled" />
                                26k+ subscribers
                            </p>
                            <FormSubscribe layout={max1024 ? (max768 ? (max480 ? "block" : "inline") : "block") : "inline"} />
                            <p className="small">Every Thursday.</p>
                        </div>
                    </div>
                </div>
            </PageSection>

            <PageSplit classes={["newsletter-split"]} layout="aside">
                <div>
                    <PageSection classes={["latest-newsletter page-section-plane"]}>
                        <h3 className="title title-2">Latest newsletter</h3>
                        <p className="small date">
                            {settings.forceNewsletterDate ? (
                                <>
                                    We&apos;re currently taking a short break over the holidays.
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

                    <PageSection classes={["signup"]}>
                        <LaunchSubscribe
                            layout={max768 ? "block" : "inline"}
                            formSubscribeProps={{
                                layout: max768 ? (max560 ? "block" : "inline") : "block",
                            }}
                        >
                            <h3 className="title title-3">Subscribe to the weekly Console newsletter</h3>
                            <p>An email digest of the best tools and beta releases for developers. Every Thursday.</p>
                        </LaunchSubscribe>
                    </PageSection>
                </div>

                {!max1024 && <aside></aside>}
            </PageSplit>

            <style jsx global>
                {styles}
            </style>
        </>
    );
}
