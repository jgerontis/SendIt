<template>
  <v-card>
    <v-card-title>
      {{ destination }}
    </v-card-title>
    <v-card-subtitle>
      {{ date }}
      <br />
      {{ time }}
    </v-card-subtitle>
    <v-card-text>
      {{ body }}
    </v-card-text>
    <v-card-actions>
      <v-btn @click="editMessage">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn>
        <v-icon>mdi-delete-forever</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MessageSmall",
  props: ["destination", "date", "body", "time"],
  methods: {
    editMessage: function() {
      console.log("you clicked the pencil");
    },
  },
};
</script>
