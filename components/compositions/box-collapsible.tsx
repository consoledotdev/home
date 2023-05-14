import React, { forwardRef, useState } from "react";

import type { Props as IconProps } from "@/components/elements/icon-provider";

import IconProvider from "@/components/elements/icon-provider";

import styles from "@/components/compositions/box-collapsible.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    icon?: IconProps;
    cnslStyle?: "blue" | "default" | "alt";
    title?: string;
    expanded?: boolean;
}

/**
 * Collapsible Box
 * A container that can be collapsed.
 *
 * @param classes - Additional classes.
 * @param icon - The expand/collapse control icon.
 * @returns The collapsible box.
 */
const BoxCollapsible = forwardRef<HTMLDivElement, Props>(({ classes, icon = { group: "generic", name: "expand" }, cnslStyle, title = "", expanded, ...props }, ref) => {
    const [isExpanded, setIsExpanded] = useState(expanded || false);
    let cls = "box-collapsible";
    if (classes) cls += " " + classes.join(" ");
    if (cnslStyle) cls += " " + cnslStyle;
    if (isExpanded) cls += " is-expanded";

    const toggleCollasible = (e: React.MouseEvent<HTMLElement>) => {
        (e.target as HTMLElement).blur();
        (e.currentTarget as HTMLElement).blur();
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={cls}>
            <button className="box-collapsible-top" onClick={toggleCollasible}>
                <div className="title title-4">{title}</div>
                <IconProvider active={isExpanded} {...icon} />
            </button>
            <p className="box-collapsible-info small"></p>
            <div className="box-collapsible-content">{props.children}</div>
            <style jsx global>
                {styles}
            </style>
        </div>
    );
});

BoxCollapsible.displayName = "BoxCollapsible";

export default BoxCollapsible;
