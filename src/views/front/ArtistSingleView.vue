<template>
  <div class="container py-16">

    <!-- 表演者圖片(區塊一) start -->
    <section class="artist-intro mb-10 md:mb-[6.5rem] lg:mb-40">
      <div class="flex justify-between mb-5">
        <div class="flex" v-for="keyword in singleArtist?.keywords">
          <p class="mr-3">{{ keyword }} /</p>
        </div>
        <button class="basic tiffany-outline ml-auto">follow</button>
      </div>
      <div class="w-[85%] lg:w-[63%] mx-auto xl:relative">
        <img class="rounded-xl mb-5" 
          :src="singleArtist?.cover_urls?.horizontal" 
          :alt="singleArtist?.name" 
        />
        <div class="flex justify-center xl:absolute bottom-[-13%] right-[-12%]">
          <div class="relative">
            <div class="bg-artistName absolute top-[-1rem] left-[1rem] text-stroke-light z-[-1]">{{ singleArtist?.name }}</div>
            <div class="bg-artistName">{{ singleArtist?.name }}</div>
          </div>
        </div>
      </div>
    </section>
    <!-- 表演者圖片(區塊一) end -->

    <!-- 盒子(含區塊二及區塊三) -->
    <div class="md:flex md:justify-between md:items-center md:mb-2.5 lg:w-[70%] lg:mx-auto">

      <!-- 表演者介紹(區塊二) start -->
      <section class="mb-[150px] md:mb-0 md:w-[45%]">
        <p class="break-all text-justify pb-10 md:pb-6 md:text-[12px] lg:text-[13px]">
          {{ singleArtist?.description }}
        </p>
        <hr class="pb-10 md:pb-6" />
        <p class="hidden font-semibold pb-4">HITS</p>
        <div class="gap-3 flex flex-row md:flex-col flex-wrap items-center md:items-end">
          <div 
            v-for="(song, index) in singleArtist?.popular_songs" 
            :key="index"
            class="song border text-center rounded-2xl py-[8px] px-[11px]"
          >
            {{ song }}
          </div>
        </div>
      </section>
      <!-- 表演者介紹(區塊二) end -->

      <!-- 表演者介紹(區塊三) start -->
      <section class="artist-honors-relative md:w-[50%]">
        <p class="honors text-stroke-light bg-artistName text-4xl md:text-[4.5rem] xl:text-7xl">HONORS</p>
        <p class="bg-shadow-trans-text artist-honors w-[90%] md:w-[100%] ml-auto text-center break-keep py-[50px] px-[10px] md:py-[60px] rounded-[31px] z-[-1]">
          <span 
            v-for="(honor, index) in singleArtist?.honors"
            :key="index"
          >
             {{ honor }} <br />-<br /> 
          </span>
        </p>
      </section>
      <!-- 表演者介紹(區塊三) end -->
    </div>

    <!-- 即將舉辦(區塊四) start -->
    <div>
      <TitleComponent 
        class="flex justify-center mb-[30px]"
      >
        <template #subTitle>UPCOMING</template>
        <template #mainTitle>即將舉辦</template>
      </TitleComponent>

      <div 
        v-if="singleArtist?.upcoming_concerts.length > 0"
        class="concert-box border rounded-[25px] py-[10px] px-[9px] flex justify-between items-center lg:w-[70%] lg:mx-auto"
      >
        <div 
          v-for="upcoming in singleArtist?.upcoming_concerts"
          :key="upcoming.id"
          class="flex items-center"
        >
          <div class="concert-box-time  mr-3.5 md:mr-[45px] xl:mr-[120px]">
            <p class="text-[12px] sm:text-[15px] md:text-[19px]">
              {{ moment(upcoming.holding_time).format('MM/DD') }}
            </p>
            <p class="text-[14px] sm:text-[18px] md:text-[22px]">
              {{ moment(upcoming.holding_time).format('YYYY') }}
            </p>
          </div>
          <div>
            <p class="text-[14px] sm:text-[17px] md:text-[21px]">
              {{ upcoming?.title }}
            </p>
            <p class="text-[13px] sm:text-[16px] md:text-[18px] text-gray-300">
              {{ upcoming?.venue?.title }}
            </p>
          </div>
        </div>
        <button class="flex items-center">
          <!-- <font-awesome-icon icon="fa-solid fa-bookmark" class="text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]" /> -->
          <font-awesome-icon icon="fa-regular fa-bookmark" class="text-3xl text-[var(--pink)] hover:translate-y-[-.25rem]" />
        </button>
      </div>

      <div 
        v-else
        class="concert-box border rounded-[25px] py-[10px] px-[9px] flex justify-center items-center lg:w-[70%] lg:mx-auto" 
      >
        目前沒有資料 ~ ~ ~
      </div>
    </div>
    <!-- 即將舉辦(區塊四) end -->

    <!-- 已結束(區塊五) start -->
    <div class="mb-[150px]">
      <TitleComponent class="flex justify-center mb-[30px]">
        <template #subTitle>HISTORY</template>
        <template #mainTitle>已結束</template>
      </TitleComponent>

      <div 
        v-if="singleArtist?.historical_concerts.length > 0"
        class="concert-box border rounded-[25px] py-[10px] px-[9px] flex justify-between items-center lg:w-[70%] lg:mx-auto"
      >
        <div
          v-for="historical in singleArtist?.historical_concerts"
          :key="historical.id" 
          class="flex items-center"
        >
          <div class="concert-box-time mr-3.5 md:mr-[45px] xl:mr-[120px]">
            <p class="text-[12px] sm:text-[15px] md:text-[19px]">
              {{ moment(historical.holding_time).format('MM/DD') }}
            </p>
            <p class="text-[14px] sm:text-[18px] md:text-[22px]">
              {{ moment(historical.holding_time).format('YYYY') }}
            </p>
          </div>
          <div>
            <p class="text-[14px] sm:text-[17px] md:text-[21px]">Tom Jones湯姆瓊斯演唱會2024台北站</p>
            <p class="text-[13px] sm:text-[16px] md:text-[18px] text-gray-300">台北國際會議中心TICC</p>
          </div>
        </div>
        <button class="flex items-center">
          <!-- <font-awesome-icon icon="fa-solid fa-bookmark" class="text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]" /> -->
          <font-awesome-icon icon="fa-regular fa-bookmark" class="text-3xl text-[var(--pink)] hover:translate-y-[-.25rem]" />
        </button>
      </div>
      <div 
        v-else
        class="concert-box border rounded-[25px] py-[10px] px-[9px] flex justify-center items-center lg:w-[70%] lg:mx-auto" 
      >
        目前沒有資料 ~ ~ ~
      </div>
    </div>
    <!-- 已結束(區塊五) end -->
  </div>
</template>

<script setup>
import TitleComponent from '@/components/custom/TitleComponent.vue';
</script>

<script>
import { getSingleArtist } from '../../api/index';
import moment from 'moment';

export default {
  data() {
    return {
      singleArtist: null,
    };
  },
  // computed: {
  //   artistId() {
  //     console.log(this.id);
  //   },
  // },
  methods: {
    async getSingleArtistData(id) {
      try {
        const res = await getSingleArtist(id);
        this.singleArtist = res.data.data;

      } catch (error) {
        console.log(error);
      }
    },
    // changeTime() {
    //   // const hodingYear = moment(this.singleArtist?.upcoming_concerts[0].holding_time).format('YYYY');
    //   const hodingDate = moment(this.singleArtist?.upcoming_concerts[0].holding_time).format("YYYY/MM/DD");
    //   console.log(hodingDate);
    // },
  },
  mounted() {
    this.getSingleArtistData(Number(this.$route.params.id));
  },
};
</script>
<style lang="scss" scoped>
.bg-artistName {
  font-weight: 900;
  font-size: 3.5rem;
  letter-spacing: calc(calc(4.5rem + 1vw) * -0.04);
  overflow-x: hidden;
  text-wrap: nowrap;
}

@media screen and (min-width: 1280px) {
  .bg-artistName {
    font-size: 6rem;
    letter-spacing: calc(calc(6rem + 1vw) * -0.04);
  }
}
@media screen and (min-width: 1536px) {
  .bg-artistName {
    font-size: 7rem;
    letter-spacing: calc(calc(7rem + 1vw) * -0.04);
  }
}

.song {
  font-size: 11px;
}

// 區塊三
.artist-honors-relative {
  position: relative;

  .honors {
    position: absolute;
    transform: rotate(-90deg);
    z-index: 2;
    top: 43px;
    left: -95px;
  }

  .artist-honors {
    font-size: 12px;
  }
}

@media screen and (min-width: 450px) {
  .artist-honors-relative {
    .honors {
      top: 30%;
      left: -12%;
    }
  }

  .concert-box {
    padding: 9px 20px;
    .concert-box-time {
      margin-right: 30px;
    }
  }
}

@media screen and (min-width: 768px) {
  .artist-honors-relative {
    order: -1;
    .honors {
      top: 24px;
      left: -163px;
    }

    .artist-honors {
      font-size: 13px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .artist-honors-relative {
    .honors {
      top: 66px;
      left: -129px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .artist-honors-relative {
    .honors {
      top: 26px;
      left: -245px;
    }

    .artist-honors {
      font-size: 16px;
    }
  }
}
</style>
