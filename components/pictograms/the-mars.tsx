import styles from "./the-mars.scss";

/**
 * Mars illustration
 *
 * @param props.cnslSize - Specifies the sie, one of: default | large.
 * @returns The icon element.
 */

export default function Pictogram({ ...props }) {
    let cls = "mars-illustration-mars";
    props?.cnslSize == "large" && (cls += " is-large");

    return (
        <div className={cls}>
            <div className="mars-illustration-mars-inner-shading"></div>
            <div className="mars-illustration-mars-texture">
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <style jsx global>
                {styles}
            </style>
        </div>
    );
}
