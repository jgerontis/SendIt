<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col><v-time-picker v-model="time"/></v-col>
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
                label="Number of Days:"
                min="1"
                max="10"
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
                :rules="[rules.required, rules.counter]"
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
  name: "DailyForm",
  props: ["userId", "server_url"],
  data: () => ({
    type: "",
    body: "",
    duration: "",
    destination: "",
    rules: {
      required: (value) => !!value || "Required.",
      counter: (value) => value.length <= 60 || "Max 60 characters",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),
  methods: {
    submit() {
      let newDate = new Date(); // get current date and time
      // if they picked a time of the day that has already passed, we start with tomorrow
      if (
        newDate.getHours() > this.time.toString().substr(0, 2) &&
        newDate.getMinutes() > this.time.toString().substr(3, 2)
      ) {
        newDate.setDate(newDate.getDate() + 1); // the first is 1
      }

      // change the time
      newDate.setHours(this.time.toString().substr(0, 2));
      newDate.setMinutes(this.time.toString().substr(3, 2));
      // now that we have the correct date and time, repeat for as many days as selected
      for (let i = 0; i < this.duration; i++) {
        let sendTime = newDate;
        sendTime.setDate(sendTime.getDate() + 1);
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
      this.destination = "";
      this.body = "";
      alert("Success!");
    },
  },
};
</script>
