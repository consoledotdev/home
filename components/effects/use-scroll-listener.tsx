"use client";

/**
 * Convenience hook to track document scroll position
 *
 * This component is heavy on performance.
 * The scroll position checks trigger continuous
 * rerenders on the component that implements it,
 * so consider using useScrolledListener instead where possible.
 *
 * @returns the 'scrollPos' property of the query.
 */
import { useEffect, useState } from "react";

export function useScrollListener() {
    const [scrollPos, setScrollPos] = useState<number>(0);

    useEffect(() => {
        const test = () => {
            setScrollPos(window.pageYOffset);
        };

        window.addEventListener("scroll", test);
        test();
        return () => window.removeEventListener("scroll", test);
    }, [scrollPos]);

    return scrollPos;
}
