<template>
  <div>
    <v-navigation-drawer
      app
      v-model="navigation"
      class="pt-5 d-flex justify-end flex-column"
      temporary
    >
      <v-list>
        <v-list-item class="pt-5">
          <v-btn class="sideButton" @click="page = 'calendar'">
            <v-list-item-title>Calendar</v-list-item-title>
            <v-icon> mdi-calendar-edit </v-icon>
          </v-btn>
        </v-list-item>

        <v-list-item class="pt-5">
          <v-btn class="sideButton">
            <v-list-item-title>List</v-list-item-title>
            <v-icon> mdi-format-list-bulleted </v-icon>
          </v-btn>
        </v-list-item>

        <!--Settings-->

        <v-list-item class="pt-5">
          <v-btn class="sideButton" @click="page = 'settings'">
            <v-list-item-title>Settings</v-list-item-title>
            <v-icon> mdi-account-cog </v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="orange darken-1" fixed app>
      <v-app-bar-nav-icon
        @click="navigation = !navigation"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>SendIt</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <SignupDialog />
        <LoginDialog />
      </v-toolbar-items>
    </v-app-bar>
  </div>
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
  data: () => {
    return {
      navigation: false,
    };
  },
};
</script>
