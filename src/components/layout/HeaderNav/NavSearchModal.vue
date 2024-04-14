<template>
  <span class="absolute text-black-60 top-2 left-3">Search now</span>
  <Search class="absolute text-black-60 top-2 right-3" />
  <Dialog :open="isToggleSearchModal" @update:open="toggleModal">
    <DialogTrigger class="w-full bg-black-0 text-black-60 opacity-10 px-6 py-5 rounded-2xl hover:opacity-25 searchModal" @click.once="searchAll(searchText)"> </DialogTrigger>
    <DialogScrollContent class="max-w-[90%] p-8 rounded-md">
      <DialogHeader>
        <DialogTitle>
          <Input
            placeholder="Search now"
            v-model="searchText"
            class="bg-black-0 text-black-80 box-shadow-light1-hover focus-visible:outline-0 px-6 py-5 focus:opacity-100 searchButton focus-visible:ring-offset-0 focus-visible:ring-ring-transparent" />
          <div v-if="!concertResults.length && !artistResults.length && !venueResults.length" class="mt-4 text-center">沒有搜尋到任何資料</div>
        </DialogTitle>
        <DialogDescription class="hidden"></DialogDescription>
      </DialogHeader>

      <div v-if="!concertResults.length && !artistResults.length && !venueResults.length" class="mt-4"></div>
      <CarouselList :searchResults="artistResults" :carouselData="carouselData[0]" @closeModal="toggleModal" v-slot:default="{ image, imageClassName, searchItemName }">
        <img :src="image" :alt="searchItemName" :class="imageClassName" class="object-cover" />
        <div class="text-base mt-2 text-center text-white">{{ searchItemName }}</div>
      </CarouselList>

      <CarouselList :searchResults="concertResults" :carouselData="carouselData[1]" @closeModal="toggleModal" v-slot:default="{ image, imageClassName, title, holdingTime }">
        <img :src="image" :alt="title" :class="imageClassName" class="object-cover" />
        <div class="flex flex-col items-center mt-2">
          <span class="text-sm sm:text-base text-center text-white">{{ title }}</span>
          <span class="text-sm sm:text-base text-center text-border-60">{{ holdingTime }}</span>
        </div>
      </CarouselList>

      <CarouselList :searchResults="venueResults" :carouselData="carouselData[2]" @closeModal="toggleModal" v-slot:default="{ image, imageClassName, title, city }">
        <img :src="image" :alt="title" :class="imageClassName" class="object-cover" />
        <div class="flex flex-col items-center mt-2">
          <span class="text-sm sm:text-base text-center text-white">{{ title }}</span>
          <span class="text-sm sm:text-base text-center text-border-60">{{ city }}</span>
        </div>
      </CarouselList>
    </DialogScrollContent>
    <DialogFooter class="hidden"> </DialogFooter>
  </Dialog>
</template>

<script setup>
import { Input } from '@/components/ui/input';
import { Dialog, DialogScrollContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search } from 'lucide-vue-next';
</script>

<script>
import { useDebounceFn } from '@vueuse/core';
import { CarouselList } from './';

export default {
  components: { CarouselList },
  data() {
    return {
      searchText: '',
      concertResults: [],
      venueResults: [],
      artistResults: [],
      carouselData: [
        {
          title: '表演者',
          link: '/artists',
          carouselClassName: 'md:basis-1/2 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6',
          imageClassName: 'size-[100px] md:size-[150px] lg:size-[150px] rounded-full',
        },
        {
          title: '演唱會',
          link: '/concerts',
          carouselClassName: 'md:basis-1/2 lg:basis-1/3 2xl:basis-1/4',
          imageClassName: 'size-[100px] md:size-[200px] lg:size-[250px] xl:size-[300px] rounded-2xl',
        },
        {
          title: '場地',
          link: '/venues',
          carouselClassName: 'md:basis-1/2 lg:basis-1/3 2xl:basis-1/4',
          imageClassName: 'size-[100px] md:size-[200px] lg:size-[250px] xl:size-[300px] rounded-2xl',
        },
      ],
    };
  },
  props: ['isToggleSearchModal', 'toggleModal', 'isSearch'],
  inject: ['http', 'path'],
  methods: {
    searchConcerts() {
      this.http
        .get(`${this.path.concerts}?q=${this.searchText}&page=1`)
        .then((res) => {
          this.concertResults = [...res.data.data];
          // console.log('concertResults', this.concertResults);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    searchArtists() {
      this.http
        .get(`${this.path.artists}?q=${this.searchText}&page=1`)
        .then((res) => {
          this.artistResults = [...res.data.data];
          // console.log('artistResults', this.artistResults);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    searchVenues() {
      this.http
        .get(`${this.path.venues}?q=${this.searchText}&page=1`)
        .then((res) => {
          this.venueResults = [...res.data.data];
          // console.log('venueResults', this.venueResults);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    searchAll: useDebounceFn(function () {
      this.searchConcerts();
      this.searchArtists();
      this.searchVenues();
    }, 500),
  },
  watch: {
    searchText(val) {
      this.searchAll(val);
    },
    isSearch() {
      this.searchAll(this.searchText);
    },
  },
};
</script>
