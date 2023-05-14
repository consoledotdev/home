import styles from "./filter.scss";

/**
 * Filter icon
 *
 * @param active - Specifies the icon state.
 * @returns The icon element.
 */
export interface Props {
    active?: boolean;
}

export default function Icon({ active }: Props) {
    let cls = "icon icon-filter";
    active && (cls += " is-active");

    return (
        <div className={cls}>
            <div className="icon-filter-shape-one"></div>
            <div className="icon-filter-shape-two"></div>
            <div className="icon-filter-shape-three"></div>
            <style jsx global>
                {styles}
            </style>
        </div>
    );
}
