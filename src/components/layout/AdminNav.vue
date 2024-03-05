<template>
  <div class="space-x-4 text-end">
    <div class="inline-block">
      <span class="material-symbols-outlined mr-px"> account_circle </span>
      <span class="inline-block align-super">管理者</span>
    </div>
    <Button class="mb-8 ml-auto bg-slate-50 text-black hover:text-slate-50"> <span class="material-symbols-outlined"> logout </span>登出 </Button>
    <Button class="mb-8 ml-auto bg-slate-50 text-black hover:text-slate-50">
      <span class="material-symbols-outlined"> logout </span>
      <RouterLink to="/"> 回前台 </RouterLink>
    </Button>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
</script>

<style lang="scss"></style>
