import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { usePathname } from "next/navigation";
import { usePlausible } from "next-plausible";
import va from "@vercel/analytics";

import InputText from "@/components/elements/form/input-text";
import Button from "@/components/elements/button";

import styles from "@/components/compositions/form-subscribe.scss";

export interface Props extends React.HTMLAttributes<HTMLFormElement> {
    classes?: string[];
    cnslSize?: InputSize;
    layout?: InputLayout;
}

/**
 * Console Weekly Subscription Form
 *
 * @param classes - Additional classes.
 * @param cnslSize - The form inputs size.
 * @param layout - The form layout, inline or block.
 *
 * @returns The form component.
 */
const FormSubscribe = forwardRef<HTMLFormElement, Props>(({ classes, cnslSize, layout = "block", ...props }, ref) => {
    let cls = "console-form-subscribe";
    if (classes) cls += " " + classes.join(" ");
    if (cnslSize) cls += " " + cnslSize;
    cls += " " + layout;

    const plausible = usePlausible();

    const path = usePathname();

    const formRef = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => formRef.current as HTMLFormElement);

    const onSubmit = () => {
        plausible("Newsletter Subscribe");
    };

    return (
        <form ref={formRef} className={cls} method="post" name="console-subscribe" onSubmit={onSubmit} action="https://dev.us7.list-manage.com/subscribe/post?u=f8c3cd14ee8d63c53d0986a48&amp;id=267911a165">
            <InputText cnslSize={cnslSize ? cnslSize : undefined} required id="form-email" type="email" name="EMAIL" title="Email" placeholder="Your email" />

            <input type="hidden" value={path || "/"} name="REFERRER" id="mc-referrer" readOnly tabIndex={-1} />

            {/* Anti spam field */}
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                <input type="text" name="b_f8c3cd14ee8d63c53d0986a48_267911a165" tabIndex={-1} defaultValue="" />
            </div>

            <Button
                icon={{
                    group: "generic",
                    name: "send",
                }}
                iconPos="left"
                title="Sign Up"
                type="submit"
                cnslSize={cnslSize ? cnslSize : undefined}
                onClick={() => {
                    va.track("Newsletter Subscribe", { path: path || "/" });
                }}
            >
                Sign Up
            </Button>

            <style jsx global>
                {styles}
            </style>
        </form>
    );
});

FormSubscribe.displayName = "FormSubscribe";

export default FormSubscribe;
