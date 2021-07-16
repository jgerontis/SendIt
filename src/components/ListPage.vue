<template>
  <v-container>
    <v-list>
      <MessageSmall
        v-for="message in messages"
        v-bind:key="message._id"
        :body="message.body"
        :type="message.type"
        :destination="message.destination"
      />
    </v-list>
    <NewListMessage />
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
    getMessages: function() {},
  },
  created() {
    console.log(this.messages);
    let that = this;
    fetch(this.server_url + "/message").then((response) =>
      response.json().then(function(data) {
        console.log(data);
        that.messages = data;
        console.log(that.messages);
      })
    );
  },

  computed: {
    filtered_messages: function() {
      return this.messages;
    },
  },
};
</script>
