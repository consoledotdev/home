"use client";

/**
 * Convenience hook to track an element's scroll position
 *
 * @returns the 'scrollPos' property of the element.
 */
import { useEffect, useState } from "react";

type Props = {
    // the reference width
    el: HTMLElement | null;
};

export function useScrollListenerOnElement({ el }: Props) {
    const [scrollPos, setScrollPos] = useState<number>(0);

    useEffect(() => {
        const test = () => {
            if (el) setScrollPos(el.scrollTop);
        };

        if (el) el.addEventListener("scroll", test);
        test();

        return () => {
            if (el) el.removeEventListener("scroll", test);
        };
    }, [el, scrollPos]);

    return scrollPos;
}
