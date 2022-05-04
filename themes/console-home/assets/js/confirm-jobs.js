class Helper {
    static getUrlParam(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    static beautify(string) {
        let beauty = "";
        string = string.replace(",,", ",");
        const parts = string.split(",");
        parts.forEach((s, idx) => {
            s = s.trim();
            s = s.replace("ccplusplus", "C, C++");
            s = s.charAt(0).toUpperCase() + s.slice(1);
            s = s.replace("-", " ");
            if (s != "") {
                if (idx > 0) beauty += ", ";
                beauty += s;
            }
        });
        return beauty;
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    let fields = [];

    // fields.push({
    //     name: "Email",
    //     value: Helper.getUrlParam("form-email"),
    // });

    fields.push({
        name: "Job roles",
        value: Helper.beautify(Helper.getUrlParam("form-role")),
    });

    let locations = Helper.getUrlParam("form-locations");
    const otherLocations = Helper.getUrlParam("form-other-locations");
    if (otherLocations) locations += ", " + otherLocations;
    fields.push({
        name: "Location",
        value: Helper.beautify(locations),
    });

    let tech = Helper.getUrlParam("form-tech");
    const otherTech = Helper.getUrlParam("form-other-tech");
    if (otherTech) tech += ", " + otherTech;
    fields.push({
        name: "Tech stack",
        value: Helper.beautify(tech),
    });

    let exp = Helper.getUrlParam("form-salary");
    if (exp.indexOf("less") >= 0) exp = Helper.beautify(exp.replace("less", "less than "));
    else if (exp.indexOf("more") >= 0) exp = Helper.beautify(exp.replace("more", "more than "));
    fields.push({
        name: "Your experience",
        value: exp,
    });

    let salary = Helper.getUrlParam("form-salary");
    if (salary.indexOf("less") >= 0) salary = Helper.beautify(salary.replace("less", "less than $"));
    else if (salary.indexOf("more") >= 0) salary = Helper.beautify(salary.replace("more", "more than $"));
    else salary = "$" + salary;
    fields.push({
        name: "Desired salary range",
        value: salary,
    });

    const subscriptionDataBox = document.querySelector("[data-subscription-data]");

    fields.forEach((f) => {
        const fEl = document.createElement("div");
        fEl.classList.add("row");
        fEl.innerHTML = "<span class='cell cell-meta'>" + f.name + ":</span> <span class='cell'>" + f.value + "</span>";
        subscriptionDataBox.append(fEl);
    });
});
