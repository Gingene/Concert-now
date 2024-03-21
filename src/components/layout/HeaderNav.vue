<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="container flex justify-between items-center lg:grid lg:grid-cols-12 gap-6 py-3 lg:py-0">
      <div class="font-lato text-xl lg:col-span-3 xl:col-span-3 2xl:col-span-2">
        <RouterLink to="/" class="font-black leading-display"> CONCERT NOW. </RouterLink>
      </div>
      <div class="hidden backdrop-blur-sm rounded-xl lg:block lg:col-span-2 xl:col-span-3 2xl:col-span-5 relative">
        <span class="absolute text-black-60 top-2 left-3">Search now</span>
        <Search class="absolute text-black-60 top-2 right-3" />
        <Dialog :open="openSearchModal" @update:open="openModal">
          <DialogTrigger class="w-full bg-black-0 text-black-60 opacity-10 px-6 py-5 rounded-2xl hover:opacity-25 searchModal" @click="searchAll('')"> </DialogTrigger>
          <DialogContent class="max-w-[90%] p-8 rounded-md" :class="{ 'h-full': concertResults.length || artistResults.length || venueResults.length }">
            <DialogHeader>
              <DialogTitle>
                <Input
                  placeholder="Search now"
                  v-model="searchText"
                  @keyup="searchAll"
                  class="bg-black-0 text-black-80 box-shadow-light1-hover focus-visible:outline-0 px-6 py-5 focus:opacity-100 searchButton focus-visible:ring-offset-0 focus-visible:ring-ring-transparent" />
                <div v-if="!concertResults.length && !artistResults.length && !venueResults.length" class="mt-4">沒有搜尋到任何資料</div>
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>

            <div v-if="!concertResults.length && !artistResults.length && !venueResults.length" class="mt-4"></div>

            <ScrollArea class="rounded-md border-0 -ml-8 sm:ml-0 sm:p-4">
              <div v-if="artistResults.length > 0" class="flex justify-center relative mt-10 ml-8 xl:ml-6 2xl:ml-10 xl:w-[95%]">
                <h3 class="absolute top-2 left-0 text-2xl text-black-20 drop-shadow-light">表演者</h3>
                <RouterLink to="/artists" class="absolute top-3 right-0">
                  <DialogClose as-child>
                    <Button variant="white-outline" size="base" class="text-sm sm:text-base">查看更多</Button>
                  </DialogClose>
                </RouterLink>
                <Carousel class="w-[120px] md:w-[500px] lg:w-[90%] mt-16">
                  <CarouselContent>
                    <CarouselItem v-for="artist in artistResults" :key="artist.id" class="md:basis-1/2 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
                      <RouterLink :to="`/artists/${artist.id}`" class="flex flex-col justify-center items-center" @click="openModal(false)">
                        <DialogDescription>
                          <img :src="artist.cover_urls.square" :alt="artist.name" class="size-[100px] md:size-[150px] lg:w-[150px] lg:h-[150px] rounded-full object-cover" />
                          <div class="text-base mt-2 text-center text-white">{{ artist.name }}</div>
                        </DialogDescription>
                      </RouterLink>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div v-if="concertResults.length > 0" class="flex justify-center relative mt-10 ml-8 xl:ml-6 2xl:ml-10 xl:w-[95%]">
                <h3 class="absolute top-4 left-0 text-2xl text-black-20 drop-shadow-light">演唱會</h3>
                <RouterLink to="/concerts" class="absolute top-5 right-0">
                  <DialogClose as-child>
                    <Button variant="white-outline" size="base" class="text-sm sm:text-base">查看更多</Button>
                  </DialogClose>
                </RouterLink>
                <Carousel class="w-[150px] md:w-[500px] lg:w-[90%] pt-16">
                  <CarouselContent>
                    <CarouselItem v-for="concert in concertResults" :key="concert.id" class="md:basis-1/2 lg:basis-1/4">
                      <RouterLink :to="`/concerts/${concert.id}`" @click="openModal(false)">
                        <DialogDescription class="mt-2 flex flex-col justify-center items-center">
                          <img
                            :src="concert.cover_urls.square"
                            :alt="concert.title"
                            class="size-[100px] md:size-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-cover rounded-2xl" />
                          <div class="flex flex-col items-center mt-2">
                            <span class="text-sm sm:text-base text-center text-white">{{ concert.title }}</span>
                            <span class="text-sm sm:text-base text-center text-border-60">{{ concert.holding_time }}</span>
                          </div>
                        </DialogDescription>
                      </RouterLink>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div v-if="venueResults.length > 0" class="flex justify-center relative mt-10 ml-8 xl:ml-6 2xl:ml-10 xl:w-[95%]">
                <h3 class="absolute top-4 left-0 text-2xl text-black-20 drop-shadow-light">場地</h3>
                <RouterLink to="/venues" class="absolute top-5 right-0">
                  <DialogClose as-child>
                    <Button variant="white-outline" size="base" class="text-sm sm:text-base">查看更多</Button>
                  </DialogClose>
                </RouterLink>
                <Carousel class="w-[150px] md:w-[500px] lg:w-[90%] pt-16">
                  <CarouselContent>
                    <CarouselItem v-for="venue in venueResults" :key="venue.id" class="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                      <RouterLink :to="`/venues/${venue.id}`" class="flex flex-col justify-center items-center" @click="openModal(false)">
                        <DialogDescription class="mt-2 flex flex-col justify-center items-center">
                          <img :src="venue.picture.square" :alt="venue.title" class="size-[100px] md:size-[200px] lg:w-[300px] lg:h-[300px] object-cover rounded-2xl" />
                          <div class="mt-2 flex flex-col">
                            <span class="text-sm sm:text-base text-center text-white">{{ venue.title }}</span>
                            <span class="text-sm sm:text-base text-center text-border-60">{{ venue.city }}</span>
                          </div>
                        </DialogDescription>
                      </RouterLink>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </ScrollArea>
          </DialogContent>
          <DialogFooter class="hidden"> </DialogFooter>
        </Dialog>
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
          <Button variant="white-outline" class="border-black-80 hover:border-0 py-[10px] px-6">Log in</Button>
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
        <Button
          class="p-2 bg-transparent"
          @click="
            searchAll('');
            openModal(true);
          ">
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
import { Input } from '@/components/ui/input';
import { Sheet, SheetClose, SheetHeader, SheetTitle, SheetDescription, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';
</script>

<script>
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useDebounceFn } from '@vueuse/core';

export default {
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
      searchText: '',
      concertResults: [],
      venueResults: [],
      artistResults: [],
      openSearchModal: false,
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
    }, 650),
    searchConcerts() {
      this.http
        .get(`${this.path.concerts}?q=${this.searchText}&page=1`)
        .then((res) => {
          this.concertResults = [...res.data.data];
          // console.log('concertResults', this.concertResults);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    searchArtists() {
      this.http
        .get(`${this.path.artists}?q=${this.searchText}&page=1`)
        .then((res) => {
          this.artistResults = [...res.data.data];
          // console.log('artistResults', this.artistResults);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    searchVenues() {
      this.http
        .get(`${this.path.venues}?q=${this.searchText}&page=1`)
        .then((res) => {
          this.venueResults = [...res.data.data];
          // console.log('venueResults', this.venueResults);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    searchAll: useDebounceFn(function () {
      this.searchConcerts();
      this.searchArtists();
      this.searchVenues();
    }, 500),
    modalScrollAreaDisplay() {
      const scrollAreas = document.querySelectorAll('[data-radix-scroll-area-viewport]');
      scrollAreas[scrollAreas.length - 1].childNodes[0].style = 'display: block';
    },
    openModal(val) {
      this.openSearchModal = val;
    },
    ...mapActions(useUserStore, ['logout']),
  },
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  watch: {
    concertResults(newVal) {
      this.modalScrollAreaDisplay();
    },
  },
  updated() {},
};
</script>
<style lang="scss" scoped>
.transition-blur {
  transition: all 0.3s ease;
}
</style>
