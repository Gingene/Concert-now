<template>
  <section class="container py-20 lg:py-32 space-y-6 lg:space-y-10">
    <div class="text-center">
      <h2 class="text-2xl font-display md:text-5xl 2xl:text-display-3 font-black">{{ venue.title }}</h2>
      <p class="text-lg md:text-3xl 2xl:text-5xl">{{ venue.address }}</p>
    </div>
    <main class="space-y-6 lg:space-y-10">
      <div>
        <img :src="venue.picture?.horizontal" :alt="venue.title" class="w-full" />
      </div>
      <div class="text-center">
        <h3 class="text-2xl font-display md:text-5xl 2xl:text-display-3 font-black">場地體驗</h3>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="lg:order-2">
          <img :src="venue.seat_picture" :alt="venue.title" class="w-full" />
        </div>
        <div class="space-y-6 lg:space-y-10">
          <div class="space-x-4 overflow-x-auto whitespace-nowrap">
            <Button class="bg-transparent border-2 rounded-btn2 p-6 btn1-purple"> 全部 </Button>
            <template v-for="seat in venue.seat_areas" :key="seat">
              <Button class="bg-transparent border-2 rounded-btn2 p-6 btn1-purple">{{ seat }}</Button>
            </template>
          </div>
          <ScrollArea class="lg:h-[280px] xl:h-[350px] 2xl:h-[500px] p-4">
            <Card v-for="comment in filterComments" :key="comment.id" class="border-2 border-black-60 mb-4 lg:mb-6">
              <CardHeader>
                <CardTitle>
                  <span class="material-symbols-outlined"> account_circle </span>
                  <span class="ms-4">小美</span>
                </CardTitle>
                <CardDescription>看台區</CardDescription>
              </CardHeader>
              <CardContent> {{ comment.comment }} </CardContent>
              <CardFooter class="flex flex-col text-sm text-black-60 space-y-4">
                <span>FTISLAND 演唱會2024台北站</span>
                <span>2023/05/01</span>
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
</script>
<script>
import { mapActions, mapState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';
import { commentStore } from '@/stores/comments';

export default {
  data() {
    return {
      venue: {},
    };
  },
  inject: ['http', 'path'],
  methods: {
    getVenue() {
      const tempVenues = JSON.parse(localStorage.getItem('tempVenues'));
      this.venue = tempVenues.find((v) => v.id === Number(this.$route.params.id));
      console.log(this.venue);
    },

    ...mapActions(useVenuesStore, ['getVenues']),
    ...mapActions(commentStore, ['getComments']),
  },
  computed: {
    filterComments() {
      return this.comments.filter((c) => c.venueId.title === this.venue.title);
    },
    ...mapState(useVenuesStore, ['venues', 'pagination']),
    ...mapState(commentStore, ['comments']),
  },
  mounted() {
    this.getVenue();
  },
};
</script>
<style lang="scss" scoped>
.btn1-purple {
  color: #d595f1;
  border: 2px solid #d595f1;
  box-shadow:
    0px 1px 40px 0px rgba(151, 26, 166, 0.5) inset,
    0px 4px 16px 0px rgba(151, 26, 166, 0.2) inset;
  &:hover {
    background: #d595f1;
    color: #fff;
    box-shadow:
      0 0 20px #d595f1,
      0 0 8px #d595f1; /* 這邊陰影效果不正確 */
  }
}
</style>
