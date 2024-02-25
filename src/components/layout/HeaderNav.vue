<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="container flex justify-between items-center lg:grid lg:grid-cols-12 gap-6 py-3 lg:py-0">
      <div class="font-lato text-xl lg:col-span-3 xl:col-span-3 2xl:col-span-2">
        <RouterLink to="/" class="font-black leading-display"> CONCERTS NOW. </RouterLink>
      </div>
      <div class="hidden lg:block lg:col-span-2 xl:col-span-3 2xl:col-span-5 relative">
        <span class="absolute text-black-60 top-2 left-3">Search now</span>
        <Search class="absolute text-black-60 top-2 right-3" />
        <Dialog>
          <DialogTrigger class="w-full bg-black-0 text-black-60 opacity-10 px-6 py-5 rounded-2xl hover:opacity-25"> </DialogTrigger>
          <DialogContent class="max-w-[80vw] p-8 top-[20%]">
            <DialogHeader>
              <DialogTitle>
                <Input placeholder="Search now" class="bg-black-0 text-black-60 opacity-10 px-6 py-5 focus:opacity-80" />
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>

            <div v-if="mockData.length"></div>
            <div>搜尋你的演唱會</div>
          </DialogContent>
          <DialogFooter class="hidden"> </DialogFooter>
        </Dialog>
      </div>

      <!-- 電腦版導覽列 -->
      <nav class="hidden lg:block lg:col-span-5 xl:col-span-4">
        <ul class="flex justify-between items-center">
          <li v-for="(item, index) in navList" class="transition-blur" :key="item.title" ref="linkItems" @mouseover="addBlurEffect(index, $event)" @mouseleave="removeBlurEffect">
            <RouterLink :to="item.href" class="py-5 px-2 2xl:px-4 inline-block"> {{ hoveredIndex === index ? item.title : item.enTitle }}</RouterLink>
          </li>
        </ul>
      </nav>
      <div class="hidden lg:block lg:col-span-2 2xl:col-span-1">
        <RouterLink to="/login" v-if="!user?.name">
          <Button variant="white-outline" class="border-black-80 py-[10px] px-6">Log in</Button>
        </RouterLink>
        <NavigationMenu v-else>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{{ user.name }}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul class="w-[150px] border-0 space-y-2">
                  <li>
                    <NavigationMenuLink as-child>
                      <RouterLink to="/member" class="block px-4 py-4 text-center">個人頁面</RouterLink>
                    </NavigationMenuLink>
                  </li>
                  <li v-if="user.is_admin">
                    <NavigationMenuLink>
                      <RouterLink to="/admin" class="block px-4 py-4 text-center">管理後台</RouterLink>
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
                          <AlertDialogCancel class="border-lime-700 border bg-transparent text-foreground hover:bg-lime-500"> 取消 </AlertDialogCancel>
                          <AlertDialogAction class="border-destructive border bg-transparent text-foreground hover:bg-destructive" @click="logout">確定</AlertDialogAction>
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
        <Button class="p-2">
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

              <div>
                <Button class="p-2 me-2">
                  <Search />
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

              <SheetClose as-child v-if="!user.name">
                <Button variant="white-outline" class="border-black-80 py-[10px] px-6 my-6">
                  <RouterLink to="/login" class="px-4"> Log in </RouterLink>
                </Button>
              </SheetClose>
              <NavigationMenu v-else class="w-full">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger class="mt-4">{{ user.name }} 您好</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul class="w-[150px] border-0 space-y-2">
                        <li>
                          <NavigationMenuLink as-child>
                            <RouterLink to="/member" class="block px-4 py-4 text-center">個人頁面</RouterLink>
                          </NavigationMenuLink>
                        </li>
                        <li v-if="user.is_admin">
                          <NavigationMenuLink>
                            <RouterLink to="/admin" class="block px-4 py-4 text-center">管理後台</RouterLink>
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
                                <AlertDialogCancel class="border-lime-700 border bg-transparent text-foreground hover:bg-lime-500"> 取消 </AlertDialogCancel>
                                <AlertDialogAction class="border-destructive border bg-transparent text-foreground hover:bg-destructive" @click="logout">確定</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
<script setup>
import { VisuallyHidden } from 'radix-vue';
import { ArrowDownRight, AlignJustify, Search } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetClose, SheetHeader, SheetTitle, SheetDescription, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
</script>

<script>
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
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
      mockData: [],
    };
  },
  methods: {
    addBlurEffect(index, e) {
      this.hoveredIndex = index;
      this.$refs.linkItems.forEach((item) => {
        item.classList.add('blur');
      });
      e.currentTarget.classList.remove('blur');
    },
    removeBlurEffect() {
      this.hoveredIndex = -1;
      this.$refs.linkItems.forEach((item) => {
        item.classList.remove('blur');
      });
    },
    ...mapActions(useUserStore, ['logout']),
  },
  computed: {
    ...mapState(useUserStore, ['user']),
  },
};
</script>
<style lang="scss">
.transition-blur {
  transition: all 0.3s ease;
}
// cubic-bezier(0.4, 0, 0.2, 1);
</style>
