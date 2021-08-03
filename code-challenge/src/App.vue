<template>
  <v-app class="application">
    <side-bar/>
    <v-content class="content">
      <content-title />
      <router-view />
      <footer-page />
    </v-content>
  </v-app>
</template>

<script>

import SideBar from "./common-components/sideBar.vue"
import contentTitle from "./common-components/contentTitle.vue";
import footerPage from "./common-components/footerPage.vue";


export default {
  name: 'App',

  components: {
    SideBar,
    contentTitle,
    footerPage
  },

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.application {
  font-family: 'Poppins', sans-serif;
}

.content {
  margin: 50px 0px 0px 36px !important;
}
</style>
