import React, { forwardRef } from "react";

import PlanePicture, { Props as PlanePictureProps } from "@/components/elements/plane-picture";
import IconProvider, { Props as IconProviderProps } from "@/components/elements/icon-provider";

import styles from "@/components/compositions/person-profile.scss";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    classes?: string[];
    picture: PlanePictureProps;
    icon?: IconProviderProps;
    iconPos?: "left" | "right";
    link?: {
        external?: boolean;
        href: string;
        title?: string;
    };
}

/**
 * Minimal person profile display.
 *
 * @param classes - Additional classes.
 * @param picture - The profile picture.
 * @param icon - A link icon.
 * @param iconPos - The link icon position.
 *
 * @returns The display component.
 */
const PersonProfile = forwardRef<HTMLDivElement, Props>(({ classes, picture, icon, iconPos = "left", link, ...props }, ref) => {
    let cls = "person-profile";
    if (classes) cls += " " + classes.join(" ");

    let linkCls = "link";
    if (iconPos) linkCls += " icon-" + iconPos;

    return (
        <>
            <div ref={ref} className={cls}>
                <PlanePicture inline byWidth={picture.byWidth} src={picture.src} alt={picture.alt} width={picture.width} />
                {link ? (
                    <a className={linkCls} href={link.href} title={link.title || link.href} target={link.external ? "_blank" : ""} rel={link.external ? "noreferrer noopener" : ""}>
                        {iconPos == "left" && icon && <IconProvider {...icon} />}
                        <span>{props.children}</span>
                        {iconPos == "right" && icon && <IconProvider {...icon} />}
                    </a>
                ) : (
                    <>
                        {iconPos == "left" && icon && <IconProvider {...icon} />}
                        <span>{props.children}</span>
                        {iconPos == "right" && icon && <IconProvider {...icon} />}
                    </>
                )}
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

PersonProfile.displayName = "PersonProfile";

export default PersonProfile;
