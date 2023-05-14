import Image from "next/image";

export default function NotFound() {
    return (
        <>
            <h2>Not Found</h2>
            <p>The page you were looking for was not found.</p>
            <Image src="/img/not-found.jpg" width={940} height={460} alt="Bus stop" />
        </>
    );
}
