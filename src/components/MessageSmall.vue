<template>
  <v-card class="mb-1">
    <v-card-title>
      <span v-if="!editing">{{ mDestination }}</span>
      <v-text-field
        v-else
        v-model="mDestination"
        label="Destination"
        required
      />
    </v-card-title>
    <v-card-subtitle>{{ formattedTime }}</v-card-subtitle>
    <v-card-text>
      <span v-if="!editing">{{ mBody }}</span>
      <div v-else>
        <v-textarea v-model="mBody" label="Message" required />
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn v-if="editing" @click="saveMessage">
        <v-icon>mdi-check</v-icon>
      </v-btn>
      <v-btn v-if="editing" @click="revertMessage">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-btn v-if="!editing" @click="editMessage">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn v-if="!editing" @click="deleteMessage">
        <v-icon>mdi-delete-forever</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MessageSmall",
  props: ["id", "body", "destination", "sendTime", "type"],
  data: () => ({
    server_url: "http://localhost:3000",

    editing: false,

    mBody: "",
    mDestination: "",
    mSendTime: "",
    mType: "",

    previous_body: "",
    previous_destination: "",
    previous_sendTime: "",
    previous_type: "",
  }),

  created() {
    this.mBody = this.body;
    this.mDestination = this.destination;
    this.mSendTime = this.sendTime;
    this.mType = this.type;
  },

  methods: {
    editMessage: function() {
      this.previous_destination = this.mDestination;
      this.previous_sendTime = this.mSendTime;
      this.previous_body = this.mBody;
      this.previous_type = this.mType;
      this.editing = true;
    },
    revertMessage: function() {
      this.mBody = this.previous_body;
      this.mSendTime = this.previous_sendTime;
      this.mDestination = this.previous_destination;
      this.mType = this.previous_type;
      this.editing = false;
    },
    saveMessage: function() {
      this.editing = false;
      fetch(`${this.server_url}/message/${this.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: this.mBody,
          destination: this.mDestination,
          sendTime: this.mSendTime.toISOString(),
          type: this.mType,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("edited message", data);
          this.$emit("update");
        });
    },
    deleteMessage: function() {
      console.log(`${this.server_url}/message/${this.id}`);
      fetch(`${this.server_url}/message/${this.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.$emit("update");
        });
    },
  },
  computed: {
    formattedTime: function() {
      return this.sendTime.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
};
</script>
