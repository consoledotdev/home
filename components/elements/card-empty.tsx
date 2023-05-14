import React, { forwardRef } from "react";

import styles from "@/components/elements/card-empty.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
}

/**
 * An empty card placeholder.
 *
 * @param classes - Additional classes.
 *
 * @returns The empty card placeholder component.
 */
const CardEmpty = forwardRef<HTMLDivElement, Props>(({ classes, ...props }, ref) => {
    let cls = "card-empty";
    if (classes) cls += " " + classes.join(" ");

    return (
        <>
            <div className={cls}>{props.children}</div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

CardEmpty.displayName = "CardEmpty";

export default CardEmpty;
