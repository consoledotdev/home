export default function LogoMark() {
    return (
        <svg className="logo logo-svg-animated-explode" viewBox="-84 -64 175 128" fill="none" preserveAspectRatio="xMinYMin slice">
            <path
                id="plane-one"
                className="plane plane-one"
                transform="skewX(-26.56) translate(17.53 0)"
                d="
            M
            -50 -44.725
            L
            50 -44.725
            L
            50 44.725
            L
            -50 44.725
            L
            -50 -44.725
        Z"
                stroke="#5269FF"
            />
            <path
                id="plane-two"
                className="plane plane-two"
                transform="skewX(-26.56) translate(0 17.53)"
                d="
            M
            50 44.725
            L
            -50 44.725
            L
            -50 -44.725
            L
            50 -44.725
            L
            50 44.725
        Z"
                stroke="#F561F5"
            />
            <path
                id="plane-three"
                className="plane plane-three"
                transform="skewX(-26.56) translate(-17.53 -17.53)"
                d="
            M
            50 44.725
            L
            -50 44.725
            L
            -50 -44.725
            L
            50 -44.725
            L
            50 44.725
        Z"
                stroke="#01BC90"
            />
            <path className="prompt prompt-inverted" transform="translate(-80.5 -64)" fillRule="evenodd" clipRule="evenodd" d="M98.0473 91.9954L126.001 36.0845L63.4909 36.0885L35.5371 91.9994L98.0473 91.9954ZM78.7529 62.1993L63.7291 69.104L59.7918 76.9727L88.8982 63.5959L73.1724 50.232L70.6357 55.3013L78.7529 62.1993Z" fill="#ffffff" />
            <path className="prompt prompt-normal" transform="translate(-86 -63)" d="M65.3609 69.4288L81.14 62.17L72.6147 54.9183L75.2789 49.589L91.7954 63.6382L61.2256 77.701L65.3609 69.4288Z" fill="#ffffff" />
        </svg>
    );
}
