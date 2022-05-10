import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

@customElement("responsive-canvas")
export class ResponsiveCanvas extends LitElement {
	static styles = [
		css`
			canvas {
				width: 100%;
				height: 100%;
				display: block;
			}
		`,
	];

	readonly width = 0;
	readonly height = 0;

	@query("canvas")
	readonly canvas!: HTMLCanvasElement;

	private _resize_observer = new ResizeObserver(() => {
		this.width, (this.canvas.width = this.canvas.clientWidth);
		this.height, (this.canvas.height = this.canvas.clientHeight);
	});

	firstUpdated() {
		this._resize_observer.observe(this.canvas);
	}

	disconnectedCallback() {
		this._resize_observer.disconnect();
	}

	render() {
		return html`<canvas></canvas>`;
	}
}
