<template>
  <div class="container space-y-[20px] md:space-y-[58px] lg:space-y-[117px] pt-16 pb-[128px] lg:pb-[192px]">
    <!-- 表演者圖片(區塊一) start -->
    <section class="artist-intro mb-10 md:mb-[6.5rem] lg:mb-40">
      <div class="flex justify-between mb-5">
        <div class="flex">
          <p class="mr-1" v-for="(keyword, index) in singleArtist?.keywords" :key="index">
            {{ keyword }}
            <span v-if="singleArtist.keywords?.length - 1 !== index">/</span>
          </p>
        </div>
        <HoverCard>
          <HoverCardTrigger>
            <button
              :key="singleArtist?.id"
              class="basic-follow text-base"
              :class="singleArtist?.is_followed ? 'tiffany-follow' : 'tiffany-outline'"
              @click="toggleFollowArtist(singleArtist.is_followed, singleArtist.id)">
              {{ singleArtist?.is_followed ? 'Following' : 'Follow' }}
            </button>
          </HoverCardTrigger>
          <!-- 辨識登入狀態，未登入才顯示提示框 -->
          <HoverCardContent v-if="AccessToken === undefined"> 請登入開啟追蹤功能 </HoverCardContent>
        </HoverCard>
      </div>
      <div class="w-[85%] lg:w-[63%] mx-auto xl:relative">
        <img class="rounded-xl mb-5" :src="singleArtist?.cover_urls?.horizontal" :alt="singleArtist?.name" />
        <div class="flex justify-center xl:absolute bottom-[-13%] right-[-12%]">
          <div class="relative">
            <div class="bg-artistName font-lato absolute top-[-1rem] left-[1rem] text-stroke-light z-[-1]">{{ singleArtist?.name }}</div>
            <div class="bg-artistName font-lato">{{ singleArtist?.name }}</div>
          </div>
        </div>
      </div>
    </section>
    <!-- 表演者圖片(區塊一) end -->

    <!-- 盒子(含區塊二及區塊三) -->
    <div class="md:flex md:justify-between md:items-center lg:w-[70%] lg:mx-auto">
      <!-- 表演者介紹(區塊二) start -->
      <section class="mb-[150px] md:mb-0 md:w-[45%]">
        <p class="break-all text-justify pb-10 md:pb-6 md:text-[12px] lg:text-[13px]">
          {{ singleArtist?.description }}
        </p>
        <hr class="pb-10 md:pb-6" />
        <p class="hidden font-semibold pb-4">HITS</p>
        <div class="gap-3 flex flex-row md:flex-col flex-wrap items-center md:items-end">
          <div v-for="(song, index) in singleArtist?.popular_songs" :key="index" class="song border text-center rounded-2xl py-[8px] px-[11px]">
            {{ song }}
          </div>
        </div>
      </section>
      <!-- 表演者介紹(區塊二) end -->

      <!-- 表演者介紹(區塊三) start -->
      <section class="artist-honors-relative md:w-[50%]">
        <p class="honors text-stroke-light bg-artistName">HONORS</p>
        <div class="bg-shadow-trans-text artist-honors w-[90%] md:w-[100%] ml-auto text-center break-keep py-[50px] px-[10px] md:py-[60px] rounded-[31px] z-[-1]">
          <div v-for="(honor, index) in singleArtist?.honors" :key="index">
            {{ honor }} <span v-if="singleArtist.honors?.length - 1 !== index"><br />-<br /></span>
          </div>
        </div>
      </section>
      <!-- 表演者介紹(區塊三) end -->
    </div>

    <!-- 即將舉辦(區塊四) start -->
    <div>
      <TitleComponent class="flex justify-center mb-[30px]">
        <template #subTitle>UPCOMING</template>
        <template #mainTitle>即將舉辦</template>
      </TitleComponent>
      <template v-if="singleArtist?.upcoming_concerts.length > 0">
        <div
          v-for="upcoming in singleArtist?.upcoming_concerts"
          :key="upcoming.id"
          class="concert-box border border-black-60 rounded-[25px] py-[10px] px-[9px] mb-6 flex justify-between items-center lg:w-[70%] lg:mx-auto">
          <div class="flex items-center">
            <div class="concert-box-time text-black-20 mr-3.5 md:mr-[45px] xl:mr-[120px]">
              <p class="text-[12px] sm:text-[15px] md:text-[19px]">
                {{ moment(upcoming.holding_time).format('MM/DD') }}
              </p>
              <p class="text-[14px] sm:text-[18px] md:text-[22px]">
                {{ moment(upcoming.holding_time).format('YYYY') }}
              </p>
            </div>
            <div>
              <RouterLink :to="`/concerts/${upcoming?.id}`" class="text-[14px] sm:text-[17px] md:text-[21px]">
                {{ upcoming?.title }}
              </RouterLink>
              <p class="text-[13px] sm:text-[16px] md:text-[18px] text-black-60">
                {{ upcoming?.venue?.title }}
              </p>
            </div>
          </div>
          <HoverCard>
            <HoverCardTrigger>
              <button class="mb-auto" @click="changeSaveConcertsMode(upcoming.id)">
                <font-awesome-icon v-if="saveState?.some((item) => item.id === upcoming?.id)" icon="fa-solid fa-bookmark" class="text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]" />
                <font-awesome-icon v-else icon="fa-regular fa-bookmark" class="text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]" />
              </button>
            </HoverCardTrigger>
            <!-- 辨識登入狀態，未登入才顯示提示框 -->
            <HoverCardContent v-if="AccessToken === undefined"> 登入開啟收藏功能 </HoverCardContent>
          </HoverCard>
        </div>
      </template>

      <div v-else class="concert-box border border-black-60 rounded-[25px] py-[10px] px-[9px] flex justify-center items-center lg:w-[70%] lg:mx-auto">目前沒有資料 ~ ~ ~</div>
    </div>
    <!-- 即將舉辦(區塊四) end -->

    <!-- 已結束(區塊五) start -->
    <div>
      <TitleComponent class="flex justify-center mb-[30px]">
        <template #subTitle>HISTORY</template>
        <template #mainTitle>已結束</template>
      </TitleComponent>

      <template v-if="singleArtist?.historical_concerts.length > 0">
        <div
          v-for="historical in singleArtist?.historical_concerts"
          :key="historical.id"
          class="concert-box border border-black-60 rounded-[25px] py-[10px] px-[9px] mb-6 flex justify-between items-center lg:w-[70%] lg:mx-auto">
          <div class="flex items-center">
            <div class="concert-box-time text-black-20 mr-3.5 md:mr-[45px] xl:mr-[120px]">
              <p class="text-[12px] sm:text-[15px] md:text-[19px]">
                {{ moment(historical.holding_time).format('MM/DD') }}
              </p>
              <p class="text-[14px] sm:text-[18px] md:text-[22px]">
                {{ moment(historical.holding_time).format('YYYY') }}
              </p>
            </div>
            <div>
              <RouterLink :to="`/concerts/${historical.id}`" class="text-[14px] sm:text-[17px] md:text-[21px]">
                {{ historical?.title }}
              </RouterLink>
              <p class="text-[12px] sm:text-[15px] md:text-[16px] text-black-60">
                {{ historical?.venue?.title }}
              </p>
            </div>
          </div>
          <HoverCard>
            <HoverCardTrigger>
              <button class="mb-auto" @click="changeSaveConcertsMode(historical.id)">
                <font-awesome-icon v-if="saveState?.some((item) => item.id === historical?.id)" icon="fa-solid fa-bookmark" class="text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]" />
                <font-awesome-icon v-else icon="fa-regular fa-bookmark" class="text-3xl ml-4 text-[var(--pink)] hover:translate-y-[-.25rem]" />
              </button>
            </HoverCardTrigger>
            <!-- 辨識登入狀態，未登入才顯示提示框 -->
            <HoverCardContent v-if="AccessToken === undefined"> 請登入開啟收藏功能 </HoverCardContent>
          </HoverCard>
        </div>
      </template>

      <div v-else class="concert-box border border-black-60 rounded-[25px] py-[10px] px-[9px] flex justify-center items-center lg:w-[70%] lg:mx-auto">目前沒有資料 ~ ~ ~</div>
    </div>
    <!-- 已結束(區塊五) end -->
  </div>
</template>

<script setup>
import TitleComponent from '@/components/custom/TitleComponent.vue';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
</script>

<script>
// 引入pinia 內容
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { loadingStore } from '@/stores/isLoading';

// 引入hooks
import useDarkAlert from '@/hooks/useDarkAlert';

// 引入API方法
import { getSingleArtist, getSavedConcerts, postSaveConcerts, deleteSaveConcerts } from '../../api/index';
import moment from 'moment';
import { useArtistsStore } from '@/stores/artists';
import { useToast } from '@/components/ui/toast/use-toast';
const { setIsLoading } = loadingStore();
const { toast } = useToast();
const { swalWithStylingButtons } = useDarkAlert();

export default {
  data() {
    return {
      checkData: null,
      singleArtist: null,
      savedConcertsData: null,
    };
  },
  props: ['id'],
  computed: {
    ...mapState(useUserStore, ['AccessToken']),

    saveState() {
      return this.savedConcertsData;
    },
  },
  watch: {
    id(newId) {
      setIsLoading();
      this.getSingleArtistData(newId);

      setTimeout(() => {
        setIsLoading();
      }, 300);
    },
  },
  methods: {
    ...mapActions(useArtistsStore, ['postFollowConcetsData', 'deleteFollowConcetsData']),

    async getSingleArtistData(id) {
      try {
        const res = await getSingleArtist(id);
        this.singleArtist = res.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    // 追蹤功能
    toggleFollowArtist(isfollow, id) {
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
        this.handleFollowAction(id, '新增', '追蹤成功');
      } else {
        // 登入且追蹤狀態 => 刪除追蹤
        this.handleFollowAction(id, '刪除', '刪除追蹤成功');
      }
    },
    // 收藏功能
    changeSaveConcertsMode(id) {
      // 未登入
      if (this.AccessToken === undefined) {
        // 自訂alert樣式
        swalWithStylingButtons
          .fire({
            title: '登入後才能用收藏功能喔！',
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

      // 判別是否已收藏
      if (this.savedConcertsData?.some((item) => item.id === id)) {
        // 刪除收藏
        this.handleSaveAction(id, '刪除', '已加入收藏');
      } else {
        // 新增收藏
        this.handleSaveAction(id, '新增', '已取消收藏');
      }
    },
    // 取得 收藏演唱會資料
    async getSavedConcertsData() {
      try {
        const res = await getSavedConcerts();
        this.savedConcertsData = res.data.data.saved_concerts;
      } catch (error) {
        console.error(error);
      }
    },
    // 新增收藏演唱會
    async postSaveConcertsData(id) {
      try {
        await postSaveConcerts(id);
        // console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
    // 刪除收藏
    async deleteSaveConcertsData(id) {
      try {
        await deleteSaveConcerts(id);
        // console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
    // 新增或刪除追蹤
    handleFollowAction(id, actionType, msg) {
      const followAction = actionType === '新增' ? this.postFollowConcetsData : this.deleteFollowConcetsData;

      followAction(id)
        .then(() => this.getSingleArtistData(id))
        .then(() => {
          // 延遲顯示 toastMsg，等待 getArtistsData 完成後
          setTimeout(() => this.toastMsg(msg), 300);
        });
    },
    // 新增或刪除收藏
    handleSaveAction(id, actionType, msg) {
      const saveAction = actionType === '新增' ? this.postSaveConcertsData : this.deleteSaveConcertsData;

      saveAction(id)
        .then(() => this.getSavedConcertsData())
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
    updateData(id) {
      this.getSingleArtistData(id);
    },
  },
  mounted() {
    setIsLoading();
    this.getSingleArtistData(Number(this.$route.params.id));

    setTimeout(() => {
      setIsLoading();
    }, 300);

    if (this.AccessToken) {
      this.getSavedConcertsData();
    }
  },
};
</script>
<style lang="scss" scoped>
.bg-artistName {
  font-weight: 900;
  font-size: 4rem;
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
      top: 43px;
      left: -82px;
    }
  }

  .concert-box {
    padding: 9px 20px;
    .concert-box-time {
      margin-right: 30px;
    }
  }
}

@media screen and (min-width: 576px) {
  .artist-honors-relative {
    .honors {
      top: 43px;
      left: -81px;
    }
  }
}

@media screen and (min-width: 640px) {
  .artist-honors-relative {
    .honors {
      top: 43px;
      left: -65px;
    }
  }
}

@media screen and (min-width: 768px) {
  .artist-honors-relative {
    order: -1;
    .honors {
      top: 43px;
      left: -129px;
    }

    .artist-honors {
      font-size: 13px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .artist-honors-relative {
    .honors {
      top: 47px;
      left: -129px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .artist-honors-relative {
    .honors {
      top: 26px;
      left: -260px;
    }

    .artist-honors {
      font-size: 16px;
    }
  }
}
</style>
