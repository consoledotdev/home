"use client";

import { createContext } from "react";
import { useScrollListener } from "@/components/effects/use-scroll-listener";
import { useScrolledListener } from "@/components/effects/use-scrolled-listener";

const defaultValue = {
    pageIsScrolled: false,
    pageScrollPos: 0,
};

type Props = {
    children: React.ReactNode;
};

const ScrollStateContext = createContext(defaultValue);

/**
 * Provides scroll state info.
 *
 * To use the provider:
 *
 * import { ScrollStateProvider } from "path/to/scroll-state-provider";
 * ...
 * <body>
 *   ...
 *     <ScrollStateProvider>
 *       ...
 *     </ScrollStateProvider>
 *   ...
 * </body>
 *
 * To get provider data in a component:
 *
 * import { ScrollStateContext } from "path/to/scroll-state-provider";
 * ...
 * let { pageIsScrolled } = useContext(ScrollStateContext);
 *
 * @returns the provider and provider context.
 */
const ScrollStateProvider = (props: Props) => {
    const scrolled = useScrolledListener();
    const scrollPos = useScrollListener();

    return <ScrollStateContext.Provider value={{ pageIsScrolled: scrolled, pageScrollPos: scrollPos }}>{props.children}</ScrollStateContext.Provider>;
};

export { ScrollStateContext, ScrollStateProvider };
