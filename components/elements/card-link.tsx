import React, { forwardRef } from "react";
import Link from "next/link";

import IconProvider from "@/components/elements/icon-provider";

import styles from "@/components/elements/card-link.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    href: string;
    title?: string;
    text?: string;
    sponsored?: boolean;
    investment?: boolean;
    external?: boolean;
    frameOnly?: boolean;
}

/**
 * The list card link overlay.
 *
 * @param classes - Additional classes.
 * @param href - The link location.
 * @param title - Link title.
 * @param text - Visible link text override.
 * @param sponsored - Configure as sponsored when "true".
 * @param investment - Configure as sponsored when "true".
 * @param external - Configure as external link when "true".
 * @param frameOnly - Hides the launch text span when "true".
 *
 * @returns The link overlay component.
 */
const CardLink = forwardRef<HTMLAnchorElement, Props>(({ classes, href, title, text, sponsored, investment, external, frameOnly, ...props }, ref) => {
    let cls = "card-link";
    if (classes) cls += " " + classes.join(" ");

    let rel = "";
    if (external) rel += "noopener noreferrer";
    let target = "";
    if (external) target += "_blank";
    if (sponsored || investment) rel += " sponsored";

    const clicked = (e: React.MouseEvent<HTMLElement>) => {
        (e.target as HTMLElement).blur();
        (e.currentTarget as HTMLElement).blur();
    };

    return (
        <>
            {external ? (
                <>
                    <a className={cls} href={href} rel={rel} target={target} title={title || external ? href : "View"} onClick={clicked}>
                        {!frameOnly && (
                            <span>
                                <span>{text || "Visit"}</span> <IconProvider group="generic" name="external-link" />
                            </span>
                        )}
                    </a>
                </>
            ) : (
                <>
                    <Link
                        href={{ pathname: href }} // https://github.com/vercel/next.js/issues/47689
                        className={cls}
                        rel={rel}
                        target={target}
                        title={title || external ? href : "View"}
                        onClick={clicked}
                    >
                        {!frameOnly && (
                            <span>
                                <span>{text || "View"}</span> <IconProvider group="generic" name="arrow-right" />
                            </span>
                        )}
                    </Link>
                </>
            )}
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

CardLink.displayName = "CardLink";

export default CardLink;
