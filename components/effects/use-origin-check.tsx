"use client";

import { useEffect } from "react";

type Props = {};

/**
 * Convenience hook to check the request origin.
 */
export const useOriginCheck = (props?: Props) => {
    useEffect(() => {
        let body = document.querySelector("body");
        if (body) {
            if (document.referrer.indexOf(location.host) < 0) {
                body.classList.remove("is-same-origin");
            } else {
                body.classList.add("is-same-origin");
            }
        }
    }, []);
};
