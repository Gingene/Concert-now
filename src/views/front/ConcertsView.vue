<template>
  <section class="container relative pb-[128px] lg:pb-[192px]">
    <BannerComponent :prop-placeholder="bannerInputPlaceholder" @searchMethod="searchConcerts">
      <template #mainTitle>CONCERTS</template>
    </BannerComponent>
    <main class="space-y-6 lg:space-y-14 pb-5 lg:pb-12 border-b-2 border-black-60">
      <div>
        <div class="space-y-4 space-x-4 space-x-reverse -m-1 p-1">
          <Button
            variant="tiffany-outline"
            size="base"
            class="me-4"
            :class="{ active: timeButtonIsActive === 'stateAll' }"
            @click="
              getConcerts('time', 'all');
              timeButtonIsActive = 'stateAll';
            ">
            全部
          </Button>
          <template v-for="(time, index) in timeRanges" :key="time">
            <Button
              variant="tiffany-outline"
              size="base"
              :class="{ active: timeButtonIsActive === `state${index}` }"
              @click="
                getConcerts('time', time);
                timeButtonIsActive = `state${index}`;
              ">
              {{ time }}
            </Button>
          </template>
        </div>
        <div class="space-y-4 space-x-4 space-x-reverse -m-1 p-1">
          <Button
            variant="pink-outline"
            size="base"
            class="me-4"
            :class="{ active: countryButtonIsActive === 'stateAll' }"
            @click="
              getConcerts('country', 'all');
              countryButtonIsActive = 'stateAll';
            ">
            全部
          </Button>
          <template v-for="(country, index) in countryRanges" :key="country">
            <Button
              variant="pink-outline"
              size="base"
              :class="{ active: countryButtonIsActive === `state${index}` }"
              @click="
                getConcerts('country', country);
                countryButtonIsActive = `state${index}`;
              ">
              {{ country }}
            </Button>
          </template>
        </div>
      </div>
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <li v-for="concert in concerts" :key="concert.id">
          <Card class="border-black-60">
            <CardHeader class="rounded-t-2xl space-y-0 p-0">
              <router-link :to="`/concerts/${concert.id}`">
                <img :src="concert.cover_urls.square" :alt="concert.title" class="aspect-square rounded-2xl object-cover min-w-full" />
              </router-link>
              <CardDescription class="h-[10rem] md:h-[13rem] lg:h-[12rem] xl:h-[13rem] border-x-2 pt-6 px-6 border-black-60 flex justify-between align-top">
                <div>
                  <p class="text-tiny lg:text-sm">{{ concert.holding_time.substring(0, 10) }}</p>
                  <router-link :to="`/concerts/${concert.id}`">
                    <CardTitle class="pt-1 text-base lg:text-lg text-white">{{ concert.title }}</CardTitle>
                  </router-link>
                  <p class="absolute pt-2 pb-4 text-black-60 text-tiny">{{ concert.venue?.title }}</p>
                </div>
                <HoverCard>
                  <HoverCardTrigger>
                    <button class="mb-auto" @click="callSaveAction(concert.id)">
                      <font-awesome-icon v-if="isSaved.some((item) => item.id === concert.id)" icon="fa-solid fa-bookmark" class="text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]" />
                      <font-awesome-icon v-else icon="fa-regular fa-bookmark" class="text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]" />
                    </button>
                  </HoverCardTrigger>
                  <!-- 辨識登入狀態，未登入才顯示提示框 -->
                  <HoverCardContent class="mt-[-15rem] sm:mt-[-15rem]" v-if="AccessToken === undefined"> 登入開啟收藏功能 </HoverCardContent>
                </HoverCard>
              </CardDescription>
            </CardHeader>
            <CardFooter class="text-end border-x-2 border-b-2 border-black-60 rounded-b-2xl">
              <RouterLink :to="`/concerts/${concert.id}`">
                <Button variant="white-outline" size="base2">
                  <span class="text-sm">查看更多</span>
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
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ArrowRight } from 'lucide-vue-next';
import BannerComponent from '@/components/custom/BannerComponent.vue';
</script>
<script>
import { mapActions, mapState } from 'pinia';
import { useConcertsStore } from '@/stores/concerts';
import { useUserStore } from '@/stores/user';

export default {
  data() {
    return {
      bannerInputPlaceholder: '請輸入演唱會名稱',
      // userLogged: false,
      timeRanges: ['本日', '本週', '本月'],
      countryRanges: ['台灣', '日本', '韓國', '歐美', '其它'],
      // 按鈕狀態 - 用於樣式切換
      timeButtonIsActive: 'stateAll',
      countryButtonIsActive: 'stateAll',
    };
  },
  inject: ['http', 'path'],
  methods: {
    ...mapActions(useConcertsStore, ['getConcerts', 'saveUnSavedConcert', 'callSaveAction', 'searchConcerts']),
    ...mapActions(useUserStore, ['getUserSavedAndFollowed']),
  },
  computed: {
    ...mapState(useConcertsStore, ['concerts', 'pagination']),
    ...mapState(useUserStore, ['AccessToken', 'savedConcerts']),

    isSaved() {
      return [...this.savedConcerts];
    },
  },
  mounted() {
    this.getConcerts('country', 'all');
    this.getConcerts('time', 'all');

    // 確認使用者登入狀態
    if (this.AccessToken !== undefined) {
      this.getUserSavedAndFollowed();
    }

    console.log(this.AccessToken);
    console.log(this.savedConcerts);
  },
};
</script>
