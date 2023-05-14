/**
 * Convenience hook to filter list items
 *
 * @returns the filtered items.
 */
import { useState } from "react";

import { searchHandler } from "@/components/effects/search-handler";
import { sortByHandler } from "@/components/effects/sort-by-handler";
import { groupByHandler } from "@/components/effects/group-by-handler";
import { categories, tagsBetas, tagsTools, tagsProfiles, techs, filtersHandler } from "@/components/effects/filters-handler";

import InputText from "@/components/elements/form/input-text";
import InputSelect from "@/components/elements/form/input-select";
import InputCheckbuttons from "@/components/elements/form/input-checkbuttons";

interface Query {
    items: any[];
    search?: string[];
    sortBy?: {
        label: string;
        value: string;
    }[];
    startSortBy?: string;
    filterBy: ("category" | "tag-betas" | "tag-tools" | "tag-profiles" | "tech")[];
    groupBy?: {
        label: string;
        value: string;
    }[];
}

export function useListFilters(query: Query) {
    let filteredItems = [];

    // 1.Search
    const [searchValue, setSearchValue] = useState<string>("");
    if (query.search) {
        filteredItems = searchHandler({
            term: searchValue,
            items: query.items,
            searchFields: query.search,
        });
    }

    // 2.Sort
    const [sortByValue, setSortByValue] = useState<string>(query.sortBy ? (query.startSortBy ? query.startSortBy : query.sortBy[0].value) : "");
    if (query.sortBy) {
        filteredItems = sortByHandler({
            field: sortByValue,
            items: filteredItems,
        });
    }

    // 3.Single Filters
    const filteringByCategoryOptions = categories.map((c) => ({
        label: c.label,
        value: c.slug,
        checked: true,
    }));
    const [filterByCategoryValues, setFilterByCategoryValues] = useState<string[]>(filteringByCategoryOptions.filter((b) => b.checked).map((b) => b.value));

    let tags = tagsBetas;
    if (query.filterBy.indexOf("tag-tools") >= 0) tags = tagsTools;
    if (query.filterBy.indexOf("tag-profiles") >= 0) tags = tagsProfiles;

    const filteringByTagOptions = tags.map((c) => ({
        label: c.label,
        value: c.slug,
        checked: true,
        color: c.slug == "weekly-pick" ? "triad-03" : undefined,
    }));
    const [filterByTagValues, setFilterByTagValues] = useState<string[]>(filteringByTagOptions.filter((b: any) => b.checked).map((b: any) => b.value));

    const filteringByTechOptions = techs.map((c) => ({
        label: c.label,
        value: c.slug,
        checked: true,
    }));
    const [filterByTechValues, setFilterByTechValues] = useState<string[]>(filteringByTechOptions.filter((b: any) => b.checked).map((b: any) => b.value));

    if (query.filterBy) {
        let terms = [];
        let fields = [];
        if (query.filterBy.indexOf("category") >= 0) {
            terms.push(...filterByCategoryValues);
            fields.push("category");
        }
        if (query.filterBy.indexOf("tag-betas") >= 0 || query.filterBy.indexOf("tag-tools") >= 0 || query.filterBy.indexOf("tag-profiles") >= 0) {
            terms.push(...filterByTagValues);
            fields.push("tag");
        }
        if (query.filterBy.indexOf("tech") >= 0) {
            terms.push(...filterByTechValues);
            fields.push("tech");
        }

        filteredItems = filtersHandler({
            terms: terms,
            items: filteredItems,
            fields: fields,
        });
    }

    // 4.Group
    const [groupByValue, setGroupByValue] = useState<string>(query.groupBy ? query.groupBy[0].value : "");
    if (query.groupBy) {
        filteredItems = groupByHandler({
            field: groupByValue,
            items: filteredItems,
        });
    }

    const filters = (layout: InputLayout) => (
        <div className="filters">
            {query.search && <InputText classes={["search"]} cnslSize="small" layout={layout} id="list-search" type="text" name="list-search" title="Search" placeholder="Search..." valueChanged={setSearchValue} value={searchValue} label="Search" />}
            {query.sortBy && <InputSelect classes={["sort-by"]} cnslSize="small" layout={layout} id="list-sort-by" name="list-sort-by" title="Sort by" valueChanged={setSortByValue} value={sortByValue} label="Sort by" options={query.sortBy} />}
            {query.groupBy && <InputSelect classes={["group-by"]} cnslSize="small" layout={layout} id="list-group-by" name="list-group-by" title="Group by" valueChanged={setGroupByValue} value={groupByValue} label="Group by" options={query.groupBy} />}
            {query.filterBy.indexOf("category") >= 0 && <InputCheckbuttons classes={["filter-by-category"]} layout={layout} color="triad-01" id="list-filter-by-category" valueChanged={setFilterByCategoryValues} values={filterByCategoryValues} label="Categories" buttons={filteringByCategoryOptions} />}
            {(query.filterBy.indexOf("tag-betas") >= 0 || query.filterBy.indexOf("tag-tools") >= 0 || query.filterBy.indexOf("tag-profiles") >= 0) && <InputCheckbuttons classes={["filter-by-tag"]} layout={layout} color="triad-01" id="list-filter-by-tag" valueChanged={setFilterByTagValues} values={filterByTagValues} label="Tag" buttons={filteringByTagOptions} />}
            {query.filterBy.indexOf("tech") >= 0 && <InputCheckbuttons classes={["filter-by-tech"]} layout={layout} color="triad-01" id="list-filter-by-tech" valueChanged={setFilterByTechValues} values={filterByTechValues} label="Tech" buttons={filteringByTechOptions} />}
        </div>
    );

    return {
        filteredItems,
        filters,
    };
}
