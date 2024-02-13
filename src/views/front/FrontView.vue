<template>
  <HeaderNav v-if="!$route.meta.hideHF" />

  <RouterView />

  <FooterNav v-if="!$route.meta.hideHF" />
  <FooterCopyRight v-if="!$route.meta.hideHF" />
</template>
<script>
import HeaderNav from '@/components/layout/HeaderNav.vue';
import FooterNav from '@/components/layout/FooterNav.vue';
import FooterCopyRight from '@/components/layout/FooterCopyRight.vue';
import useTheme from '@/hooks/useTheme';
const { toggleDarkTheme, toggleTheme } = useTheme();
export default {
  components: { HeaderNav, FooterNav, FooterCopyRight },
  mounted() {
    toggleDarkTheme(true);
    toggleTheme('theme-default');
  },
};
</script>
<style lang=""></style>
