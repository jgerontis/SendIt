// don't touch :)
import Vue from "vue";
import vuetify from "../plugins/vuetify";
import page from "../app/about.vue";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(page),
}).$mount("#app");
