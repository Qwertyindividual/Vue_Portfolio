<template>
    <Project />
</template>

<script>

import Project from '@/components/Project.vue'

import ProjectsCard from '@/components/ProjectsCard.vue'
import AOS from 'aos'

    export default {
       components: {
        Project,
        ProjectsCard
       },
       mounted() {
       AOS.init();
  }
    }
</script>

<style scoped>

</style>