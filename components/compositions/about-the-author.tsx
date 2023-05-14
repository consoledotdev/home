import React, { forwardRef } from "react";

import styles from "@/components/compositions/about-the-author.scss";
import PlanePicture from "../elements/plane-picture";

export interface Props extends React.HTMLAttributes<HTMLElement> {
    classes?: string[];
    author: {
        name: string;
        bio: string | React.ReactNode;
        url?: string;
        img: string;
    };
}

/**
 * About the author box
 *
 * @param classes - Additional classes.
 * @param author - The author info.
 * @param author.name - The author name.
 * @param author.bio - The author bio.
 * @param author.url - The author URL.
 *
 * @returns The about box component.
 */
const AboutTheAuthor = forwardRef<HTMLDivElement, Props>(({ classes, author, ...props }, ref) => {
    let cls = "about-the-author";
    if (classes) cls += " " + classes.join(" ");

    return (
        <>
            <div ref={ref} className={cls}>
                <PlanePicture byWidth src={author.img} alt={author.name} width={328} />
                <div className="author-content">
                    <h6 className="title title-5">About the author</h6>
                    <p className="small">
                        {author.url ? (
                            <a className="link author-name" href={author.url} title={author.url} rel="me" target="_blank">
                                {author.name}
                            </a>
                        ) : (
                            author.name
                        )}{" "}
                        {author.bio}
                    </p>
                </div>
            </div>
            <style jsx global>
                {styles}
            </style>
        </>
    );
});

AboutTheAuthor.displayName = "AboutTheAuthor";

export default AboutTheAuthor;
