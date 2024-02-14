import React, { forwardRef } from "react";

import IconProvider from "./icon-provider";

import styles from "./tag.scss";

export const links = () => [{ rel: "stylesheet", href: styles }];

type Props = {
    inline?: boolean;
    clickable?: boolean;
    cnslSize?: "small" | "large";
    tag: {
        label: string;
        slug?: string;
    };
};

/**
 * A tag indicator.
 *
 * @param inline - Changes the wrapper element from block to inline.
 * @param clickable - Makes the item clickable.
 * @param cnslSize - Specify the size, defaults to small if undefined.
 * @param tag - The tag to show.
 *
 * @returns the tag indicator.
 */
const Tag = forwardRef<any, Props>(({ inline, clickable, cnslSize, tag, ...props }, ref) => {
    const clicked = (e: React.MouseEvent<HTMLElement>) => {
        (e.target as HTMLElement).blur();
        (e.currentTarget as HTMLElement).blur();
    };

    let cls = "tags";
    if (clickable) cls += " clickable";
    if (inline) cls += " inline";
    if (cnslSize) cls += " " + cnslSize;

    let inner = () => {
        let content = (
            <>
                <IconProvider group="generic" name="tag" />
                <span className="tag">{tag.label}</span>
            </>
        );
        return "";

        return clickable ? <a href={`/${tag.slug}/`}>{content}</a> : content;
    };

    return (
        <>
            {inline ? <span className={cls}>{inner()}</span> : <div className={cls}>{inner()}</div>}
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

Tag.displayName = "Tag";

export default Tag;
