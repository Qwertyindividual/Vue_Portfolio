<template>
    <div>
      <button class="neon">Neon</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               
            }
        }
    }
</script>

<style scoped>

.neon::before {
    content:"";
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(210,39,48);
    transform: perspective(0.2em)
               rotate(10deg)
               scale(1.3, 0.40);
    filter: blur(0.5em);
}

.neon::after {
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(210,39,48);
    box-shadow: 0 0 .2em rgb(210,39,48);
    z-index: -1;
    opacity: 0;
    transition: opacity 100ms linear;
}

.neon:hover::after {
    opacity: 1;
}

.neon:hover:focus {
    color: white;
}
</style>