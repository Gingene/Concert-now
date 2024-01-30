<template>
  <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
    <div class="w-1/2 py-8 flex">
      <img src="https://via.placeholder.com/200x50" alt="" />
    </div>
    <RouterLink to="/admin/concerts">
      <Button variant="side-bar" size="side-bar">
        <span class="material-symbols-outlined pe-6"> location_on </span>
        演唱會資訊管理
      </Button>
    </RouterLink>

    <template v-for="item in sidebarNavItems" :key="item.title">
      <RouterLink :to="item.href">
        <Button variant="side-bar" size="side-bar">
          <span class="material-symbols-outlined pe-6"> location_on </span>
          {{ item.title }}
        </Button>
      </RouterLink>
    </template>
  </nav>
</template>
<script setup>
import { Button } from '@/components/ui/button';
import { RouterLink } from 'vue-router';
</script>

<script>
export default {
  data() {
    return {
      sidebarNavItems: [
        {
          title: '分析報表',
          href: '/admin/analysis',
        },
        {
          title: '會員管理',
          href: '/admin/members',
        },
        {
          title: '評論管理',
          href: '/admin/comments',
        },
        {
          title: '歌單管理',
          href: '/admin/playlists',
        },
        {
          title: '設定',
          href: '/admin/settings',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.router-link-active button {
  @apply text-lg  text-gray-800 w-full text-left justify-start rounded-none bg-white border-e-4 border-indigo-500/100 hover:text-gray-800 hover:bg-white hover:border-e-4 hover:border-indigo-500/100;
}
</style>
