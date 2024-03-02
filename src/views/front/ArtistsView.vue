<template>
  <!-- swiper start -->
  <!-- swiper end -->

  <section class="container relative">
    <!-- 區塊二 start-->
    <div class="grid grid-flow-col">
      <h2 class="test text-[3.5rem] font-display sm:text-display-3 font-black flex flex-col leading-none pb-4">
        <span>DISCOVER</span>
        <span class="text-stroke">ARTISTS</span>
        <span>NOW</span>
      </h2>
      <div class="grid grid-cols-3">
        <div class="row-start-9 sm:row-start-8 col-start-3 md:col-start-1 -ms-32 sm:-ms-64 lg:-ms-[400px] xl:-ms-[500px] 2xl:-ms-[600px]">
          <Input
            placeholder="輸入表演者名稱"
            class="bg-black-0 box-shadow-light1-hover focus:text-black-60 focus-visible:box-shadow-light1-hover focus-visible:outline-0 hover:box-shadow-light1-hover" />
        </div>
      </div>
    </div>
    <!-- 區塊二 end-->

    <!-- 區塊三(篩選按鈕) start-->
    <div>
      <div class="w-full flex gap-4 mb-3.5">
        <button v-for="country in countries" class="basic" :class="[activeBtnOneIndex === country.id ? 'tiffany-blur-fill' : 'tiffany-blur']" :key="country.id" @click="toggleBtnOne(country.id)">
          {{ country.location }}
        </button>
      </div>
    </div>
    <!-- 區塊三(篩選按鈕) end-->

    <!-- 區塊四(表演者總覽 &follow) start -->
    <div class="py-5">
      <!--  grid  -->
      <ul class="w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <!-- <li class="flex flex-row justify-between items-center p-2.5 md:border-[1px] rounded-2xl" v-for="artist in artists" :key="artist.id"> -->

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
        <!-- </li> -->
      </ul>
    </div>
    <!-- 區塊四(表演者總覽 &follow) end -->
  </section>
</template>

<script setup>
import { Input } from '@/components/ui/input';
</script>

<script>
import { getArtists } from '../../api/index';

export default {
  data() {
    return {
      activeBtnOneIndex: 0,
      activeBtnTwoIndex: 0,
      artists: [],
      times: [
        {
          id: 1,
          date: '所有時間',
        },
        {
          id: 2,
          date: '本日',
        },
        {
          id: 3,
          date: '本周',
        },
        {
          id: 4,
          date: '本月',
        },
      ],
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
    toggleBtnTwo(index) {
      this.activeBtnTwoIndex = index;
    },
    async getArtistsData() {
      try {
        const res = await getArtists();
        // console.log(res.data.data)
        this.artists = res.data.data;
        console.log(this.artists);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getArtistsData();
  },
};
</script>
<style lang="scss" scoped></style>
