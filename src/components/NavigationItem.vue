<template>
  <v-list-item @click="$emit('changepage', title)">
    <v-list-item-icon>
      <v-icon>{{ this.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ this.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "NavigationItem",
  props: ["icon", "title"],
};
</script>
