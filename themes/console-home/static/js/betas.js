// overrides generic feature.js filtering method
filtering._filter = (cards, filterValues) => {
    let count = 0;
    for (let card of cards) {
        let taxonomy = card.dataset.taxonomy;
        let match = false;

        if (taxonomy.indexOf("weekly-pick") >= 0 && !(filterValues.indexOf("weekly-pick") >= 0)) {
            // no match
        } else {
            for (value of filterValues) {
                match = taxonomy.indexOf(value) >= 0 && true;
                if (match) break;
            }
        }

        if (match) {
            card.classList.remove("is-hidden");
            count++;
        } else {
            card.classList.add("is-hidden");
        }
    }
    return count;
};

// first sorting when the page is loaded to order data from json
sortItems("name");
sortItems("date");

// first count when the page is loaded
filtering.selectedAllChecks();
