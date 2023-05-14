import React, { forwardRef, useImperativeHandle, useRef } from "react";

import { useComponentQuery } from "@/components/effects/use-component-query";
import PlanePicture from "../elements/plane-picture";

import styles from "@/components/compositions/combo-box.scss";

type Img = {
    src: string;
    alt?: string;
};

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    isVertical?: boolean;
    verticalThres?: {
        w: number;
        op: "min" | "max";
    };
    visualsType?: "logo-logo" | "logo-profile";
    srcs: {
        left: Img;
        right: Img;
    };
}

/**
 * Console combo display box with slanted style.
 *
 * @param classes - Additional classes.
 * @param isVertical - Renders a variant with a straight right edge, well suited for block display.
 * @param verticalThres - Sets a threshold.
 * @param visualsType - Configure as a logo/logo or logo/profile combo.
 *
 * @returns The combo box.
 */
const ComboBox = forwardRef<HTMLDivElement, Props>(({ classes, isVertical, verticalThres, visualsType = "logo-logo", srcs, ...props }, ref) => {
    let cls = "combo-box";
    if (classes) cls += " " + classes.join(" ");

    const boxRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => boxRef.current as HTMLDivElement);

    isVertical =
        useComponentQuery(
            {
                ...(verticalThres || {
                    w: 0,
                    op: "max",
                }),
                undefAtInit: false,
            },
            boxRef
        ) || isVertical;

    if (isVertical) cls += " is-vertical";

    let visualsCls = "combo-box-visuals";
    visualsCls += " " + visualsType;

    return (
        <>
            <div ref={boxRef} className={cls}>
                {
                    // trunk-ignore(eslint/@next/next/no-img-element)
                    <img className="ratio" src="/img/ratio-combo.png" alt="" />
                }
                <div className={visualsCls}>
                    {visualsType == "logo-profile" && (
                        <>
                            <PlanePicture classes={["left"]} cnslType="logo" src={srcs.left.src} alt={srcs.left.alt || ""} />
                            <PlanePicture classes={["right"]} src={srcs.right.src} alt={srcs.right.alt || ""} />
                        </>
                    )}

                    {visualsType == "logo-logo" && (
                        <>
                            <PlanePicture classes={["left"]} cnslType="logo" src={srcs.left.src} alt={srcs.left.alt || ""} />
                            <PlanePicture classes={["mid"]} cnslType="divider" src={""} alt={""} />
                            <PlanePicture classes={["right"]} cnslType="logo" src={srcs.right.src} alt={srcs.right.alt || ""} />
                        </>
                    )}
                </div>
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

ComboBox.displayName = "ComboBox";

export default ComboBox;
