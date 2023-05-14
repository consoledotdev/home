const scrollAppearance = () => {
    let handleIntersect = (intersections) => {
        intersections.forEach(function (i) {
            if ("checkpointSite" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-site");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-site");
                }
            }

            if ("checkpointPodcast" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-podcast");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-podcast");
                }
            }

            if ("checkpointWorkWithUs" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-work-with-us");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-work-with-us");
                }
            }

            if ("checkpointSponsoredPackage" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-sponsored-package");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-sponsored-package");
                }
            }

            if ("checkpointCampaigns" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-campaigns");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-campaigns");
                }
            }

            if ("checkpointContact" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-contact");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-contact");
                }
            }

            if ("checkpointNeonPlanes" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-neon-planes");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-neon-planes");
                }
            }
        });
    };

    let observed1 = ["data-checkpoint-site", "data-checkpoint-campaigns", "data-checkpoint-contact"].map((str) => {
        return document.querySelector("[" + str + "]");
    });

    let observer1 = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    });

    observed1.forEach((el) => {
        observer1.observe(el);
    });

    let observed2 = ["data-checkpoint-podcast", "data-checkpoint-neon-planes", "data-checkpoint-work-with-us"].map((str) => {
        return document.querySelector("[" + str + "]");
    });

    let observer2 = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0% 0% -40%",
        threshold: 0,
    });

    observed2.forEach((el) => {
        observer2.observe(el);
    });

    let onScrollEnd = () => {
        observed1.forEach((el) => {
            observer1.unobserve(el);
            observer1.observe(el);
        });
        observed2.forEach((el) => {
            observer2.unobserve(el);
            observer2.observe(el);
        });
    };

    var isScrolling;
    window.addEventListener(
        "scroll",
        () => {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                onScrollEnd();
            }, 50);
        },
        false
    );
};

export default scrollAppearance;
