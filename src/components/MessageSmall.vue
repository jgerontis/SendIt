<template>
  <v-card>
    <v-card-title>
      {{ destination }}
    </v-card-title>
    <v-card-subtitle>
      {{ sendTime }}
    </v-card-subtitle>
    <v-card-text>
      {{ body }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MessageSmall",
  props: ["destination", "sendTime", "body"],
};
</script>
