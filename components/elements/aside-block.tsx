import React, { forwardRef } from "react";

import styles from "@/components/elements/aside-block.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    top?: React.ReactNode;
    items?: {
        name?: string;
        content: React.ReactNode;
    }[];
}

/**
 * Aside Block - To use in split layouts.
 *
 * @param classes - Additional classes.
 *
 * @returns The block component.
 */
const AsideBlock = forwardRef<HTMLDivElement, Props>(({ classes, top, items, ...props }, ref) => {
    let cls = "aside-block";
    if (classes) cls += " " + classes.join(" ");

    return (
        <>
            <div ref={ref} className={cls}>
                {top && top}
                <div className="aside-items">
                    {items &&
                        items.map((item, idx) => (
                            <div key={`aside-item-${idx}`} className={"aside-item" + (item.name ? " " + item.name : "")}>
                                {item.content}
                            </div>
                        ))}
                </div>
                {props.children}
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

AsideBlock.displayName = "AsideBlock";

export default AsideBlock;
