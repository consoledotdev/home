import React, { forwardRef } from "react";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

import styles from "./menu-item.scss";

export const links = () => [{ rel: "stylesheet", href: styles }];

// @ts-ignore
type Props = LinkProps & {
    href: string;
    rank?: "primary" | "secondary" | "tertiary";
    external?: boolean;
    subitem?: boolean;
    classes?: string[];
    activeClass?: string;
    title?: string;
    iconPos?: "left" | "right";
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
};

/**
 * Generates a menu item with customizable base el.
 *
 * @param href - The destination.
 * @param rank - The item rank, one of "primary" | "secondary" | "tertiary".
 * @param external - When pointing externally, renders a generic "a" tag.
 * @param subitem - Defines the item as a subitem.
 * @param classes - Additional css classes.
 * @param activeClass - The class used for the active state.
 * @param title - The link title.
 * @param iconPos - Specifies the icon position ("left" | "right").
 * @param onClick - The onclick handler.
 * @param children - The item children.
 *
 * @returns A menu item
 */
const MenuItem = forwardRef<any, Props>(({ href, external = false, subitem, rank = "primary", classes, activeClass = "is-selected", title, iconPos, onClick, ...props }, ref) => {
    const clicked = (e: React.MouseEvent<HTMLElement>) => {
        (e.target as HTMLElement).blur();
        (e.currentTarget as HTMLElement).blur();
        if (onClick) onClick(e);
    };

    const pathname = usePathname();
    const isActive = pathname === href;

    let cls = "menu-item";
    if (rank) cls += " menu-item-" + rank;
    if (subitem) cls += " menu-subitem";
    if (classes) cls += " " + classes.join(" ");
    if (isActive) cls += " " + activeClass;
    if (iconPos) cls += " icon-" + iconPos;

    return (
        <>
            {external ? (
                <a ref={ref} className={cls} href={href} title={title} onClick={clicked} target="_blank" rel="noreferrer" {...props}>
                    {props.children}
                </a>
            ) : (
                <Link ref={ref} title={title} className={cls} href={href} onClick={clicked} {...props}>
                    <>{props.children}</>
                </Link>
            )}
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

MenuItem.displayName = "MenuItem";

export default MenuItem;
