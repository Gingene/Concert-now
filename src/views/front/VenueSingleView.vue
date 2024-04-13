<template>
  <!-- 上方背景 -->
  <div
    class="w-full h-[400px] md:h-[460px] lg:h-[600px] 2xl:h-[700px] bg-no-repeat bg-cover absolute top-0 -z-10 bg-bottom shadow"
    :style="`background-image: url(${venue.picture?.horizontal})`"></div>
  <!-- 場地體驗 -->
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
        <!-- 場地點擊區 -->
        <article class="lg:order-2 lg:col-span-2 py-10 sm:py-14 px-7 xs:px-9 sm:px-12 lg:px-14 rounded-[40px] bg-shadow-trans-text venue-section">
          <!-- Venue Title -->
          <p class="text-gray-500 text-base sm:text-xl lg:pt-5 font-lato text-center">_____ STAGE _____</p>
          <!-- Venue Seats -->
          <div class="h-[200px] sm:h-[300px] w-[80%] xl:w-[60%] text-sm sm:text-base grid grid-flow-row auto-row-max gap-2 md:gap-4 mx-auto my-3 lg:my-5">
            <div
              @click="activeArea(area)"
              v-for="(area, index) in venue.seat_areas"
              :key="`${index + 123}`"
              class="text-[12px] md:text-base lg:text-lg gradient-border flex justify-center items-center transition-transform hover:-translate-x-1 hover:-translate-y-1 cursor-pointer"
              :class="area === seatArea ? 'active' : ''">
              <p>
                {{ area }}
              </p>
            </div>
          </div>
        </article>
        <!-- 評論區 -->
        <div class="space-y-6 lg:space-y-10 box-shadow-light2 px-6 py-10 sm:p-10 rounded-btn2 lg:col-span-3">
          <div class="flex justify-between items-center">
            <Select v-model="seatArea">
              <!-- <SelectTrigger class="w-1/3 border-0 text-primary bg-pink box-shadow-pink-blur box-shadow-pink-blur-hover focus-visible:outline-0 h-10 p-4 md:py-4 md:px-6 rounded-btn1"> -->
              <SelectTrigger
                class="w-2/3 sm:w-1/3 border-2 text-white border-black-40 hover:text-black hover:bg-white hover:box-shadow-light1-hover focus-visible:outline-0 h-10 p-4 md:py-4 md:px-6 rounded-btn1">
                <SelectValue placeholder="全部座位區" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>座位區</SelectLabel>
                  <SelectItem value="all"> 全部座位區 </SelectItem>
                  <SelectItem :value="seat" v-for="seat in venue.seat_areas" :key="seat"> {{ seat }} </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <!-- 新增評論區 -->
            <div class="text-center">
              <template v-if="AccessToken === undefined">
                <AlertDialog>
                  <AlertDialogTrigger as-child>
                    <Button variant="white-outline" class="rounded-full p-2 hover:bg-pink hover:text-primary hover:box-shadow-pink-blur-hover hover:border-pink hover:text-white">
                      <font-awesome-icon icon="fa-solid fa-plus" class="text-xl size-6" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>登入才能進行評論 ᓫ(°⌑°)ǃ</AlertDialogTitle>
                      <AlertDialogDescription></AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>取消</AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <router-link to="/login"> 前往登入 </router-link>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </template>
              <template v-else>
                <Dialog :open="isToggleCommentModal" @update:open="toggleModal">
                  <DialogTrigger as-child>
                    <Button variant="white-outline" class="rounded-full p-2 hover:bg-pink hover:text-primary hover:box-shadow-pink-blur-hover hover:border-pink hover:text-white">
                      <font-awesome-icon icon="fa-solid fa-plus" class="text-xl size-6" />
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
                          <input id="commentPictures" ref="commentPicturesInput" multiple class="hidden" type="file" accept="image/png, image/jpeg" @change="readURL" />
                          <Button type="button" class="ml-[7rem] border-white border w-[220px] md:w-full rounded-md justify-start text-sm px-3" @click="handleFileButton">
                            <span v-if="!images.length">未選擇任何檔案</span>
                            <span v-else>已選擇{{ images.length }}個檔案</span>
                          </Button>
                        </div>
                        <div class="space-y-4">
                          <span class="text-sm text-black-60">圖片至多可傳三張(單一圖檔不能超過3MB)</span>
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
              </template>
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
                <Popover>
                  <PopoverTrigger as-child>
                    <Button variant="ghost" class="p-1">
                      <MoreHorizontal />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <AlertDialog v-if="AccessToken === undefined">
                      <AlertDialogTrigger as-child>
                        <Button class="justify-between w-full">
                          <span>檢舉該名使用者</span>
                          <AlertCircle />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>登入才能檢舉 ᓫ(°⌑°)ǃ</AlertDialogTitle>
                          <AlertDialogDescription></AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>取消</AlertDialogCancel>
                          <AlertDialogAction asChild>
                            <router-link to="/login"> 前往登入 </router-link>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <Button v-else @click="reportUser(comment.user.name)" class="justify-between w-full">
                      <span>檢舉該名使用者</span>
                      <AlertCircle />
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  </section>
  <!-- 場地名稱跑馬燈 -->
  <div>
    <div class="bg-tiffany">
      <div ref="marquee" class="flex text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-black text-black tracking-[-1px] whitespace-nowrap overflow-hidden mb-6 lg:mb-10 leading-[1]">
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
  <!-- 交通方式 -->
  <section class="container pb-[128px] lg:pb-[192px]">
    <TitleComponent class="overflow-x-hidden">
      <template #subTitle> TRANSPORT </template>
      <template #mainTitle> 交通方式 </template>
    </TitleComponent>
    <div class="mt-4 lg:mt-6">
      <!-- 地圖 -->
      <div class="mb-4 lg:mb-6">
        <iframe :src="venue.map_link" frameborder="0" class="w-full h-[375px] md:h-[600px] rounded-md"></iframe>
      </div>
      <!-- 查看交通方式 -->
      <div class="space-y-6 lg:space-y-10">
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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import TitleComponent from '@/components/custom/TitleComponent.vue';
import { MoreHorizontal, ArrowDownRight, AlertCircle } from 'lucide-vue-next';
</script>

<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';
import { http } from '@/api';
import { loadingStore } from '@/stores/isLoading';
import { useUserStore } from '@/stores/user';
import { useToast } from '@/components/ui/toast/use-toast';
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
      isToggleCommentModal: false,
      accordionItems: [],
    };
  },
  props: ['id'],
  inject: ['http', 'path'],
  methods: {
    hoverTitle(e) {
      e.currentTarget.childNodes.forEach((element, index) => {
        if (index !== 1) {
          element.classList.add('show');
        }
      });
    },
    removeHoverTitle(e) {
      e.currentTarget.childNodes.forEach((element, index) => {
        if (index !== 1) {
          element.classList.remove('show');
        }
      });
    },
    readURL(input) {
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

          if (input.target.files[i].type !== 'image/png' && input.target.files[i].type !== 'image/jpg' && input.target.files[i].type !== 'image/jpeg' && input.target.files[i].type !== 'image/webp') {
            toast({
              title: '圖片格式需為 png 或 jpg 或 webp',
              description: '',
            });
            return;
          }

          reader.onload = (e) => {
            // console.log(e);
            document.querySelector('#commentImage' + (i + 1)).setAttribute('src', e.target.result);
          };

          reader.readAsDataURL(input.target.files[i]);
        }

        this.images = [...input.target.files];
      }
    },
    handleFileButton() {
      this.$refs.commentPicturesInput.click();
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
          this.isToggleCommentModal = false;
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
    toggleModal(val) {
      this.isToggleCommentModal = val;
      if (val === false) {
        this.resetComment();
      }
    },
    activeArea(area) {
      if (this.seatArea === area) {
        this.seatArea = '';
      } else {
        this.seatArea = area;
      }
    },
    ...mapActions(useVenuesStore, ['getVenue', 'reportUser']),
  },
  computed: {
    ...mapState(useVenuesStore, ['venue', 'pagination', 'filterSeatComment', 'transportation']),
    ...mapState(useUserStore, ['AccessToken']),
    ...mapWritableState(useVenuesStore, ['seatArea']),
  },
  watch: {
    id(newId) {
      this.getVenue(newId);
      this.seatArea = '';
    },
  },
  mounted() {
    this.getVenue(this.id);
    // AOS.init();
  },
  updated() {
    // 單一場地標題
    document.title = `Concert Now - ${this.venue.title}`;
  },
  unmounted() {
    this.seatArea = '';
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

.marquee {
  @apply animate-[right-to-left_40s_linear_infinite];
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
</style>
