<template>
  <div class="grid grid-cols-5 gap-0 min-h-screen">
    <!-- 脫離頁面流 -->
    <AdminSideBar />

    <!-- 取代AdminSideBar 佔據其空間 -->
    <div></div>
    <div class="col-span-5 xl:col-span-4 px-6 pb-10 xl:px-12 bg-primary-foreground">
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
