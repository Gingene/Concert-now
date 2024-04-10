<template>
  <!-- Search/Command -->
  <div class="flex flex-wrap gap-x-5 gap-y-6 md:gap-6 mb-8 relative">
    <!-- w-[36%] lg:w-[290px] -->
    <div class="w-full xs:w-[290px] relative lg:pt-6">
      <Input type="text" placeholder="輸入表演者名稱" v-model.trim="searchText" @keyup="searchInput" />
      <span class="material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"> search </span>
    </div>
    <!-- 國籍篩選 -->
    <!-- w-[15%] lg:w-[200px] -->
    <div class="w-full xs:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5">
      <Select v-model="selectCountry">
        <SelectTrigger>
          <SelectValue placeholder="選擇表演者國籍" />
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
    <div class="flex gap-6">
      <!-- 新增表演者 button -->
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
            <DialogFooter>
              <DialogClose><Button variant="outline" class="px-6">取消</Button></DialogClose>
              <Button type="button" @click="addNewConcert">新增</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <!-- 刪除多筆資料 button -->
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
          <Checkbox id="terms" />
          <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
        </TableCell>
        <TableCell class="text-purple-primary">{{ artist?.name }}</TableCell>
        <TableCell class="pl-10">{{ artist.country }}</TableCell>
        <TableCell class="pl-[70px]">{{ artist.concert_count }}</TableCell>
        <TableCell class="pl-7">{{ artist.follower_count }}</TableCell>
        <TableCell class="text-center">
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

  <!-- 找不到資料 -->
  <div v-show="!filteredData?.length" class="flex justify-center py-12">
    <h2>哇! 找不到資料~</h2>
  </div>
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
// import { http, path } from '@/api';
import { getAdminArtists, filterAdminArtists } from '@/api/admin/all';
import { useDebounceFn } from '@vueuse/core';
import { loadingStore } from '@/stores/isLoading';
const { setIsLoading } = loadingStore();

export default {
  data() {
    return {
      searchText: '',
      selectCountry: '',
      // countryParam: '',
      // 暫存待處理的資料
      tempConcert: {},
      adminArtists: [],
      // 篩選選項
      // countryRanges: ['全部', '台灣', '日本', '韓國', '歐美', '其它'],
      countryRanges: [
        {
          id: 1,
          type: '全部國籍',
        },
        {
          id: 2,
          type: '台灣',
        },
        {
          id: 3,
          type: '日本',
        },
        {
          id: 4,
          type: '韓國',
        },
        {
          id: 5,
          type: '歐美',
        },
        {
          id: 6,
          type: '其它',
        },
      ],
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
    async getAdminArtistData(page = 1) {
      setIsLoading();

      try {
        const res = await getAdminArtists(page);
        this.adminArtists = res.data.data;
        setIsLoading();

      } catch (error) {
        console.error(error);
      }
    },
    searchInput: useDebounceFn(async function ( page = 1) {
      try {
        const res = await filterAdminArtists(this.searchText, page);
        this.adminArtists = res.data.data;

      } catch (error) {
        console.error(error);
      }
    }, 300),
    // getArtists() {
    //   setIsLoading();
    //   http
    //     .get(`${path.artists}`)
    //     .then((res) => {
    //       // console.log(res);
    //       this.artists = res.data.data;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     })
    //     .finally(() => {
    //       setIsLoading();
    //     });
    // },
  },
  mounted() {
    this.getAdminArtistData();
  },
};
</script>
