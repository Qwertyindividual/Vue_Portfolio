<template>
  <div>
  <About />
  </div>
</template>

<script>

import About from '@/components/About.vue'
import AOS from 'aos'

  export default {
    components: {
      About
    },
    mounted() {
    AOS.init();
  }
  }
</script>

<style scoped>

</style>
