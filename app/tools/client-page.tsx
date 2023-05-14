"use client";

import React, { useState } from "react";

import type { Tool } from "@/app/lib/tools";

import { consoleISODate } from "@/components/effects/utils";
import { settings } from "@/app/lib/settings";

import { useMediaQuery } from "@/components/effects/use-media-query";
import { useListFilters } from "@/components/effects/use-list-filters";
import { Group as GroupProps } from "@/components/effects/group-by-handler";

import PageSection from "@/components/elements/page-section";
import SponsorDisclosure from "@/components/compositions/sponsor-disclosure";
import Link from "next/link";
import Button from "@/components/elements/button";
import PageSplit from "@/components/elements/page-split";
import LaunchSubscribe from "@/components/compositions/launch-subscribe";
import CardEmpty from "@/components/elements/card-empty";
import IconProvider from "@/components/elements/icon-provider";
import CardTool from "@/components/compositions/card-tool";
import BoxCollapsible from "@/components/compositions/box-collapsible";
import Fixable from "@/components/elements/fixable";

import styles from "@/app/tools/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    items: Tool[];
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

    let { filteredItems, filters } = useListFilters({
        items: items,
        search: ["name", "like", "dislike", "description"],
        sortBy: [
            { label: "Date", value: "date" },
            { label: "Name", value: "name" },
        ],
        filterBy: ["category", "tag-tools"],
        groupBy: [
            { label: "None", value: "none" },
            { label: "Category", value: "category" },
        ],
    });

    filteredItems.map((g: GroupProps) => {
        if (g.field.label == "") g.field.label = "Latest Tools";
        if (g.field.slug == "") g.field.slug = "latest-tools";
    });

    return (
        <>
            <PageSplit classes={["opening-split"]} layout="aside-list">
                <div>
                    <PageSection classes={["opening content-max-width"]}>
                        <h2 className="title title-1">Devtool reviews</h2>
                        <p className="description">Each week Console reviews the best tools for developers.</p>
                        <div className="page-meta">
                            <p className="small">
                                <Button
                                    appearance="text"
                                    cnslSize="small"
                                    el="anchor"
                                    href="mailto:hello@console.dev"
                                    title="Submit Tool"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    icon={{
                                        group: "generic",
                                        name: "tool",
                                    }}
                                    iconPos="left"
                                >
                                    Submit Tool
                                </Button>
                            </p>
                            <p className="small">
                                <span className="page-meta-separator"></span>
                                <Button
                                    el="anchor"
                                    href="/tools/rss.xml"
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
                        <SponsorDisclosure />
                    </PageSection>

                    {max1024 && (
                        <PageSection classes={["aside"]}>
                            <BoxCollapsible title="Interesting Tools by email" cnslStyle="blue">
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
                                        Our free weekly newsletter picks out the 2-3 most interesting tools.{" "}
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

            <PageSplit classes={["tools-split"]} layout="aside-list">
                <div>
                    <PageSection classes={["tools"]}>
                        {filteredItems.map((group: GroupProps, idx: number) => (
                            <React.Fragment key={group.field.slug + "-" + idx}>
                                <div className="heading">
                                    <h3 className="title title-2">
                                        <span>{group.field.label}</span>
                                        <span className="count">({group.items.length || 0})</span>
                                    </h3>
                                </div>
                                {group.items && group.items.map((item) => <CardTool key={item.slug} item={item} />)}
                                {!group.items ||
                                    (group.items.length < 1 && (
                                        <CardEmpty>
                                            <div className="card-empty-content">
                                                <IconProvider group="generic" name="empty" />
                                                <p className="small">404 Tools Not Found. Try changing the filters.</p>
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
                            <h3 className="title title-3">Interesting Tools by email</h3>
                            <p>
                                Our free weekly newsletter picks out the 2-3 most interesting tools.{" "}
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
                                <h6 className="title title-5">Interesting Tools by email</h6>
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
