<template>
  <div>
    <AnimatedBackground5 />
    
  </div>
</template>

<script>


import AnimatedBackground5 from '@/components/AnimatedBackground5.vue'
import AOS from 'aos'

export default {

  name: 'HomeView',
  components: {
    AnimatedBackground5
  },
  mounted() {
    AOS.init();
  }
}
</script>
