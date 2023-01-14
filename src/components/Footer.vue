<template>
    <footer>
      <div class="d-flex justify-content-between">
        <div class="Start">
            <div>
            <h4 class="pb-3 p-2 text-black">Kauthar <span>Brandt</span></h4>
            </div>
            <div class="footer-navbar">
                <router-link class="text-decoration-none" to="/"><a>HOME</a></router-link> |
                <router-link class="text-decoration-none" to="/about"><a>ABOUT</a></router-link> |
                <router-link class="text-decoration-none" to="/resume"><a>RESUME</a></router-link> |
                <router-link class="text-decoration-none" to="/projects"><a>PROJECTS</a></router-link> |
                <router-link class="text-decoration-none" to="/testimonials"><a>TESTIMONIALS</a></router-link> |
                <router-link class="text-decoration-none" to="/contact"><a>CONTACT</a></router-link>
            </div>
        </div>
		<div class="Center">
            <div class="">
                <i class="fa-solid fa-location-pin"></i>
                <p class="fw-bold text-white">Mitchells Plain, Cape Town</p>
            </div>
            <div class="">
                <i class="fa-solid fa-phone"></i>
                <p class="fw-bold text-white">0736164107</p>
            </div>
            <div>
                <i class="fa-solid fa-envelope"></i>
                <p class="fw-bold text-white">brandtkauthar@gmail.com</p>
            </div>
		</div>
        <div class="End">
           <p>
            <span class="fw-bold">About Me</span><br/>
            Aspire to become FullStack Developer.
           </p>
           <div class="footer-socials">
            <a href="https://github.com/Qwertyindividual" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/kauthar-brandt-6a3838219/"><i class="fa-brands fa-linkedin" target="_blank"></i></a>
            <a href="https://www.instagram.com/kauthar_fire/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
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
  color: green;
} 

.footer-socials i {
    margin: 20px;
    color: white;

}
 a{
 color:white;
 }

@media (max-width: 880px) {
footer {
display: hidden;
}

p {
padding: 40px;
background: linear-gradient(to bottom right, red, blue, green, orange, purple);
}
}
@media (max-width: 320px) {
footer {
display: hidden;
}

p {
padding: 40px;
background: linear-gradient(to bottom right, red, blue, green, orange, purple);
}
}
</style>