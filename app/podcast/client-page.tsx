"use client";

import { consoleISODate, formatPodcastSeasonEpisode } from "@/components/effects/utils";

import Link from "next/link";
import PageSplit from "@/components/elements/page-split";
import PageSection from "@/components/elements/page-section";
import { useMediaQuery } from "@/components/effects/use-media-query";
import PodcastLinks from "@/components/compositions/podcast-links";
import FramedSection from "@/components/elements/framed-section";
import RichTitle from "@/components/elements/rich-title";
import LaunchSubscribe from "@/components/compositions/launch-subscribe";
import AboutConsole from "@/components/compositions/about-console";
import AboutTheAuthor from "@/components/compositions/about-the-author";
import CardPodcast from "@/components/compositions/card-podcast";
import AsideBlock from "@/components/elements/aside-block";
import PersonProfile from "@/components/compositions/person-profile";
import AudioPlayer from "@/components/compositions/audio-player";

import styles from "@/app/podcast/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
    items: any[];
}

const options = {
    author: {
        name: "David Mytton",
        url: "https://davidmytton.blog/start",
        img: "/img/david.jpg",
        bio: <>is Co-founder & CEO of Console. In 2009, he founded and was CEO of Server Density, a SaaS cloud monitoring startup acquired in 2018 by edge compute and cyber security company, StackPath. He is also researching sustainable computing in the Department of Engineering Science at the University of Oxford, and has been a developer for 15+ years.</>,
    },
    trailers: {
        s01: "https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/a7d3733f-d1e8-48c6-8b1c-1f56d866a02a/audio/d6155b7b-05b9-42d9-a6ae-c637f296764a/default_tc.mp3",
        s02: "https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/85243238-dfdd-40e5-b0d2-ab38d182b594/audio/526800d5-0df6-4449-bc4c-0ebfd78ace32/default_tc.mp3",
        s03: "https://cdn.simplecast.com/audio/10488ddf-3ca4-4300-9391-c2967d806334/episodes/c626d874-8fe5-47a5-9958-a4bd52b3b958/audio/2a095d2b-ee0d-40df-9c0b-9bc48ba11f12/default_tc.mp3",
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

export default function Page({ items, ...props }: Props) {
    const max1080 = useMediaQuery({
        w: 1080,
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

    const asidePlayer = (season: string) => (
        <AsideBlock
            items={[
                {
                    name: "trailer-player",
                    content: <AudioPlayer playerId={season} src={(options.trailers as Indexable)[season]} title={"Listen to " + season + " trailer"} titleAlt={"Listen to " + season + " trailer"} />,
                },
            ]}
        />
    );

    const personProfiles = (season: string) => {
        const n = season.match(/\d+/);
        const s = parseInt(n ? n[0] : "0");
        return (
            <AsideBlock
                top={
                    <div className="heading">
                        <h5 className="title title-4">Guests</h5>
                    </div>
                }
                items={[
                    {
                        name: "person-profiles-" + season,
                        content: (
                            <div className="person-profiles">
                                {items
                                    .filter((item, idx) => item.meta.season == s)
                                    .map((item, idx) => (
                                        <PersonProfile
                                            key={"person-profile-" + season + "-" + idx}
                                            picture={{
                                                byWidth: true,
                                                src: item.meta.topImg1Src,
                                                alt: item.meta.who,
                                                width: 128,
                                            }}
                                            link={{
                                                external: true,
                                                href: item.meta.whoLink,
                                            }}
                                            icon={{ group: "generic", name: "external-link" }}
                                            iconPos="right"
                                        >
                                            {item.meta.who}
                                        </PersonProfile>
                                    ))}
                            </div>
                        ),
                    },
                ]}
            />
        );
    };

    const hostProfiles = (season: string) => {
        if (season == "s03" || season == "s02") {
            return (
                <AsideBlock
                    top={
                        <div className="heading">
                            <h5 className="title title-4">The host</h5>
                        </div>
                    }
                    items={[
                        {
                            name: "host-profiles-" + season,
                            content: profileDMytton,
                        },
                    ]}
                />
            );
        }
        if (season == "s01" || season == "s04") {
            return (
                <AsideBlock
                    top={
                        <div className="heading">
                            <h5 className="title title-4">With</h5>
                        </div>
                    }
                    items={[
                        {
                            name: "host-profiles-" + season,
                            content: (
                                <div className="person-profiles">
                                    {profileDMytton}
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
                                </div>
                            ),
                        },
                    ]}
                />
            );
        }
    };

    return (
        <>
            <PageSection classes={["opening"]}>
                <RichTitle tag="h2" icon={{ group: "generic", name: "podcast" }}>
                    Console Devtools podcast
                </RichTitle>
                <div className="split aside">
                    <div className="left">
                        <p className="description">Interviews with interesting people in the devtools space.</p>
                        <p>From security to dev focused infrastructure, and from homomorphic encryption to privacy and decentralization, we discuss the technical details around devtools.</p>
                    </div>
                    <div className="right">
                        <FramedSection appearance="overlay" size="compact" classes={["podcast-links-container"]}>
                            <PodcastLinks title="Listen & subscribe" classes={["podcast-links-wrapper"]} />
                        </FramedSection>
                    </div>
                </div>
            </PageSection>

            <PageSection classes={["featured"]}>
                <div className="heading">
                    <h5 className="title title-4">
                        <span>Latest Episode</span>{" "}
                        <span>
                            / {formatPodcastSeasonEpisode(items[0].meta.season, items[0].meta.episode)} — {consoleISODate(items[0].meta.date)}
                        </span>
                    </h5>
                </div>
                <CardPodcast key={items[0].meta.slug} item={items[0]} layout={max768 ? "default" : "horizontal"} />
            </PageSection>

            <PageSplit classes={["podcasts-split"]} layout="aside-list">
                <div>
                    <PageSection classes={["podcasts season-4"]}>
                        <div className="heading">
                            <h3 className="title title-2">Season 4</h3>
                        </div>
                        {max1080 && (
                            <aside>
                                {hostProfiles("s04")}
                                {asidePlayer("s04")}
                            </aside>
                        )}
                        <div className="heading">
                            <h5 className="title title-4">Other episodes</h5>
                        </div>
                        {items
                            .filter((item, idx) => item.meta.season == 4 && idx != 0)
                            .map((item) => (
                                <CardPodcast key={item.meta.slug} item={item} layout={max768 ? "default" : "horizontal"} />
                            ))}
                    </PageSection>
                </div>

                {!max1080 && (
                    <aside>
                        {hostProfiles("s04")}
                        {personProfiles("s04")}
                    </aside>
                )}
            </PageSplit>

            <PageSplit classes={["podcasts-split"]} layout="aside-list">
                <div>
                    <PageSection classes={["podcasts season-3"]}>
                        <div className="heading">
                            <h3 className="title title-2">Season 3</h3>
                        </div>
                        {max1080 && (
                            <aside>
                                {hostProfiles("s03")}
                                {asidePlayer("s03")}
                            </aside>
                        )}
                        {items
                            .filter((item) => item.meta.season == 3)
                            .map((item) => (
                                <CardPodcast key={item.meta.slug} item={item} layout={max768 ? "default" : "horizontal"} />
                            ))}
                    </PageSection>
                </div>

                {!max1080 && (
                    <aside>
                        {asidePlayer("s03")}
                        {hostProfiles("s03")}
                        {personProfiles("s03")}
                    </aside>
                )}
            </PageSplit>

            <PageSplit classes={["podcasts-split"]} layout="aside-list">
                <div>
                    <PageSection classes={["podcasts season-2"]}>
                        <div className="heading">
                            <h3 className="title title-2">Season 2</h3>
                        </div>
                        {max1080 && (
                            <aside>
                                {hostProfiles("s02")}
                                {asidePlayer("s02")}
                            </aside>
                        )}
                        {items
                            .filter((item) => item.meta.season == 2)
                            .map((item) => (
                                <CardPodcast key={item.meta.slug} item={item} layout={max768 ? "default" : "horizontal"} />
                            ))}
                    </PageSection>
                </div>

                {!max1080 && (
                    <aside>
                        {asidePlayer("s02")}
                        {hostProfiles("s02")}
                        {personProfiles("s02")}
                    </aside>
                )}
            </PageSplit>

            <PageSplit classes={["podcasts-split"]} layout="aside-list">
                <div>
                    <PageSection classes={["podcasts season-1"]}>
                        <div className="heading">
                            <h3 className="title title-2">Season 1</h3>
                        </div>
                        {max1080 && (
                            <aside>
                                {hostProfiles("s01")}
                                {asidePlayer("s01")}
                            </aside>
                        )}
                        {items
                            .filter((item) => item.meta.season == 1)
                            .map((item) => (
                                <CardPodcast key={item.meta.slug} item={item} layout={max768 ? "default" : "horizontal"} />
                            ))}
                    </PageSection>
                </div>

                {!max1080 && (
                    <aside>
                        {asidePlayer("s01")}
                        {hostProfiles("s01")}
                    </aside>
                )}
            </PageSplit>

            <PageSplit classes={["closing-split"]} layout="aside-list">
                <div>
                    <PageSection classes={["about"]}>
                        <AboutTheAuthor
                            author={{
                                name: options.author.name,
                                bio: options.author.bio,
                                url: options.author.url,
                                img: options.author.img,
                            }}
                        />
                        <AboutConsole />
                    </PageSection>

                    <PageSection classes={["signup"]}>
                        <LaunchSubscribe
                            layout={max768 ? "block" : "inline"}
                            formSubscribeProps={{
                                layout: max768 ? (max560 ? "block" : "inline") : "block",
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

                {!max1080 && <div></div>}
            </PageSplit>

            <style jsx global>
                {styles}
            </style>
        </>
    );
}
