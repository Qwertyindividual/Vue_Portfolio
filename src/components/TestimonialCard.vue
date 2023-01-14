<template>
    <div v-for="testimonial in Testimonials" :key="testimonial" class="loop" data-aos="zoom-in" data-aos-duration="3000" style="height: 18rem;">
      <div class="card h-100 mb-3" style="max-width: 600px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="testimonial.image" class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" data-aos="zoom-in" data-aos-duration="2000">{{ testimonial.name }}</h5>
        <p class="card-text" data-aos="zoom-in" data-aos-duration="2000">{{ testimonial.testimonial }}</p>
        <p class="card-text" data-aos="fade-right" data-aos-duration="3000"><small class="text-muted">{{ testimonial.relation }}</small></p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  computed: {
        Testimonials() {
            return this.$store.state.testimonials
        }
    },
}
</script>

<style scoped>
.loop {
  display: inline-flex;
  padding-top:100px;
}
.card {
  background: transparent;
  color: white;
  padding-top: 50px;
  padding-left:30px;
 }

</style>

