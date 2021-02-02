import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { h } from "https://unpkg.com/vue@3/dist/vue.runtime.esm-browser.js";
import htm from "https://unpkg.com/htm@3/dist/htm.module.js?module";

const html = htm.bind(h);
const components = {
  "revenue-card": () => import("../apps/vue3/RevenueCard.js"),
  "primary-card": () => import("../apps/vue3/PrimaryCard.js"),
  "secondary-card": () => import("../apps/vue3/SecondaryCard.js"),
};

class VueBridge extends HTMLElement {
  constructor() {
    super();
  }

  get component() {
    return this.getAttribute("component");
  }

  set component(val) {
    this.setAttribute("component", val);
  }

  static get observedAttributes() {
    return ["component"];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (oldVal && oldVal.length && oldVal !== newVal) {
      this.render(newVal);
    }
  }

  connectedCallback() {
    this.render(this.component);
  }

  async render(selectedComponent) {
    const loadedComponent = await components[selectedComponent]();
    this.innerHTML = null;

    const componentToMountApp = {
      name: "VueBridgeReceiver",
      render() {
        return html` <${loadedComponent.default} number=${21434} //> `;
      },
    };

    const el = document.createElement("span");
    createApp(componentToMountApp).mount(el);
    this.append(el);
  }
}

window.customElements.define("vue-bridge", VueBridge);
