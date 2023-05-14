"use client";

import React, { useState } from "react";

import type { Beta } from "@/app/lib/betas";

import { consoleISODate } from "@/components/effects/utils";
import { settings } from "@/app/lib/settings";

import { useMediaQuery } from "@/components/effects/use-media-query";
import { useListFilters } from "@/components/effects/use-list-filters";
import { Group as GroupProps } from "@/components/effects/group-by-handler";

import PageSection from "@/components/elements/page-section";
import Link from "next/link";
import Button from "@/components/elements/button";
import PageSplit from "@/components/elements/page-split";
import LaunchSubscribe from "@/components/compositions/launch-subscribe";
import CardEmpty from "@/components/elements/card-empty";
import CardBeta from "@/components/compositions/card-beta";
import IconProvider from "@/components/elements/icon-provider";
import BoxCollapsible from "@/components/compositions/box-collapsible";
import Fixable from "@/components/elements/fixable";

import styles from "./client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    items: Beta[];
}

export default function Page({ items, ...props }: Props) {
    const lastUpdated = consoleISODate(items[0]?.date) || "n/a";

    const max1024 = useMediaQuery({
        w: 1024,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    const max900 = useMediaQuery({
        w: 900,
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

    const { filteredItems, filters } = useListFilters({
        items: items,
        search: ["name", "description"],
        sortBy: [
            { label: "Date", value: "date" },
            { label: "Name", value: "name" },
        ],
        filterBy: ["category", "tag-betas"],
        groupBy: [
            { label: "Active/GA", value: "latest-ga" },
            { label: "Category", value: "category" },
        ],
    });

    return (
        <>
            <PageSplit classes={["opening-split"]} layout="aside-list">
                <div>
                    <PageSection classes={["opening content-max-width"]}>
                        <h2 className="title title-1">Beta Console</h2>
                        <p className="description">A live list of every developer tool beta & early access release.</p>
                        <div className="page-meta">
                            <p className="small">
                                <Button
                                    appearance="text"
                                    cnslSize="small"
                                    el="anchor"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSc671E1L7fEEz0WF5Vw58WakkRsvUgIzpgk3gafcgr5mp3gng/viewform"
                                    title="Submit Beta"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    icon={{
                                        group: "generic",
                                        name: "beta",
                                    }}
                                    iconPos="left"
                                >
                                    Submit Beta
                                </Button>
                            </p>
                            <p className="small">
                                <span className="page-meta-separator"></span>
                                <Button
                                    el="anchor"
                                    href="/betas/rss.xml"
                                    title="RSS Feed"
                                    appearance="text"
                                    cnslSize="small"
                                    icon={{
                                        group: "generic",
                                        name: "rss",
                                    }}
                                    iconPos="left"
                                >
                                    Feed
                                </Button>
                            </p>
                            <p className="small">
                                <span className="page-meta-separator">&mdash;</span>
                                <span>Last updated: {lastUpdated}</span>
                            </p>
                        </div>
                    </PageSection>

                    {max1024 && (
                        <PageSection classes={["aside"]}>
                            <BoxCollapsible title="Weekly devtools newsletter" cnslStyle="blue">
                                <LaunchSubscribe
                                    cnslSize="small"
                                    cnslStyle="unboxed"
                                    layout={max768 ? "block" : "inline"}
                                    formSubscribeProps={{
                                        layout: max900 ? (max768 ? (max560 ? "block" : "inline") : "block") : "inline",
                                        cnslSize: "medium",
                                    }}
                                >
                                    <p className="small">
                                        An email digest of the best tools and beta releases for developers. Every Thursday.{" "}
                                        <Link className="link" href="/latest">
                                            See the latest email
                                        </Link>
                                    </p>
                                </LaunchSubscribe>
                            </BoxCollapsible>

                            <BoxCollapsible classes={["list-filters"]} cnslStyle="alt" title="Filters" icon={{ group: "generic", name: "filter" }}>
                                {filters("inline")}
                            </BoxCollapsible>
                        </PageSection>
                    )}
                </div>

                {!max1024 && <div></div>}
            </PageSplit>

            <PageSplit classes={["betas-split"]} layout="aside-list">
                <div>
                    <PageSection classes={["betas"]}>
                        {filteredItems.map((group: GroupProps, idx: number) => (
                            <React.Fragment key={group.field.slug + "-" + idx}>
                                <div className="heading">
                                    <h3 className="title title-2">
                                        <span>{group.field.label}</span>
                                        <span className="count">({group.items.length || 0})</span>
                                    </h3>
                                </div>
                                {group.items && group.items.map((item, idx: number) => <CardBeta key={item.id + "-" + idx} item={item} />)}
                                {!group.items ||
                                    (group.items.length < 1 && (
                                        <CardEmpty>
                                            <div className="card-empty-content">
                                                <IconProvider group="generic" name="empty" />
                                                <p className="small">404 Betas Not Found. Try changing the filters.</p>
                                            </div>
                                        </CardEmpty>
                                    ))}
                            </React.Fragment>
                        ))}
                    </PageSection>

                    <PageSection classes={["signup"]}>
                        <LaunchSubscribe
                            layout={max768 ? "block" : "inline"}
                            formSubscribeProps={{
                                layout: max768 ? (max560 ? "block" : "inline") : "block",
                            }}
                        >
                            <h3 className="title title-3">Weekly devtools newsletter</h3>
                            <p>
                                An email digest of the best tools and beta releases for developers. Every Thursday.{" "}
                                <Link className="link" href="/latest">
                                    See the latest email
                                </Link>
                            </p>
                        </LaunchSubscribe>
                    </PageSection>
                </div>

                {!max1024 && (
                    <aside>
                        <Fixable bounds={{ top: 80, bottom: 0 }}>
                            <LaunchSubscribe cnslSize="small" cnslStyle="unboxed" layout="block" contentAfter={<p className="small">Join {settings.subscribersCount}+ developers</p>}>
                                <h6 className="title title-5">Weekly devtools newsletter</h6>
                            </LaunchSubscribe>

                            {filters("block")}
                        </Fixable>
                    </aside>
                )}
            </PageSplit>

            <style jsx global>
                {styles}
            </style>
        </>
    );
}
