<template>
  <v-container fluid class="pa-0">
    <v-toolbar
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      prominent
      dark
    >
      <v-toolbar-title>OPA Marketing</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn href="https://instagram.com/nai_brito_ct" icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon
        href="sms:+14752189321&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for..."
      >
        <v-icon>mdi-comment-text</v-icon>
      </v-btn>
      <v-btn href="mailto:'opamarketingdanbury@gmail.com'" icon>
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-toolbar>
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
