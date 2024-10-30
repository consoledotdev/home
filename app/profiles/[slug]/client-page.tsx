"use client";

import React, { createRef } from "react";

import { useMediaQuery } from "@/components/effects/use-media-query";

import { hydrate } from "next-mdx-remote-client";
import { customMDXComponents } from "@/mdx-components";

import { ProfileMeta } from "@/app/lib/profiles";
import { PodcastMeta } from "@/app/lib/podcasts";
import { InterviewMeta } from "@/app/lib/interviews";

import PageSection from "@/components/elements/page-section";
import ImageProvider from "@/components/elements/image-provider";
import RichTitle from "@/components/elements/rich-title";
import PageSplit from "@/components/elements/page-split";
import Button from "@/components/elements/button";
import VendorThumbnail from "@/components/compositions/vendor-thumbnail";
import IconProvider from "@/components/elements/icon-provider";
import { consoleISODate, extractHostname, formatPodcastSeasonEpisode } from "@/components/effects/utils";
import FramedSection from "@/components/elements/framed-section";
import SimpleTable, { Cell as SimpleTableCell } from "@/components/compositions/simple-table";
import AboutConsole from "@/components/compositions/about-console";
import LaunchSubscribe from "@/components/compositions/launch-subscribe";
import Link from "next/link";
import TOC from "@/components/compositions/toc";
import AsideBlock from "@/components/elements/aside-block";

import styles from "@/app/profiles/[slug]/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    profile: {
        meta: ProfileMeta;
        content: any;
    };
    podcast?: {
        meta: PodcastMeta;
        highlights: any;
    };
    interview?: {
        meta: InterviewMeta;
        highlights: any;
    };
}

export default function Page({ profile, podcast, interview, ...props }: Props) {
    const components = { ...customMDXComponents, ImageProvider, RichTitle };
    const { content, mod, error } = hydrate({ ...profile.content, components });

    let rel = "noopener noreferrer";

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

    let tocItems = [
        {
            href: "wrapper-1",
            label: "How engineering works",
        },
        {
            href: "wrapper-2",
            label: "Hiring process",
        },
        {
            href: "jobs",
            label: "Jobs",
        },
    ];

    const tocHook = createRef<HTMLDivElement>();
    const tocContentStartRef = createRef<HTMLDivElement>();
    const tocContentEndRef = createRef<HTMLElement>();

    const moreOnConsole = () => {
        let T = (props: any) => {
            return max1024 ? <h3 className="title title-2" {...props} /> : <h5 className="title title-4" {...props} />;
        };
        let TItem = (props: any) => <h4 className="title title-3" {...props} />;
        let P = (props: any) => {
            return max1024 ? <p {...props} /> : <p className="small" {...props} />;
        };
        let PSmall = (props: any) => {
            return max1024 ? <p className="small" {...props} /> : <p className="xx-small" {...props} />;
        };

        return (
            <AsideBlock
                top={
                    <div className="page-section-heading">
                        <T>More on Console</T>
                    </div>
                }
                items={[
                    {
                        name: "podcast",
                        content: (
                            <>
                                {podcast && (
                                    <>
                                        <TItem>
                                            <a className="link icon-left" href={podcast.meta.slug} title={podcast.meta.title} rel={rel}>
                                                <IconProvider group="generic" name="podcast" />
                                                <span>Podcast</span>
                                            </a>
                                        </TItem>
                                        <div className="aside-item-title-extras">
                                            <P>with {podcast.meta.who}</P>
                                            {podcast.meta.role && <PSmall>{podcast.meta.role}</PSmall>}
                                        </div>
                                        <div className="aside-item-meta">
                                            <P className="episode-no">{formatPodcastSeasonEpisode(podcast.meta.season, podcast.meta.episode)}</P>
                                        </div>
                                    </>
                                )}
                            </>
                        ),
                    },
                    {
                        name: "interview",
                        content: (
                            <>
                                {interview && (
                                    <>
                                        <TItem>
                                            <a className="link icon-left" href={"/interviews/" + interview.meta.slug} title={interview.meta.title} rel={rel}>
                                                <IconProvider group="generic" name="console-interview" />
                                                <span>Q&A</span>
                                            </a>
                                        </TItem>
                                        <div className="aside-item-title-extras">
                                            <P>with {interview.meta.who}</P>
                                            {interview.meta.role && <PSmall>{interview.meta.role}</PSmall>}
                                        </div>
                                        <div className="aside-item-meta">
                                            <P className="date">{consoleISODate(interview.meta.date)}</P>
                                        </div>
                                    </>
                                )}
                            </>
                        ),
                    },
                ]}
            />
        );
    };

    return (
        <>
            <PageSection classes={["opening"]}>
                <div className="path">
                    <Button
                        appearance="text"
                        cnslColor="yellow"
                        icon={{
                            group: "generic",
                            name: "jobs",
                        }}
                        iconPos="left"
                        el="anchor"
                        href="/profiles"
                        title="Profiles"
                    >
                        Behind the scenes
                    </Button>
                </div>
                <div className="top split peer">
                    <div className="left">
                        <div className="company-heading">
                            <VendorThumbnail
                                imageProvider={{
                                    width: "96",
                                    height: "96",
                                    src: profile.meta.companyInfo.favicon,
                                    alt: profile.meta.title,
                                }}
                            />
                            <div className="company-heading-text">
                                <h2 className="title title-1">{profile.meta.title}</h2>
                                <p className="inline-items small">
                                    <a href={profile.meta.companyInfo.url} rel={rel} className="link icon-left" target="_blank">
                                        <IconProvider group="generic" name="link" />
                                        <span>{extractHostname(profile.meta.companyInfo.url)}</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <p className="intro">{profile.meta.companyInfo.description}</p>
                        <Button
                            cnslSize="medium"
                            el="anchor"
                            href={profile.meta.companyInfo.jobsUrl}
                            title={"See all jobs at" + profile.meta.companyInfo.jobsUrl}
                            target="_blank"
                            rel={rel}
                            icon={{
                                group: "generic",
                                name: "external-link",
                            }}
                            iconPos="right"
                        >
                            See all jobs
                        </Button>
                    </div>
                    <div className="right">
                        <FramedSection>
                            <SimpleTable
                                data={profile.meta.companyInfo.meta.map((m) => {
                                    const unpack = (value: string | number | { links: any[] } | [], idx?: number): string | React.ReactNode => {
                                        if (Array.isArray(value)) {
                                            return value.map((l: [], subIdx) => unpack(l, subIdx));
                                        } else {
                                            if (typeof value == "string" || typeof value == "number") return value;
                                            else
                                                return (
                                                    <React.Fragment key={"value-cell" + (idx ? "-" + idx : "")}>
                                                        {value.links.map((l: any, idx: number) => (
                                                            <a key={"value-cell-link-" + idx} href={l.href} rel={rel} className={"link" + (l.iconRight ? " icon-right" : "") + (l.iconLeft ? " icon-left" : "")} target="_blank">
                                                                {l.iconLeft && <IconProvider group="generic" name={l.iconLeft} />}
                                                                <span>{l.text}</span>
                                                                {l.iconRight && <IconProvider group="generic" name={l.iconRight} />}
                                                            </a>
                                                        ))}
                                                    </React.Fragment>
                                                );
                                        }
                                    };
                                    let valueCell: string | React.ReactNode = unpack(m.value);

                                    const cells: SimpleTableCell[] = [
                                        {
                                            meta: true,
                                            content: m.label,
                                        },
                                        {
                                            content: valueCell,
                                        },
                                    ];
                                    return {
                                        cells: cells,
                                    };
                                })}
                            />
                        </FramedSection>

                        <Button
                            cnslSize="medium"
                            el="anchor"
                            href={profile.meta.companyInfo.jobsUrl}
                            title={"See all jobs at" + profile.meta.companyInfo.jobsUrl}
                            target="_blank"
                            rel={rel}
                            icon={{
                                group: "generic",
                                name: "external-link",
                            }}
                            iconPos="right"
                        >
                            See all jobs
                        </Button>
                    </div>
                </div>
                {profile.meta.companyInfo.images && profile.meta.companyInfo.images.length > 0 && (
                    <div className="bottom">
                        {profile.meta.companyInfo.images.map((img, idx) => (
                            <div key={"company-shot-" + idx} className="company-shot">
                                <ImageProvider fixedRatio={48} src={img.url} alt={profile.meta.title} />
                            </div>
                        ))}
                    </div>
                )}
            </PageSection>

            <PageSplit classes={["profile-split"]} layout="aside">
                <div>
                    <PageSection classes={["product"]}>
                        <FramedSection
                            top={
                                <>
                                    <h3 className="title title-2">Working at {profile.meta.companyInfo.product.name}</h3>
                                    <p>{profile.meta.companyInfo.product.description}</p>
                                </>
                            }
                            items={(() => {
                                const items = [
                                    <>
                                        <RichTitle tag="h4" icon={{ group: "generic", name: "tech-stack" }}>
                                            Tech stack
                                        </RichTitle>
                                        <p className="company-tech-stack">
                                            {profile.meta.companyInfo.techStack.map((t, idx) => (
                                                <span key={"tech-stack-item-" + idx} className="tech-stack-item">
                                                    {t}
                                                </span>
                                            ))}
                                        </p>
                                    </>,
                                ];

                                if (profile.meta.companyInfo.customerCaseStudies && profile.meta.companyInfo.customerCaseStudies.length > 0) {
                                    items.push(
                                        <>
                                            <RichTitle tag="h4" icon={{ group: "generic", name: "social" }}>
                                                Customer case studies
                                            </RichTitle>
                                            {profile.meta.companyInfo.customerCaseStudies.map((c, idx) => (
                                                <p key={"company-case-study-" + idx} className="company-case-study">
                                                    <span>{c.client}</span> {c.text}
                                                </p>
                                            ))}
                                        </>,
                                    );
                                }

                                return items;
                            })()}
                        />
                    </PageSection>

                    <PageSection classes={["markdown-body"]}>
                        <span ref={tocContentStartRef}></span>

                        {content}
                    </PageSection>

                    <PageSection classes={["jobs-link"]} inPageAnchor="jobs">
                        <h3 className="title title-2">Jobs</h3>
                        <p>
                            <Button
                                el="anchor"
                                href={profile.meta.companyInfo.jobsUrl}
                                title={"See all jobs at" + profile.meta.companyInfo.jobsUrl}
                                target="_blank"
                                rel={rel}
                                icon={{
                                    group: "generic",
                                    name: "external-link",
                                }}
                                iconPos="right"
                            >
                                See all jobs at {profile.meta.title}
                            </Button>
                        </p>

                        <span ref={tocContentEndRef}></span>
                    </PageSection>

                    {max1024 && <PageSection classes={["more-on-console"]}>{moreOnConsole()}</PageSection>}

                    <PageSection classes={["about"]}>
                        <AboutConsole />
                    </PageSection>

                    <PageSection classes={["signup"]}>
                        <LaunchSubscribe
                            layout={max768 ? "block" : "inline"}
                            formSubscribeProps={{
                                layout: max768 ? (max560 ? "block" : "inline") : "block",
                            }}
                            ctaBoxProps={{
                                appearance: "light",
                            }}
                        >
                            <h3 className="title title-3">Subscribe to the weekly Console newsletter</h3>
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
                        {moreOnConsole()}

                        <AsideBlock ref={tocHook}>{tocItems.length > 1 && <TOC items={tocItems} hook={tocHook} contentStartRef={tocContentStartRef} contentEndRef={tocContentEndRef} />}</AsideBlock>
                    </aside>
                )}
            </PageSplit>

            {props.children}
            <style jsx global>
                {styles}
            </style>
        </>
    );
}
