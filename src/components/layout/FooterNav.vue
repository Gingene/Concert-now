<template>
  <nav class="container">
    <ul class="uppercase">
      <li class="flex flex-col border-b-2 border-black-80 py-6" v-for="item in footNavList" :key="item.enTitle">
        <RouterLink :to="item.href" class="flex justify-between items-end w-full">
          <div class="flex flex-col lg:flex-row">
            <div class="text-sm lg:text-4xl lg:order-2">{{ item.title }}</div>
            <div class="text-5xl font-lato lg:font-lato-display3 lg:order-1 lg:me-5">{{ item.enTitle }}</div>
          </div>
          <ArrowDownRight class="size-10 lg:size-24" />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { ArrowDownRight } from 'lucide-vue-next';
</script>

<script>
export default {
  data() {
    return {
      footNavList: [
        {
          title: '演唱會',
          enTitle: 'CONCERTS',
          href: '/concerts',
        },
        {
          title: '表演者',
          enTitle: 'ARTISTS',
          href: '/artists',
        },
        {
          title: '場地',
          enTitle: 'VENUE',
          href: '/venues',
        },
        {
          title: '歌單',
          enTitle: 'SONGS',
          href: '/songs',
        },
        {
          title: '聯絡我們',
          enTitle: 'ABOUT US',
          href: '/about',
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
