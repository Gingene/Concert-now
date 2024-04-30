<template>
  <div class="absolute pl-6 pt-6 xl:hidden">
    
    <!-- 手機版 -->
    <Sheet :open="isSheetOpen" @update:open="isSheetOpen = $event">
      <SheetTrigger>
        <span class="material-symbols-outlined xl:p-0"> menu </span>
      </SheetTrigger class="xl:hidden">
      <SheetContent class="overflow-y-scroll" side="left">
        <nav class="flex flex-col space-x-0 space-y-1">
          <div class="w-[205px] font-semibold mx-auto py-8 flex text-xl">CONCERT NOW.</div>
          <template v-for="item in sidebarNavItems" :key="item.title">
            <RouterLink :to="item.href" @click="closeSheet">
              <Button variant="side-bar" size="side-bar">
                <span class="material-symbols-outlined pe-5"> location_on </span>
                {{ item.title }}
              </Button>
            </RouterLink>
          </template>
        </nav>

        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </div>

  <!-- 電腦版 -->
  <nav class="fixed top-0 bottom-0 hidden xl:flex xl:flex-col xl:space-x-0 xl:space-y-1">
    <div class="w-[205px] font-semibold ml-auto py-8 flex text-xl">CONCERT NOW.</div>
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
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

</script>

<script>
export default {
  data() {
    return {
      isSheetOpen: false,
      sidebarNavItems: [
        {
          title: '演唱會資訊管理',
          href: '/admin/concerts',
        },
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
  methods: {
    openSheet() {
      console.log(this.isSheetOpen)
    },
    closeSheet() {
      this.isSheetOpen = false
    }
  },  
};
</script>
<style lang="scss" scoped>
.router-link-active button {
  @apply text-lg  text-gray-800 w-full text-left justify-start rounded-none bg-white border-e-4 border-indigo-500/100 hover:text-gray-800 hover:bg-white hover:border-e-4 hover:border-indigo-500/100;
}
</style>
