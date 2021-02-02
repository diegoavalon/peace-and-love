import { React, ReactDOM } from "https://unpkg.com/es-react";
import htm from "https://unpkg.com/htm?module";

import EE from "../../common/EE.js";

const html = htm.bind(React.createElement);

const AddWidget = ({ number }) => {
  return html`
    <div class="container px-4">
      <div class="row m-0">
        <div class="col-xl-12">
          <div class="card card__two">
            <div class="card-body">
              <div class="card-image card-image_add mx-auto">
                <img src="../assets/img/addWidgetBG.png" alt="Add widget" />
              </div>
              <div class="card-title text-center">
                Add your ${number} widget
              </div>
              <div class="card-subtitle text-center">
                Customize your dashboard as you need
              </div>
              <div class="card-button">
                <button
                  type="button"
                  class="btn__add"
                  onClick=${() => {
                    EE.emit(
                      "tag",
                      "Pardon me you pauper, React says with their nose up"
                    );
                  }}
                >
                  <span>
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 5.25H6.25V0.75H4.75V5.25H0.25V6.75H4.75V11.25H6.25V6.75H10.75V5.25Z"
                      />
                    </svg> </span
                  >Add widget
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

ReactDOM.render(
  html`<${AddWidget} number="Fourth" />`,
  document.getElementById("react")
);
