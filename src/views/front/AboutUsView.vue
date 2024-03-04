<template>
  <div class="text-left md:text-center pt-[60px] md:pt-[80px]">
    <span class="display-title-back text-stroke-light z-[-1]">WEBSITE CONCEPT</span>
  </div>
  <div class="container relative mb-[50px] lg:mb-[117px] mt-[-3rem] xl:mt-[-4rem]">
    <h1 class="drop-shadow-light md:pl-20">網站理念</h1>
    <div class="border-2 w-[40%] md:w-[55%] ml-auto"></div>
    <p class="text-center md:px-20 md:pt-[7rem]">
      現在台灣舉辦的音樂演唱會愈來愈多，不論是國際知名的歌手、韓團或台灣本地歌手，都紛紛在台灣開唱。<br />
      然而，目前卻沒有一個能夠集結所有演唱會資訊的平台。<br />
      現有的售票系統只提供部分演唱會資訊，而有些演出甚至只在特定售票系統上有售票。<br />
      我們希望建立一個友善的平台，可以收集整理全台灣的演唱會資訊，讓大家不再需要辛苦查找各種資料，就能找到想看的演唱會資訊！
    </p>
    <!-- <div class="absolute rotate-90 right-0">WEBSITE CONCEPT.</div> -->
  </div>
  <div class="pt-[128px] lg:pt-[117px] space-y-[178px] lg:space-y-[117px] pb-[128px] lg:pb-[192px]">
    <section class="blur-bg-frontend display-title-back container mb-[5rem] md:mb-[20rem] relative">
      <div class="text-center absolute mt-[-3.5rem] lg:mt-[-5.5rem] xl:mt-[5.5rem] block xl:hidden">
        <span class="display-title-back text-stroke-light z-[-1]">FRONTEND</span>
      </div>
      <h2 class="drop-shadow-light text-5xl md:pl-[30%] tracking-normal">TEAM</h2>
      <div
        class="tracking-normal text-base bg-shadow-trans-text rounded-[40px] px-10 lg:px-20 py-6 flex flex-col sm:flex-row justify-between space-y-10 sm:space-y-0 mx-auto w-[60%] sm:w-[600px] lg:w-[800px]">
        <ul v-for="person in teamFrontend" :key="person">
          <li class="flex flex-col items-center space-y-2">
            <img :src="person.avatar" alt="圖片" class="w-[5rem] h-[5rem]" />
            <p class="text-lg">{{ person.name }}</p>
            <ul class="flex">
              <li v-for="(link, index) in person.link" :key="index">
                <a :href="link" target="_blank" class="inline-flex justify-center items-center size-10">
                  <font-awesome-icon :icon="socialIcon[index]" class="text-xl" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <section class="blur-bg-backend display-title-back container mb-[5rem] md:mb-[20rem] relative">
      <div class="text-center absolute mt-[-3.5rem] lg:mt-[-5.5rem] xl:mt-[5.5rem] block xl:hidden">
        <span class="display-title-back text-stroke-light z-[-1]">BACKEND</span>
      </div>
      <h2 class="drop-shadow-light text-5xl mx-auto md:pl-[30%] tracking-normal">TEAM</h2>
      <div class="tracking-normal text-base bg-shadow-trans-text rounded-[40px] px-10 py-6 flex flex-col sm:flex-row justify-center space-y-10 sm:space-y-0 mx-auto w-[60%] sm:w-[200px] lg:w-[250px]">
        <ul v-for="person in teamBackend" :key="person">
          <li class="flex flex-col items-center space-y-2">
            <img :src="person.avatar" alt="圖片" class="w-[5rem] h-[5rem]" />
            <p class="text-lg">{{ person.name }}</p>
            <ul class="flex">
              <li v-for="(link, index) in person.link" :key="index">
                <a :href="link" target="_blank" class="inline-flex justify-center items-center size-10">
                  <font-awesome-icon :icon="socialIcon[index]" class="text-xl" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <div class="text-center flex flex-col space-y-[-2.5rem] xl:space-y-[-4rem] mb-[5rem] md:mb-[12rem] relative">
      <div class="bg-contactUs text-stroke-light">CONTACT US</div>
      <div class="bg-contactUs text-stroke-light">CONTACT US</div>
      <div class="relative">
        <div class="w-[100%] text-center absolute text-sm xl:text-lg font-bold bottom-0 color-tiffany">this-email-is-not-real@gmail.com</div>
        <div class="bg-contactUs drop-shadow-light">CONTACT US</div>
      </div>
      <div class="bg-contactUs text-stroke-light">CONTACT US</div>
      <div class="bg-contactUs text-stroke-light">CONTACT US</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialIcon: ['fa-brands fa-github', 'fa-brands fa-linkedin'],
      teamFrontend: [
        {
          name: '豪豪',
          link: ['https://github.com/andrewye0128', 'https://www.linkedin.com/in/andrew-ye-profile1/'],
          avatar: 'https://blush.design/api/download?shareUri=aMylVqvsAIdbUCWF&c=Skin_0%7Eedb98a&w=300&h=300&fm=png',
        },
        {
          name: '銀光菇',
          link: ['https://github.com/Gingene', 'https://www.linkedin.com/in/silverfungi147'],
          avatar: 'https://blush.design/api/download?shareUri=Ot4kL7W8vXaZuIln&c=Skin_0%7Effdbb4&w=300&h=300&fm=png',
        },
        {
          name: 'Celine 510',
          link: ['https://github.com/Celine510', 'https://www.linkedin.com/in/celine510'],
          avatar: 'https://blush.design/api/download?shareUri=SrcR-6gR3qxMRiBp&c=Skin_0%7Eedb98a&w=300&h=300&fm=png',
        },
        {
          name: 'Celine',
          link: ['https://github.com/Celine-Lin', 'https://www.linkedin.com/in/celinelin-hsianglinglin/'],
          avatar: 'https://blush.design/api/download?shareUri=r7SbaqZLzqnnhy1b&c=Skin_0%7Effdbb4&w=300&h=300&fm=png',
        },
      ],
      teamBackend: [
        {
          name: '人平',
          link: ['https://github.com/chenjenping', 'https://www.linkedin.com/in/chenjenping/'],
          avatar: 'https://blush.design/api/download?shareUri=ZK0hThocjZ27JP1R&c=Skin_0%7Eedb98a&w=300&h=300&fm=png',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blur-bg-frontend::before,
.blur-bg-backend::before {
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--background);
  // font-weight: bold;
  -webkit-text-stroke: 2px var(--black-80);
  display: none;
}
.blur-bg-frontend::before {
  content: 'FRONTEND';
}
.blur-bg-backend::before {
  content: 'BACKEND';
}
.bg-contactUs {
  font-weight: bold;
  font-size: 4.5rem;
  letter-spacing: calc(calc(4rem) * -0.04);
  overflow-x: hidden;
  text-wrap: nowrap;
  font-weight: 900;
}
.color-tiffany {
  color: var(--tiffany);
}
@media screen and (min-width: 1280px) {
  .blur-bg-frontend::before,
  .blur-bg-backend::before {
    font-size: 14rem;
    display: block;
  }
  .bg-contactUs {
    font-weight: bold;
    font-size: 6rem;
    letter-spacing: calc(calc(6rem + 1vw) * -0.04);
  }
}
@media screen and (min-width: 1536px) {
  .blur-bg-frontend::before,
  .blur-bg-backend::before {
    font-size: 17rem;
  }
  .bg-contactUs {
    font-weight: bold;
    font-size: 7rem;
    letter-spacing: calc(calc(7rem + 1vw) * -0.04);
  }
}
</style>
