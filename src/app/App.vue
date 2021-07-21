<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img v-bind:src="pic" alt=""></v-img>
          </v-list-item-avatar>
          <v-list-item-content>{{email}}
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
      <v-spacer />
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
import CalendarPage from "../components/CalendarPage.vue";
import ListPage from "../components/ListPage.vue";
import SettingsPage from "../components/SettingsPage.vue";
import NavigationItem from "../components/NavigationItem.vue";

export default {
  name: "App",

  components: {
    CalendarPage,
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
    pic: "",
    userId: "",
    email: "",
  }),
  created: function() {
    console.log("created");

    this.getUserId();
    this.choosepic();
  },
  methods: {
    changepage: function(page) {
      console.log(page);
      this.page = page;
    },
    choosepic: function() {
      console.log(this.userId);
      console.log("pic = ", this.pic);
      //let that = this;
      //let num = this.userId;
      console.log("===============================");
      console.log(this);
      let url = `http://localhost:3000/guser/${this.userId}`;
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          console.log("this is data", response);
          //this.pic = response;
          console.log(response);
          this.pic = response[0].picture;
          this.email = response[0].email;
        });

      //this.pic = "https://lh3.googleusercontent.com/a/default-user=s96-c"
    },
    getUserId: function() {
      const params = new URLSearchParams(window.location.search);
      if (params.has("id")) {
        console.log(params.get("id"));
        this.userId = params.get("id");
      }
    },
  },
};
</script>

<style scoped></style>
