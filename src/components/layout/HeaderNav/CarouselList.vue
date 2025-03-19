<template>
  <div v-if="searchResults?.length > 0" class="flex justify-center relative mt-10 ml-8 xl:ml-6 2xl:ml-10">
    <h3 class="absolute top-2 left-0 text-2xl text-black-20 drop-shadow-light">{{ carouselData.title }}</h3>
    <RouterLink :to="carouselData.link" class="absolute top-3 right-0">
      <Button variant="white-outline" size="base" class="text-sm sm:text-base" @click="closeModal">查看更多</Button>
    </RouterLink>
    <Carousel :opts="{ align: 'start' }" class="w-[120px] md:w-[500px] lg:w-[750px] xl:w-[950px] 2xl:w-[90%] mt-16">
      <CarouselContent>
        <CarouselItem v-for="searchItem in searchResults" :key="searchItem.id" :class="carouselData.carouselClassName">
          <RouterLink :to="`${carouselData.link}/${searchItem.id}`" class="flex flex-col justify-center items-center" @click="closeModal">
            <div class="mt-2 flex flex-col justify-center items-center text-muted-foreground">
              <slot
                :image="searchItem?.cover_urls?.square || searchItem?.picture.square"
                :imageClassName="carouselData?.imageClassName"
                :searchItemName="searchItem?.name"
                :title="searchItem?.title"
                :holdingTime="searchItem?.holding_time"
                :city="searchItem.city"></slot>
            </div>
          </RouterLink>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
</script>

<script>
export default {
  props: {
    searchResults: Array,
    carouselData: Object,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>
