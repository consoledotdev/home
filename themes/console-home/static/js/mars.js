document.addEventListener("DOMContentLoaded", (event) => {
    let DTNTable = document.querySelector("[data-dtn-table]");
    DTNTable.addEventListener("scroll", updateDTNTable);
});

let updateDTNTable = (e) => {
    if (e.currentTarget.scrollLeft > 0) {
        e.currentTarget.classList.add("is-scrolled");
    } else {
        e.currentTarget.classList.remove("is-scrolled");
    }

    let scrolled = e.currentTarget.offsetWidth + e.currentTarget.scrollLeft;

    if (scrolled >= e.currentTarget.scrollWidth) {
        e.currentTarget.classList.add("is-fully-scrolled");
    } else {
        e.currentTarget.classList.remove("is-fully-scrolled");
    }
};
