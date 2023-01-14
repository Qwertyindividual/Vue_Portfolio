<template>
      <div v-for="id in Projects" :key="id" class="p-2 m-5 mx-auto loop" data-aos="zoom-in" data-aos-duration="3000">
      <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="id.image" class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" data-aos="zoom-in" data-aos-duration="2000">{{ id.title }}</h5>
        <p class="card-text" data-aos="zoom-in" data-aos-duration="2000">{{ id.description }}</p>
        <p class="card-text" data-aos="fade-right" data-aos-duration="3000"><small class="text-muted">{{ id.tools }}</small></p>
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

<style scoped>
.loop {
  display: inline-flex;
}

.card {
  background: transparent;
  color: white;
  margin-top: 150px;
  margin-left: 80px;
  margin-right: 60px;
}
</style>