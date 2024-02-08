<template>
  <header class="container flex justify-between p-3">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="font-lato text-xl">
      <RouterLink to="/" class="font-black leading-display"> CONCERTS NOW. </RouterLink>
    </div>

    <nav>
      <RouterLink to="/" class="px-4">Home</RouterLink>
      <RouterLink to="/concerts" class="px-4">演唱會</RouterLink>
      <RouterLink to="/login" class="px-4">登入</RouterLink>
      <RouterLink to="/base" class="px-4">設計稿基礎設定頁</RouterLink>
      <RouterLink to="/admin/" class="px-4">後台</RouterLink>
    </nav>
  </header>
</template>
<script>
export default {};
</script>
<style lang=""></style>
