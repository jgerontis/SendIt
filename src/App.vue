<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <NavigationItem
          v-for="page in pages"
          :key="page.title"
          :title="page.title"
          :icon="page.icon"
          @changepage="changepage"
        />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="primary" temporary app>
      <v-app-bar-nav-icon class="d-lg-none" @click="drawer = !drawer" />
      <v-app-bar-title>SendIt</v-app-bar-title>
      <v-spacer />
      <SignupDialog />
      <LoginDialog />
    </v-app-bar>
    <v-main>
      <CalendarPage v-if="page == 'Calendar'" />
      <ListPage v-else-if="page == 'List'" />
      <SettingsPage v-else-if="page == 'Settings'" />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import Test from "./components/Test";
import CalendarPage from "./components/CalendarPage.vue";
import SignupDialog from "./components/SignupDialog.vue";
import LoginDialog from "./components/LoginDialog.vue";
import ListPage from "./components/ListPage.vue";
import SettingsPage from "./components/SettingsPage.vue";
import NavigationItem from "./components/NavigationItem.vue";

export default {
  name: "App",

  components: {
    CalendarPage,
    LoginDialog,
    SignupDialog,
    ListPage,
    SettingsPage,
    NavigationItem,
  },

  data: () => ({
    page: "Calendar",
    drawer: null,
    pages: [
      { title: "Calendar", icon: "mdi-calendar-edit" },
      { title: "List", icon: "mdi-format-list-bulleted" },
      { title: "Settings", icon: "mdi-account-cog" },
    ],

    notifications: false,
    sound: true,
    widgets: false,
  }),

  methods: {
    changepage: function(page) {
      console.log(page);
      this.page = page;
    },
  },
};
</script>

<style scoped></style>
