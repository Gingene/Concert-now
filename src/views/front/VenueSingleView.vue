<template>
  <div
    class="w-full h-[400px] md:h-[460px] lg:h-[600px] 2xl:h-[700px] bg-no-repeat bg-cover absolute top-0 -z-10 bg-bottom shadow"
    :style="`background-image: url(${venue.picture?.horizontal})`"></div>
  <section class="container pb-20 lg:pb-32 pt-[400px] md:pt-[460px] lg:pt-[600px] 2xl:pt-[700px] space-y-6 lg:space-y-10">
    <main class="space-y-6 lg:space-y-10">
      <div class="text-center">
        <h1 class="text-4xl lg:text-5xl font-black">{{ venue.title }}</h1>
        <div class="py-4 lg:hidden text-center text-black-40">
          {{ venue.address }}
        </div>
        <div class="hidden lg:grid grid-cols-3 text-lg text-center text-black-40" @mouseover="hoverTitle" @mouseleave="removeHoverTitle">
          <div class="collapse-left py-4">{{ venue.seat_amount }} 席次</div>
          <div class="col-start-2 py-4">{{ venue.eng_title }}</div>
          <div class="collapse-right py-4">{{ venue.address }}</div>
        </div>
      </div>

      <TitleComponent class="flex justify-center">
        <template #subTitle> VENUES </template>
        <template #mainTitle> 場地體驗 </template>
      </TitleComponent>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <article class="lg:order-2 lg:col-span-2 py-10 sm:py-14 px-7 xs:px-9 sm:px-12 lg:px-14 rounded-[40px] bg-shadow-trans-text venue-section">
          <!-- Venue Title -->
          <!-- <h2 href="#" class="font-bold text-center text-xl xs:text-[36px] sm:text-xl 2xl:text-2xl pb-2">{{ venue.title }}</h2> -->
          <p class="text-gray-500 text-base sm:text-xl lg:pt-5 font-lato text-center">_____ STAGE _____</p>
          <!-- Venue Seats -->
          <div class="h-[200px] sm:h-[300px] w-[80%] xl:w-[60%] text-sm sm:text-base grid grid-flow-row auto-row-max gap-2 md:gap-4 mx-auto my-3 lg:my-5">
            <div
              @click="activeArea(area)"
              v-for="(area, index) in venue.seat_areas"
              :key="`${index + 123}`"
              class="text-[12px] md:text-base lg:text-lg gradient-border flex justify-center items-center transition-transform hover:-translate-x-1 hover:-translate-y-1"
              :class="area === seatArea ? 'active' : ''">
              <p>
                {{ area }}
              </p>
            </div>
          </div>
        </article>
        <div class="space-y-6 lg:space-y-10 box-shadow-light2 px-6 py-10 sm:p-10 rounded-btn2 lg:col-span-3">
          <div class="flex justify-between items-center">
            <Select v-model="seatArea">
              <!-- <SelectTrigger class="w-1/3 border-0 text-primary bg-pink box-shadow-pink-blur box-shadow-pink-blur-hover focus-visible:outline-0 h-10 p-4 md:py-4 md:px-6 rounded-btn1"> -->
              <SelectTrigger class="w-2/3 sm:w-1/3 border-2 text-white border-black-40 hover:text-black hover:bg-white hover:box-shadow-light1-hover focus-visible:outline-0 h-10 p-4 md:py-4 md:px-6 rounded-btn1">
                <SelectValue placeholder="座位區" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>座位區</SelectLabel>
                  <SelectItem value="all"> 全部座位區 </SelectItem>
                  <SelectItem :value="seat" v-for="seat in venue.seat_areas" :key="seat"> {{ seat }} </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div class="text-center">
              <Dialog :open="openCommentModal" @update:open="openModal">
                <DialogTrigger as-child>
                  <Button variant="white-outline" class="rounded-full p-2 hover:bg-pink hover:text-primary hover:box-shadow-pink-blur-hover hover:border-pink hover:text-white">
                    <font-awesome-icon icon="fa-solid fa-plus" class="w-5 h-5 text-base md:text-xl size-4 md:size-6" />
                  </Button>
                </DialogTrigger>
                <DialogContent class="max-w-sm md:max-w-3xl">
                  <DialogHeader class="mb-6">
                    <DialogTitle>留下評論</DialogTitle>
                    <DialogDescription>
                      <p class="text-sm text-black-60 pb-4">※ 座位區、演唱會與評論皆需填寫，若有缺漏會新增失敗。</p>
                    </DialogDescription>
                  </DialogHeader>
                  <form @submit="onSubmit" class="space-y-6 lg:space-y-10" ref="modalForm">
                    <div class="relative flex items-center">
                      <Label for="seat-select" class="absolute text-white bg-black-85 border-black-85 border rounded-md pl-6 pr-20 -z-10 py-2 px-3">座位區</Label>
                      <Select v-model="commentSeatArea" id="seat-select">
                        <SelectTrigger class="ml-[7rem] border-white w-[220px] md:w-full">
                          <SelectValue placeholder="選取座位區" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>選取座位區</SelectLabel>
                            <SelectItem :value="seat" v-for="seat in venue.seat_areas" :key="seat"> {{ seat }} </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div class="flex items-center">
                      <Label for="concert-select" class="absolute text-white bg-black-85 border-black-85 border rounded-md pl-6 pr-20 -z-10 py-2 px-3">演唱會</Label>
                      <Select id="concert-select" v-model="concertId">
                        <SelectTrigger class="ml-[7rem] border-white w-[220px] md:w-full">
                          <SelectValue placeholder="選取演唱會" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>選取演唱會</SelectLabel>
                            <SelectItem :value="concert.id.toString()" v-for="concert in venue.concerts" :key="concert.id">
                              {{ concert.title }}
                              <time class="text-black-40">{{ concert.holding_time.split(' ')[0] }}</time>
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <div class="relative flex items-center mb-4">
                        <Label for="commentPictures" class="absolute text-white bg-black-85 border-black-85 border rounded-md pl-6 pr-20 -z-10 py-2 px-3">評論圖片</Label>
                        <input id="commentPictures" multiple class="hidden" type="file" accept="image/png, image/jpeg" @change="readURL" />
                        <Button type="button" class="ml-[7rem] border-white border w-[220px] md:w-full rounded-md justify-start text-sm px-3" @click="handleFileButton">
                          <span v-if="!images.length">未選擇任何檔案</span>
                          <span v-else>已選擇{{ images.length }}個檔案</span>
                        </Button>
                      </div>
                      <div class="space-y-4">
                        <span class="text-sm text-black-60">圖片至多可傳三張</span>
                        <div class="flex justify-center space-x-4">
                          <img id="commentImage1" class="size-[80px] lg:size-[150px]" src="http://placehold.it/150" alt="your image" v-if="images[0]" />
                          <img id="commentImage2" class="size-[80px] lg:size-[150px]" src="http://placehold.it/150" alt="your image" v-if="images[1]" />
                          <img id="commentImage3" class="size-[80px] lg:size-[150px]" src="http://placehold.it/150" alt="your image" v-if="images[2]" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Textarea v-model="commentContent" placeholder="留下你的評論..." />
                    </div>

                    <DialogFooter class="justify-center sm:justify-center flex-col sm:flex-col space-y-2">
                      <div class="flex justify-center items-center">
                        <Button for="commentPolicy" type="button" class="text-sm text-black-60 text-right cursor-pointer px-0" @click="showCommentPolicy">送出即代表您同意遵守評論規範</Button>
                      </div>
                      <div class="flex justify-center items-center space-x-2">
                        <DialogClose as-child>
                          <Button type="button" size="base" class="bg-black-80 hover:bg-black-80 px-14 md:px-14 lg:px-14">取消</Button>
                        </DialogClose>
                        <Button variant="tiffany-fill" size="base" type="submit" class="px-14 md:px-14 lg:px-14">送出評論</Button>
                      </div>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <ScrollArea class="lg:h-[350px]">
            <div v-for="(comment, index) in filterSeatComment" :key="comment.id" class="grid grid-cols-12 gap-x-3 border-b border-black-60 py-4 min-h-[150px]" :class="{ 'border-t': index === 0 }">
              <div class="col-span-2 sm:col-span-1 lg:col-span-1">
                <img :src="comment.user.profile_image_url" :alt="comment.user.name" class="rounded-full size-8 bg-white/25 object-cover" />
              </div>
              <div class="col-span-8 sm:col-span-10 lg:col-span-10 xl:col-span-10 flex flex-col space-y-4">
                <div class="space-x-3">
                  <span>{{ comment.user.name }}</span>
                  <span class="text-black-40">{{ comment.seat_area }}</span>
                </div>
                <div class="text-sm md:text-base lg:flex lg:flex-wrap lg:justify-between">
                  <p class="mb-4 lg:mb-0">{{ comment.comment }}</p>
                  <div class="flex space-x-3 w-full lg:w-auto" v-if="comment.images.length">
                    <template v-for="(image, index) in comment.images" :key="index">
                      <img :src="image" alt="" class="size-20 object-cover rounded-xl" />
                    </template>
                  </div>
                </div>

                <div class="text-tiny text-black-60">
                  <p class="truncate">{{ comment.concert.title }}</p>
                  <time>{{ comment.created_at }}</time>
                </div>
              </div>

              <div class="col-span-2 sm:col-span-1 lg:col-span-1 lg:-ml-4 xl:ml-0">
                <HoverCard :openDelay="0">
                  <HoverCardTrigger as-child>
                    <Button variant="ghost" class="p-1">
                      <MoreHorizontal />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <Button @click="reportUser(comment.user.name)" class="justify-between w-full">
                      <span>檢舉該名使用者</span>
                      <AlertCircle />
                    </Button>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  </section>
  <div>
    <!-- <div class="text-[3.5rem] md:text-[4.5rem] lg:text-[6.5rem] font-bold marquee-container bg-tiffany">
      <div class="marquee-text">{{ venue?.title }}</div>
      <div class="marquee-text font-display text-stroke">{{ venue?.eng_title }}</div>
    </div> -->
    <div class="marquee-type bg-tiffany">
      <div ref="marquee" class="flex text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-black text-black tracking-[-1px] whitespace-nowrap overflow-x-auto scrollbar-none mb-6 lg:mb-10 leading-[1]">
        <p class="marquee space-x-4">
          <span>{{ venue.title }}</span>
          <span class="text-stroke-black font-display uppercase">{{ venue.eng_title }}</span>
          <span>{{ venue.title }}</span>
          <span class="text-stroke-black font-display uppercase">{{ venue.eng_title }}</span>
        </p>
        <p class="marquee space-x-4">
          <span>{{ venue.title }}</span>
          <span class="text-stroke-black font-display uppercase">{{ venue.eng_title }}</span>
          <span>{{ venue.title }}</span>
          <span class="text-stroke-black font-display uppercase">{{ venue.eng_title }}</span>
        </p>
      </div>
    </div>
  </div>
  <section class="container">
    <TitleComponent class="overflow-x-hidden">
      <template #subTitle> TRANSPORT </template>
      <template #mainTitle> 交通方式 </template>
    </TitleComponent>
    <div class="mt-4 lg:mt-6">
      <div class="mb-4 lg:mb-6">
        <iframe :src="venue.map_link" frameborder="0" class="w-full h-[375px] md:h-[600px] rounded-md"></iframe>
      </div>
      <div class="space-y-6 lg:space-y-10">
        <!-- <template v-for="method in venue.transportation" :key="method.type">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" class="lg:relative">
              <AccordionTrigger :hideIcon="true">
                <div class="flex space-x-10 font-black">
                  <ArrowDownRight class="size-10 lg:size-16" />
                  <span class="-mb-8 pt-2 lg:pt-[30px] text-4xl">{{ method.type }}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent class="lg:flex lg:justify-end">
                <ul class="list-disc text-base px-6 space-y-4 lg:-mt-16 lg:w-3/4 hidden lg:block lg:opacity-0">
                  <li v-for="(t, index) in method.info" :key="index">{{ t }}</li>
                </ul>
                <ul class="list-disc text-base px-6 lg:px-0 space-y-4 mt-6 lg:mt-0 lg:w-2/3 lg:absolute lg:top-0">
                  <li v-for="(t, index) in method.info" :key="index">{{ t }}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </template> -->
        <Accordion type="single" collapsible>
          <AccordionItem class="lg:relative border-b-4" v-for="method in transportation" :key="method.type" :value="method.value">
            <AccordionTrigger :hideIcon="true" :value="method.value" class="accordion-button hover:no-underline">
              <div class="flex gap-4 font-black -mb-[18px] lg:-mb-[33px] pt-8 lg:pt-[42px]">
                <ArrowDownRight class="size-10 lg:size-16 pb-2 sm:pb-0 lg:pb-2" />
                <span class="text-lg sm:text-2xl lg:text-4xl">{{ method.type }}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent class="lg:flex lg:justify-end">
              <ul class="list-disc text-base px-6 space-y-4 lg:-mt-16 lg:w-3/4 hidden lg:block lg:opacity-0">
                <li v-for="(t, index) in method.info" :key="index">{{ t }}</li>
              </ul>
              <ul class="list-disc text-base px-6 lg:px-0 space-y-4 mt-6 lg:mt-4 lg:w-2/3 lg:absolute lg:top-0">
                <li v-for="(t, index) in method.info" :key="index">{{ t }}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import TitleComponent from '@/components/custom/TitleComponent.vue';
import { MoreHorizontal, ArrowDownRight, AlertCircle } from 'lucide-vue-next';
</script>
<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';
import { http } from '@/api';
// import { get } from '@vueuse/core';
// import { GhostIcon } from 'lucide-vue-next';
import { loadingStore } from '@/stores/isLoading';
import { useToast } from '@/components/ui/toast/use-toast';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
const { setIsLoading } = loadingStore();
const { toast } = useToast();

export default {
  data() {
    return {
      commentSeatArea: '',
      concertId: '',
      commentContent: '',
      images: [],
      checkPolicy: true,
      openCommentModal: false,
      accordionItems: [],
    };
  },
  props: ['id'],
  inject: ['http', 'path'],
  methods: {
    hoverTitle(e) {
      e.currentTarget.childNodes.forEach((element, index) => {
        if (index !== 1) {
          element.classList.remove(...['hidden', 'collapse-left', 'collapse-right']);
        }
        if (index === 0) {
          element.classList.add(...['collapse-left', 'show']);
        } else if (index === 2) {
          element.classList.add(...['collapse-right', 'show']);
        }
      });
    },
    removeHoverTitle(e) {
      e.currentTarget.childNodes.forEach((element, index) => {
        if (index !== 1) {
          element.classList.remove(...['w-auto', 'collapse-left', 'collapse-right', 'show']);
        }
        if (index === 0) {
          element.classList.add('collapse-left');
        } else if (index === 2) {
          element.classList.add('collapse-right');
        }
      });
    },
    readURL(input) {
      // console.log(input.target.files);
      if (input.target.files && input.target.files[0]) {
        if (input.target.files.length > 3) {
          toast({
            title: '圖片最多3張',
            description: '',
          });
          return;
        }
        for (let i = 0; i < input.target.files.length; i++) {
          const reader = new FileReader();
          // console.log(reader);
          if (input.target.files[i].size > 3 * 1024 ** 2) {
            toast({
              title: '圖片不得超過3MB',
              description: '',
            });
            return;
          }

          reader.onload = function (e) {
            // console.log(e);
            document.querySelector('#commentImage' + (i + 1)).setAttribute('src', e.target.result);
          };

          reader.readAsDataURL(input.target.files[i]);
        }

        this.images = [...input.target.files];
      }
    },
    handleFileButton() {
      document.querySelector('#commentPictures').click();
    },
    onSubmit(e) {
      e.preventDefault();
      this.postComment();
    },
    postComment() {
      if (this.concertId === '') {
        toast({
          title: '請選擇演唱會',
          description: '',
        });
        return;
      }
      if (this.commentSeatArea === '') {
        toast({
          title: '請選擇座位區',
          description: '',
        });
        return;
      }
      if (this.commentContent === '') {
        toast({
          title: '請輸入評論',
          description: '',
        });
        return;
      }

      if (!this.checkPolicy) {
        toast({
          title: '請先勾選同意評論規範',
          description: '',
        });
        return;
      }

      const payload = {
        concert_id: this.concertId,
        seat_area: this.commentSeatArea,
        comment: this.commentContent,
        images: this.images,
      };
      if (this.images.length === 0) {
        delete payload.images;
      }

      setIsLoading();
      http
        .post(`${this.path.venues}/${this.$route.params.id}/comment`, payload)
        .then((res) => {
          this.resetComment();
          toast({
            title: '已新增評論',
            description: '',
          });
          this.getVenue(this.$route.params.id);
          this.openCommentModal = false;
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    resetComment() {
      this.concertId = '';
      this.commentSeatArea = '';
      this.commentContent = '';
      this.images = [];
    },
    showCommentPolicy() {
      toast({
        title: '評論規範',
        description: '(1)請勿留言不實評論 (2)請物留言惡意評論 (3)請勿留言腥羶色內容。請注意警告五次將被永久停權。',
      });
    },
    openModal(val) {
      this.openCommentModal = val;
      if (val === false) {
        this.resetComment();
      }
    },
    handleMarQuee() {
      const marquee = this.$refs.marquee;
      marquee.childNodes.forEach((item) => {
        if (item.textContent.length <= 90 && item.textContent.length > 60) {
          item.style.animationDuration = '80s';
        } else if (item.textContent.length <= 120 && item.textContent.length > 90) {
          item.style.animationDuration = '90s';
        }
      });
    },
    activeArea(area) {
      this.seatArea = area;
    },
    ...mapActions(useVenuesStore, ['getVenue', 'reportUser']),
  },
  computed: {
    ...mapState(useVenuesStore, ['venue', 'pagination', 'filterSeatComment', 'transportation']),
    ...mapWritableState(useVenuesStore, ['seatArea']),
  },
  watch: {
    id(newId) {
      this.getVenue(newId);
      this.seatArea = '';
    },
    concertId(newVal) {
      // const concert = this.venue.concerts.find((item) => item.id === +newVal);
      // console.log(concert.title.length);
      // if (concert.title.length > 19) {
      //   console.dir(this.$refs.modalForm);
      //   this.$refs.modalForm.classList.add('w-3/5');
      //   this.$refs.modalForm[2].style.width = '50%';
      // } else if (concert.title.length > 39) {
      //   this.$refs.modalForm[2].style.width = '40%';
      // }
    },
  },
  mounted() {
    this.getVenue(this.id);
    // AOS.init();
  },
  updated() {
    // document.title = this.venue.title;
    // console.log(document.title);
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach((item) => {
      if (item?.dataset?.state === 'open') {
        item?.click();
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.shadow {
  box-shadow: inset 0px 40px 150px rgba(0, 0, 0, 0.7);
}

.text-stroke-black {
  color: transparent;
  -webkit-text-stroke: 1px #000;
}

.collapse-left.show {
  animation: expand-left 0.5s ease;
  opacity: 1;
}

.collapse-left {
  animation: collapse-left 0.5s ease;
  opacity: 0;
}

.collapse-right.show {
  animation: expand-right 0.5s ease;
  opacity: 1;
}

.collapse-right {
  animation: collapse-right 0.5s ease;
  opacity: 0;
}

@keyframes expand-left {
  from {
    transform: translateX(70%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes collapse-left {
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  to {
    transform: translateX(70%);
    opacity: 0;
  }
}

@keyframes expand-right {
  from {
    transform: translateX(-70%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes collapse-right {
  from {
    transform: translateX(0%);
    opacity: 1;
  }
  to {
    transform: translateX(-70%);
    opacity: 0;
  }
}

.scrollbar-none {
  scrollbar-width: none;
}

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

.marquee-type {
  &:nth-child(odd) {
    // a {
    //   @apply col-span-3;
    // }
    p.marquee {
      animation: marquee-negative 40s infinite linear;
    }
  }
  &:nth-child(even) {
    // a {
    //   @apply col-start-2 col-span-3;
    // }
    // .marquee-image {
    //   @apply w-full;
    // }
    p.marquee {
      animation: marquee-positive 90s infinite linear;
    }
  }
}

@keyframes marquee-negative {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-positive {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX((0%));
  }
}

.gradient-border {
  background-image: radial-gradient(circle at 100% 100%, transparent 16px, #ffffff 16px, #ffffff 19px, transparent 19px), linear-gradient(to right, #ffffff, #d595f1),
    radial-gradient(circle at 0% 100%, transparent 16px, #d595f1 16px, #d595f1 19px, transparent 19px), linear-gradient(to bottom, #d595f1, #ffffff),
    radial-gradient(circle at 0% 0%, transparent 16px, #ffffff 16px, #ffffff 19px, transparent 19px), linear-gradient(to left, #ffffff, #42dfc8),
    radial-gradient(circle at 100% 0%, transparent 16px, #42dfc8 16px, #42dfc8 19px, transparent 19px), linear-gradient(to top, #42dfc8, #ffffff);
  background-size:
    19px 19px,
    calc(100% - 38px) 3px,
    19px 19px,
    3px calc(100% - 38px);
  background-position:
    top left,
    top center,
    top right,
    center right,
    bottom right,
    bottom center,
    bottom left,
    center left;
  background-repeat: no-repeat;
  &:hover {
    border-radius: 1rem;
    @apply bg-shadow-trans-text-brighter;
  }
}

.gradient-border.active {
  // background-color: #fff;
  border-radius: 1rem;
  @apply bg-shadow-trans-text-brighter;
}

.gradient-test {
  border-width: 2px;
  border-radius: 1.25rem;
  background: linear-gradient(to right, #ffffff, #d595f1), linear-gradient(to bottom, #d595f1, #ffffff), linear-gradient(to left, #ffffff, #42dfc8), linear-gradient(to top, #42dfc8, #ffffff);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  transition: all 0.3s;
}
</style>
