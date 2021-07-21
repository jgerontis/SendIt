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
      <v-btn @click="deleteMessage">
        <v-icon>mdi-delete-forever</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MessageSmall",
  props: ["id", "destination", "date", "body", "time"],
  data: () => ({
    server_url: "http://localhost:3000",
  }),

  methods: {
    editMessage: function() {
      console.log("you clicked the pencil");
    },
    deleteMessage: function() {
      fetch(`${this.server_url}/message/${this.id}`, {
        headers: {
          METHOD: "DELETE",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        });
    },
  },
};
</script>
