<template>
  <div class="space-x-4 text-end">
    <div class="inline-block">
      <span class="material-symbols-outlined mr-px"> account_circle </span>
      <span class="inline-block align-super">管理者</span>
    </div>
    <Button class="mb-8 ml-auto bg-slate-50 text-black hover:text-slate-50" @click="adminLogout"> <span class="material-symbols-outlined"> logout </span>登出 </Button>
    <RouterLink to="/">
      <Button class="mb-8 ml-auto bg-slate-50 text-black hover:text-slate-50">
        <span class="material-symbols-outlined"> logout </span>
        回前台
      </Button>
    </RouterLink>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
</script>

<script>
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';

export default {
  methods: {
    ...mapActions(useUserStore, ['adminLogout']),
  },
};
</script>

<style lang="scss"></style>
