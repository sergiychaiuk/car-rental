import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

import uk from "vuetify/lib/locale/uk";

export default new Vuetify({
  lang: {
    locales: { uk },
    current: "uk",
  },
  icons: {
    iconfont: "mdi",
  },
});
