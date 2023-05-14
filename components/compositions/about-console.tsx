import React, { forwardRef } from "react";

import LogoMark from "../elements/logo-mark";

import styles from "@/components/compositions/about-console.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    classes?: string[];
    after?: React.ReactNode;
}

/**
 * About Console
 * A graphically rich brief description of Console.
 *
 * @param classes - Additional classes.
 * @returns The about Console component.
 */
const AboutConsole = forwardRef<HTMLDivElement, Props>(({ classes, after, ...props }, ref) => {
    let cls = "about-console";
    if (classes) cls += " " + classes.join(" ");

    return (
        <div className={cls}>
            <LogoMark />
            <div className="about-console-content">
                <h6 className="title title-5">About Console</h6>
                <p className="small">
                    <span className="console-name">Console</span> is the place developers go to find the best tools. Each week, our weekly newsletter picks out the most interesting tools and new releases. We keep track of everything - dev tools, devops, cloud, and APIs - so you don&apos;t have to.
                </p>
                {after}
            </div>
            <style jsx global>
                {styles}
            </style>
        </div>
    );
});

AboutConsole.displayName = "AboutConsole";

export default AboutConsole;
