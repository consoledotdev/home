const scrollAppearance = () => {
    let handleIntersect = (intersections) => {
        intersections.forEach(function (i) {
            if ("checkpointOtherContent" in i.target.dataset) {
                if (i.isIntersecting || (!i.isIntersecting && i.boundingClientRect.top < 0)) {
                    document.body.classList.add("checkpoint-other-content");
                }
                if (!i.isIntersecting) {
                    if (i.boundingClientRect.top > 0) document.body.classList.remove("checkpoint-other-content");
                }
            }
        });
    };

    let observed1 = ["data-checkpoint-other-content"].map((str) => {
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

    let onScrollEnd = () => {
        observed1.forEach((el) => {
            observer1.unobserve(el);
            observer1.observe(el);
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
