import React, { forwardRef } from "react";

import { Beta } from "@/app/lib/betas";

import { consoleISODate } from "@/components/effects/utils";

import Card from "@/components/elements/card";
import VendorThumbnail from "@/components/compositions/vendor-thumbnail";
import Category from "@/components/elements/category";
import Tag from "@/components/elements/tag";
import CardLink from "@/components/elements/card-link";
import IconProvider from "@/components/elements/icon-provider";

import styles from "@/components/compositions/card-beta.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    item: Beta;
}

/**
 * The beta item card.
 *
 * @param classes - Additional classes.
 *
 * @returns The card component.
 */
const CardBeta = forwardRef<HTMLDivElement, Props>(({ classes, item, ...props }, ref) => {
    let cls = "card-beta";
    if (classes) cls += " " + classes.join(" ");
    if (item.newsletter) cls += " pick";

    return (
        <>
            <Card classes={[cls]}>
                <CardLink href={item.ga ? item.gaUrl : item.url} external title={item.ga ? item.gaUrl : item.url} text="Details" />
                {item.newsletter && <IconProvider group="generic" name="console-mini-filled" />}
                <div className="top">
                    <span className="date">{consoleISODate(item.date)}</span>
                </div>
                <div className="bottom">
                    <div className="left">
                        <VendorThumbnail
                            imageProvider={{
                                className: "image",
                                src: "/img/" + item.favicon,
                                alt: item.name,
                                width: "48",
                                height: "48",
                            }}
                        />
                        <h4 className="title title-3">{item.name}</h4>
                    </div>
                    <div className="right">
                        <div className="left">
                            <h4 className="title title-3">{item.name}</h4>
                            <p data-searchable className="card-description">
                                {item.description}
                            </p>
                        </div>
                        <div className="taxonomy">
                            <Category
                                category={{
                                    main: item.category.main,
                                }}
                                cnslSize="small"
                            />
                            <Tag tag={item.type} cnslSize="small" />
                        </div>
                    </div>
                </div>
            </Card>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

CardBeta.displayName = "CardBeta";

export default CardBeta;
