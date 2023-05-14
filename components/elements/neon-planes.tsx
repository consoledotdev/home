import React, { forwardRef } from "react";

import styles from "@/components/elements/neon-planes.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    cnslType: "all" | "one-three" | "one" | "two" | "three";
}

/**
 * Console neon planes artwork.
 *
 * @param classes - Additional classes.
 * @param cnslType - The planes artwork type.
 *
 * @returns The component.
 */
const NeonPlanes = forwardRef<HTMLDivElement, Props>(({ classes, cnslType, ...props }, ref) => {
    let cls = "neon-planes";
    if (classes) cls += " " + classes.join(" ");
    if (cnslType) cls += " " + cnslType;

    return (
        <>
            <div ref={ref} className={cls}>
                {cnslType == "all" && (
                    <>
                        <div className="neon-plane triad-01">
                            <div></div>
                        </div>
                        <div className="neon-plane triad-02">
                            <div></div>
                        </div>
                        <div className="neon-plane triad-03">
                            <div></div>
                        </div>
                    </>
                )}
                {cnslType == "one-three" && (
                    <>
                        <div className="neon-plane triad-01">
                            <div></div>
                        </div>
                        <div className="neon-plane triad-03">
                            <div></div>
                        </div>
                    </>
                )}
                {cnslType == "one" && (
                    <div className="neon-plane triad-01">
                        <div></div>
                    </div>
                )}
                {cnslType == "two" && (
                    <div className="neon-plane triad-02">
                        <div></div>
                    </div>
                )}
                {cnslType == "three" && (
                    <div className="neon-plane triad-03">
                        <div></div>
                    </div>
                )}
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

NeonPlanes.displayName = "NeonPlanes";

export default NeonPlanes;
