import ClientPage from "./client-page";

export const metadata = {
    title: "Console Selection Criteria",
    description: "The selection criteria used at Console to select and review the best tools for developers.",
    alternates: {
        canonical: "https://console.dev/selection-criteria",
    },
};

export default async function Page() {
    return <ClientPage />;
}
