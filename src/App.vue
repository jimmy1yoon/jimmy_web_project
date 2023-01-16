<template>
  <application id="app">

    <v-app-bar dense elevation="4">
      <v-subheader>{{ navtitle }}</v-subheader>
    </v-app-bar>

    <!-- main Login -->
    <single-grid>
      <transition name="fade">
        <router-view />
      </transition>
    </single-grid>
  </application>
</template>

<script>

import application from '@/components/template/application'
import singleGrid from '@/components/SingleGrid'

export default ({
  name: 'App',
  components: {
    application, 
    singleGrid,
  },
  data () {
      return {
        card_text: 'this is Login',
        collapsed: false,
        navigation: false,
        navitems: [],
        navtitle: 'PTK.ATD',
      }
    }
});

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
