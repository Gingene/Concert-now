<template>
  <div class="container">
    <div class="fasicon h-20 space-x-2">
      <font-awesome-icon icon="fa-brands fa-instagram" />
      <font-awesome-icon icon="fa-brands fa-line" />
      <font-awesome-icon icon="fa-brands fa-facebook" />
      <font-awesome-icon icon="fa-solid fa-align-justify" />
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
      <font-awesome-icon icon="fa-solid fa-x" />
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <font-awesome-icon icon="fa-solid fa-plus" />
      <font-awesome-icon icon="fa-solid fa-chevron-up" />
      <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </div>
    <div class="flex size-10">
      <ArrowUpRight class="size-10 flex-shrink-0" />
      <ArrowDownRight class="size-10 flex-shrink-0" />
    </div>
    <div class="flex space-x-4 mb-4">
      <div>
        <h1>這是首頁</h1>
        <h2>這是首頁</h2>
        <h3>這是首頁</h3>
        <h4>這是首頁</h4>
        <h5>這是首頁</h5>
        <h6>這是首頁</h6>
        <p>文字測試</p>
        <p class="text-sm">文字測試</p>
        <p class="text-tiny">文字測試</p>
      </div>
      <div class="font-black">
        <h1>這是首頁</h1>
        <h2>這是首頁</h2>
        <h3>這是首頁</h3>
        <h4>這是首頁</h4>
        <h5>這是首頁</h5>
        <h6>這是首頁</h6>
        <p class="font-bold">文字測試</p>
        <p class="text-sm">文字測試</p>
        <p class="text-tiny">文字測試</p>
      </div>
      <div class="font-lato">
        <h1>This is Title</h1>
        <h2>This is Title</h2>
        <h3>This is Title</h3>
        <h4>This is Title</h4>
        <h5>This is Title</h5>
        <h6>This is Title</h6>
        <p>Lorem ipsum dolor sit amet.</p>
        <p class="text-sm">Lorem ipsum dolor sit amet.</p>
        <p class="text-tiny">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div class="flex space-x-3">
      <div class="bg-cyan-400 grid grid-cols-3 gap-3 w-1/2 h-[25rem]">
        <div class="bg-black-100 size-full">bg-100</div>
        <div class="bg-black-80 size-full">bg-80</div>
        <div class="bg-black-60 size-full">bg-60</div>
        <div class="bg-black-40 size-full">bg-40</div>
        <div class="bg-black-20 size-full text-black">bg-20</div>
        <div class="bg-black-0 size-full text-black">bg-0</div>
      </div>
      <div class="row bg-cyan-400 h-[25rem] w-1/2 relative">
        <h2 class="absolute -top-20 hidden lg:block">格線系統測試</h2>
        <div class="bg-black-100 basis-1/3 2xl:basis-1/2 h-1/2">
          bg-100
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, veritatis?</div>
        </div>
        <div class="bg-black-80 basis-1/3 2xl:basis-1/2 h-1/2">bg-80</div>
        <div class="bg-black-60 basis-1/3 2xl:basis-1/2 h-1/2">bg-60</div>
        <div class="bg-black-40 basis-1/3 2xl:basis-1/2 h-1/2">bg-40</div>
        <div class="bg-black-20 basis-1/3 2xl:basis-1/2 h-1/2 text-black">bg-20</div>
        <div class="bg-black-0 basis-1/3 2xl:basis-1/2 h-1/2 text-black">bg-0</div>
      </div>
    </div>
    <div>
      <div class="font-lato-display1">Title</div>
      <div class="font-lato-display2">Title</div>
      <div class="font-lato-display3">Title</div>
      <div class="font-lato-display">Title</div>
      <div class="font-lato-display1 text-stroke">Title</div>
      <div class="font-lato-display2 text-stroke">Title</div>
      <div class="font-lato-display3 text-stroke">Title</div>
    </div>
    <h4 class="flex flex-col space-y-4 font-lato mb-8">
      <Button variant="btn1" size="btn1">Button</Button>
      <Button variant="btn2" size="btn2" class="justify-start"><span class="material-symbols-outlined"> arrow_back </span></Button>
    </h4>
    <div class="flex flex-col space-y-4 font-black">
      <Button variant="btn1" size="btn1">Button</Button>
      <Button variant="btn2" size="btn2" class="justify-start"><span class="material-symbols-outlined"> arrow_back </span></Button>
    </div>
  </div>
  <div class="font-TC-display bg-lime-700 text-black">
    這是標題
    <div class="flex flex-col space-y-4 w-1/2">
      <Button variant="btn1" size="btn1">按鈕</Button>

      <Button variant="btn2" size="btn2"><span class="material-symbols-outlined"> arrow_back </span></Button>
    </div>
  </div>
</template>
<script setup>
import { Button } from '@/components/ui/button';
import { ArrowDownRight, ArrowUpRight } from 'lucide-vue-next';
</script>

<script>
export default {};
</script>

<style lang="scss">
.row {
  @apply flex flex-wrap;
  margin: 0 -0.75rem;
  > * {
    width: 100%;
    max-width: 100%;
    padding: 0.75rem;
    flex-grow: 1;
  }
}
.fasicon * {
  width: 2.5rem;
  height: 2.5rem;
}
</style>
