import { css, html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";
import "@material/mwc-fab";

import * as T from "three";
import { ArcballControls } from "three/examples/jsm/controls/ArcballControls.js";

@customElement("map-spherical")
export class MapSperical extends LitElement {
	static styles = css`
		#wrapper {
			position: relative;
			width: 100%;
			height: 100%;
		}

		#overlay {
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: 10;
		}

		canvas {
			width: 100%;
			height: 100%;
			display: block;
		}
	`;

	width = 1440;
	height = 1080;

	@query("canvas")
	readonly canvas!: HTMLCanvasElement;
	readonly camera = new T.PerspectiveCamera(50);
	readonly scene = new T.Scene();
	renderer!: T.WebGL1Renderer;

	private _setupScene() {
		const geometry_sphere = new T.SphereGeometry(5, 512, 512);
		const material = new T.MeshPhysicalMaterial({
			color: new T.Color(0.35, 0.73, 0.9),
			roughness: 0.5,
			clearcoat: 0.2,
			clearcoatRoughness: 0.2,
		});
		const earth = new T.Mesh(geometry_sphere, material);
		this.scene.add(earth).position.set(0, 0, 0);

		const color = new T.Color().setHSL(0.15, 0.5, 0.9);
		const intensity = 1;
		const light = new T.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		light.lookAt(0, 0, 0);
		this.scene.add(light);
	}

	private _updateCanvasSize() {
		this.width = this.canvas.clientWidth;
		this.height = this.canvas.clientHeight;

		// TODO: Only update if width or height changed
		this.camera.aspect = this.canvas.width / this.canvas.height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.width, this.height, false);
	}

	updated() {
		this.camera.position.set(0, 10, 20);
		this.camera.lookAt(0, 0, 0);
		this._setupScene();
		new ArcballControls(this.camera, this.canvas, this.scene);

		this.renderer = new T.WebGL1Renderer({
			canvas: this.canvas,
			antialias: true,
			alpha: true,
		});

		const render = (_time: number) => {
			this._updateCanvasSize();
			this.renderer.render(this.scene, this.camera);
			requestAnimationFrame(render);
		};
		requestAnimationFrame(render);
	}

	render() {
		return html`
			<section id="wrapper">
				<canvas></canvas>
				<div id="overlay">
					<mwc-fab icon="edit"></mwc-fab>
				</div>
			</section>
		`;
	}
}
