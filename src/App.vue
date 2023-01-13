<template>
  <NavBar/>
  <router-view></router-view>
  <Footer/>
 
</template>

<script>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'

export default {
  
  name: 'App',
  components: {
    Footer,
    NavBar
  }
}
</script>


<style>
body {

background-color: black;
}



</style>
