import { forwardRef } from "react";

import styles from "@/components/elements/cta-box.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    classes?: string[];
    cnslSize?: "small" | "default";
    color?: "triad-01" | "default";
    appearance?: "light" | "default";
}

/**
 * A styled CTA box
 *
 * @param classes - Additional classes.
 * @param cnslSize - The box size, defaults when undefined.
 * @param color - The box color, defaults when undefined.
 * @param appearance - The box appearance, defaults when undefined.
 *
 * @returns The box component.
 */
const CTABox = forwardRef<HTMLDivElement, Props>(({ classes, cnslSize, color, appearance, ...props }, ref) => {
    let cls = "cta-box";
    if (classes) cls += " " + classes.join(" ");
    if (cnslSize) cls += " " + cnslSize;
    if (appearance) cls += " " + appearance;
    if (color) cls += " " + color;

    return (
        <div className={cls}>
            {props.children}
            <style jsx global>
                {styles}
            </style>
        </div>
    );
});

CTABox.displayName = "CTABox";

export default CTABox;
