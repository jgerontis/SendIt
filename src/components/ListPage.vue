<template>
  <v-container>
    <h2>You have {{ messages.length }} scheduled message(s).</h2>
    <v-list>
      <MessageSmall
        v-for="message in messages"
        v-bind:key="message._id"
        :id="message._id"
        :body="message.body"
        :type="message.type"
        :destination="message.destination"
        :sendTime="message.sendTime"
        :page="'list'"
        @update="update"
      />
    </v-list>
    <NewListMessage @update="getMessages" :userId="userId" />
  </v-container>
</template>

<script>
import MessageSmall from "./MessageSmall.vue";
import NewListMessage from "./NewListMessage.vue";

export default {
  name: "ListPage",
  components: {
    MessageSmall,
    NewListMessage,
  },
  props: ["userId"],
  data: function() {
    return {
      messages: [],
      server_url: "http://localhost:3000",
    };
  },
  methods: {
    // message section WOWZA
    getMessages: function() {
      let that = this;
      fetch(`${this.server_url}/message/${this.userId}`).then((response) =>
        response.json().then(function(data) {
          that.messages = data;
          that.messages.forEach((message) => {
            message.sendTime = new Date(message.sendTime);
          });
        })
      );
    },
    update: function() {
      this.getMessages();
    },
  },
  created() {
    console.log(this.messages);
    this.getMessages();
  },

  computed: {
    filtered_messages: function() {
      return this.messages;
    },
  },
};
</script>
