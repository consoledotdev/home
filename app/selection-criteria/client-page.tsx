"use client";

import * as Content from "@/app/selection-criteria/content/page.mdx";

import { MDXContent } from "mdx/types";

import { useMediaQuery } from "@/components/effects/use-media-query";

import { customMDXComponents } from "@/mdx-components";
import PageSection from "@/components/elements/page-section";
import PageSplit from "@/components/elements/page-split";
import Rays from "@/components/visuals/rays/rays-maker";

import styles from "@/app/selection-criteria/client-page.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {}

type PageContent = {
    default: MDXContent;
    meta: any;
};

export default function Page({ ...props }: Props) {
    const content = Content as unknown as PageContent;

    const components = {
        ...customMDXComponents,
    };

    const max1024 = useMediaQuery({
        w: 1024,
        op: "max",
        undefAtInit: true, // avoids flash of header on mobile nav
    });

    return (
        <>
            <PageSection classes={["opening"]}>
                <Rays cnslType="triad-01-variant2" />
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

            <PageSplit classes={["about-split"]} layout="aside">
                <div>
                    <PageSection classes={["markdown-body"]}>
                        <content.default
                            components={{
                                ...components,
                                h3: (props: any) => <h3 className="title title-2" {...props} />,
                                h4: (props: any) => <h4 className="title title-3" {...props} />,
                            }}
                        />
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
