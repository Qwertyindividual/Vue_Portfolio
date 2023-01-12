<template>
    <div>
    <Animated-background1 />


    <!-- v-for="testimonial in testimonials" :key="testimonial" :testimonial="testimonial -->
  
    </div>
</template>

<script>

import AnimatedBackground1 from '@/components/AnimatedBackground1.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import AOS from 'aos'

    export default {
       components: {
        AnimatedBackground1,
        TestimonialCard
       },
       computed: {
          testimonials(){
          return this.$store.state.testimonials
          }
      },
      mounted() {
      AOS.init();
  }
  }

</script>

<style scoped>

</style>