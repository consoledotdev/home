import React, { ElementType, forwardRef } from "react";

import IconProvider, { Props as IconProviderProps } from "@/components/elements/icon-provider";

import styles from "@/components/elements/rich-title.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    tag?: ElementType;
    icon?: IconProviderProps;
    iconRight?: IconProviderProps;
    customIconLeft?: React.ReactNode;
    text?: string;
}

/**
 * Rich title display, shows an icon
 *
 * @param classes - Additional classes.
 * @param tag - The heading tag.
 * @param icon - The rich title icon, left aligned.
 * @param iconRight - The rich title icon, right aligned.
 * @param text - The rich title text, when undefined renders props.children.
 *
 * @returns The title component.
 */
const RichTitle = forwardRef<HTMLDivElement, Props>(({ classes, tag: TitleTag = "h1", icon, iconRight, customIconLeft, text, ...props }, ref) => {
    let cls = "rich-title title";
    if (classes) cls += " " + classes.join(" ");
    let titleN = parseInt((TitleTag as string).replace(/\D/g, ""));
    if (TitleTag != "h1") titleN -= 1;

    if (!classes?.includes("title-6")) cls += " title-" + titleN;

    return (
        <>
            <TitleTag className={cls}>
                {customIconLeft}
                {icon && <IconProvider {...icon} />}
                <span>{text || props.children}</span>
                {iconRight && <IconProvider {...iconRight} />}
            </TitleTag>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

RichTitle.displayName = "RichTitle";

export default RichTitle;
