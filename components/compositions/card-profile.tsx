import React, { forwardRef } from "react";

import { ProfileMeta } from "@/app/lib/profiles";

import Card from "@/components/elements/card";
import VendorThumbnail from "@/components/compositions/vendor-thumbnail";
import Category from "@/components/elements/category";
import Tag from "@/components/elements/tag";
import Button from "@/components/elements/button";
import CardLink from "@/components/elements/card-link";
import TechStack from "@/components/compositions/tech-stack";

import styles from "@/components/compositions/card-profile.scss";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    item: ProfileMeta;
}

/**
 * The company profile item card.
 *
 * @param classes - Additional classes.
 *
 * @returns The card component.
 */
const CardProfile = forwardRef<HTMLDivElement, Props>(({ classes, item, ...props }, ref) => {
    let cls = "card-profile";
    if (classes) cls += " " + classes.join(" ");

    return (
        <>
            <Card classes={[cls]}>
                <div className="top">
                    <CardLink href={"/profiles/" + item.slug} title={"View " + item.title} />
                    <div className="left">
                        <VendorThumbnail
                            imageProvider={{
                                className: "image",
                                src: item.companyInfo.favicon,
                                alt: item.title,
                                width: "48",
                                height: "48",
                            }}
                        />
                        <h4 className="title title-3">{item.title}</h4>
                    </div>
                    <div className="right">
                        <div className="left">
                            <h4 className="title title-3">{item.title}</h4>
                            <p data-searchable className="card-description">
                                {item.summary}
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
                    <div className="details">
                        <div className="left">
                            <TechStack techStack={item.techStack} />
                        </div>
                        {(item.podcast || item.interview) && (
                            <div className="right">
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
                                        title="Read Interview"
                                    >
                                        Console Q&A
                                    </Button>
                                )}
                                {item.podcast && (
                                    <Button
                                        appearance="text"
                                        cnslColor="triad-03"
                                        cnslSize="small"
                                        icon={{
                                            group: "generic",
                                            name: "podcast",
                                        }}
                                        iconPos="left"
                                        el="anchor"
                                        href={"/podcast/" + item.podcast}
                                        title="Listen to teh podcast"
                                    >
                                        Devtools Podcast
                                    </Button>
                                )}
                            </div>
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

CardProfile.displayName = "CardProfile";

export default CardProfile;
