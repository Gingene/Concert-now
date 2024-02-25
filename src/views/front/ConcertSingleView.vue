<template>
  <!-- <font-awesome-icon icon="fa-regular fa-bookmark" class="text-xl" style="color:var(--pink)" /> -->
  <!-- <font-awesome-icon icon="fa-solid fa-bookmark" class="text-xl" style="color:var(--pink)" /> -->
  <!-- 長箭頭-白 -->
  <!-- <svg width="184" height="16" viewBox="0 0 184 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M183.707 8.70711C184.098 8.31658 184.098 7.68342 183.707 7.29289L177.343 0.928932C176.953 0.538408 176.319 0.538408 175.929 0.928932C175.538 1.31946 175.538 1.95262 175.929 2.34315L181.586 8L175.929 13.6569C175.538 14.0474 175.538 14.6805 175.929 15.0711C176.319 15.4616 176.953 15.4616 177.343 15.0711L183.707 8.70711ZM0 9H183V7H0V9Z" fill="white"/>
  </svg> -->
  <!-- 長箭頭-黑 -->
  <!-- <svg width="184" height="16" viewBox="0 0 184 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M183.707 8.70711C184.098 8.31658 184.098 7.68342 183.707 7.29289L177.343 0.928932C176.953 0.538408 176.319 0.538408 175.929 0.928932C175.538 1.31946 175.538 1.95262 175.929 2.34315L181.586 8L175.929 13.6569C175.538 14.0474 175.538 14.6805 175.929 15.0711C176.319 15.4616 176.953 15.4616 177.343 15.0711L183.707 8.70711ZM0 9H183V7H0V9Z" fill="#101010"/>
  </svg> -->
  <div class="container space-y-[4rem] md:space-y-[7rem] xl:space-y-[11rem] pb-[140px] md:pb-[240px]">
    <section class="flex flex-col gap-10 md:pt-8">
      <div class="lg:flex lg:justify-between lg:gap-8">
        <div class="space-y-6 lg:flex lg:flex-col lg:justify-between lg:w-[100%]">
          <div class="flex space-x-4">
            <div class="bg-shadow-trans-text w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] rounded-[20px] md:rounded-[30px] sm:p-2 flex flex-col justify-center items-center font-bold space-y-[-.5rem]">
              <div class="text-sm">Sat.</div>
              <div class="text-3xl">16</div>
              <div class="text-sm">Mar 2024</div>
            </div>
            <h1 class="w-[80%] flex-auto text-xl md:text-3xl font-bold">{{ concerts[0].title }}</h1>
            <font-awesome-icon icon="fa-solid fa-bookmark" class="text-3xl pt-2 lg:hidden" style="color: var(--pink)" />
          </div>
          <img :src="concerts[0].cover_urls.straight" alt="" class="mx-auto rounded-[40px] lg:hidden" />
          <div class="lg:bg-shadow-trans-text lg:rounded-[40px] lg:border-black-60 lg:px-10 lg:pt-10 lg:pb-6 lg:h-[100%] lg:overflow-y-hidden">
            <p>
              演出時間: {{ concerts[0].holding_time }}<br />
              演出地點: {{ concerts[0].venue.title }}<br />
              地址: {{ concerts[0].venue.address }}<br />
              售票時間: {{ concerts[0].sales_time }}<br />
              座位區: NT${{ concerts[0].price_list.join(' / ') }}<br />
              主辦單位: {{ concerts[0].organizers.join('、') }}
            </p>
          </div>
          <!-- 用INFO字樣的版本 -->
          <!-- <div class="lg:bg-shadow-trans-text lg:rounded-[40px] lg:border-black-60 lg:px-14 lg:pb-6 lg:h-[100%] lg:overflow-y-hidden">
            <div class="hidden lg:block text-stroke-light text-5xl font-bold mt-[-24px] z-[-10]">INFO</div>
            <p>
              演出時間: {{ concerts[0].holding_time }}<br>
              演出地點: {{ concerts[0].venue.title }}<br>
              地址: {{ concerts[0].venue.address }}<br>
              售票時間: {{ concerts[0].sales_time }}<br>
              座位區: NT${{ concerts[0].price_list.join(' / ') }}<br>
              主辦單位: {{ concerts[0].organizers.join('、') }}
            </p>
          </div> -->
        </div>
        <img :src="concerts[0].cover_urls.straight" alt="" class="mx-auto lg:mx-0 rounded-[40px] lg:h-[400px] hidden lg:block xl:hidden" />
        <img :src="concerts[0].cover_urls.square" alt="" class="mx-0 rounded-[40px] w-[400px] h-[400px] object-cover hidden xl:block 2xl:hidden" />
        <img :src="concerts[0].cover_urls.horizontal" alt="" class="mx-0 rounded-[40px] w-[700px] h-[400px] object-cover hidden 2xl:block" />
      </div>
      <div class="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-around">
        <div class="w-[80%] md:w-[60%] lg:w-[40%] mx-auto bg-shadow-trans-text rounded-[40px] flex items-center justify-center py-4 lg:py-0 relative">
          <p class="text-2xl font-bold relative">
            <span class="text-base pr-2 absolute bottom-0 left-[-30%]">D-day</span>
            50 : 12 : 40 : 02
          </p>
        </div>
        <Button variant="white-outline" size="base" class="mx-auto lg:mx-0 border-[1px] border-black-60">
          {{ concerts[0].artist.name }}
        </Button>
        <Button variant="white-outline" size="base" class="mx-auto lg:mx-0 border-[1px] border-black-60 lg:order-first hidden lg:flex">
          <font-awesome-icon icon="fa-solid fa-bookmark" class="text-xl pr-2" style="color: var(--pink)" />
          收藏到最愛
        </Button>
      </div>
    </section>
    <section>
      <TitleComponent class="mb-4">
        <template #subTitle>TICKETS</template>
        <template #mainTitle>購票傳送門</template>
      </TitleComponent>
      <div class="flex flex-col">
        <div class="flex items-center justify-start gap-10 lg:gap-20">
          <div class="text-6xl md:text-[5rem] xl:text-[7rem] text-stroke-light font-bold mb-[-1.5rem] xl:mb-[-2.5rem]">01</div>
          <div class="flex justify-between items-center mt-6 xl:mt-10 w-[100%]">
            <h2 class="text-lg md:text-xl lg:text-3xl">
              <a href="" class="py-4">寬宏售票系統</a>
            </h2>
            <button class="py-4">
              <svg class="w-[120px] sm:w-[230px] sm:h-[20px] xl:w-[299px] xl:h-[26px]" width="184" height="16" viewBox="0 0 184 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M183.707 8.70711C184.098 8.31658 184.098 7.68342 183.707 7.29289L177.343 0.928932C176.953 0.538408 176.319 0.538408 175.929 0.928932C175.538 1.31946 175.538 1.95262 175.929 2.34315L181.586 8L175.929 13.6569C175.538 14.0474 175.538 14.6805 175.929 15.0711C176.319 15.4616 176.953 15.4616 177.343 15.0711L183.707 8.70711ZM0 9H183V7H0V9Z"
                  fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <div class="border-b-8 h-2 w-[100%]"></div>
      </div>
    </section>
    <section>
      <TitleComponent class="flex justify-center mb-[-1rem] z-10">
        <template #subTitle>SONGS</template>
        <template #mainTitle>歌單</template>
      </TitleComponent>
      <div class="tracking-normal text-base bg-shadow-trans-text rounded-[40px] px-8 py-12 flex flex-col items-center mx-auto w-[400px] gap-2">
        <iframe
          class="rounded-[20px]"
          width="336"
          height="189"
          src="https://www.youtube.com/embed/x8G4xrYfWmw?si=EPcB0Nnm8i3rIFAW"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <!-- 第3版:無'新增曲目'字樣，標題旁新增按鈕 -->
        <!-- <div class="flex items-center justify-between">
          <div class="text-xl lg:text-2xl font-bold marquee-container w-[285.5px] mr-4">
            <div class="marquee-text">Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 </div>
            <div class="marquee-text">Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 </div>
            <div class="marquee-text">Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 </div>
          </div>
          <button class="px-1 space-x-2 ml-auto border-2 rounded-[50%] w-8 h-8">
            <font-awesome-icon icon="fa-solid fa-plus" class="text-lg" />
          </button>
        </div>
        <div class="w-full h-[4px] bg-white"></div> -->
        <div class="text-xl lg:text-2xl font-bold marquee-container w-[336px]">
          <div class="marquee-text">Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站</div>
          <div class="marquee-text">Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站</div>
          <div class="marquee-text">Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站 Tom Jones 湯姆瓊斯演唱會 2024 台北站</div>
        </div>
        <div class="flex justify-between items-center w-full">
          <div class="text-black-40">{{ concerts[0].artist.name }}</div>
          <button class="px-1 space-x-2 ml-auto border-2 rounded-[50%] w-8 h-8 hover:border-[var(--pink)] hover:bg-[var(--pink)] hover:box-shadow-pink-blur-hover">
            <font-awesome-icon icon="fa-solid fa-plus" class="text-lg" />
          </button>
        </div>
        <!-- <button class="flex items-center space-x-3 ml-auto mt-4">
          <font-awesome-icon icon="fa-solid fa-plus" class="text-lg" />
          <p>新增曲目</p>
        </button> -->
        <!-- <div class="w-full h-[4px] bg-white"></div> -->
        <!-- <div class="w-full h-[1px] bg-white"></div> -->
        <!-- hover:box-shadow-pink-blur-hover -->
        <!-- hover:bg-[var(--tiffany)] hover:text-black hover:font-bold -->
        <ScrollArea class="h-[19rem] w-full pt-4">
          <div v-for="(item, index) in 15" :key="item">
            <div class="text-base flex justify-between items-center bg-trans">
              <div>{{ index + 1 }}</div>
              <!-- (待完成)點擊更換YT嵌入 -->
              <button class="ml-4 mr-auto py-3">歌曲名稱{{ item }}</button>
              <div class="flex pr-4 gap-6 h-14">
                <!-- (待完成)推與倒推按鈕 -->
                <button class="flex items-center text-sm hover:text-base gap-1 hover:text-[var(--tiffany)] hover:font-bold">
                  <font-awesome-icon icon="fa-solid fa-chevron-up" />
                  <p>169</p>
                </button>
                <button class="flex items-center text-sm hover:text-base gap-1 hover:text-[var(--pink)] hover:ml-[-7px] hover:font-bold">
                  <font-awesome-icon icon="fa-solid fa-chevron-down" />
                  <p>169</p>
                </button>
              </div>
            </div>
            <div class="w-full h-[1px] bg-[var(--black-60)]"></div>
          </div>
        </ScrollArea>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import TitleComponent from '@/components/custom/TitleComponent.vue';
</script>

<script>
import { mapActions, mapState } from 'pinia';
import { useConcertsStore } from '@/stores/concerts';

export default {
  data() {
    return {
      concert: {},
    };
  },
  inject: ['http', 'path'],
  methods: {
    // getConcerts() {
    // const tempVenues = JSON.parse(localStorage.getItem('tempVenues'));
    // this.venue = tempVenues.find((v) => v.id === Number(this.$route.params.id));
    // console.log(this.venue);
    // },

    ...mapActions(useConcertsStore, ['getConcerts']),
    // ...mapActions(commentStore, ['getComments']),
  },
  computed: {
    // filterComments() {
    //   return this.comments.filter((c) => c.venueId.title === this.venue.title);
    // },
    ...mapState(useConcertsStore, ['concerts', 'pagination']),
    // ...mapState(commentStore, ['comments']),
  },
  mounted() {
    // console.log(useConcertsStore);
    this.getConcerts();
    console.log(this.concerts);
    console.log(this.pagination);
    // this.concert =
  },
};
</script>

<style scoped>
.marquee-container {
  display: flex;
  overflow: hidden;
}
.marquee-text {
  display: inline-block;
  white-space: nowrap;
  animation: scroll 80s linear infinite;
}
@keyframes scroll {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
.bg-trans:hover {
  background: rgba(165, 165, 165, 0.1);
}
</style>
