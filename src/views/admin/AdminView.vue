<template>
  <div class="grid grid-cols-5 gap-0 min-h-screen">
    <AdminSideBar />
    <div class="col-span-5 lg:col-span-4 p-12 bg-primary-foreground">
      <AdminNav />
      <RouterView />
    </div>
  </div>
</template>

<script>
import AdminSideBar from '@/components/layout/AdminSideBar.vue';
import AdminNav from '@/components/layout/AdminNav.vue';
import useTheme from '@/hooks/useTheme';

const { toggleDarkTheme, toggleTheme } = useTheme();

export default {
  components: { AdminSideBar, AdminNav },
  mounted() {
    toggleDarkTheme(false);
    toggleTheme('theme-admin');
  },
};
</script>
