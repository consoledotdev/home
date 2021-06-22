// overrides generic feature.js filtering method 
filtering._filter = (cards, filterValues) => {
    // for each card checks if its categories data attribute
    // has any match for the active checkboxes values
    // If there's no match it hides the card, otherwise it shows it
    // Weekly pick filter will show/hide all weekly pick records
    // regardles if other categories are matched
    let count = 0;
    for (let card of cards) {
        let categories = card.dataset.categories;
        let match = false;

        if (categories.indexOf("weekly-pick") >= 0 && !(filterValues.indexOf("weekly-pick") >= 0)) {
            // no match
        }
        else {
            for (value of filterValues) {
                match = categories.indexOf(value) >= 0 && true;
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
}