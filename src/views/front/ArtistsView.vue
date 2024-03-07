<template>
  <!-- swiper start -->
  <!-- swiper end -->

  <section class="container relative pb-[128px] lg:pb-[192px]">
    <!-- 區塊二 start-->
    <div class="grid grid-flow-col">
      <BannerComponent :prop-placeholder="bannerInputPlaceholder" @searchMethod="searchArtists">
        <template #mainTitle>ARTISTS</template>
      </BannerComponent>
    </div>
    <!-- 區塊二 end-->

    <!-- 區塊三(篩選按鈕) start-->
    <div class="mb-4 lg:mb-14">
      <div class="w-full flex flex-wrap gap-4">
        <button
          v-for="country in countries"
          class="basic"
          :class="[activeFilterCountry === country.location ? 'pink-fill' : 'pink-outline']"
          @click="FilterByCountry(country.location)"
          :key="country.id">
          {{ country.location }}
        </button>
      </div>
    </div>
    <!-- 區塊三(篩選按鈕) end-->

    <!-- 區塊四(表演者總覽 &follow) start -->

    <div>
      <!--  grid  -->
      <ul class="w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <li v-for="artist in aristData.artists" :key="artist.id" class="flex flex-row justify-between items-center p-2.5 md:border-[1px] border-black-60 rounded-2xl">
          <RouterLink :to="`/artists/${artist.id}`" class="w-[81%] flex items-center">
            <img class="size-[70px] object-cover rounded-full" :src="artist.cover_urls.square" :alt="artist.name" />
            <div class="ml-4">
              <div class="pr-3">
                <p class="text-lg md:text-xl">{{ artist.name }}</p>
                <p class="text-sm text-black-60">{{ artist.follower_count }} fans</p>
              </div>
              <p class="text-sm text-black-60">{{ artist.concert_count }} concerts</p>
            </div>
          </RouterLink>
          <HoverCard>
            <HoverCardTrigger>
              <button :key="artist.id" class="basic text-base" :class="artist.is_followed ? 'tiffany-follow' : 'tiffany-outline'" @click="toggleFollowArtists(artist.is_followed, artist.id)">
                follow
              </button>
            </HoverCardTrigger>
            <!-- 辨識登入狀態，未登入才顯示提示框 -->
            <HoverCardContent v-if="AccessToken === undefined"> 請登入開啟追蹤功能 </HoverCardContent>
          </HoverCard>
        </li>
      </ul>
    </div>
    <!-- 區塊四(表演者總覽 &follow) end -->

    <!-- Pagination start -->
    <Pagination v-slot="{ page }" :total="aristData.pagination.total_pages" :sibling-count="1" show-edges :default-page="1" class="flex justify-center my-5 lg:my-12">
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
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
    <!-- Pagination end -->

    <hr class="border-b-2 border-black-60">
  </section>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import BannerComponent from '@/components/custom/BannerComponent.vue';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';
</script>

<script>
// 引入pinia 內容
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useArtistsStore } from '@/stores/artists';

// 引入hooks
import useDarkAlert from '@/hooks/useDarkAlert';

// 引入API方法
import { getArtists, getInputArtist } from '../../api/index';
import { useDebounceFn } from '@vueuse/core';
import { loadingStore } from '@/stores/isLoading';
const { setIsLoading } = loadingStore();

const { swalWithStylingButtons } = useDarkAlert();


export default {
  data() {
    return {
      activeFilterCountry: '',
      isFollowActive: {},
      bannerInputPlaceholder: '請輸入表演者名稱',
      aristData: {
        artists: [],
        searchWord: '',
        pagination: {},
        param: '',
      },
      countries: [
        {
          id: 1,
          location: '全部',
        },
        {
          id: 2,
          location: '日本',
        },
        {
          id: 3,
          location: '韓國',
        },
        {
          id: 4,
          location: '歐美',
        },
        {
          id: 5,
          location: '其它',
        },
      ],
    };
  },
  computed: {
    ...mapState(useUserStore, ['AccessToken']),
  },
  methods: {
    ...mapActions(useArtistsStore, ['postFollowConcetsData', 'deleteFollowConcetsData']),

    async toggleFollowArtists(isfollow, id) {
      // 未登入狀態
      if (!this.AccessToken) {
        swalWithStylingButtons
          .fire({
            title: '登入後才能用追蹤功能喔！',
            showCancelButton: true,
            confirmButtonText: '前往登入',
          })
          .then((result) => {
            if (result.isConfirmed) {
              window.location.href = 'login#/login';
            }
          });
        return;
      }

      // 登入且未追蹤狀態
      if (!isfollow) {
        // 新增追蹤
        this.postFollowConcetsData(id)
          .then(() => this.getArtistsData());
        
          return
      } else {
        // 登入且追蹤狀態 => 刪除追蹤
        this.deleteFollowConcetsData(id)
          .then(() => this.getArtistsData());
      }

      return;
    },
    async getArtistsData(page = 1) {
      try {
        setIsLoading();

        const res = await getArtists(page);
        this.aristData.artists = res.data.data;
        this.aristData.pagination = res.data.pagination;
        // console.log(this.aristData.pagination)
      } catch (error) {
        console.log(error);
        
      } finally {
        setIsLoading();
      }
    },
    FilterByCountry(country = '全部') {

      this.activeFilterCountry = country;

      country === '全部' ? (this.aristData.param = '') : (this.aristData.param = country);

      setIsLoading()
      this.searchArtists(this.aristData.searchWord);
      setTimeout(() => {
        setIsLoading();
      }, 500);
    },
    searchArtists: useDebounceFn(async function (searchText, page = 1) {
      this.aristData.searchWord = searchText;

      try {
        const res = await getInputArtist(this.aristData.searchWord, this.aristData.param, page);

        this.aristData.artists = res.data.data;
        console.log(this.aristData.artists);
      } catch (error) {
        console.log(error);
      }
    }, 300),
  },
  mounted() {
    this.getArtistsData();
    this.FilterByCountry();
  },
};
</script>
<style lang="scss" scoped></style>
