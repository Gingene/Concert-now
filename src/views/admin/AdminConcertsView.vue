<template>
  <!-- Search/Command -->
  <div class="flex gap-6 mb-8 relative">
    <div class="w-[36%] lg:w-[290px] relative lg:pt-6">
      <Input type="text" placeholder="輸入演唱會名稱" v-model="searchText" @keyup="searchAdminConcerts(searchText)" />
      <span class="material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"> search </span>
    </div>
    <!-- 國籍選擇 -->
    <div class="w-[15%] lg:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="表演者國籍" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel class="tracking-wide">表演者國籍</SelectLabel>
            <SelectItem v-for="country in countryRanges" :key="country" :value="country" @click="getAdminConcerts('country', country)"> {{ country }} </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <!-- 演唱會選擇 -->
    <div class="w-[15%] lg:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="演唱會時間" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>演唱會時間</SelectLabel>
            <SelectItem v-for="time in timeRanges" :key="time" :value="time" @click="getAdminConcerts('time', time)">{{ time }}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <!-- 新增演唱會 -->
    <div class="lg:pt-5 mt-auto">
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 新增演唱會 </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[850px]">
          <DialogHeader>
            <DialogTitle class="text-center">新增演唱會</DialogTitle>
            <DialogDescription>請新增演唱會</DialogDescription>
          </DialogHeader>
          <div class="grid grid-cols-2 place-items-start gap-8">
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="title" class="text-left"> 演唱會名稱 </Label>
                <Input type="text" id="title" class="col-span-3" v-model="tempConcert.title" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="artist" class="text-left"> 表演者名稱 </Label>
                <Select v-model="tempConcert.artist_id">
                  <SelectTrigger class="w-full col-span-3">
                    <SelectValue placeholder="表演者" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>表演者</SelectLabel>
                      <SelectItem :value="artist.id" v-for="artist in selectArtists" :key="artist.id">{{ artist.name }}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="location" class="text-left"> 舉辦場地 </Label>
                <Select v-model="tempConcert.venue_id">
                  <SelectTrigger class="w-full col-span-3">
                    <SelectValue placeholder="場地" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>場地</SelectLabel>
                      <SelectItem :value="venue.id" v-for="venue in selectVenues" :key="venue.id">{{ venue.name }}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="location" class="text-left"> 演唱會價格 </Label>
                <Input type="text" id="text" class="col-span-3" v-model="tempConcert.priceList" />
              </div>
              <span class="-mt-3 text-tiny text-black-60">※ 請以半形逗號區隔</span>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="date" class="text-left"> 舉辦日期 </Label>
                <Input type="date" id="date" class="col-span-3" v-model="tempConcert.holdingDate" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="date" class="text-left"> 舉辦時間 </Label>
                <Input type="text" id="date" class="col-span-3" placeholder="00:00" v-model="tempConcert.holdingTime" />
              </div>
              <span class="-mt-3 text-tiny text-black-60">※ 請以此格式撰寫 19:00</span>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="location" class="text-left"> 售票日期 </Label>
                <Input type="date" id="text" class="col-span-3" v-model="tempConcert.salesDate" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="date" class="text-left"> 售票時間 </Label>
                <Input type="text" id="date" class="col-span-3" placeholder="00:00" v-model="tempConcert.salesTime" />
              </div>
              <span class="-mt-3 text-tiny text-black-60">※ 請以此格式撰寫 19:00</span>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="location" class="text-left"> 主辦單位 </Label>
                <Input type="text" id="text" class="col-span-3" v-model="tempConcert.organizerList" />
              </div>
              <span class="-mt-3 text-tiny text-black-60">※ 請以半形逗號區隔</span>
            </div>
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="pictures-horizontal" class="text-left"> 圖片 - 橫圖 </Label>
                <Input type="file" id="pictures-horizontal" class="col-span-3 hover:bg-accent" @change="readFile($event, 'horizontal')" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="pictures-square" class="text-left"> 圖片 - 方圖 </Label>
                <Input type="file" id="pictures-square" class="col-span-3 hover:bg-accent" @change="readFile($event, 'square')" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="pictures-straight" class="text-left"> 圖片 - 直圖 </Label>
                <Input type="file" id="pictures-straight" class="col-span-3 hover:bg-accent" @change="readFile($event, 'straight')" />
              </div>
              <hr />
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="location" class="text-left"> 購票網站 1 </Label>
                <Input type="text" id="text" class="col-span-3" v-model="tempConcert.foreignUrl0" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="location" class="text-left"> 購票網站 2 </Label>
                <Input type="text" id="text" class="col-span-3" v-model="tempConcert.foreignUrl1" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="location" class="text-left"> 購票網站 3 </Label>
                <Input type="text" id="text" class="col-span-3" v-model="tempConcert.foreignUrl2" />
              </div>
              <span class="-mt-3 text-tiny text-black-60">※ 請以半形逗號區隔購票網站名稱與網站連結</span>
            </div>
          </div>
          <DialogFooter>
            <DialogClose><Button variant="outline" class="px-6">取消</Button></DialogClose>
            <Button type="button" @click="addNewConcert">新增</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    <!-- 刪除多筆資料 -->
    <div class="lg:pt-5 mt-auto">
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="outline" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 刪除資料 </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>確定要刪除資料?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel class="bg-black-60">取消</AlertDialogCancel>
            <AlertDialogAction class="text-black-100 bg-tiffany">確定</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  </div>
  <!-- Table -->
  <Table class="bg-white rounded-lg text-md mb-10">
    <TableHeader>
      <TableRow class="hover:bg-white text-nowrap" style="color: black !important">
        <TableHead></TableHead>
        <TableHead>表演者名稱</TableHead>
        <TableHead>演唱會標題</TableHead>
        <TableHead>演唱會日期</TableHead>
        <TableHead>演唱會地點</TableHead>
        <TableHead>收藏數</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody class="text-gray-600">
      <TableRow v-for="(concert, index) in adminConcerts" :key="concert.id">
        <TableCell class="text-purple-primary">
          <Checkbox id="terms" />
          <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
        </TableCell>
        <TableCell class="text-purple-primary">{{ concert.artist?.name }}</TableCell>
        <TableCell>{{ concert.title }}</TableCell>
        <TableCell>{{ concert.holding_time }}</TableCell>
        <TableCell>{{ concert.venue?.title }}</TableCell>
        <TableCell>{{ ((concert.saver_count * 7) / 6) * 258 * (index + 4) }}</TableCell>
        <TableCell>
          <Dialog>
            <DialogTrigger as-child>
              <Button variant="none" class="hover:text-[#6366f1]">
                <span class="material-symbols-outlined">edit</span>
              </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[850px]">
              <DialogHeader>
                <DialogTitle class="text-center">編輯演唱會</DialogTitle>
                <DialogDescription>請編輯演唱會</DialogDescription>
              </DialogHeader>
              <div class="grid grid-cols-2 place-items-start gap-4">
                <div class="grid gap-4 py-4">
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="title" class="text-left"> 演唱會標題 </Label>
                    <Input type="text" id="title" class="col-span-3" />
                  </div>
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="artist" class="text-left"> 表演者名稱 </Label>
                    <Input id="artist" class="col-span-3" />
                  </div>
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="date" class="text-left"> 演唱會日期 </Label>
                    <Input id="date" class="col-span-3" />
                  </div>
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="location" class="text-left"> 演唱會地點 </Label>
                    <Input id="location" class="col-span-3" />
                  </div>
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="address" class="text-left"> 演唱會地址 </Label>
                    <Input id="address" class="col-span-3" />
                  </div>
                </div>
                <div class="grid gap-4 py-4">
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="pictures" class="text-left"> 演唱會圖片 </Label>
                    <Input type="file" id="pictures" class="col-span-3 hover:bg-accent" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose><Button variant="outline" class="px-6">取消</Button></DialogClose>
                <Button type="submit">儲存資料</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <AlertDialog>
            <AlertDialogTrigger as-child>
              <Button variant="none" class="hover:text-[#6366f1]">
                <span class="material-symbols-outlined">delete</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>確定要刪除該筆資料?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction>確定</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <!-- Pagination -->
  <!-- <div class="flex justify-center">
    <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="2">
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationFirst />
        <PaginationPrev />

        <template v-for="(item, index) in items">
          <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
            <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext />
        <PaginationLast />
      </PaginationList>
    </Pagination>
  </div> -->
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';

// table
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Select
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
// Dialog
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  // AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
</script>

<script>
import { mapState, mapActions } from 'pinia';
import { useConcertsStore } from '@/stores/concerts';
import { http, adminPath } from '@/api';
// import { loadingStore } from '@/stores/isLoading';

// const { setIsLoading } = loadingStore();

export default {
  data() {
    return {
      // 篩選選項
      timeRanges: ['全部', '本日', '本週', '本月'],
      countryRanges: ['全部', '台灣', '日本', '韓國', '歐美', '其它'],
      searchText: '',
      // 表單選項
      selectVenues: [
        {
          id: '1',
          name: '台北國際會議中心',
        },
        {
          id: '2',
          name: 'Zepp New Taipei',
        },
        {
          id: '3',
          name: '台北流行音樂中心',
        },
        {
          id: '4',
          name: '高雄流行音樂中心',
        },
        {
          id: '5',
          name: 'Legacy Taichung',
        },
        {
          id: '6',
          name: '台北小巨蛋',
        },
      ],
      selectArtists: [
        {
          id: '1',
          name: 'Tom Jones',
        },
        {
          id: '2',
          name: 'Apink',
        },
        {
          id: '3',
          name: 'FTIsland',
        },
        {
          id: '4',
          name: '理想混蛋',
        },
        {
          id: '5',
          name: '溫蒂漫步',
        },
        {
          id: '6',
          name: 'Kodaline',
        },
        {
          id: '7',
          name: 'YOASOBI',
        },
        {
          id: '8',
          name: '原子邦妮',
        },
        {
          id: '9',
          name: 'HYBS',
        },
        {
          id: '10',
          name: '宇宙人',
        },
        {
          id: '11',
          name: 'Itzy',
        },
        {
          id: '12',
          name: 'King Gnu',
        },
      ],
      // 暫存待處理的資料
      tempConcert: {},
    };
  },
  methods: {
    ...mapActions(useConcertsStore, ['getAdminConcerts', 'searchAdminConcerts']),
    readFile(event, topic) {
      this.tempConcert[`cover_${topic}`] = event.target.files[0];
    },
    addNewConcert() {
      this.tempConcert.price_list = this.tempConcert.priceList?.split(',');
      this.tempConcert.holding_time = `${this.tempConcert.holdingDate} ${this.tempConcert.holdingTime}:00`;
      this.tempConcert.sales_time = `${this.tempConcert.salesDate} ${this.tempConcert.salesTime}:00`;
      this.tempConcert.organizers = this.tempConcert.organizerList?.split(',');

      const deleteList = ['priceList', 'holdingDate', 'holdingTime', 'salesDate', 'salesTime', 'organizerList'];
      for (let i = 0; i < deleteList.length; i++) {
        delete this.tempConcert[`${deleteList[i]}`];
      }

      this.tempConcert.foreign_urls = [];
      for (let i = 0; i < 3; i++) {
        if (this.tempConcert[`foreignUrl${i}`]) {
          this.tempConcert.foreign_urls.push({
            name: this.tempConcert[`foreignUrl${i}`]?.split(',')[0],
            url: this.tempConcert[`foreignUrl${i}`]?.split(',')[1],
          });
        }
        delete this.tempConcert[`foreignUrl${i}`];
      }

      console.log(this.tempConcert);
      http
        .post(adminPath.concerts, { ...this.tempConcert })
        .then((res) => {
          console.log(res);
          this.getAdminConcerts('country', '全部');
          this.getAdminConcerts('time', '全部');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    ...mapState(useConcertsStore, ['adminConcerts', 'pagination']),
  },
  mounted() {
    this.getAdminConcerts('country', '全部');
    this.getAdminConcerts('time', '全部');
  },
};
</script>

<style lang=""></style>
