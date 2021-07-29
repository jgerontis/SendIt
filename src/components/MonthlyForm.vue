<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col>
            <v-row>
              <v-col>
                <v-menu :close-on-content-click="true" open-on-hover>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on">
                      Day of the Month
                    </v-btn>
                  </template>
                  <v-list>
                    <v-radio-group v-model="dayOfMonth">
                      <v-radio label="1st" value="1" />
                      <v-radio label="5th" value="5" />
                      <v-radio label="10th" value="10" />
                      <v-radio label="15th" value="15" />
                      <v-radio label="20th" value="20" />
                      <v-radio label="25th" value="25" />
                    </v-radio-group>
                  </v-list>
                </v-menu>
              </v-col>
            </v-row>
            <v-row><v-time-picker v-model="time"/></v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-radio-group v-model="type" mandatory row>
                <v-radio :label="`Email`" :value="`email`" />
                <v-radio :label="`Text`" :value="`text`" />
              </v-radio-group>
            </v-row>
            <v-row>
              <v-text-field
                v-model="destination"
                label="Destination"
                hide-details="auto"
              />
            </v-row>
            <v-row>
              <v-slider
                v-model="duration"
                color="orange"
                label="Number of Months:"
                min="1"
                max="12"
                thumb-label
              ></v-slider>
            </v-row>
            <v-row>
              <v-textarea
                counter
                clearable
                clear-icon="mdi-close-circle"
                label="Message"
                v-model="body"
              />
            </v-row>
            <v-row>
              <v-btn @click="submit">Submit</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MonthlyForm",
  props: ["userId", "server_url"],
  data: () => ({
    type: "",
    body: "",
    destination: "",
    dayOfMonth: 0,
    duration: 0,
    time: "",
  }),
  methods: {
    submit: function() {
      let newDate = new Date();
      // if they picked a day of the month that has already passed, we start next month
      if (newDate.getDate() < this.dayOfMonth) {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      // change the day
      newDate.setDate(this.dayOfMonth);

      // change the time
      newDate.setHours(this.time.toString().substr(0, 2));
      newDate.setMinutes(this.time.toString().substr(3, 2));
      // now that we have the correct date and time, repeat for as many months as selected
      for (let i = 0; i < this.duration; i++) {
        let sendTime = newDate;
        sendTime.setMonth(sendTime.getMonth() + i);
        console.log("It's supposed to send at:", sendTime);
        let newMessage = {
          userId: this.userId,
          type: this.type,
          body: this.body,
          destination: this.destination,
          sendTime: sendTime.toISOString(),
        };
        console.log("Creating Message:", newMessage);
        // send the message to the server
        console.log("the server url:", this.server_url);
        fetch(`${this.server_url}/message`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMessage),
        })
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log("Created new message:", data);
          });
      }
    },
  },
};
</script>
