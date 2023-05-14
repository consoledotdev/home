import React, { forwardRef } from "react";

import styles from "@/components/elements/card.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
}

/**
 * The list card wrapper.
 *
 * @param classes - Additional classes.
 *
 * @returns The card wrapper.
 */
const Card = forwardRef<HTMLDivElement, Props>(({ classes, ...props }, ref) => {
    let cls = "card";
    if (classes) cls += " " + classes.join(" ");

    return (
        <>
            <div className={cls}>
                <div className="card-inner">{props.children}</div>
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

Card.displayName = "Card";

export default Card;
