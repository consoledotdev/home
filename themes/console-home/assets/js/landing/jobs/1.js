// Easing helper
const doubleExponentialSeat = (x, a) => {
    let epsilon = 0.00001;
    let min_param_a = 0.0 + epsilon;
    let max_param_a = 1.0 - epsilon;
    a = Math.min(max_param_a, Math.max(min_param_a, a));

    let y = 0;
    if (x <= 0.5) {
        y = Math.pow(2.0 * x, 1 - a) / 2.0;
    } else {
        y = 1.0 - Math.pow(2.0 * (1.0 - x), 1 - a) / 2.0;
    }
    return y;
};

class JobsArt {
    constructor(selector) {
        this.bindFuncs();

        this.mouse = { x: 0, y: 0 };
        document.addEventListener("mousemove", this.setMouse);

        this.shift = 0.175;
        this.currentShift = this.shift;
        this.currentRotationSpeed = this.getSpeeds().rotation.fast;
        this.currentGlobeOpacity = 1;

        const canvas = document.querySelector(selector);
        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.scene = new THREE.Scene();

        this.cams = this.makeCams();
        this.lights = this.makeLights();
        this.objs = this.makeObjs();

        this.setup();

        requestAnimationFrame(this.render);
    }

    getDiamondPositions() {
        return [
            { x: -this.currentShift, y: -this.currentShift },
            { x: this.currentShift, y: 0 },
            { x: 0, y: this.currentShift },
        ];
    }

    setMouse(e) {
        this.mouse = { x: e.clientX, y: e.clientY };
    }

    getSpeeds() {
        return {
            rotation: {
                fast: 0.008,
                slow: 0.003,
            },
        };
    }

    bindFuncs() {
        this.render = this.render.bind(this);
        this.setMouse = this.setMouse.bind(this);
    }

    setup() {
        this.renderer.setClearColor(0xffffff, 0);
        this.selectCam(1);
        this.lights.forEach((l) => {
            this.scene.add(l);
        });
    }

    makeCams() {
        let cams = [];
        cams.push(this.makeCamOne());
        return cams;
    }

    makeCamOne() {
        const fov = 25;
        const aspect = 2;
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 0;
        return camera;
    }

    selectCam(n) {
        this.cam = this.cams[n - 1];
    }

    makeLights() {
        let lights = [];
        lights.push(this.makeLightOne());
        return lights;
    }

    makeLightOne() {
        const color = 0xffffff;
        const intensity = 1.25;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(2, 0, 4);
        return light;
    }

    makeObjs() {
        let objs = {
            container: null,
            globe: null,
            diamonds: null,
        };

        const container = new THREE.Object3D();
        container.position.z = -7;
        container.rotation.z = -Math.PI / 4;
        container.scale.set(1.5, 1.5, 1.5);
        this.scene.add(container);
        objs.container = container;

        const makeDiamond = (cfg) => {
            let t = 0.003; // thickness
            const square = new THREE.Shape();
            square.moveTo(0, 0);
            square.lineTo(1, 0);
            square.lineTo(1, 1);
            square.lineTo(0, 1);

            const hole = new THREE.Shape();
            hole.moveTo(t, t);
            hole.lineTo(1 - t, t);
            hole.lineTo(1 - t, 1 - t);
            hole.lineTo(t, 1 - t);
            square.holes.push(hole);

            const extrudeSettings = { depth: t * 2, bevelEnabled: true, bevelSegments: 2, steps: 6, bevelSize: t, bevelThickness: t };
            const geometry = new THREE.ExtrudeGeometry(square, extrudeSettings);
            const diamond = new THREE.Mesh(geometry, new THREE.MeshPhysicalMaterial({ color: cfg.color }));
            diamond.position.x = -0.5;
            diamond.position.y = -0.5;
            diamond.material.roughness = 1;
            diamond.material.metalness = 0;
            diamond.material.clearcoat = 0;
            diamond.material.clearcoatRoughness = 0;

            const wrapper = new THREE.Object3D();
            wrapper.position.x = cfg.position.x;
            wrapper.position.y = cfg.position.y;
            wrapper.add(diamond);

            return wrapper;
        };

        const positions = this.getDiamondPositions();
        let configs = [
            {
                color: 0xe57d62,
                position: positions[0],
            },
            {
                color: 0xffcc55,
                position: positions[1],
            },
            {
                color: 0xe4718a,
                position: positions[2],
            },
        ];

        objs.diamonds = [];
        configs.forEach((cfg) => {
            let d = makeDiamond(cfg);
            container.add(d);
            objs.diamonds.push(d);
        });

        {
            // sphere
            const sphereGeometry = new THREE.SphereGeometry(0.12, 64, 32);
            const material = new THREE.MeshPhysicalMaterial({ emissive: 0xffbb22, emissiveIntensity: 1 });
            material.transparent = true;
            const obj = new THREE.Mesh(sphereGeometry, material);
            obj.material.roughness = 1;
            obj.material.metalness = 0.6;
            obj.material.clearcoat = 0.5;
            obj.material.clearcoatRoughness = 0.5;
            container.add(obj);
            objs.globe = obj;
        }

        {
            // circle
            const geo = new THREE.EdgesGeometry(new THREE.CircleGeometry(0.12, 20), 1);
            const material = new THREE.PointsMaterial({ color: 0x95969f, sizeAttenuation: false, size: 3, depthTest: false });
            material.transparent = true;
            const obj = new THREE.Points(geo, material);
            container.add(obj);
            objs.circle = obj;
        }

        return objs;
    }

    render(time) {
        time *= 0.001; // convert time to seconds
        this.checkResizeRendererToDisplaySize();

        const positions = this.getDiamondPositions();
        this.objs.diamonds.forEach((obj, idx) => {
            const speed = 1 + idx * 0.1;
            const rot = time * speed;
            obj.position.x = positions[idx].x;
            obj.position.y = positions[idx].y;
            obj.rotateOnAxis(new THREE.Vector3(-0.5, 0.5, 0).normalize(), this.currentRotationSpeed * (Math.PI / 4) * (idx + 1));
        });

        this.objs.globe.material.opacity = this.currentGlobeOpacity;

        this.objs.circle.rotation.z = time * -0.4;
        this.objs.circle.material.opacity = 1 - this.currentGlobeOpacity;

        this.renderer.render(this.scene, this.cam);

        requestAnimationFrame(this.render);
    }

    checkResizeRendererToDisplaySize() {
        const canvas = this.renderer.domElement;
        const [width, height] = this.getWidthAndHeight();
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            this.renderer.setSize(width, height, false);
            this.cams.forEach((c) => {
                c.aspect = canvas.clientWidth / canvas.clientHeight;
                c.updateProjectionMatrix();
            });
        }
    }

    getWidthAndHeight() {
        const canvas = this.renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width = (canvas.clientWidth * pixelRatio) | 0;
        const height = (canvas.clientHeight * pixelRatio) | 0;
        return [width, height];
    }

    _hover() {
        clearInterval(this.outInterval);
        this.currentRotationSpeed = this.getSpeeds().rotation.slow;
        this.hoverInterval = setInterval(() => {
            if (this.currentShift > 0) {
                this.currentShift -= 0.01;
            } else this.currentShift = 0;
        }, 10);

        clearInterval(this.globeFadeInInterval);
        this.globeFadeOutInterval = setInterval(() => {
            if (this.currentGlobeOpacity > 0) {
                this.currentGlobeOpacity -= 0.08;
            } else this.currentGlobeOpacity = 0;
        }, 10);
    }

    _out() {
        clearInterval(this.hoverInterval);
        this.currentRotationSpeed = this.getSpeeds().rotation.fast;
        this.outInterval = setInterval(() => {
            if (this.currentShift < this.shift) {
                this.currentShift += 0.01;
            } else this.currentShift = this.shift;
        }, 10);

        clearInterval(this.globeFadeOutInterval);
        this.globeFadeInInterval = setInterval(() => {
            if (this.currentGlobeOpacity < 1) {
                this.currentGlobeOpacity += 0.08;
            } else this.currentGlobeOpacity = 1;
        }, 10);
    }
}

class GravitatingItems {
    constructor(selector) {
        this.bindFuncs();

        this.offset = Math.PI * 0.7 * -1;
        this.radius = 46; // percent
        this.currentRadius = 0;
        this.items = document.querySelectorAll(selector);
        this.parent = this.items[0].parentElement;
        this.computePositions();
        this.rotate();

        this.bind();
    }

    bindFuncs() {
        this.spread = this.spread.bind(this);
        this.fold = this.fold.bind(this);
    }

    bind() {
        this.parent.addEventListener("mouseover", this.spread);
        this.parent.addEventListener("mouseout", this.fold);
    }

    spread() {
        this.currentRadius = this.radius;
        this._artwork._hover();
    }

    fold() {
        this.currentRadius = 0;
        this._artwork._out();
    }

    rotate() {
        this.rotateInterval = setInterval(() => {
            this.offset += 0.0002;
        }, 10);
    }

    computePositions() {
        this.computeInterval = setInterval(() => {
            const angle = (2 * Math.PI) / this.items.length;
            this.items.forEach((item, idx) => {
                let a = angle * idx + this.offset;
                if (a > 2 * Math.PI) a -= 2 * Math.PI;
                // if (idx == 0) console.log(a);
                const x = +(Math.cos(a) * this.currentRadius).toFixed(2);
                const y = +(Math.sin(a) * 0.85 * this.currentRadius).toFixed(2);
                item.style.transform = "translate(" + x + "%," + y + "%)";
            }, 10);
        });
    }
}

class FormHelper {
    constructor(selector) {
        this.bindFuncs();

        this.form = document.querySelector(selector);
        this.bindParentCheckboxes();
        this.bindChildrenCheckboxes();
        this.bindSelectAll();
        this.bindDisableOthers();
    }

    bindFuncs() {
        this.toggleAllSiblings = this.toggleAllSiblings.bind(this);
        this.toggleParentCheckbox = this.toggleParentCheckbox.bind(this);
        this.toggleChildrenCheckboxes = this.toggleChildrenCheckboxes.bind(this);
    }

    bindParentCheckboxes() {
        const inputs = this.form.querySelectorAll("[data-parent]");
        inputs.forEach((input) => {
            input.addEventListener("change", this.toggleChildrenCheckboxes);
            this.toggleChildrenCheckboxes({ currentTarget: input });
        });
    }

    bindChildrenCheckboxes() {
        const inputs = this.form.querySelectorAll("[data-child]");
        inputs.forEach((input) => {
            input.addEventListener("change", this.toggleParentCheckbox);
            this.toggleParentCheckbox({ currentTarget: input });
        });
    }

    bindSelectAll() {
        const inputs = this.form.querySelectorAll("[data-select-all]");
        inputs.forEach((input) => {
            input.addEventListener("change", this.toggleAllSiblings);
            this.toggleAllSiblings({ currentTarget: input });
        });
    }

    bindDisableOthers() {
        const inputs = this.form.querySelectorAll("[data-disable-others]");
        inputs.forEach((input) => {
            input.addEventListener("change", this.toggleDisableSiblings);
            this.toggleDisableSiblings({ currentTarget: input });
        });
    }

    toggleParentCheckbox(e) {
        const parent = this.form.querySelector("[data-item='" + e.currentTarget.dataset.child + "']");
        const siblings = this.form.querySelectorAll("[data-child='" + e.currentTarget.dataset.child + "']");
        let checkedAmt = 0;
        siblings.forEach((s) => (s.checked ? checkedAmt++ : null));
        if (checkedAmt == siblings.length) {
            parent.checked = true;
            parent.indeterminate = false;
        } else if (checkedAmt > 0) {
            parent.checked = false;
            parent.indeterminate = true;
        } else {
            parent.indeterminate = false;
            parent.checked = false;
        }
    }

    toggleChildrenCheckboxes(e) {
        const children = this.form.querySelectorAll("[data-child='" + e.currentTarget.dataset.item + "']");
        children.forEach((c) => (c.checked = e.currentTarget.checked));
    }

    toggleAllSiblings(e) {
        const name = e.currentTarget.dataset.selectAll;
        const toSelect = this.form.querySelectorAll("[data-can-be-selected-by='" + name + "']");
        toSelect.forEach((s) => {
            s.indeterminate = false;
            s.checked = e.currentTarget.checked;
        });
    }

    toggleDisableSiblings(e) {
        const name = e.currentTarget.dataset.disableOthers;
        const toDisable = this.form.querySelectorAll("[data-can-be-disabled-by='" + name + "']");
        toDisable.forEach((s) => {
            if (s.disabled != undefined) s.disabled = e.currentTarget.checked;
            else {
                e.currentTarget.checked ? s.classList.add("is-disabled") : s.classList.remove("is-disabled");
            }
        });
    }

    _setInput(e, data) {
        e.preventDefault();
        const input = this.form.querySelector("[type='" + data.type + "'][id='" + data.id + "']");
        input[data.state[0]] = data.state[1];
    }
}

class ContentExtensionHelper {
    constructor() {
        this.bindFuncs();

        this.contents = this.getContents();
        this.bindToggles();
    }

    bindFuncs() {
        this.toggleContent = this.toggleContent.bind(this);
    }

    getContents() {
        const contents = [];
        document.querySelectorAll("[data-content-extension]").forEach((c) => {
            const l = document.querySelector("[data-content-extension-launch='" + c.dataset.contentExtension + "']");
            const ts = document.querySelectorAll("[data-content-extension-toggle='" + c.dataset.contentExtension + "']");
            contents.push({
                content: c,
                launch: l,
                toggles: ts,
            });
        });
        return contents;
    }

    bindToggles() {
        this.contents.forEach((c) => {
            c.toggles.forEach((t) => {
                t.addEventListener("click", this.toggleContent);
            });
        });
    }

    toggleContent(e) {
        const c = this.contents.filter((c) => {
            return c.content.dataset.contentExtension == e.currentTarget.dataset.contentExtensionToggle;
        });
        console.log(c);
        c[0].content.classList.toggle("is-hidden");
        c[0].launch.classList.toggle("is-hidden");
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    const jobsArt = new JobsArt("[data-artwork-canvas]");
    const jobsArtItems = new GravitatingItems("[data-gravitating-items]");
    jobsArtItems._artwork = jobsArt;

    const formHelper = new FormHelper("[data-signup-form]");

    const contentExtensionHelper = new ContentExtensionHelper();

    /* bind opening section actions */
    document.querySelectorAll("[data-launch-signup]").forEach((l) => {
        l.addEventListener("click", (e) => {
            if (e.currentTarget.type == "checkbox") {
                const value = e.currentTarget.dataset.launchSignup;
                formHelper._setInput(e, {
                    type: "checkbox",
                    id: "form-role-" + value,
                    state: ["checked", true],
                });
            }

            document.querySelector("#form-email").focus();
            document.querySelector("[data-anchor-signup]").scrollIntoView();
        });
    });

    /* manage segmented bar input responsiveness */
    let bars = document.querySelectorAll("[data-segmented-bar]");
    let setSegmentedBarLayout = () => {
        bars.forEach((w) => {
            if (window.innerWidth >= 540) {
                w.classList.remove("vertical");
            } else {
                w.classList.add("vertical");
            }
        });
    };
    setSegmentedBarLayout();
    window.addEventListener("resize", setSegmentedBarLayout);
});
