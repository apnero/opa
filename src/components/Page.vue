<template>
  <v-card v-if="card"
    tile
    @click="backToPanelView"
    height="100vh"
    :color="card.color"
  >
    <v-row align="center">
      <v-col>
        <v-img
          :src="card.image"
          contain
        />
      </v-col>
      <v-col><h1 class="text-center">{{ card.text[language] }}</h1></v-col>
    </v-row>
  </v-card>
</template>

<script>
// import colors from "@/assets/crayola.json";
// import cardA from "@/images";

export default {
  // data() {
  //   return { colors, imageArray };
  // },
  props: {
    card: Object,
    language: Number,
  },
  methods: {
    backToPanelView() {
      this.$emit("backToPanelView");
    },
  },
};
</script>
