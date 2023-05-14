import React, { forwardRef } from "react";

import styles from "@/components/elements/page-split.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    classes?: string[];
    layout?: "aside" | "aside-list" | "peer";
}

/**
 * Page Split
 * A swrapper that handles two column splits.
 *
 * @param classes - Additional classes.
 * @param layout - The layout style, defaults to aside if undefined.
 * @returns The Page Section node with its children.
 */
const PageSplit = forwardRef<HTMLDivElement, Props>(({ classes, layout, ...props }, ref) => {
    let cls = "page-split";
    if (classes) cls += " " + classes.join(" ");
    if (layout) cls += " " + layout;
    else cls += " aside";

    return (
        <div ref={ref} className={cls} {...props}>
            {props.children}
            <style jsx global>
                {styles}
            </style>
        </div>
    );
});

PageSplit.displayName = "PageSplit";

export default PageSplit;
