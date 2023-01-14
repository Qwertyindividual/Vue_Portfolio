<template>
    <div>
     <Resume />
    </div>
</template>

<script>

import Resume from '@/components/Resume.vue'
import AOS from 'aos'

    export default {
        components: {
            Resume
        },
        mounted() {
        AOS.init();
  }
    }
</script>

<style scoped>


</style>