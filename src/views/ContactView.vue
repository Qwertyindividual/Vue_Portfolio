<template>
    <div>
    <section class="contact section-padding bg-black" id="contact">
    <Animated-background5 />
		<div class="container mt-5 mb-5">
			<div class="row">
				<div class="col-md-12">
					<div class="section-header text-center pb-5">
						<h2>Contact Me</h2>
						<div class="social d-flex justify-content-center">
							<a href="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin"></i></a>
							<a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
							<a href="https://github.com/Qwertyindividual"><i class="fa-brands fa-github"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="row m-0">
				<div class="col-md-12 p-0 pt-4 pb-4">
					
					<form action="https://formspree.io/f/xdojpryw" method="POST" id="form">

						<label for="fname" id="labels">Your Name</label>
						<input type="text" id="fname" id="form" name="firstname" placeholder="Your name..">
					
						<label for="cname" id="labels">Company Name</label>
						<input type="text" id="cname" name="companyname" placeholder="Your company name..">
					
						<label for="email" id="labels">Your Email</label>
						<input type="text" id="email" name="email" placeholder="Your email..">
					
						<label for="message" id="labels">Message</label>
						<textarea id="message" name="message" placeholder="Write something.." style="height:200px"></textarea>
					
						<input type="submit" id="button" value="Submit">
					
					  </form>
				</div>
			</div>
		</div>
	</section>
    </div>
</template>

<script>
import AnimatedBackground5 from '@/components/AnimatedBackground5.vue'

    export default {
        components: {
            AnimatedBackground5
        }
    }
</script>

<style scoped>
input[type=text], select, textarea {
	width: 320px; 
	padding: 12px;  
	padding-left: 10px;
	position: relative;
	margin-left: 40px;
	border: 1px solid #ccc; 
	border-radius: 4px;
	box-sizing: border-box; 
	margin-top: 6px; 
	margin-bottom: 16px; 
	resize: vertical;
  }
  
  input[type=submit] {
	background:linear-gradient(to bottom right, rgb(238, 130, 177), rgb(42, 139, 121));
	color: white;
	padding: 13px 40px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
  }
  
  input[type=submit]:hover {
	background-color: #d19cbd;
  }
 #button {
	margin-left: 130px;
  }
  
  #form {
	border-radius: 5px;
	background-color: #e5d5ca;
	padding: 30px;
	width: 400px;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, .67);
  }
  
  #form {
	padding-left: 0px;
	margin: auto;
  }
  
  #labels {
	padding-left: 40px;
  }
  /*In inspect, if you turn off margin:0px then the messege portion would be aligned well underneath the others*/
  .social{
    display: flex;
	
}
.social a{
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:linear-gradient(to bottom right, rgb(0, 191, 255), rgb(255, 0, 238));
    border-radius: 50%;
    margin: 22px 10px;
    color: white;
    text-decoration: none;
    font-size: 20px;
    border: double;
    box-shadow: 0 0 0 5px black, 0 0 0 7px rgb(0, 255, 234);
}
.social a:hover{
    transform: scale(1.3);
    transition: .3s;
}
</style>