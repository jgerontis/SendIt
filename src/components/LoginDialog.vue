<template>
  <v-dialog v-model="loginDialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on">
        Login
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Login</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-text-field label="Email" required></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              label="Password"
              type="password"
              required
            ></v-text-field>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="loginDialog = false">
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  data: () => ({
    loginDialog: false,
  }),
};
</script>
