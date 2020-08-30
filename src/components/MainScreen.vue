<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col lg="3" md="4" sm="6" cols="6" v-for="num in 25" :key="num">
        <v-hover v-slot:default="{ hover }">
          <v-card
            tile
            :color="colors[Math.floor(Math.random() * 133)].hex"
            :elevation="hover ? 12 : 2"
          >
            <v-responsive :aspect-ratio="1 / 1">
              <v-img src="@/assets/bg1.png"/>
              <v-card-text>
                OPA
              </v-card-text>
            </v-responsive>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import colors from "@/assets/crayola.json";

export default {
  data() {
    return {
      colors,
    };
  },
};
</script>
