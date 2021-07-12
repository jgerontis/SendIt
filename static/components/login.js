Vue.component("login-dialogue", {
  data: function () {
    return {
      count: 0,
    };
  },
  template: `
            <v-card>
                <v-card-title>Login</v-card-title>
                <v-text-field
                    v-model="login_email"
                    :rules="[rules.required, rules.email]"
                    label="Email
                </v-text-field>
                <v-text-field
                    v-model="login_password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : "password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                </v-text-field>
            </v-card>`,
});
