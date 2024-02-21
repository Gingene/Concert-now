<template>
  <section class="container relative">
    <div class="grid grid-flow-col">
      <h2 class="test text-[3.5rem] font-display sm:text-display-3 font-black flex flex-col leading-none">
        <span>DISCOVER</span>
        <span class="text-stroke">VENUES</span>
        <span>NOW</span>
      </h2>
      <div class="grid grid-cols-3">
        <!-- <div class="row-span-9"></div> -->
        <div class="row-start-9 sm:row-start-8 col-start-3 md:col-start-1 -ms-32 sm:-ms-64 lg:-ms-[400px] xl:-ms-[500px] 2xl:-ms-[600px]">
          <Input
            placeholder="輸入場地/縣市名稱"
            class="bg-black-0 box-shadow-light1-hover focus:text-black-60 focus-visible:box-shadow-light1-hover focus-visible:outline-0 hover:box-shadow-light1-hover" />
        </div>
      </div>
    </div>
    <main class="space-y-6 lg:space-y-10 pb-20 lg:pb-32 border-b-2 border-black-60">
      <div>
        <div class="space-y-4 space-x-4 space-x-reverse -m-1 p-1">
          <Button variant="tiffany-outline" size="base" class="me-4"> 全部 </Button>
          <template v-for="city in cities" :key="city.id">
            <Button variant="tiffany-outline" size="base"> {{ city }} </Button>
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
                <Button variant="white-outline" size="base">
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
          <PaginationFirst />
          <PaginationPrev />

          <template v-for="(item, index) in items">
            <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
              <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext />
          <PaginationLast />
        </PaginationList>
      </Pagination>
    </main>
  </section>
  <section class="py-20">
    <div>
      <h2 class="flex flex-col justify-center items-center text-[3.5rem] font-display sm:text-display-3 font-black pb-6">
        <span>POPULAR</span>
        <span class="text-stroke">VENUES</span>
      </h2>
    </div>
    <div>
      <div v-for="venue in venues" :key="venue.id" class="marquee-type">
        <div class="grid grid-cols-4">
          <RouterLink :to="`/venues/${venue.id}`">
            <img :src="venue.picture.horizontal" :alt="venue.title" class="marquee-image aspect-video" />
          </RouterLink>
        </div>
        <div class="flex text-[3.5rem] md:text-[4.5rem] font-display font-black tracking-widest whitespace-nowrap overflow-x-auto scrollbar-none mb-6 lg:mb-10">
          <p class="marquee">
            <span>{{ venue.title }}</span>
            <span class="text-stroke">{{ venue.title }}</span>
          </p>
          <p class="marquee">
            <span>{{ venue.title }}</span>
            <span class="text-stroke">{{ venue.title }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';
import { ArrowRight } from 'lucide-vue-next';
</script>
<script>
import { mapActions, mapState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';
export default {
  data() {
    return {
      cities: ['台北市', '新北市', '台中市', '高雄市'],
    };
  },
  inject: ['http', 'path'],
  methods: {
    ...mapActions(useVenuesStore, ['getVenues']),
  },
  computed: {
    ...mapState(useVenuesStore, ['venues', 'pagination']),
  },
  mounted() {
    this.getVenues(`${this.path.venues}?page=1`);
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
