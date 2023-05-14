import styles from "./loader.scss";

export default function Icon() {
    return (
        <>
            <svg className="icon icon-stroke icon-loader" viewBox="0 0 128 128">
                <path vectorEffect="non-scaling-stroke" className="path" d="M40.4799 25.5056L125.573 25.5002L87.52 101.611L2.42706 101.616L40.4799 25.5056Z" />
            </svg>
            <style jsx global>
                {styles}
            </style>
        </>
    );
}
