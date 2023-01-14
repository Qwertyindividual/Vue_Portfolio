<template>
  <div>
    <Home />
          <div class="position-absolute top-50 start-50 translate-middle text-white" data-aos="zoom-in"
    data-aos-duration="3000">
            <h1 class="">Kauthar Brandt</h1>
          <p>Aspire to become a FullStack Developer</p>
              <router-link to="/projects"><a data-aos="fade-right" data-aos-duration="3000" class="btn btn-outline-light mx-2">View my
            work</a></router-link>
          <router-link to="/contact"><a data-aos="fade-left" data-aos-duration="3000" class="btn btn-outline-light mx-2">Contact
            Me</a></router-link>
          </div>
    
     
  </div>
</template>

<script>


import Home from '@/components/Home.vue'
import AOS from 'aos'

export default {

  name: 'HomeView',
  components: {
    Home
  },
  mounted() {
    AOS.init();
  }
}
</script>

<style scoped>
h1 {
font-size: 70px;
color: orange;
font-family: italic;
}

p {
font-size: 30px;
font-family: monospace;
}
a::before {
content:"";
color: white;
}

a::after, a:hover {
content:"";
color: orange;
background-color: transparent;
}
</style>
