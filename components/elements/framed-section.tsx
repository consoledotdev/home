import React, { forwardRef } from "react";

import styles from "@/components/elements/framed-section.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    size?: "compact" | "wide";
    appearance?: "default" | "attention" | "overlay" | "triad-01" | "triad-03";
    classes?: string[];
    top?: React.ReactNode | React.ReactNode[];
    items?: React.ReactNode[];
}

/**
 * Framed Section wrapper
 * A styled container.
 *
 * @param size - "compact" | "wide", the display size.
 * @param appearance - the visual style of the framed section, defaults to "default".
 * @param classes - Additional classes.
 * @param top - Optional top content node.
 * @param items - Optional item nodes.
 * @returns The Framed Section node with its children.
 */
const FramedSection = forwardRef<HTMLDivElement, Props>(({ size, appearance, classes, top, items, ...props }, ref) => {
    let cls = "framed-section";
    if (size == "compact") cls += " compact";
    if (size == "wide") cls += " wide";
    if (appearance) cls += " " + appearance;
    else cls += " default";
    if (classes) cls += " " + classes.join(" ");

    return (
        <div ref={ref} className={cls} {...props}>
            {top &&
                (Array.isArray(top) ? (
                    top.map((t, idx) => (
                        <div key={"framed-section-top-" + idx} className="top">
                            {t}
                        </div>
                    ))
                ) : (
                    <div className="top">{top}</div>
                ))}
            {items
                ? items.map((item, idx) => (
                      <div key={`framed-section-item-${idx}`} className="framed-section-item">
                          {item}
                      </div>
                  ))
                : props.children}
            <style jsx global>
                {styles}
            </style>
        </div>
    );
});

FramedSection.displayName = "FramedSection";

export default FramedSection;
