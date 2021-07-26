<template>
  <v-container class="flex">
    <v-list rounded>
      <v-list-item>
        <h1>Settings</h1>
      </v-list-item>

      <v-list-item>
        <v-toolbar flat height="72">
          <v-switch
            @click="saveDarkSetting"
            v-model="$vuetify.theme.dark"
            hint="Switch between Light Theme and Dark"
            inset
            label="Dark Theme"
            persistent-hint
          ></v-switch>
        </v-toolbar>
      </v-list-item>
      <v-list-item>
        <SignOutDialog @signout="signOutBubbleUp" />
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import SignOutDialog from "./SignOutDialog.vue";
export default {
  name: "SettingsPage",
  components: {
    SignOutDialog,
  },
  props: ["userId", "server_url"],
  methods: {
    signOutBubbleUp: function() {
      this.$emit("signout");
    },
    saveDarkSetting: function() {
      let that = this;
      let requestBody = {
        settings: {
          darkTheme: that.$vuetify.theme.dark,
        },
      };
      console.log("Request body?:", requestBody);
      fetch(
        `
      http://localhost:3000/guser/${this.userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
    },
  },
};
</script>
