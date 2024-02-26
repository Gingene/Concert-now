<template>
  <!-- Header -->
  <div class="bg-cover bg-center py-20 mb-20" style="background-image: url('src/assets/images/home banner.jpeg')">
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
  <div class="relative container py-20 text-center">
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
  <div class="container py-40 text-center">
    <p class="text-stroke text-[180px] font-lato opacity-50">ARTISTS</p>
    <div class="grid grid-cols-6 grid-flow-col gap-4 h-[600px]">
      <div
        v-for="artist in artists"
        :key="artist.id"
        class="col-span-1 grayscale brightness-50 bg-center bg-cover hover:grayscale-0 hover:col-span-4 hover:brightness-100"
        :style="{ backgroundImage: `url(${artist.image})` }"></div>
    </div>
  </div>
</template>
<script setup>
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-vue-next';
</script>

<script>
export default {
  data() {
    return {
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
};
</script>

<style lang="scss" scoped></style>
