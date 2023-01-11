<template>
    <div>
    <Animated-background1 />
    <div class="container">

    <Testimonial-card  v-for="testimonial in testimonials" :key="testimonial" :testimonial="testimonial"/>
</div>  
    </div>
</template>

<script>

import AnimatedBackground1 from '@/components/AnimatedBackground1.vue'

    export default {
       components: {
        AnimatedBackground1,
        TestimonialCard
       },
       computed: {
          testimonials(){
          return this.$store.state.testimonials
          }
      }
  }

</script>

<style scoped>

</style>