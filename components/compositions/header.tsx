"use client";

import { useEffect, useState, useRef, useContext } from "react";
import { useTheme } from "next-themes";
import { GetTheme } from "@/components/providers/theme-provider";
import { usePathname } from "next/navigation";

import { useComponentQuery } from "@/components/effects/use-component-query";

import Logo from "@/components/elements/logo";
import MenuItem from "@/components/elements/menu-item";
import IconProvider from "@/components/elements/icon-provider";
import PictogramProvider from "@/components/elements/pictogram-provider";
import Button from "@/components/elements/button";
import FramedSection from "@/components/elements/framed-section";
import { useScrolledListener } from "@/components/effects/use-scrolled-listener";

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const headerNavRef = useRef<HTMLDivElement | null>(null);

    // get theme provider info
    const { setTheme } = useTheme();
    const theme = GetTheme();

    let scrolled = useScrolledListener();

    // check menu dropdown state, mobile and truncated
    const menuButtonRef = useRef<HTMLSpanElement | null>(null);
    const [menuDropdownActive, setMenuDropdownActive] = useState(false);

    const truncatedMenuButtonRef = useRef<HTMLSpanElement | null>(null);
    const truncatedMenuRef = useRef<HTMLDivElement | null>(null);
    const [truncatedMenuDropdownActive, setTruncatedMenuDropdownActive] = useState(false);

    const navItemClicked = () => {
        setMenuDropdownActive(false);
        setTruncatedMenuDropdownActive(false);
    };
    const menuButtonClicked = () => {
        setMenuDropdownActive(!menuDropdownActive);
    };
    const truncatedMenuButtonClicked = () => {
        setTruncatedMenuDropdownActive(!truncatedMenuDropdownActive);
    };

    useClickOutsideListener(headerNavRef, menuButtonRef, setMenuDropdownActive, truncatedMenuRef, truncatedMenuButtonRef, setTruncatedMenuDropdownActive);

    // check if should show mobile nav
    const mobileNav = useComponentQuery(
        {
            w: 640,
            op: "max",
            undefAtInit: true, // avoids flash of header on mobile nav
        },
        headerRef
    );
    const desktopNav = !mobileNav && mobileNav != undefined;

    let cls = "header header-fixed";
    if (mobileNav) cls += " is-mobile";
    if (desktopNav) cls += " is-desktop";
    if (desktopNav && truncatedMenuDropdownActive) cls += " is-truncated-active";
    if (mobileNav && menuDropdownActive) cls += " is-active";
    if (scrolled) cls += " is-scrolled";

    // compute menu items truncation
    const [navItemsToShow, setNavItemsToShow] = useState(7);
    const [navItemsMetrics, setNavItemsMetrics] = useState<any>([]);
    useNavItemsMetrics(headerNavRef, setNavItemsMetrics);
    useHeaderNavTruncation(headerRef, headerNavRef, navItemsMetrics, setNavItemsToShow);

    const hideableMenuItems = [
        <MenuItem key="header-nav-menu-item-1" data-show-more-nav-item href="/latest" onClick={navItemClicked}>
            Newsletter
        </MenuItem>,
        <MenuItem key="header-nav-menu-item-2" data-show-more-nav-item href="/tools" onClick={navItemClicked}>
            Tools
        </MenuItem>,
        <MenuItem key="header-nav-menu-item-3" data-show-more-nav-item href="/betas" onClick={navItemClicked}>
            Betas
        </MenuItem>,
        <MenuItem key="header-nav-menu-item-5" data-show-more-nav-item href="/profiles" onClick={navItemClicked}>
            Profiles
        </MenuItem>,
        <MenuItem key="header-nav-menu-item-6" data-show-more-nav-item href="/interviews" onClick={navItemClicked}>
            Interviews
        </MenuItem>,
        <MenuItem key="header-nav-menu-item-7" data-show-more-nav-item href="/podcast" onClick={navItemClicked}>
            Podcast
        </MenuItem>,
    ];

    const showMoreVisible = navItemsToShow < hideableMenuItems.length;

    const themeSwitcherBtn = (
        <MenuItem
            data-show-more-nav-item="fixed"
            href="#"
            classes={["menu-item-switch-theme console-control"]}
            iconPos="right"
            onClick={
                theme == "dark"
                    ? (e: { preventDefault: () => void }) => {
                          e.preventDefault();
                          setTheme("light");
                          return false;
                      }
                    : (e: { preventDefault: () => void }) => {
                          e.preventDefault();
                          setTheme("dark");
                          return false;
                      }
            }
        >
            {mobileNav && <span>Switch theme</span>}
            <IconProvider group="generic" name="theme" />
        </MenuItem>
    );

    const path = usePathname();
    const parts = path?.split("/").filter(Boolean);

    const publicNav = () => {
        return (
            <>
                {!shouldShowThemeSwitcherOnly(parts) && (
                    <>
                        {hideableMenuItems.map((ni, idx) => {
                            if (idx < navItemsToShow && !mobileNav) return ni;
                            else if (mobileNav) return ni;
                        })}

                        {showMoreVisible && desktopNav && (
                            <Button
                                ref={truncatedMenuButtonRef}
                                data-show-more-nav-item="show-more"
                                onClick={truncatedMenuButtonClicked}
                                appearance="text"
                                classes={["menu-item-more"]}
                                iconOnly
                                icon={{
                                    active: mobileNav && menuDropdownActive,
                                    group: "generic",
                                    name: "console-more",
                                }}
                            />
                        )}

                        {mobileNav && <div className="console-separator"></div>}
                    </>
                )}

                {themeSwitcherBtn}
            </>
        );
    };

    const leftoverNav = () => {
        return (
            <>
                {hideableMenuItems.map((ni, idx) => {
                    if (idx >= navItemsToShow) return ni;
                })}
            </>
        );
    };

    return (
        <header className={cls} ref={headerRef}>
            <Logo />
            {mobileNav && (
                <Button
                    ref={menuButtonRef}
                    onClick={menuButtonClicked}
                    appearance="text"
                    iconOnly
                    icon={{
                        active: mobileNav && menuDropdownActive,
                        group: "generic",
                        name: "menu",
                    }}
                    aria-label="Menu"
                />
            )}

            {showMoreVisible && (
                <FramedSection ref={truncatedMenuRef} size="wide" appearance="overlay">
                    {leftoverNav()}
                </FramedSection>
            )}
            <div className="header-nav" ref={headerNavRef}>
                {mobileNav ? (
                    <FramedSection size="wide" appearance="overlay">
                        {publicNav()}
                    </FramedSection>
                ) : (
                    publicNav()
                )}
            </div>
        </header>
    );
}

function useClickOutsideListener(menuRef: React.MutableRefObject<HTMLElement | null>, buttonRef: React.MutableRefObject<HTMLElement | null>, setMenuDropdownActive: React.Dispatch<React.SetStateAction<boolean>>, truncatedMenuRef: React.MutableRefObject<HTMLElement | null>, truncatedButtonRef: React.MutableRefObject<HTMLElement | null>, setTruncatedMenuDropdownActive: React.Dispatch<React.SetStateAction<boolean>>) {
    useEffect(() => {
        const handleClickOutside = (e: Event) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node) && buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
                setMenuDropdownActive(false);
            }
            if (truncatedMenuRef.current && !truncatedMenuRef.current.contains(e.target as Node) && truncatedButtonRef.current && !truncatedButtonRef.current.contains(e.target as Node)) {
                setTruncatedMenuDropdownActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, buttonRef, setMenuDropdownActive, truncatedMenuRef, truncatedButtonRef, setTruncatedMenuDropdownActive]);
}

function useNavItemsMetrics(navRef: React.MutableRefObject<HTMLElement | null>, setNavItemsMetrics: React.Dispatch<React.SetStateAction<any[]>>) {
    useEffect(() => {
        const navItemsHideable = navRef.current?.querySelectorAll<HTMLElement>("[data-show-more-nav-item='true']");
        let metrics: any = [];
        navItemsHideable?.forEach((ni) => {
            let metric = { size: 0 };
            const nis = getComputedStyle(ni);
            metric.size += parseFloat(nis.width);
            metric.size += parseFloat(nis.marginLeft);
            metric.size += parseFloat(nis.marginRight);
            metrics.push(metric);
        });
        setNavItemsMetrics(metrics);
    }, [navRef, setNavItemsMetrics]);
}

function useHeaderNavTruncation(headerRef: React.MutableRefObject<HTMLElement | null>, navRef: React.MutableRefObject<HTMLElement | null>, navItemsMetrics: any[], setNavItemsToShow: React.Dispatch<React.SetStateAction<number>>) {
    useEffect(() => {
        const getFixedNavW = () => {
            const navItems = navRef.current?.querySelectorAll<HTMLElement>("[data-show-more-nav-item='fixed']");
            let fixedW = 0;
            fixedW += 55; // show more button doesn't render the first time so we hardcode it all the time
            navItems?.forEach((ni) => {
                const nis = getComputedStyle(ni);
                fixedW += parseFloat(nis.width);
                fixedW += parseFloat(nis.marginLeft);
                fixedW += parseFloat(nis.marginRight);
            });
            return fixedW;
        };

        const getAvailW = () => {
            const header = headerRef.current;
            const headerStyle = getComputedStyle(header!);

            let logo = header?.querySelector<HTMLElement>("#logo-wrapper");

            let availW = parseFloat(headerStyle?.width);
            availW -= logo?.offsetWidth || 0;
            availW -= parseFloat(headerStyle.paddingLeft) || 0;
            availW -= parseFloat(headerStyle.paddingRight) || 0;

            availW -= getFixedNavW();

            availW -= 50;

            return availW;
        };

        const calculate = () => {
            if (navItemsMetrics.length > 0) {
                let availW = getAvailW();
                let itemsToShow = 0;

                navItemsMetrics.forEach((metric) => {
                    availW -= metric.size;
                    if (availW > 0) itemsToShow++;
                });

                setNavItemsToShow(itemsToShow);
            }
        };

        window.addEventListener("resize", calculate);
        calculate();
        return () => window.removeEventListener("resize", calculate);
    }, [headerRef, navRef, navItemsMetrics, setNavItemsToShow]);
}

// Checks if page should show the lines visuals
const shouldShowThemeSwitcherOnly = (pathParts: string[] | undefined) => {
    if (pathParts) {
        let partsToCheck: string[] = [];
        if (pathParts && pathParts.length > 0) {
            partsToCheck.push(pathParts[0]);
            if (pathParts[1]) partsToCheck.push(pathParts[1]);
            if (pathParts[1]) partsToCheck.push("single");
        }

        if (partsToCheck.includes("landing")) return true;
    } else return false;
};
