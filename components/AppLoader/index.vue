<template>
    <div class="the-loader">
      <div class="the-loader__circle"></div>
      <div class="the-loader__section the-loader__section_left"></div>
      <div class="the-loader__section the-loader__section_right"></div>
    </div>
</template>

<script>
export default {
    name: "AppLoader",

    mounted() {
        setTimeout(() => {
            document.body.classList.add('page-loaded')
        }, 1000);
    }
}
</script>

<style scoped>
/* The Loader */
.the-loader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.the-loader__circle {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #16a085;
  animation: spin 1.7s linear infinite;
  z-index: 11;
}

.the-loader__circle:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #e74c3c;
  animation: spin-reverse 0.6s linear infinite;
}

.the-loader__circle:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #f9c922;
  animation: spin 1s linear infinite;
}

.the-loader__section {
  position: fixed;
  top: 0;
  width: 51%;
  height: 100%;
  background: #222;
  z-index: 10;
}

.the-loader__section_left {
  left: 0;
}

.the-loader__section_right {
  right: 0;
}

.page-loaded .the-loader {
  visibility: hidden;
  transform: translateY(-100%);
  transition: all 0.3s 1s ease-out;
}

.page-loaded .the-loader__logo,
.page-loaded .the-loader__circle {
  opacity: 0;
  transition: all 0.3s ease-out;
}

.page-loaded .the-loader__section_left {
  transform: translateX(-100%);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.page-loaded .the-loader__section_right {
  transform: translateX(100%);
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
/* The Loader end */
</style>