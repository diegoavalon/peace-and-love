import "./common/vue-bridge.js";
import "./common/EE.js";

import "./apps/vue2/index.js";
import "./apps/react/index.js";

window.addEventListener("load", (e) => {
  const loaderEl = document.querySelector(".loader");
  loaderEl.classList.add("is-loaded");
});
