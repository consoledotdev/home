import Link from "next/link";
import LogoMark from "@/components/elements/logo-mark";

export default function Logo() {
    return (
        <h1 id="logo-wrapper" className="logo-wrapper">
            <Link href="/">
                <LogoMark />
                <span>Console</span>
            </Link>
        </h1>
    );
}
