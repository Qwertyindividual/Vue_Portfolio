<template>
  <div class ="animation-area">
        <div class="overall">
          
          
		<!-- <div class="container mt-5 mb-5">
			<div class="row">
				<div class="col-md-12 col-4">
					<div class="section-header text-center pb-5">
						<h2>Contact Me</h2>
						<div class="social d-flex justify-content-center">
							<a href="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin"></i></a>
							<a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
							<a href="https://github.com/Qwertyindividual"><i class="fa-brands fa-github"></i></a>
						</div>
					</div>
				</div>
			</div> -->
      <!-- <section class="contact section-padding bg-black" id="contact">
			<div class="row m-0">
				<div class="col-md-12 p-0 pt-4 pb-4"> -->
          <form action="https://formspree.io/f/xdojpryw" method="POST" id="form">
					
          <label for="fname" id="labels">Your Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..">
          
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
		<!-- </div>
	</section> -->

  
          
      <ul class ="box-area">
          <li>
            <div class="cube">
              <div class="top"></div>
              <div>
              <span style="--i:0"></span>
              <span style="--i:1"></span>
              <span style="--i:2"></span>
              <span style="--i:3"></span>
              </div>
            </div>
          </li>
          <li>
            <div class="cube">
              <div class="top"></div>
              <div>
              <span style="--i:0"></span>
              <span style="--i:1"></span>
              <span style="--i:2"></span>
              <span style="--i:3"></span>
              </div>
            </div>
          </li>
          <li>
            <div class="cube">
              <div class="top"></div>
              <div>
              <span style="--i:0"></span>
              <span style="--i:1"></span>
              <span style="--i:2"></span>
              <span style="--i:3"></span>
              </div>
            </div>
          </li>
          <li>
            <div class="cube">
              <div class="top"></div>
              <div>
              <span style="--i:0"></span>
              <span style="--i:1"></span>
              <span style="--i:2"></span>
              <span style="--i:3"></span>
              </div>
            </div>
          </li>
          <li>
            <div class="cube">
              <div class="top"></div>
              <div>
              <span style="--i:0"></span>
              <span style="--i:1"></span>
              <span style="--i:2"></span>
              <span style="--i:3"></span>
              </div>
            </div>
          </li>
          <li>
            <div class="cube">
              <div class="top"></div>
              <div>
              <span style="--i:0"></span>
              <span style="--i:1"></span>
              <span style="--i:2"></span>
              <span style="--i:3"></span>
              </div>
            </div>
          </li>
          </ul>
      <!-- </div>
      </div> -->

</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.animation-area{
    background: linear-gradient(to bottom right, black, rgba(255, 0, 0, 0.4));
    background:fixed;
    width: 100%;
    height: 1000px;
    background: black;
}
.box-area{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    /* overflow: hidden; */
}
.box-area li{
    position: absolute;
    display: block;
    list-style: none;
    width:25px;
    height: 25px;
    background:rgba(255,255,255,0.5);
    animation:animate 20s linear infinite;
    bottom: -150px;
}
.box-area li:nth-child(1){
    left:86%;
    width:80px;
    height: 80px;
    animation-delay: 0s;
}
.box-area li:nth-child(2){
    left:12%;
    width:30px;
    height: 30px;
    animation-delay: 0s;
    animation-delay: 1.5s;
    animation-duration: 10s;
}
.box-area li:nth-child(3){
    left:70%;
    width:100px;
    height: 100px;
    animation-delay: 5.5s;
}
.box-area li:nth-child(4){
    left:42%;
    width:150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 15s;
}
.box-area li:nth-child(5){
    left:65%;
    width:40px;
    height: 40px;
    animation-delay: 0s;
}
.box-area li:nth-child(6){
    left:15%;
    width:110px;
    height: 110px;
    animation-delay: 3.5s;
}
@keyframes animate{
    0%{
        transform: translateY(0)rotate(0deg);
        opacity: 1;
    }
    100%{
        transform: translateY(-800px)rotate(360deg);
        opacity: 0;
    }
}
.cube {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animation 4s linear infinite;
}
@keyframes animation {
    0% {
        transform: rotateX(-30deg) rotate(0deg);
    }
    100% {
        transform: rotateX(-30deg) rotateY(360deg);
    }
}
.cube div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}
.cube div span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#151515, #ec0000);
    transform:rotateY(calc(90deg * var(--i))) translateZ(150px);
}
.top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    background: #222;
    transform: translateX(0.5turn) translateZ(150px);
    filter:blur (20px);
    box-shadow:0 0 120px rgba(0, 255, 0, 0.2);
}
.top:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width:80px;
    height:80px;
    background-color: rgb(255, 0, 0);
    transform: translateZ(-380px);
    filter: blur(20px);
    box-shadow: 0 0 120px rgba(0, 255, 0, 0.2)
    0 0 200px rgba(0, 255, 0, 0.4)
    0 0 300px rgba(0, 255, 0, 0.6)
    0 0 400px rgba(0, 255, 0, 0.8)
    0 0 500px rgba(0, 255, 0, 0.1);
}


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

form {
  z-index: 1;
}
</style>