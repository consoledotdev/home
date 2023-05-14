"use client";

import React, { useState } from "react";

import type { ProfileMeta } from "@/app/lib/profiles";

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
import CardProfile from "@/components/compositions/card-profile";
import IconProvider from "@/components/elements/icon-provider";
import BoxCollapsible from "@/components/compositions/box-collapsible";
import Fixable from "@/components/elements/fixable";

import styles from "./client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    items: {
        meta: ProfileMeta;
    }[];
}

export default function Page({ items, ...props }: Props) {
    const lastUpdated = consoleISODate(items[0]?.meta.date) || "n/a";

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
        items: items.map((item) => item.meta),
        search: ["title", "summary"],
        sortBy: [
            { label: "Date", value: "date" },
            { label: "Name", value: "title" },
        ],
        startSortBy: "title",
        filterBy: ["category", "tag-profiles", "tech"],
        groupBy: [
            { label: "None", value: "none" },
            { label: "Category", value: "category" },
        ],
    });

    filteredItems.map((g: GroupProps) => {
        if (g.field.label == "") g.field.label = "All Companies";
        if (g.field.slug == "") g.field.slug = "all-companies";
    });

    return (
        <>
            <PageSplit classes={["opening-split"]} layout="aside-list">
                <div>
                    <PageSection classes={["opening content-max-width"]}>
                        <h2 className="title title-1">Devtools company profiles</h2>
                        <p className="description">Behind the scenes of how the best devtools companies run engineering.</p>
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
                                        Our free weekly newsletter picks out the 3 most interesting tools.{" "}
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

            <PageSplit classes={["profiles-split"]} layout="aside-list">
                <div>
                    <PageSection classes={["profiles"]}>
                        {filteredItems.map((group: GroupProps, idx: number) => (
                            <React.Fragment key={group.field.slug + "-" + idx}>
                                <div className="heading">
                                    <h3 className="title title-2">
                                        <span>{group.field.label}</span>
                                        <span className="count">({group.items.length || 0})</span>
                                    </h3>
                                </div>
                                {group.items && group.items.map((item, idx: number) => <CardProfile key={item.slug + "-" + idx} item={item} />)}
                                {!group.items ||
                                    (group.items.length < 1 && (
                                        <CardEmpty>
                                            <div className="card-empty-content">
                                                <IconProvider group="generic" name="empty" />
                                                <p className="small">404 Profiles Not Found. Try changing the filters.</p>
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
