<template>
  <span class="loader"></span>
</template>

<style scoped>
.loader {
  width: 32px;
  height: 32px;
  border: 4px solid #fff;
  border-bottom-color: rgb(29, 155, 240);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
