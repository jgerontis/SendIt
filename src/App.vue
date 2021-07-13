<template>
  <v-app>
    <v-main>
      <NavBar />
      <MyCalendar />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import Test from "./components/Test";
import MyCalendar from "./components/Calendar.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",

  components: {
    MyCalendar,
    NavBar,
  },

  data: () => ({
    page: "caldendar",
  }),
};
</script>
