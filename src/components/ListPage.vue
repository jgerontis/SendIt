<template>
  <v-container>
    <h2>
      You have {{ messages.length }} scheduled message<span
        v-if="messages.length != 1"
        >s</span
      >.
    </h2>
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
        :server_url="server_url"
        @update="update"
      />
    </v-list>
    <NewListMessage
      @update="getMessages"
      :userId="userId"
      :server_url="server_url"
    />
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
  props: ["userId", "server_url"],
  data: function() {
    return {
      messages: [],
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
