let handlePodcastEmbedTheme = (() => {
    let setTheme = (e) => {
        let theme;
        if (e) theme = e.detail.theme;
        else theme = getTheme();
        let embedFrame = document.querySelector("[data-podcast-embed-frame]");
        let embed = document.querySelector("[data-podcast-embed]");
        embed.remove();
        if (theme == "dark") {
            embed.src = embed.src.replace("dark=false", "dark=true");
            embed.src = embed.src.replace("color=F1F2F6", "color=0A0A0B");
        } else {
            embed.src = embed.src.replace("dark=true", "dark=false");
            embed.src = embed.src.replace("color=0A0A0B", "color=F1F2F6");
        }
        embedFrame.append(embed);
    };
    document.body.addEventListener("themeChange", setTheme, false);
    setTheme();
})();

document.addEventListener("DOMContentLoaded", (event) => {
    let resizeNeonPlanes = (() => {
        let setSize = () => {
            let planesWrappers = document.querySelectorAll("[data-neon-planes-wrapper]");
            planesWrappers.forEach((pW) => {
                let parent = pW.parentElement;
                let resizeRatio;
                // if (pW.dataset.site != undefined) {
                //     resizeRatio = (parent.offsetHeight + 512) / pW.offsetHeight;
                //     pW.style.transform = "scale(" + resizeRatio + ")";
                // }

                if (pW.dataset.packages != undefined) {
                    resizeRatio = (parent.offsetHeight * 0.94) / pW.offsetHeight;
                    pW.style.transform = "scale(" + resizeRatio + ")";
                }
            });
        };
        setSize();
        window.addEventListener("resize", setSize);
        const resizeObserver = new ResizeObserver((entries) => {
            setTimeout(() => {
                setSize();
            }, 100);
        });
        resizeObserver.observe(document.body);
    })();
});

document.addEventListener("DOMContentLoaded", (event) => {
    // detect absolute element center and size
    // on resize detect the above again
    // on scroll
        // when vewport is above the below
            // unfix element
            // remove any additional top margin from element
        // when viewport center is between element center and half the element height from the end of the section (plus a bottom framing margin)
            // remove any additional top margin from element
            // fix element and size, center horizontally
        // when viewport center is past the above
            // unfix element
            // add top margin to element equal to section height minus element height (plus a bottom framing margin)

    let fixSiteNeonPlanes = (() => {
        let el = document.querySelector("[data-neon-planes-wrapper][data-site]");
        let section = document.querySelector("[data-page-section-site]");
        let fixStart;
        let elWidth;
        let elHeight;
        let fixEnd;
        let sectionHeight;
        let getMetrics = () => {
            let elRect = el.getBoundingClientRect();
            fixStart = window.scrollY + elRect.top + (elRect.height / 2);
            elWidth = elRect.width;
            elHeight = elRect.height;
            let sectionRect = section.getBoundingClientRect();
            fixEnd = window.scrollY + sectionRect.top + sectionRect.height - (elRect.height / 2);
            sectionHeight = sectionRect.height;
        }
        getMetrics();
        window.addEventListener("resize", getMetrics);
        const resizeObserver = new ResizeObserver((entries) => {
            setTimeout(() => {
                getMetrics();
            }, 100);
        });
        resizeObserver.observe(document.body);

        let checkFix = () => {
            let viewCenter = window.scrollY + (window.innerHeight / 2);
            let style = {
                position: null,
                width: null,
                top: null,
                left: null,
                transform: null,
                marginTop: null,
            };
            if (viewCenter < fixStart) {
                console.log("before")
                style = {
                    position: null,
                    width: null,
                    top: null,
                    left: null,
                    transform: null,
                    marginTop: null,
                }
            }
            if (viewCenter >= fixStart && viewCenter <= fixEnd) {
                console.log("in")
                style = {
                    position: "fixed",
                    width: elWidth + "px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    marginTop: null,
                }
            }
            if (viewCenter > fixEnd) {
                console.log("after")
                let marginTop = sectionHeight - elHeight;
                style = {
                    position: null,
                    width: null,
                    top: null,
                    left: null,
                    transform: null,
                    marginTop: marginTop + "px",
                }
            }
            el.style.position = style.position;
            el.style.width = style.width;
            el.style.top = style.top;
            el.style.left = style.left;
            el.style.transform = style.transform;
            el.style.marginTop = style.marginTop;
        }
        window.addEventListener("scroll", checkFix);
    })();
});



let handleScrollAppearance = (() => {
    let handleIntersect = (intersections) => {
        intersections.forEach(function (i) {
            if ("checkpointSite" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0) ) {
                    document.body.classList.add("checkpoint-site")
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-site")
                }
            }

            if ("checkpointPodcast" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-podcast")
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-podcast")
                }
            }

            if ("checkpointWorkWithUs" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-work-with-us")
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-work-with-us")
                }
            }

            if ("checkpointCampaigns" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-campaigns")
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-campaigns")
                }
            }

            if ("checkpointContact" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-contact")
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-contact")
                }
            }
        });
    };
    let observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    });

    let checkpointSite = document.querySelector("[data-checkpoint-site]");
    observer.observe(checkpointSite);

    let checkpointPodcast = document.querySelector("[data-checkpoint-podcast]");
    observer.observe(checkpointPodcast);

    let checkpointWorkWithUs = document.querySelector("[data-checkpoint-work-with-us]");
    observer.observe(checkpointWorkWithUs);

    let checkpointCampaigns = document.querySelector("[data-checkpoint-campaigns]");
    observer.observe(checkpointCampaigns);

    let checkpointContact = document.querySelector("[data-checkpoint-contact]");
    observer.observe(checkpointContact);
})();
