import { forwardRef } from "react";

import CTABox from "@/components/elements/cta-box";
import FormSubscribe, { Props as FormSubscribeProps } from "@/components/compositions/form-subscribe";

import { Props as CTABoxProps } from "@/components/elements/cta-box";

import styles from "@/components/compositions/launch-subscribe.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    classes?: string[];
    contentAfter?: React.ReactNode;
    ctaBoxProps?: CTABoxProps;
    formSubscribeProps?: FormSubscribeProps;
    cnslStyle?: "default" | "unboxed";
    cnslSize?: InputSize;
    layout?: InputLayout;
}

/**
 * Launch box for Console subscription
 *
 * @param classes - Additional classes.
 * @param contentAfter - Below form content hook.
 * @param ctaBoxProps - CTA Box override props.
 * @param formSubscribeProps - Subscribe form override props.
 * @param cnslStyle - The appearance, default (boxed) or unboxed.
 * @param cnslSize - The size, based on possible form input sizes.
 * @param layout - The layout, inline or block.
 *
 * @returns The launch box component.
 */
const LaunchSubscribe = forwardRef<HTMLDivElement, Props>(({ classes, contentAfter, ctaBoxProps, formSubscribeProps, cnslStyle, cnslSize, layout = "inline", ...props }, ref) => {
    let cls = "launch-subscribe";
    if (classes) cls += " " + classes.join(" ");
    if (contentAfter) cls += " has-after";
    if (cnslStyle) cls += " " + cnslStyle;
    if (cnslSize) cls += " " + cnslSize;
    if (ctaBoxProps?.classes) {
        cls += " " + ctaBoxProps.classes.join(" ");
        delete ctaBoxProps.classes;
    }
    cls += " " + layout;

    const content = (
        <>
            <div className="launch-copy">{props.children}</div>
            <FormSubscribe cnslSize={cnslSize} {...formSubscribeProps} />
            {contentAfter && <div className="launch-after">{contentAfter}</div>}
        </>
    );

    return (
        <>
            {cnslStyle == "unboxed" ? (
                <div ref={ref} className={cls}>
                    {content}
                </div>
            ) : (
                <CTABox ref={ref} classes={[cls]} {...ctaBoxProps}>
                    {content}
                </CTABox>
            )}
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

LaunchSubscribe.displayName = "LaunchSubscribe";

export default LaunchSubscribe;
