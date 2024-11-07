<template>
  <!-- Search/Command -->
  <div class="flex flex-wrap gap-x-5 gap-y-6 mt-32 mb-8 relative md:gap-6">
    <div class="w-full xs:w-[290px] relative lg:pt-6">
      <Input type="text" placeholder="請輸入表演者名稱" v-model.trim="searchText" @keyup="searchInput" />
      <span class="material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"> search </span>
    </div>
    <!-- 國籍篩選 -->
    <div class="w-full xs:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5">
      <Select v-model="selectCountry">
        <SelectTrigger>
          <SelectValue placeholder="請選擇表演者國籍" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel class="tracking-wide">表演者國籍</SelectLabel>
            <SelectItem v-for="country in countryRanges" :key="country.id" :value="country.type">
              {{ country.type }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div class="flex flex-row gap-6">
      <!-- 新增表演者 button -->
      <div class="lg:pt-5 mt-auto">
        <!-- 滾輪 -->
        <Form ref="form">
          <Dialog :open="dialogOpen" @update:open="dialogOpen = $event">
            <DialogTrigger as-child>
              <Button variant="outline" @click="openDialog('新增')" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 新增表演者 </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[900px] grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]">
              <DialogHeader class="p-6 pb-0">
                <DialogTitle class="text-center mb-3" v-if="isNew"> 新增表演者 </DialogTitle>
                <DialogTitle class="text-center mb-3" v-else> 編輯表演者 </DialogTitle>
                <DialogDescription> 以下請填入表演者的相關資訊 </DialogDescription>
              </DialogHeader>
              <div class="grid gap-4 py-4 overflow-y-auto px-6">
                <div class="grid grid-cols-2 gap-9 px-2 h-[50dvh]">
                  <!-- 第一欄 -->
                  <div class="flex flex-col space-y-5 py-4">
                    <!-- 表演者名稱 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="name" class="text-left mr-[52px]">名稱</label>
                        <Field id="name" name="名稱" type="text" placeholder="請輸入表演者名稱" v-model.trim="tempArtist.name" class="correct-input" rules="required" />
                      </div>
                      <ErrorMessage name="名稱" class="error-text text-xs" />
                    </div>

                    <!-- 表演者國籍 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="country" class="text-left mr-[52px]"> 國籍 </label>
                        <Field id="country" v-slot="{ field }" name="國籍" class="correct-input" rules="required">
                          <Select v-model.trim="tempArtist.country" v-bind="field" class="text-input">
                            <SelectTrigger class="w-full col-span-3">
                              <SelectValue placeholder="請選擇表演者國籍" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>表演者</SelectLabel>
                                <SelectItem v-for="country in countryTypes" :key="country.id" :value="country.type">
                                  {{ country.type }}
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </Field>
                      </div>
                      <ErrorMessage v-if="!isNew" name="國籍" class="error-text text-xs" />
                    </div>

                    <!-- 表演者介紹 -->
                    <div>
                      <div class="flex items-start gap-5 whitespace-nowrap">
                        <label for="description" class="text-left mr-[52px]"> 介紹 </label>
                        <Field v-slot="{ field }" name="介紹" v-model.trim="tempArtist.description" rules="required|max:300">
                          <textarea v-bind="field" name="介紹" maxlength="300" placeholder="請輸入表演者介紹" class="correct-textrea"> </textarea>
                        </Field>
                      </div>
                      <ErrorMessage name="介紹" class="error-text text-xs" />
                    </div>

                    <!-- 表演者榮譽獎項1 -->
                    <div>
                      <div>
                        <div class="flex items-center gap-5 whitespace-nowrap">
                          <label for="hornorOne" class="text-left mr-2"> 榮譽獎項 1 </label>
                          <Field id="hornorOne" type="text" name="榮譽獎項 1" placeholder="請輸入表演者榮譽獎項" v-model.trim="tempArtist.honors[0]" class="correct-input" rules="required|min:5" />
                        </div>
                        <ErrorMessage name="榮譽獎項 1" class="error-text text-xs" />
                      </div>
                      <!-- text-cyan-400 -->
                      <p class="mt-1 text-tiny text-black-60">※範例: 2010 Mnet 亞洲音樂 (MAMA) 最佳樂隊獎</p>
                    </div>

                    <!-- 表演者得獎經歷2 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="hornorTwo" class="text-left mr-2"> 榮譽獎項 2 </label>
                        <Field id="hornorTwo" type="text" name="榮譽獎項 2" placeholder="請輸入表演者榮譽獎項" v-model.trim="tempArtist.honors[1]" class="correct-input" rules="required|min:5" />
                      </div>
                      <ErrorMessage name="榮譽獎項 2" class="error-text text-xs" />
                    </div>

                    <!-- 表演者得獎經歷3 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="hornorThree" class="text-left mr-2"> 榮譽獎項 3 </label>
                        <Field id="hornorThree" name="榮譽獎項 3" type="text" placeholder="請輸入表演者榮譽獎項" v-model.trim="tempArtist.honors[2]" class="correct-input" />
                      </div>
                    </div>

                    <!-- 表演者得獎經歷4 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="hornorFour" class="text-left mr-2"> 榮譽獎項 4 </label>
                        <Field id="hornorFour" name="榮譽獎項 4" type="text" placeholder="請輸入表演者榮譽獎項" v-model.trim="tempArtist.honors[3]" class="correct-input" rules="min:5" />
                      </div>
                      <ErrorMessage name="榮譽獎項 4" class="error-text text-xs" />
                    </div>

                    <!-- 表演者主打歌1 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="songOne" class="text-left mr-6"> 主打歌 1 </label>
                        <Field id="songOne" name="主打歌 1" type="text" placeholder="請輸入主打歌" v-model.trim="tempArtist.songs[0]" class="correct-input" rules="required" />
                      </div>
                      <ErrorMessage name="主打歌 1" class="error-text text-xs" />
                    </div>

                    <!-- 表演者主打歌2 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="songTwo" class="text-left mr-6"> 主打歌 2 </label>
                        <Field id="songTwo" name="主打歌 2" type="text" placeholder="請輸入主打歌" v-model.trim="tempArtist.songs[1]" class="correct-input" rules="required" />
                      </div>
                      <ErrorMessage name="主打歌 2" class="error-text text-xs" />
                    </div>

                    <!-- 主打歌3 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="songThree" class="text-left mr-6"> 主打歌 3 </label>
                        <Field id="songThree" name="主打歌 3" type="text" placeholder="請輸入主打歌" v-model.trim="tempArtist.songs[2]" class="correct-input" rules="required" />
                      </div>
                      <ErrorMessage name="主打歌 3" class="error-text text-xs" />
                    </div>

                    <!-- 主打歌4 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="songFour" class="text-left mr-6"> 主打歌 4 </label>
                        <Field id="songFour" name="主打歌 4" type="text" placeholder="請輸入主打歌" v-model.trim="tempArtist.songs[3]" class="correct-input" />
                      </div>
                    </div>

                    <!-- 主打歌5 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="songFive" class="text-left mr-6">
                          <span>主打歌 5</span>
                        </label>
                        <Field id="songFive" name="主打歌 5" type="text" placeholder="請輸入主打歌" v-model.trim="tempArtist.songs[4]" class="correct-input" />
                      </div>
                    </div>
                  </div>

                  <!-- 第二欄 -->
                  <div class="flex flex-col space-y-5 py-4">
                    <!-- 表演者關鍵字1 -->
                    <div>
                      <div>
                        <div class="flex items-center gap-5 whitespace-nowrap">
                          <label for="keywordOne" class="text-left mr-6"> 關鍵字 1 </label>
                          <Field id="keywordOne" name="關鍵字 1" type="text" placeholder="請輸入表演者主打歌" v-model.trim="tempArtist.keywords[0]" class="correct-input" rules="required" />
                        </div>
                        <ErrorMessage name="關鍵字 1" class="error-text text-xs" />
                      </div>
                      <p class="mt-1 text-tiny text-black-60">※範例: YOASOBI，關鍵字: 日本、J-POP、Vocaloid</p>
                    </div>

                    <!-- 表演者關鍵字2 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="keywordTwo" class="text-left mr-6">
                          <span>關鍵字 2</span>
                        </label>
                        <Field id="keywordTwo" name="關鍵字 2" type="text" placeholder="請輸入表演者關鍵字" v-model.trim="tempArtist.keywords[1]" class="correct-input" rules="required" />
                      </div>
                      <ErrorMessage name="關鍵字 2" class="error-text text-xs" />
                    </div>

                    <!-- 表演者關鍵字3 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="keywordTwo" class="text-left mr-6">
                          <span>關鍵字 3</span>
                        </label>
                        <Field id="keywordThree" name="關鍵字 3" type="text" placeholder="請輸入表演者關鍵字" v-model.trim="tempArtist.keywords[2]" class="correct-input" rules="required" />
                      </div>
                    </div>

                    <!-- 長方形圖片 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="imgTwo" class="text-left mr-4"> 圖片-橫圖 </label>
                        <Field id="imgTwo" name="橫圖" type="file" class="correct-input" accept="image/png, image/jpeg ,image/webp" @change="onFileUpload($event, 0, 'horizontal')" rules="required" />
                      </div>
                      <ErrorMessage v-if="isNew" name="橫圖" class="error-text text-xs" />

                      <!-- 橫圖預覽 -->
                      <div class="pt-3" v-if="imgUrls[0]">
                        <p class="mb-2">預覽橫圖</p>
                        <div class="w-auto w-h-[200px] mb-5">
                          <img id="horizontal" class="w-full h-full object-cover" :src="imgUrls[0]" alt="Preview Image" />
                        </div>
                      </div>
                    </div>

                    <!-- 方形圖片 -->
                    <div>
                      <div class="flex items-center gap-5 whitespace-nowrap">
                        <label for="imgTwo" class="text-left mr-4"> 圖片-方圖 </label>
                        <Field id="imgTwo" name="方圖" type="file" class="correct-input" accept="image/png, image/jpeg" @change="onFileUpload($event, 1, 'square')" rules="required" />
                      </div>
                      <ErrorMessage v-if="isNew" name="方圖" class="error-text text-xs" />

                      <!-- 方圖預覽 -->
                      <div class="pt-3" v-if="imgUrls[1]">
                        <p class="mb-2">預覽方圖</p>
                        <div class="w-[200px] h-[200px]">
                          <img id="square" class="w-full h-full object-cover" :src="imgUrls[1]" alt="Preview Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter class="p-6 pt-0">
                <DialogClose>
                  <Button variant="outline" class="px-6">取消</Button>
                </DialogClose>
                <Button type="button" @click="onSubmit">送出</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Form>
      </div>
      <!-- 刪除多筆資料 button -->
      <div class="lg:pt-5 mt-auto">
        <AlertDialog>
          <AlertDialogTrigger as-child>
            <Button variant="outline" :disabled="selectIdBoolean.length === 0" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 刪除資料 </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>確定要刪除資料?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription> </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel class="bg-black-60">取消</AlertDialogCancel>
              <AlertDialogAction class="text-black-100 bg-tiffany" @click="deleteSelectedItems()"> 確定 </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  </div>
  <!-- Table -->
  <Table class="bg-white rounded-lg text-md mb-10 whitespace-nowrap">
    <TableHeader>
      <TableRow class="hover:bg-white text-nowrap" style="color: black !important">
        <TableHead></TableHead>
        <TableHead class="font-semibold">表演者名稱</TableHead>
        <TableHead class="font-semibold">表演者國籍</TableHead>
        <TableHead class="font-semibold">即將舉辦演唱會數</TableHead>
        <TableHead class="font-semibold">追蹤人數</TableHead>
        <TableHead class="w-[100px]"></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody class="text-gray-600">
      <TableRow v-for="artist in filteredData" :key="artist.id">
        <TableCell class="text-purple-primary">
          <Checkbox id="terms" :checked="checkedMap[artist.id]" @update:checked="updateChecked(artist.id, $event)" />
          <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
        </TableCell>
        <TableCell class="text-purple-primary">{{ artist?.name }}</TableCell>
        <TableCell class="pl-10">{{ artist.country }}</TableCell>
        <TableCell class="pl-[70px]">{{ artist.concert_count }}</TableCell>
        <TableCell class="pl-7">{{ artist.follower_count }}</TableCell>
        <TableCell class="text-center">
          <Button variant="none" @click="openDialog('編輯', artist.id)" class="hover:text-[#6366f1]">
            <span class="material-symbols-outlined">edit</span>
          </Button>
          <AlertDialog>
            <AlertDialogTrigger as-child>
              <Button variant="none" class="hover:text-[#6366f1]">
                <span class="material-symbols-outlined"> delete </span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>確定要刪除該筆資料?</AlertDialogTitle>
                <AlertDialogDescription> </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction @click="deleteItem(artist.id)"> 確定 </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <!-- Pagination -->
  <div class="flex justify-center">
    <Pagination v-slot="{ page }" :total="pagination.total_pages * 10" :sibling-count="1" show-edges :default-page="1">
      <PaginationList v-slot="{ items }" class="flex items-center md:gap-1">
        <PaginationFirst @click="FilterByPage(1)" />
        <PaginationPrev @click="FilterByPage(pagination.current_page - 1)" />

        <template v-for="item in items">
          <PaginationListItem v-if="item.type === 'page'" :key="item" :value="item.value" as-child>
            <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'page'" @click="FilterByPage(item.value)">
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" class="hidden sm:flex" />
        </template>

        <PaginationNext @click="FilterByPage(pagination.current_page + 1)" />
        <PaginationLast @click="FilterByPage(pagination.total_pages)" />
      </PaginationList>
    </Pagination>
  </div>

  <!-- 找不到資料 -->
  <div v-show="!filteredData?.length" class="flex justify-center py-12">
    <h2>哇! 找不到資料~</h2>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

// table
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Select
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

// pagination
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationList, PaginationLast, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';

// Dialog
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
</script>

<script>
import { http, getSingleArtist } from '@/api';
import { getAdminArtists, filterAdminArtists } from '@/api/admin/adminApi';
import { useDebounceFn } from '@vueuse/core';
import { loadingStore } from '@/stores/isLoading';
import { useToast } from '@/components/ui/toast/use-toast';

// vee-validate
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
const { setIsLoading } = loadingStore();
const { toast } = useToast();

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系
setLocale('zh_TW');

export default {
  data() {
    return {
      searchText: '',
      selectCountry: '',
      // countryParam: '',
      searchPage: 1,
      selectIdBoolean: [],
      checkedMap: {},
      pagination: {},
      adminArtists: [],
      imgUrls: [],
      isNew: false, // 切換新增&編輯模式
      dialogOpen: false, // 控制對話框的開啟和關閉
      changeId: null, // 編輯id
      countryRanges: [
        // 篩選選項
        { id: 1, type: '全部國籍' },
        { id: 2, type: '台灣' },
        { id: 3, type: '日本' },
        { id: 4, type: '韓國' },
        { id: 5, type: '歐美' },
        { id: 6, type: '其它' },
      ],
      countryTypes: [
        { id: 1, type: '台灣' },
        { id: 2, type: '日本' },
        { id: 3, type: '韓國' },
        { id: 4, type: '歐美' },
        { id: 5, type: '其它' },
      ],
      tempArtist: {
        // 暫存的資料
        name: '',
        country: '',
        description: '',
        honors: [],
        songs: [],
        keywords: [],
        coverUrl: {
          horizontal: null,
          square: null,
        },
      },
    };
  },
  computed: {
    filteredData() {
      const filterCountry = this.selectCountry;

      if (filterCountry === '全部國籍') {
        return this.adminArtists;
      } else {
        return this.adminArtists?.filter((artist) => {
          let filtered = true;

          // 表演者國籍篩選
          if (filterCountry !== undefined && filterCountry !== null && filterCountry.length > 0) {
            filtered = artist.country === filterCountry;
          }

          return filtered;
        });
      }
    },
  },
  methods: {
    searchInput: useDebounceFn(async function (page = 1) {
      this.searchPage = page;

      try {
        const res = await filterAdminArtists(this.searchText, page);
        this.adminArtists = res.data.data;
        this.pagination = res.data.pagination;

        res.data.data.forEach((item) => {
          this.checkedMap[`${item.id}`] = false;
        });
      } catch (error) {
        console.error(error);
      }
    }, 300),
    FilterByPage(page) {
      setIsLoading();
      this.searchInput(page);

      setTimeout(() => {
        setIsLoading();
      }, 500);
    },
    async getAdminArtistData(page = 1) {
      this.searchPage = page;
      setIsLoading(true);

      try {
        const res = await getAdminArtists(page);
        this.adminArtists = res.data.data;
        this.pagination = res.data.pagination;

        res.data.data.forEach((item) => {
          this.checkedMap[`${item.id}`] = false;
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    async getOnSubmitData(url, data) {
      setIsLoading();

      try {
        const res = await http.post(url, data);
        const successMsg = res.data.message;
        this.getAdminArtistData();
        this.toastMsg(successMsg);

        // 關閉 dialog
        this.dialogOpen = false;
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading();
      }
    },
    onFileUpload(event, index, imgType) {
      const file = event.target.files[0];
      const fileTypes = ['image/jpeg', 'image/png', 'image/webp'];

      // 檢查是否有檔案
      if (!file) {
        this.toastMsg('請選擇圖片');
        return;
      }

      // 檢查圖片是否符合 jpg & png
      if (!fileTypes.includes(file.type)) {
        this.toastMsg('只能上傳 PNG 或 JPEG 格式的圖片');
        return;
      }

      // 檢查圖片不超過 3MB
      const maxSize = 3 * 1024 * 1024; // 3MB
      if (file.size > maxSize) {
        this.toastMsg('圖片大小不能超過3MB');
        return;
      }

      this.tempArtist.coverUrl[`${imgType}`] = file;
      this.imgUrls[index] = URL.createObjectURL(file);
    },
    async openDialog(state, id) {
      if (state === '新增') {
        // 新增模式
        this.isNew = true;
        this.imgUrls = [];
        this.tempArtist = {
          // 暫存的資料
          name: '',
          country: '',
          description: '',
          honors: [],
          songs: [],
          keywords: [],
          coverUrl: {
            horizontal: null,
            square: null,
          },
        };
      } else {
        // 先清空上一筆資料
        this.resetTempArtist();
        // 清空上一筆 imgUrls
        this.imgUrls = [];
        // 編輯模式
        this.isNew = false;
        // 打開 dialog
        this.dialogOpen = true;

        // 取得該表演者資料
        try {
          const res = await getSingleArtist(id);
          const artist = res.data.data;
          this.changeId = artist.id;

          this.tempArtist = {
            name: artist.name,
            country: artist.country,
            description: artist.description,
            honors: artist.honors,
            songs: artist.popular_songs,
            keywords: artist.keywords,
            coverUrl: {
              horizontal: null,
              square: null,
            },
          };

          this.imgUrls[0] = artist.cover_urls.horizontal;
          this.imgUrls[1] = artist.cover_urls.square;
        } catch (error) {
          console.error(error);
        }
      }
    },
    // 點擊送出
    async onSubmit() {
      const veeRes = await this.$refs.form.validate();

      if (this.isNew) {
        if (!veeRes.valid) {
          this.toastMsg('請填寫必填欄位');
          return;
        }
      }

      // 過濾陣列中非必填欄位的空字串
      const honorsClear = this.tempArtist.honors.filter((honor) => honor.trim().length > 0);
      const songsClear = this.tempArtist.songs.filter((song) => song.trim().length > 0);
      const keywordsClear = this.tempArtist.keywords.filter((keyword) => keyword.trim().length > 0);

      const data = {
        name: this.tempArtist.name,
        country: this.tempArtist.country,
        description: this.tempArtist.description,
        honors: honorsClear,
        popular_songs: songsClear,
        keywords: keywordsClear,
      };

      if (this.tempArtist.coverUrl?.horizontal) {
        data.cover_horizontal = this.tempArtist.coverUrl.horizontal;
      }

      if (this.tempArtist.coverUrl?.square) {
        data.cover_square = this.tempArtist.coverUrl.square;
      }

      // 新增表演者 API
      let url = '/admin/artists';
      // 編輯表演者 - 暫時開發
      if (!this.isNew) {
        url = `/admin/artists/${this.changeId}`;
        data._method = 'PUT';
      }
      // 取得新增或編輯表演者API資料
      this.getOnSubmitData(url, data);
      // 清除form資料
      this.resetTempArtist();
      // 清空 imgUrls
      this.imgUrls = [];
    },
    updateChecked(id, checked = true) {
      this.checkedMap[`${id}`] = checked;

      this.selectIdBoolean = Object.keys(this.checkedMap).filter((id) => this.checkedMap[id]);
      // .map((id) => parseInt(id));  // 將字串型別轉換為數字型別
    },
    async deleteSelectedItems() {
      const url = '/admin/artists';
      const data = {
        ids: [...this.selectIdBoolean],
        _method: 'DELETE',
      };

      this.selectIdBoolean.forEach((id) => {
        delete this.checkedMap[id];
      });

      try {
        const res = await http.post(url, data);
        const result = res.data.success;

        if (result) {
          this.getAdminArtistData(this.searchPage);

          setTimeout(() => {
            this.toastMsg('表演者已刪除');
          }, 1000);
          this.selectIdBoolean = [];
        }
      } catch (error) {
        console.error(error);
        const errorMsg = error.response.data.message;
        if (errorMsg) {
          this.toastMsg('因表演者資料有其他資料，不能刪除');
        }
      }
    },
    async deleteItem(id) {
      this.updateChecked(id);
      this.deleteSelectedItems();
    },
    resetTempArtist() {
      this.tempArtist = {
        name: '',
        country: '',
        description: '',
        honors: [],
        songs: [],
        keywords: [],
        coverUrl: {
          horizontal: null,
          square: null,
        },
      };
    },
    toastMsg(msg) {
      toast({
        title: msg,
        description: '',
      });
    },
  },
  mounted() {
    this.getAdminArtistData();
  },
};
</script>
