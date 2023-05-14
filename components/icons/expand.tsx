import styles from "./expand.scss";

/**
 * Expand icon
 *
 * @param active - Specifies the icon state.
 * @returns The icon element.
 */
export interface Props {
    active?: boolean;
}

export default function Icon({ active }: Props) {
    let cls = "icon icon-expand";
    active && (cls += " is-active");

    return (
        <div className={cls}>
            <div className="icon-expand-shape-one"></div>
            <div className="icon-expand-shape-two"></div>
            <style jsx global>
                {styles}
            </style>
        </div>
    );
}
