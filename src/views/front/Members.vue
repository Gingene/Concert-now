<template>
  <!-- Header -->
  <section
    class="container w-[95%] lg:w-[1000px] xl:w-[1200px] py-8 px-6 xs:px-8 lg:px-12 xs:pt-10 lg:pt-14 my-4 rounded-[40px] bg-cover bg-center bg-black/50 bg-blend-multiply"
    style="background-image: url('https://images.unsplash.com/photo-1699865575415-4ef0db078a4a?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
    >
    <figure
      class="relative w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-[length:60px] sm:bg-[length:80px] bg-center bg-no-repeat bg-white/25 rounded-full"
      :style="`background-image: url('${user.profile_image_url}')`">
      <figcaption class="ml-[85px] xs:ml-[120px] pt-5 text-nowrap text-[30px] sm:text-[40px] font-lato">
        {{ user.name }}
      </figcaption>
    </figure>
    <div class="flex justify-end">
      <p class=" text-gray-400 tracking-wider text-sm mr-3 lg:text-base">
        since 2024
      </p>
      <Popover>
        <PopoverTrigger>
          <Info class="ml-auto" />
        </PopoverTrigger>
        <PopoverContent class="w-[150px] text-center">
          <div>警告次數：{{ user.warning_count }}</div>
        </PopoverContent>
      </Popover>
    </div>
  </section>
  <!-- Collection -->
  <section class="container lg:w-[1000px] xl:w-[1200px] grid lg:grid-cols-2 gap-6 pb-10 overflow-hidden">
    <!-- Artist -->
    <Card class="lg:h-[50%] p-3 sm:p-7 mb-5 lg:mb-0 relative bg-shadow-trans-text rounded-[40px] border-black-60">
      <span class="absolute -bottom-5 right-[10%] xs:right-[0px] text-[70px] sm:text-[90px] text-center font-black font-lato text-stroke opacity-10 -rotate-12">
        ARTISTS
      </span>
      <CardHeader>
        <CardTitle class="tracking-wide text-[24px] xs:text-[30px] xl:text-[34px] flex justify-between items-center">
          表演者追蹤清單
          <router-link 
          :to="`/artists`"
          class="hover:translate-x-1 hover:-translate-y-1">
            <ArrowUpRightFromCircle size="30" />
          </router-link>
        </CardTitle>
        <CardDescription class="pt-1 xs:text-base xl:text-[18px]">
          追蹤數：{{ followedArtists.length }}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea class="w-full h-[144px] lg:h-[400px]">
          <div v-if="followedArtists.length === 0" class="text-lg text-tiffany font-semibold tracking-wider"> 
            目前沒有追蹤的藝人喔！
          </div>
          <router-link 
          v-else
          v-for="artist in followedArtists" 
          :key="artist.id"
          :to="`/artists/${artist.id}`"
          class="inline-block sm:py-1">
            <Badge  class="badge touch-pinch-zoom sm:text-lg xl:text-[22px]">
              {{ artist.name }}
            </Badge>
          </router-link>
        </ScrollArea>
      </CardContent>
    </Card>
    <!-- Concerts -->
    <Card class="p-3 sm:p-7 mb-10 sm:mb-20 relative bg-shadow-trans-text rounded-[40px] border-black-60">
      <span class="absolute -bottom-10 sm:-bottom-20 right-0 text-[70px] sm:text-[90px] font-black font-lato text-stroke opacity-10 -rotate-12">
        CONCERTS
      </span>
      <CardHeader>
        <CardTitle class="tracking-wide text-[24px] xs:text-[30px] xl:text-[34px] flex justify-between items-center">
          演唱會收藏清單
          <router-link 
          :to="`/concerts`"
          class="hover:translate-x-1 hover:-translate-y-1">
            <ArrowUpRightFromCircle size="30" />
          </router-link>
        </CardTitle>
        <CardDescription class="pt-1 xs:text-base xl:text-[18px]">
          收藏數：{{ savedConcerts.length }}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea class="w-full h-[280px] sm:h-[350px] lg:h-[400px]">
          <div v-if="savedConcerts.length === 0" class="text-lg text-pink font-semibold tracking-wider"> 
            目前沒有收藏任何演唱會喔！
          </div>
          <router-link 
          :to="`/concerts/${concert.id}`" 
          v-for="concert in savedConcerts" 
          :key="concert.id +123" 
          class="rounded-[30px] hover:cursor-pointer">
            <div class="flex flex-row gap-6 items-center hover:-translate-y-2">
              <div class="text-[18px] sm:text-[24px] xl:text-[24px] basis-5/6 font-lato tracking-wide">
                {{ concert.title }}
                <p class="text-[8px] sm:text-[12px] lg:text-[16px] opacity-40 mt-1"> 
                  {{ concert.holding_time.split(' ')[0] }} （{{ chineseDays[new Date(concert.holding_time).getDay()] }}）
                </p>
              </div>
              <ChevronRightCircle color="#d595f1" size="30" class="basis-1/6" />
            </div>
            <Separator class="bg-white opacity-25 my-3 sm:my-6" />
          </router-link>
        </ScrollArea>
      </CardContent>
    </Card>
  </section>
</template>

<script setup>
  import { Info, ChevronRightCircle, ArrowUpRightFromCircle } from 'lucide-vue-next';
  import { Separator } from '@/components/ui/separator';
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from '@/components/ui/popover';
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Badge } from '@/components/ui/badge';
  import { ScrollArea } from '@/components/ui/scroll-area';
</script>

<script>
  import { mapActions, mapState } from 'pinia';
  import { useUserStore } from '@/stores/user';
  export default {
    data() {
      return {
        chineseDays: ['日', '一', '二', '三', '四', '五', '六'],
      };
    },
    inject: ['http', 'path'],
    methods: {
      ...mapActions(useUserStore, ['getUser','getUserSavedAndFollowed']),
    },
    computed: {
      ...mapState(useUserStore, ['user','savedConcerts','followedArtists']),
    },
    mounted() {
      this.getUser();
      this.getUserSavedAndFollowed();
    },
  };
</script>

<style lang="scss" scoped>
.badge {
  border: 2px solid gray;
  padding: 5px 20px;
  margin: 5px;
  &:hover {
    background-color: #42dfc8;
    color: black;
    cursor: pointer;
    border: 2px solid transparent;
    transform: translateX(-3px) translateY(-3px);
  }
}
</style>
