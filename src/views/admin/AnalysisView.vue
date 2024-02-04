<template>
  <div class="space-y-8">
    <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-5">
      <Card class="flex-1 hover:bg-slate-50">
        <CardHeader class="h-[72px]">
          <CardTitle class="text-base">總瀏覽人數</CardTitle>
        </CardHeader>
        <CardContent class="text-4xl font-bold text-center"> 2365 </CardContent>
      </Card>
      <Card class="flex-1 hover:bg-slate-50">
        <CardHeader class="h-[72px]">
          <CardTitle class="text-base">總會員數</CardTitle>
        </CardHeader>
        <CardContent class="text-4xl font-bold text-center"> 150 </CardContent>
      </Card>
      <Card class="flex-1 hover:bg-slate-50">
        <CardHeader class="h-[72px]">
          <CardTitle class="text-base">總演唱會量</CardTitle>
        </CardHeader>
        <CardContent class="text-4xl font-bold text-center"> 30 </CardContent>
      </Card>
      <Card class="flex-1 hover:bg-slate-50">
        <CardHeader class="h-[72px]">
          <CardTitle class="text-base">總歌單曲目量</CardTitle>
        </CardHeader>
        <CardContent class="text-4xl font-bold text-center"> 70 </CardContent>
      </Card>
      <Card class="flex-1 hover:bg-slate-50">
        <CardHeader class="h-[72px]">
          <CardTitle class="text-base">總會場評論量</CardTitle>
        </CardHeader>
        <CardContent class="text-4xl font-bold text-center"> 2365 </CardContent>
      </Card>
    </div>

    <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-5">
      <Card class="flex-1">
        <CardHeader class="flex flex-row items-center justify-between h-[94px]">
          <CardTitle class="text-xl">用戶瀏覽人數</CardTitle>
          <Select
            ><!-- ! 無法覆蓋 margin-top:6px -->
            <SelectTrigger class="justify-end w-auto">
              <SelectValue placeholder="日" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>時間段</SelectLabel>
                <SelectItem value="day">日</SelectItem>
                <SelectItem value="week">周</SelectItem>
                <SelectItem value="month">月</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <img src="https://placehold.co/600x400" alt="User browsing chart" srcset="" />
        </CardContent>
      </Card>
      <Card class="flex-1">
        <CardHeader class="flex flex-row items-center justify-between h-[94px]">
          <CardTitle class="text-xl">用戶註冊人數</CardTitle>
          <Select
            ><!-- ! 無法覆蓋 margin-top:6px -->
            <SelectTrigger class="justify-end w-auto">
              <SelectValue placeholder="日" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>時間段</SelectLabel>
                <SelectItem value="day">日</SelectItem>
                <SelectItem value="week">周</SelectItem>
                <SelectItem value="month">月</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <img src="https://placehold.co/600x400" alt="User registration number chart" srcset="" />
        </CardContent>
      </Card>
      <div class="flex flex-[1.2] space-x-4 lg:space-y-0 lg:space-x-5">
        <Card class="flex-[.5]">
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">用戶行為 - 流量來源</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="https://placehold.co/200x250"
              alt="User Behavior Traffic Sources Graph"
              srcset="" />
          </CardContent>
        </Card>
        <Card class="flex-[.5]">
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">用戶行為 - 檢舉與倒推</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="https://placehold.co/200x250"
              alt="User Behavior Reporting and Backdating Chart"
              srcset="" />
          </CardContent>
        </Card>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-5">
      <Card class="flex-1">
        <CardHeader class="h-[94px]">
          <CardTitle class="text-xl my-auto">演唱會檢索</CardTitle>
        </CardHeader>
        <CardContent class="pb-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="w-[100px]">檢視量</TableHead>
                <TableHead class="text-nowrap">收藏量</TableHead>
                <TableHead>演唱會</TableHead>
                <TableHead class="text-right">表演者</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="(item, index) in concerts" :key="item + index">
                <TableCell class="font-medium">
                  {{ Number.parseInt(800 / (index + 1)) }}
                </TableCell>
                <TableCell>{{ Number.parseInt(300 / (index + 1)) }}</TableCell>
                <TableCell
                  ><a href="#">{{ item.title }}</a></TableCell
                >
                <TableCell class="text-right">{{ item.artist.name }}</TableCell>
              </TableRow>
              <!-- 保留的靜態資料 -->
              <!-- <TableRow>
                <TableCell class="font-medium"> 1240 </TableCell>
                <TableCell>352</TableCell>
                <TableCell><a href="#">Tom Jones湯姆瓊斯演唱會2024台北站</a></TableCell>
                <TableCell class="text-right">Tom Jones</TableCell>
              </TableRow> -->
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter class="flex justify-center pt-[auto]">
          <Pagination v-slot="{ page }" :total="5" :sibling-count="1" show-edges :default-page="1">
            <PaginationList v-slot="{ items }" class="flex items-center gap-1">
              <!-- <PaginationFirst /> -->
              <PaginationPrev />

              <template v-for="(item, index) in items">
                <PaginationListItem
                  v-if="item.type === 'page'"
                  :key="index"
                  :value="item.value"
                  as-child>
                  <Button
                    class="w-10 h-10 p-0"
                    :variant="item.value === page ? 'default' : 'outline'">
                    {{ item.value }}
                  </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :key="item.type" :index="index" />
              </template>

              <PaginationNext />
              <!-- <PaginationLast /> -->
            </PaginationList>
          </Pagination>
        </CardFooter>
      </Card>
      <div class="flex flex-1 space-x-4 lg:space-y-0 lg:space-x-5">
        <Card class="flex-1">
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">歌手/團體檢索量</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="https://placehold.co/250X300" alt="" srcset="" />
          </CardContent>
        </Card>
        <Card class="flex-1">
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">會場瀏覽量</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="https://placehold.co/250X300" alt="" srcset="" />
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
// Card
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Select
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Pagination
import {
  Pagination,
  PaginationEllipsis,
  // PaginationFirst,
  // PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination';

// Button
import { Button } from '@/components/ui/button';

// Table
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import axios from 'axios';
</script>

<script>
export default {
  data() {
    return {
      // concerts:[
      //   {
      //     'id': 1,
      //     'title': 'Tom Jones 湯姆瓊斯演唱會 2024 台北站',
      //     'artist': {
      //         'id': 1,
      //         'name': 'Tom Jones',
      //         'country': '歐美'
      //     },
      //     'views': 352,
      //     'user': [
      //       '1','2','3',
      //     ]
      //   },
      //   {
      //     'id': 2,
      //     'title': '2023 Apink FANCONCERT in Taipei [Pink drive]',
      //     'artist': {
      //         'id': 2,
      //         'name': 'Apink',
      //         'country': '韓國'
      //     },
      //     'views': 286,
      //     'user': [
      //       '1','2','3','3','3','3',
      //     ]
      //   },
      // ],
      concerts: [],
    };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_APP_SERVICE_API}/api/concerts`)
      .then((res) => {
        console.log(res.data.data);
        this.concerts = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang=""></style>
