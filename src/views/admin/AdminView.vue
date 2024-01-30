<template>
  <div class="grid grid-cols-5 gap-0 min-h-screen">
    <AdminSideBar />
    <div class="col-span-4 p-12 bg-slate-50">
      <AdminNav />
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import AdminSideBar from '@/components/layout/AdminSideBar.vue';
import AdminNav from '@/components/layout/AdminNav.vue';

export default {
  components: { RouterView, AdminSideBar, AdminNav },
};
</script>

<style lang="scss"></style>
