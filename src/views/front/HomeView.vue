<template>
  <!-- Header -->
  <div class="bg-cover bg-center py-20 mb-20 overflow-hidden" style="background-image: url('src/assets/images/home banner.jpeg')">
    <div class="container">
      <div class="mb-8">
        施工暫存導覽區
        <nav>
          <RouterLink to="/base" class="px-4">
            <Button variant="btn1"> 設計稿基礎設定頁 </Button>
          </RouterLink>
          <RouterLink to="/loading" class="px-4">
            <Button variant="btn1"> loading動畫 </Button>
          </RouterLink>
        </nav>
      </div>
      <p class="text-gray-300 pt-20">尋找讓你 <br />難忘的演唱會， <br />前進每個感動的瞬間</p>
    </div>
    <div class="sm:text-center px-3 sm:px-0">
      <div class="font-lato-display display-title drop-shadow-light py-6">CONCERT NOW</div>
    </div>
    <div class="relative container pb-40">
      <Button variant="white-outline" class="p-7 font-semibold basis-1/2 rounded-[40px]">
        <span class="pr-5">SEARCH NOW</span>
        <div class="relative w-[400px] h-0 border-[1px]">
          <ChevronRight class="absolute -bottom-3 -right-3" />
        </div>
      </Button>
    </div>
    <div class="absolute right-40 bottom-0 flex flex-col justify-center items-center">
      <p class="font-light pb-3">SCROLL</p>
      <div class="relative h-12 border-[1px] border-white w-0">
        <ChevronDown class="absolute -bottom-3 -left-3" />
      </div>
    </div>
  </div>
  <!-- Concerts -->
  <div class="relative container py-32 text-center overflow-hidden">
    <p class="text-stroke text-[180px] font-lato opacity-50 mb-[350px]">CONCERTS</p>
    <div class="grid grid-cols-2 gap-4 pb-20">
      <div></div>
      <div class="grid grid-cols-3 gap-4">
        <Button variant="tiffany-blur" class="rounded-[40px] py-12 col-span-1 col-start-3 justify-end">
          <ArrowRight size="50px" />
        </Button>
        <div class="font-bold bg-shadow-trans-text rounded-[40px] border-black-60 p-12 text-start col-span-3">
          <p class="py-4">2024-01-27 (六) 19:00</p>
          <p class="text-2xl pb-10">紅髮艾德世界巡迴演唱會高雄站 Ed Sheeran +-=÷× 2024 TOUR</p>
          <div class="relative">
            <Button variant="white-outline" class="p-7 rounded-[40px]">
              <span class="pr-5">查看更多</span>
              <div class="relative w-[200px] h-0 border-[1px]">
                <ChevronRight class="absolute -bottom-3 -right-3" />
              </div>
            </Button>
          </div>
        </div>
        <Button variant="pink-blur" class="rounded-[40px] py-12 col-span-1 justify-start">
          <ArrowLeft size="50px" />
        </Button>
      </div>
    </div>
    <!-- Concerts: posters -->
    <div>
      <img class="absolute w-[200px] rounded-[40px] rotate-[36deg] top-[10%] left-[83%] grayscale brightness-50" src="/src/assets/images/home-concert-5.jpeg" alt="poster5" />
      <img class="absolute w-[250px] rounded-[40px] rotate-[24deg] top-[13%] left-[70%] grayscale brightness-50" src="/src/assets/images/home-concert-4.jpeg" alt="poster4" />
      <img class="absolute w-[300px] rounded-[40px] rotate-[12deg] top-[15%] left-[55%] grayscale brightness-50" src="/src/assets/images/home-concert-3.jpeg" alt="poster3" />
      <img class="absolute w-[350px] rounded-[40px] rotate-[0deg] top-[20%] left-[40%] grayscale brightness-50" src="/src/assets/images/home-concert-2.png" alt="poster2" />
      <img class="absolute w-[250px] rounded-[40px] rotate-[36deg] top-[60%] left-[0%] grayscale brightness-50" src="/src/assets/images/home-concert-8.jpeg" alt="poster8" />
      <img class="absolute w-[300px] rounded-[40px] rotate-[12deg] top-[53%] left-[7%] grayscale brightness-50" src="/src/assets/images/home-concert-7.jpeg" alt="poster7" />
      <img class="absolute w-[350px] rounded-[40px] rotate-[0deg] top-[40%] left-[15%] grayscale brightness-50" src="/src/assets/images/home-concert-6.jpeg" alt="poster6" />
      <img class="absolute w-[400px] rounded-[40px] rotate-[-12deg] top-[25%] left-[25%]" src="/src/assets/images/home-concert-1.jpeg" alt="poster1" />
    </div>
  </div>
  <!-- Artist -->
  <div class="container py-32 text-center overflow-hidden">
    <p class="text-stroke text-[180px] font-lato opacity-50">ARTISTS</p>
    <div class="grid grid-cols-6 grid-flow-col gap-4 h-[600px]">
      <div
        v-for="artist in artists"
        :key="artist.id"
        class="col-span-1 grayscale brightness-50 bg-center bg-cover hover:grayscale-0 hover:col-span-4 hover:brightness-100"
        :style="{ backgroundImage: `url(${artist.image})` }"></div>
    </div>
  </div>
  <!-- Venue -->
  <div class="container py-32 text-center">
    <TitleComponent class="flex justify-center mb-8">
      <template #subTitle>VENUES</template>
      <template #mainTitle>場地體驗</template>
    </TitleComponent>
    <!-- Venue Info -->
    <div class="container xs:w-[85%] sm:w-[80%] lg:w-[60%] px-8 py-7 sm:px-12 sm:py-10 mb-10 rounded-[40px] bg-shadow-trans-text">
      <!-- Swiper -->
      <swiper :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" :modules="modules" :slidesPerView="1" :loop="true" class="mySwiper">
        <!-- Slide 1 -->
        <swiper-slide>
          <!-- Venue Title -->
          <a href="#" class="font-bold text-3xl sm:text-5xl">Legacy Taipei</a>
          <!-- Venue Seats -->
          <div class="text-sm sm:text-base grid gap-2 md:gap-4 mx-auto w-[60%] xl:w-[70%] sm:pb-4 my-5">
            <p class="text-gray-500 text-base sm:text-xl font-lato text-center">_____ STAGE _____</p>
            <div class="py-8 sm:py-12 xl:py-16 gradient-border">1F 站區</div>
            <div class="py-8 sm:py-12 xl:py-16 gradient-border">2F 站區</div>
          </div>
          <!-- Venue Comments -->
          <div class="truncate text-[12px] md:text-[14px] xl:text-[16px] flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 mb-2 sm:mb-12 p-1">
            <div class="text-left lg:w-[60%]">
              <div class="grid grid-cols-9">
                <span>1</span>
                <span class="col-span-2">1F站區</span>
                <span class="col-span-6">場地不大，前面好擠</span>
              </div>
              <div class="grid grid-cols-9">
                <span>2</span>
                <span class="col-span-2">1F站區</span>
                <span class="col-span-6">視野很不錯，離舞台好近好讚</span>
              </div>
              <div class="grid grid-cols-9">
                <span>3</span>
                <span class="col-span-2">2F站票</span>
                <span class="col-span-6">視好遠，應援布條舞台應該看不太到QQ</span>
              </div>
            </div>
            <div class="w-[100%] lg:w-[40%] flex justify-center lg:justify-end mb-7 lg:mb-0">
              <Button variant="white-outline" class="w-[80%] sm:w-[60%] py-2 border-[1px] rounded-[40px]">
                <span class="pr-1 text-[12px] xl:text-[14px]">EXPLORE</span>
                <svg height="16" viewBox="0 0 341 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
                    fill="white" />
                </svg>
              </Button>
            </div>
          </div>
        </swiper-slide>
        <!-- Slide 2 -->
        <swiper-slide>
          <!-- Venue Title -->
          <a href="#" class="font-bold text-3xl sm:text-5xl">台北小巨蛋</a>
          <!-- Venue Seats -->
          <div class="text-sm sm:text-base grid gap-2 md:gap-4 mx-auto w-[60%] xl:w-[70%] sm:pb-4 my-5">
            <p class="text-gray-500 text-base sm:text-xl font-lato text-center">_____ STAGE _____</p>
            <div class="py-3 sm:py-4 xl:py-6 gradient-border w-1/2 mx-auto">VIP</div>
            <div class="py-3 sm:py-4 xl:py-6 gradient-border w-3/4 mx-auto">特區</div>
            <div class="py-3 sm:py-4 xl:py-6 gradient-border">2F座位區</div>
            <div class="py-3 sm:py-4 xl:py-6 gradient-border w-3/4 mx-auto">3F座位區</div>
          </div>
          <!-- Venue Comments -->
          <div class="truncate text-[12px] md:text-[14px] xl:text-[16px] flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 p-1">
            <div class="text-left lg:w-[60%]">
              <div class="grid grid-cols-9">
                <span>1</span>
                <span class="col-span-2">VIP</span>
                <span class="col-span-6">位置算寬敞，而且是可以握到手的距離！</span>
              </div>
              <div class="grid grid-cols-9">
                <span>2</span>
                <span class="col-span-2">特區</span>
                <span class="col-span-6">前面好擠，離很近，但是都被前面的人擋住</span>
              </div>
              <div class="grid grid-cols-9">
                <span>3</span>
                <span class="col-span-2">2F座位區</span>
                <span class="col-span-6">蠻遠的，但視野清楚！</span>
              </div>
            </div>
            <div class="w-[100%] lg:w-[40%] flex justify-center lg:justify-end mb-7 lg:mb-0">
              <Button variant="white-outline" class="w-[80%] sm:w-[60%] py-2 border-[1px] rounded-[40px]">
                <span class="pr-1 text-[12px] xl:text-[14px]">EXPLORE</span>
                <svg height="16" viewBox="0 0 341 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
                    fill="white" />
                </svg>
              </Button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-vue-next';
import TitleComponent from '@/components/custom/TitleComponent.vue';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
</script>

<script>
export default {
  data() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
      artists: [
        {
          id: 1,
          image: '/src/assets/images/home-artist-1.jpeg',
        },
        {
          id: 2,
          image: '/src/assets/images/home-artist-2.jpeg',
        },
        {
          id: 3,
          image: '/src/assets/images/home-artist-3.jpeg',
        },
        {
          id: 4,
          image: '/src/assets/images/home-artist-4.jpeg',
        },
        {
          id: 5,
          image: '/src/assets/images/home-artist-5.jpeg',
        },
        {
          id: 6,
          image: '/src/assets/images/home-artist-6.jpeg',
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.gradient-border {
  background-image: radial-gradient(circle at 100% 100%, transparent 16px, #ffffff 16px, #ffffff 19px, transparent 19px), linear-gradient(to right, #ffffff, #d595f1),
    radial-gradient(circle at 0% 100%, transparent 16px, #d595f1 16px, #d595f1 19px, transparent 19px), linear-gradient(to bottom, #d595f1, #ffffff),
    radial-gradient(circle at 0% 0%, transparent 16px, #ffffff 16px, #ffffff 19px, transparent 19px), linear-gradient(to left, #ffffff, #42dfc8),
    radial-gradient(circle at 100% 0%, transparent 16px, #42dfc8 16px, #42dfc8 19px, transparent 19px), linear-gradient(to top, #42dfc8, #ffffff);
  background-size:
    19px 19px,
    calc(100% - 38px) 3px,
    19px 19px,
    3px calc(100% - 38px);
  background-position:
    top left,
    top center,
    top right,
    center right,
    bottom right,
    bottom center,
    bottom left,
    center left;
  background-repeat: no-repeat;
}
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
}
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  height: 0px;
  &::after {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    width: 60px;
    height: 60px;
    font-size: 25px;
    position: absolute;
    border-radius: 100%;
  }
}
:deep(.swiper-button-prev::after) {
  left: -25px;
  color: #42dfc8;
  // border: solid 2px #42dfc8;
  // box-shadow: inset 0 0 10px #42dfc8;
}
:deep(.swiper-button-next::after) {
  right: -25px;
  color: #d595f1;
  // border: solid 2px #d595f1;
  // box-shadow: inset 0 0 10px #d595f1;
}
:deep(.swiper-pagination-bullet) {
  border: solid 2px #fff;
}
:deep(.swiper-pagination-bullet-active) {
  background: #fff;
}
</style>
