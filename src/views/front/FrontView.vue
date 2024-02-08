<template>
  <HeaderNav v-if="!$route.meta.hideHF" />

  <RouterView />
</template>
<script>
import HeaderNav from '@/components/layout/HeaderNav.vue';
import useTheme from '@/hooks/useTheme';
const { toggleDarkTheme, toggleTheme } = useTheme();
export default {
  components: { HeaderNav },
  mounted() {
    toggleDarkTheme(true);
    toggleTheme('theme-default');
  },
};
</script>
<style lang=""></style>
