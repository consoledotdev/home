interface Query {
    term: string;
    items: any[];
    searchFields: string[];
}
/**
 * Search handler
 *
 * @param term - The search term.
 * @param items - The searchable items.
 * @param searchFields - The item fields across which to search.
 *
 * @returns the filtered items.
 */
export function searchHandler(q: Query): any[] {
    let filteredItems = [];

    const caseSensitive = q.term.match(/^"/g) !== null || (q.term.match(/^"/g) !== null && q.term.match(/"$/g) !== null);

    let term = q.term.toLowerCase();
    if (caseSensitive) term = q.term.replaceAll('"', "");

    for (const item of q.items) {
        let add = false;
        for (const f of q.searchFields) {
            let searchable = item[f].toLowerCase();
            if (caseSensitive) searchable = item[f];

            if (searchable.indexOf(term) >= 0) add = true;
        }

        if (add) filteredItems.push(item);
    }

    return filteredItems;
}
