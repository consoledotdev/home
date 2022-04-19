class JobsArt {
    constructor(selector) {
        this.bindFuncs();

        const canvas = document.querySelector(selector);
        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.scene = new THREE.Scene();

        this.cams = this.makeCams();
        this.lights = this.makeLights();
        this.objs = this.makeObjs();

        this.setup();

        requestAnimationFrame(this.render);
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
        camera.position.z = 3;
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
        let objs = {};

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

        let configs = [
            {
                color: 0xe57d62,
                position: { x: -0.175, y: -0.175 },
            },
            {
                color: 0xffcc55,
                position: { x: 0.175, y: 0 },
            },
            {
                color: 0xe4718a,
                position: { x: 0, y: 0.175 },
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

        this.objs.diamonds.forEach((obj, idx) => {
            const speed = 1 + idx * 0.1;
            const rot = time * speed;
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
}

document.addEventListener("DOMContentLoaded", (e) => {
    // main();

    const jobsArt = new JobsArt("[data-artwork-canvas]");
});
