<template>
    <Testimonial />
    <TestimonialCard/>
</template>

<script>

import Testimonial from '@/components/Testimonial.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import AOS from 'aos'

    export default {
       components: {
        Testimonial,
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