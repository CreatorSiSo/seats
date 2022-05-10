import * as T from "three";
import { ArcballControls } from "three/examples/jsm/controls/ArcballControls.js";

const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
const renderer = new T.WebGL1Renderer({
	canvas,
	antialias: true,
});

const camera = new T.PerspectiveCamera(45);
camera.position.set(0, 10, 20);
camera.lookAt(0, 0, 0);

// Responsive Camera/Canvas
function updateCanvassize() {
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;
	canvas.width = width;
	canvas.height = height;

	camera.aspect = canvas.width / canvas.height;
	camera.updateProjectionMatrix();
	renderer.setSize(width, height, false);
}

updateCanvassize();
window.addEventListener("resize", () => updateCanvassize());

// Scene Setup
const scene = new T.Scene();

const geometry_sphere = new T.SphereGeometry(5, 512, 512);
const material = new T.MeshPhongMaterial({ color: 0x44aa88 });
const earth = new T.Mesh(geometry_sphere, material);
scene.add(earth).position.set(0, 0, 0);

const color = 0xffffff;
const intensity = 1;
const light = new T.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
light.lookAt(0, 0, 0);
scene.add(light);

// Camera controls
/* const controls = */ new ArcballControls(camera, canvas, scene);
// controls.cursorZoom = true;

// Animation
function render(time: number) {
	time *= 0.001; // convert time to seconds

	// earth.rotation.x = time;
	// earth.rotation.y = time;

	light.position.x = time;
	renderer.render(scene, camera);

	requestAnimationFrame(render);
}

requestAnimationFrame(render);
