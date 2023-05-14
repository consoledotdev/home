import React, { forwardRef } from "react";
import { ReactSVG } from "react-svg";

export type BadgeColor = "green1" | "blue1" | "purple1" | "green2" | "blue2" | "purple2" | "bw";

export interface Props {
    vertical?: boolean;
    type?: "pick" | "logo" | "ribbon";
    color?: BadgeColor;
    theme?: "dark" | "light";
    border?: boolean;
}

const location = "/img/badges/1.0/svg/";
const extension = "svg";

/**
 * Console Badge
 *
 * @param vertical - The badge layout, "vertical" also stands for "compact".
 * @param type - The glyph type.
 * @param color - The badge color hue.
 * @param theme - The assumed bg theme.
 * @param border - Adds a border to the badge.

 * @returns The badge element.
 */
const Badge = forwardRef<HTMLDivElement, Props>(({ vertical = false, type = "pick", color = "green1", theme = "dark", border = true, ...props }, ref) => {
    let filename;
    filename = "console-badge";
    if (vertical) filename += "-vertical";
    filename += "-" + type;
    if (color) filename += "-" + color;
    filename += "-" + theme;
    if (border) filename += "-border";
    filename += "." + extension;

    return <ReactSVG src={location + filename} />;
});

Badge.displayName = "Badge";

export default Badge;
