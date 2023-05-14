import React, { forwardRef } from "react";

import { InterviewMeta } from "@/app/lib/interviews";

import { consoleISODate } from "@/components/effects/utils";

import Card from "@/components/elements/card";
import ComboBox from "@/components/compositions/combo-box";
import Tag from "@/components/elements/tag";
import CardLink from "@/components/elements/card-link";

import styles from "@/components/compositions/card-interview.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    item: {
        meta: InterviewMeta;
    };
    layout?: "horizontal" | "default";
}

/**
 * The interview item card
 *
 * @param classes - Additional classes.
 * @param item - The interview item data.
 * @param layout - The display layout, horizontal will inline the combo box with the content, set to default when undefined.
 *
 * @returns The card component.
 */
const CardInterview = forwardRef<HTMLDivElement, Props>(({ classes, item, layout = "default", ...props }, ref) => {
    let cls = "card-interview";
    if (classes) cls += " " + classes.join(" ");
    if (layout == "horizontal") cls += " horizontal";

    return (
        <>
            <Card classes={[cls]}>
                <CardLink href={"/interviews/" + item.meta.slug} title={"View " + item.meta.title} />
                <ComboBox
                    srcs={{
                        left: {
                            src: item.meta.topImg2Src,
                            alt: item.meta.topImg2Alt,
                        },
                        right: {
                            src: item.meta.topImg1Src,
                            alt: item.meta.topImg1Alt,
                        },
                    }}
                    visualsType="logo-profile"
                    isVertical={layout != "horizontal"}
                />
                <div className="card-content">
                    <div className="card-heading">
                        <div className="card-person">
                            <p className="card-person-name">{item.meta.who}</p>
                            <p className="card-person-role">{item.meta.role}</p>
                        </div>
                        <div className="card-company">
                            <p className="card-company-name">{item.meta.org}</p>
                            <Tag tag={{ label: item.meta.tags.join(", ") }} inline />
                        </div>
                    </div>
                    <p className="small card-description">{item.meta.what}</p>
                    <span className="date bottom">{consoleISODate(item.meta.date)}</span>
                </div>
            </Card>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

CardInterview.displayName = "CardInterview";

export default CardInterview;
