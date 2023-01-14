<template>
  <div class="animation-area">
    <div class="overall">

  <ul class="box-area">
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
 </div>
 <form>
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" />
        <label class="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" />
        <label class="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form3Example3" class="form-control" />
    <label class="form-label" for="form3Example3">Email address</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="password" id="form3Example4" class="form-control" />
    <label class="form-label" for="form3Example4">Password</label>
  </div>

  <!-- Checkbox -->
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label class="form-check-label" for="form2Example33">
      Subscribe to our newsletter
    </label>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>or sign up with:</p>
    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
      </div>


</template>

<script>
export default {

}
</script>

<style scoped>
.animation-area {
  background: linear-gradient(to bottom right, black, rgba(255, 0, 0, 0.4));
  background: fixed;
  width: 100%;
  height: 712px;
  background: black;
}

.box-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.box-area li {
  position: absolute;
  display: block;
  list-style: none;
  width: 25px;
  height: 25px;
  background: rgba(255, 255, 255, 0.5);
  animation: animate 20s linear infinite;
  bottom: -150px;
}

.box-area li:nth-child(1) {
  left: 86%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.box-area li:nth-child(2) {
  left: 12%;
  width: 30px;
  height: 30px;
  animation-delay: 0s;
  animation-delay: 1.5s;
  animation-duration: 10s;
}

.box-area li:nth-child(3) {
  left: 70%;
  width: 100px;
  height: 100px;
  animation-delay: 5.5s;
}

.box-area li:nth-child(4) {
  left: 42%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 15s;
}

.box-area li:nth-child(5) {
  left: 65%;
  width: 40px;
  height: 40px;
  animation-delay: 0s;
}

.box-area li:nth-child(6) {
  left: 15%;
  width: 110px;
  height: 110px;
  animation-delay: 3.5s;
}

@keyframes animate {
  0% {
    transform: translateY(0)rotate(0deg);
    opacity: 1;
  }

  100% {
    transform: translateY(-800px)rotate(360deg);
    opacity: 0;
  }
}

.cube {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
}

.top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #222;
  transform: translateX(0.5turn) translateZ(150px);
  filter: blur (20px);
  box-shadow: 0 0 120px rgba(0, 255, 0, 0.2);
}

.top:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background-color: rgb(255, 0, 0);
  transform: translateZ(-380px);
  filter: blur(20px);
  box-shadow: 0 0 120px rgba(0, 255, 0, 0.2) 0 0 200px rgba(0, 255, 0, 0.4) 0 0 300px rgba(0, 255, 0, 0.6) 0 0 400px rgba(0, 255, 0, 0.8) 0 0 500px rgba(0, 255, 0, 0.1);
}


/* input[type=text], select, textarea {
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
  box-shadow: inset 0 1rem 2rem rgba(0, 0, 0, .67);
  }
  
  input[type=submit] {
	background: linear-gradient(to bottom right, red, blue); 
	color: white;
	padding: 13px 40px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
  margin-top: 100px;
  }

 #button {
	margin-left: 130px;
  margin-top:30px;
  }
  
  #form {
	border-radius: 5px;
	background-color: transparent;
	padding: 30px;
	width: 400px;
	/*box-shadow: inset 0 1rem 2rem rgba(0, 0, 0, .67);*/
  /* position: absolute; */
  
  
  
  /* #form {
	padding-left: 0px;
	margin: auto;
  }
  
  #labels {
	padding-left: 40px;
  }
  
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
}  */

</style>