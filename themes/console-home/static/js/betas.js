Filter.prototype.filter = function () {
    let allActiveFilterValues = this.getActiveFilterValues().all;
    for (let section of this.sections.public().getFilterables()) {
        for (let item of section.items) {
            let taxonomy = item.dataset.taxonomy;
            let match = false;
            let weeklyPickActive = allActiveFilterValues.find((v) => {
                return v.name == "weekly-pick";
            });
            if (taxonomy.indexOf("weekly-pick") >= 0 && !weeklyPickActive) {
                // no match
            } else {
                for (value of allActiveFilterValues) {
                    match = taxonomy.indexOf(value.name) >= 0 && true;
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

    let grouper = new Grouper(sections);
    grouper.groupBy();

    sorter.sortBy();
});
