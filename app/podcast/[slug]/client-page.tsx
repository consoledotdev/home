"use client";

import { useEffect, useRef, useState } from "react";

import { useMediaQuery } from "@/components/effects/use-media-query";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { customMDXComponents } from "@/mdx-components";
import { consoleISODate, formatPodcastSeasonEpisode } from "@/components/effects/utils";

import { PodcastMeta } from "@/app/lib/podcasts";

import PageSection from "@/components/elements/page-section";
import BoxCollapsible from "@/components/compositions/box-collapsible";
import Button from "@/components/elements/button";
import ComboBox from "@/components/compositions/combo-box";
import PodcastWidget, { PlayState } from "@/components/compositions/podcast-widget";
import PageSplit from "@/components/elements/page-split";
import RichTitle from "@/components/elements/rich-title";
import PodcastEpisodeClipping, { Props as PodcastEpisodeClippingProps } from "@/components/compositions/podcast-episode-clipping";
import AboutTheAuthor from "@/components/compositions/about-the-author";
import AboutConsole from "@/components/compositions/about-console";
import LaunchSubscribe from "@/components/compositions/launch-subscribe";
import Link from "next/link";
import PersonProfile from "@/components/compositions/person-profile";
import AsideBlock from "@/components/elements/aside-block";
import FixedOnScroll from "@/components/elements/fixed-on-scroll";

import styles from "@/app/podcast/[slug]/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    podcast: {
        meta: PodcastMeta;
        content: MDXRemoteSerializeResult;
    };
    allPodcasts: {
        meta: PodcastMeta;
        content: MDXRemoteSerializeResult;
    }[];
}

const options = {
    author1: {
        name: "David Mytton",
        url: "https://davidmytton.blog/start",
        img: "/img/david.jpg",
        bio: <>is Co-founder & CEO of Console. In 2009, he founded and was CEO of Server Density, a SaaS cloud monitoring startup acquired in 2018 by edge compute and cyber security company, StackPath. He is also researching sustainable computing in the Department of Engineering Science at the University of Oxford, and has been a developer for 15+ years.</>,
    },
    author2: {
        name: "Jean Yang",
        url: "https://twitter.com/jeanqasaur",
        img: "/img/podcast/akita-jean-yang-profile.jpg",
        bio: <>is CEO of Akita Software. Jean earned her PhD in software correctness and programming language design from MIT and then became a professor in computer science at Carnegie Mellon University before she started Akita to build the future of API observability.</>,
    },
};

const profileDMytton = (
    <PersonProfile
        icon={{ group: "generic", name: "external-link" }}
        iconPos="right"
        picture={{
            byWidth: true,
            src: "/img/david.jpg",
            alt: "David Mytton",
            width: 128,
        }}
        link={{
            external: true,
            href: "https://twitter.com/davidmytton",
        }}
    >
        David Mytton
    </PersonProfile>
);

const profileJYang = (
    <PersonProfile
        icon={{ group: "generic", name: "external-link" }}
        iconPos="right"
        picture={{
            byWidth: true,
            src: "/img/podcast/akita-jean-yang-profile.jpg",
            alt: "Jean Yang",
            width: 128,
        }}
        link={{
            external: true,
            href: "https://twitter.com/jeanqasaur",
        }}
    >
        Jean Yang
    </PersonProfile>
);

export default function Page({ podcast, allPodcasts, ...props }: Props) {
    let rel = "noopener noreferrer";

    const [playState, setPlayState] = useState<PlayState>({
        playing: false,
        atTime: null,
    });
    const onClick = (e: React.MouseEvent, opts: { atTime: string }) => {
        setPlayState({ playing: true, atTime: opts.atTime });
    };

    const components = {
        ...customMDXComponents,
        BoxCollapsible,
        RichTitle,
        PodcastEpisodeClipping: (props: PodcastEpisodeClippingProps) => <PodcastEpisodeClipping {...props} clicked={onClick} />,
    };

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

    const hostProfiles = (
        <>
            {(podcast.meta.season == 2 || podcast.meta.season == 3) && (
                <AsideBlock
                    top={
                        <div className="heading">
                            <h5 className="title title-4">The host</h5>
                        </div>
                    }
                    items={[
                        {
                            name: "host-profiles-s0" + podcast.meta.season,
                            content: profileDMytton,
                        },
                    ]}
                />
            )}
            {(podcast.meta.season == 1 || podcast.meta.season == 4) && (
                <AsideBlock
                    top={
                        <div className="heading">
                            <h5 className="title title-4">With</h5>
                        </div>
                    }
                    items={[
                        {
                            name: "host-profiles-s0" + podcast.meta.season,
                            content: (
                                <div className="person-profiles">
                                    {profileDMytton}
                                    {profileJYang}
                                </div>
                            ),
                        },
                    ]}
                />
            )}
        </>
    );

    const moreEpisodes = () => {
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
                        <T>More episodes</T>
                    </div>
                }
                items={allPodcasts.map((pod, idx) => {
                    const content = (
                        <>
                            <TItem>
                                <a className="link icon-left" href={pod.meta.slug} title={pod.meta.title} rel={rel}>
                                    <span>{pod.meta.title}</span>
                                </a>
                            </TItem>
                            <div className="aside-item-title-extras">
                                <P>with {pod.meta.who}</P>
                                {pod.meta.org && <PSmall>{pod.meta.org}</PSmall>}
                            </div>
                            <div className="aside-item-meta">
                                <P className="episode-no">{formatPodcastSeasonEpisode(pod.meta.season, pod.meta.episode)}</P>
                            </div>
                        </>
                    );
                    return {
                        name: formatPodcastSeasonEpisode(pod.meta.season, pod.meta.episode).replace(/\s+/g, "-").toLowerCase(),
                        content: content,
                    };
                })}
            />
        );
    };

    // Podcast fix on scroll
    const podcastWrapperRef = useRef<HTMLDivElement>(null);
    const [podcastWrapperTop, setPodcastWrapperTop] = useState<number | undefined>();

    useEffect(() => {
        if (podcastWrapperRef.current) {
            const top = podcastWrapperRef.current.getBoundingClientRect().top + window.scrollY - 104;
            setPodcastWrapperTop(top);
        }
    }, [podcastWrapperRef]);

    return (
        <>
            <PageSection fullWidth classes={["opening"]}>
                <div className="path">
                    <Button
                        appearance="text"
                        cnslColor="triad-03"
                        icon={{
                            group: "generic",
                            name: "podcast",
                        }}
                        iconPos="left"
                        el="anchor"
                        href="/podcast"
                        title="Podcast"
                    >
                        Devtools Podcast
                    </Button>
                </div>
                <div className="top">
                    <div className="left">
                        <h2 className="title title-1">{podcast.meta.title}</h2>
                        <div className="title-extras">
                            <h4 className="title title-3">
                                with{" "}
                                {podcast.meta.whoLink ? (
                                    <a className="link" href={podcast.meta.whoLink} title={podcast.meta.whoLink} target="_blank" rel="noreferrer noopener">
                                        {podcast.meta.who}
                                    </a>
                                ) : (
                                    podcast.meta.who
                                )}
                            </h4>
                            <p className="small">
                                {podcast.meta.orgLink ? (
                                    <a className="link" href={podcast.meta.orgLink} title={podcast.meta.orgLink} target="_blank" rel="noreferrer noopener">
                                        {podcast.meta.org}
                                    </a>
                                ) : (
                                    podcast.meta.org
                                )}
                            </p>
                        </div>
                        <div className="page-meta">
                            <p className="small episode-no">{formatPodcastSeasonEpisode(podcast.meta.season, podcast.meta.episode)}</p>
                            <p className="small date">
                                <span className="page-meta-separator">&mdash;</span>
                                <span>{consoleISODate(podcast.meta.date)}</span>
                            </p>
                        </div>
                        <p className="intro">{podcast.meta.summary}</p>
                    </div>
                    <div className="right">
                        {podcast.meta.season == 1 ? (
                            <ComboBox
                                visualsType="logo-logo"
                                isVertical={true}
                                srcs={{
                                    left: {
                                        src: podcast.meta.topImg2Src,
                                        alt: podcast.meta.topImg2Alt,
                                    },
                                    right: {
                                        src: podcast.meta.topImg1Src,
                                        alt: podcast.meta.topImg1Alt,
                                    },
                                }}
                            />
                        ) : (
                            <ComboBox
                                visualsType="logo-profile"
                                isVertical={true}
                                srcs={{
                                    left: {
                                        src: podcast.meta.topImg2Src,
                                        alt: podcast.meta.topImg2Alt,
                                    },
                                    right: {
                                        src: podcast.meta.topImg1Src,
                                        alt: podcast.meta.topImg1Alt,
                                    },
                                }}
                            />
                        )}
                    </div>
                </div>
                <div data-podcast-widget-anchor className="bottom">
                    <FixedOnScroll classes={["podcast-widget-wrapper"]} ref={podcastWrapperRef} offset={podcastWrapperTop}>
                        <PodcastWidget
                            hideHeader
                            hideListLink
                            posLinks={max768 ? "footer" : "body"}
                            cnslStyle="alt"
                            podcastMeta={podcast.meta}
                            playerAttrs={{
                                showTime: true,
                                id: "podcast-page-podcast",
                                playState: playState,
                            }}
                            comboBoxAttrs={{
                                visualsType: podcast.meta.season == 1 ? "logo-logo" : "logo-profile",
                            }}
                        />
                    </FixedOnScroll>
                </div>
            </PageSection>

            <PageSplit classes={["profile-split"]} layout="aside">
                <div>
                    <PageSection classes={["markdown-body"]}>
                        <MDXRemote
                            {...podcast.content}
                            // @ts-ignore
                            components={{
                                ...components,
                                h3: (props: any) => <h4 className="title title-2" {...props} />,
                                h4: (props: any) => <h4 className="title title-3" {...props} />,
                            }}
                        />
                    </PageSection>

                    {max1024 && <PageSection classes={["more-episodes"]}>{moreEpisodes()}</PageSection>}

                    <PageSection classes={["about"]}>
                        <AboutTheAuthor
                            author={{
                                name: options.author1.name,
                                bio: options.author1.bio,
                                url: options.author1.url,
                                img: options.author1.img,
                            }}
                        />
                        {podcast.meta.season == 1 && (
                            <AboutTheAuthor
                                author={{
                                    name: options.author2.name,
                                    bio: options.author2.bio,
                                    url: options.author2.url,
                                    img: options.author2.img,
                                }}
                            />
                        )}
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
                        {hostProfiles}
                        {moreEpisodes()}
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
