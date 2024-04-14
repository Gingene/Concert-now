<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="container flex justify-between items-center lg:grid lg:grid-cols-12 gap-6 py-3 lg:py-0">
      <div class="font-lato text-xl lg:col-span-3 xl:col-span-3 2xl:col-span-2">
        <RouterLink to="/" class="font-black leading-display"> CONCERT NOW. </RouterLink>
      </div>
      <div class="hidden backdrop-blur-sm rounded-xl lg:block lg:col-span-2 xl:col-span-3 2xl:col-span-5 relative">
        <NavSearchModal :isToggleSearchModal="isToggleSearchModal" :toggleModal="toggleModal" :isSearch="isSearch" />
      </div>

      <!-- 電腦版導覽列 -->
      <nav class="hidden lg:block lg:col-span-5 xl:col-span-4">
        <ul class="flex justify-between items-center">
          <li v-for="(item, index) in navList" class="transition-blur" :key="item.title" ref="linkItems" @mouseover="addBlurEffect(index, $event)" @mouseleave="removeBlurEffect">
            <RouterLink :to="item.href" class="py-5 lg:px-2 2xl:px-5 inline-block whitespace-nowrap"> {{ hoveredIndex === index ? item.title : item.enTitle }}</RouterLink>
          </li>
        </ul>
      </nav>
      <div class="hidden lg:flex lg:col-span-2 2xl:col-span-1 justify-end">
        <RouterLink to="/login" v-if="!user?.name">
          <Button variant="white-outline" class="border-black-80 hover:border-transparent py-[10px] px-6">Log in</Button>
        </RouterLink>
        <NavigationMenu v-else>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger class="pr-[6px]">{{ user?.is_admin ? '管理員' : '使用者' }}</NavigationMenuTrigger>
              <NavigationMenuContent class="right-12">
                <ul class="w-[150px] border-0 space-y-2">
                  <li>
                    <NavigationMenuLink as-child>
                      <RouterLink to="/member" class="block px-4 py-4 text-center">個人頁面</RouterLink>
                    </NavigationMenuLink>
                  </li>
                  <li v-if="user?.is_admin">
                    <NavigationMenuLink>
                      <RouterLink to="/admin/concerts" class="block px-4 py-4 text-center">管理後台</RouterLink>
                    </NavigationMenuLink>
                  </li>
                  <li class="py-2">
                    <AlertDialog>
                      <AlertDialogTrigger as-child>
                        <Button variant="ghost" class="w-full"> 登出 </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>您確定要登出嗎?</AlertDialogTitle>
                          <AlertDialogDescription> </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>取消</AlertDialogCancel>
                          <AlertDialogAction @click="logout">確定</AlertDialogAction>
                          <!-- <AlertDialogCancel class="border-lime-700 border bg-transparent text-foreground hover:bg-lime-500"> 取消 </AlertDialogCancel>
                          <AlertDialogAction class="border-destructive border bg-transparent text-foreground hover:bg-destructive" @click="logout">確定</AlertDialogAction> -->
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <!-- 手機版導覽列 -->
      <div class="lg:hidden">
        <Button class="p-2 bg-transparent" @click="handleMobileSearch">
          <Search />
        </Button>
        <Sheet>
          <SheetTrigger class="p-2 inline-flex"><AlignJustify /></SheetTrigger>
          <SheetContent side="top" :hiddenClose="true" class="h-full overflow-y-auto">
            <VisuallyHidden>
              <SheetHeader class="hidden">
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
            </VisuallyHidden>
            <div class="flex justify-between items-center font-lato text-xl">
              <RouterLink to="/" class="font-black leading-display"> CONCERTS NOW. </RouterLink>

              <div class="flex">
                <NavigationMenu v-if="user?.name" class="w-full">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Button class="p-0">
                          <UsersRound />
                        </Button>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul class="w-[150px] border-0 space-y-2 text-lg">
                          <li>
                            <NavigationMenuLink as-child>
                              <SheetClose as-child>
                                <RouterLink to="/member" class="block px-4 py-4 text-center">個人頁面</RouterLink>
                              </SheetClose>
                            </NavigationMenuLink>
                          </li>
                          <li v-if="user?.is_admin">
                            <NavigationMenuLink>
                              <RouterLink to="/admin/concerts" class="block px-4 py-4 text-center">管理後台</RouterLink>
                            </NavigationMenuLink>
                          </li>
                          <li class="py-2">
                            <AlertDialog>
                              <AlertDialogTrigger as-child>
                                <Button variant="ghost" class="w-full"> 登出 </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>您確定要登出嗎?</AlertDialogTitle>
                                  <AlertDialogDescription> </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel> 取消 </AlertDialogCancel>
                                  <AlertDialogAction @click="logout">確定</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <RouterLink to="/login">
                  <SheetClose as-child v-if="!user?.name">
                    <Button variant="ghost">
                      <UsersRound />
                    </Button>
                  </SheetClose>
                </RouterLink>
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
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>

<script setup>
import { VisuallyHidden } from 'radix-vue';
import { ArrowDownRight, AlignJustify, Search, UsersRound } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetHeader, SheetTitle, SheetDescription, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
</script>

<script>
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useDebounceFn } from '@vueuse/core';
import { NavSearchModal } from './HeaderNav/';

export default {
  components: { NavSearchModal },
  inject: ['http', 'path'],
  data() {
    return {
      navList: [
        {
          title: '演唱會',
          enTitle: 'Concerts',
          href: '/concerts',
        },
        {
          title: '表演者',
          enTitle: 'Artists',
          href: '/artists',
        },
        {
          title: '場地',
          enTitle: 'Venues',
          href: '/venues',
        },
        {
          title: '關於我們',
          enTitle: 'About us',
          href: '/about',
        },
      ],
      hoveredIndex: -1,
      personalPage: [
        {
          title: '個人頁面',
          href: '/members',
          auth: true,
        },
        {
          title: '管理後台',
          href: '/admin',
          auth: false,
        },
      ],
      isToggleSearchModal: false,
      isSearch: false,
    };
  },
  methods: {
    addBlurEffect(index, e) {
      this.hoveredIndex = index;
      this.$refs.linkItems.forEach((item) => {
        item.classList.add('blur');
      });
      e.currentTarget.classList.remove('blur');
      // console.log('hover');
    },
    removeBlurEffect: useDebounceFn(function () {
      this.hoveredIndex = -1;
      this.$refs.linkItems.forEach((item) => {
        item.classList.remove('blur');
      });
      // console.log('remove');
    }, 600),
    toggleModal(val) {
      this.isToggleSearchModal = val;
    },
    handleMobileSearch() {
      this.toggleModal(true);
      if (!this.isSearch) {
        this.isSearch = true;
      }
    },
    ...mapActions(useUserStore, ['logout']),
  },
  computed: {
    ...mapState(useUserStore, ['user']),
  },
};
</script>

<style lang="scss" scoped>
.transition-blur {
  transition: all 0.3s ease;
}
</style>
