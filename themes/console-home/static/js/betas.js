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
    let filtersEl = document.getElementById("betas-filters");
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
            if (window.innerWidth >= 769) {
                inlineWrapper.prepend(filtersEl);
            } else {
                inlineWrapperCollapsible.appendChild(filtersEl);
            }
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

        let filtersEl = document.getElementById("betas-filters");
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

let filtering = {
    _getFilters: () => {
        return document.querySelectorAll('[data-beta-filters] [type="checkbox"]:not([value="select-all"])');
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
        let parent = document.querySelectorAll("[data-beta-filters]")[0];
        let activeFilterValues = filtering._getFilterValues();
        let totalFilters = filtering._getFilters().length;
        parent.classList.remove("is-showing-all");

        if (activeFilterValues.length == totalFilters) parent.classList.add("is-showing-all");
    },
    _toggleCardVisibility: () => {
        let activeFilterValues = filtering._getFilterValues();
        let index = activeFilterValues.indexOf("weekly-pick");
        let showsWeeklyPick = index > -1 ? activeFilterValues.splice(index, 1) && true : false;
        // for each beta card checks if its categories data attribute
        // has any match for the active checkboxes values
        // If there's no match it hides the card, otherwise it un-hides it
        let cards = document.querySelectorAll("[data-card]");
        for (let card of cards) {
            let categories = card.dataset.categories;
            let match = false;
            if (categories.indexOf("weekly-pick") < 0 || showsWeeklyPick) {
                for (value of activeFilterValues) {
                    match = categories.indexOf(value) >= 0 && true;
                    if (match) break;
                }
            }
            if (categories.indexOf("weekly-pick") >= 0 && showsWeeklyPick) {
                if (activeFilterValues.length == 0) match = true;
            }
            if (match) {
                card.classList.remove("is-hidden");
            } else {
                card.classList.add("is-hidden");
            }
        }
        let checkEmptyPlaceholderDisplay = (container) => {
            let visibleCards = document.querySelector(container + " [data-card]:not(.is-hidden)");
            let emptyPlaceholder = document.querySelector(container + " [data-beta-card-empty-placeholder]");
            if (!visibleCards) {
                emptyPlaceholder.classList.remove("is-hidden");
            } else {
                emptyPlaceholder.classList.add("is-hidden");
            }
        };
        checkEmptyPlaceholderDisplay("[data-betas-latest]");
        checkEmptyPlaceholderDisplay("[data-betas-ga]");
    },
    clearedAllChecks: (e) => {
        let filters = filtering._getFilters();
        for (filter of filters) filter.checked = false;
        filtering._toggleCardVisibility();
        filtering._setToggleAllActionsVisiblity();
    },
    selectedAllChecks: (e) => {
        let filters = filtering._getFilters();
        for (filter of filters) filter.checked = true;
        filtering._toggleCardVisibility();
        filtering._setToggleAllActionsVisiblity();
    },
    toggledCheck: () => {
        filtering._toggleCardVisibility();
        filtering._setToggleAllActionsVisiblity();
    },
};

let sortBetas = () => {
    // sorting method
    let sortCards = (cards) => {
        if (sortBy == "name") {
            cards.sort(function (a, b) {
                if (a.dataset.name < b.dataset.name) {
                    return -1;
                }
                if (a.dataset.name > b.dataset.name) {
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
    let replaceCards = (cards, containerSelector) => {
        let emptyPlaceholder = document.querySelector(containerSelector + " [data-beta-card-empty-placeholder]");
        let container = document.querySelector(containerSelector);
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
    let sortBy = document.querySelector("[data-sort-betas-select]").value;

    let latestCards = document.querySelectorAll("[data-betas-latest] [data-card]");
    latestCards = Array.prototype.slice.call(latestCards);
    sortCards(latestCards);
    replaceCards(latestCards, "[data-betas-latest]");

    let gaCards = document.querySelectorAll("[data-betas-ga] [data-card]");
    gaCards = Array.prototype.slice.call(gaCards);
    sortCards(gaCards);
    replaceCards(gaCards, "[data-betas-ga]");
};

// first sorting when the page is loaded
sortBetas("name");
sortBetas("date");
