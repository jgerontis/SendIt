<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item @click="page = 'List'">
          Text
        </v-list-item>
        <NavigationItem
          v-for="item in items"
          :key="item.title"
          :title="item.title"
          :icon="item.icon"
          @changepage="changepage"
        />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="orange darken-1" temporary app>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
      <v-toolbar-title>SendIt</v-toolbar-title>
      <v-spacer />
      <AppBarContent />
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
import AppBarContent from "./components/AppBarContent.vue";
import ListPage from "./components/ListPage.vue";
import SettingsPage from "./components/SettingsPage.vue";
import NavigationItem from "./components/NavigationItem.vue";

export default {
  name: "App",

  components: {
    CalendarPage,
    AppBarContent,
    ListPage,
    SettingsPage,
    NavigationItem,
  },

  data: () => ({
    page: "Calendar",
    drawer: null,
    items: [
      { title: "Calendar", icon: "mdi-calendar-edit" },
      { title: "List", icon: "mdi-format-list-bulleted" },
      { title: "Settings", icon: "mdi-account-cog" },
    ],
  }),

  methods: {
    changepage: function(page) {
      console.log(page);
      this.page = page;
    },
  },
};
</script>
