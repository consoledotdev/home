"use client";

/**
 * Theme provider wrapper
 * Necessary for Next.js aopp dir,
 * see: https://github.com/pacocoursey/next-themes/issues/161
 *
 * @returns the wrapped dom.
 */

import { ThemeProvider, useTheme } from "next-themes";

type Props = {
    children: React.ReactNode;
};

export default function Provider(props: Props) {
    return <ThemeProvider attribute="class">{props.children}</ThemeProvider>;
}

export const GetTheme = () => {
    const { theme, systemTheme } = useTheme();
    let activeTheme = theme;
    if (theme == "system") activeTheme = systemTheme;
    return activeTheme;
};
