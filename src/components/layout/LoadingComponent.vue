<template>
  <div class="loading" ref="loadingDom" v-show="isLoading">
    <div class="loading-window flex flex-col justify-center">
      <div class="h-[300px]"></div>
      <p class="text-white drop-shadow-light">{{ message }}</p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'pinia';
import { loadingStore } from '@/stores/isLoading';
// import lottie from 'lottie-web';
// import animation from '@/assets/lottie/Animation1.json?url';

export default {
  methods: {
    loadingMsg(msg) {
      this.$refs.loadingDom.childNodes[0].childNodes[1].textContent = msg;
    },
    // loadingAnimation() {
    //   lottie.loadAnimation({
    //     container: this.$refs.loadingDom.childNodes[0].childNodes[0], // the dom element that will contain the animation
    //     renderer: 'svg',
    //     autoplay: true,
    //     path: animation, // the path to the animation json
    //     // animationData: animation, // the animation json
    //   });
    // },
  },
  computed: {
    ...mapState(loadingStore, ['isLoading', 'message']),
  },
  watch: {
    isLoading(newVal) {
      if (newVal) {
        // lottie.play();
        this.loadingMsg(this.message ?? '別走開，豐富的演唱會即出現在這');
      } else {
        // lottie.stop();
      }
    },
  },
  // mounted() {
  //   this.loadingAnimation();
  //   lottie.stop();
  // },
};
</script>
<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1056;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  opacity: 0.5;
  z-index: -1;
}

.loading-window {
  color: #055160;
  background-color: #cff4fc;
  background-color: transparent;
  border-color: #b6effb;
  width: 80%;
  padding: 1.5rem;
}

.loading-window p {
  text-align: center;
  font-size: 1.5rem;
}
</style>
