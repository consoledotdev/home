"use client";

import { hydrate } from "next-mdx-remote-client";
import { customMDXComponents } from "@/mdx-components";

import { InterviewMeta } from "@/app/lib/interviews";

import PageSection from "@/components/elements/page-section";
import ImageProvider from "@/components/elements/image-provider";
import { useMediaQuery } from "@/components/effects/use-media-query";
import Button from "@/components/elements/button";
import { consoleISODate } from "@/components/effects/utils";
import ComboBox from "@/components/compositions/combo-box";

import styles from "@/app/interviews/[slug]/client-page.scss";
import PageSplit from "@/components/elements/page-split";
import LaunchSubscribe from "@/components/compositions/launch-subscribe";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLElement> {
    interview: {
        meta: InterviewMeta;
        content: any;
    };
}

export default function Page({ interview, ...props }: Props) {
    const components = {
        ...customMDXComponents,
        ImageProvider,
    };

    const { content, mod, error } = hydrate({ ...interview.content, components });

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

    return (
        <>
            <PageSection fullWidth classes={["opening"]}>
                <div className="path">
                    <Button
                        appearance="text"
                        cnslColor="triad-03"
                        icon={{
                            group: "generic",
                            name: "console-interview",
                        }}
                        iconPos="left"
                        el="anchor"
                        href="/interviews"
                        title="Interviews"
                    >
                        Developer interviews
                    </Button>
                </div>
                <div className="top">
                    <div className="left">
                        <h2 className="title title-1">
                            <span>Interview with</span>
                            <br />
                            {interview.meta.who}
                        </h2>
                        <div className="title-extras">
                            <h4 className="title title-3">
                                {interview.meta.role}, {interview.meta.org}
                            </h4>
                        </div>
                        <p className="intro">{interview.meta.what}</p>
                        <div className="page-meta">
                            <p className="small date">
                                <span>{consoleISODate(interview.meta.date)}</span>
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <ComboBox
                            visualsType="logo-profile"
                            isVertical={true}
                            srcs={{
                                left: {
                                    src: interview.meta.topImg2Src,
                                    alt: interview.meta.topImg2Alt,
                                },
                                right: {
                                    src: interview.meta.topImg1Src,
                                    alt: interview.meta.topImg1Alt,
                                },
                            }}
                        />
                    </div>
                </div>
            </PageSection>

            {!max768 && <div className="console-separator"></div>}

            <PageSplit classes={["interview-split"]} layout="aside">
                <div>
                    <PageSection classes={["markdown-body"]}>{content}</PageSection>

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

                {!max1024 && <aside></aside>}
            </PageSplit>

            {props.children}
            <style jsx global>
                {styles}
            </style>
        </>
    );
}
