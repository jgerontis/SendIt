<template>
  <v-dialog v-model="display" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on">
        Sign Out
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Sign Out</span>
      </v-card-title>
      <v-card-text>
        Are you sure you want to sign out?
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="display = false">
          No
        </v-btn>
        <v-btn
          text
          @click="
            display = false;
            signingOut();
          "
        >
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SignOutDialog",
  data: () => ({
    display: false,
  }),
  methods: {
    signingOut: function() {
      console.log("trying to sign out");
      this.$emit("signout");
    },
  },
};
</script>
