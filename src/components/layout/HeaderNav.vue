<template>
  <header class="container mx-auto flex justify-between p-4">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="logo">
      <RouterLink to="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
      </RouterLink>
    </div>

    <nav>
      <RouterLink to="/" class="px-4">Home</RouterLink>
      <RouterLink to="/concerts" class="px-4">演唱會</RouterLink>
      <RouterLink to="/login" class="px-4">登入</RouterLink>
      <RouterLink to="/admin/" class="px-4">後台</RouterLink>
    </nav>
  </header>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
  components: { RouterLink },
};
</script>
<style lang=""></style>
