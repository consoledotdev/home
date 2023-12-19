import React, { forwardRef, useState } from "react";

import InputWrapper from "./input-wrapper";

import styles from "@/components/elements/form/input-select.scss";

type SelectOption = {
    label: string;
    value: string;
    placeholder?: boolean;
};

export interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    classes?: string[];
    cnslSize?: InputSize;
    valueChanged?: Function;
    label?: string;
    layout?: InputLayout;
    options: SelectOption[];
    placeholder?: boolean;
}

/**
 * Select input.
 *
 * @param classes - Additional classes.
 * @param cnslSize - The input size, undefined returns default (large).
 * @param valueChanged - The input value changed callback.
 * @param label - The input label value.
 * @param layout - The layout, inline or block.
 * @param options - The select options.
 * @param placeholder - Uses a placeholder element.
 *
 * @returns The select component.
 */
const InputSelect = forwardRef<HTMLSelectElement, Props>(({ classes, cnslSize, valueChanged, label, layout = "block", options, placeholder, ...props }, ref) => {
    const [inputValue, setInputValue] = useState<string>(options[0].value);
    const onInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        (e.target as HTMLElement).blur();
        (e.currentTarget as HTMLElement).blur();
        setInputValue(e.target.value);
        valueChanged && valueChanged(e.target.value);
    };

    const [focused, setFocused] = useState<boolean>(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    let cls = "console-input-select";
    if (classes) cls += " " + classes.join(" ");
    if (cnslSize) cls += " " + cnslSize;
    if (focused) cls += " focus";
    if (inputValue != "") cls += " has-value";
    if (options[0].placeholder) cls += " has-placeholder";

    return (
        <>
            <InputWrapper
                classes={["select"]}
                cnslSize={cnslSize}
                label={
                    label
                        ? {
                              value: label,
                              for: props.name,
                          }
                        : undefined
                }
                layout={layout}
            >
                <select ref={ref} className={cls} value={inputValue} onChange={onInputChange} onFocus={onFocus} onBlur={onBlur} {...props}>
                    {options.map((opt) => (
                        <option key={props.name + "-" + opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </InputWrapper>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

InputSelect.displayName = "InputSelect";

export default InputSelect;
