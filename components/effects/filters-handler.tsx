interface Query {
    terms: string[];
    fields: string[];
    items: any[];
}
/**
 * Filters handler
 *
 * @param terms - The filtering terms.
 * @param fields - The fields against which to check the terms.
 * @param items - The filterable items.
 *
 * @returns the filtered items.
 */
export function filtersHandler(q: Query): any[] {
    let filteredItems = q.items.slice();

    filteredItems = filteredItems.filter((item) => {
        const catIn = q.fields.indexOf("category") >= 0 ? categoryInTerms(q.terms, item) : true;
        const tagIn = q.fields.indexOf("tag") >= 0 ? tagInTerms(q.terms, item) : true;
        const techIn = q.fields.indexOf("tech") >= 0 ? techInTerms(q.terms, item) : true;
        return catIn && tagIn && techIn;
    });

    return filteredItems;
}

const categoryInTerms = (terms: string[], item: any) => {
    return terms.indexOf(item.category.main.slug) >= 0;
};

const tagInTerms = (terms: string[], item: any) => {
    let tagIn = terms.indexOf(item.type.slug) >= 0;
    let pickIn = item.newsletter && terms.indexOf("weekly-pick") >= 0;
    return tagIn || pickIn;
};

const techInTerms = (terms: string[], item: any) => {
    return item.techStack.some((t: Tech) => terms.includes(t.slug));
};

export type Category = {
    label: string;
    slug: string;
};

export const categories = [
    {
        slug: "api",
        label: "API",
    },
    {
        slug: "cloud",
        label: "Cloud",
    },
    {
        slug: "database",
        label: "Database",
    },
    {
        slug: "data-science",
        label: "Data Science",
    },
    {
        slug: "developer-tools",
        label: "Developer Tools",
    },
    {
        slug: "devops",
        label: "DevOps",
    },
    {
        slug: "misc",
        label: "Misc",
    },
    {
        slug: "security",
        label: "Security",
    },
];

export type Tag = {
    label: string;
    slug: string;
};

const tags = [
    {
        slug: "cli",
        label: "CLI",
    },
    {
        slug: "desktop",
        label: "Desktop",
    },
    {
        slug: "on-prem",
        label: "On-prem",
    },
    {
        slug: "open-source",
        label: "Open Source",
    },
    {
        slug: "other",
        label: "Other",
    },
    {
        slug: "proprietary",
        label: "Proprietary",
    },
    {
        slug: "saas",
        label: "SaaS",
    },
];

export const tagsTools = [...tags];

export const tagsBetas = [
    ...tags,
    {
        slug: "weekly-pick",
        label: "Console Newsletter Pick",
    },
];

export const tagsProfiles = [...tags];

export type Tech = {
    label: string;
    slug: string;
};

export const techs = [
    {
        slug: "c++",
        label: "C++",
    },
    {
        slug: "elm",
        label: "Elm",
    },
    {
        slug: "go",
        label: "Go",
    },
    {
        slug: "graphql",
        label: "GraphQL",
    },
    {
        slug: "java",
        label: "Java",
    },
    {
        slug: "javascript",
        label: "JavaScript",
    },
    {
        slug: "nodejs",
        label: "NodeJS",
    },
    {
        slug: "python",
        label: "Python",
    },
    {
        slug: "postgres",
        label: "Postgres",
    },
    {
        slug: "react",
        label: "React",
    },
    {
        slug: "ruby",
        label: "Ruby",
    },
    {
        slug: "rust",
        label: "Rust",
    },
    {
        slug: "typescript",
        label: "TypeScript",
    },
    {
        slug: "webassembly",
        label: "WebAssembly",
    },
];
