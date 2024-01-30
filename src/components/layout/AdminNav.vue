<template>
  <div class="space-x-4 text-end">
    <Button class="mb-8 ml-auto text-purple-500">
      <span class="material-symbols-outlined"> logout </span>登出
    </Button>
    <Button
      class="mb-8 ml-auto bg-slate-50 text-purple-500 hover:bg-slate-900"
      src="https://bit.ly/48MdjLA">
      <span class="material-symbols-outlined"> format_paint </span>參考版型
    </Button>
    <Button class="mb-8 ml-auto text-purple-500">
      <span class="material-symbols-outlined"> logout </span>
      <RouterLink to="/"> 回前台(暫時) </RouterLink>
    </Button>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { RouterLink } from 'vue-router';
</script>

<style lang="scss"></style>
