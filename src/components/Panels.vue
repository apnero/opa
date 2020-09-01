<template>
  <div>
    <v-expand-transition >
    <Page
      v-show="pageView"
      @backToPanelView="pageView = false"
      :bgColorAndImage="cardArray[imageNum]"
    />
    </v-expand-transition>
    <v-expand-transition >
    <v-row v-if="!pageView" no-gutters>
      <v-col lg="3" md="4" sm="6" cols="6" v-for="(notUsed, num) in numCards" :key="num">
        <v-hover v-slot:default="{ hover }">
          <v-card
            tile
            :color="randomColor(num)"
            :elevation="hover ? 12 : 2"
            @mouseover="playSound()"
            @click="openPanel(num)"
          >
            <v-responsive :aspect-ratio="1 / 1">
              <v-img
                :src="hover ? bgArray[Math.floor(Math.random() * bgArray.length)]: null"
                contain
              />
              <!-- <v-overlay absolute> -->
                <v-img style="position:absolute; top:0; left:0;" :src="getImage(num)" contain/>
              <!-- </v-overlay> -->
            </v-responsive>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    </v-expand-transition>
  </div>
</template>

<script>
import { Howl } from "howler";
import colors from "@/assets/crayola.json";
import bgArray from "@/bgs";
import imageArray from "@/images";
import soundArray from "@/sounds";
import Page from "@/components/Page";

export default {
  data() {
    return {
      colors,
      bgArray,
      imageArray,
      soundArray,
      cardArray: [],
      numCards: 24,
      pageView: false,
      imageNum: null,
    };
  },
  components: {
    Page,
  },
  beforeMount() {
    // eslint-disable-next-line no-unused-vars
    for (let i = 0; i < this.numCards; i++) {
      this.cardArray.push({ color: null, imageObj: imageArray[Math.floor(Math.random() * imageArray.length)] });
    }
    console.log(this.cardArray);
  },
  methods: {
    playSound() {
      const sound = new Howl({
        src: [this.soundArray[Math.floor(Math.random() * soundArray.length)]],
      });
      sound.play();
      //console.log(JSON.stringify(this.cardArray))
    },
    randomColor(num) {
      const color = colors[Math.floor(Math.random() * colors.length)].hex;
      this.cardArray[num].color = color;
      //console.log(color)
      //console.log(JSON.stringify(this.cardArray))
      return color
    },
    getImage(num) {
      // const imageObj =
      //   imageArray[Math.floor(Math.random() * imageArray.length)];
      // this.cardArray[num].imageObj = imageObj;
      return this.cardArray[num].imageObj.image;
    },
    openPanel(num) {
      console.log(JSON.stringify(this.cardArray[num]));
      this.imageNum = num;
      this.pageView = true;
    },
  },
};
</script>
