<template>
  <div>
  <AnimatedBackground2 />
  </div>
</template>

<script>

import AnimatedBackground2 from '@/components/AnimatedBackground2.vue'
import AOS from 'aos'

  export default {
    components: {
      AnimatedBackground2
    },
    mounted() {
    AOS.init();
  }
  }
</script>

<style scoped>

</style>
