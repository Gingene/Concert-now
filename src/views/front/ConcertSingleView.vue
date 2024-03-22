<template>
  <div class="container space-y-[20px] md:space-y-[58px] lg:space-y-[117px] pb-[128px] lg:pb-[192px] pt-[60px] md:pt-[80px]">
    <main class="flex flex-col gap-8">
      <div class="lg:flex lg:justify-between lg:gap-8">
        <div class="space-y-6 lg:flex lg:flex-col lg:justify-between lg:w-[100%]">
          <div class="flex space-x-4">
            <div class="bg-shadow-trans-text w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] rounded-[20px] md:rounded-[30px] sm:p-2 flex flex-col justify-center items-center font-bold space-y-[-.5rem]">
              <div class="text-sm">{{ concertHoldingStamp.week }}.</div>
              <div class="text-3xl">{{ concertHoldingStamp.day }}</div>
              <div class="text-sm">{{ concertHoldingStamp.monthAndYear }}</div>
            </div>
            <h1 class="w-[80%] flex-auto text-lg md:text-xl lg:text-2xl font-bold">{{ singleConcert.title }}</h1>
            <Button size="base" @click="callSaveAction(singleConcert.id)" class="mx-auto lg:mx-0 flex lg:hidden">
              <font-awesome-icon v-if="isSaved.some((item) => item.id === singleConcert.id)" icon="fa-solid fa-bookmark" class="text-3xl lg:hidden" style="color: var(--pink)" />
              <font-awesome-icon v-else icon="fa-regular fa-bookmark" class="text-3xl lg:hidden" style="color: var(--pink)" />
            </Button>
          </div>
          <img :src="singleConcert.cover_urls?.straight" alt="演唱會圖片" class="mx-auto rounded-[40px] lg:hidden" />
          <p class="leading-7 lg:bg-shadow-trans-text lg:rounded-[40px] lg:border-black-60 lg:px-10 lg:pt-10 lg:pb-6 lg:h-[100%] lg:overflow-y-hidden">
            演出時間: {{ singleConcert.holding_time }}<br />
            演出地點: {{ singleConcert.venue?.title }}<br />
            地址: {{ singleConcert.venue?.address }}<br />
            售票時間: {{ singleConcert.sales_time }}<br />
            座位區: NT${{ singleConcert.price_list?.join(' / ') }}<br />
            主辦單位: {{ singleConcert.organizers?.join('、') }}
          </p>
        </div>
        <img :src="singleConcert.cover_urls?.straight" alt="演唱會圖片" class="mx-auto lg:mx-0 rounded-[40px] lg:h-[400px] hidden lg:block xl:hidden" />
        <img :src="singleConcert.cover_urls?.square" alt="演唱會圖片" class="mx-0 rounded-[40px] w-[400px] h-[400px] object-cover hidden xl:block 2xl:hidden" />
        <img :src="singleConcert.cover_urls?.horizontal" alt="演唱會圖片" class="mx-0 rounded-[40px] w-[700px] h-[400px] object-cover hidden 2xl:block" />
      </div>
      <div class="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-around">
        <div v-if="!hasHold" class="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto bg-shadow-trans-text rounded-[40px] flex flex-col sm:flex-row items-center justify-center py-4 lg:py-0 relative">
          <p class="text-xl sm:text-2xl font-bold relative">
            <span class="text-sm sm:text-base font-normal absolute bottom-1 left-[-16%]">倒數</span>
            {{ countdownTimer.days }}<span class="pl-1 pr-3 text-sm sm:text-base font-normal">天</span> {{ countdownTimer.hours }} : {{ countdownTimer.minutes }} :
            {{ countdownTimer.seconds }}
          </p>
        </div>
        <div v-else class="w-[50%] lg:w-[30%] mx-auto bg-shadow-trans-text rounded-[40px] flex flex-col sm:flex-row items-center justify-center py-3 lg:py-0 relative">
          <p class="text-lg font-bold relative px-4">已舉辦</p>
        </div>
        <router-link :to="`/artists/${singleConcert.artist?.id}`" class="text-center">
          <Button variant="white-outline" size="base3" class="border-[1px] border-black-60 gap-1">
            歌手 / {{ singleConcert.artist?.name }}
          </Button>
        </router-link>
        <Button
          variant="white-outline"
          size="base3"
          v-if="AccessToken !== undefined"
          @click="callSaveAction(singleConcert.id)"
          class="mx-auto lg:mx-0 border-[1px] border-black-60 lg:order-first hidden lg:flex">
          <font-awesome-icon v-if="isSaved.some((item) => item.id === singleConcert.id)" icon="fa-solid fa-bookmark" class="text-xl pr-2" style="color: var(--pink)" />
          <font-awesome-icon v-else icon="fa-regular fa-bookmark" class="text-xl pr-2" style="color: var(--pink)" />
          收藏
        </Button>
        <AlertDialog>
          <AlertDialogTrigger class="lg:order-first hidden lg:flex">
            <Button variant="white-outline" size="base3" v-if="AccessToken === undefined" class="border-[1px] border-black-60">
              <font-awesome-icon icon="fa-regular fa-bookmark" class="text-xl pr-2" style="color: var(--pink)" />
              收藏
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>登入才能收藏 ᓫ(°⌑°)ǃ</AlertDialogTitle>
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
      </div>
    </main>
    <section>
      <TitleComponent class="mb-4">
        <template #subTitle>TICKETS</template>
        <template #mainTitle>購票傳送門</template>
      </TitleComponent>
      <div class="flex flex-col">
        <div v-for="(item, index) in singleConcert.foreign_urls" :key="item" class="flex items-center justify-start gap-10 lg:gap-20 relative">
          <AlertDialog>
            <AlertDialogTrigger class="w-full">
              <div class="flex justify-between items-center mt-2 xl:mt-4 w-[100%] hover:translate-y-[-0.2rem] hover:lg:translate-y-[-0.4rem]">
                <div class="text-6xl md:text-[5rem] xl:text-[7rem] text-stroke-light font-bold mb-[-1.7rem] lg:mb-[-2rem] xl:mb-[-2.6rem]">0{{ index + 1 }}</div>
                <h2 class="text-lg md:text-xl lg:text-3xl -ml-[0rem] md:-ml-[8rem] xl:-ml-[20rem] mt-6 md:mt-7 lg:mt-11">
                  {{ item.name }}
                </h2>
                <button class="py-4 mt-6 md:mt-7 lg:mt-11">
                  <svg class="w-[120px] sm:w-[230px] sm:h-[20px] xl:w-[299px] xl:h-[26px]" width="184" height="16" viewBox="0 0 184 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M183.707 8.70711C184.098 8.31658 184.098 7.68342 183.707 7.29289L177.343 0.928932C176.953 0.538408 176.319 0.538408 175.929 0.928932C175.538 1.31946 175.538 1.95262 175.929 2.34315L181.586 8L175.929 13.6569C175.538 14.0474 175.538 14.6805 175.929 15.0711C176.319 15.4616 176.953 15.4616 177.343 15.0711L183.707 8.70711ZM0 9H183V7H0V9Z"
                      fill="white" />
                  </svg>
                </button>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>您即將前往第三方網頁</AlertDialogTitle>
                <AlertDialogDescription></AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <a :href="item.url" rel="noreferrer noopener" target="_blank">繼續前往</a>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <div class="border-b-8 h-2 w-[100%] absolute -bottom-2"></div>
        </div>
      </div>
    </section>
    <section>
      <TitleComponent class="flex justify-center mb-[-1rem] z-10">
        <template #subTitle>SONGS</template>
        <template #mainTitle>歌單</template>
      </TitleComponent>
      <div class="tracking-normal text-base bg-shadow-trans-text rounded-[40px] px-8 py-12 flex flex-col items-center mx-auto w-auto max-w-[350px] sm:max-w-none sm:w-[400px] lg:w-[450px] gap-2">
        <iframe
          class="rounded-[20px] w-auto max-w-[284px] sm:max-w-none sm:w-[336px]"
          id="iamid"
          width="336"
          height="189"
          :src="`https://www.youtube.com/embed/${ytId}?enablejsapi=1`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          @onload="onYouTubeIframeAPIReady()"
          v-if="ytId && hasHold"></iframe>
        <div v-else class="flex justify-center items-center text-center text-sm">
          <img :src="singleConcert.cover_urls?.square" alt="演唱會圖片" class="rounded-[20px] w-[336px] h-[336px] object-cover" />
        </div>
        <div class="text-xl lg:text-2xl font-bold marquee-container w-[284px] sm:w-[336px]">
          <div class="marquee-text">{{ singleConcert.title?.repeat(4, ' ') }}</div>
          <div class="marquee-text">{{ singleConcert.title?.repeat(4, ' ') }}</div>
          <div class="marquee-text">{{ singleConcert.title?.repeat(4, ' ') }}</div>
        </div>
        <div class="flex justify-between w-[284px] sm:w-[336px]">
          <router-link :to="`/artists/${singleConcert.artist?.id}`">
            <div class="text-black-40 text-tiny">{{ singleConcert.artist?.name }}</div>
          </router-link>
          <Dialog :open="openTwo" @update:open="(open) => (openTwo = open)">
            <DialogTrigger v-if="hasHold && isLogin" class="flex">
              <button class="flex justify-center items-center border-2 rounded-[50%] w-8 h-8 hover:border-[var(--pink)] hover:bg-[var(--pink)] hover:box-shadow-pink-blur-hover">
                <font-awesome-icon icon="fa-solid fa-plus" class="text-lg" />
              </button>
            </DialogTrigger>
            <AlertDialog v-if="hasHold && !isLogin">
              <AlertDialogTrigger>
                <button class="flex justify-center items-center border-2 rounded-[50%] w-8 h-8 hover:border-[var(--pink)] hover:bg-[var(--pink)] hover:box-shadow-pink-blur-hover">
                  <font-awesome-icon icon="fa-solid fa-plus" class="text-lg" />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>登入後才能新增歌曲喔！</AlertDialogTitle>
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
            <Popover>
              <PopoverTrigger v-if="!hasHold">
                <button class="flex justify-center items-center border-2 rounded-[50%] w-8 h-8 hover:border-[var(--pink)] hover:bg-[var(--pink)] hover:box-shadow-pink-blur-hover">
                  <font-awesome-icon icon="fa-solid fa-plus" class="text-lg" />
                </button>
              </PopoverTrigger>
              <PopoverContent> 不能當預言家喔 (⁎⁍̴̛ᴗ⁍̴̛⁎) 演唱會舉辦後才可以新增歌曲 </PopoverContent>
            </Popover>
            <DialogContent class="rounded-md">
              <DialogHeader>
                <DialogTitle class="mb-2 md:mb-4">新增歌曲</DialogTitle>
                <p class="text-base text-black-0">請輸入 {{ singleConcert.title }} 有演唱的曲目</p>
                <p class="text-sm text-black-60 pb-0 md:pb-4">※ 單筆曲目的名稱與 YT 連結都要填寫，若有缺漏會新增失敗。</p>
                <DialogDescription class="space-y-2 md:space-y-4">
                  <div class="space-y-2">
                    <p class="text-start text-base text-black-40">曲目 1</p>
                    <div class="relative flex items-center">
                      <label for="song1Name" class="absolute text-white bg-black-85 border-black-85 border-[1px] rounded-md pl-6 pr-20 -z-10 py-2 px-3">曲目名稱</label>
                      <Input type="text" name="song1Name" v-model="songs[0].name" class="ml-[7rem] border-white" />
                    </div>
                    <div class="relative flex items-center">
                      <label for="song1Url" class="absolute text-white bg-black-85 border-black-85 border-[1px] rounded-md pl-6 pr-20 -z-10 py-2 px-3">YT 連結</label>
                      <Input type="text" name="song1Url" v-model="songs[0].youtube_url" class="ml-[7rem] border-white" />
                    </div>
                  </div>
                  <div class="space-y-2">
                    <p class="text-start text-base text-black-40">曲目 2</p>
                    <div class="relative flex items-center">
                      <label for="song2Name" class="absolute text-white bg-black-85 border-black-85 border-[1px] rounded-md pl-6 pr-20 -z-10 py-2 px-3">曲目名稱</label>
                      <Input type="text" name="song2Name" v-model="songs[1].name" class="ml-[7rem] border-white" />
                    </div>
                    <div class="relative flex items-center">
                      <label for="song2Url" class="absolute text-white bg-black-85 border-black-85 border-[1px] rounded-md pl-6 pr-20 -z-10 py-2 px-3">YT 連結</label>
                      <Input type="text" name="song2Url" v-model="songs[1].youtube_url" class="ml-[7rem] border-white" />
                    </div>
                  </div>
                  <div class="space-y-2">
                    <p class="text-start text-base text-black-40">曲目 3</p>
                    <div class="relative flex items-center">
                      <label for="song3Name" class="absolute text-white bg-black-85 border-black-85 border-[1px] rounded-md pl-6 pr-20 -z-10 py-2 px-3">曲目名稱</label>
                      <Input type="text" name="song3Name" v-model="songs[2].name" class="ml-[7rem] border-white" />
                    </div>
                    <div class="relative flex items-center">
                      <label for="song3Url" class="absolute text-white bg-black-85 border-black-85 border-[1px] rounded-md pl-6 pr-20 -z-10 py-2 px-3">YT 連結</label>
                      <Input type="text" name="song3Url" v-model="songs[2].youtube_url" class="ml-[7rem] border-white" />
                    </div>
                  </div>
                  <p class="text-sm text-black-60 text-center cursor-pointer" @click="showCommentPolicy">送出即代表您同意遵守評論規範</p>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter class="justify-center sm:justify-center">
                <DialogClose as-child>
                  <Button type="button" size="base" class="bg-black-80 hover:bg-black-80 px-14 md:px-14 lg:px-14">取消</Button>
                </DialogClose>
                <Button variant="tiffany-fill" size="base" type="submit" class="px-14 md:px-14 lg:px-14" @click="addSongs">送出</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <ScrollArea class="h-[19rem] w-full mt-2" v-if="hadSong && hasHold">
          <div v-for="(song, index) in songList" :key="song + index">
            <div class="text-base flex justify-between items-center bg-trans">
              <div>{{ index + 1 }}</div>
              <!-- 點擊更換YT iframe影片 -->
              <button @click="changeYTplayer(song.youtube_url)" class="ml-4 mr-auto py-3 max-w-[110px] sm:max-w-[160px] lg:max-w-[208px] overflow-x-hidden text-nowrap">{{ song.name }}</button>
              <div class="flex pr-4 gap-4 sm:gap-6 h-14 w-[7rem]">
                <!-- 推與倒推按鈕 -->
                <button class="flex items-center text-sm gap-1 hover:text-[var(--tiffany)]">
                  <font-awesome-icon icon="fa-solid fa-chevron-up" />
                  <p>{{ song.up_votes }}</p>
                </button>
                <button class="flex items-center text-sm gap-1 hover:text-[var(--pink)]">
                  <font-awesome-icon icon="fa-solid fa-chevron-down" />
                  <p>{{ song.down_votes }}</p>
                </button>
              </div>
            </div>
            <div class="w-full h-[1px] bg-[var(--black-60)]"></div>
          </div>
        </ScrollArea>
        <div v-else class="h-[5rem] flex justify-center items-center text-center text-sm">
          你有參與這場演唱會嗎？<br />來新增第一筆歌曲吧
          <svg width="121" height="132" viewBox="0 0 371 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M367.5 0.5L359.515 8.8409L370.731 11.5858L367.5 0.5ZM4.17791 95.1443C4.67639 95.382 5.27324 95.1707 5.51103 94.6722C5.74882 94.1738 5.53749 93.5769 5.03901 93.3391L4.17791 95.1443ZM12.2119 96.6803C11.7091 96.4517 11.1163 96.674 10.8877 97.1768C10.6591 97.6796 10.8814 98.2724 11.3842 98.501L12.2119 96.6803ZM18.554 101.681C19.0609 101.9 19.6496 101.666 19.8687 101.159C20.0879 100.653 19.8546 100.064 19.3477 99.8447L18.554 101.681ZM26.6863 102.934C26.1752 102.724 25.5912 102.969 25.382 103.48C25.1727 103.991 25.4173 104.575 25.9284 104.784L26.6863 102.934ZM33.2607 107.704C33.7758 107.903 34.3549 107.647 34.5541 107.132C34.7533 106.617 34.4973 106.038 33.9822 105.838L33.2607 107.704ZM41.3751 108.613C40.8561 108.424 40.2823 108.692 40.0935 109.211C39.9047 109.73 40.1723 110.304 40.6913 110.493L41.3751 108.613ZM48.1743 113.129C48.6971 113.307 49.2653 113.028 49.4434 112.505C49.6215 111.982 49.3421 111.414 48.8194 111.236L48.1743 113.129ZM56.2732 113.689C55.7468 113.522 55.1846 113.813 55.0174 114.34C54.8502 114.866 55.1414 115.428 55.6678 115.595L56.2732 113.689ZM63.2871 117.925C63.817 118.081 64.3728 117.778 64.5286 117.248C64.6844 116.718 64.3812 116.163 63.8513 116.007L63.2871 117.925ZM71.3734 118.13C70.8403 117.986 70.2912 118.301 70.1469 118.835C70.0027 119.368 70.3179 119.917 70.851 120.061L71.3734 118.13ZM78.5868 122.062C79.1231 122.194 79.665 121.866 79.7972 121.33C79.9294 120.794 79.602 120.252 79.0657 120.12L78.5868 122.062ZM86.6985 121.911C86.1594 121.791 85.625 122.131 85.505 122.67C85.3849 123.209 85.7246 123.743 86.2636 123.863L86.6985 121.911ZM94.0558 125.504C94.5975 125.612 95.1238 125.26 95.2313 124.718C95.3388 124.176 94.9867 123.65 94.445 123.542L94.0558 125.504ZM102.169 124.981C101.625 124.886 101.107 125.25 101.013 125.795C100.918 126.339 101.282 126.856 101.826 126.951L102.169 124.981ZM109.671 128.219C110.217 128.301 110.726 127.924 110.807 127.378C110.889 126.831 110.512 126.323 109.966 126.241L109.671 128.219ZM117.761 127.307C117.212 127.239 116.713 127.628 116.645 128.176C116.577 128.724 116.966 129.224 117.514 129.292L117.761 127.307ZM125.403 130.173C125.952 130.228 126.442 129.826 126.496 129.277C126.551 128.727 126.149 128.237 125.6 128.183L125.403 130.173ZM133.442 128.86C132.891 128.819 132.412 129.233 132.371 129.784C132.331 130.334 132.744 130.814 133.295 130.854L133.442 128.86ZM141.217 131.334C141.769 131.361 142.237 130.935 142.264 130.383C142.29 129.831 141.864 129.363 141.312 129.337L141.217 131.334ZM149.177 129.609C148.625 129.597 148.168 130.035 148.156 130.587C148.144 131.139 148.582 131.596 149.134 131.608L149.177 129.609ZM157.074 131.673C157.627 131.67 158.072 131.22 158.069 130.668C158.066 130.116 157.616 129.67 157.064 129.673L157.074 131.673ZM164.925 129.527C164.373 129.545 163.94 130.007 163.958 130.559C163.975 131.111 164.437 131.544 164.989 131.526L164.925 129.527ZM172.93 131.162C173.481 131.13 173.901 130.656 173.868 130.105C173.836 129.553 173.362 129.133 172.811 129.166L172.93 131.162ZM180.64 128.591C180.09 128.639 179.683 129.124 179.731 129.674C179.779 130.225 180.264 130.632 180.814 130.584L180.64 128.591ZM188.734 129.779C189.283 129.716 189.676 129.219 189.612 128.671C189.549 128.122 189.052 127.729 188.504 127.793L188.734 129.779ZM196.272 126.781C195.726 126.86 195.347 127.367 195.426 127.914C195.505 128.46 196.012 128.839 196.559 128.76L196.272 126.781ZM204.433 127.504C204.977 127.409 205.341 126.891 205.247 126.347C205.152 125.803 204.634 125.439 204.09 125.534L204.433 127.504ZM211.805 124.072C211.264 124.182 210.915 124.711 211.026 125.252C211.137 125.793 211.665 126.142 212.206 126.031L211.805 124.072ZM219.97 124.322C220.508 124.195 220.841 123.656 220.714 123.119C220.587 122.581 220.049 122.248 219.511 122.375L219.97 124.322ZM227.146 120.453C226.613 120.596 226.296 121.144 226.439 121.678C226.582 122.211 227.13 122.528 227.663 122.385L227.146 120.453ZM235.284 120.22C235.812 120.062 236.112 119.504 235.953 118.975C235.794 118.446 235.237 118.146 234.708 118.305L235.284 120.22ZM242.231 115.916C241.708 116.092 241.425 116.658 241.6 117.182C241.776 117.706 242.342 117.988 242.866 117.813L242.231 115.916ZM250.326 115.186C250.844 114.995 251.108 114.42 250.917 113.902C250.725 113.384 250.15 113.119 249.632 113.311L250.326 115.186ZM256.993 110.455C256.481 110.663 256.235 111.246 256.443 111.758C256.651 112.27 257.234 112.516 257.746 112.308L256.993 110.455ZM265.049 109.202C265.554 108.977 265.781 108.386 265.556 107.882C265.332 107.377 264.741 107.15 264.236 107.374L265.049 109.202ZM271.356 104.068C270.859 104.309 270.652 104.907 270.892 105.404C271.133 105.901 271.731 106.109 272.228 105.868L271.356 104.068ZM279.337 102.276C279.826 102.018 280.013 101.414 279.756 100.925C279.498 100.436 278.894 100.249 278.405 100.506L279.337 102.276ZM285.297 96.7252C284.817 96.9991 284.651 97.6099 284.925 98.0895C285.198 98.5691 285.809 98.7358 286.289 98.4619L285.297 96.7252ZM293.105 94.4105C293.574 94.1201 293.72 93.5038 293.429 93.0341C293.139 92.5644 292.523 92.419 292.053 92.7095L293.105 94.4105ZM298.688 88.4405C298.229 88.7477 298.106 89.3688 298.413 89.8278C298.72 90.2868 299.341 90.4099 299.8 90.1027L298.688 88.4405ZM306.311 85.5711C306.759 85.2473 306.859 84.6221 306.535 84.1747C306.211 83.7273 305.586 83.6272 305.139 83.951L306.311 85.5711ZM311.41 79.2295C310.975 79.57 310.898 80.1986 311.239 80.6334C311.579 81.0682 312.208 81.1446 312.643 80.8041L311.41 79.2295ZM318.819 75.7691C319.24 75.4118 319.292 74.7807 318.935 74.3596C318.577 73.9385 317.946 73.8869 317.525 74.2442L318.819 75.7691ZM323.417 69.0352C323.011 69.4094 322.985 70.0421 323.359 70.4482C323.733 70.8544 324.366 70.8804 324.772 70.5061L323.417 69.0352ZM330.487 65.0148C330.877 64.6238 330.876 63.9906 330.485 63.6006C330.094 63.2106 329.461 63.2115 329.071 63.6025L330.487 65.0148ZM334.503 57.9107C334.131 58.3187 334.16 58.9512 334.568 59.3234C334.975 59.6957 335.608 59.6667 335.98 59.2587L334.503 57.9107ZM341.212 53.25C341.565 52.8251 341.507 52.1946 341.082 51.8419C340.657 51.4891 340.026 51.5476 339.674 51.9726L341.212 53.25ZM344.542 45.8073C344.211 46.2492 344.3 46.876 344.742 47.2073C345.184 47.5387 345.811 47.4491 346.142 47.0073L344.542 45.8073ZM350.742 40.5297C351.05 40.0711 350.928 39.4499 350.469 39.1422C350.01 38.8344 349.389 38.9567 349.081 39.4153L350.742 40.5297ZM353.262 32.7973C352.98 33.2724 353.137 33.8858 353.612 34.1675C354.087 34.4491 354.701 34.2922 354.982 33.8171L353.262 32.7973ZM358.845 26.8335C359.097 26.3422 358.903 25.7394 358.412 25.487C357.921 25.2347 357.318 25.4283 357.066 25.9196L358.845 26.8335ZM360.426 18.8252C360.206 19.3319 360.439 19.9208 360.945 20.1405C361.452 20.3602 362.041 20.1275 362.261 19.6208L360.426 18.8252ZM365.177 12.1932C365.36 11.6722 365.086 11.1013 364.565 10.9181C364.044 10.735 363.473 11.0089 363.29 11.5299L365.177 12.1932ZM365.601 4.05266C365.459 4.58632 365.776 5.13423 366.31 5.27645C366.844 5.41867 367.392 5.10134 367.534 4.56768L365.601 4.05266ZM0.561209 93.3986C1.76826 93.988 2.97384 94.5699 4.17791 95.1443L5.03901 93.3391C3.84046 92.7674 2.64037 92.1882 1.43879 91.6014L0.561209 93.3986ZM11.3842 98.501C13.7804 99.5903 16.1704 100.65 18.554 101.681L19.3477 99.8447C16.9755 98.8192 14.5968 97.7645 12.2119 96.6803L11.3842 98.501ZM25.9284 104.784C28.3796 105.788 30.8238 106.761 33.2607 107.704L33.9822 105.838C31.5575 104.901 29.1255 103.932 26.6863 102.934L25.9284 104.784ZM40.6913 110.493C43.1937 111.403 45.6881 112.282 48.1743 113.129L48.8194 111.236C46.3462 110.393 43.8647 109.519 41.3751 108.613L40.6913 110.493ZM55.6678 115.595C58.2166 116.405 60.7565 117.181 63.2871 117.925L63.8513 116.007C61.3345 115.267 58.8084 114.494 56.2732 113.689L55.6678 115.595ZM70.851 120.061C73.4398 120.762 76.0185 121.428 78.5868 122.062L79.0657 120.12C76.512 119.49 73.9478 118.827 71.3734 118.13L70.851 120.061ZM86.2636 123.863C88.8723 124.444 91.4698 124.991 94.0558 125.504L94.445 123.542C91.8743 123.032 89.292 122.489 86.6985 121.911L86.2636 123.863ZM101.826 126.951C104.454 127.408 107.069 127.831 109.671 128.219L109.966 126.241C107.38 125.855 104.781 125.435 102.169 124.981L101.826 126.951ZM117.514 129.292C120.157 129.621 122.787 129.914 125.403 130.173L125.6 128.183C123.001 127.925 120.388 127.634 117.761 127.307L117.514 129.292ZM133.295 130.854C135.951 131.05 138.592 131.209 141.217 131.334L141.312 129.337C138.704 129.212 136.081 129.054 133.442 128.86L133.295 130.854ZM149.134 131.608C151.798 131.665 154.445 131.687 157.074 131.673L157.064 129.673C154.452 129.687 151.823 129.665 149.177 129.609L149.134 131.608ZM164.989 131.526C167.655 131.44 170.302 131.319 172.93 131.162L172.811 129.166C170.201 129.321 167.573 129.442 164.925 129.527L164.989 131.526ZM180.814 130.584C183.475 130.351 186.115 130.083 188.734 129.779L188.504 127.793C185.904 128.094 183.282 128.36 180.64 128.591L180.814 130.584ZM196.559 128.76C199.207 128.377 201.832 127.958 204.433 127.504L204.09 125.534C201.507 125.984 198.901 126.4 196.272 126.781L196.559 128.76ZM212.206 126.031C214.82 125.496 217.408 124.926 219.97 124.322L219.511 122.375C216.968 122.975 214.399 123.541 211.805 124.072L212.206 126.031ZM227.663 122.385C230.231 121.698 232.771 120.976 235.284 120.22L234.708 118.305C232.215 119.055 229.694 119.771 227.146 120.453L227.663 122.385ZM242.866 117.813C245.383 116.97 247.87 116.095 250.326 115.186L249.632 113.311C247.196 114.211 244.729 115.081 242.231 115.916L242.866 117.813ZM257.746 112.308C260.214 111.305 262.648 110.269 265.049 109.202L264.236 107.374C261.856 108.433 259.441 109.46 256.993 110.455L257.746 112.308ZM272.228 105.868C274.635 104.702 277.005 103.504 279.337 102.276L278.405 100.506C276.093 101.724 273.743 102.912 271.356 104.068L272.228 105.868ZM286.289 98.4619C288.602 97.1409 290.874 95.7898 293.105 94.4105L292.053 92.7095C289.842 94.0765 287.59 95.4156 285.297 96.7252L286.289 98.4619ZM299.8 90.1027C302.017 88.6197 304.187 87.1086 306.311 85.5711L305.139 83.951C303.034 85.474 300.884 86.9711 298.688 88.4405L299.8 90.1027ZM312.643 80.8041C314.753 79.1513 316.812 77.4723 318.819 75.7691L317.525 74.2442C315.538 75.9303 313.5 77.5928 311.41 79.2295L312.643 80.8041ZM324.772 70.5061C326.735 68.6982 328.64 66.867 330.487 65.0148L329.071 63.6025C327.244 65.4345 325.359 67.2462 323.417 69.0352L324.772 70.5061ZM335.98 59.2587C337.79 57.2752 339.535 55.2713 341.212 53.25L339.674 51.9726C338.016 53.9695 336.292 55.9498 334.503 57.9107L335.98 59.2587ZM346.142 47.0073C347.75 44.863 349.284 42.7028 350.742 40.5297L349.081 39.4153C347.643 41.5587 346.129 43.6905 344.542 45.8073L346.142 47.0073ZM354.982 33.8171C356.357 31.4987 357.645 29.1696 358.845 26.8335L357.066 25.9196C355.885 28.2189 354.616 30.5128 353.262 32.7973L354.982 33.8171ZM362.261 19.6208C363.333 17.1471 364.306 14.6698 365.177 12.1932L363.29 11.5299C362.435 13.9605 361.48 16.3937 360.426 18.8252L362.261 19.6208Z"
              fill="#919191" />
          </svg>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center">
      <TitleComponent class="flex justify-center mb-8">
        <template #subTitle>VENUES</template>
        <template #mainTitle>場地體驗</template>
      </TitleComponent>
      <!-- Venue Info -->
      <article class="w-full md:w-[70%] lg:order-2 py-10 sm:py-14 px-2 xs:px-7 sm:px-12 lg:px-14 rounded-[40px] bg-shadow-trans-text venue-section">
        <!-- Venue Title -->
        <h2 href="#" class="font-bold text-center text-2xl xl:text-3xl pb-2">{{ venue.title }}</h2>
        <p class="text-gray-500 text-base sm:text-xl lg:pt-5 font-lato text-center">_____ STAGE _____</p>
        <!-- Venue Seats -->
        <div class="h-[200px] sm:h-[300px] w-[80%] xl:w-[60%] text-sm sm:text-base grid grid-flow-row auto-row-max gap-2 md:gap-4 mx-auto my-3 lg:my-5">
          <div
            v-for="(area, index) in venue.seat_areas"
            :key="`${index + 123}`"
            class="text-[12px] md:text-base lg:text-lg gradient-border flex justify-center items-center transition-transform hover:-translate-x-1 hover:-translate-y-1">
            <p>
              {{ area }}
            </p>
          </div>
        </div>
        <!-- Venue Comments -->
        <div class="truncate text-[12px] md:text-[14px] xl:text-[16px] flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 mb-2 sm:mb-12 p-3">
          <div class="text-left lg:w-[60%]" v-if="venueComments">
            <div class="grid grid-cols-9" v-for="(comment, index) in venueComments" :key="comment">
              <span>{{ index + 1 }}</span>
              <span class="col-span-2">{{ comment.seat_area }}</span>
              <span class="col-span-6">{{ comment.comment }}</span>
            </div>
          </div>
          <router-link :to="`/venues/${singleConcert.venue?.id}`" class="w-[100%] lg:w-[40%] flex justify-center lg:justify-end mb-7 sm:mb-0">
            <Button variant="white-outline" size="base" class="btn-explore-icon-color w-[80%] sm:w-[60%]my-2 lg:my-0">
              <span class="text-[12px] sm:text-[16px] text-center">EXPLORE</span>
              <svg class="block lg:hidden xl:block pl-1" width="270" height="16" viewBox="0 0 341 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M340.707 8.70711C341.098 8.31658 341.098 7.68342 340.707 7.29289L334.343 0.928932C333.953 0.538408 333.319 0.538408 332.929 0.928932C332.538 1.31946 332.538 1.95262 332.929 2.34315L338.586 8L332.929 13.6569C332.538 14.0474 332.538 14.6805 332.929 15.0711C333.319 15.4616 333.953 15.4616 334.343 15.0711L340.707 8.70711ZM0 9H340V7H0V9Z"
                  fill="white" />
              </svg>
            </Button>
          </router-link>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogClose, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import TitleComponent from '@/components/custom/TitleComponent.vue';
</script>

<script>
import { mapActions, mapState } from 'pinia';
import { useConcertsStore } from '@/stores/concerts';
import { useUserStore } from '@/stores/user';
import { useVenuesStore } from '@/stores/venues';
import moment from 'moment';
import { http, path } from '@/api';
import { useToast } from '@/components/ui/toast/use-toast';

const { toast } = useToast();

export default {
  data() {
    return {
      ytId: '',
      isLogin: false,
      hasHold: false,
      hadSong: false,
      // 新增歌單的欄位
      songs: [
        {
          name: '',
          youtube_url: '',
        },
        {
          name: '',
          youtube_url: '',
        },
        {
          name: '',
          youtube_url: '',
        },
      ],
      concertHoldingStamp: {
        week: 'Mon',
        day: '01',
        monthAndYear: 'Jan 2024',
      },
      countdownTimer: {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      },
      venueComments: [],
      // 操控新增歌曲 Dialog 顯示
      open: false,
      openTwo: false,
    };
  },
  props: ['id'],
  inject: ['http', 'path'],
  methods: {
    ...mapActions(useConcertsStore, ['getSingleConcert', 'callSaveAction']),
    ...mapActions(useUserStore, ['getUserSavedAndFollowed']),
    ...mapActions(useVenuesStore, ['getVenue']),

    changeYTplayer(url) {
      if (url.includes('embed')) {
        const num = url.indexOf('embed/') + 6;
        this.ytId = url.slice(num, num + 11);
      } else if (url.includes('youtu.be/')) {
        const num = url.indexOf('youtu.be') + 9;
        this.ytId = url.slice(num, num + 11);
      } else if (url.includes('youtube')) {
        let num = 0;
        if (url.includes('live')) num = url.indexOf('live/') + 5;
        if (url.includes('watch')) num = url.indexOf('watch?v=') + 8;
        this.ytId = url.slice(num, num + 11);
      }
    },
    addSongs() {
      const songsData = [...this.songs];
      if (songsData[0]?.name === '' || songsData[0]?.youtube_url === '') {
        toast({
          title: '填寫不完全',
          description: '請照順序填寫，單筆曲目的名稱與 YT 連結都要填喔！',
        });
        return;
      } else if (songsData[1]?.name === '' || songsData[1]?.youtube_url === '') songsData.splice(1, 2);
      else if (songsData[2]?.name === '' || songsData[2]?.youtube_url === '') songsData.pop();

      const data = { concert_id: this.singleConcert.id, songs: songsData };
      http
        .post(`${path.songs}`, data)
        .then((res) => {
          this.songs = [
            {
              name: '',
              youtube_url: '',
            },
            {
              name: '',
              youtube_url: '',
            },
            {
              name: '',
              youtube_url: '',
            },
          ];
          this.getSingleConcert(this.$route.params.id);
        })
        .then(() => {
          toast({
            title: '曲目新增成功',
            description: '',
          });
          this.openTwo = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    showCommentPolicy() {
      toast({
        title: '評論規範',
        description: '(1)請勿留言不實評論 (2)請物留言惡意評論 (3)請勿留言腥羶色內容。請注意警告五次將被永久停權。',
      });
    },
  },
  computed: {
    ...mapState(useConcertsStore, ['singleConcert']),
    ...mapState(useUserStore, ['AccessToken', 'savedConcerts']),
    ...mapState(useVenuesStore, ['venue', 'filterSeatComment']),
    // 寫在mounted會在取得pinia的state之前完成動作，導致取不到理想結果
    isSaved() {
      return [...this.savedConcerts];
    },
    songList() {
      return this.singleConcert.songs.sort((a, b) => b.up_votes - a.up_votes);
    },
  },
  watch: {
    id(newId) {
      this.getSingleConcert(newId);
    },
    singleConcert() {
      this.getVenue(this.singleConcert.venue?.id);
    },
    venue() {
      this.venueComments = [...this.venue.comments].splice(0, 3);
    },
  },
  mounted() {
    this.getSingleConcert(this.$route.params.id);

    // 確認使用者已登入
    if (this.AccessToken !== undefined) {
      this.getUserSavedAndFollowed();
    }
  },
  updated() {
    this.isLogin = this.AccessToken !== undefined;

    // 時間戳記
    this.concertHoldingStamp.week = moment(this.singleConcert.holding_time, 'YYYY-MM-DD hh:mm:ss').format('ddd');
    this.concertHoldingStamp.day = moment(this.singleConcert.holding_time, 'YYYY-MM-DD hh:mm:ss').format('DD');
    this.concertHoldingStamp.monthAndYear = moment(this.singleConcert.holding_time, 'YYYY-MM-DD hh:mm:ss').format('MMM YYYY');

    // 首次載入時 YT iframe 載入歌單第一首歌
    this.hadSong = this.singleConcert.songs?.length !== 0;
    if (this.singleConcert.songs?.length !== 0 && this.ytId === '') {
      this.changeYTplayer(this.songList[0]?.youtube_url);
    }

    // 倒數計時器
    const duration = moment.duration(moment(this.singleConcert.holding_time, 'YYYY-MM-DD hh:mm:ss').diff());

    this.countdownTimer.days = duration.days().toFixed().length === 2 ? duration.days() : '0' + duration.days();
    this.countdownTimer.hours = duration.hours().toFixed().length === 2 ? duration.hours() : '0' + duration.hours();
    this.countdownTimer.minutes = duration.minutes().toFixed().length === 2 ? duration.minutes() : '0' + duration.minutes();
    this.countdownTimer.seconds = duration.seconds().toFixed().length === 2 ? duration.seconds() : '0' + duration.seconds();

    // 是否已舉辦，用於歌單切換與計時器
    this.hasHold = moment.duration(moment(this.singleConcert.holding_time, 'YYYY-MM-DD hh:mm:ss').diff()).minutes() <= 0;
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
.btn-explore-icon-color:hover svg path {
  fill: #1e1e1e;
}
</style>
