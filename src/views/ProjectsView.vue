<template>
    
    <AnimatedBackground4 />
</template>

<script>

import AnimatedBackground4 from '@/components/AnimatedBackground4.vue'

import ProjectsCard from '@/components/ProjectsCard.vue'
import AOS from 'aos'

    export default {
       components: {
        AnimatedBackground4,
        ProjectsCard
       },
       mounted() {
       AOS.init();
  }
    }
</script>

<style scoped>

</style>