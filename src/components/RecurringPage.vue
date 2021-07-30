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
          <DailyForm :userId="userId" :server_url="server_url" />
        </v-tab-item>
        <v-tab-item>
          <MonthlyForm :userId="userId" :server_url="server_url" />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import DailyForm from "./DailyForm.vue";
import MonthlyForm from "./MonthlyForm.vue";
export default {
  name: "RecurringPage",
  components: { DailyForm, MonthlyForm },
  props: ["userId", "server_url"],
  data: () => ({
    tab: null,
    items: ["Daily", "Monthly"],
    messages: [],
  }),
  methods: {},
};
</script>
