<template>
  <HeaderNav />
  <section class="container min-h-screen flex justify-center items-center">
    <div class="">
      <div>這裡看不到演唱會資料喔~</div>

      <div>
        <Button variant="default">
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

export default {
  components: { HeaderNav },
  props: ['route'],
  created() {
    console.log(this.route);
  },
};
</script>
