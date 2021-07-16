import Vue from "vue";

import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.orange.darken1,
        secondary: colors.orange.darken2,
        accent: colors.blueGrey,
        error: colors.red,
        warning: colors.yellow,
        info: colors.grey,
        success: colors.green,
      },
      dark: {
        primary: colors.orange.darken3,
        secondary: colors.orange.darken4,
        accent: colors.blueGrey,
        error: colors.red,
        warning: colors.yellow,
        info: colors.grey,
        success: colors.green,
      },
    },
  },
});

export default vuetify;
