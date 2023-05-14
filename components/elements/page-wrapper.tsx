"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import Lines from "@/components/visuals/lines";

import styles from "@/components/elements/page-wrapper.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    classes?: string[];
}

export default function PageWrapper({ classes, ...props }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [fullHeight, setFullHeight] = useState(false);

    const path = usePathname();

    // Adjust content to full height where necessary
    const test = () => {
        const content = document.querySelector(".content") as HTMLElement;
        const contentHeight = content?.offsetHeight || 0;
        const wrapperHeight = ref.current?.offsetHeight || 0;
        if (contentHeight < wrapperHeight) setFullHeight(true);
    };

    useEffect(() => {
        test();

        window.addEventListener("resize", test);
        return () => window.removeEventListener("resize", test);
    }, [ref]);

    useEffect(test, [path]);

    // Build classes string
    const parts = path?.split("/").filter(Boolean);

    let cls = "page-wrapper overflow-wrapper";
    if (fullHeight) cls += " full-height";
    if (parts && parts.length > 0) {
        cls += " " + parts[0];
        cls += parts[1] ? " single" : "";
        cls += parts[1] ? " " + parts[1] : "";
    } else {
        cls += " home";
    }
    if (classes) cls += " " + classes.join(" ");

    return (
        <div ref={ref} {...props} className={cls}>
            <>
                {shouldAddLines(parts) && (
                    <div className="hero">
                        <Lines />
                    </div>
                )}
                {props.children}
            </>
            <style jsx global>
                {styles}
            </style>
        </div>
    );
}

// Checks if page should show the lines visuals
const shouldAddLines = (pathParts: string[] | undefined) => {
    if (pathParts) {
        let partsToCheck: string[] = [];
        if (pathParts && pathParts.length > 0) {
            partsToCheck.push(pathParts[0]);
            if (pathParts[1]) partsToCheck.push(pathParts[1]);
            if (pathParts[1]) partsToCheck.push("single");
        }

        if (partsToCheck.length == 0) return true;
        if (partsToCheck.includes("tools") && !partsToCheck.includes("single")) return true;
        if (partsToCheck.includes("profiles") && !partsToCheck.includes("single")) return true;
        if (partsToCheck.includes("interviews") && !partsToCheck.includes("single")) return true;
        if (partsToCheck.includes("podcast") && !partsToCheck.includes("single")) return true;
        if (partsToCheck.includes("betas")) return true;
        if (partsToCheck.includes("advertise")) return true;
        if (partsToCheck.includes("latest")) return true;
        if (partsToCheck.includes("privacy")) return true;
        if (partsToCheck.includes("badges")) return true;
    } else return false;
};
