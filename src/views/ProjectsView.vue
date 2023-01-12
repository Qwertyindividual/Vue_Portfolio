<template>
    <div>
    <AnimatedBackground4 />
    </div>
</template>

<script>

import AnimatedBackground4 from '@/components/AnimatedBackground4.vue'
import AOS from 'aos'

    export default {
       components: {
        AnimatedBackground4
       },
       mounted() {
       AOS.init();
  }
    }
</script>

<style scoped>

</style>