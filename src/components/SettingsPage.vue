<template>
  <v-container class="flex">
    <v-list rounded>
      <v-list-item>
        <v-list-item-title>
          Settings will go here :)
        </v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-toolbar flat height="72">
          <v-switch
            v-model="$vuetify.theme.dark"
            hint="Switch between Light Theme and Dark"
            inset
            label="Dark Theme"
            persistent-hint
          ></v-switch>
        </v-toolbar>
      </v-list-item>
      <v-list-item>
        <SignOutDialog />
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
};
</script>
