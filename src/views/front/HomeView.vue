<template>
  <!-- Banner -->
  <section id="banner">
    <div class="container pt-32 pb-[480px]">
      <p class="opacity-70 pt-5 text-[12px] md:text-[14px] xl:text-[16px] xl:ml-[8%]">
        尋找讓你
        <br />難忘的演唱會， <br />前進每個感動的瞬間
      </p>
      <h1
        class="py-8 md:text-nowrap md:text-center font-lato font-black drop-shadow-light text-6xl xs:text-7xl md:text-[96px] lg:text-[130px] xl:text-[160px] leading-[5rem] sm:leading-[7rem] lg:leading-[9rem] xl:leading-[12rem]">
        CONCERT NOW
      </h1>
      <!-- Search Now Button -->
      <Button @click="openModal" variant="white-outline" size="base" class="btn-explore-icon-color hover:border-transparent w-full sm:w-[60%] xl:ml-[8%] xl:w-[50%] p-7 md:p-7 lg:p-7">
        <span class="font-bold text-base lg:text-lg"> SEARCH NOW </span>
        <svg class="pl-3" width="400" height="16" viewBox="0 0 341 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
            fill="white" />
        </svg>
      </Button>
    </div>
    <!-- Background -->
    <div
      class="shadow-[inset_0px_70px_150px_rgba(0,0,0,.7)] w-full h-[812px] md:h-[800px] lg:h-[750px] xl:h-[920px] bg-cover absolute top-0 -z-10 bg-center 2xl:bg-bottom"
      style="background-image: url('https://i.imgur.com/qaXMIkJ.jpeg')">
      <!-- Scroll icon -->
      <div class="w-[100px] opacity-75 absolute bottom-10 right-1/2 translate-x-1/2 md:right-[8%] xl:right-[12%] md:translate-x-0 flex flex-col items-center">
        <p class="font-light pb-3">SCROLL</p>
        <svg width="8" height="49" viewBox="0 0 8 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.64644 48.3536C3.84171 48.5488 4.15829 48.5488 4.35355 48.3536L7.53553 45.1716C7.73079 44.9763 7.73079 44.6597 7.53553 44.4645C7.34027 44.2692 7.02369 44.2692 6.82843 44.4645L4 47.2929L1.17157 44.4645C0.976309 44.2692 0.659726 44.2692 0.464464 44.4645C0.269202 44.6597 0.269202 44.9763 0.464464 45.1716L3.64644 48.3536ZM3.5 -2.18557e-08L3.5 48L4.5 48L4.5 2.18557e-08L3.5 -2.18557e-08Z"
            fill="white" />
        </svg>
      </div>
      <!-- 開發樣式參考暫存區 -->
      <!-- <div class="absolute top-20 container">
        <RouterLink to="/base" class="px-4"> 設計稿基礎設定頁 </RouterLink>
        <RouterLink to="/loading" class="px-4"> loading動畫 </RouterLink>
      </div> -->
    </div>
  </section>

  <!-- Concerts -->
  <main id="concerts" class="concert-section relative text-center overflow-hidden w-full pb-[180px] sm:pb-[230px] md:pb-[250px] lg:pb-[300px] xl:pb-[400px]">
    <h2 class="font-black text-stroke font-lato sm:mb-5 text-[60px] xs:text-[88px] sm:text-[110px] md:text-[120px] lg:text-[160px]">CONCERTS</h2>
    <swiper
      :effect="'cards'"
      :grabCursor="false"
      :freeMode="true"
      :loop="true"
      :initialSlide="1"
      :navigation="true"
      :cardsEffect="{
        perSlideOffset: 16,
        perSlideRotate: 12,
        slideShadows: false,
      }"
      :modules="modules"
      class="mySwiper concert-section xs:w-[90%] xl:w-[80%]">
      <swiper-slide
        v-slot="{ isActive }"
        v-for="concert in concerts"
        :key="concert.id + 123"
        class="pl-4 lg:pl-40 bg-transparent ml-[5%] sm:ml-[8%] xl:ml-0 -my-10 sm:-my-5"
        style="z-index: -1"
        :style="`height: 700px;`">
        <img
          :src="`${concert.image}`"
          :class="{ 'concert-photo-show': isActive }"
          class="grayscale brightness-[0.3] object-cover rounded-[40px] mt-10 w-[310px] xs:w-[400px] h-[450px] xs:h-[520px] lg:h-[580px]"
          alt="演唱會海報圖" />
        <div class="hidden">{{ isActive ? (concertActive = concert) : '' }}</div>
      </swiper-slide>
      <!-- Single Concert Info -->
      <article
        class="z-10 container py-6 sm:py-8 -mt-32 xs:-mt-10 md:-mt-5 lg:mt-12 xl:-mt-20 px-[8%] xs:px-[38px] md:px-[48px] lg:px-[60px] xl:px-[48px] w-[90%] xs:w-[450px] sm:w-[530px] md:w-[600px] lg:w-[800px] xl:w-[520px] 2xl:w-[600px] xl:absolute xl:top-[500px] xl:right-24 font-bold bg-shadow-trans-text rounded-[40px] border-black-60 text-start col-span-3">
        <time class="pt-4 text-sm lg:text-lg">
          {{ concertActive.date }}
        </time>
        <h3 class="text-xl md:text-2xl lg:text-3xl lg:py-4 pb-2 h-[10.5rem] xs:h-[6.5rem] xl:h-[9.5rem]">
          {{ concertActive.name }}
        </h3>
        <router-link :to="`/concerts/${concertActive.id}`" class="w-full sm:w-[80%] xl:w-full 2xl:w-[80%] block">
          <Button variant="white-outline" class="rounded-btn1 my-4 p-6 xs:p-7 w-full hover:border-transparent btn-explore-icon-color">
            <span class="font-bold text-base lg:text-lg"> 探索更多 </span>
            <svg class="pl-3" width="400" height="16" viewBox="0 0 341 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
                fill="white" />
            </svg>
          </Button>
        </router-link>
      </article>
    </swiper>
  </main>

  <!-- Artists -->
  <section id="artists" class="container pb-[180px] sm:pb-[230px] md:pb-[250px] lg:pb-[300px] xl:pb-[300px] text-center relative">
    <h2 class="font-black text-stroke font-lato sm:mb-5 xl:-mb-20 xl:mr-[160px] text-[60px] xs:text-[88px] sm:text-[110px] md:text-[120px] lg:text-[160px]">ARTISTS</h2>
    <!-- Mobile/Pad: Artist List -->
    <div class="xl:hidden">
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :initialSlide="2"
        :slidesPerView="1"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
          },
          '768': {
            slidesPerView: 3,
          },
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper py-10">
        <swiper-slide v-for="artist in artists" :key="artist.id">
          <router-link
            :to="`/artists/${artist.id}`"
            :style="{ backgroundImage: `url(${artist.image})` }"
            class="container mx-auto relative block rounded-[40px] brightness-90 w-[310px] xs:w-[400px] sm:w-[auto] h-[450px] xs:h-[520px] lg:h-[580px] bg-center bg-cover shadow-[inset_0px_-90px_50px_rgba(0,0,0,.7)]">
            <div class="absolute left-10 bottom-10 flex items-center opacity-75">
              <p class="text-white font-black text-xl pr-3">
                {{ artist.name }}
              </p>
              <p class="text-xs">
                <Heart class="inline" size="18px" />
                {{ artist.followers }} +
              </p>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <!-- PC(xl:1280): Artist" -->
    <div class="hidden xl:flex xl:gap-4 container w-min my-auto">
      <details
        name="artists-carousel"
        v-for="(artist, index) in artists"
        :key="artist.id"
        :id="`artist${artist.id}`"
        :open="index === 3"
        @mouseenter="openArtist(`artist${artist.id}`)"
        class="w-[130px] h-[580px] relative z-0 text-start rounded-[40px] opacity-50 brightness-50 grayscale overflow-hidden">
        <summary class="w-full h-full">
          <router-link :to="`/artists/${artist.id}`" class="w-full h-full p-6 flex flex-col justify-end shadow-[inset_0px_-190px_50px_rgba(0,0,0,.7)]">
            <h3 class="text-white font-black text-lg">{{ artist.name }}</h3>
            <p class="text-xs">
              <Heart class="inline" size="18px" />
              {{ artist.followers }} +
            </p>
            <img :src="artist.image" :alt="artist.name" class="-z-10 w-full h-full absolute top-0 left-0 object-cover" />
          </router-link>
        </summary>
        <p class="p-6 tracking-wider opacity-60">{{ artist.intro }}</p>
      </details>
    </div>
    <!-- Mobile/Pad: 所有表演者總覽頁 Button -->
    <router-link :to="`/artists`" class="block xl:hidden w-[300px] xs:w-[390px] sm:w-[70%] md:w-[60%] xl:w-[40%] mx-auto xl:ml-auto mt-5 xs:mt-8 sm:mt-12 lg:mt-16 mb-8">
      <Button variant="white-outline" class="rounded-btn1 my-4 p-6 xs:p-7 w-full hover:border-transparent btn-explore-icon-color">
        <span class="font-bold text-base lg:text-lg"> 探索更多 </span>
        <svg class="pl-3" width="400" height="16" viewBox="0 0 341 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
            fill="white" />
        </svg>
      </Button>
    </router-link>
    <!-- PC(xl:1280): 所有表演者總覽頁 Button -->
    <router-link :to="`/artists`" class="hidden xl:block w-[30%] mt-5 mb-8 mx-auto">
      <Button data-aos="fade-right" variant="white-outline" class="rounded-btn1 my-4 p-6 xs:p-7 ml-[250px] w-full hover:border-transparent btn-explore-icon-color">
        <span class="font-bold text-base lg:text-lg"> 探索更多 </span>
        <svg class="pl-3" width="400" height="16" viewBox="0 0 341 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
            fill="white" />
        </svg>
      </Button>
    </router-link>
  </section>

  <!-- Venues -->
  <section id="venues" class="container text-center px-[8%] xs:px-[38px] md:px-[64px] lg:w-[800px] xl:w-[1000px] pb-[180px] sm:pb-[230px] md:pb-[200px] lg:pb-[250px] xl:pb-[280px]">
    <h2 class="font-black text-stroke font-lato text-[60px] xs:text-[88px] sm:text-[110px] md:text-[120px] lg:text-[160px]">VENUES</h2>
    <swiper
      :cssMode="true"
      :navigation="true"
      :pagination="true"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
      :slidesPerView="1"
      :loop="false"
      class="mySwiper rounded-[40px] bg-shadow-trans-text venue-section">
      <swiper-slide v-for="venue in venueInfo" :key="venue.id" class="py-10 sm:py-14 px-7 xs:px-9 sm:px-12 lg:px-14">
        <router-link :to="`/venues/${venue.id}`">
          <h2 href="#" class="font-bold text-3xl lg:text-4xl pb-2">
            {{ venue.title }}
          </h2>
        </router-link>
        <p class="text-gray-500 text-base sm:text-xl lg:pt-5 font-lato text-center">_____ STAGE _____</p>
        <!-- Venue Seats -->
        <div class="h-[200px] sm:h-[300px] w-[80%] xl:w-[60%] text-sm sm:text-base grid grid-flow-row auto-row-max gap-2 md:gap-4 mx-auto my-3 lg:my-5">
          <div v-for="(area, index) in venue.seat_areas" :key="`${index + 123}`" class="text-[12px] md:text-base lg:text-xl gradient-border flex justify-center items-center">
            {{ area }}
          </div>
        </div>
        <div class="xl:flex xl:gap-6 xl:items-end xl:px-10">
          <!-- Venue Comments -->
          <article class="w-full truncate text-[12px] xs:text-[14px] sm:text-[16px] lg:text-[18px] gap-2 md:px-5 py-3 sm:py-5 md:py-8">
            <div v-for="(comment, index) in venue.comments" :key="index + 123" class="grid grid-cols-9 text-left">
              <span>{{ index + 1 }}</span>
              <span class="col-span-2">{{ comment.seat_area }}</span>
              <span class="col-span-6">{{ comment.comment }}</span>
            </div>
          </article>
          <!-- 所有場地總覽頁 Button -->
          <router-link :to="`/venues/${venue.id}`" class="block w-full mx-auto sm:w-[80%] xl:w-[40%]">
            <Button variant="white-outline" class="my-4 rounded-btn1 p-6 xs:p-7 w-full hover:border-transparent btn-explore-icon-color">
              <span class="font-bold text-base lg:text-lg"> 探索更多 </span>
              <svg class="pl-3" width="400" height="16" viewBox="0 0 341 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
                  fill="white" />
              </svg>
            </Button>
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
  </section>

  <!-- Songs -->
  <section id="songs" class="container pb-[180px] sm:pb-[230px] md:pb-[250px] lg:pb-[300px] xl:pb-[300px]">
    <section class="pt-[10rem] relative flex">
      <!-- 2xl以上-標題 -->
      <span class="hidden 2xl:block font-black text-[160px] text-stroke font-lato absolute z-[-1] xl:top-[1rem] xl:right-[8rem]"> SONGS </span>
      <div class="mx-auto relative">
        <!-- 2xl以下-標題 -->
        <div class="2xl:hidden font-black text-stroke font-lato z-[-1] text-center text-[60px] xs:text-[88px] sm:text-[110px] md:text-[120px] lg:text-[160px] mb-[-2rem] sm:mb-[-3rem] xl:mb-[-7rem]">
          SONGS
        </div>
        <!-- 主要內容區塊 -->
        <div
          class="tracking-normal text-base bg-shadow-trans-text rounded-[40px] px-8 py-12 flex flex-col items-center mx-auto w-auto max-w-[350px] sm:max-w-none sm:w-[350px] lg:w-[450px] gap-2 xl:mr-[20rem]">
          <img class="w-[200px] h-[200px] lg:w-[306px] lg:h-[306px] object-cover object-top rounded-[20px]" src="https://i.kfs.io/playlist/global/77385678v1/cropresize/600x600.jpg" alt="" />
          <div class="text-xl lg:text-2xl font-bold flex overflow-hidden w-[196px] sm:w-[286px] lg:w-[386px]">
            <div class="animate-[right-to-left_80s_linear_infinite] whitespace-nowrap inline-block">Taylor Swift 2024 台北 Taylor Swift 2024 台北 Taylor Swift 2024 台北 Taylor Swift 2024 台北</div>
          </div>
          <div class="flex justify-between items-center w-full">
            <div class="text-black-40">Taylor Swift</div>
            <Popover>
              <PopoverTrigger as-child>
                <button
                  class="flex justify-center items-center px-1 space-x-2 ml-auto border-2 rounded-[50%] w-8 h-8 hover:border-[var(--pink)] hover:bg-[var(--pink)] hover:box-shadow-pink-blur-hover">
                  <font-awesome-icon icon="fa-solid fa-plus" class="text-lg" />
                </button>
              </PopoverTrigger>
              <PopoverContent> 在演唱會下才能新增歌曲喔，快去看看吧～ </PopoverContent>
            </Popover>
          </div>
          <ScrollArea class="h-[19rem] w-full pt-4">
            <div v-for="(song, index) in songList" :key="song">
              <div class="text-base flex justify-between items-center hover:bg-[#A5A5A5] hover:bg-opacity-10">
                <div>{{ index + 1 }}</div>
                <Popover>
                  <PopoverTrigger as-child>
                    <div class="cursor-pointer w-full text-left ml-6 mr-auto text-nowrap">
                      {{ song }}
                    </div>
                  </PopoverTrigger>
                  <PopoverContent> 去演唱會探索更多 </PopoverContent>
                </Popover>
                <div class="flex justify-end pr-4 gap-2 sm:gap-6 h-14 cursor-pointer w-full text-left ml-6 mr-auto text-nowrap">
                  <Popover>
                    <PopoverTrigger as-child>
                      <div class="flex items-center text-sm hover:text-base gap-1 hover:text-[var(--tiffany)] hover:font-bold">
                        <font-awesome-icon icon="fa-solid fa-chevron-up" />
                        <p>{{ (2056 / (index + 8)).toFixed(0) }}</p>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent> 這首歌有在演唱會聽到！ </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger as-child>
                      <div class="flex items-center text-sm hover:text-base gap-1 hover:text-[var(--pink)] hover:ml-[-5.4px] hover:font-bold">
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                        <p>{{ (148 / (index + 11)).toFixed(0) }}</p>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent> 演唱會上沒聽到這首歌餒 ॱଳॱ </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div class="w-full h-[1px] bg-[var(--black-60)]"></div>
            </div>
          </ScrollArea>
        </div>
        <!-- xl以下-複習框 -->
        <div class="xl:hidden bg-shadow-trans-text rounded-[40px] space-y-6 p-6 sm:p-12 w-auto lg:w-[636px] mt-6 sm:mt-[-2.6rem]">
          <h4 class="text-xl md:text-2xl lg:text-3xl font-bold">來複習演唱會歌單吧！</h4>
          <p>
            有3個人說這首歌沒有在演唱會中出現 &#65281;<br />
            快來分享你的經驗～
          </p>
          <Popover>
            <PopoverTrigger>
              <Button variant="white-outline" class="btn-explore-icon-color rounded-btn1 my-4 p-6 xs:p-7 w-full text-base lg:text-lg">
                探索歌單
                <svg class="hidden sm:block md:hidden pl-4" width="184" height="16" viewBox="0 0 184 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    class="icon"
                    d="M183.707 8.70711C184.098 8.31658 184.098 7.68342 183.707 7.29289L177.343 0.928932C176.953 0.538408 176.319 0.538408 175.929 0.928932C175.538 1.31946 175.538 1.95262 175.929 2.34315L181.586 8L175.929 13.6569C175.538 14.0474 175.538 14.6805 175.929 15.0711C176.319 15.4616 176.953 15.4616 177.343 15.0711L183.707 8.70711ZM0 9H183V7H0V9Z"
                    fill="white" />
                </svg>
                <svg class="hidden md:block pl-4 ml-auto" width="341" height="16" viewBox="0 0 341 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
                    fill="white" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent> 你可以到演唱會頁面下看到歌單～ </PopoverContent>
          </Popover>
        </div>
        <!-- xl以上-複習框 -->
        <div class="hidden xl:block bg-shadow-trans-text rounded-[40px] space-y-6 p-12 w-[500px] 2xl:w-[580px] absolute right-[-10rem] top-[20rem] 2xl:right-[-14.5rem] 2xl:top-[9rem]">
          <h4 class="text-3xl font-bold">來複習演唱會歌單吧！</h4>
          <p>
            有3個人說這首歌沒有在演唱會中出現 &#65281;<br />
            快來分享你的經驗～
          </p>
          <Popover>
            <PopoverTrigger>
              <Button variant="white-outline" class="rounded-btn1 my-4 p-6 xs:p-7 w-full btn-explore-icon-color text-base lg:text-lg">
                探索歌單
                <svg class="hidden 2xl:block pl-4" width="341" height="16" viewBox="0 0 341 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
                    fill="white" />
                </svg>
                <svg class="hidden xl:block 2xl:hidden pl-4" width="270" height="16" viewBox="0 0 341 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
                    fill="white" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent> 你可以到演唱會頁面下看到歌單～ </PopoverContent>
          </Popover>
        </div>
        <svg class="hidden xl:block absolute right-0 bottom-[12.5rem]" width="371" height="132" viewBox="0 0 371 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M367.5 0.5L359.515 8.8409L370.731 11.5858L367.5 0.5ZM4.17791 95.1443C4.67639 95.382 5.27324 95.1707 5.51103 94.6722C5.74882 94.1738 5.53749 93.5769 5.03901 93.3391L4.17791 95.1443ZM12.2119 96.6803C11.7091 96.4517 11.1163 96.674 10.8877 97.1768C10.6591 97.6796 10.8814 98.2724 11.3842 98.501L12.2119 96.6803ZM18.554 101.681C19.0609 101.9 19.6496 101.666 19.8687 101.159C20.0879 100.653 19.8546 100.064 19.3477 99.8447L18.554 101.681ZM26.6863 102.934C26.1752 102.724 25.5912 102.969 25.382 103.48C25.1727 103.991 25.4173 104.575 25.9284 104.784L26.6863 102.934ZM33.2607 107.704C33.7758 107.903 34.3549 107.647 34.5541 107.132C34.7533 106.617 34.4973 106.038 33.9822 105.838L33.2607 107.704ZM41.3751 108.613C40.8561 108.424 40.2823 108.692 40.0935 109.211C39.9047 109.73 40.1723 110.304 40.6913 110.493L41.3751 108.613ZM48.1743 113.129C48.6971 113.307 49.2653 113.028 49.4434 112.505C49.6215 111.982 49.3421 111.414 48.8194 111.236L48.1743 113.129ZM56.2732 113.689C55.7468 113.522 55.1846 113.813 55.0174 114.34C54.8502 114.866 55.1414 115.428 55.6678 115.595L56.2732 113.689ZM63.2871 117.925C63.817 118.081 64.3728 117.778 64.5286 117.248C64.6844 116.718 64.3812 116.163 63.8513 116.007L63.2871 117.925ZM71.3734 118.13C70.8403 117.986 70.2912 118.301 70.1469 118.835C70.0027 119.368 70.3179 119.917 70.851 120.061L71.3734 118.13ZM78.5868 122.062C79.1231 122.194 79.665 121.866 79.7972 121.33C79.9294 120.794 79.602 120.252 79.0657 120.12L78.5868 122.062ZM86.6985 121.911C86.1594 121.791 85.625 122.131 85.505 122.67C85.3849 123.209 85.7246 123.743 86.2636 123.863L86.6985 121.911ZM94.0558 125.504C94.5975 125.612 95.1238 125.26 95.2313 124.718C95.3388 124.176 94.9867 123.65 94.445 123.542L94.0558 125.504ZM102.169 124.981C101.625 124.886 101.107 125.25 101.013 125.795C100.918 126.339 101.282 126.856 101.826 126.951L102.169 124.981ZM109.671 128.219C110.217 128.301 110.726 127.924 110.807 127.378C110.889 126.831 110.512 126.323 109.966 126.241L109.671 128.219ZM117.761 127.307C117.212 127.239 116.713 127.628 116.645 128.176C116.577 128.724 116.966 129.224 117.514 129.292L117.761 127.307ZM125.403 130.173C125.952 130.228 126.442 129.826 126.496 129.277C126.551 128.727 126.149 128.237 125.6 128.183L125.403 130.173ZM133.442 128.86C132.891 128.819 132.412 129.233 132.371 129.784C132.331 130.334 132.744 130.814 133.295 130.854L133.442 128.86ZM141.217 131.334C141.769 131.361 142.237 130.935 142.264 130.383C142.29 129.831 141.864 129.363 141.312 129.337L141.217 131.334ZM149.177 129.609C148.625 129.597 148.168 130.035 148.156 130.587C148.144 131.139 148.582 131.596 149.134 131.608L149.177 129.609ZM157.074 131.673C157.627 131.67 158.072 131.22 158.069 130.668C158.066 130.116 157.616 129.67 157.064 129.673L157.074 131.673ZM164.925 129.527C164.373 129.545 163.94 130.007 163.958 130.559C163.975 131.111 164.437 131.544 164.989 131.526L164.925 129.527ZM172.93 131.162C173.481 131.13 173.901 130.656 173.868 130.105C173.836 129.553 173.362 129.133 172.811 129.166L172.93 131.162ZM180.64 128.591C180.09 128.639 179.683 129.124 179.731 129.674C179.779 130.225 180.264 130.632 180.814 130.584L180.64 128.591ZM188.734 129.779C189.283 129.716 189.676 129.219 189.612 128.671C189.549 128.122 189.052 127.729 188.504 127.793L188.734 129.779ZM196.272 126.781C195.726 126.86 195.347 127.367 195.426 127.914C195.505 128.46 196.012 128.839 196.559 128.76L196.272 126.781ZM204.433 127.504C204.977 127.409 205.341 126.891 205.247 126.347C205.152 125.803 204.634 125.439 204.09 125.534L204.433 127.504ZM211.805 124.072C211.264 124.182 210.915 124.711 211.026 125.252C211.137 125.793 211.665 126.142 212.206 126.031L211.805 124.072ZM219.97 124.322C220.508 124.195 220.841 123.656 220.714 123.119C220.587 122.581 220.049 122.248 219.511 122.375L219.97 124.322ZM227.146 120.453C226.613 120.596 226.296 121.144 226.439 121.678C226.582 122.211 227.13 122.528 227.663 122.385L227.146 120.453ZM235.284 120.22C235.812 120.062 236.112 119.504 235.953 118.975C235.794 118.446 235.237 118.146 234.708 118.305L235.284 120.22ZM242.231 115.916C241.708 116.092 241.425 116.658 241.6 117.182C241.776 117.706 242.342 117.988 242.866 117.813L242.231 115.916ZM250.326 115.186C250.844 114.995 251.108 114.42 250.917 113.902C250.725 113.384 250.15 113.119 249.632 113.311L250.326 115.186ZM256.993 110.455C256.481 110.663 256.235 111.246 256.443 111.758C256.651 112.27 257.234 112.516 257.746 112.308L256.993 110.455ZM265.049 109.202C265.554 108.977 265.781 108.386 265.556 107.882C265.332 107.377 264.741 107.15 264.236 107.374L265.049 109.202ZM271.356 104.068C270.859 104.309 270.652 104.907 270.892 105.404C271.133 105.901 271.731 106.109 272.228 105.868L271.356 104.068ZM279.337 102.276C279.826 102.018 280.013 101.414 279.756 100.925C279.498 100.436 278.894 100.249 278.405 100.506L279.337 102.276ZM285.297 96.7252C284.817 96.9991 284.651 97.6099 284.925 98.0895C285.198 98.5691 285.809 98.7358 286.289 98.4619L285.297 96.7252ZM293.105 94.4105C293.574 94.1201 293.72 93.5038 293.429 93.0341C293.139 92.5644 292.523 92.419 292.053 92.7095L293.105 94.4105ZM298.688 88.4405C298.229 88.7477 298.106 89.3688 298.413 89.8278C298.72 90.2868 299.341 90.4099 299.8 90.1027L298.688 88.4405ZM306.311 85.5711C306.759 85.2473 306.859 84.6221 306.535 84.1747C306.211 83.7273 305.586 83.6272 305.139 83.951L306.311 85.5711ZM311.41 79.2295C310.975 79.57 310.898 80.1986 311.239 80.6334C311.579 81.0682 312.208 81.1446 312.643 80.8041L311.41 79.2295ZM318.819 75.7691C319.24 75.4118 319.292 74.7807 318.935 74.3596C318.577 73.9385 317.946 73.8869 317.525 74.2442L318.819 75.7691ZM323.417 69.0352C323.011 69.4094 322.985 70.0421 323.359 70.4482C323.733 70.8544 324.366 70.8804 324.772 70.5061L323.417 69.0352ZM330.487 65.0148C330.877 64.6238 330.876 63.9906 330.485 63.6006C330.094 63.2106 329.461 63.2115 329.071 63.6025L330.487 65.0148ZM334.503 57.9107C334.131 58.3187 334.16 58.9512 334.568 59.3234C334.975 59.6957 335.608 59.6667 335.98 59.2587L334.503 57.9107ZM341.212 53.25C341.565 52.8251 341.507 52.1946 341.082 51.8419C340.657 51.4891 340.026 51.5476 339.674 51.9726L341.212 53.25ZM344.542 45.8073C344.211 46.2492 344.3 46.876 344.742 47.2073C345.184 47.5387 345.811 47.4491 346.142 47.0073L344.542 45.8073ZM350.742 40.5297C351.05 40.0711 350.928 39.4499 350.469 39.1422C350.01 38.8344 349.389 38.9567 349.081 39.4153L350.742 40.5297ZM353.262 32.7973C352.98 33.2724 353.137 33.8858 353.612 34.1675C354.087 34.4491 354.701 34.2922 354.982 33.8171L353.262 32.7973ZM358.845 26.8335C359.097 26.3422 358.903 25.7394 358.412 25.487C357.921 25.2347 357.318 25.4283 357.066 25.9196L358.845 26.8335ZM360.426 18.8252C360.206 19.3319 360.439 19.9208 360.945 20.1405C361.452 20.3602 362.041 20.1275 362.261 19.6208L360.426 18.8252ZM365.177 12.1932C365.36 11.6722 365.086 11.1013 364.565 10.9181C364.044 10.735 363.473 11.0089 363.29 11.5299L365.177 12.1932ZM365.601 4.05266C365.459 4.58632 365.776 5.13423 366.31 5.27645C366.844 5.41867 367.392 5.10134 367.534 4.56768L365.601 4.05266ZM0.561209 93.3986C1.76826 93.988 2.97384 94.5699 4.17791 95.1443L5.03901 93.3391C3.84046 92.7674 2.64037 92.1882 1.43879 91.6014L0.561209 93.3986ZM11.3842 98.501C13.7804 99.5903 16.1704 100.65 18.554 101.681L19.3477 99.8447C16.9755 98.8192 14.5968 97.7645 12.2119 96.6803L11.3842 98.501ZM25.9284 104.784C28.3796 105.788 30.8238 106.761 33.2607 107.704L33.9822 105.838C31.5575 104.901 29.1255 103.932 26.6863 102.934L25.9284 104.784ZM40.6913 110.493C43.1937 111.403 45.6881 112.282 48.1743 113.129L48.8194 111.236C46.3462 110.393 43.8647 109.519 41.3751 108.613L40.6913 110.493ZM55.6678 115.595C58.2166 116.405 60.7565 117.181 63.2871 117.925L63.8513 116.007C61.3345 115.267 58.8084 114.494 56.2732 113.689L55.6678 115.595ZM70.851 120.061C73.4398 120.762 76.0185 121.428 78.5868 122.062L79.0657 120.12C76.512 119.49 73.9478 118.827 71.3734 118.13L70.851 120.061ZM86.2636 123.863C88.8723 124.444 91.4698 124.991 94.0558 125.504L94.445 123.542C91.8743 123.032 89.292 122.489 86.6985 121.911L86.2636 123.863ZM101.826 126.951C104.454 127.408 107.069 127.831 109.671 128.219L109.966 126.241C107.38 125.855 104.781 125.435 102.169 124.981L101.826 126.951ZM117.514 129.292C120.157 129.621 122.787 129.914 125.403 130.173L125.6 128.183C123.001 127.925 120.388 127.634 117.761 127.307L117.514 129.292ZM133.295 130.854C135.951 131.05 138.592 131.209 141.217 131.334L141.312 129.337C138.704 129.212 136.081 129.054 133.442 128.86L133.295 130.854ZM149.134 131.608C151.798 131.665 154.445 131.687 157.074 131.673L157.064 129.673C154.452 129.687 151.823 129.665 149.177 129.609L149.134 131.608ZM164.989 131.526C167.655 131.44 170.302 131.319 172.93 131.162L172.811 129.166C170.201 129.321 167.573 129.442 164.925 129.527L164.989 131.526ZM180.814 130.584C183.475 130.351 186.115 130.083 188.734 129.779L188.504 127.793C185.904 128.094 183.282 128.36 180.64 128.591L180.814 130.584ZM196.559 128.76C199.207 128.377 201.832 127.958 204.433 127.504L204.09 125.534C201.507 125.984 198.901 126.4 196.272 126.781L196.559 128.76ZM212.206 126.031C214.82 125.496 217.408 124.926 219.97 124.322L219.511 122.375C216.968 122.975 214.399 123.541 211.805 124.072L212.206 126.031ZM227.663 122.385C230.231 121.698 232.771 120.976 235.284 120.22L234.708 118.305C232.215 119.055 229.694 119.771 227.146 120.453L227.663 122.385ZM242.866 117.813C245.383 116.97 247.87 116.095 250.326 115.186L249.632 113.311C247.196 114.211 244.729 115.081 242.231 115.916L242.866 117.813ZM257.746 112.308C260.214 111.305 262.648 110.269 265.049 109.202L264.236 107.374C261.856 108.433 259.441 109.46 256.993 110.455L257.746 112.308ZM272.228 105.868C274.635 104.702 277.005 103.504 279.337 102.276L278.405 100.506C276.093 101.724 273.743 102.912 271.356 104.068L272.228 105.868ZM286.289 98.4619C288.602 97.1409 290.874 95.7898 293.105 94.4105L292.053 92.7095C289.842 94.0765 287.59 95.4156 285.297 96.7252L286.289 98.4619ZM299.8 90.1027C302.017 88.6197 304.187 87.1086 306.311 85.5711L305.139 83.951C303.034 85.474 300.884 86.9711 298.688 88.4405L299.8 90.1027ZM312.643 80.8041C314.753 79.1513 316.812 77.4723 318.819 75.7691L317.525 74.2442C315.538 75.9303 313.5 77.5928 311.41 79.2295L312.643 80.8041ZM324.772 70.5061C326.735 68.6982 328.64 66.867 330.487 65.0148L329.071 63.6025C327.244 65.4345 325.359 67.2462 323.417 69.0352L324.772 70.5061ZM335.98 59.2587C337.79 57.2752 339.535 55.2713 341.212 53.25L339.674 51.9726C338.016 53.9695 336.292 55.9498 334.503 57.9107L335.98 59.2587ZM346.142 47.0073C347.75 44.863 349.284 42.7028 350.742 40.5297L349.081 39.4153C347.643 41.5587 346.129 43.6905 344.542 45.8073L346.142 47.0073ZM354.982 33.8171C356.357 31.4987 357.645 29.1696 358.845 26.8335L357.066 25.9196C355.885 28.2189 354.616 30.5128 353.262 32.7973L354.982 33.8171ZM362.261 19.6208C363.333 17.1471 364.306 14.6698 365.177 12.1932L363.29 11.5299C362.435 13.9605 361.48 16.3937 360.426 18.8252L362.261 19.6208Z"
            fill="#919191" />
        </svg>
      </div>
    </section>
  </section>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Heart } from 'lucide-vue-next';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/free-mode';
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode, EffectCoverflow, EffectCards } from 'swiper/modules';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
</script>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { mapActions, mapState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';

export default {
  data() {
    return {
      timer: {},
      isAminationActive: false,
      modules: [Navigation, Pagination, Mousewheel, Keyboard, FreeMode, EffectCoverflow, EffectCards],
      songList: ['Cruel Summer', '...Ready For It?', 'Lover', 'Love Story', 'Shake It Off'],
      concertActive: {},
      concerts: [
        {
          id: 10,
          show: 'false',
          name: 'King Gnu Asia Tour『THE GREATEST UNKNOWN』in Taipei',
          date: '2024-04-06 (六) 19:00',
          image: 'https://i.imgur.com/ZbzHz0X.jpg',
        },
        {
          id: 7,
          show: 'false',
          name: '原子邦妮「明明早點放棄就沒事了」',
          date: '2024-04-20 (六) 19:30',
          image: 'https://i.imgur.com/CDtPlHG.png',
        },
        {
          id: 4,
          show: 'true',
          name: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          date: '2024-01-27 (六) 19:00',
          image: 'https://i.imgur.com/kPcCvf8.jpg',
        },

        {
          id: 5,
          show: 'false',
          name: '溫蒂漫步 Wendy Wander 2024 Tour “Midnight Wandering 午夜漫遊“',
          date: '2024-01-27 (六) 19:00',
          image: 'https://i.imgur.com/FlEOLfm.jpg',
        },

        {
          id: 6,
          show: 'false',
          name: 'YOASOBI演唱會2024台北站',
          date: '2024-01-21 (日) 19:00',
          image: 'https://i.imgur.com/E6JbF0S.jpg',
        },
        {
          id: 3,
          show: 'false',
          name: 'FTISLAND演唱會2024台北站',
          date: '2024-02-18 (六) 17:00',
          image: 'https://i.imgur.com/2VtzkiT.png',
        },
        {
          id: 12,
          show: 'false',
          name: 'ITZY 2ND WORLD TOUR <BORN TO BE> in TAIPEI',
          date: '2024-07-20 (六) 18:00',
          image: 'https://i.imgur.com/GWg5REN.png',
        },

        {
          id: 11,
          show: 'false',
          name: '宇宙人《α：回到未來》20週年演唱會',
          date: '2024-04-27 (六) 19:30',
          image: 'https://i.imgur.com/TkXaaeF.png',
        },
        {
          id: 10,
          show: 'false',
          name: 'King Gnu Asia Tour『THE GREATEST UNKNOWN』in Taipei',
          date: '2024-04-06 (六) 19:00',
          image: 'https://i.imgur.com/ZbzHz0X.jpg',
        },
        {
          id: 7,
          show: 'false',
          name: '原子邦妮「明明早點放棄就沒事了」',
          date: '2024-04-20 (六) 19:30',
          image: 'https://i.imgur.com/CDtPlHG.png',
        },
        {
          id: 4,
          show: 'true',
          name: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          date: '2024-01-27 (六) 19:00',
          image: 'https://i.imgur.com/kPcCvf8.jpg',
        },

        {
          id: 5,
          show: 'false',
          name: '溫蒂漫步 Wendy Wander 2024 Tour “Midnight Wandering 午夜漫遊“',
          date: '2024-01-27 (六) 19:00',
          image: 'https://i.imgur.com/FlEOLfm.jpg',
        },

        {
          id: 6,
          show: 'false',
          name: 'YOASOBI演唱會2024台北站',
          date: '2024-01-21 (日) 19:00',
          image: 'https://i.imgur.com/E6JbF0S.jpg',
        },
        {
          id: 3,
          show: 'false',
          name: 'FTISLAND演唱會2024台北站',
          date: '2024-02-18 (六) 17:00',
          image: 'https://i.imgur.com/2VtzkiT.png',
        },
        {
          id: 12,
          show: 'false',
          name: 'ITZY 2ND WORLD TOUR <BORN TO BE> in TAIPEI',
          date: '2024-07-20 (六) 18:00',
          image: 'https://i.imgur.com/GWg5REN.png',
        },

        {
          id: 11,
          show: 'false',
          name: '宇宙人《α：回到未來》20週年演唱會',
          date: '2024-04-27 (六) 19:30',
          image: 'https://i.imgur.com/TkXaaeF.png',
        },
        {
          id: 10,
          show: 'false',
          name: 'King Gnu Asia Tour『THE GREATEST UNKNOWN』in Taipei',
          date: '2024-04-06 (六) 19:00',
          image: 'https://i.imgur.com/ZbzHz0X.jpg',
        },
        {
          id: 7,
          show: 'false',
          name: '原子邦妮「明明早點放棄就沒事了」',
          date: '2024-04-20 (六) 19:30',
          image: 'https://i.imgur.com/CDtPlHG.png',
        },
        {
          id: 4,
          show: 'true',
          name: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          date: '2024-01-27 (六) 19:00',
          image: 'https://i.imgur.com/kPcCvf8.jpg',
        },

        {
          id: 5,
          show: 'false',
          name: '溫蒂漫步 Wendy Wander 2024 Tour “Midnight Wandering 午夜漫遊“',
          date: '2024-01-27 (六) 19:00',
          image: 'https://i.imgur.com/FlEOLfm.jpg',
        },

        {
          id: 6,
          show: 'false',
          name: 'YOASOBI演唱會2024台北站',
          date: '2024-01-21 (日) 19:00',
          image: 'https://i.imgur.com/E6JbF0S.jpg',
        },
        {
          id: 3,
          show: 'false',
          name: 'FTISLAND演唱會2024台北站',
          date: '2024-02-18 (六) 17:00',
          image: 'https://i.imgur.com/2VtzkiT.png',
        },
        {
          id: 12,
          show: 'false',
          name: 'ITZY 2ND WORLD TOUR <BORN TO BE> in TAIPEI',
          date: '2024-07-20 (六) 18:00',
          image: 'https://i.imgur.com/GWg5REN.png',
        },

        {
          id: 11,
          show: 'false',
          name: '宇宙人《α：回到未來》20週年演唱會',
          date: '2024-04-27 (六) 19:30',
          image: 'https://i.imgur.com/TkXaaeF.png',
        },
      ],
      artists: [
        {
          id: 11,
          name: 'Itzy',
          image: 'https://i.imgur.com/yxpSEBX.jpeg',
          followers: 40192,
          intro:
            'Itzy 是韓國女子音樂團體，由 JYP 娛樂於 2019 年成立。以活潑、性感的形象聞名，歌曲風格融合流行、嘻哈和舞曲元素。成員包括 Ryujin、Yeji、Chaeryeong、Yuna 和 Lia，粉絲被稱為「Midzy」。活躍於音樂、廣告和時尚領域，吸引了廣泛關注。',
        },
        {
          id: 5,
          name: '溫蒂漫步',
          image: 'https://i.imgur.com/1w27w5u.jpeg',
          followers: 3927,
          intro:
            '溫蒂漫步，成立於 2018 年的五人台灣樂團，成員由貝斯兼主唱江楊、吉他手兼主唱曾妮、吉他手瑋翔、鍵盤手曜如及鼓手阿叡組成。曲風融合 Dream pop、Slow Rock、迷幻...等。以一首〈我想和你一起〉孤峰突起，「我想和你一起，趕走天上的烏雲，從那沙灘上驚醒……」輕輕柔柔的呢喃，在疫情亂世中帶來了一抹溫暖與浪漫。這首從編曲至歌詞都浪漫到無可救藥的「神曲」，是團內唯一的女生—主唱兼吉他手曾妮的創作。',
        },
        {
          id: 2,
          name: 'Apink',
          image: 'https://i.imgur.com/BxG8f6P.jpeg',
          followers: 49270,
          intro:
            'Apink（에이핑크）是一支來自韓國的女子音樂團體，由 Cube 娛樂於 2011 年成立。團體以清新可愛的形象和音樂風格而聞名，成員包括朴初瓏、尹普美、鄭恩地、申在熙、吳夏榮和金南珠。Apink 的音樂作品通常充滿陽光活潑的氛圍，代表曲目包括《Mr. Chu》、《LUV》和《NoNoNo》等。她們在韓國和國際上都獲得了廣泛的支持，並以穩定的音樂表現和可愛形象在 K-pop 界占有一席之地。',
        },
        {
          id: 7,
          name: 'YOASOBI',
          image: 'https://i.imgur.com/miVeAVr.jpeg',
          followers: 52380,
          intro:
            'YOASOBI（日語：YOASOBI／ヨアソビ*/?）是 2019 年結成的日本雙人音樂組合，由使用 VOCALOID 作曲的作曲家 Ayase、以及本業為創作歌手的 ikura 組成。其特色為將在日本索尼音樂娛樂所經營的小說及插畫網站「monogatary.com」中的原作「小說音樂化」[1][2]。團名的原意為「在夜晚玩耍」（夜遊び），由於兩位團員本來都有各自的音樂工作，因此兩人把原本各自的工作定義為「早上的活動」，反之這個音樂組合則是「晚上的活動」，因此命名[1]。其最新作品「アイドル」在發布一週後獲得了 3 千萬點閱，截至 2024/1/31 共獲得了 4.2 億點閱。',
        },
        {
          id: 12,
          name: '理想混蛋',
          image: 'https://i.imgur.com/dKHPtCY.jpeg',
          followers: 14702,
          intro:
            '理想混蛋是台灣男子樂團，音樂風格以流行、民謠見長，強調「以簡單的音樂，說深刻的感動」。團員中有一名醫師與兩名藥師，被台灣媒體喻為真人版「機智醫生生活」。成員包括有雞丁、阿哲、建廷、Look。2018 年以〈行星〉、〈不是因為天氣晴朗才愛你〉，在 StreetVoice 年度人氣歌曲排行榜前三名中搶下兩席。',
        },
        {
          id: 9,
          name: 'HYBS',
          image: 'https://i.imgur.com/UGVUsOq.jpg',
          followers: 21092,
          intro:
            'HYBS 是一組來自泰國曼谷的雙人樂團，由 Alyn Wee 和 Karn Kasidej 組成。 他們的音樂創作融合了近年相當流行的 City Pop、Chill R&B、Lofi 等元素，呈現出充滿濃郁懷舊感的特色。 在歌曲的編曲中，可以感受到有趣且前衛的效果器變化，為他們的音樂風格增添了獨特的層次。',
        },
      ],
    };
  },
  inject: ['http', 'path'],
  methods: {
    openModal() {
      const searchModal = document.querySelector('.searchModal');
      searchModal.click();
    },
    openArtist(artistId) {
      const id = document.getElementById(artistId);
      id.setAttribute('open', true);
    },
    truncateText() {
      this.artists.forEach((artist) => {
        const text = artist.intro;
        if (text.length > 55) {
          // eslint-disable-next-line no-param-reassign
          artist.intro = text.substring(0, 55) + ' ...';
        }
      });
    },
    ...mapActions(useVenuesStore, ['getVenueInfo']),
  },
  computed: {
    ...mapState(useVenuesStore, ['venueInfo']),
  },
  mounted() {
    this.getVenueInfo();
    this.truncateText();
    AOS.init();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
// 皆為首頁才會用到，無法用 tailwind 改寫的部分
// -------------------------------------- General
.btn-explore-icon-color:hover svg path {
  fill: #1e1e1e;
}
:deep(.swiper-pagination-bullet) {
  border: solid 2px #fff;
}
:deep(.swiper-pagination-bullet-active) {
  background: #fff;
}
// -------------------------------------- Concerts
.concert-photo-show {
  position: absolute;
  border-radius: 40px;
  filter: grayscale(0) brightness(90%);
}
:deep(.concert-section > .swiper-button-prev),
:deep(.concert-section > .swiper-button-next) {
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
    border-radius: 40%;
    box-shadow: inset 0 0 20px #fff;
    color: #fff;
    top: -150px;
  }
}
//-------------------------------------- Artists
details {
  ::marker {
    content: '';
  }
  transition: all 0.8s ease;
  &[open] {
    opacity: 0.8;
    width: 400px;
    filter: brightness(1) grayscale(0);
  }
}

/* Content Animation */
details {
  &::details-content {
    position: absolute;
    bottom: 12%;

    background: transparent;
    opacity: 0;

    transform: translateY(2rem);
    transition: all 1s ease;
  }

  &[open]::details-content {
    width: 380px;
    opacity: 1;
    transform: none;
  }
}

// -------------------------------------- Venues
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
:deep(.venue-section > .swiper-button-prev::after) {
  left: 5px;
  color: #42dfc8;
}
:deep(.venue-section > .swiper-button-next::after) {
  right: 5px;
  color: #d595f1;
}
</style>
