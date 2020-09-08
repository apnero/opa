<template>
  <v-container fluid class="pa-0">
    <Panels :language="language" />
    <v-bottom-navigation dark style="z-index:20" height="32px" grow app>
      <v-btn @click="language = 0">
        <span>English</span>
      </v-btn>
      <v-btn @click="language = 1">
        <span>Portugues</span>
      </v-btn>
      <v-btn @click="language = 2">
        <span>Espanhol</span>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
import Panels from "@/components/Panels";

export default {
  data() {
    return {
      language: 0,
    };
  },
  components: {
    Panels,
  },
};
</script>
