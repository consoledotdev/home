// Filter.prototype.filter = function () {
//     let activeFilterValues;
//     const type = "AND";
//     if (type == "AND") activeFilterValues = this.getActiveFilterValues().byGroup;
//     if (type == "OR") activeFilterValues = this.getActiveFilterValues().all;

//     for (let section of this.sections.public().getFilterables()) {
//         for (let item of section.items) {
//             let taxonomy = item.dataset.taxonomy;
//             let match = false;

//             if (type == "OR") {
//                 let weeklyPickActive = activeFilterValues.find((v) => {
//                     return v.name == "weekly-pick";
//                 });
//                 if (taxonomy.indexOf("weekly-pick") >= 0 && !weeklyPickActive) {
//                     // no match
//                 } else {
//                     for (value of activeFilterValues) {
//                         match = taxonomy.indexOf(value.name) >= 0 && true;
//                         if (match) break;
//                     }
//                 }
//             }

//             if (type == "AND") {
//                 Object.keys(activeFilterValues).forEach((group, i) => {
//                     console.log(activeFilterValues);
//                     if (i == 0 || (i > 0 && match)) {
//                         for (let value of activeFilterValues[group]) {
//                             match = taxonomy.indexOf(value.name) >= 0 && true;
//                             if (match) break;
//                         }
//                     } else {
//                         match = false;
//                     }
//                 });
//             }

//             if (match) {
//                 this.sections.public().filter("buttons", item, true);
//             } else {
//                 this.sections.public().filter("buttons", item, false);
//             }
//         }
//     }
//     this.sections.public().filteringDone();
// };

document.addEventListener("DOMContentLoaded", (event) => {
    let sections = new Sections();

    let filter = new Filter(sections, false);

    let sorter = new Sorter(sections);
    sorter.sortBy("name");
    sorter.sortBy("date");

    let grouper = new Grouper(sections);
    grouper.groupBy();

    sorter.sortBy();

    let searcher = new Searcher(sections, filter);
});
