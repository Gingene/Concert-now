<template>
  <!-- Search/Command -->
  <div class="flex gap-6 mb-8 relative">
    <div class="w-[36%] lg:w-[290px] relative lg:pt-6">
      <Input type="text" placeholder="輸入場地名稱" v-model="searchText" @keyup="searchAdminConcerts(searchText)" />
      <span class="material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"> search </span>
    </div>
    <!-- 地區篩選 -->
    <div class="w-[15%] lg:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="地區" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel class="tracking-wide">地區</SelectLabel>
            <SelectItem v-for="country in countryRanges" :key="country" :value="country" @click="getAdminConcerts('country', country)"> {{ country }} </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <!-- 新增場地 -->
    <div class="lg:pt-5 mt-auto">
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 新增場地 </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[850px]">
          <DialogHeader>
            <DialogTitle class="text-center">新增場地</DialogTitle>
            <DialogDescription>請新增場地</DialogDescription>
          </DialogHeader>
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
        <TableHead>名稱</TableHead>
        <TableHead>地區</TableHead>
        <TableHead>座位區分類</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody class="text-gray-600">
      <TableRow v-for="venue in venues" :key="venue.id">
        <TableCell class="text-purple-primary">
          <Checkbox id="terms" />
          <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
        </TableCell>
        <TableCell class="text-purple-primary">{{ venue.title }}</TableCell>
        <TableCell>{{ venue.city }}</TableCell>
        <TableCell>{{ venue.seat_areas?.join('、') }}</TableCell>
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
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
      searchText: '',
      countryRanges: ['台灣', '日本', '韓國', '歐美', '其它'],
      // 暫存待處理的資料
      tempConcert: {},
      // 場地資料
      venues: [],
    };
  },
  methods: {
    getVenues(page, firstLoad) {
      setIsLoading();
      http
        .get(`${path.venues}?page=${page}`)
        .then((res) => {
          firstLoad ? this.venues.push(...res.data.data) : (this.venues = res.data.data);
          // console.log(this.venues);
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
    this.getVenues(1, 'first');
    this.getVenues(2, 'first');
  },
};
</script>
