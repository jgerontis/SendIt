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
              <v-text-field label="Destination" hide-details="auto" />
            </v-row>
            <v-row>
              <v-slider
                v-model="numDays"
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
  props: ["userId"],
  data: () => ({
    type: "",
  }),
  methods: {
    submit: function() {
      // do stuff
    },
  },
};
</script>
