<template>
  <HeaderNav v-if="!$route.meta.hideHF" />

  <RouterView />
</template>

<script>
import HeaderNav from "./components/layout/HeaderNav.vue";
export default {
  components: { HeaderNav }
};
</script>

<style scoped></style>
