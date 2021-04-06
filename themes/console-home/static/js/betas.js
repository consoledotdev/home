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
    let inlineWrapper = document.getElementById("inline-filters-wrapper");
    let setPos = () => {
        if (window.innerWidth >= 1025) {
            asideWrapper.classList.remove("is-hidden");
            asideWrapper.appendChild(filtersEl);
            filtersEl.classList.add("in-aside");
        } else {
            asideWrapper.classList.add("is-hidden");
            inlineWrapper.appendChild(filtersEl);
            filtersEl.classList.remove("in-aside");
        }
    };
    setPos();
    window.addEventListener("resize", setPos);
})();

let computeFixedFiltersPos = (() => {
    let style = {};
    let compute = function () {
        if (window.scrollY > 0) {
            style.position = "fixed";
            style.top = document.getElementById("betas-split").offsetTop - window.scrollY + "px";
            if (parseInt(style.top) < 128) style.top = "128px";
        } else {
            style.position = null;
            style.top = null;
        }

        let filtersEl = document.getElementById("betas-filters");
        if (filtersEl.classList.contains("in-aside")) {
            filtersEl.style.top = style.top;
            filtersEl.style.position = style.position;
        } else {
            filtersEl.style.top = null;
            filtersEl.style.position = null;
        }
    };
    compute();
    window.addEventListener("scroll", compute);
    window.addEventListener("resize", compute);
})();

let toggledCheck = () => {
    // gets all values for enabled checkboxes
    let filters = document.querySelectorAll('[data-beta-filters] [type="checkbox"]');
    activeFilterValues = [];
    for (filter of filters) {
        if (filter.checked) {
            activeFilterValues.push(filter.value);
        }
    }
    // sets card visbility
    toggleCardVisibility(activeFilterValues);
};

let toggleCardVisibility = (activeFilterValues) => {
    // for each beta card checks if its categories data attribute
    // has any match for the active checkboxes values
    // If there's no match it hides the card, otherwise it un-hides it
    let cards = document.querySelectorAll("[data-card]");
    for (let card of cards) {
        let categories = card.dataset.categories;
        let match = false;
        for (value of activeFilterValues) {
            match = categories.indexOf(value) >= 0 && true;
            if (match) break;
        }
        if (match) {
            card.classList.remove("is-hidden");
        } else {
            card.classList.add("is-hidden");
        }
    }
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
        let container = document.querySelector(containerSelector);
        container.innerHTML = "";
        cards.forEach((card) => {
            container.appendChild(card);
        });
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
