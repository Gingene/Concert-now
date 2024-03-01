<template>
  <div class="container py-9">
    <h2>Hello ArtistSingleView {{ $route.params.id }}</h2>

    <!-- 表演者圖片(區塊一) start -->
    <section class="artist-intro mb-10 md:mb-[6.5rem] lg:mb-40">
      <div class="flex justify-between mb-5">
        <div>英國 / 搖滾樂/ 靈魂樂</div>
        <button class="basic tiffany-outline ml-auto">follow</button>
      </div>
      <div class="w-[85%] lg:w-[63%] mx-auto xl:relative">
        <img class="rounded-xl mb-5" src="https://dynamicmedia.livenationinternational.com/v/e/o/1cdeeecb-5a11-4261-92bc-e41d9236b188.jpg?auto=webp&width=1507.2" alt="表演者名稱" />
        <div class="flex justify-center xl:absolute bottom-[-13%] right-[-12%]">
          <div class="relative">
            <div class="bg-artistName absolute top-[-1rem] left-[1rem] text-stroke-light z-[-1]">Tom Jones</div>
            <div class="bg-artistName">Tom Jones</div>
          </div>
        </div>
        <!-- <div class="artist-names">
          <p class="artist-name text-4xl text-center font-semibold">Tom Jones</p>
          <p class="artist-name-after text-4xl text-center">Tom Jones</p>
        </div> -->
      </div>
    </section>
    <!-- 表演者圖片(區塊一) end -->

    <div class="md:flex md:justify-between lg:w-[70%] lg:mx-auto">
      <!-- 表演者介紹(區塊二) start -->
      <section class="mb-16 md:w-[45%]">
        <p class="break-all text-justify pb-10 md:pb-6 md:text-[12px] lg:text-[15px]">
          湯姆·瓊斯（Tom Jones）是威爾斯出生的傳奇歌手，以強而有力的嗓音和多樣化音樂風格著稱。1963年的《It's Not Unusual》使他一炮而紅，成就了漫長的音樂生涯。他的代表作品包括《Delilah》、《She's a
          Lady》等，橫跨流行、搖滾、靈魂等多個音樂流派。湯姆·瓊斯同時是電視節目《The Voice UK》的教練，保持著令人敬畏的音樂實力和表演魅力。
        </p>
        <hr class="pb-10 md:pb-6" />
        <p class="hidden font-semibold pb-4">HITS</p>
        <div class="gap-3 flex flex-row md:flex-col flex-wrap items-center md:items-end">
          <div class="song border text-center rounded-2xl py-[8px] px-[11px]">It's Not Unusual</div>
          <div class="song border text-center rounded-2xl py-[8px] px-[11px]">What's New Pussycat?</div>
          <div class="song border text-center rounded-2xl py-[8px] px-[11px]">She's a Lady</div>
          <div class="song border text-center rounded-2xl py-[8px] px-[11px]">Sex Bomb</div>
        </div>
      </section>
      <!-- 表演者介紹(區塊二) end -->

      <!-- 表演者介紹(區塊三) start -->
      <!-- honors md:w-[100%] ml-auto -->
      <section class="artist-honors-relative md:w-[50%]">
        <p class="honors text-stroke-light bg-artistName text-4xl md:text-[4.5rem] xl:text-7xl">HONORS</p>
        <p class="bg-shadow-trans-text artist-honors w-[90%] md:w-[100%] ml-auto text-center break-keep py-[50px] px-[10px] md:py-[60px] rounded-[31px] z-[-1]">
          2000 格萊美獎 (Grammy Awards): 終身成就獎 <br />-<br />
          1989年MTV音樂錄影帶大獎最佳舞台表演獎（"Kiss"）<br />-<br />2003年英國音樂殿堂榮譽獎 國際男歌手獎 <br />-<br />
          1999年MTV歐洲音樂大獎 全球成就獎
        </p>
      </section>
      <!-- 表演者介紹(區塊三) end -->
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    artistId() {
      Number(this.$route.params.id);
    },
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
      left: -210px;
    }

    .artist-honors {
      font-size: 16px;
    }
  }
}

// 需刪除
.text-stroke-light {
  // 標題後方裝飾穿透字
  @apply text-transparent;
  -webkit-text-stroke: 2px var(--black-80);
}

// 需刪除
.bg-shadow-trans-text {
  box-shadow:
    0px 1px 40px 0px rgba(227, 222, 255, 0.2) inset,
    0px 4px 16px 0px rgba(154, 146, 210, 0.2) inset;
  backdrop-filter: blur(10px);
}

// .artist-names {
//   position: relative;
//   width: 50%;
//   margin: 0 auto;

//   .artist-name {
//     -webkit-text-stroke: 1px #000;
//     z-index: 1;
//   }

//   .artist-name-after {
//     position: absolute;
//     top: -18px;
//     left: 59px;
//     color: #000;
//     -webkit-text-stroke: 1px #fff;
//     z-index: -1;
//   }
// }
</style>
