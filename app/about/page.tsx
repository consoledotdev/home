import ClientPage from "./client-page";

export const metadata = {
    title: "Welcome to Console",
    description: "Console's mission is to help developers do their best work.",
    alternates: {
        canonical: "https://console.dev/about",
    },
};

export default async function Page() {
    return <ClientPage />;
}
