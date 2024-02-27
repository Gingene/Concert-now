<template>
  <div class="w-full h-[400px] md:h-[600px] lg:h-[850px] bg-no-repeat bg-cover absolute top-0 -z-10 bg-center 2xl:bg-bottom" :style="`background-image: url(${venue.picture?.horizontal})`"></div>
  <section class="container pb-20 lg:pb-32 pt-[250px] md:pt-[450px] lg:pt-[650px] space-y-6 lg:space-y-10">
    <div class="text-center">
      <h2 class="text-2xl font-display lg:text-3xl 2xl:text-5xl font-black">{{ venue.title }}</h2>
      <!-- <p class="text-lg md:text-3xl 2xl:text-5xl">{{ venue.address }}</p> -->
    </div>
    <main class="space-y-6 lg:space-y-10">
      <TitleComponent class="flex justify-center">
        <template #subTitle> VENUES </template>
        <template #mainTitle> 場地體驗 </template>
      </TitleComponent>
      <div class="lg:grid grid-cols-3 text-center" @mouseover="hoverTitle" @mouseleave="removeHoverTitle">
        <div class="hidden">{{ venue.seat_amount }}</div>
        <div class="col-start-2">{{ venue.eng_title }}</div>
        <div class="hidden">{{ venue.address }}</div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="lg:order-2">
          <img :src="venue.seat_picture" :alt="venue.title" class="w-full" />
        </div>
        <div class="space-y-6 lg:space-y-10 box-shadow-light2 p-4 rounded-xl">
          <div class="space-x-4 overflow-x-auto whitespace-nowrap">
            <Button variant="pink-outline"> 全部 </Button>
            <template v-for="seat in venue.seat_areas" :key="seat">
              <Button variant="pink-outline">{{ seat }}</Button>
            </template>
          </div>
          <ScrollArea class="lg:h-[280px] xl:h-[350px] 2xl:h-[500px] p-4">
            <Card v-for="comment in venue.comments" :key="comment.id" class="border-2 border-black-60 mb-4 lg:mb-6">
              <CardHeader>
                <CardTitle>
                  <img :src="comment.user.profile_image_url" :alt="comment.user.name" />
                  <span class="ms-4">{{ comment.user.name }}</span>
                </CardTitle>
                <CardDescription>{{ comment.seat_area }}</CardDescription>
              </CardHeader>
              <CardContent> {{ comment.comment }} </CardContent>
              <CardFooter class="flex flex-col text-sm text-black-60 space-y-4">
                <span>{{ comment.concert.title }}</span>
                <span>{{ comment.created_at }}</span>
              </CardFooter>
            </Card>
          </ScrollArea>
          <div class="text-center mt-6 lg:mt-10">
            <Button variant="white-outline" class="px-10 py-6 space-x-2 md:text-lg lg:text-xl">
              <span>留下評論</span>
              <span class="inline-block w-10 h-[1px] lg:w-12 bg-black-0 hover:bg-black"></span>
              <font-awesome-icon icon="fa-solid fa-plus" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  </section>
  <section class="container">
    <h3 class="text-2xl font-display md:text-5xl 2xl:text-display-3 font-black mb-6 lg:mb-10">交通方式</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <iframe :src="venue.map_link" frameborder="0" class="w-full h-[375px] md:h-[600px]"></iframe>
      </div>
      <div class="space-y-6 lg:space-y-10">
        <div v-for="method in venue.transportation" :key="method.type" class="box-shadow-light2 p-6 rounded-btn2">
          <h4 class="mb-6">{{ method.type }}</h4>
          <ul class="list-disc px-6 space-y-4">
            <li v-for="(t, index) in method.info" :key="index">{{ t }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import TitleComponent from '@/components/custom/TitleComponent.vue';
</script>
<script>
import { mapActions, mapState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';
// import { get } from '@vueuse/core';
// import { GhostIcon } from 'lucide-vue-next';

export default {
  props: ['id'],
  inject: ['http', 'path'],
  methods: {
    hoverTitle(e) {
      e.currentTarget.childNodes.forEach((element, index) => {
        if (index !== 1) {
          element.classList.remove(...['hidden', 'collapse-left', 'collapse-right']);
          element.classList.add('w-auto');
          // element.removeEventListener('animationend', this.handleRemoveTitle(element));
        }
        if (index === 0) {
          element.classList.add('expand-left');
        } else if (index === 2) {
          element.classList.add('expand-right');
        }
      });
    },
    removeHoverTitle(e) {
      e.currentTarget.childNodes.forEach((element, index) => {
        if (index !== 1) {
          element.classList.remove(...['w-auto', 'expand-left', 'expand-right']);
          element.addEventListener('animationend', this.handleRemoveTitle(element));
        }
        if (index === 0) {
          element.classList.add('collapse-left');
        } else if (index === 2) {
          element.classList.add('collapse-right');
        }
      });
    },
    handleRemoveTitle(element) {
      element.classList.add('hidden');
    },
    ...mapActions(useVenuesStore, ['getVenue']),
  },

  computed: {
    ...mapState(useVenuesStore, ['venue', 'pagination']),
  },
  watch: {
    id(newId) {
      this.getVenue(newId);
    },
  },
  mounted() {
    this.getVenue(this.id);
  },
};
</script>
<style lang="scss" scoped>
// .bg-image {
//   background-image: ;
// }

.expand-left {
  animation: expand-left 0.5s ease;
}

.collapse-left {
  animation: collapse-left 0.5s ease;
}

.expand-right {
  animation: expand-right 0.5s ease;
}

.collapse-right {
  animation: collapse-right 0.5s ease;
}

@keyframes expand-left {
  from {
    transform: translateX(70%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes collapse-left {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(70%);
  }
}

@keyframes expand-right {
  from {
    transform: translateX(-70%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes collapse-right {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-70%);
  }
}
</style>
