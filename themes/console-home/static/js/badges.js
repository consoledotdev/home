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
    let extension = "svg";
    let config = {
        vertical: false,
        type: false,
        color: false,
        theme: false,
        border: false,
    };

    let composeFilename = () => {
        let filename;
        filename = "console-badge";
        if (config.vertical) filename += "-vertical";
        filename += "-" + config.type;
        if (config.color) filename += "-" + config.color;
        filename += "-" + config.theme;
        if (config.border) filename += "-border";
        filename += "." + extension;
        return filename;
    };

    let getValues = () => {
        config.type = selectorUI.querySelector('[name="badge-type"]:checked').value;
        config.color = selectorUI.querySelector('[name="badge-color"]:checked').value;
        config.theme = selectorUI.querySelector('[name="badge-theme"]:checked').value;
        config.border = selectorUI.querySelector('[name="badge-border"]:checked').value;
        config.vertical = selectorUI.querySelector('[name="badge-vertical"]').checked;

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
        });
    });

    let updateBadgePreview = () => {
        let previewEl = selectorUI.querySelector("[data-badge-preview]");
        let src = "/img/badges/1.0/svg/";
        src += composeFilename();
        previewEl.src = src;
        console.log(previewEl.src);
    };

    getValues();
    updateBadgePreview();
})();
