import { LitElement, html, css } from "lit";
import { property, customElement } from "lit/decorators.js";

@customElement("settings-panel")
export class Panel extends LitElement {
	static styles = [
		css`
			:host {
				position: relative;
			}

			#toggle_button {
				position: absolute;
				bottom: 10px;
				left: -100px;
			}

			section {
				display: flex;
				flex-direction: column;
				height: 100%;
				width: 100%;
			}
		`,
	];

	@property({ type: Boolean })
	expanded = false;

	togglePanel(): Boolean {
		this.expanded = !this.expanded;
		return this.expanded;
	}

	render() {
		return html`
			<button id="toggle_button" @click="${this.togglePanel}">
				Toggle Panel
			</button>
			<section>
				<div>Expanded: ${this.expanded}</div>
				<slot></slot>
			</section>
		`;
	}
}
