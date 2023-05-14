import React, { forwardRef, useImperativeHandle, useRef } from "react";

import { Tech } from "@/components/effects/filters-handler";

import IconProvider from "@/components/elements/icon-provider";
import Tooltip from "@/components/elements/tooltip";

import styles from "@/components/compositions/tech-stack.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    techStack: Tech[];
}

/**
 * Tech stack display
 *
 * @param classes - Additional classes.
 * @param techStack - The tech stack.
 *
 * @returns The display component.
 */
const TechStack = forwardRef<HTMLDivElement, Props>(({ classes, techStack, ...props }, ref) => {
    let cls = "tech-stack-wrapper";
    if (classes) cls += " " + classes.join(" ");

    const techStackRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => techStackRef.current as HTMLInputElement);

    return (
        <>
            <div ref={techStackRef} className={cls}>
                <div className="tech-stack">
                    <IconProvider group="generic" name="tech-stack" />
                    {techStack.map((t: Tech, idx: number) => (
                        <React.Fragment key={t.label + "-" + idx}>
                            {t.label}
                            {idx < techStack.length ? <span>, </span> : ""}
                        </React.Fragment>
                    ))}
                </div>
                <Tooltip classes={["tech-stack-tooltip"]} cnslSize="small" position="bottom" anchorRef={techStackRef} alignment="left">
                    <p className="x-small">The company tech stack.</p>
                </Tooltip>
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

TechStack.displayName = "TechStack";

export default TechStack;
