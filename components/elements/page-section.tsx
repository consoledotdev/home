import React, { forwardRef } from "react";

import styles from "@/components/elements/page-section.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    classes?: string[];
    fullWidth?: boolean;
    inPageAnchor?: string;
}

/**
 * Page Section wrapper
 * A styled high level page section wrapper.
 *
 * @param fullWidth - Covers all horizontal real estate.
 * @param classes - Additional classes.
 * @returns The Page Section node with its children.
 */
const PageSection = forwardRef<HTMLDivElement, Props>(({ classes, fullWidth, inPageAnchor, ...props }, ref) => {
    let cls = "page-section";
    if (classes) cls += " " + classes.join(" ");
    if (fullWidth) cls += " full-width";

    return (
        <div ref={ref} className={cls} {...props}>
            {inPageAnchor && <span className="section-anchor" id={inPageAnchor}></span>}
            {props.children}
            <style jsx global>
                {styles}
            </style>
        </div>
    );
});

PageSection.displayName = "PageSection";

export default PageSection;
