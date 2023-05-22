import ClientPage from "./client-page";

export const metadata = {
    title: "Privacy Policy",
    description: "Our goal is to track as little as possible, only collecting what will help us improve Console.",
    alternates: {
        canonical: "https://console.dev/privacy",
    },
};

export default async function Page() {
    return <ClientPage />;
}
