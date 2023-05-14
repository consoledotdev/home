import React, { createRef, forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";

import { useScrollListener } from "@/components/effects/use-scroll-listener";

import styles from "@/components/compositions/toc.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    position?: "left" | "right";
    items: {
        href: string;
        label: string;
        isSub?: boolean;
        isActive?: boolean;
    }[];
    contentStartRef?: React.RefObject<HTMLElement>;
    contentEndRef?: React.RefObject<HTMLElement>;
    hook: React.RefObject<HTMLElement>;
}

/**
 * Table of contents
 *
 * @param classes - Additional classes.
 *
 * @returns The toc component.
 */
const TOC = forwardRef<HTMLDivElement, Props>(({ classes, position = "left", items, hook, contentEndRef, contentStartRef, ...props }, ref) => {
    let cls = "toc";
    if (position) cls += " toc-" + position;
    if (classes) cls += " " + classes.join(" ");

    const [viewportHeight, setViewportHeight] = useState<number>(0);

    useLayoutEffect(() => {
        setViewportHeight(window.innerHeight);
        window.addEventListener("resize", () => setViewportHeight(window.innerHeight));
        return () => window.removeEventListener("resize", () => setViewportHeight(window.innerHeight));
    }, [ref]);

    // Compute TOC position
    const elRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => elRef.current as HTMLDivElement);

    const [fixed, setFixed] = useState(false);

    const scrollPos = useScrollListener();

    useLayoutEffect(() => {
        if (elRef.current && hook.current) {
            const rect = elRef.current.getBoundingClientRect();

            // Start
            const startRectTop = hook.current.getBoundingClientRect().top;
            const startThres = viewportHeight / 2 - rect.height / 2;
            const startTop = startRectTop + scrollPos;
            const startDist = startTop - startThres - scrollPos;

            // End
            let endDist = 0;
            let endTop = docHeight();
            if (contentEndRef?.current) endTop = contentEndRef.current.getBoundingClientRect().top;
            const endThres = viewportHeight / 2 + rect.height / 2;
            endDist = endThres - endTop;

            if (startDist <= 0) {
                elRef.current.style.top = startThres - Math.max(endDist, 0) + "px";
                setFixed(true);
            } else {
                elRef.current.style.top = "";
                setFixed(false);
            }
        }
    }, [scrollPos, contentEndRef, hook, viewportHeight]);

    if (fixed) cls += " is-fixed";

    // Compute TOC indicator position
    const ulRef = createRef<HTMLUListElement>();
    const [indicatorOffset, setIndicatorOffset] = useState("");
    useLayoutEffect(() => {
        if (ulRef.current) {
            let start = 0;
            let end = docHeight();
            let current = 0;

            if (contentStartRef?.current) {
                start = scrollPos + contentStartRef.current.getBoundingClientRect().top - viewportHeight / 2;
            }
            if (contentEndRef?.current) {
                end = scrollPos + contentEndRef.current.getBoundingClientRect().top - viewportHeight / 2;
            }

            const range = end - start;
            current = Math.min(Math.max(0, scrollPos - start), range);

            const scrollElapsed = current / range;
            const availableHeight = ulRef.current.getBoundingClientRect().height;

            setIndicatorOffset(availableHeight * scrollElapsed + "px");
        }
    }, [contentStartRef, contentEndRef, scrollPos, viewportHeight]);

    // Compute TOC items active state
    const [renderedItems, setRenderedItems] = useState([...items]);
    useLayoutEffect(() => {
        const newItems = [...renderedItems];
        newItems.forEach((item, idx) => {
            const contentEl = document.querySelector(`#${item.href}`);

            if (contentEl) {
                const rect = contentEl.getBoundingClientRect();
                const thres = viewportHeight / 2 - rect.height / 2;
                const top = rect.top + scrollPos;
                const dist = top - thres - scrollPos;

                if (dist <= 0) {
                    item.isActive = true;

                    newItems.forEach((otherItem, otherIdx) => {
                        if (otherIdx > idx && otherItem.isActive) item.isActive = false;
                    });
                } else {
                    item.isActive = false;
                }
            }
        });

        setRenderedItems(newItems);
    }, [scrollPos, viewportHeight]);

    return (
        <div ref={elRef} className={cls}>
            <h5 className="title title-4">Contents</h5>
            <span className="toc-indicator" style={{ transform: `translateY(${indicatorOffset})` }}></span>

            <ul ref={ulRef}>
                {renderedItems.map((item, idx) => (
                    <li key={`toc-item-${item.href}-${idx}`} className={"toc-item" + (item.isSub ? " toc-item-sub" : "")}>
                        <a className={"toc-link" + (item.isActive ? " is-active" : "")} href={"#" + item.href}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <style jsx global>
                {styles}
            </style>
        </div>
    );
});

TOC.displayName = "TOC";

export default TOC;

const docHeight = () => {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
};
