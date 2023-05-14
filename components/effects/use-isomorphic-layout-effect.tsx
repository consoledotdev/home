// Fixes server rendering warning for client side effect.
// See: https://stackoverflow.com/a/72818791
import { useEffect, useLayoutEffect } from "react";

const canUseDOM: boolean = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");

export const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
