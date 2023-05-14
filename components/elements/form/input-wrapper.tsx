import React, { forwardRef } from "react";

import styles from "@/components/elements/form/input-wrapper.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    cnslSize?: InputSize;
    layout?: InputLayout;
    label?: {
        value?: string;
        for?: string;
    };
}

/**
 * Component name and/or description.
 *
 * @param classes - Additional classes.
 * @param cnslSize - The input size, undefined returns default (large).
 * @param label - The input label.
 *
 * @returns The component.
 */
const InputWrapper = forwardRef<HTMLDivElement, Props>(({ classes, cnslSize, layout = "inline", label, ...props }, ref) => {
    let cls = "console-input-wrapper";
    if (classes) cls += " " + classes.join(" ");
    if (cnslSize) cls += " " + cnslSize;
    cls += " " + layout;

    return (
        <>
            <div className={cls}>
                {label && (
                    <label htmlFor={label.for} className="console-label">
                        {label.value}
                    </label>
                )}
                {props.children}
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

InputWrapper.displayName = "InputWrapper";

export default InputWrapper;
