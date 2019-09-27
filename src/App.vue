<template>
  <div id="app">
    <Navigation/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP|Roboto&display=swap');

#app {
  font-family: 'Roboto', 'Noto Sans JP', sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
}
</style>
