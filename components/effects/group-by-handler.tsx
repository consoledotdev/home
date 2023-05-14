import { Category, categories } from "@/components/effects/filters-handler";

export type Group = {
    field: Category | any;
    items: any[];
};

interface Query {
    field: string;
    items: any[];
}
/**
 * Grouping handler
 *
 * @param field - The field to group by.
 * @param items - The groupable items.
 *
 * @returns the grouped items.
 */
export function groupByHandler(q: Query): any {
    let groups: Group[] = [];
    if (q.field == "none") groups = createDefaultGroup();
    if (q.field == "category") groups = createGroupsForCategory();
    if (q.field == "latest-ga") groups = createGroupsForGa();

    let groupableItems = q.items.slice(); // Don't mutate props
    for (const item of groupableItems) {
        let group;
        if (q.field == "none") group = getDefaultGroup(groups, item);
        if (q.field == "category") group = findGroupForCategory(groups, item);
        if (q.field == "latest-ga") group = findGroupForGa(groups, item);

        if (group) group.items.push(item);
    }

    groups.sort((a, b) => {
        if (a.field.label.replace(/\s/g, "").toLowerCase() < b.field.label.replace(/\s/g, "").toLowerCase()) {
            return -1;
        }
        if (a.field.label.replace(/\s/g, "").toLowerCase() > b.field.label.replace(/\s/g, "").toLowerCase()) {
            return 1;
        }
        return 0;
    });

    return groups;
}

const createDefaultGroup = () => {
    let groups: Group[] = [];
    groups.push({
        field: { label: "", slug: "" },
        items: [],
    });
    return groups;
};

const getDefaultGroup = (groups: Group[], item: any) => {
    return groups.find((g) => g.field.slug == "");
};

const createGroupsForCategory = () => {
    let groups: Group[] = [];
    for (const category of categories) {
        groups.push({
            field: category,
            items: [],
        });
    }
    return groups;
};

const findGroupForCategory = (groups: Group[], item: any) => {
    return groups.find((g) => g.field.slug == item.category.main.slug);
};

const createGroupsForGa = () => {
    let groups: Group[] = [];
    groups.push(
        {
            field: { label: "Recent Betas: Now GA", slug: "ga-betas" },
            items: [],
        },
        {
            field: { label: "Latest Releases", slug: "latest-betas" },
            items: [],
        }
    );
    return groups;
};

const findGroupForGa = (groups: Group[], item: any) => {
    if (item.ga) return groups.find((g) => g.field.slug == "ga-betas");
    else return groups.find((g) => g.field.slug == "latest-betas");
};
