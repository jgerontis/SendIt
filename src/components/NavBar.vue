<template>
  <v-app-bar color="orange darken-1" fixed app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>SendIt</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <SignupDialog />
      <LoginDialog />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import LoginDialog from "./LoginDialog.vue";
import SignupDialog from "./SignupDialog.vue";

export default {
  name: "NavBar",
  components: {
    LoginDialog,
    SignupDialog,
  },
};
</script>
