<template>
  <v-card v-if="bgColorAndImage"
    tile
    @click="backToPanelView"
    height="100vh"
    :color="bgColorAndImage.color"
  >
    <v-row align="center">
      <v-col>
        <v-img
          :src="bgColorAndImage.imageObj.image"
          contain
        />
      </v-col>
      <v-col><h1 class="text-center">{{ bgColorAndImage.imageObj.text }}</h1></v-col>
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
