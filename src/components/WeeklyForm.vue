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
                      Day of the Week
                    </v-btn>
                  </template>
                  <v-list>
                    <v-radio-group>
                      <v-radio
                        v-for="day in days"
                        v-bind:key="day.value"
                        v-model="selectedDay"
                        :label="day.name"
                      />
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
              <v-text-field label="Destination" hide-details="auto" />
            </v-row>
            <v-row>
              <v-slider
                v-model="numWeeks"
                color="orange"
                label="Number of Weeks:"
                min="1"
                max="6"
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
  name: "WeeklyForm",
  props: ["userId"],
  data: () => ({
    days: [
      { name: "Monday", value: 1 },
      { name: "Tuesday", value: 2 },
      { name: "Wednesday", value: 3 },
      { name: "Thursday", value: 4 },
      { name: "Friday", value: 5 },
      { name: "Saturday", value: 6 },
      { name: "Sunday", value: 0 },
    ],
    type: "",
  }),
  methods: {
    submit: function() {
      // do stuff
    },
  },
};
</script>
