<template>
  <div class="pt-[60px] md:pt-[80px] pb-16">
    <h2 class="relative font-display display-title-back font-black flex flex-col leading-[.8]">
      <span class="text-stroke-light">DISCOVER</span>
      <span>
        <slot name="mainTitle">CONCERTS</slot>
      </span>
      <span class="text-stroke-light">NOW</span>
      <Input
        :placeholder="propPlaceholder"
        v-model="searchText"
        @keyup="searchMethod"
        class="hidden sm:block absolute pd-4 xl:p-6 lg:text-base bottom-0 right-0 w-[20rem] md:w-[26rem] lg:w-[36rem] xl:w-[46rem] bg-black-0 box-shadow-light1-hover text-black-60 focus:text-black-60 focus-visible:box-shadow-light1-hover focus-visible:outline-0 hover:box-shadow-light1-hover" />
      <Input
        :placeholder="propPlaceholder"
        v-model="searchText"
        @keyup="searchMethod"
        class="sm:hidden w-fill p-4 mt-6 bg-black-0 box-shadow-light1-hover text-black-60 focus:text-black-60 focus-visible:box-shadow-light1-hover focus-visible:outline-0 hover:box-shadow-light1-hover" />
    </h2>
  </div>
</template>

<script setup>
import { Input } from '@/components/ui/input';
</script>

<script>
export default {
  data() {
    return {
      searchText: '',
    };
  },
  props: ['propPlaceholder'],
  methods: {
    searchMethod() {
      this.$emit('searchMethod', this.searchText);
    },
  },
};
</script>
