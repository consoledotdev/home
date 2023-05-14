import React, { forwardRef } from "react";

import { Tool } from "@/app/lib/tools";

import { consoleISODate } from "@/components/effects/utils";

import Card from "@/components/elements/card";
import IconProvider from "@/components/elements/icon-provider";
import SponsorDisclosure from "@/components/compositions/sponsor-disclosure";
import VendorThumbnail from "@/components/compositions/vendor-thumbnail";
import Category from "@/components/elements/category";
import Tag from "@/components/elements/tag";
import Button from "@/components/elements/button";
import CardLink from "@/components/elements/card-link";

import styles from "@/components/compositions/card-tool.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    item: Tool;
}

/**
 * The tool item card.
 *
 * @param classes - Additional classes.
 * @param item - The tool item data.
 *
 * @returns The card component.
 */
const CardTool = forwardRef<HTMLDivElement, Props>(({ classes, item, ...props }, ref) => {
    let cls = "card-tool";
    if (classes) cls += " " + classes.join(" ");

    return (
        <>
            <Card classes={[cls]}>
                <div className="top">
                    <CardLink href={"/tools/" + item.slug} title={"View " + item.name} />
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
                                    sub: item.category.sub,
                                }}
                                cnslSize="small"
                            />
                            <Tag tag={item.type} cnslSize="small" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="like-dont-like col-2">
                        <div className="left">
                            <p data-searchable className="small">
                                <span>
                                    <IconProvider group="generic" name="like" /> What we like:
                                </span>{" "}
                                {item.like}
                            </p>
                        </div>
                        <div className="right">
                            <p data-searchable className="small">
                                <span>
                                    <IconProvider group="generic" name="dislike" /> What we don&apos;t like:
                                </span>{" "}
                                {item.dislike}
                            </p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="left">
                            <span className="date">Reviewed: {consoleISODate(item.date)}</span>
                            {(item.sponsored || item.investment) && <SponsorDisclosure onItem layout="tooltip" cnslSize="x-small" />}
                        </div>
                        {item.interview && (
                            <Button
                                appearance="text"
                                cnslColor="triad-03"
                                cnslSize="small"
                                icon={{
                                    group: "generic",
                                    name: "console-interview",
                                }}
                                iconPos="left"
                                el="anchor"
                                href={"/interviews/" + item.interview}
                                title="Read interview"
                            >
                                Console interview
                            </Button>
                        )}
                    </div>
                </div>
            </Card>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

CardTool.displayName = "CardTool";

export default CardTool;
