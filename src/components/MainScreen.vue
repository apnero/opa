<template>
  <v-container fluid class="pa-0">
    <v-app-bar app
      fixed
      src="@/assets/images/titlebar.png"
      prominent
      dark
      shrink-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <!-- <v-toolbar-title>OPA Marketing</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn href="https://instagram.com/nai_brito_ct" icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon href="sms:+14752189321">
        <v-icon>mdi-comment-text</v-icon>
      </v-btn>
      <v-btn href="mailto:opamarketingdanbury@gmail.com" icon>
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      
      src="@/assets/images/navigationbar.png"
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

<v-subheader>REPORTS</v-subheader>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>All Products</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
<v-divider></v-divider>
<v-subheader>PART2</v-subheader>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>More Products</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>More </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>    
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
      drawer: false,
      group: [],
    };
  },
  components: {
    Panels,
  },
};
</script>
