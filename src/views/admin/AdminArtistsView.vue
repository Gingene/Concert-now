<template>
  <!-- Search/Command -->
  <div class="flex gap-6 mb-8 relative">
    <div class="w-[36%] lg:w-[290px] relative lg:pt-6">
      <Input type="text" placeholder="輸入表演者名稱" v-model="searchText" />
      <span class="material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"> search </span>
    </div>
    <!-- 國籍篩選 -->
    <div class="w-[15%] lg:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="國籍" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel class="tracking-wide">表演者國籍</SelectLabel>
            <SelectItem v-for="country in countryRanges" :key="country" :value="country" @click="getAdminConcerts('country', country)"> {{ country }} </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <!-- 新增表演者 -->
    <div class="lg:pt-5 mt-auto">
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 新增表演者 </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[850px]">
          <DialogHeader>
            <DialogTitle class="text-center">新增表演者</DialogTitle>
            <DialogDescription>請新增表演者</DialogDescription>
          </DialogHeader>
          <!-- <div class="grid grid-cols-2 place-items-start gap-8">
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
          </div> -->
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
        <!-- <TableHead>表演者國籍</TableHead> -->
        <TableHead>即將舉辦演唱會數</TableHead>
        <TableHead>追蹤人數</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody class="text-gray-600">
      <TableRow v-for="artist in artists" :key="artist.id">
        <TableCell class="text-purple-primary">
          <Checkbox id="terms" />
          <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
        </TableCell>
        <TableCell class="text-purple-primary">{{ artist?.name }}</TableCell>
        <TableCell>{{ artist.concert_count }}</TableCell>
        <TableCell>{{ artist.follower_count }}</TableCell>
        <!-- <TableCell>{{ venue?.title }}</TableCell> -->
        <TableCell class="text-right">
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
import { http, path } from '@/api';
import { loadingStore } from '@/stores/isLoading';

const { setIsLoading } = loadingStore();

export default {
  data() {
    return {
      // 篩選選項
      countryRanges: ['全部', '台灣', '日本', '韓國', '歐美', '其它'],
      searchText: '',
      // 暫存待處理的資料
      tempConcert: {},
      artists: [],
    };
  },
  methods: {
    getArtists() {
      setIsLoading();
      http
        .get(`${path.artists}`)
        .then((res) => {
          // console.log(res);
          this.artists = res.data.data;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading();
        });
    },
  },
  computed: {},
  mounted() {
    this.getArtists();
  },
};
</script>

<style lang=""></style>
