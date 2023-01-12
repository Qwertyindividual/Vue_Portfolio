<template>
    <footer>
      <div class="d-flex justify-content-between">
        <div class="Start">
            <div>
            <h4 class="pb-3 p-2">Kauthar <span>Brandt</span></h4>
            </div>
            <div class="footer-navbar">
                <router-link class="text-decoration-none" to="/">Home</router-link> |
                <router-link class="text-decoration-none" to="/about">About</router-link> |
                <router-link class="text-decoration-none" to="/resume">Resume</router-link> |
                <router-link class="text-decoration-none" to="/projects">Projects</router-link> |
                <router-link class="text-decoration-none" to="/testimonials">Testimonials</router-link> |
                <router-link class="text-decoration-none" to="/contact">Contact</router-link>
            </div>
        </div>
		<div class="Center">
            <div class="">
                <i class="fa-solid fa-location-pin"></i>
                <p>Mitchells Plain, Cape Town</p>
            </div>
            <div class="">
                <i class="fa-solid fa-phone"></i>
                <p>0736164107</p>
            </div>
            <div>
                <i class="fa-solid fa-envelope"></i>
                <p>brandtkauthar@gmail.com</p>
            </div>
		</div>
        <div class="End">
           <p>
            <span>About Me</span><br/>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
           </p>
           <div class="footer-socials">
            <a href="https://github.com/Qwertyindividual" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href=""><i class="fa-brands fa-linkedin" target="_blank"></i></a>
            <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
           </div>

        </div>
      </div>  
      <p class="text-white text-center pt-5">All Rights Reserved By Kauthar Brandt @2023</p>
	</footer>
    
</template>

<script>


    export default {
        name: 'Footer',
        components: {
            
        }
    
    }

</script>

<style scoped>
footer {
    background: linear-gradient(to right, red, blue, green, orange, purple);
    padding: 60px;
}

.router-link-exact-active {
  color: #42b983;
} 

.footer-socials i {
    margin: 20px;
    color: white;

}

img {
    width: 50px;
    height: 50px;
}

</style>