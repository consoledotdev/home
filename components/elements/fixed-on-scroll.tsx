import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

import { useScrolledListener } from "@/components/effects/use-scrolled-listener";

import styles from "@/components/elements/fixed-on-scroll.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    offset?: number;
}

/**
 * Component name and/or description.
 *
 * @param classes - Additional classes.
 * @param offset - The check offset.
 *
 * @returns The component.
 */
const FixedOnScroll = forwardRef<HTMLDivElement, Props>(({ classes, offset = 0, ...props }, ref) => {
    const elRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => elRef.current as HTMLDivElement);

    const scrolled = useScrolledListener({ offset: offset });

    let cls = "fixed-on-scroll";
    if (classes) cls += " " + classes.join(" ");
    if (scrolled) cls += " is-fixed";

    // set parent height to prevent content jump
    useEffect(() => {
        if (elRef.current) {
            if (scrolled) {
                const height = elRef.current.children[0].getBoundingClientRect().height || 0;
                elRef.current.parentElement ? (elRef.current.parentElement.style.height = height + "px") : null;
            } else {
                elRef.current.parentElement ? (elRef.current.parentElement.style.height = "auto") : null;
            }
        }
    }, [props.children, scrolled]);

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

FixedOnScroll.displayName = "FixedOnScroll";

export default FixedOnScroll;
