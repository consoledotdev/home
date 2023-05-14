import React, { forwardRef } from "react";

import styles from "@/components/elements/caption.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {}

/**
 * A media caption
 *
 * @returns The caption element.
 */
const Caption = forwardRef<HTMLDivElement, Props>((props, ref) => {
    let cls = "caption";

    let content: React.ReactNode;
    if (typeof props.children === "string" || props.children instanceof String) content = <p>{props.children}</p>;
    else content = props.children;

    return (
        <div ref={ref} className={cls}>
            {content}
            <style jsx global>
                {styles}
            </style>
        </div>
    );
});

Caption.displayName = "Caption";

export default Caption;
