<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img v-bind:src="user.picture" alt=""></v-img>
          </v-list-item-avatar>
          <v-list-item-content>{{ user.email }}</v-list-item-content>
        </v-list-item>
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
      <img
        id="sendItLogo"
        src="../assets/Small.png"
        alt="icon"
        height="30px"
        width="40px"
      />

      <v-spacer />
    </v-app-bar>
    <v-main>
      <CalendarPage
        v-if="page == 'Calendar'"
        :userId="userId"
        :server_url="server_url"
      />
      <ListPage
        v-else-if="page == 'List'"
        :userId="userId"
        :server_url="server_url"
      />
      <SettingsPage
        v-else-if="page == 'Settings'"
        :userId="userId"
        :server_url="server_url"
        @signout="signOutUser"
      />
      <RecurringPage
        v-else-if="page == 'Recurring'"
        :userId="userId"
        :server_url="server_url"
      />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import Test from "./components/Test";
import CalendarPage from "../components/CalendarPage.vue";
import ListPage from "../components/ListPage.vue";
import SettingsPage from "../components/SettingsPage.vue";
import RecurringPage from "../components/RecurringPage.vue";
import NavigationItem from "../components/NavigationItem.vue";

export default {
  name: "App",

  components: {
    CalendarPage,
    ListPage,
    SettingsPage,
    RecurringPage,
    NavigationItem
  },

  data: () => ({
    page: "Calendar",
    drawer: null,
    pages: [
      { title: "Calendar", icon: "mdi-calendar-edit" },
      { title: "List", icon: "mdi-format-list-bulleted" },
      { title: "Recurring", icon: "mdi-calendar-refresh" },
      { title: "Settings", icon: "mdi-account-cog" }
    ],

    notifications: false,
    server_url: "https://jg-send-it.herokuapp.com",
    sound: true,
    user: {},
    userId: ""
  }),
  created: function() {
    console.log("created");
    this.getUserId();
    this.choosepic();
  },
  methods: {
    changepage: function(page) {
      this.page = page;
    },
    choosepic: function() {
      let url = `https://jg-send-it.herokuapp.com/guser/${this.userId}`;
      let that = this;
      console.log(url);
      fetch(url)
        .then(response => response.json())
        .then(response => {
          console.log("In choosepic()");
          console.log(that.userId);
          console.log("this is data", response);
          //this.pic = response;
          that.user = response[0];
          if (that.user.settings.darkTheme) {
            that.$vuetify.theme.dark = true;
          }
          return response[0];
        });

      //this.pic = "https://lh3.googleusercontent.com/a/default-user=s96-c"
    },
    getUserId: function() {
      const params = new URLSearchParams(window.location.search);
      if (params.has("id")) {
        this.userId = params.get("id");
      }
    },
    signOutUser: function() {
      this.user = {};
      window.location.href = "https://jg-send-it.herokuapp.com";
    }
  }
};
</script>

<style>
#sendItLogo {
  padding-left: 10px;
  padding-bottom: 2px;
}
</style>
