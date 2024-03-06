<template>
  <HeaderNav />
  <section class="container min-h-screen flex justify-center items-center">
    <div class="space-y-4">
      <div>這裡看不到演唱會資料喔~</div>
      <div>
        <Button variant="white-outline" size="base">
          <RouterLink to="/"> 點我回首頁 </RouterLink>
        </Button>
        <Button variant="white-outline" size="base" @click="$router.go(-2)"> 回前一頁 </Button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Button } from '@/components/ui/button';
</script>
<script>
import HeaderNav from '@/components/layout/HeaderNav.vue';
import useTheme from '@/hooks/useTheme';
const { toggleDarkTheme, toggleTheme } = useTheme();

export default {
  components: { HeaderNav },
  mounted() {
    toggleDarkTheme(true);
    toggleTheme('theme-default');
    console.log(this.$router);
  },
};
</script>
