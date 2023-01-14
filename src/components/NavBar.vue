<template>
	
    <nav class="navbar navbar-expand-lg navbar-light bg-gradient fixed-top">
		<div class="container">
			<a class="navbar-brand text-white" href="#">PORTFOLIO</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
				<router-link class="text-decoration-none" to="/"><a class="Home">HOME</a></router-link> |
                <router-link class="text-decoration-none" to="/about"><a class="About">ABOUT</a></router-link> |
                <router-link class="text-decoration-none" to="/resume"><a class="Resume">RESUME</a></router-link> |
                <router-link class="text-decoration-none" to="/projects"><a class="Projects">PROJECTS</a></router-link> |
                <router-link class="text-decoration-none" to="/testimonials"><a class="Testimonials">TESTIMONIALS</a></router-link> |
                <router-link class="text-decoration-none" to="/contact"><a class="Contact">CONTACT</a></router-link>
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
}
  

.About::before {
    content: "";
    color: white;
    
}

.About::after, .About:hover{
    content: "" ;
    -webkit-box-reflect: below 1px linear-gradient(transparent, black);
    /* animation: animate 1s linear infinite; */
    color:rgb(255, 255, 255);
        text-shadow: 0 0 10px rgba(0, 255, 229, 0.4),
                     0 0 20px rgba(0, 255, 229, 0.4),
                     0 0 40px rgba(0, 255, 229, 0.4),
                     0 0 80px rgba(0, 255, 229, 0.4),
                     0 0 160px rgba(0, 255, 229, 0.4);
}

.Resume::before {
    content: "";
    color: white;
    
}

.Resume::after, .Resume:hover{
    content: "" ;
    -webkit-box-reflect: below 1px linear-gradient(transparent, black);
    /* animation: animate 1s linear infinite; */
    color:rgb(255, 255, 255);
        text-shadow: 0 0 10px rgba(34, 255, 0, 0.4),
                     0 0 20px rgba(34, 255, 0, 0.4),
                     0 0 40px rgba(34, 255, 0, 0.4),
                     0 0 80px rgba(34, 255, 0, 0.4),
                     0 0 160px rgba(34, 255, 0, 0.4);
}

.Projects::before {
    content: "";
    color: white;
    
}

.Projects::after, .Projects:hover{
    content: "" ;
    -webkit-box-reflect: below 1px linear-gradient(transparent, black);
    /* animation: animate 1s linear infinite; */
    color:rgb(255, 255, 255);
        text-shadow: 0 0 10px rgba(255, 89, 0, 0.4),
                     0 0 20px rgba(255, 89, 0, 0.4),
                     0 0 40px rgba(255, 89, 0, 0.4),
                     0 0 80px rgba(255, 89, 0, 0.4),
                     0 0 160px rgba(255, 89, 0, 0.4);
}

.Testimonials::before {
    content: "";
    color: white;
    
}

.Testimonials::after, .Testimonials:hover{
    content: "" ;
    -webkit-box-reflect: below 1px linear-gradient(transparent, black);
    /* animation: animate 1s linear infinite; */
    color:rgb(255, 255, 255);
        text-shadow: 0 0 10px rgba(98, 0, 255, 0.4),
                     0 0 20px rgba(98, 0, 255, 0.4),
                     0 0 40px rgba(98, 0, 255, 0.4),
                     0 0 80px rgba(98, 0, 255, 0.4),
                     0 0 160px rgba(98, 0, 255, 0.4);
}

.Home::before, .Contact::before {
    content: "";
    color: white;
    
}

.Home::after, .Home:hover, .Contact::after, .Contact:hover{
    content: "" ;
    -webkit-box-reflect: below 1px linear-gradient(transparent, black);
    /* animation: animate 1s linear infinite; */
    color:rgb(255, 255, 255);
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.4),
                     0 0 20px rgba(255, 0, 0, 0.4),
                     0 0 40px rgba(255, 0, 0, 0.4),
                     0 0 80px rgba(255, 0, 0, 0.4),
                     0 0 160px rgba(255, 0, 0, 0.4);
}

</style>

