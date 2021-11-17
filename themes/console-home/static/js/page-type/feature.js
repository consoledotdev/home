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

    let computeAsideContentPos = (() => {
        let asideContent = document.querySelector("[data-feature-aside-content]");
        let scrollWrapper = document.querySelector("[data-scroll-wrapper]");
        let contentBottomPadding = parseInt(getComputedStyle(document.querySelector("[data-content-wrapper]")).paddingBottom);
        let footerHeight = document.querySelector("[data-footer]").getBoundingClientRect().height;
        let safetyBottomOffset = contentBottomPadding + footerHeight + 48;
        asideContentHeight = asideContent.getBoundingClientRect().height;

        let style = {};
        let compute = function () {
            let contentHeight = scrollWrapper.offsetHeight;
            let bottomScrollPos = window.innerHeight + Math.ceil(window.pageYOffset);
            let distanceFromPageBottom = contentHeight - bottomScrollPos;
            if (window.scrollY > 0) {
                style.position = null;
                style.marginTop = null;
                style.paddingTop = null;
                let topOffset = document.querySelector("[data-aside-anchor]").getBoundingClientRect().top;
                style.top = null;
                style.overflow = null;
                if (parseInt(topOffset) < 128) {
                    style.position = "fixed";
                    style.top = 0;
                    style.marginTop = "80px";
                    style.paddingTop = "48px";
                    style.overflow = "auto";
                }
            } else {
                style.position = null;
                style.top = null;
                style.marginTop = null;
                style.paddingTop = null;
                style.overflow = null;
            }

            let enoughHeight = safetyBottomOffset + asideContentHeight + parseInt(style.marginTop);
            if (window.innerHeight < enoughHeight) {
                if (distanceFromPageBottom < safetyBottomOffset) {
                    style.marginBottom = safetyBottomOffset - distanceFromPageBottom + "px";
                } else {
                    style.marginBottom = null;
                }
            } else {
                style.marginBottom = null;
            }

            asideContent.style.position = style.position;
            asideContent.style.top = style.top;
            asideContent.style.marginTop = style.marginTop;
            asideContent.style.paddingTop = style.paddingTop;
            asideContent.style.marginBottom = style.marginBottom;
            asideContent.style.overflow = style.overflow;
        };
        compute();
        window.addEventListener("scroll", compute);
        window.addEventListener("resize", compute);
    })();
});

let manageAsideContentPosition = (() => {
    let asideWrapper = document.querySelector("[data-aside-wrapper]");
    let setPos = () => {
        if (window.innerWidth >= 1025) {
            asideWrapper.classList.remove("is-hidden");
        } else {
            asideWrapper.classList.add("is-hidden");
        }
    };
    setPos();
    window.addEventListener("resize", setPos);

    let manageCTAPosition = (() => {
        let ctaEl = document.querySelector("[data-feature-cta]").querySelector(".subscribe-cta");
        let asideContentWrapper = document.querySelector("[data-feature-aside-content]");
        let inlineWrapper = document.querySelector("[data-inline-cta-wrapper]");
        let inlineWrapperCollapsible = inlineWrapper.querySelector("[data-collapsible-content]");
        let setPos = () => {
            let title = ctaEl.querySelector(".title");
            let input = ctaEl.querySelector(".console-input-text");
            let button = ctaEl.querySelector(".console-button");
            if (window.innerWidth >= 1025) {
                ctaEl.classList.remove("layout-wide", "size-medium");
                ctaEl.classList.add("layout-small", "size-small", "sidebar");
                title.classList.remove("title-4");
                title.classList.add("title-5");
                input.classList.remove("console-input-medium");
                input.classList.add("console-input-small");
                button.classList.remove("console-button-medium");
                button.classList.add("console-button-small");
                asideContentWrapper.insertBefore(ctaEl, asideContentWrapper.firstChild);
                inlineWrapper.classList.add("is-hidden");
            } else {
                ctaEl.classList.remove("layout-small", "size-small", "sidebar");
                ctaEl.classList.add("layout-wide", "size-medium");
                title.classList.remove("title-5");
                title.classList.add("title-4");
                input.classList.remove("console-input-small");
                input.classList.add("console-input-medium");
                button.classList.remove("console-button-small");
                button.classList.add("console-button-medium");
                inlineWrapperCollapsible.appendChild(ctaEl);
                inlineWrapper.classList.remove("is-hidden");
            }
        };
        setPos();
        window.addEventListener("resize", setPos);
    })();

    let manageFiltersPosition = (() => {
        let filtersEl = document.querySelector("[data-feature-filters]");
        let asideContentWrapper = document.querySelector("[data-feature-aside-content]");
        let inlineWrapper = document.querySelector("[data-inline-filters-wrapper]");
        let inlineWrapperCollapsible = inlineWrapper.querySelector("[data-collapsible-content]");
        let setPos = () => {
            if (window.innerWidth >= 1025) {
                asideContentWrapper.appendChild(filtersEl);
                inlineWrapper.classList.add("is-hidden");
            } else {
                inlineWrapperCollapsible.appendChild(filtersEl);
                inlineWrapper.classList.remove("is-hidden");
            }
        };
        setPos();
        window.addEventListener("resize", setPos);
    })();
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
        return document.querySelectorAll('[data-feature-filters-form] [type="checkbox"]:not([value="select-all"])');
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
        let parent = document.querySelectorAll("[data-feature-filters-form]")[0];
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
