<template>
  <v-container>
    <v-row>
      <v-col>
        <v-date-picker
          ref="picker"
          v-model="date"
          :picker-date.sync="pickerDate"
          :event-color="(date) => (date[9] % 2 ? 'red' : 'yellow')"
          :events="arrayEvents"
          full-width
        ></v-date-picker>
      </v-col>
      <v-col>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CalendarPage",
  data: () => ({
    arrayEvents: null,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    pickerDate: null,
    messages: [
      "President met with prime minister",
      "New power plant opened",
      "Rocket launch announced",
      "Global warming discussion cancelled",
      "Company changed its location",
    ],
  }),
  watch: {
    pickerDate() {
      this.notes = [
        this.allNotes[Math.floor(Math.random() * 5)],
        this.allNotes[Math.floor(Math.random() * 5)],
        this.allNotes[Math.floor(Math.random() * 5)],
      ].filter((value, index, self) => self.indexOf(value) === index);
    },
  },
  created() {},
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },
  methods: {
    clicked(){
      console.log("heelo")
      },
  },
};
</script>
