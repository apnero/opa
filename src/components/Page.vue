<template>
  <v-card
    tile
    @click="backToPanelView"
    height="100vh"
    :color="bgColorAndImage.color"
  >
    <v-row>
      <v-col>
        <v-img
          :src="bgColorAndImage.image"
          contain
        />
      </v-col>
      <v-col>{{ bgColorAndImage }}</v-col>
    </v-row>
  </v-card>
</template>

<script>
import colors from "@/assets/crayola.json";
import imageArray from "@/images";

export default {
  data() {
    return { colors, imageArray };
  },
  props: {
    bgColorAndImage: Object,
  },
  methods: {
    backToPanelView() {
      this.$emit("backToPanelView");
    },
  },
};
</script>
