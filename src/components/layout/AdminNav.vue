<template>
  <div class="fixed top-0 right-0 z-10 bg-primary-foreground w-[78%] h-[15%] pt-2 pr-6 xl:pr-12 xs:flex items-center justify-end space-x-4 text-end">
    <div class="inline-block mt-[2px] mb-3 xs:mt-0 xs:mb-0">
      <span class="material-symbols-outlined mr-px"> account_circle </span>
      <span class="inline-block align-super">管理者</span>
    </div>
    <div class="space-x-4">
      <Button class="ml-auto bg-slate-50 text-black hover:text-slate-50" @click="logout"> <span class="material-symbols-outlined"> logout </span>登出 </Button>
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
    ...mapActions(useUserStore, ['logout']),
  },
};
</script>

<style lang="scss"></style>
