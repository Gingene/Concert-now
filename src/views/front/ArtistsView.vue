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
        <button v-for="country in countries" class="basic" :class="[activeBtnOneIndex === country.id ? 'tiffany-blur-fill' : 'tiffany-blur']" @click="toggleBtnOne(country.id)" :key="country.id">
          {{ country.location }}
        </button>
      </div>
    </div>
    <!-- 區塊三(篩選按鈕) end-->

    <!-- 區塊四(表演者總覽 &follow) start -->
    <div class="py-5">
      <!--  grid  -->
      <ul class="w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <RouterLink :to="`/artists/${artist.id}`" class="flex flex-row justify-between items-center p-2.5 md:border-[1px] rounded-2xl" v-for="artist in artists" :key="artist.id">
          <div class="w-[81%] flex items-center">
            <img class="size-[70px] object-cover rounded-full" :src="artist.cover_urls.square" :alt="artist.name" />
            <div class="ml-4">
              <div class="pr-3">
                <p class="text-lg md:text-xl">{{ artist.name }}</p>
                <p class="text-[13px] text-slate-500">{{ artist.follower_count }} fans</p>
              </div>
              <p class="text-[13px">{{ artist.concert_count }} concerts</p>
            </div>
          </div>
          <button class="basic tiffany-outline" :key="artist.id">follow</button>
        </RouterLink>
      </ul>
    </div>
    <!-- 區塊四(表演者總覽 &follow) end -->
  </section>
</template>

<script setup>
import BannerComponent from '@/components/custom/BannerComponent.vue';
</script>

<script>
import { getArtists, getInputArtist } from '../../api/index';
import { useDebounceFn } from '@vueuse/core';

export default {
  data() {
    return {
      activeBtnOneIndex: 0,
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
          location: '其他',
        },
      ],
    };
  },
  methods: {
    toggleBtnOne(index) {
      this.activeBtnOneIndex = index;
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
  },
  mounted() {
    this.getArtistsData();
  },
};
</script>
<style lang="scss" scoped></style>
