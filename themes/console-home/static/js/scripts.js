let toggleMenuPopup = (e) => {
    let el = document.getElementById("menu-toggle");
    if (el.classList.contains("is-active")) {
        el.classList.remove("is-active");
    } else {
        el.classList.add("is-active");
    }

    var p = "menu-popup";
    var pState = "is-visible";
    var pEl = document.getElementById(p);
    if (pEl.classList.contains(pState)) {
        pEl.classList.remove(pState);
    } else {
        pEl.classList.add(pState);
    }
};

let animateLogo = (() => {
    let body = document.querySelector("body");
    if (document.referrer.indexOf(location.host) < 0) {
        body.classList.remove("is-same-origin");
    } else {
        body.classList.add("is-same-origin");
    }
})();

let manageHeaderFixing = (() => {
    let setHeader = function () {
        if (window.scrollY > 60) {
            document.body.classList.add("is-scrolled");
        } else {
            document.body.classList.remove("is-scrolled");
        }
    };
    setHeader();
    document.addEventListener("scroll", setHeader);
})();

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add("mobile");
}

let toggleCollapsible = (e) => {
    let parent = e.currentTarget.parentNode;
    if (parent.classList.contains("is-expanded")) {
        parent.classList.remove("is-expanded");
    } else {
        parent.classList.add("is-expanded");
    }
};

if (document.body.classList.contains("show-planes")) {
    let animateDynamicPlanes = (() => {
        let animate = () => {
            let columns = document.querySelectorAll("[data-dynamic-planes-column]");
            let animateColumn = (n) => {
                let classes = ["triad-01", "triad-02", "triad-03"];
                let col = columns[n];
                let items = col.querySelectorAll("[data-dynamic-planes-item]");
                let visibleItems = [];
                items.forEach((item) => {
                    let idle = true;
                    if (item.classList.contains("selected")) {
                        idle = false;
                        item.classList.remove("selected");
                    }
                    if (idle) {
                        let rect = item.getBoundingClientRect();
                        // let visible = rect.x > 0 && rect.y > 0 && rect.x + rect.width < window.innerWidth && rect.y + rect.height < window.innerHeight;
                        let visible = rect.x > 0 && rect.x < window.innerWidth && rect.y > 0 && rect.y + rect.height < window.innerHeight;
                        if (visible) visibleItems.push(item);
                    }
                });
                if (visibleItems.length > 0) {
                    let rand = Math.floor(Math.random() * visibleItems.length);
                    let selectedItem = visibleItems[rand];
                    selectedItem.classList.add("selected");
                }
            };
            setInterval(() => {
                animateColumn(0);
            }, 5000);
            setInterval(() => {
                animateColumn(1);
            }, 8000);
            setInterval(() => {
                animateColumn(2);
            }, 6000);
            setInterval(() => {
                animateColumn(3);
            }, 7000);
            setInterval(() => {
                animateColumn(4);
            }, 4000);
            setInterval(() => {
                animateColumn(5);
            }, 6500);
        };

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mediaQuery) {
            if (!mediaQuery.matches) animate();

            mediaQuery.addEventListener("change", () => {
                if (!mediaQuery.matches) animate();
            });
        }
    })();
}
