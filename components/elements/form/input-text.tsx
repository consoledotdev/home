import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";

import IconProvider from "@/components/elements/icon-provider";
import InputWrapper from "./input-wrapper";

import styles from "@/components/elements/form/input-text.scss";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    classes?: string[];
    cnslSize?: InputSize;
    valueChanged?: Function;
    label?: string;
    layout?: InputLayout;
}

/**
 * Text input
 *
 * @param classes - Additional classes.
 * @param cnslSize - The input size, undefined returns default (large).
 * @param valueChanged - The input value changed callback.
 * @param label - The input label value.
 * @param layout - The layout, inline or block.
 *
 * @returns The input element.
 */
const InputText = forwardRef<HTMLInputElement, Props>(({ classes, cnslSize, valueChanged, label, layout = "block", ...props }, ref) => {
    const [inputValue, setInputValue] = useState<string>("");
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        valueChanged && valueChanged(e.target.value);
    };

    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const cancelClicked = () => {
        valueChanged && valueChanged("");
        setInputValue("");
        inputRef.current?.focus();
    };

    const [focused, setFocused] = useState<boolean>(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    let cls = "console-input-text";
    if (classes) cls += " " + classes.join(" ");
    if (cnslSize) cls += " " + cnslSize;
    if (focused) cls += " focus";
    if (inputValue != "") cls += " has-value";

    return (
        <>
            <InputWrapper
                classes={["text"]}
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
                <div className="console-input-text-wrapper">
                    <input ref={inputRef} className={cls} value={inputValue} onChange={onInputChange} onFocus={onFocus} onBlur={onBlur} {...props} />
                    <span className="console-input-text-cancel" onClick={cancelClicked}>
                        <IconProvider group="generic" name="cancel" />
                    </span>
                </div>
            </InputWrapper>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

InputText.displayName = "InputText";

export default InputText;
