<template>
  <div class="absolute pl-12 pt-12 lg:hidden">
    <Sheet>
      <SheetTrigger class="lg:hidden">
        <span class="material-symbols-outlined lg:p-0"> menu </span>
      </SheetTrigger>
      <SheetContent side="left">
        <nav class="flex flex-col space-x-0 space-y-1">
          <div class="w-[205px] font-semibold py-8 flex text-xl">CONCERT NOW.</div>
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
      </SheetContent>
    </Sheet>
  </div>
  <nav class="hidden lg:flex lg:flex-col lg:space-x-0 lg:space-y-1">
    <div class="w-[205px] font-semibold pl-5 py-8 flex text-xl">CONCERT NOW.</div>
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
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
</script>

<script>
export default {
  data() {
    return {
      sidebarNavItems: [
        {
          title: '表演者資訊管理',
          href: '/admin/artists',
        },
        {
          title: '場地資訊管理',
          href: '/admin/venues',
        },
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
