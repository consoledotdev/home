import React, { forwardRef, useState } from "react";

import styles from "@/components/elements/segmented-control.scss";

export type Radio = {
    label: string;
    value: string;
    checked: boolean;
    color?: string;
};

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    cnslSize?: InputSize;
    color?: "triad-01" | "triad-02" | "triad-03" | "attention";
    name: string;
    valueChanged?: Function;
    value?: string;
    label?: string;
    layout?: InputLayout;
    radios: Radio[];
    disabled?: boolean;
}

/**
 * Checkbuttons input.
 *
 * @param classes - Additional classes.
 * @param cnslSize - The input size, undefined returns default (large).
 * @param color - The active radio color.
 * @param name - The radios name.
 * @param valueChanged - The input value changed callback.
 * @param value - The active value.
 * @param label - The input label value.
 * @param layout - The layout, inline or block.
 * @param radios - The radios data.
 * @param disabled - The radios disabled state.
 *
 * @returns The radios input component.
 */
const SegmentedControl = forwardRef<HTMLDivElement, Props>(({ classes, cnslSize, color, name, valueChanged, value, label, layout = "block", radios, disabled, ...props }, ref) => {
    const [inputValue, setInputValue] = useState<string | null>(radios.find((b) => b.checked)?.value || null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        (e.target as HTMLElement).blur();
        (e.currentTarget as HTMLElement).blur();

        let newValue = e.target.value;

        setInputValue(newValue);
        valueChanged && valueChanged(newValue);
    };

    const [focused, setFocused] = useState<boolean>(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    let cls = "console-segmented-control";
    if (classes) cls += " " + classes.join(" ");
    if (cnslSize) cls += " " + cnslSize;
    if (layout) cls += " " + layout;
    if (focused) cls += " focus";

    return (
        <>
            <div className={cls}>
                {radios.map((radio) => (
                    <div key={radio.label + "-" + radio.value}>
                        <input {...props} disabled={disabled} type="radio" name={name} id={radio.value + "-radio"} value={radio.value} onFocus={onFocus} onBlur={onBlur} onChange={onChange} checked={value == radio.value ? true : inputValue == radio.value ? true : false} />
                        <label htmlFor={radio.value + "-radio"}>{radio.label}</label>
                    </div>
                ))}
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

SegmentedControl.displayName = "SegmentedControl";

export default SegmentedControl;
