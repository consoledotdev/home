/**
 * Convenience hook to create component media queries.
 *
 * @example
 * ```
 * // returns true/false depending on component width
 * let isLargerThanMaxWidth = useComponentQuery({w: maxWidth, op: "min"});
 * ```
 *
 * @returns the 'result' property of the query.
 */
import type React from "react";
import { useEffect, useState } from "react";

interface Query {
    // the reference width
    w: number;
    // the desired operation
    op: "min" | "max";
    // returns undefined at default init
    undefAtInit: boolean;
}

export function useComponentQuery(query: Query, ref: React.RefObject<HTMLElement>) {
    const [result, setResult] = useState<undefined | boolean>(query.undefAtInit ? undefined : false);

    useEffect(() => {
        const test = () => {
            let state: boolean = false;

            if (ref && ref?.current) {
                if (query.op == "min") state = ref.current.offsetWidth >= query.w;
                if (query.op == "max") state = ref.current.offsetWidth <= query.w;
            }
            setResult(state);
        };
        window.addEventListener("resize", test);
        test();
        return () => window.removeEventListener("resize", test);
    }, [result, query, ref]);

    return result;
}
