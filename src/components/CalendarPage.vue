<template>
  <v-container>
    <v-row>
      <v-col>
        <v-date-picker
          ref="picker"
          v-model="date"
          :event-color="(date) => (date[9] % 2 ? 'red' : 'yellow')"
          :events="events"
          full-width
          :picker-date.sync="pickerDate"
        />
      </v-col>
      <v-col>
        <h2>
          {{ filteredMessages.length }} message<span
            v-if="filteredMessages.length != 1"
            >s</span
          >
          today.
        </h2>
        <v-list v-if="filteredMessages.length > 0">
          <MessageSmall
            v-for="message in filteredMessages"
            :id="message._id"
            :key="message._id"
            :destination="message.destination"
            :body="message.body"
            :sendTime="message.sendTime"
            :page="'calendar'"
            :server_url="server_url"
            @update="update"
          />
        </v-list>
      </v-col>
    </v-row>
    <NewListMessage
      @update="update"
      :userId="userId"
      :server_url="server_url"
    />
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
  props: ["userId", "server_url"],
  data: () => ({
    currentDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000),
    date: null,
    pickerDate: null,
    messages: [],
  }),
  methods: {
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
    formatDate: function(date){
      /* this is necessary because vuetify datepicker
      sends out a string in yyyy-mm-dd format. Javascript
      date objects are finnicky, and this adds the necessary
      leading zeroes to the month and date. */
      let year = date.getFullYear().toString();
      let month = (date.getMonth()+1).toString();
      let day = date.getDate().toString();
      if (month.length == 1) {
        month = "0" + month;
      }
      if (day.length == 1){
        day = "0" + day;
      }
      return  `${year}-${month}-${day}`
    },
    update: function() {
      this.getMessages();
    },
  },
  watch: {
    pickerDate() {
      this.messages.filter(
        (value, index, self) => self.indexOf(value) === index
      );
    },
  },
  created() {
    this.getMessages();
    this.date = this.formatDate(new Date())
  },
  computed: {
    filteredMessages: function() {
      return this.messages
        .filter(
          (message) =>
            this.formatDate(message.sendTime) === this.date
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
    formattedCalendarDate: function() {
      return this.date
    }
  },
};
</script>
