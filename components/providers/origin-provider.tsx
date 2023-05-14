"use client";

import { useOriginCheck } from "@/components/effects/use-origin-check";

/**
 * Origin check provider
 */

type Props = {
    children: React.ReactNode;
};

export default function Provider(props: Props) {
    useOriginCheck();

    return <>{props.children}</>;
}
