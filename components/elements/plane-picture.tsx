import React, { forwardRef } from "react";

import Image, { ImageProps } from "next/image";

import styles from "@/components/elements/plane-picture.scss";

export interface Props extends ImageProps {
    classes?: string[];
    inline?: boolean;
    byWidth?: boolean;
    width?: number;
    cnslType?: "logo" | "divider" | "default";
}

/**
 * Picture framed with the Console plane.
 *
 * @param classes - Additional classes.
 * @param inline - Renders an inline element (span).
 * @param byWidth - The image is sized using the width, defaults to using height.
 * @param width - The desired base width.
 * @param cnslType - The component type, logo renders a small square logo inside the plane, divider is used by combo-box.
 *
 * @returns The framed picture component.
 */
const PlanePicture = forwardRef<HTMLDivElement | HTMLSpanElement, Props>(({ classes, inline, byWidth, width = defaultSize.width, cnslType = "default", ...props }, ref) => {
    let cls = "plane-picture";
    if (classes) cls += " " + classes.join(" ");
    if (byWidth) cls += " by-width";

    const El = (props: any) => {
        return inline ? <span {...props} /> : <div {...props} />;
    };

    const height = props.height || defaultSize.height;
    const alt = props.alt || "";

    const img = <Image className="image" loading="lazy" {...props} width={width} height={height} alt={alt} />;

    return (
        <>
            <El className={cls}>
                {cnslType == "default" && (
                    <>
                        {
                            // trunk-ignore(eslint/@next/next/no-img-element)
                            <img className="ratio" src="/img/ratio-plane.png" alt="" />
                        }
                        {img}
                    </>
                )}
                {cnslType == "divider" && ""}
                {cnslType == "logo" && <span className="logo aspect-ratio aspect-ratio-1-1">{img}</span>}
            </El>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

PlanePicture.displayName = "PlanePicture";

export default PlanePicture;

const defaultSize = {
    width: 600,
    height: 384,
};
