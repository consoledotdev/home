import React, { forwardRef } from "react";

import ImageProvider, { Props as ImageProviderProps } from "@/components/elements/image-provider";

import styles from "@/components/compositions/vendor-thumbnail.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    imageProvider: ImageProviderProps;
}

/**
 * A vendor thumbnail display with fallback.
 *
 * @param classes - Additional classes.
 * @param imageProvider - The image provider props.
 *
 * @returns The thumbnail component.
 */
const VendorThumbnail = forwardRef<HTMLDivElement, Props>(({ classes, imageProvider, ...props }, ref) => {
    let cls = "vendor-thumbnail aspect-ratio aspect-ratio-1-1";
    if (classes) cls += " " + classes.join(" ");

    return (
        <>
            <div className={cls}>
                <ImageProvider {...imageProvider} />
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

VendorThumbnail.displayName = "VendorThumbnail";

export default VendorThumbnail;
