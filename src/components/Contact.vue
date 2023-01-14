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
 <form action="https://formspree.io/f/mrgvbgjz" method="POST">
  <!-- 2 column grid layout with text inputs for the first and last names -->

  <div class="row mb-4 container">
    <div class="col-6">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control bg-transparent" placeholder="FirstName" />
        <label class="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div class="col-6">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control bg-transparent" placeholder="LastName" />
        <label class="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
    <div class="col-6">
     <label for="number" class="form-label">Cellphone number:</label>
               <input type="text" name="name" class="form-control bg-transparent" id="cards_" placeholder="Cellphone number" aria-label="Cellphone number">
    </div>
    <div class="col-6">
      <div class="form-outline">
       <label for="email" class="form-label">Email address:</label>
               <input type="email" name="email" class="form-control bg-transparent" id="cards_" placeholder="name@example.com">
      </div>
    <div class="col-12">
    <button type="submit" class="btn btn-danger submit bg-transparent">Submit</button>
   
      </div>
        
     
    </div>
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
  height: 636px;
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

.container {
padding-top: 200px;

}
form {
margin-left: 100px;
}
.submit {
margin-left: 77%;
margin-top: 50px;
padding: 10px 40px;
}

</style>