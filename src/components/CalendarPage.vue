<template>
  <v-container>
    <v-row>
      <v-col>
        <v-date-picker
          ref="picker"
          v-model="date"
          :picker-date.sync="pickerDate"
          :event-color="(date) => (date[9] % 2 ? 'red' : 'yellow')"
          :events="events"
          full-width
        ></v-date-picker>
      </v-col>
      <v-col>
<<<<<<< HEAD
        <div class="text-h6">
          Month news ({{ pickerDate || "change month..." }})
        </div>
        <div class="subheading">
          Change month to see other news
                    <button v-on:click="clicked">click me</button>

        </div>
        <ul class="ma-4">
          <li v-for="message in messages" :key="message">
            {{ message }}
          </li>
        </ul>
=======
        <v-list>
          <MessageSmall
            v-for="message in filteredMessages"
            :key="message._id"
            :destination="message.destination"
            :body="message.body"
            :time="
              message.sendTime.getHours().toString() +
                ':' +
                formatMinutes(message.sendTime.getMinutes())
            "
          />
        </v-list>
>>>>>>> de984d651c8765b3188cb891dfac772414583ac7
      </v-col>
    </v-row>
    <NewListMessage @update="update" />
  </v-container>
</template>

<script>
import MessageSmall from "./MessageSmall.vue";
import NewListMessage from "./NewListMessage.vue";
export default {
  name: "CalendarPage",
  components: {
    MessageSmall,
    NewListMessage,
  },
  data: () => ({
    currentDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000),
    date: null,
    pickerDate: null,
    messages: [],
    server_url: "http://localhost:3000",
  }),
  watch: {
    pickerDate() {
      this.messages.filter(
        (value, index, self) => self.indexOf(value) === index
      );
    },
  },
  created() {
    this.getMessages();
    this.date = this.currentDate.toISOString().substr(0, 10);
  },
  mounted() {},
  methods: {
    getMessages: function() {
      let that = this;
      fetch(this.server_url + "/message").then((response) =>
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
      this.updateEvents();
    },
    formatMinutes: function(minutes) {
      minutes = minutes.toString();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return minutes;
    },
  },
  computed: {
    filteredMessages: function() {
      return this.messages
        .filter(
          (message) =>
            message.sendTime.toISOString().substr(0, 10) === this.date
        )
        .sort((a, b) =>
          a.sendTime.toISOString().substr(11, 5) >
          b.sendTime.toISOString().substr(11, 5)
            ? 1
            : -1
        );
    },
    events: function() {
      return this.messages.map((message) =>
        message.sendTime.toISOString().substr(0, 10)
      );
    },
  },
<<<<<<< HEAD
  methods: {
    clicked(){
      console.log("heelo")
      },
  },
=======
>>>>>>> de984d651c8765b3188cb891dfac772414583ac7
};
</script>
