<template>
  <HeaderNav />
  <section class="container min-h-screen flex justify-center items-center">
    <div>
      <div>這裡看不到演唱會資料喔~</div>

      <div>
        <Button variant="btn1" size="btn1">
          <RouterLink to="/"> 點我回首頁 </RouterLink>
        </Button>
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
  },
};
</script>
