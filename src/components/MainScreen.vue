<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="3" v-for="num in 25" :key="num">
        <v-card tile :color="colors[Math.floor(Math.random()*133)].hex"  > 
              <v-responsive :aspect-ratio="1/1" min-height="20">
        <v-card-text>
          This card will always be 16:9 (unless you put more stuff in it)
        </v-card-text>
      </v-responsive>
        </v-card>
      </v-col>
    </v-row>
    {{colors.length}}
  </v-container>
</template>

<script>
import colors from "@/assets/crayola.json"

export default {
  data() {
    return {
      colors
    }
  }
};
</script>
