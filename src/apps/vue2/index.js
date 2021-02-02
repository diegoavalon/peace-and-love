import Vue from "https://unpkg.com/vue@2/dist/vue.esm.browser.js";

import EE from "../../common/EE.js";

const App = new Vue({
  el: "#vue2",
  data: {
    title: "Micro Frontends",
    subtitle: "Featuring Vue 2, Vue 3, and React",
    goal: 4463,
  },
  methods: {
    increment: function () {
      this.goal++;
      EE.emit("tag", "Vue2, got you back!");
    },
  },
});
