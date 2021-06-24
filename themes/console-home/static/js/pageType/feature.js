document.addEventListener("DOMContentLoaded", (event) => {
    let adjustSelectWidth = (() => {
        let adjust = (e, el) => {
            let s = e?.target || el;
            let selectedText = s.options[s.selectedIndex].text;
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            context.font = "16px Rubik";
            if (s.classList.contains("console-input-medium")) {
                context.font = "14px Rubik";
            }
            if (s.classList.contains("console-input-small")) {
                context.font = "13px Rubik";
            }
            var metrics = context.measureText(selectedText);
            var pad = parseInt(getComputedStyle(s).paddingLeft) + parseInt(getComputedStyle(s).paddingRight);
            s.style.width = pad + metrics.width + 8 + "px";
        };

        let selects = document.getElementsByClassName("console-select");
        for (let s of selects) {
            s.addEventListener("change", adjust);
            adjust(null, s);
        }
    })();
});

let manageFiltersPosition = (() => {
    let filtersEl = document.querySelector("[data-feature-aside-content]");
    let asideWrapper = document.getElementById("aside-filters-wrapper");
    let inlineWrapper = document.querySelector("[data-inline-filters-wrapper]");
    let inlineWrapperCollapsible = inlineWrapper.querySelector("[data-collapsible-content]");
    let setPos = () => {
        if (window.innerWidth >= 1025) {
            asideWrapper.classList.remove("is-hidden");
            asideWrapper.appendChild(filtersEl);
            inlineWrapper.classList.add("is-hidden");
            filtersEl.classList.add("in-aside");
        } else {
            asideWrapper.classList.add("is-hidden");
            inlineWrapperCollapsible.appendChild(filtersEl);
            inlineWrapper.classList.remove("is-hidden");
            filtersEl.classList.remove("in-aside");
        }
    };
    setPos();
    window.addEventListener("resize", setPos);
})();

let computeFixedFiltersPos2 = (() => {
    let style = {};
    let compute = function () {
        if (window.scrollY > 0) {
            style.marginTop = 0;
            style.position = "fixed";
            style.top = document.querySelector("[data-aside-anchor]").getBoundingClientRect().top + "px";
            if (parseInt(style.top) < 128) style.top = "128px";
        } else {
            style.marginTop = null;
            style.position = null;
            style.top = null;
        }

        let filtersEl = document.querySelector("[data-feature-aside-content]");
        if (filtersEl.classList.contains("in-aside")) {
            filtersEl.style.marginTop = style.marginTop;
            filtersEl.style.top = style.top;
            filtersEl.style.position = style.position;
        } else {
            filtersEl.style.marginTop = null;
            filtersEl.style.top = null;
            filtersEl.style.position = null;
        }
    };
    compute();
    window.addEventListener("scroll", compute);
    window.addEventListener("resize", compute);
})();

let shared = {
    _setSectionsCount: (section) => {
        let visibleItems = section.querySelectorAll("[data-card]:not(.is-hidden)");
        let visibleCardsCount = visibleItems.length;

        let el = section.querySelector("[data-feature-items-count]");
        if (visibleCardsCount == 0) el.innerHTML = "";
        else el.innerHTML = "(" + visibleCardsCount + ")";
    },
    _setSectionEmptyPlaceholderVisibility: (section) => {
        let visibleItems = section.querySelectorAll("[data-card]:not(.is-hidden)");
        let visibleCardsCount = visibleItems.length;

        let emptyPlaceholder = section.querySelector("[data-feature-card-empty-placeholder]");
        if (visibleCardsCount <= 0) {
            emptyPlaceholder.classList.remove("is-hidden");
        } else {
            emptyPlaceholder.classList.add("is-hidden");
        }
    },
};

let filtering = {
    _getFilters: () => {
        return document.querySelectorAll('[data-feature-filters] [type="checkbox"]:not([value="select-all"])');
    },
    _getFilterValues: () => {
        let filters = filtering._getFilters();
        activeFilterValues = [];
        for (filter of filters) {
            if (filter.checked) {
                activeFilterValues.push(filter.value);
            }
        }
        return activeFilterValues;
    },
    _setToggleAllActionsVisiblity: () => {
        let parent = document.querySelectorAll("[data-feature-filters]")[0];
        let activeFilterValues = filtering._getFilterValues();
        let totalFilters = filtering._getFilters().length;
        parent.classList.remove("is-showing-all");

        if (activeFilterValues.length == totalFilters) parent.classList.add("is-showing-all");
    },
    _filter: (cards, filterValues) => {
        // for each card checks if its taxonomy data attribute
        // has any match for the active checkboxes values
        // If there's no match it hides the card, otherwise it shows it
        // Weekly pick filter will show/hide all weekly pick records
        // regardles if other taxonomies are matched
        let count = 0;
        for (let card of cards) {
            let taxonomy = card.dataset.taxonomy;
            let match = false;

            for (value of filterValues) {
                match = taxonomy.indexOf(value) >= 0 && true;
                if (match) break;
            }

            if (match) {
                card.classList.remove("is-hidden");
                count++;
            } else {
                card.classList.add("is-hidden");
            }
        }
        return count;
    },
    _toggleCardVisibility: () => {
        let activeFilterValues = filtering._getFilterValues();
        let itemsSections = document.querySelectorAll("[data-feature-items-section]");

        for (const section of itemsSections) {
            // filter cards
            let items = section.querySelectorAll("[data-card]");
            filtering._filter(items, activeFilterValues);

            shared._setSectionsCount(section);
            shared._setSectionEmptyPlaceholderVisibility(section);
        }
    },
    clearedAllChecks: () => {
        let filters = filtering._getFilters();
        for (filter of filters) filter.checked = false;
        filtering._setToggleAllActionsVisiblity();
        filtering._toggleCardVisibility();
    },
    selectedAllChecks: (e) => {
        let filters = filtering._getFilters();
        for (filter of filters) filter.checked = true;
        filtering._setToggleAllActionsVisiblity();
        filtering._toggleCardVisibility();
    },
    toggledCheck: () => {
        filtering._setToggleAllActionsVisiblity();
        filtering._toggleCardVisibility();
    },
};

let sortItems = (sortBy) => {
    // sorting method
    let sortCards = (cards) => {
        if (sortBy == "name") {
            cards.sort(function (a, b) {
                if (a.dataset.name.toLowerCase() < b.dataset.name.toLowerCase()) {
                    return -1;
                }
                if (a.dataset.name.toLowerCase() > b.dataset.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
        }
        if (sortBy == "date") {
            cards.sort(function (a, b) {
                if (a.dataset.date < b.dataset.date) {
                    return 1;
                }
                if (a.dataset.date > b.dataset.date) {
                    return -1;
                }
                return 0;
            });
        }
    };

    // dom manipulation method
    let replaceCards = (cards, container) => {
        let emptyPlaceholder = container.querySelector("[data-feature-card-empty-placeholder]");
        container.innerHTML = "";
        cards.forEach((card) => {
            container.appendChild(card);
        });
        // add back empty placeholder dom
        container.appendChild(emptyPlaceholder);
    };

    // retrieves the value to sort by
    // then finds the cards for each section (latest and general availability)
    // sorts the cards and replace previous entries with sorted ones
    sortBy = sortBy ?? document.querySelector("[data-sort-feature-items-select]").value;
    let itemsWrappers = document.querySelectorAll("[data-feature-items]");
    for (const wrapper of itemsWrappers) {
        let items = wrapper.querySelectorAll("[data-card]");
        items = Array.prototype.slice.call(items);
        sortCards(items);
        replaceCards(items, wrapper);
    }
};

let groupItems = (groupBy) => {
    // retrieves the value to group by
    groupBy = groupBy ?? document.querySelector("[data-group-feature-items-select]").value;

    // retrieves cards and categories
    let cards = document.querySelectorAll("[data-card][data-category]");
    let categories = document.querySelector("#feature-js").dataset.categories.split(",");
    categories = categories.map((c) => {
        let parts = c.split("|");
        return { label: parts[0], name: parts[1] };
    });

    // creates sections and fills with cards based on selected option
    let sectionsData = {};
    if (groupBy == "none") {
        sectionsData["Latest Tools"] = [];
        for (let card of cards) {
            sectionsData["Latest Tools"].push(card);
        }
    } else if (groupBy == "category") {
        categories.map((c) => {
            sectionsData[c.label] = [];
        });
        for (let card of cards) {
            sectionsData[card.dataset.category].push(card);
        }
    }

    // get containers and section template
    let sectionsWrapper = document.querySelector("[data-feature-content-wrapper]");
    let sectionTemplate = document.querySelector("[data-feature-items-section]");
    for (let section of document.querySelectorAll("[data-feature-items-section]")) {
        section.remove();
    }

    // rebuilds sections from section data using the section template
    for (const [i, sectionData] of Object.entries(sectionsData)) {
        let newSection = sectionTemplate.cloneNode(true);

        // sets the section name
        newSection.querySelector("[data-feature-section-name]").innerHTML = i;

        // sets the View All link based on selection option
        if (groupBy == "none") {
            newSection.querySelector("[data-view-all-link]").classList.add("is-hidden");
        }
        if (groupBy == "category") {
            let cat = categories.find((c) => {
                return c.label == i;
            });
            let viewAllLink = newSection.querySelector("[data-view-all-link]");
            viewAllLink.href = "/category/" + cat.name + "/";
            viewAllLink.classList.remove("is-hidden");
        }

        // empties section and fills back with new section cards
        let itemsEl = newSection.querySelector("[data-feature-items]");
        let emptyItem = newSection.querySelector("[data-feature-card-empty-placeholder]");
        itemsEl.innerHTML = "";

        for (let card of sectionData) {
            itemsEl.appendChild(card);
        }

        // add back the empty slate
        itemsEl.appendChild(emptyItem);

        // reset section count and empty slate visibility
        shared._setSectionsCount(newSection);
        shared._setSectionEmptyPlaceholderVisibility(newSection);

        // adds section to content
        sectionsWrapper.appendChild(newSection);
    }

    // we need to sort after grouping else the groups order will remain
    sortBy = document.querySelector("[data-sort-feature-items-select]").value;
    sortItems(sortBy);
};

// first sorting when the page is loaded to order data from json
sortItems("name");
sortItems("date");

// first grouping when the page is loaded
groupItems();

// first count when the page is loaded
filtering.selectedAllChecks();
