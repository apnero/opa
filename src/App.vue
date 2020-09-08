<template>
  <v-app>
     <v-app-bar fixed
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
        href="sms:+14752189321"
      >
        <v-icon>mdi-comment-text</v-icon>
      </v-btn>
      <v-btn href="mailto:opamarketingdanbury@gmail.com" icon>
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main >
      <MainScreen/>
    </v-main>
  </v-app>
</template>

<script>
import MainScreen from './components/MainScreen';

export default {
  name: 'App',

  components: {
    MainScreen,
  },

  data: () => ({
    //
  }),
};
</script>
