import React, { forwardRef, useState } from "react";

import InputWrapper from "./input-wrapper";

import styles from "@/components/elements/form/input-radios.scss";

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
const InputRadios = forwardRef<HTMLDivElement, Props>(({ classes, cnslSize, color, name, valueChanged, value, label, layout = "block", radios, disabled, ...props }, ref) => {
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

    let cls = "console-input-radios";
    if (classes) cls += " " + classes.join(" ");
    if (cnslSize) cls += " " + cnslSize;
    if (layout) cls += " " + layout;
    if (focused) cls += " focus";

    const radioCls = (btn: any) => {
        let cls = "console-input-radio";
        if (btn.color) cls += " " + btn.color;
        else if (color) cls += " " + color;
        return cls;
    };

    return (
        <>
            <InputWrapper
                ref={ref}
                classes={["radios"]}
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
                <div className={cls}>
                    {radios.map((btn) => (
                        <div key={btn.label + "-" + btn.value} className={radioCls(btn)}>
                            <input {...props} disabled={disabled} type="radio" name={name} id={btn.value + "-radio"} value={btn.value} onFocus={onFocus} onBlur={onBlur} onChange={onChange} checked={value == btn.value ? true : inputValue == btn.value ? true : false} />
                            <label htmlFor={btn.value + "-radio"}>
                                <span className="check"></span>
                                {btn.label}
                            </label>
                        </div>
                    ))}
                </div>
            </InputWrapper>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

InputRadios.displayName = "InputRadios";

export default InputRadios;
