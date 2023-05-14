import React, { forwardRef, useState } from "react";

import IconProvider from "@/components/elements/icon-provider";
import InputWrapper from "./input-wrapper";

import styles from "@/components/elements/form/input-checkbuttons.scss";

type Checkbuttons = {
    label: string;
    value: string;
    checked: boolean;
};

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    cnslSize?: InputSize;
    color?: "triad-01" | "triad-02" | "triad-03";
    valueChanged?: Function;
    values?: string[];
    label?: string;
    layout?: InputLayout;
    buttons: Checkbuttons[];
}

/**
 * Checkbuttons input.
 *
 * @param classes - Additional classes.
 * @param cnslSize - The input size, undefined returns default (large).
 * @param color - The active checkbutton color.
 * @param valueChanged - The input value changed callback.
 * @param values - The list of active values.
 * @param label - The input label value.
 * @param layout - The layout, inline or block.
 * @param buttons - The checkbuttons data.
 *
 * @returns The checkbuttons input component.
 */
const InputCheckbuttons = forwardRef<HTMLDivElement, Props>(({ classes, cnslSize, color, valueChanged, values, label, layout = "block", buttons, ...props }, ref) => {
    const [inputValues, setInputValues] = useState<string[]>(buttons.filter((b) => b.checked).map((b) => b.value));
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        (e.target as HTMLElement).blur();
        (e.currentTarget as HTMLElement).blur();

        let newValues = [];
        if (inputValues.length == buttons.length) {
            newValues.push(e.target.value);
        } else {
            newValues = inputValues.slice();
            if (e.target.checked) newValues.push(e.target.value);
            if (!e.target.checked) newValues = newValues.filter((v) => v != e.target.value);

            if (newValues.length == 0) {
                buttons.map((b) => newValues.push(b.value));
            }
        }

        setInputValues(newValues);
        valueChanged && valueChanged(newValues);
    };

    const [focused, setFocused] = useState<boolean>(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    let cls = "console-input-checkbuttons";
    if (classes) cls += " " + classes.join(" ");
    if (cnslSize) cls += " " + cnslSize;
    if (layout) cls += " " + layout;
    if (focused) cls += " focus";

    const checkbuttonCls = (btn: any) => {
        let cls = "console-input-checkbutton";
        if (btn.color) cls += " " + btn.color;
        else if (color) cls += " " + color;
        return cls;
    };

    return (
        <>
            <InputWrapper
                ref={ref}
                classes={["checkbuttons"]}
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
                    {buttons.map((btn) => (
                        <div key={btn.label + "-" + btn.value} className={checkbuttonCls(btn)}>
                            <input type="checkbox" name={btn.value} id={btn.value + "-checkbutton"} value={btn.value} onFocus={onFocus} onBlur={onBlur} onChange={onChange} checked={values ? values.indexOf(btn.value) >= 0 : inputValues.indexOf(btn.value) >= 0} />
                            <label htmlFor={btn.value + "-checkbutton"}>
                                <IconProvider group="generic" name="plus" />
                                <IconProvider group="generic" name="checkmark" />
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

InputCheckbuttons.displayName = "InputCheckbuttons";

export default InputCheckbuttons;
