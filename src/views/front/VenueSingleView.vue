<template>
  <div class="w-full h-[800px] bg-no-repeat bg-cover absolute top-0 -z-10" :style="`background-image: url(${venue.picture?.horizontal})`"></div>
  <section class="container pb-20 lg:pb-32 space-y-6 lg:space-y-10 mt-[550px]">
    <div class="text-center">
      <h2 class="text-2xl font-display lg:text-3xl 2xl:text-5xl font-black">{{ venue.title }}</h2>
      <!-- <p class="text-lg md:text-3xl 2xl:text-5xl">{{ venue.address }}</p> -->
    </div>
    <!-- <TitleComponent class="text-center">
      <template #mainTitle>
        {{ venue.title }}
      </template>
    </TitleComponent> -->
    <main class="space-y-6 lg:space-y-10">
      <div class="text-center">
        <h3 class="text-2xl font-display lg:text-3xl 2xl:text-5xl font-black">場地體驗</h3>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="lg:order-2">
          <img :src="venue.seat_picture" :alt="venue.title" class="w-full" />
        </div>
        <div class="space-y-6 lg:space-y-10">
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
            <Button variant="btn1" class="px-10 py-6 space-x-2 md:text-lg lg:text-xl">
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
// import TitleComponent from '@/components/custom/TitleComponent.vue';
</script>
<script>
import { mapActions, mapState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';

export default {
  inject: ['http', 'path'],
  methods: {
    ...mapActions(useVenuesStore, ['getVenue']),
  },
  computed: {
    ...mapState(useVenuesStore, ['venue', 'pagination']),
  },
  // mounted() {
  //   this.getVenue(this.$route.params.id);
  // },
};
</script>
<style lang="scss" scoped>
// .bg-image {
//   background-image: ;
// }
</style>
