<template>
  <v-toolbar-items>
    <SignupDialog />
    <LoginDialog />
  </v-toolbar-items>
</template>

<script>
import LoginDialog from "./LoginDialog.vue";
import SignupDialog from "./SignupDialog.vue";

export default {
  name: "AppBarContent",
  components: {
    LoginDialog,
    SignupDialog,
  },
  data: () => {
    return {};
  },
};
</script>

<style></style>
