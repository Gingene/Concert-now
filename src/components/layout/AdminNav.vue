<template>
  <div class="xs:flex items-center justify-end space-x-4 text-end mb-8">
    <div class="inline-block mt-[2px] mb-3 xs:mt-0 xs:mb-0">
      <span class="material-symbols-outlined mr-px"> account_circle </span>
      <span class="inline-block align-super">管理者</span>
    </div>
    <div class="space-x-4">
      <Button class="ml-auto bg-slate-50 text-black hover:text-slate-50" @click="adminLogout"> <span class="material-symbols-outlined"> logout </span>登出 </Button>
      <RouterLink to="/">
        <Button class="ml-auto bg-slate-50 text-black hover:text-slate-50">
          <span class="material-symbols-outlined"> logout </span>
          回前台
        </Button>
      </RouterLink>
    </div>
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
