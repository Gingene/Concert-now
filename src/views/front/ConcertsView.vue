<template>
  <!-- <font-awesome-icon icon="fa-regular fa-bookmark" class="text-xl" style="color:var(--pink)" /> -->
  <!-- <font-awesome-icon icon="fa-solid fa-bookmark" class="text-xl" style="color:var(--pink)" /> -->
  <section class="container relative pt-20">
    <div class="grid grid-flow-col pb-10">
      <h2 class="test text-[3.5rem] font-display sm:text-display-3 font-black flex flex-col leading-[.8]">
        <span>DISCOVER</span>
        <span class="text-stroke">CONCERTS</span>
        <span>NOW</span>
      </h2>
      <div class="grid grid-cols-3">
        <div class="row-start-9 sm:row-start-8 col-start-3 md:col-start-1 -ms-32 sm:-ms-64 lg:-ms-[400px] xl:-ms-[500px] 2xl:-ms-[600px]">
          <Input
            placeholder="輸入演唱會名稱"
            class="bg-black-0 box-shadow-light1-hover focus:text-black-60 focus-visible:box-shadow-light1-hover focus-visible:outline-0 hover:box-shadow-light1-hover" />
        </div>
      </div>
    </div>
    <main class="space-y-6 lg:space-y-10 pb-20 lg:pb-32 border-b-2 border-black-60">
      <div>
        <div class="space-y-3 space-x-3 -m-1 p-1">
          <!-- <Button variant="pink-blur" size="base" class="me-4"> 全部 </Button> -->
          <template v-for="time in timeRanges" :key="time">
            <Button variant="pink-blur" size="base"> {{ time }} </Button>
          </template>
        </div>
        <div class="space-y-3 space-x-3 -m-1 p-1">
          <!-- <Button variant="tiffany-blur" size="base" class="me-4"> 全部 </Button> -->
          <template v-for="nationality in nationalityRanges" :key="nationality">
            <Button variant="tiffany-blur" size="base"> {{ nationality }} </Button>
          </template>
        </div>
      </div>
      <ul class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <li v-for="concert in concerts" :key="concert.id">
          <!-- <Card class="border-black-60">
            <CardHeader class="rounded-t-2xl space-y-0 p-0">
              <img :src="concert.cover_urls.square" :alt="concert.title" class="aspect-square rounded-t-2xl object-cover" />
              <CardDescription class="border-x-2 pt-6 px-6 border-black-60 flex justify-between align-top">
                <p class="text-tiny">{{ concert.holding_time.substring(0,10) }}</p>
                <font-awesome-icon icon="fa-regular fa-bookmark" class="text-3xl" style="color:var(--pink)" />
              </CardDescription>
              <CardTitle class="border-x-2 pt-1 px-6 border-black-60 text-sm sm:text-lg lg:text-2xl">{{ concert.title }}</CardTitle>
            </CardHeader>
            <CardContent class="border-x-2 pt-5 border-black-60 text-tiny">{{ concert.venue.title }}</CardContent>
            <CardFooter class="text-end border-x-2 border-b-2 border-black-60 rounded-b-2xl">
              <RouterLink :to="`/concerts/${concert.id}`">
                <Button variant="white-outline" size="base">
                  <span class="text-sm lg:text-base">查看評論</span>
                  <ArrowRight class="size-6 ms-2 lg:ms-4" />
                </Button>
              </RouterLink>
            </CardFooter>
          </Card> -->
          <Card class="border-black-60">
            <CardHeader class="rounded-t-2xl space-y-0 p-0">
              <img :src="concert.cover_urls.square" :alt="concert.title" class="aspect-square rounded-t-2xl object-cover" />
              <CardDescription class="border-x-2 pt-6 px-6 border-black-60 flex justify-between align-top">
                <div>
                  <p class="text-tiny">{{ concert.holding_time.substring(0, 10) }}</p>
                  <CardTitle class="pt-1 text-base sm:text-lg text-white h-[7rem] lg:h-[6rem]">{{ concert.title }}</CardTitle>
                </div>
                <button class="mb-auto">
                  <font-awesome-icon icon="fa-regular fa-bookmark" class="text-3xl ml-4" style="color: var(--pink)" />
                </button>
              </CardDescription>
            </CardHeader>
            <CardContent class="border-x-2 pt-5 border-black-60 text-tiny">{{ concert.venue.title }}</CardContent>
            <CardFooter class="text-end border-x-2 border-b-2 border-black-60 rounded-b-2xl">
              <RouterLink :to="`/concerts/${concert.id}`">
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
import { useConcertsStore } from '@/stores/concerts';
export default {
  data() {
    return {
      timeRanges: ['全部', '本日', '本月', '本週'],
      nationalityRanges: ['全部', '臺灣', '日本', '韓國', '歐美', '其他'],
    };
  },
  inject: ['http', 'path'],
  methods: {
    ...mapActions(useConcertsStore, ['getConcerts']),
  },
  computed: {
    ...mapState(useConcertsStore, ['concerts', 'pagination']),
  },
  mounted() {
    // this.getConcerts(`${this.path.venues}?page=1`);
    this.getConcerts();
  },
};
</script>
<style lang="scss" scoped></style>
