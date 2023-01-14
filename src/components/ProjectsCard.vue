<template>
      <div v-for="id in projects" :key="id" class="card p-2 m-5 mx-auto" data-aos="zoom-in" data-aos-duration="3000">
      <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="projects.image" class="img-fluid rounded-start " alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" data-aos="zoom-in" data-aos-duration="2000">{{ projects.title }}</h5>
        <p class="card-text" data-aos="zoom-in" data-aos-duration="2000">{{ projects.description }}</p>
        <p class="card-text" data-aos="fade-right" data-aos-duration="3000"><small class="text-muted">{{ projects.tools }}</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
    computed: {
        Projects() {
            return this.$store.state.projects
        }
    },
}
</script>