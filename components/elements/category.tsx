import React, { forwardRef } from "react";

import IconProvider from "./icon-provider";

import styles from "./category.scss";

export const links = () => [{ rel: "stylesheet", href: styles }];

type Props = {
    inline?: boolean;
    clickable?: boolean;
    cnslSize?: "small" | "large";
    category: {
        main: {
            label: string;
            slug: string;
        };
        sub?: {
            label: string;
            slug: string;
        };
    };
};

/**
 * A category indicator.
 *
 * @param inline - Changes the wrapper element from block to inline.
 * @param clickable - Makes the item clickable.
 * @param cnslSize - Specify the size, defaults to small if undefined.
 * @param category - The category to show.
 * @param category.main - The main category.
 * @param category.sub - The sub category.
 *
 * @returns the category indicator.
 */
const Category = forwardRef<any, Props>(({ inline, clickable, cnslSize, category, ...props }, ref) => {
    const clicked = (e: React.MouseEvent<HTMLElement>) => {
        (e.target as HTMLElement).blur();
        (e.currentTarget as HTMLElement).blur();
    };

    let cls = "categories";
    if (clickable) cls += " clickable";
    if (inline) cls += " inline";
    if (cnslSize) cls += " " + cnslSize;

    let inner = () => {
        let content = (
            <>
                <IconProvider group="category" name={category.main.slug} />
                <span className="category">{category.sub?.label || category.main.label}</span>
            </>
        );

        return clickable ? <a href={`/${category.sub?.slug || category.main.slug}/`}>{content}</a> : content;
    };

    return (
        <>
            {inline ? <span className={cls}>{inner()}</span> : <div className={cls}>{inner()}</div>}
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

Category.displayName = "Category";

export default Category;
