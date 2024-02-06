<template>
  <HeaderNav v-if="!$route.meta.hideHF" />

  <RouterView />
</template>

<script>
import HeaderNav from './components/layout/HeaderNav.vue';

export default {
  components: { HeaderNav },
  data() {
    return {
      theme: 'theme-default',
    };
  },
  methods: {
    toggleDarkMode() {
      // const body = document.body;
      // const isDark = body?.classList.contains("dark");
      // isDark ? body?.classList.remove("dark") : body?.classList.add("dark");
      const root = document.querySelector(':root');
      root?.classList.toggle('dark');
    },
    frontTheme() {
      const root = document.querySelector(':root');
      root.classList.add('dark');
    },
    changeTheme() {
      // console.log(`目前主題是${this.theme}`);
      const root = document.querySelector(':root');
      if (!root) return;
      const isDark = root?.classList.contains('dark');

      root.className = '';
      if (isDark) root?.classList.add('dark');
      if (this.theme === 'theme-default') {
        return;
      }
      root?.classList.add(this.theme);
    },
  },
  watch: {
    theme(newVal) {
      console.log(newVal);
      this.changeTheme(newVal);
      this.toggleDarkMode();
    },
  },
  mounted() {
    // document.documentElement.classList.remove("dark");
    // localStorage.theme = "light" && this.toggleDarkMode();
    this.frontTheme();
  },
  updated() {
    if (!this.$route.meta.theme) {
      this.theme = 'theme-default';
    } else if (this.$route.meta.theme === 'admin') {
      this.theme = 'theme-admin';
    }
  },
};
</script>

<style scoped></style>
