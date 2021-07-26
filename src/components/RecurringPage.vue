<template>
  <v-container>
    <v-card>
      <v-tabs v-model="tab" background-color="transparent" grow>
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <DailyForm :userId="userId" />
        </v-tab-item>
        <v-tab-item>
          <WeeklyForm :userId="userId" />
        </v-tab-item>
        <v-tab-item>
          <MonthlyForm :userId="userId" />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import DailyForm from "./DailyForm.vue";
import WeeklyForm from "./WeeklyForm.vue";
import MonthlyForm from "./MonthlyForm.vue";
export default {
  name: "RecurringPage",
  components: { DailyForm, WeeklyForm, MonthlyForm },
  props: ["userId"],
  data: () => ({
    tab: null,
    items: ["Daily", "Weekly", "Monthly"],
    messages: [],
    server_url: "http://localhost:3000",
  }),
  methods: {},
};
</script>
