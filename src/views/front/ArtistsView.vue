<template>
  <!-- swiper start -->
  <!-- swiper end -->

  <main class="container relative pb-[128px] lg:pb-[192px]">
    <!-- 區塊二 start-->
    <section class="grid grid-flow-col">
      <BannerComponent :prop-placeholder="bannerInputPlaceholder" @searchMethod="searchArtists">
        <template #mainTitle>ARTISTS</template>
      </BannerComponent>
    </section>
    <!-- 區塊二 end-->

    <!-- 區塊三(篩選按鈕) start-->
    <section class="mb-4 lg:mb-14 mt-4">
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
    </section>
    <!-- 區塊三(篩選按鈕) end-->

    <!-- 區塊四(表演者總覽 &follow) start -->
    <section>
      <!-- 搜尋不到文字 -->
      <p v-if="!aristData.artists?.length" class="p-14 font-semibold tracking-tighter text-base lg:text-lg text-white text-center">抱歉，搜尋不到相關資源</p>

      <!--  grid  -->
      <ul class="w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <li v-for="artist in aristData.artists" :key="artist.id" class="flex flex-row justify-between items-center px-4 py-3 md:border-2 border-black-80 rounded-2xl">
          <RouterLink :to="`/artists/${artist.id}`" class="w-[81%] flex items-center">
            <img class="size-[70px] object-cover rounded-full" :src="artist.cover_urls.square" :alt="artist.name" />
            <div class="ml-4">
              <p class="text-base lg:text-lg">{{ artist.name }}</p>
              <div class="flex gap-3">
                <p class="text-tiny text-black-40">{{ artist.follower_count }} 位粉絲</p>
                <p class="text-tiny text-black-60 hidden xs:block">{{ artist.concert_count }} 場演唱會</p>
              </div>
              <p class="text-tiny text-black-60 block xs:hidden">{{ artist.concert_count }} concerts</p>
            </div>
          </RouterLink>
          <AlertDialog>
            <AlertDialogTrigger class="flex">
              <button v-if="!AccessToken" class="basic-follow tiffany-outline text-base">Follow</button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>請登入後追蹤</AlertDialogTitle>
                <AlertDialogDescription></AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <router-link to="/login"> 前往登入 </router-link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <button
            v-if="AccessToken"
            :key="artist?.id"
            class="basic-follow text-base"
            :class="artist.is_followed ? 'tiffany-follow' : 'tiffany-outline'"
            @click="toggleFollowArtists(artist.is_followed, artist.id)">
            {{ artist.is_followed ? 'Following' : 'Follow' }}
          </button>
        </li>
      </ul>
    </section>
    <!-- 區塊四(表演者總覽 &follow) end -->

    <!-- Pagination start -->
    <Pagination
      v-if="aristData.artists?.length"
      v-slot="{ page }"
      :page="searchPage"
      :total="aristData.pagination.total_pages * 10"
      :sibling-count="1"
      show-edges
      :default-page="1"
      class="flex justify-center my-5 lg:my-12 pt-16">
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationFirst @click="FilterByPage(1)" />
        <PaginationPrev @click="FilterByPage(aristData.pagination.current_page - 1)" />

        <template v-for="item in items">
          <PaginationListItem v-if="item.type === 'page'" :key="item" :value="item.value" as-child>
            <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'" @click="FilterByPage(item.value)" :disabled="item.value === page">
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext @click="FilterByPage(aristData.pagination.current_page + 1)" />
        <PaginationLast @click="FilterByPage(aristData.pagination.total_pages)" />
      </PaginationList>
    </Pagination>
    <!-- Pagination end -->

    <hr class="border-b-2 border-black-40" />
  </main>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import BannerComponent from '@/components/custom/BannerComponent.vue';
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';
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
// 引入pinia 內容
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useArtistsStore } from '@/stores/artists';

// 引入API方法
import { getArtists, getInputArtist } from '../../api/index';
import { useDebounceFn } from '@vueuse/core';
import { useToast } from '@/components/ui/toast/use-toast';
import { loadingStore } from '@/stores/isLoading';
const { toast } = useToast();
const { setIsLoading } = loadingStore();

export default {
  data() {
    return {
      activeFilterCountry: '',
      isFollowActive: {},
      bannerInputPlaceholder: '輸入表演者名稱',
      searchPage: 1,
      aristData: {
        artists: [],
        searchWord: '',
        pagination: {},
        param: '',
      },
      countries: [
        { id: 1, location: '全部' },
        { id: 2, location: '台灣' },
        { id: 3, location: '日本' },
        { id: 4, location: '韓國' },
        { id: 5, location: '歐美' },
        { id: 6, location: '其它' },
      ],
    };
  },
  computed: {
    ...mapState(useUserStore, ['AccessToken']),
  },
  methods: {
    ...mapActions(useArtistsStore, ['postFollowConcetsData', 'deleteFollowConcetsData']),

    async toggleFollowArtists(isfollow, id) {
      // 登入且未追蹤狀態
      if (!isfollow) {
        // 新增追蹤
        this.handleFollowAction(id, '新增', '追蹤成功');
      } else {
        // 登入且追蹤狀態 => 刪除追蹤
        this.handleFollowAction(id, '刪除', '刪除追蹤成功');
      }
    },
    async getArtistsData(page = 1) {
      try {
        const res = await getArtists(page);
        this.aristData.artists = res.data.data;
        this.aristData.pagination = res.data.pagination;
      } catch (error) {
        console.error(error);
      }
    },
    FilterByCountry(country = '全部') {
      this.activeFilterCountry = country;

      country === '全部' ? (this.aristData.param = '') : (this.aristData.param = country);

      setIsLoading();
      this.searchArtists(this.aristData.searchWord);
      setTimeout(() => {
        setIsLoading();
      }, 500);
    },
    FilterByPage(page) {
      setIsLoading();
      this.searchArtists(this.aristData.searchWord, page);

      setTimeout(() => {
        setIsLoading();
      }, 500);
    },
    searchArtists: useDebounceFn(async function (searchText, page = 1) {
      this.aristData.searchWord = searchText;
      this.searchPage = page;

      try {
        const res = await getInputArtist(this.aristData.searchWord, this.aristData.param, page);

        this.aristData.artists = res.data.data;
        this.aristData.pagination = res.data.pagination;
      } catch (error) {
        console.error(error);
      }
    }, 300),
    handleFollowAction(id, actionType, msg) {
      const followAction = actionType === '新增' ? this.postFollowConcetsData : this.deleteFollowConcetsData;

      followAction(id)
        .then(() => {
          // 不能使用 this.getArtistsData()
          this.FilterByCountry(this.activeFilterCountry);
        })
        .then(() => {
          // 延遲顯示 toastMsg，等待 getArtistsData 完成後
          setTimeout(() => this.toastMsg(msg), 300);
        });
    },
    toastMsg(msg) {
      toast({
        title: msg,
        description: '',
      });
    },
  },
  mounted() {
    this.getArtistsData();
    this.FilterByCountry();
  },
};
</script>
