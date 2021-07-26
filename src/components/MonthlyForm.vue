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
  name: "MonthlyForm",
  props: ["userId"],
  data: () => ({
    type: "",
    body: "",
    destination: "",
  }),
  methods: {
    submit: function() {
      // do stuff
    },
  },
};
</script>
