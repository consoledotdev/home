import React, { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";

import { useScrollListener } from "@/components/effects/use-scroll-listener";
import { useScrollListenerOnElement } from "../effects/use-scroll-listener-on-element";

import styles from "@/components/elements/fixable.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    bounds?: {
        top: number;
        bottom: number;
    };
}

/**
 * Fixable wrapper
 *
 * @param classes - Additional classes.
 * @param bounds - The fixable threshold.
 *
 * @returns The wrapper component.
 */
const Fixable = forwardRef<HTMLDivElement, Props>(({ classes, bounds = { top: 100, bottom: 100 }, ...props }, ref) => {
    const [fixed, setFixed] = useState<boolean>(false);

    const elRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => elRef.current as HTMLDivElement);

    const scrollPos = useScrollListener();
    const elScrollPos = useScrollListenerOnElement({ el: elRef.current });

    useLayoutEffect(() => {
        const el = elRef.current;
        if (el && bounds) {
            const top = el.parentElement?.getBoundingClientRect().top;
            const fix = (top && top < bounds.top) || false;

            setFixed(fix);

            if (fix) {
                let style = {
                    position: "fixed",
                    width: "",
                    top: bounds.top + "px",
                    bottom: bounds.bottom + "px",
                };

                const w = el.parentElement?.clientWidth;
                if (w) style.width = w + "px";

                const fRect = document.querySelector(".footer-block")?.getBoundingClientRect();
                if (fRect) {
                    const peek = Math.max(0, document.documentElement.clientHeight - fRect.top);
                    style.bottom = peek + bounds.bottom + "px";
                }

                for (const [key, value] of Object.entries(style)) {
                    (el.style as Indexable)[key] = value;
                }
            } else {
                el.style.cssText = "";
            }
        }
    }, [scrollPos, elScrollPos, elRef, bounds]);

    let cls = "fixable";
    if (classes) cls += " " + classes.join(" ");
    if (fixed) cls += " fixed";

    return (
        <>
            <div ref={elRef} className={cls}>
                {props.children}
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

Fixable.displayName = "Fixable";

export default Fixable;
