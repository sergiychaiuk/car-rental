import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
axios.defaults.baseURL = `http://api-carrental/`;

import VueLodash from "vue-lodash";
import { lodash } from "lodash/seq";
import { cloneDeep } from "lodash";
Vue.use(VueLodash, { lodash: { lodash, cloneDeep } });

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
