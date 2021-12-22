// // overrides generic feature.js filtering method
// filtering._filter = (cards, filterValues) => {
//     let count = 0;
//     for (let card of cards) {
//         let taxonomy = card.dataset.taxonomy;
//         let match = false;

//         if (taxonomy.indexOf("weekly-pick") >= 0 && !(filterValues.indexOf("weekly-pick") >= 0)) {
//             // no match
//         } else {
//             for (value of filterValues) {
//                 match = taxonomy.indexOf(value) >= 0 && true;
//                 if (match) break;
//             }
//         }

//         if (match) {
//             card.classList.remove("is-hidden");
//             count++;
//         } else {
//             card.classList.add("is-hidden");
//         }
//     }
//     return count;
// };

Filter.prototype.filter = function () {
    let activeFilterValues = this.getActiveFilterValues();
    for (let section of this.sections.public().getFilterables()) {
        for (let item of section.items) {
            let taxonomy = item.dataset.taxonomy;
            let match = false;

            if (taxonomy.indexOf("weekly-pick") >= 0 && !(activeFilterValues.indexOf("weekly-pick") >= 0)) {
                // no match
            } else {
                for (value of activeFilterValues) {
                    match = taxonomy.indexOf(value) >= 0 && true;
                    if (match) break;
                }
            }
            if (match) {
                this.sections.public().filter(item, true);
            } else {
                this.sections.public().filter(item, false);
            }
        }
    }
    this.sections.public().filteringDone();
};

document.addEventListener("DOMContentLoaded", (event) => {
    let sections = new Sections();

    let filter = new Filter(sections, false);

    let sorter = new Sorter(sections);
    sorter.sortBy("name");
    sorter.sortBy("date");
});
