<template>
	
    <nav class="navbar navbar-expand-lg navbar-light bg-gradient fixed-top">
		<div class="container">
			<a class="navbar-brand" href="#"><span class="text-primary fw-bold">Port</span>folio</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
				<router-link class="text-decoration-none" to="/"><a>HOME</a></router-link> |
                <router-link class="text-decoration-none" to="/about"><a>ABOUT</a></router-link> |
                <router-link class="text-decoration-none" to="/resume"><a>RESUME</a></router-link> |
                <router-link class="text-decoration-none" to="/projects"><a>PROJECTS</a></router-link> |
                <router-link class="text-decoration-none" to="/testimonials"><a>TESTIMONIALS</a></router-link> |
                <router-link class="text-decoration-none" to="/contact"><a>CONTACT</a></router-link>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
a {
 color: white;
 font-size: large;
 margin: 10px;
 }
a::before {
    content: "";
    color: white;
    
}

a::after, a:hover{
    content: "" ;
    -webkit-box-reflect: below 1px linear-gradient(transparent, black);
    /* animation: animate 1s linear infinite; */
    color:rgb(255, 255, 255);
        text-shadow: 0 0 10px orange,
                     0 0 20px orange,
                     0 0 40px orange,
                     0 0 80px orange,
                     0 0 160px orange;
}

</style>

