import "@material/mwc-button";
import "@material/mwc-fab";
import "@material/mwc-icon";
import { MDCRipple } from "@material/ripple";

import "./styles/theme.scss";

document
	.querySelectorAll(".mdc-button")
	.forEach((element) => MDCRipple.attachTo(element));
