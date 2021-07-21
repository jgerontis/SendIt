<template>
  <v-container>
    <v-list>
      <MessageSmall
        v-for="message in messages"
        v-bind:key="message._id"
        :id="message._id"
        :body="message.body"
        :type="message.type"
        :destination="message.destination"
        :sendTime="message.sendTime"
        @update="getMessages"
      />
    </v-list>
    <NewListMessage @update="getMessages" />
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
      fetch(this.server_url + "/message").then((response) =>
        response.json().then(function(data) {
          console.log(data);
          that.messages = data;
          console.log(that.messages);
        })
      );
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
