import React, { forwardRef, useRef } from "react";

import Tooltip from "@/components/elements/tooltip";

import styles from "@/components/compositions/sponsor-disclosure.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    classes?: string[];
    cnslSize?: "x-small" | "small" | "large";
    layout?: "tooltip";
    onItem?: boolean;
    tooltip?: any;
}

/**
 * Sponsor Disclosure notice
 * A notice of sponsored content and entities.
 *
 * @param classes - Additional classes.
 * @param cnslSize - Specify the size, defaults to small if undefined.
 * @param layout - The notice layout, defaults to a static paragraph if undefined.
 * @param onItem - Changes wording to display on sponsored item, false or undefined shows a generic notice.
 * @param tooltip - Pass props to tooltip from parent if necessary.
 *
 * @returns The sponsor disclosure component.
 */
const SponsorDisclosure = forwardRef<HTMLDivElement, Props>(({ classes, cnslSize, layout, onItem, tooltip = {}, ...props }, ref) => {
    const indicatorRef = useRef<HTMLDivElement>(null);

    let cls = "sponsor-disclosure";
    if (classes) cls += " " + classes.join(" ");
    if (cnslSize) cls += " " + cnslSize;
    if (layout == "tooltip") cls += " with-tooltip";

    let label = "Disclosure";
    if (onItem) label = "Sponsored";

    let content;
    if (layout == "tooltip") {
        content = (
            <div className={cls}>
                <div ref={indicatorRef} className="indicator">
                    ✦ {label}
                </div>
                <Tooltip cnslSize="small" position="bottom" anchorRef={indicatorRef} {...tooltip}>
                    <p>
                        All reviews are editorially independent, and partners must meet our{" "}
                        <a href="/selection-criteria/" className="link">
                            selection criteria
                        </a>
                        .
                    </p>
                </Tooltip>
            </div>
        );
    } else {
        content = (
            <div className={cls}>
                <p>
                    <span>✦ {label}:</span> All reviews are editorially independent and partners must meet our{" "}
                    <a className="link" href="/selection-criteria/">
                        selection criteria
                    </a>
                    .
                </p>
            </div>
        );
    }

    return (
        <>
            {content}
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

SponsorDisclosure.displayName = "SponsorDisclosure";

export default SponsorDisclosure;
