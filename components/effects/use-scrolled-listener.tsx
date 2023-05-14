"use client";

import { useEffect, useState } from "react";

type Props = {
    offset?: number;
};

/**
 * Convenience hook to check document is scrolled
 *
 * @param offset - The optional check offset.
 *
 * @returns the 'scrolled' boolean.
 */
export const useScrolledListener = (props?: Props) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const test = () => {
            if (window.pageYOffset > (props?.offset || 0)) setScrolled(true);
            else setScrolled(false);
        };

        window.addEventListener("scroll", test);
        test();
        return () => window.removeEventListener("scroll", test);
    }, [scrolled, props?.offset]);

    return scrolled;
};
