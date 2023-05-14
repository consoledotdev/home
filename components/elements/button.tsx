import Link from "next/link";
import React, { forwardRef } from "react";
import type { Props as IconProviderProps } from "@/components/elements/icon-provider";
import IconProvider from "@/components/elements/icon-provider";

import styles from "./button.scss";

export interface Props {
    cnslSize?: InputSize;
    appearance?: "text";
    iconOnly?: boolean;
    cnslColor?: "triad-01" | "triad-02" | "triad-03" | "yellow" | "sunset" | "danger";
    round?: boolean;
    quiet?: boolean;
    el?: "anchor" | "link" | "button";
    target?: string;
    href?: string;
    title?: string;
    rel?: string;
    type?: string;
    icon?: IconProviderProps;
    iconPos?: "left" | "right";
    loading?: boolean;
    classes?: string[];
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    tabIndex?: number;
    hoverContent?: React.ReactNode | string;
    disabled?: boolean;
}

/**
 * Generates a console button.
 *
 * @param cnslSize - Specifies the size of the button, defaults to large if undefined.
 * @param appearance - Specifies the appearance of the button, defaults to primary if undefined.
 * @param iconOnly - Specifies whether it should only show the icon.
 * @param cnslColor - Specifies the color of the button, defaults to the primary color if undefined.
 * @param round - When true, generates a rounded variant.
 * @param quiet - When true, generates a toned down variant.
 * @param el - Specifies whether to generate the button as a href, Remix Link, Remix NavLink or <button> tag.
 * @param target - Specifies the attribute. Only used when el is set to anchor.
 * @param href - Specifies the link location.
 * @param title - Specifies the link title.
 * @param rel - Specify the href rel. Only used when el is set to anchor.
 * @param type - Specify the button type.
 * @param icon - Specifies an icon to render on the button.
 * @param iconPos - Specifies the icon position ("left" | "right").
 * @param loading - Sets the button in a loading state.
 * @param classes - Additional CSS classes.
 * @param children - The node children.
 * @param onClick - The click callback.
 * @param tabIndex - The tabIndex prop.
 * @param hoverContent - A custom hover tooltip display.
 * @returns The button element.
 */
const Button = forwardRef<any, Props>(({ cnslSize, appearance, iconOnly, cnslColor, round, quiet, el, target, title, rel, type, icon, iconPos, loading, classes, onClick, tabIndex, hoverContent, disabled, ...props }, ref) => {
    let cls = "console-button";
    if (appearance && appearance == "text") cls = "console-button-text";
    if (iconOnly) cls += " icon-only";
    if (cnslColor) cls += " " + cnslColor;
    if (round) cls += " round";
    if (quiet) cls += " quiet";
    if (cnslSize) cls += " " + cnslSize;
    if (iconPos) cls += " icon-" + iconPos;
    if (loading) cls += " is-loading";
    if (classes) cls += " " + classes.join(" ");

    const clicked = (e: React.MouseEvent<HTMLElement>) => {
        (e.target as HTMLElement).blur();
        (e.currentTarget as HTMLElement).blur();
        if (onClick) onClick(e);
    };

    if (el == "link") {
        return (
            <Link
                ref={ref}
                className={cls}
                // @ts-ignore
                href={props.href || ""}
                title={title}
                {...props}
                tabIndex={tabIndex}
            >
                {loading && <IconProvider group={icon?.group || "generic"} name={"loader"} />}
                {icon?.name && (iconPos == "left" || iconOnly) && <IconProvider group={icon?.group || "generic"} {...icon} />}
                {props.children && <span>{props.children}</span>}
                {icon?.name && iconPos == "right" && <IconProvider group={icon?.group || "generic"} {...icon} />}
                {hoverContent && <span className="hover-content">{hoverContent}</span>}
                <style jsx global>
                    {styles}
                </style>
            </Link>
        );
    }
    if (el == "anchor") {
        return (
            <a ref={ref} href={props.href} className={cls} title={title} target={target} rel={rel} {...props} onClick={clicked} tabIndex={tabIndex}>
                {loading && <IconProvider group={icon?.group || "generic"} name={"loader"} />}
                {icon?.name && (iconPos == "left" || iconOnly) && <IconProvider group={icon?.group || "generic"} {...icon} />}
                {props.children && <span>{props.children}</span>}
                {icon?.name && iconPos == "right" && <IconProvider group={icon?.group || "generic"} {...icon} />}
                {hoverContent && <span className="hover-content">{hoverContent}</span>}
                <style jsx global>
                    {styles}
                </style>
            </a>
        );
    }
    return (
        <button ref={ref} className={cls} {...props} onClick={clicked} tabIndex={tabIndex} disabled={disabled}>
            {loading && <IconProvider group={icon?.group || "generic"} name={"loader"} />}
            {icon?.name && (iconPos == "left" || iconOnly) && <IconProvider group={icon?.group || "generic"} {...icon} />}
            {props.children && <span>{props.children}</span>}
            {icon?.name && iconPos == "right" && <IconProvider group={icon?.group || "generic"} {...icon} />}
            {hoverContent && <span className="hover-content">{hoverContent}</span>}
            <style jsx global>
                {styles}
            </style>
        </button>
    );
});

Button.displayName = "Button";

export default Button;
