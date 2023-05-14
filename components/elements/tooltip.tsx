"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "@/components/effects/use-isomorphic-layout-effect";

import styles from "@/components/elements/tooltip.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    classes?: string[];
    cnslSize?: "small";
    position?: "top" | "bottom";
    alignment?: "left" | "right";
    anchorRef: React.RefObject<HTMLElement>;
}

/**
 * Tooltip
 * A styled tooltip that stays in view.
 *
 * @param classes - Additional classes.
 * @param cnslSize - Specify the size, defaults to regular if undefined.
 * @param position - The position, "top" spawns bottom up, "bottom" spawns top down.
 * @param alignment - The alignment to the anchor, "left" or "right", defaults to left if undefined.
 * @param anchorRef - Tracks the external anchor.
 *
 * @returns The tooltip
 */
const Tooltip = forwardRef<HTMLDivElement, Props>(({ classes, cnslSize, position = "bottom", alignment = "left", anchorRef, ...props }, ref) => {
    let cls = "tooltip-hook";
    if (classes) cls += " " + classes.join(" ");
    if (cnslSize) cls += " " + cnslSize;
    if (position == "top") cls += " bottom-up";
    if (position == "bottom") cls += " top-down";

    // Handle hover events
    const [externalHovered, setExternalHovered] = useState(false);
    const externalMouseEnter = () => setExternalHovered(true);
    const externalMouseLeave = () => setExternalHovered(false);

    const [hovered, setHovered] = useState(false);
    const mouseEnter = () => setHovered(true);
    const mouseLeave = () => setHovered(false);

    useEffect(() => {
        let el = anchorRef?.current;
        el?.addEventListener("mouseenter", externalMouseEnter);
        el?.addEventListener("mouseleave", externalMouseLeave);
        return () => {
            el?.removeEventListener("mouseenter", externalMouseEnter);
            el?.removeEventListener("mouseleave", externalMouseLeave);
        };
    }, [anchorRef]);

    let clsTooltip = "tooltip";
    if (hovered || externalHovered) clsTooltip += " is-visible";
    if (alignment) clsTooltip += " align-" + alignment;

    // Keep tooltip in view
    const tooltipRef = useRef<HTMLDivElement>(null);
    useIsomorphicLayoutEffect(() => {
        const contain = () => {
            let anchor = anchorRef?.current;
            let tooltip = tooltipRef.current;
            if (tooltip && anchor) {
                let reference = anchor.getBoundingClientRect();
                let rect = tooltip.getBoundingClientRect();
                let m = document.querySelector(".content")?.getBoundingClientRect().x || 0;
                let w = rect.width;
                let vW = window.innerWidth || document.documentElement.clientWidth;

                let available = 0,
                    diff = 0;

                if (alignment == "left") {
                    available = vW - m - reference.x;
                    diff = available - w;

                    if (diff < 0) {
                        tooltip.style.left = diff + "px";
                    } else {
                        tooltip.style.left = "0px";
                    }
                }

                if (alignment == "right") {
                    available = reference.x + reference.width - m;
                    diff = available - w;

                    if (diff < 0) {
                        tooltip.style.right = diff + "px";
                    } else {
                        tooltip.style.right = "0px";
                    }
                }
            }
        };

        contain();
        window.addEventListener("resize", contain);
        return () => {
            window.removeEventListener("resize", contain);
        };
    }, [tooltipRef, anchorRef, externalHovered, alignment]);

    return (
        <div ref={ref} className={cls} {...props}>
            <div ref={tooltipRef} className={clsTooltip} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <div className="tooltip-content">{props.children}</div>
            </div>
            <style jsx global>
                {styles}
            </style>
        </div>
    );
});

Tooltip.displayName = "Tooltip";

export default Tooltip;
