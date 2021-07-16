<template>
  <v-dialog v-model="newMessage" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="primary" v-bind="attrs" v-on="on" large bottom right fixed>
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">New Message</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-radio-group v-model="radioGroup" mandatory>
                <v-radio :label="`Email`" :value="email" />
                <v-radio :label="`Text`" :value="text" />
              </v-radio-group>
              <date-time-picker />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Destination"
                hint="Text: 1234567890
                Email: bob@example.com"
              ></v-text-field>
              <v-textarea
                counter
                clearable
                clear-icon="mdi-close-circle"
                label="Message"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="newMessage = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="newMessage = false">
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
    DateTimePicker,
  },
  data: () => ({
    newMessage: false,
    datetime: new Date(),
  }),
};
</script>
