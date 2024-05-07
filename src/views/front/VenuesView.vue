<template>
  <section class="container relative">
    <!-- 場地搜尋 -->
    <BannerComponent :prop-placeholder="bannerInputPlaceholder" @searchMethod="searchVenues">
      <template #mainTitle>VENUES</template>
    </BannerComponent>

    <!-- 場地展示 -->
    <main class="space-y-6 lg:space-y-14 pb-5 lg:pb-12 border-b-2 border-black-40">
      <div>
        <div class="space-y-4 space-x-4 space-x-reverse -m-1 p-1">
          <template v-for="city in cities" :key="city.id">
            <Button variant="tiffany-outline" size="base" @click="handleGetVenuesByCity(city.value)" :class="{ active: activeCity === city.value, 'me-4': city.name === '全部' }">
              {{ city.name }}
            </Button>
          </template>
        </div>
      </div>
      <p v-if="!venues.length" class="p-14 font-semibold tracking-tighter text-base lg:text-lg text-white text-center">抱歉，搜尋不到相關資源</p>
      <ul v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <li v-for="venue in venues" :key="venue.id">
          <Card class="border-black-80">
            <CardHeader class="rounded-t-2xl space-y-0 p-0">
              <RouterLink :to="`/venues/${venue.id}`">
                <img
                  :src="venue.picture.square"
                  :alt="venue.title"
                  class="brightness-90 aspect-square rounded-2xl h-[18rem] xs:h-[26rem] sm:h-[20rem] md:h-[15rem] lg:h-[20rem] object-cover min-w-full" />
              </RouterLink>
              <CardTitle class="border-x-2 pt-6 px-6 border-black-80 text-base lg:text-lg">
                <RouterLink :to="`/venues/${venue.id}`">
                  {{ venue.title }}
                </RouterLink>
              </CardTitle>
              <CardDescription class="hidden"></CardDescription>
            </CardHeader>
            <CardContent class="border-x-2 border-black-80 text-black-60 pt-2">
              <div class="text-tiny">
                {{ venue.city }}
              </div>
            </CardContent>
            <CardFooter class="text-end border-x-2 border-b-2 border-black-80 rounded-b-2xl">
              <RouterLink :to="`/venues/${venue.id}`">
                <Button variant="white-outline" size="base2" @click="getVenue(venue.id)" class="border-black-80 hover:border-white">
                  <span class="text-sm">查看評論</span>
                  <ArrowRight class="size-6 ms-2 lg:ms-4" />
                </Button>
              </RouterLink>
            </CardFooter>
          </Card>
        </li>
      </ul>
      <Pagination v-slot="{ page }" :page="searchPage" :total="pagination.total_pages * 4" :itemsPerPage="4" :sibling-count="1" show-edges :default-page="1">
        <PaginationList v-slot="{ items }" class="flex items-center justify-center gap-1 pt-16">
          <PaginationFirst @click="getVenuesByPage(1)" />
          <PaginationPrev @click="getVenuesByPage(pagination.current_page - 1)" />

          <template v-for="(item, index) in items">
            <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
              <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'" @click="getVenuesByPage(item.value)" :disabled="item.value === page">
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext @click="getVenuesByPage(pagination.current_page + 1)" />
          <PaginationLast @click="getVenuesByPage(pagination.total_pages)" />
        </PaginationList>
      </Pagination>
    </main>
  </section>
  <!-- 場地總覽 -->
  <section class="pt-[20px] md:pt-[58px] lg:pt-[117px] pb-[128px] lg:pb-[192px]">
    <div>
      <TitleComponent class="flex justify-center mb-8">
        <template #subTitle> POPULAR </template>
        <template #mainTitle> 熱門場地 </template>
      </TitleComponent>
    </div>

    <div class="container">
      <div v-for="(venue, index) in accordionItems" :key="venue.id" :value="venue.value">
        <HoverCard :openDelay="200">
          <HoverCardTrigger class="hidden lg:flex flex-col bg-black-100 hover:text-black-100 hover:bg-white font-black" :value="venue.id">
            <div class="text-4xl -mb-[10px] lg:-mb-[15px] bg-black-100 hover:bg-white pt-8 lg:pt-[42px] flex space-x-10">
              <ArrowDownRight class="size-16 pb-2" />
              <span>{{ venue.title }}</span>
            </div>
            <div class="border-t-4 border-t-white border-b-[8px] border-b-black w-full" />
          </HoverCardTrigger>
          <HoverCardContent class="w-[400px] h-full relative border-0 bg-transparent shadow-none">
            <router-link :to="`/venues/${venue.id}`">
              <img
                data-aos="fade-up"
                :src="venue.picture.horizontal"
                :alt="venue.title"
                class="w-[400px] h-[250px] object-cover absolute bottom-12 rounded-md"
                :style="{ left: `${70 - index * 12}%` }" />
            </router-link>
          </HoverCardContent>
        </HoverCard>
        <div class="flex flex-col lg:hidden font-black">
          <div class="flex items-end justify-between pt-4 gap-2 xs:gap-4" :style="{ 'flex-direction': `${index % 2 == 1 ? 'row-reverse' : 'row'}` }">
            <router-link :to="`/venues/${venue.id}`">
              <div class="text-base xs:text-lg sm:text-2xl flex gap-0 xs:gap-2">
                {{ venue.title }}
                <ArrowDownRight class="pb-2 sm:pb-0 size-10" />
              </div>
            </router-link>
            <img :src="venue.picture.horizontal" :alt="venue.title" class="w-[220px] h-[130px] md:w-[350px] md:h-[170px] object-cover rounded-md" />
          </div>
          <div class="border-t-4 border-t-white w-full border-b-4 border-b-black-100" />
        </div>
      </div>
      <div class="bg-black-400 h-[6px] relative z-10"></div>
    </div>
  </section>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';
import { ArrowRight, ArrowDownRight } from 'lucide-vue-next';
import BannerComponent from '@/components/custom/BannerComponent.vue';
import TitleComponent from '@/components/custom/TitleComponent.vue';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
</script>

<script>
import { mapActions, mapState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';
import { useThrottleFn } from '@vueuse/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      activeCity: '',
      cities: [
        {
          name: '全部',
          value: '',
        },
        {
          name: '台北市',
          value: '台北市',
        },
        {
          name: '新北市',
          value: '新北市',
        },
        {
          name: '台中市',
          value: '台中市',
        },
        {
          name: '高雄市',
          value: '高雄市',
        },
      ],
      bannerInputPlaceholder: '輸入場地',
      accordionItems: [
        {
          value: 'item-1',
          id: 1,
          title: '台北國際會議中心TICC',
          city: '台北市',
          picture: {
            horizontal: 'https://www.ticc.com.tw/wSite/xslgip/style1/images/sp13/section_14.jpg',
            square: 'https://lh3.googleusercontent.com/p/AF1QipPsHmLZ2gTtSxCtqT4HGPFRNloBKRqX0q6rtpzy=w1080-h608-p-no-v0',
          },
        },
        {
          value: 'item-2',
          id: 2,
          title: 'Zepp New Taipei',
          city: '新北市',
          picture: {
            horizontal: 'https://www.richhonour.com/images/project/commercial/c22/3.jpg',
            square: 'https://www.heavenraven.com/wp-content/uploads/2020/10/Zepp-New-Taipei-director-%E6%9C%AC%E5%A4%9A%E7%9C%9F%E4%B8%80%E9%83%8E-interview-13.jpg',
          },
        },
        {
          value: 'item-3',
          id: 3,
          title: '台北流行音樂中心',
          city: '台北市',
          picture: {
            horizontal: 'https://tmc.taipei/wp-content/uploads/2022/01/DSC05413.jpg',
            square: 'https://www.travel.taipei/image/193182',
          },
        },
        {
          value: 'item-4',
          id: 4,
          title: 'Legacy Taichung',
          city: '台中市',
          picture: {
            horizontal: 'https://res.klook.com/image/upload/x_0,y_5,w_1042,h_678,c_crop/events/hubpage/etskq5ygkmrgugmur71w.jpg',
            square: 'https://live.staticflickr.com/4663/25588455987_993fd71bb0_b.jpg',
          },
        },
        {
          value: 'item-5',
          id: 5,
          title: '高雄流行音樂中心',
          city: '高雄市',
          picture: {
            horizontal: 'https://www.musicmusic.com.tw/domain/www/upload/file/210420172132f2710.jpg',
            square: 'https://www.habitech.com.tw/storage/2022/02/MAI_4137.jpg',
          },
        },
        {
          value: 'item-6',
          id: 6,
          title: '台北小巨蛋',
          city: '台北市',
          picture: {
            horizontal: 'https://s3.beautimode.com/upload/media/9019eeb78c5c4a27f44317e3d804750b.jpg',
            square: 'https://i.imgur.com/VTeXfKF.jpeg',
          },
        },
      ],
      defaultValue: 'item-1',
    };
  },
  inject: ['http', 'path'],
  methods: {
    ThrottleClick: useThrottleFn(function (event) {
      event?.currentTarget.click();
      // console.log(event.currentTarget);
    }, 1000),
    simulatorAccordionButtonHover(element, eventType) {
      element.addEventListener(eventType, this.ThrottleClick);
    },
    installAccordionButtonHover() {
      const accordionButtons = document.querySelectorAll('.accordionButton');
      // console.log(accordionButtons);
      accordionButtons.forEach((btn) => {
        this.simulatorAccordionButtonHover(btn, 'mouseover');
      });
    },
    handleGetVenuesByCity(city) {
      this.getVenuesByCity(city);
      this.activeCity = city;
    },
    ...mapActions(useVenuesStore, ['getVenues', 'getVenue', 'getVenuesByCity', 'searchVenues', 'getVenuesByPage', 'resetState']),
  },
  computed: {
    ...mapState(useVenuesStore, ['venues', 'pagination', 'searchPage']),
  },
  mounted() {
    this.getVenues();
    AOS.init();
  },
  updated() {
    this.installAccordionButtonHover();
  },
  unmounted() {
    this.resetState();
  },
};
</script>
