<template>
  <section class="container relative">
    <BannerComponent :prop-placeholder="bannerInputPlaceholder" @searchMethod="searchVenues">
      <template #mainTitle>VENUES</template>
    </BannerComponent>

    <main class="space-y-6 lg:space-y-10 pb-20 lg:pb-32 border-b-2 border-black-60">
      <div>
        <div class="space-y-4 space-x-4 space-x-reverse -m-1 p-1">
          <Button variant="tiffany-outline" size="base" class="me-4" @click="getVenues"> 全部 </Button>
          <template v-for="city in cities" :key="city.id">
            <Button variant="tiffany-outline" size="base" @click="getVenuesByCity(city)"> {{ city }} </Button>
          </template>
        </div>
      </div>
      <ul class="grid grid-cols-2 2xl:grid-cols-4 gap-6">
        <li v-for="venue in venues" :key="venue.id">
          <Card class="border-black-60">
            <CardHeader class="rounded-t-2xl space-y-0 p-0">
              <img :src="venue.picture.square" :alt="venue.title" class="aspect-square rounded-t-2xl" />
              <CardTitle class="border-x-4 p-6 border-black-60 text-sm lg:text-lg">{{ venue.title }}</CardTitle>
              <CardDescription class="hidden"></CardDescription>
            </CardHeader>
            <CardContent class="border-x-4 border-black-60 text-tiny"> {{ venue.city }} </CardContent>
            <CardFooter class="text-end border-x-4 border-b-4 border-black-60 rounded-b-2xl">
              <RouterLink :to="`/venues/${venue.id}`">
                <Button variant="white-outline" size="base" @click="getVenue(venue.id)">
                  <span class="text-sm lg:text-base">查看評論</span>
                  <ArrowRight class="size-6 ms-2 lg:ms-4" />
                </Button>
              </RouterLink>
            </CardFooter>
          </Card>
        </li>
      </ul>
      <Pagination v-slot="{ page }" :total="pagination.total_pages * 10" :sibling-count="1" show-edges :default-page="1">
        <PaginationList v-slot="{ items }" class="flex items-center justify-center gap-1">
          <PaginationFirst @click="getVenues(1)" />
          <PaginationPrev @click="getVenues(pagination.current_page - 1)" />

          <template v-for="(item, index) in items">
            <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
              <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'" @click="getVenues(item.value)">
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext @click="getVenues(pagination.current_page + 1)" />
          <PaginationLast @click="getVenues(pagination.total_pages)" />
        </PaginationList>
      </Pagination>
    </main>
  </section>
  <section class="py-20">
    <div>
      <!-- <h2 class="flex flex-col justify-center items-center text-[3.5rem] font-display sm:text-display-3 font-black pb-6">
        <span>POPULAR</span>
        <span class="text-stroke">VENUES</span>
      </h2> -->
      <TitleComponent class="flex justify-center">
        <template #subTitle> POPULAR </template>
        <template #mainTitle> VENUES </template>
      </TitleComponent>
    </div>

    <div class="container">
      <Accordion type="single" collapsible>
        <AccordionItem class="lg:relative" v-for="(venue, index) in accordionItems" :key="venue.id" :value="venue.value">
          <AccordionTrigger :hideIcon="true" class="accordionButton bg-black-100 hover:text-black-100 hover:bg-white" :value="venue.id">
            <div class="flex space-x-10 font-black">
              <ArrowDownRight class="size-10 lg:size-16" />
              <span class="-mb-[48px] pt-2 lg:pt-[42px]">{{ venue.title }}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent class="lg:flex lg:justify-end">
            <!-- <img :src="venue.picture.horizontal" :alt="venue.title" class="h-[200px] opacity-0" /> -->
            <router-link :to="`/venues/${venue.id}`">
              <img :src="venue.picture.horizontal" :alt="venue.title" class="h-[300px] lg:absolute lg:-top-[200px] object-cover right-[20px]" :style="{ right: `${index * 20}px` }" />
            </router-link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div class="bg-black-100 h-[50px] relative z-10"></div>
    </div>
  </section>
</template>
<script setup>
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, ArrowDownRight } from 'lucide-vue-next';
import BannerComponent from '@/components/custom/BannerComponent.vue';
import TitleComponent from '@/components/custom/TitleComponent.vue';
</script>
<script>
import { mapActions, mapState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';
import { useThrottleFn } from '@vueuse/core';

export default {
  data() {
    return {
      cities: ['台北市', '新北市', '台中市', '高雄市'],
      bannerInputPlaceholder: '輸入場地/縣市名稱',
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
          title: '高雄流行音樂中心',
          city: '高雄市',
          picture: {
            horizontal: 'https://www.musicmusic.com.tw/domain/www/upload/file/210420172132f2710.jpg',
            square: 'https://www.habitech.com.tw/storage/2022/02/MAI_4137.jpg',
          },
        },
        {
          value: 'item-5',
          id: 5,
          title: 'Legacy Taichung',
          city: '台中市',
          picture: {
            horizontal: 'https://res.klook.com/image/upload/x_0,y_5,w_1042,h_678,c_crop/events/hubpage/etskq5ygkmrgugmur71w.jpg',
            square: 'https://live.staticflickr.com/4663/25588455987_993fd71bb0_b.jpg',
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
    debounceClick: useThrottleFn(function (event) {
      event?.currentTarget.click();
      // console.log(event.currentTarget);
    }, 1000),
    simulatorAccordionButtonHover(element, eventType) {
      element.addEventListener(eventType, this.debounceClick);
    },
    installAccordionButtonHover() {
      const accordionButtons = document.querySelectorAll('.accordionButton');
      // console.log(accordionButtons);
      accordionButtons.forEach((btn) => {
        this.simulatorAccordionButtonHover(btn, 'mouseover');
      });
    },

    ...mapActions(useVenuesStore, ['getVenues', 'getVenue', 'getVenuesByCity', 'searchVenues']),
  },
  computed: {
    ...mapState(useVenuesStore, ['venues', 'pagination']),
  },
  mounted() {
    this.getVenues();
  },
  updated() {
    this.installAccordionButtonHover();
  },
};
</script>
<style lang="scss" scoped>
// .test {
//   mix-blend-mode: difference;
//   color: #000;
//   filter: invert(100%);
// }
.scrollbar-none {
  scrollbar-width: none;
}

.marquee-type {
  &:nth-child(odd) {
    a {
      @apply col-span-3;
    }
    p.marquee {
      animation: marquee-negative 10s infinite linear;
    }
  }
  &:nth-child(even) {
    a {
      @apply col-start-2 col-span-3;
    }
    .marquee-image {
      @apply w-full;
    }
    p.marquee {
      animation: marquee-positive 10s infinite linear;
    }
  }
}

@keyframes marquee-negative {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-(80%));
  }
}

@keyframes marquee-positive {
  0% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX((0%));
  }
}
</style>
