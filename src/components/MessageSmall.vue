<template>
  <v-card>
    <v-card-title>
      {{ destination }}
    </v-card-title>
    <v-card-subtitle>
      {{ send_date }}
    </v-card-subtitle>
    <v-card-text>
      {{ body }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MessageSmall",
  props: ["destination", "send_date", "body"],
};
</script>
