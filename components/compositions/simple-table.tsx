import React, { forwardRef } from "react";

import styles from "@/components/compositions/simple-table.scss";

export type Row = {
    name?: string;
    cells: Cell[];
};

export type Cell = {
    name?: string;
    meta?: boolean;
    header?: boolean;
    content: string | React.ReactNode;
};

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    data: Row[];
}

/**
 * Simple table
 *
 * @param classes - Additional classes.
 * @param data - The table data.
 *
 * @returns The table component.
 */
const SimpleTable = forwardRef<HTMLDivElement, Props>(({ classes, data, ...props }, ref) => {
    let cls = "simple-table";
    if (classes) cls += " " + classes.join(" ");

    return (
        <>
            <div ref={ref} className={cls}>
                <div className="simple-table-grid">
                    {data.map((row, rowIdx) => (
                        <div key={"table-row-" + rowIdx} className={"row" + (row.name ? " " + row.name : "")}>
                            {row.cells.map((cell, cellIdx) => (
                                <div key={"table-cell-" + rowIdx + "-" + cellIdx} className={"cell" + (cell.meta ? " cell-meta" : "") + (cell.header ? " cell-header" : "")}>
                                    {cell.content}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

SimpleTable.displayName = "SimpleTable";

export default SimpleTable;
