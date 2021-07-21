<template>
  <v-dialog v-model="display" persistent max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="primary" v-bind="attrs" v-on="on" large bottom right fixed>
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
    </template>
    <v-card min-width="500px">
      <v-card-title>
        <span class="text-h5">New Message</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col id="destination" align="right">To:</v-col>
            <v-col>
              <v-text-field
                label="Destination"
                hint="Text: 1234567890
                Email: bob@example.com"
                v-model="destination"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-radio-group v-model="radioGroup" mandatory>
                <v-radio :label="`Email`" :value="`email`" />
                <v-radio :label="`Text`" :value="`text`" />
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col id="pickDate" cols="4">Delivery Date:</v-col>
            <v-col cols="12" sm="6" md="4">
              <DateTimePicker v-model="datetime">
                <v-icon>mdi-calendar</v-icon>
              </DateTimePicker>
            </v-col>
          </v-row>
          <v-row> </v-row>
          <v-row id="messageModal">
            <v-textarea
              counter
              clearable
              clear-icon="mdi-close-circle"
              label="Message"
              v-model="body"
            ></v-textarea>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="display = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="postMessage">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import DateTimePicker from "./DateTimePicker.vue";
export default {
  name: "NewListMessage",
  components: {
    DateTimePicker
  },
  data: () => ({
    server_url: "http://localhost:3000/message",
    radioGroup: "",
    body: "",
    destination: "",
    display: false,
    datetime: new Date()
  }),
  methods: {
    postMessage: function() {
      let that = this;
      var newMessage = {
        body: this.body,
        destination: this.destination,
        type: this.radioGroup,
        sendTime: this.datetime
      };
      console.log("creating message:", newMessage);
      fetch(this.server_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage)
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log("Created new message:", data);
          that.$emit("update");
          that.display = false;
        });
    }
  }
};
</script>
<style scoped>
#destination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 50px;
}
#pickDate {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
