<template>
  <header class="container flex justify-between items-center p-3">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="font-lato text-xl">
      <RouterLink to="/" class="font-black leading-display"> CONCERTS NOW. </RouterLink>
    </div>

    <!-- 電腦版導覽列 -->
    <nav class="hidden lg:flex items-center space-x-5">
      <template v-for="item in navList" :key="item.title">
        <RouterLink :to="item.href">{{ item.enTitle }}</RouterLink>
      </template>
      <RouterLink to="/login" class="px-4">
        <Button variant="btn1" class="border-black-80 py-[10px] px-6">Log in</Button>
      </RouterLink>
      <RouterLink to="/admin/" class="px-4">後台</RouterLink>
    </nav>

    <!-- 手機版導覽列 -->
    <div class="lg:hidden">
      <Button class="p-2">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-xl" />
      </Button>
      <Sheet>
        <SheetTrigger class="p-2 inline-flex"><font-awesome-icon icon="fa-solid fa-align-justify" class="text-xl" /></SheetTrigger>
        <SheetContent side="top" :hiddenClose="true" class="h-full overflow-y-auto">
          <VisuallyHidden>
            <SheetHeader class="hidden">
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </VisuallyHidden>
          <div class="flex justify-between items-center font-lato text-xl">
            <RouterLink to="/" class="font-black leading-display"> CONCERTS NOW. </RouterLink>

            <div>
              <Button class="p-2 me-2">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-xl" />
              </Button>
              <SheetClose as-child class="p-2">
                <Button class="p-2">
                  <font-awesome-icon icon="fa-solid fa-x" class="text-xl" />
                </Button>
              </SheetClose>
            </div>
          </div>

          <nav class="flex flex-col">
            <ul class="uppercase">
              <li class="flex flex-col border-b-2 border-black-80 py-6" v-for="item in navList" :key="item.enTitle">
                <SheetClose as-child>
                  <RouterLink :to="item.href" class="flex justify-between items-end w-full">
                    <div class="flex flex-col lg:flex-row">
                      <div class="text-sm lg:text-4xl lg:order-2">{{ item.title }}</div>
                      <div class="text-5xl font-lato lg:font-lato-display3 lg:order-1 lg:me-5">{{ item.enTitle }}</div>
                    </div>
                    <ArrowDownRight class="size-10 lg:size-24" />
                  </RouterLink>
                </SheetClose>
              </li>
            </ul>

            <SheetClose as-child>
              <Button variant="btn1" class="border-black-80 py-[10px] px-6 my-6">
                <RouterLink to="/login" class="px-4"> Log in </RouterLink>
              </Button>
            </SheetClose>

            <RouterLink to="/admin/" class="px-4">後台</RouterLink>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>
<script setup>
import { VisuallyHidden } from 'radix-vue';
import { ArrowDownRight } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetHeader, SheetTitle, SheetDescription, SheetContent, SheetTrigger } from '@/components/ui/sheet';
</script>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: '演唱會',
          enTitle: 'Concert',
          href: '/concerts',
        },
        {
          title: '表演者',
          enTitle: 'Artists',
          href: '/artists',
        },
        {
          title: '場地',
          enTitle: 'Venue',
          href: '/venues',
        },
        {
          title: '歌單',
          enTitle: 'Songs',
          href: '/songs',
        },
        {
          title: '聯絡我們',
          enTitle: 'About us',
          href: '/about',
        },
      ],
    };
  },
};
</script>
<style></style>
