import React, { forwardRef, useState } from "react";

import InputWrapper from "./input-wrapper";

import styles from "@/components/elements/form/input-toggle.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    cnslSize?: InputSize;
    color?: "triad-01" | "triad-02" | "triad-03" | "attention";
    name: string;
    valueChanged?: Function;
    value?: string;
    label?: string;
    layout?: InputLayout;
    text: { checked: string; unchecked?: string };
    checked: boolean;
    disabled?: boolean;
}

/**
 * Checkbuttons input.
 *
 * @param classes - Additional classes.
 * @param cnslSize - The input size, undefined returns default (large).
 * @param color - The active toggle color.
 * @param name - The toggle name.
 * @param valueChanged - The input value changed callback.
 * @param value - The active value.
 * @param label - The toggle wrapper label.
 * @param text - The toggle label text for checked/unchecked.
 * @param checked - The toggle state.
 * @param disabled - The toggle disabled state.
 *
 * @returns The radios input component.
 */
const InputToggle = forwardRef<HTMLDivElement, Props>(({ classes, cnslSize, color, name, valueChanged, value, label, layout, text, checked, disabled, ...props }, ref) => {
    const [inputChecked, setInputChecked] = useState<boolean>(checked || false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        (e.target as HTMLElement).blur();
        (e.currentTarget as HTMLElement).blur();

        let checked = e.target.checked;

        setInputChecked(checked);
        valueChanged && valueChanged(checked);
    };

    const [focused, setFocused] = useState<boolean>(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    let cls = "console-input-toggle";
    if (classes) cls += " " + classes.join(" ");
    if (cnslSize) cls += " " + cnslSize;
    if (focused) cls += " focus";
    if (color) cls += " " + color;

    return (
        <>
            <InputWrapper
                ref={ref}
                classes={["toggle"]}
                cnslSize={cnslSize}
                label={
                    label
                        ? {
                              value: label,
                              for: "",
                          }
                        : undefined
                }
                layout={layout}
            >
                <div key={name + "-" + value} className="console-input-toggle-wrapper">
                    <input {...props} className={cls} disabled={disabled} type="checkbox" name={name} id={value + "-toggle"} value={value} onFocus={onFocus} onBlur={onBlur} onChange={onChange} checked={checked ? true : inputChecked ? true : false} />
                    <label htmlFor={value + "-toggle"}>
                        <span className="check"></span>
                        {checked ? text.checked : text.unchecked ? text.unchecked : text.checked}
                    </label>
                </div>
            </InputWrapper>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

InputToggle.displayName = "InputToggle";

export default InputToggle;
