import React, { forwardRef, useState } from "react";

import Image, { ImageProps } from "next/image";
import IconProvider from "./icon-provider";
import Caption from "./caption";

import styles from "@/components/elements/image-provider.scss";

export interface Props extends ImageProps {
    classes?: string[];
    placeholderText?: string;
    center?: boolean;
    caption?: React.ReactNode;
    fixedRatio?: number;
}

/**
 * Image with graceful placeholder fallback
 *
 * @param classes - Additional classes.
 * @param placeholderText - Placeholder text fallback.
 * @param center - Aligns the image to the center of its wrapper.
 * @param caption - Caption node hook.
 * @param fixedRatio - Displays the image with the given fixed ratio.
 * @returns The image or fallback.
 */
const ImageProvider = forwardRef<HTMLImageElement, Props>(({ classes, placeholderText, center, caption, fixedRatio, ...props }, ref) => {
    const [err, setErr] = useState(false);
    const imgError = () => setErr(true);

    let cls = "image-wrapper content-max-width";
    if (classes) cls += " " + classes.join(" ");
    if (center) cls += " center";
    if (fixedRatio) cls += " fixed-ratio";
    if (err) {
        //console.error("ImageProvider error: ", imgError, err, props.src);
        cls += " placeholder";
    }

    let css: React.CSSProperties = {};
    if (fixedRatio) css.paddingBottom = fixedRatio + "%";

    const width = props.width || defaultSize.width;
    const height = props.height || defaultSize.height;
    const alt = props.alt || "";

    return (
        <div ref={ref} className={cls} style={css}>
            {err ? (
                <>
                    <IconProvider group="generic" name="empty" />
                    {placeholderText && <p className="small">{placeholderText}</p>}
                </>
            ) : (
                <>
                    <Image loading="lazy" onError={imgError} {...props} width={width} height={height} alt={alt} />
                </>
            )}
            {caption && <Caption>{caption}</Caption>}
            <style jsx global>
                {styles}
            </style>
        </div>
    );
});

ImageProvider.displayName = "ImageProvider";

export default ImageProvider;

const defaultSize = {
    width: 600,
    height: 384,
};
