import styles from "./menu.scss";

/**
 * Menu icon
 *
 * @param active - Specifies the icon state.
 * @returns The icon element.
 */
export interface Props {
    active?: boolean;
}

export default function Icon({ active }: Props) {
    let cls = "icon icon-menu";
    active && (cls += " is-active");

    return (
        <div className={cls}>
            <div className="icon-menu-shape-one"></div>
            <div className="icon-menu-shape-two"></div>
            <style jsx global>
                {styles}
            </style>
        </div>
    );
}
