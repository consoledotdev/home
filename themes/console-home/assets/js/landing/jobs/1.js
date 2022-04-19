// Helper functions:
const slopeFromT = (t, A, B, C) => {
    let dtdx = 1.0 / (3.0 * A * t * t + 2.0 * B * t + C);
    return dtdx;
};

const xFromT = (t, A, B, C, D) => {
    let x = A * (t * t * t) + B * (t * t) + C * t + D;
    return x;
};

const yFromT = (t, E, F, G, H) => {
    let y = E * (t * t * t) + F * (t * t) + G * t + H;
    return y;
};

const cubicBezier = (x, a, b, c, d) => {
    let y0a = 0.0; // initial y
    let x0a = 0.0; // initial x
    let y1a = b; // 1st influence y
    let x1a = a; // 1st influence x
    let y2a = d; // 2nd influence y
    let x2a = c; // 2nd influence x
    let y3a = 1.0; // final y
    let x3a = 1.0; // final x

    let A = x3a - 3 * x2a + 3 * x1a - x0a;
    let B = 3 * x2a - 6 * x1a + 3 * x0a;
    let C = 3 * x1a - 3 * x0a;
    let D = x0a;

    let E = y3a - 3 * y2a + 3 * y1a - y0a;
    let F = 3 * y2a - 6 * y1a + 3 * y0a;
    let G = 3 * y1a - 3 * y0a;
    let H = y0a;

    // Solve for t given x (using Newton-Raphelson), then solve for y given t.
    // Assume for the first guess that t = x.
    let currentt = x;
    let nRefinementIterations = 5;
    for (let i = 0; i < nRefinementIterations; i++) {
        let currentx = xFromT(currentt, A, B, C, D);
        let currentslope = slopeFromT(currentt, A, B, C);
        currentt -= (currentx - x) * currentslope;
        currentt = Math.max(Math.min((currentt, 0), 1));
    }

    let y = yFromT(currentt, E, F, G, H);
    return y;
};

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

        this.shift = 0.175;
        this.currentShift = this.shift;

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

    bindFuncs() {
        this.render = this.render.bind(this);
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
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
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
            let t = 0.005; // thickness
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

            const extrudeSettings = { depth: t, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: t, bevelThickness: t };
            const geometry = new THREE.ExtrudeGeometry(square, extrudeSettings);
            const diamond = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: cfg.color }));
            diamond.position.x = -0.5;
            diamond.position.y = -0.5;
            // objs.push(diamond);

            const wrapper = new THREE.Object3D();
            wrapper.position.x = cfg.position.x;
            wrapper.position.y = cfg.position.y;
            // wrapper.rotation.z = Math.PI / 4;
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
            const material = new THREE.MeshPhongMaterial({ emissive: 0xffa800, emissiveIntensity: 1.0 });
            const obj = new THREE.Mesh(sphereGeometry, material);
            container.add(obj);
            objs.globe = obj;
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
            obj.rotateOnAxis(new THREE.Vector3(-0.5, 0.5, 0).normalize(), 0.01 * (Math.PI / 4) * (idx + 1));
        });

        this.renderer.render(this.scene, this.cam);
        requestAnimationFrame(this.render);
    }

    checkResizeRendererToDisplaySize() {
        const canvas = this.renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width = (canvas.clientWidth * pixelRatio) | 0;
        const height = (canvas.clientHeight * pixelRatio) | 0;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            this.renderer.setSize(width, height, false);
            this.cams.forEach((c) => {
                c.aspect = canvas.clientWidth / canvas.clientHeight;
                c.updateProjectionMatrix();
            });
        }
    }

    _hover() {
        clearInterval(this.outInterval);
        this.hoverInterval = setInterval(() => {
            if (this.currentShift > 0) {
                this.currentShift -= 0.01;
            } else this.currentShift = 0;
        }, 10);
    }

    _out() {
        clearInterval(this.hoverInterval);
        this.outInterval = setInterval(() => {
            if (this.currentShift < this.shift) {
                this.currentShift += 0.01;
            } else this.currentShift = this.shift;
        }, 10);
    }
}

class GravitatingItems {
    constructor(selector) {
        this.bindFuncs();

        this.offset = 1;
        this.radius = 45; // percent
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
            this.offset += 0.0001;
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

document.addEventListener("DOMContentLoaded", (e) => {
    const jobsArt = new JobsArt("[data-artwork-canvas]");
    const jobsArtItems = new GravitatingItems("[data-gravitating-items]");
    jobsArtItems._artwork = jobsArt;
});
