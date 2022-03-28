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
