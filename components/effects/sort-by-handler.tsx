interface Query {
    field: string;
    items: any[];
}
/**
 * Sorting handler
 *
 * @param field - The field to sort by.
 * @param items - The sortable items.
 *
 * @returns the sorted items.
 */
export function sortByHandler(q: Query): any[] {
    let sortedItems = q.items.slice(); // Don't mutate props

    if (q.field == "date") {
        sortedItems.sort(function (a, b) {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            if (dateA < dateB) {
                return 1;
            }
            if (dateA > dateB) {
                return -1;
            }
            return 0;
        });
    }

    if (q.field == "name") {
        sortedItems.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            return 0;
        });
    }

    if (q.field == "title") {
        sortedItems.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            }
            return 0;
        });
    }

    return sortedItems;
}
