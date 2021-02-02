import { ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

import EE from "../../common/EE.js";
import html from "../../common/html.js";

export default {
  name: "revenue-card",
  props: {
    number: Number,
  },
  setup({ number }) {
    let revenue = ref(number);
    const decrementFn = () => {
      revenue.value--;
      EE.emit("tag", "Vue3 is it!");
    };

    return () =>
      html`<div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="card__title d-flex align m-0">Revenue</h3>
            <div
              class="card__percentage d-flex justify-content-between align-items-center"
            >
              <div class="card__percent">-12.2%</div>
              <svg
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.22 6.97L9 10.19 5.78 6.97 4.72 8.03 9 12.31l4.28-4.28-1.06-1.06z"
                  fill="#B2B2B2"
                />
              </svg>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-start">
            <div class="card__total">${revenue.value}</div>
            <div class="card__date">vs last week</div>
          </div>
          <div class="d-flex justify-content-center pt-5">
            <button class="btn btn-danger" onClick=${decrementFn}>
              Decrement
            </button>
          </div>
        </div>
      </div> `;
  },
};
