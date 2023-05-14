"use client";

import * as Content from "@/app/about/content/page.mdx";

import { MDXContent } from "mdx/types";

import { useMediaQuery } from "@/components/effects/use-media-query";

import { settings } from "@/app/lib/settings";

import { customMDXComponents } from "@/mdx-components";
import Link from "next/link";
import LaunchSubscribe from "@/components/compositions/launch-subscribe";
import PageSection from "@/components/elements/page-section";
import PageSplit from "@/components/elements/page-split";
import IconProvider from "@/components/elements/icon-provider";
import PlanePicture from "@/components/elements/plane-picture";
import Rays from "@/components/visuals/rays/rays-maker";

import styles from "@/app/about/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {}

type PageContent = {
    default: MDXContent;
    meta: any;
};

export default function Page({ ...props }: Props) {
    const content = Content as unknown as PageContent;

    const components = {
        ...customMDXComponents,
        IconProvider,
        GithubLink: (props: any) => {
            return (
                <a className="link icon-right" href="https://github.com/consoledotdev" title="Console on GitHub" rel="noopener noreferrer">
                    <span>{props.children}</span>
                    <IconProvider group="external" name="github" />
                </a>
            );
        },
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

    const max480 = useMediaQuery({
        w: 480,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    return (
        <>
            <PageSection classes={["opening"]}>
                <Rays cnslType="triad-01-variant" />
                <div className="top">
                    <div className="left">
                        <h2 className="title title-1">{content.meta.title}</h2>
                        <div className="title-extras">
                            <h4 className="title title-3">{content.meta.subtitle}</h4>
                        </div>
                        <p className="description">
                            <content.meta.intro />
                        </p>
                    </div>
                    <div className="right"></div>
                </div>
            </PageSection>

            <PageSection classes={["co-founders content-max-width"]}>
                <h3 className="title title-2">
                    <span className="text-default">Console Co-founders:</span>
                    <br />
                    <span>David Mytton</span> & <span>Max Jennings</span>.
                </h3>
                <div className="profile-pictures">
                    <PlanePicture byWidth src={"/img/david.jpg"} alt={"David Mytton"} width={328} />
                    <PlanePicture byWidth src={"/img/max.jpg"} alt={"Max Jennings"} width={328} />
                </div>
                <p>
                    <content.meta.bio.david />
                </p>
                <p>
                    <content.meta.bio.max />
                </p>
            </PageSection>

            <PageSplit classes={["about-split"]} layout="aside">
                <div>
                    <PageSection classes={["markdown-body"]}>
                        <content.default
                            components={{
                                ...components,
                                h3: (props: any) => <h3 className="title title-2" {...props} />,
                                h4: (props: any) => <h4 className="title title-3" {...props} />,
                            }}
                            subscribersCount={settings.subscribersCount}
                        />
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

                {!max1024 && <aside></aside>}
            </PageSplit>

            <style jsx global>
                {styles}
            </style>
        </>
    );
}
