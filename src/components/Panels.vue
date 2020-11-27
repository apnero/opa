<template>
  <div>
    <v-expand-transition>
      <Page
        v-show="pageView"
        @backToPanelView="pageView = false"
        :card="currentCard"
        :language="language"
      />
    </v-expand-transition>
    <v-expand-transition>
      <v-row v-if="!pageView" no-gutters>
        <v-col
          lg="3"
          md="4"
          sm="6"
          cols="6"
          v-for="(card, index) in cardArray"
          :key="index"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              tile
              :color="card.color"
              :elevation="hover ? 12 : 2"
              @mouseover="playSound()" @click="openPanel(card)"
            >
              <v-responsive :aspect-ratio="1 / 1">
                <v-img 
                  :src="
                    hover || (currentCard && card.text === currentCard.text)
                      ? bgArray[Math.floor(Math.random() * bgArray.length)]
                      : null
                  "
                  contain
                />
                <!-- <v-img style="position:absolute; top:0; left:0;" :src="getImage(num)" contain/> -->
                 <p class="text-h6" style="position:absolute;bottom:0px;right:4px">              
                {{ card.text[language] }}
              </p>
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
import bgArray from "@/bgs";
import cardArray from "@/cards";
import soundArray from "@/sounds";
import Page from "@/components/Page";

export default {
  data() {
    return {
      fab: false,
      bgArray,
      soundArray,
      cardArray,
      currentCard: null,
      pageView: false,
    };
  },
  props: {
    language: Number
  },
  components: {
    Page,
  },
  methods: {
    playSound() {
      const sound = new Howl({
        src: [this.soundArray[Math.floor(Math.random() * soundArray.length)]],
      });
      sound.play();
    },
    // randomColor(num) {
    //   const color = colors[Math.floor(Math.random() * colors.length)].hex;
    //   this.cardArray[num].color = color;
    //   return color
    // },
    openPanel(card) {
      this.currentCard = card;
      this.pageView = true;
    },
  },
};
</script>


