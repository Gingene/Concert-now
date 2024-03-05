<template>
  <!-- swiper start -->
  <!-- swiper end -->

  <section class="container relative">
    <!-- 區塊二 start-->
    <div class="grid grid-flow-col">
      <BannerComponent :prop-placeholder="bannerInputPlaceholder" @searchMethod="searchArtists">
        <template #mainTitle>ARTISTS</template>
      </BannerComponent>
    </div>
    <!-- 區塊二 end-->

    <!-- 區塊三(篩選按鈕) start-->
    <div>
      <div class="w-full flex gap-4 mb-3.5">
        <button v-for="country in countries" class="basic" :class="[activeFilterIndex === country.id ? 'pink-fill' : 'pink-outline']" @click="toggleFilterBtn(country.id)" :key="country.id">
          {{ country.location }}
        </button>
      </div>
    </div>
    <!-- 區塊三(篩選按鈕) end-->

    <!-- 區塊四(表演者總覽 &follow) start -->
    <div class="py-5">
      <!--  grid  -->
      <ul class="w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <li v-for="artist in artists" :key="artist.id" class="flex flex-row justify-between items-center p-2.5 md:border-[1px] border-black-60 rounded-2xl">
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
  </section>
</template>

<script setup>
import BannerComponent from '@/components/custom/BannerComponent.vue';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
</script>

<script>
// 引入pinia 內容
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { useArtistsStore } from '@/stores/artists';

// 引入hooks
import useDarkAlert from '@/hooks/useDarkAlert';
const { swalWithStylingButtons } = useDarkAlert();

// 引入API方法
import { getArtists, getInputArtist } from '../../api/index';
import { useDebounceFn } from '@vueuse/core';

export default {
  data() {
    return {
      activeFilterIndex: 0,
      isFollowActive: {},
      followState: null, //追蹤狀態
      bannerInputPlaceholder: '請輸入表演者名稱',
      artists: [],
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
    toggleFilterBtn(index = 1) {
      console.log(index);
      this.activeFilterIndex = index;
    },
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
        this.postFollowConcetsData(id).then(() => this.getArtistsData());
      } else {

        // 登入且追蹤狀態 => 刪除追蹤
        this.deleteFollowConcetsData(id).then(() => this.getArtistsData());
      }

      return; 
    },
    async getArtistsData() {
      try {
        const res = await getArtists();
        this.artists = res.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    searchArtists: useDebounceFn(async function (searchText) {
      try {
        const res = await getInputArtist(searchText);
        this.artists = res.data.data;
      } catch (error) {
        console.log(error);
      }
    }, 300),
    // async postFollowConcetsData(id) {
    //   try {
    //     const res = await postFollowConcets(id)
    //     console.log(res)

    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
    // async deleteFollowConcetsData(id) {
    //   try {
    //     const res = await deleteFollowConcets(id)
    //     console.log(res)

    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    // prevenLink(event) {
    //   if(event.target.classList.contains("followDom")) {
    //     console.log('follow click')
    //   }
    //   // let followP = document.querySelectorAll('.followDom');
    //   // console.log(followP);
    //   // console.log(this.$el.querySelector(".followDom"))
    // },
    // prevenLink(event) {
    //   if (event && event.target.classList.contains('followDom')) {
    //     console.log('follow click');
    //     // event.stopPropagation()
    //     event.preventDefault();
    //   }
    // },
  },
  mounted() {
    this.getArtistsData();
    this.toggleFilterBtn();
    // this.prevenLink()
    // console.log(this.$refs)
    // console.log(follPs)
  },
};
</script>
<style lang="scss" scoped></style>
