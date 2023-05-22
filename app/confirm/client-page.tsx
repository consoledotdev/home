"use client";

import * as Content from "@/app/confirm/content/page.mdx";

import { MDXContent } from "mdx/types";

import { useMediaQuery } from "@/components/effects/use-media-query";

import { customMDXComponents } from "@/mdx-components";
import PageSection from "@/components/elements/page-section";
import PageSplit from "@/components/elements/page-split";

import styles from "@/app/confirm/client-page.scss";

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
            <PageSplit classes={["about-split"]} layout="aside">
                <div>
                    <PageSection classes={["markdown-body"]}>
                        <h2 className="title title-1">{content.meta.title}</h2>
                        <p className="description">
                            <content.meta.intro />
                        </p>
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
