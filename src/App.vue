<template>
  <v-app id='app'>
    <v-main>
      <MainScreen />
    </v-main>
  </v-app>
</template>

<script>
import MainScreen from "./components/MainScreen";

export default {
  name: "App",

  components: {
    MainScreen,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300&display=swap');

html, body, h6 {
font-family: 'Almarai', sans-serif;
}

#app {
font-family: 'Almarai', sans-serif;
}
</style>
