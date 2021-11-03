let handlePreviewType = (() => {
    let splitPlanes = document.querySelector("[data-split-planes]");
    let setPreview = (type) => {
        splitPlanes.classList.remove("is-split", "is-black", "is-white");
        splitPlanes.classList.add("is-" + type);
    };

    let radios = document.querySelectorAll('[name="preview-type"]');
    radios.forEach((radio) => {
        radio.addEventListener("change", (e) => {
            let el = e.currentTarget;
            if (el.checked) setPreview(el.value);
        });
    });
})();

let badgeSelection = (() => {
    let selectorUI = document.querySelector("[data-selector-ui]");
    let options = selectorUI.querySelectorAll("[data-badge-option]");
    let embedOptions = document.querySelectorAll('[name="embed-type"]');
    let embedType = "png";
    let previewExtension = "svg";
    let config = {
        vertical: false,
        type: false,
        color: false,
        theme: false,
        border: false,
    };

    let composeFilename = (forEmbed) => {
        let filename;
        filename = "console-badge";
        if (config.vertical) filename += "-vertical";
        filename += "-" + config.type;
        if (config.color) filename += "-" + config.color;
        filename += "-" + config.theme;
        if (config.border) filename += "-border";
        if (forEmbed) filename += "." + embedType;
        else filename += "." + previewExtension;

        return filename;
    };

    let getValues = () => {
        config.vertical = selectorUI.querySelector('[name="badge-vertical"]').checked;
        config.type = selectorUI.querySelector('[name="badge-type"]:checked').value;
        config.color = selectorUI.querySelector('[name="badge-color"]:checked').value;
        config.theme = selectorUI.querySelector('[name="badge-theme"]:checked').value;
        config.border = selectorUI.querySelector('[name="badge-border"]').checked;

        let optionsToDisable = [];
        if (config.type == "logo") {
            config.color = false;
            optionsToDisable = selectorUI.querySelectorAll('[name="badge-color"]');
        }
        if (config.color == "green2" || config.color == "blue2" || config.color == "purple2") {
            config.border = false;
            optionsToDisable = selectorUI.querySelectorAll('[name="badge-border"]');
        }

        options.forEach((o) => {
            o.disabled = false;
        });

        optionsToDisable.forEach((opt) => {
            opt.disabled = true;
        });
    };

    options.forEach((opt) => {
        opt.addEventListener("change", (e) => {
            getValues();
            updateBadgePreview();
            updateBadgeEmbed();
        });
    });

    let updateBadgePreview = () => {
        let previewEl = selectorUI.querySelector("[data-badge-preview]");
        let src = "/img/badges/1.0/svg/";
        src += composeFilename();
        previewEl.src = src;
    };

    let updateBadgeEmbed = () => {
        let preEl = document.querySelector("[data-embed-code]");
        let src = "https://console.dev/img/badges/1.0/" + embedType + "/";
        src += composeFilename(true);
        let string = `<a href="https://console.dev" title="Visit https://console.dev"><img src="${src}" alt="Console - Developer Tool of the Week" /></a>`;
        preEl.textContent = string;
    };

    embedOptions.forEach((option) => {
        option.addEventListener("change", (e) => {
            let el = e.currentTarget;
            if (el.checked) {
                embedType = el.value;
                updateBadgeEmbed();
            }
        });
    });

    getValues();
    updateBadgePreview();
    updateBadgeEmbed();
})();

let handleCopyEmbedCode = (() => {
    let copyEl = document.querySelector("[data-clipboard-copy]");
    let cJS = new ClipboardJS("[data-clipboard-copy]");
    let preEl = document.querySelector("[data-embed-code]");

    cJS.on("success", function (e) {
        e.clearSelection();

        copyEl.classList.add("is-success");
        setTimeout(() => {
            copyEl.classList.remove("is-success");
        }, 5000);

        preEl.classList.add("is-changed");
        setTimeout(() => {
            preEl.classList.remove("is-changed");
        }, 100);
    });

    cJS.on("error", function (e) {
        console.error("Couldn't copy.");
    });
})();
