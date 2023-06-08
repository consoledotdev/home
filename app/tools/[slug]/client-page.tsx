"use client";

import { createRef, useRef } from "react";

import type { Tool } from "@/app/lib/tools";
import type { PodcastMeta } from "@/app/lib/podcasts";
import type { InterviewMeta } from "@/app/lib/interviews";
import { ProfileMeta } from "@/app/lib/profiles";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { customMDXComponents, h5 } from "@/mdx-components";
import { GetTheme } from "@/components/providers/theme-provider";

import { consoleISODate, extractHostname, extractTwitterHandle, formatPodcastSeasonEpisode, getRandomBadgeColor } from "@/components/effects/utils";

import Link from "next/link";
import ImageProvider from "@/components/elements/image-provider";
import PageSection from "@/components/elements/page-section";
import Button from "@/components/elements/button";
import IconProvider from "@/components/elements/icon-provider";
import Category from "@/components/elements/category";
import Tag from "@/components/elements/tag";
import PageSplit from "@/components/elements/page-split";
import SponsorDisclosure from "@/components/compositions/sponsor-disclosure";
import Badge from "@/components/elements/badge";
import Tooltip from "@/components/elements/tooltip";
import FramedSection from "@/components/elements/framed-section";
import AboutConsole from "@/components/compositions/about-console";
import TOC from "@/components/compositions/toc";
import LaunchSubscribe from "@/components/compositions/launch-subscribe";
import VendorThumbnail from "@/components/compositions/vendor-thumbnail";
import RichTitle from "@/components/elements/rich-title";

import styles from "@/app/tools/[slug]/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    tool: Tool;
    podcast?: {
        meta: PodcastMeta;
        highlights: MDXRemoteSerializeResult;
    };
    interview?: {
        meta: InterviewMeta;
        highlights: MDXRemoteSerializeResult;
    };
    profile?: {
        meta: ProfileMeta;
        highlights: MDXRemoteSerializeResult;
    };
}

export default function Page({ tool, podcast, interview, profile, ...props }: Props) {
    const badgeRef = useRef<HTMLDivElement>(null);

    // get theme provider info
    const theme = GetTheme();

    let rel = "noopener noreferrer";
    if (tool.sponsored || tool.investment) rel += " sponsored";

    if (tool.screenshot?.length <= 0) {
        tool.screenshot = "/";
    } else {
        tool.screenshot = "/img/" + tool.screenshot;
    }

    let tocItems = [];
    if (podcast)
        tocItems.push({
            href: "devtools-podcast",
            label: "Devtools Podcast",
        });
    if (interview)
        tocItems.push({
            href: "developer-interview",
            label: "Developer Interview",
        });
    if (profile)
        tocItems.push({
            href: "engineering-profile",
            label: "Engineering Profile",
        });

    const tocHook = createRef<HTMLDivElement>();
    const tocContentStartRef = createRef<HTMLDivElement>();
    const tocContentEndRef = createRef<HTMLElement>();

    return (
        <>
            <PageSection fullWidth classes={["pre-opening"]}>
                <div className="path">
                    <Button
                        appearance="text"
                        cnslColor="triad-01"
                        icon={{
                            group: "generic",
                            name: "tool",
                        }}
                        iconPos="left"
                        el="anchor"
                        href="/tools/"
                        title="Tools"
                    >
                        Devtool Review
                    </Button>{" "}
                    <p className="x-small">
                        — Each week, <span className="text-italic text-medium">console</span> reviews the best tools for developers.{" "}
                        <Link className="link" href="/">
                            Subscribe
                        </Link>
                    </p>
                </div>
                <div className="badge-wrapper" ref={badgeRef}>
                    <Badge theme={theme == "light" ? "light" : "dark"} vertical type="ribbon" color={getRandomBadgeColor()} border={false} />
                    <Tooltip classes={["badge-tooltip"]} cnslSize="small" position="bottom" anchorRef={badgeRef} alignment="right">
                        <p>
                            Let your site visitors know you’ve been featured.
                            <br />
                            <a href="/badges" className="link icon-left">
                                <IconProvider group="generic" name="badges" />
                                <span>Get your badge</span>
                            </a>
                        </p>
                    </Tooltip>
                </div>
            </PageSection>

            <PageSection fullWidth classes={["opening split peer"]}>
                <div className="left">
                    <div className="company-heading">
                        <VendorThumbnail
                            imageProvider={{
                                width: "96",
                                height: "96",
                                src: "/img/" + tool.favicon,
                                alt: tool.name,
                            }}
                        />
                        <div className="company-heading-text">
                            <h2 className="title title-1">{tool.name}</h2>
                            <p className="inline-items small">
                                <a href={tool.url} rel={rel} className="link icon-left">
                                    <IconProvider group="generic" name="link" />
                                    <span>{extractHostname(tool.url)}</span>
                                </a>
                                {tool.twitter !== "" ? (
                                    <>
                                        <a href={tool.twitter} target="_blank" rel="noreferrer" className="link icon-left">
                                            <IconProvider group="external" name="twitter" />
                                            <span>{extractTwitterHandle(tool.twitter)}</span>
                                        </a>
                                    </>
                                ) : null}
                            </p>
                        </div>
                    </div>
                    <p className="intro">{tool.description}</p>
                    <div className="inline-items">
                        <Category
                            category={{
                                main: tool.category.main,
                                sub: tool.category.sub,
                            }}
                            cnslSize="large"
                            inline
                        />
                        <Tag tag={tool.type} cnslSize="large" inline />
                    </div>
                </div>
                {/*<div className="right">
          <ImageProvider src={tool.screenshot} alt={tool.name} />
            </div>*/}
            </PageSection>

            <PageSection fullWidth classes={["review"]}>
                <h5 className="title title-5">Our review</h5>
                <div className="split peer">
                    <div className="left">
                        <RichTitle tag="h3" icon={{ group: "generic", name: "like" }}>
                            What we like
                        </RichTitle>
                        <p>{tool.like}</p>
                    </div>
                    <div className="right">
                        <RichTitle tag="h3" icon={{ group: "generic", name: "dislike" }}>
                            What we don&apos;t like
                        </RichTitle>
                        <p>{tool.dislike}</p>
                    </div>
                </div>
                <div className="meta">
                    <p className="small">
                        <>Reviewed: {consoleISODate(tool.date)}</>
                    </p>
                    {(tool.sponsored || tool.investment) && <SponsorDisclosure onItem layout="tooltip" cnslSize="large" />}
                </div>
            </PageSection>

            <PageSplit>
                <div className="content-max-width">
                    <span ref={tocContentStartRef}></span>

                    {podcast && (
                        <PageSection classes={["podcast"]} inPageAnchor="devtools-podcast">
                            <Button
                                appearance="text"
                                cnslColor="triad-03"
                                icon={{
                                    group: "generic",
                                    name: "podcast",
                                }}
                                iconPos="left"
                            >
                                Devtools Podcast
                            </Button>

                            <div className="console-separator"></div>

                            <div className="heading">
                                <h2 className="title title-2">{podcast.meta.title}</h2>
                                <h4 className="title title-4">with {podcast.meta.who}</h4>
                                <p className="small">
                                    <span className="text-italic">{formatPodcastSeasonEpisode(podcast.meta.season, podcast.meta.episode)}</span> — {consoleISODate(podcast.meta.date)}
                                </p>
                            </div>

                            <div className="highlights">
                                <h5 className="title title-5">Highlights</h5>
                                <FramedSection appearance="overlay" size="compact">
                                    <MDXRemote
                                        {...podcast.highlights}
                                        components={{
                                            ...customMDXComponents,
                                            // @ts-ignore
                                            ImageProvider,
                                            p: (props: any) => <p className="small text-default" {...props} />,
                                        }}
                                    />
                                </FramedSection>
                            </div>

                            <div className="related-content-link-launch">
                                <IconProvider group="generic" name="play-dot" />
                                <Button
                                    el="link"
                                    href={"/podcast/" + tool.podcast}
                                    title={podcast.meta.title}
                                    appearance="text"
                                    icon={{
                                        group: "generic",
                                        name: "arrow-right",
                                    }}
                                    iconPos="right"
                                >
                                    Play the full episode
                                </Button>
                            </div>
                        </PageSection>
                    )}

                    {interview && (
                        <PageSection classes={["interview"]} inPageAnchor="developer-interview">
                            <Button
                                el="link"
                                href={"/interviews/" + tool.interview}
                                appearance="text"
                                cnslColor="triad-03"
                                icon={{
                                    group: "generic",
                                    name: "console-interview",
                                }}
                                iconPos="left"
                            >
                                Developer Interview
                            </Button>

                            <div className="console-separator"></div>

                            <div className="heading">
                                <h2 className="title title-2">
                                    With {interview.meta.who}, {interview.meta.role}
                                </h2>
                                <p className="small">{consoleISODate(interview.meta.date)}</p>
                            </div>

                            <div className="highlights">
                                <FramedSection appearance="overlay" size="compact">
                                    <MDXRemote
                                        {...interview.highlights}
                                        components={{
                                            ...customMDXComponents,
                                            // @ts-ignore
                                            ImageProvider,
                                            p: (props: any) => <p className="small text-default" {...props} />,
                                            h3: (props: any) => h5(props),
                                        }}
                                    />
                                </FramedSection>
                            </div>

                            <div className="related-content-link-launch">
                                <Button
                                    el="link"
                                    href={"/interviews/" + tool.interview}
                                    title={interview.meta.title}
                                    appearance="text"
                                    icon={{
                                        group: "generic",
                                        name: "arrow-right",
                                    }}
                                    iconPos="right"
                                >
                                    Read the full interview
                                </Button>
                            </div>
                        </PageSection>
                    )}

                    {profile && (
                        <PageSection classes={["profile"]} inPageAnchor="engineering-profile">
                            <Button
                                appearance="text"
                                el="link"
                                href={"/profiles/" + tool.profile}
                                cnslColor="yellow"
                                icon={{
                                    group: "generic",
                                    name: "jobs",
                                }}
                                iconPos="left"
                            >
                                Engineering Profile
                            </Button>

                            <div className="console-separator"></div>

                            <div className="company-heading">
                                <VendorThumbnail
                                    imageProvider={{
                                        width: "64",
                                        height: "64",
                                        src: profile.meta.companyInfo.favicon,
                                        alt: profile.meta.title,
                                    }}
                                />
                                <div className="company-heading-text">
                                    <h2 className="title title-2">{profile.meta.title}</h2>
                                    <p className="inline-items small">
                                        <a href={profile.meta.companyInfo.url} target="_blank" rel="noreferrer" className="link icon-left">
                                            <IconProvider group="generic" name="link" />
                                            {profile.meta.companyInfo.url.split("?")[0]}
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <p className="intro">{profile.meta.companyInfo.description}</p>

                            <div className="highlights">
                                <FramedSection appearance="overlay" size="compact">
                                    <p className="small text-default">{profile.meta.companyInfo.product.description}</p>
                                    <MDXRemote
                                        {...profile.highlights}
                                        components={{
                                            ...customMDXComponents,
                                            // @ts-ignore
                                            ImageProvider,
                                            p: (props: any) => <p className="small text-default" {...props} />,
                                            h3: (props: any) => h5(props),
                                        }}
                                    />
                                </FramedSection>
                            </div>

                            <div className="related-content-link-launch">
                                <Button
                                    el="link"
                                    href={"/profiles/" + tool.profile}
                                    title={profile.meta.title}
                                    appearance="text"
                                    icon={{
                                        group: "generic",
                                        name: "arrow-right",
                                    }}
                                    iconPos="right"
                                >
                                    See the full profile
                                </Button>
                            </div>
                        </PageSection>
                    )}

                    <PageSection classes={["about"]}>
                        <span className="toc-content-end-ref" ref={tocContentEndRef}></span>
                        <AboutConsole after={<SponsorDisclosure />} />
                    </PageSection>

                    <PageSection classes={["signup"]}>
                        <LaunchSubscribe
                            ctaBoxProps={{
                                appearance: "light",
                            }}
                        >
                            <h3 className="title title-3">Subscribe to the weekly Console newsletter</h3>
                            <p>
                                Our free weekly newsletter features the latest interesting tools.{" "}
                                <Link className="link" href="/latest">
                                    See the latest email
                                </Link>
                            </p>
                        </LaunchSubscribe>
                    </PageSection>
                </div>

                <aside ref={tocHook}>{tocItems.length > 1 && <TOC items={tocItems} hook={tocHook} contentStartRef={tocContentStartRef} contentEndRef={tocContentEndRef} />}</aside>
            </PageSplit>

            {props.children}
            <style jsx global>
                {styles}
            </style>
        </>
    );
}
