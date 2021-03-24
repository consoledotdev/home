let manageFiltersPosition = (() => {
    let filtersEl = document.getElementById("betas-filters");
    let asideWrapper = document.getElementById("aside-filters-wrapper");
    let inlineWrapper = document.getElementById("inline-filters-wrapper");
    let setPos = () => {
        if (window.innerWidth >= 1025) {
            asideWrapper.classList.remove("is-hidden");
            asideWrapper.appendChild(filtersEl);
        } else {
            asideWrapper.classList.add("is-hidden");
            inlineWrapper.appendChild(filtersEl);
        }
    };
    setPos();
    window.addEventListener("resize", setPos);
})();

// let manageFiltersFixing = (() => {
//     // still todo: only set element as fixed when scrolling and if it is in the aside
//     let filtersEl = document.getElementById("betas-filters");
//     offset = filtersEl.offsetTop;
//     filtersEl.style.position = "fixed";
//     filtersEl.style.top = offset + "px";
//     let setScrolled = function () {
//         filtersEl.style.top = offset - window.scrollY + "px";
//         if (parseInt(filtersEl.style.top) < 128) filtersEl.style.top = "128px";
//     };
//     setScrolled();
//     document.addEventListener("scroll", setScrolled);
// })();
