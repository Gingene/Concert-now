<template>
  <div class="cursor-dot" data-cursor-dot></div>
  <div class="cursor-outline" data-cursor-outline></div>
  <HeaderNav />

  <RouterView />

  <FooterNav v-if="$route.meta.showFooterNav" />
  <FooterCopyRight />
</template>

<script>
import HeaderNav from '@/components/layout/HeaderNav.vue';
import FooterNav from '@/components/layout/FooterNav.vue';
import FooterCopyRight from '@/components/layout/FooterCopyRight.vue';
import useTheme from '@/hooks/useTheme';
import { useTitle } from '@vueuse/core';
const { toggleDarkTheme, toggleTheme } = useTheme();

export default {
  components: { HeaderNav, FooterNav, FooterCopyRight },
  watch: {
    '$route.path': {
      handler() {
        const title = useTitle();
        title.value = `Concert now - ${this.$route.meta.title ?? ''}`;
      },
    },
  },
  mounted() {
    toggleDarkTheme(true);
    toggleTheme('theme-default');

    // cursor tracker - 滑鼠圓圈樣式
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        {
          duration: 500,
          fill: 'forwards',
        },
      );
      // 偵測指向對象做樣式變動，目前的寫法有 bug
      // if(e.target.matches('a, button, Button, input, [role="button"], [type="button"], [type="submit"], [class="swiper-button-prev"], [class="swiper-button-next"], [data-icon="fa-bookmark"]')){
      //   cursorOutline.style.width = '50px';
      //   cursorOutline.style.height = '50px';
      // }
      // else{
      //   cursorOutline.style.width = '30px';
      //   cursorOutline.style.height = '30px';
      // };
    });
  },
};
</script>

<style>
.cursor-dot {
  width: 5px;
  height: 5px;
  background-color: #fff;
  mix-blend-mode: difference;
}
.cursor-outline {
  width: 30px;
  height: 30px;
  border: 2px solid #fff;
  mix-blend-mode: difference;
  transition:
    width 0.5s,
    height 0.5s;
}
.cursor-dot,
.cursor-outline {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 999;
  pointer-events: none;
}
</style>
