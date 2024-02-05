<template>
  <div class="space-y-4 lg:space-y-8">
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
        <CardContent class="text-4xl font-bold text-center"> 240 </CardContent>
      </Card>
      <Card class="flex-1 hover:bg-slate-50">
        <CardHeader class="h-[72px]">
          <CardTitle class="text-base">總演唱會量</CardTitle>
        </CardHeader>
        <CardContent class="text-4xl font-bold text-center"> 130 </CardContent>
      </Card>
      <Card class="flex-1 hover:bg-slate-50">
        <CardHeader class="h-[72px]">
          <CardTitle class="text-base">總歌單曲目量</CardTitle>
        </CardHeader>
        <CardContent class="text-4xl font-bold text-center"> 270 </CardContent>
      </Card>
      <Card class="flex-1 hover:bg-slate-50">
        <CardHeader class="h-[72px]">
          <CardTitle class="text-base">總會場評論量</CardTitle>
        </CardHeader>
        <CardContent class="text-4xl font-bold text-center"> 246 </CardContent>
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
                <SelectItem value="day" @click="timeSeriesChart('views', 'day')">日</SelectItem>
                <SelectItem value="week" @click="timeSeriesChart('views', 'week')">周</SelectItem>
                <SelectItem value="month" @click="timeSeriesChart('views', 'month')">月</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div id="chart1"></div>
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
                <SelectItem value="day" @click="timeSeriesChart('registers', 'day')">日</SelectItem>
                <SelectItem value="week" @click="timeSeriesChart('registers', 'week')">周</SelectItem>
                <SelectItem value="month" @click="timeSeriesChart('registers', 'month')">月</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div id="chart2"></div>
        </CardContent>
      </Card>
      <div class="flex flex-[1.2] space-x-4 lg:space-y-0 lg:space-x-5">
        <Card class="flex-[.5]">
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">用戶行為 - 流量來源</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="chart3"></div>
          </CardContent>
        </Card>
        <Card class="flex-[.5]">
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">用戶行為 - 檢舉與倒推</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="chart4"></div>
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
                <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                  <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
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
      <div class="flex flex-1 flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-5">
        <Card class="flex-1">
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">熱門表演者檢索量</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="chart5"></div>
          </CardContent>
        </Card>
        <Card class="flex-1">
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">熱門會場瀏覽量</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="chart6"></div>
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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

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
      concerts: [],
      januaryDateAry: [],
    };
  },
  methods: {
    // 用戶瀏覽/註冊人數 圖表
    timeSeriesChart(type, time = 'day') {
      let chartId = 1;
      let columnsData = [];
      let tickFormat = '%d';

      if (type === 'views') {
        if (time === 'day') {
          columnsData = [
            ['x', ...this.januaryDateAry],
            ['人', 30, 200, 100, 400, 150, 320, 220, 500, 420, 650, 800, 720, 900, 650, 810, 920, 950, 780, 880, 600, 450, 700, 550, 300, 480, 350, 700, 800, 950, 600, 850],
          ];
        } else if (time === 'week') {
          columnsData = [
            ['x', '2024-01-01', '2024-01-08', '2024-01-15', '2024-01-22', '2024-01-29'],
            ['人', 1420, 4640, 4390, 3880, 4730],
          ];
        } else if (time === 'month') {
          columnsData = [
            ['x', '2024-01-01', '2024-02-02', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01'],
            ['人', 16730, 18942, 23450, 20034, 19080, 25001],
          ];
          tickFormat = '%m';
        }
      } else if (type === 'registers') {
        chartId = 2;
        if (time === 'day') {
          columnsData = [
            ['x', ...this.januaryDateAry],
            ['人', 5, 10, 3, 12, 30, 42, 20, 10, 16, 46, 35, 58, 40, 56, 50, 90, 44, 30, 46, 49, 70, 78, 51, 61, 70, 53, 80, 100, 90, 126, 131],
          ];
        } else if (time === 'week') {
          columnsData = [
            ['x', '2024-01-01', '2024-01-08', '2024-01-15', '2024-01-22', '2024-01-29'],
            ['人', 122, 261, 379, 493, 518],
          ];
        } else if (time === 'month') {
          columnsData = [
            ['x', '2024-01-01', '2024-02-02', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01'],
            ['人', 1773, 1840, 1632, 2084, 2351, 2488],
          ];
          tickFormat = '%m';
        }
      }

      // eslint-disable-next-line no-undef
      c3.generate({
        bindto: `#chart${chartId}`,
        data: {
          x: 'x',
          columns: [...columnsData],
          colors: { 人: '#971AA6' },
          type: 'spline',
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: tickFormat,
            },
          },
        },
      });
    },
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_APP_SERVICE_API}/api/concerts`)
      .then((res) => {
        console.log(res);
        this.concerts = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });

    // 一月日期生成
    for (let i = 1; i <= 31; i++) {
      if (i < 10) this.januaryDateAry.push('2024-01-0' + i);
      else {
        this.januaryDateAry.push('2024-01-' + i);
      }
    }

    // 圖表: c3.js
    // 用戶瀏覽人數
    this.timeSeriesChart('views', 'day');
    // 用戶註冊人數
    this.timeSeriesChart('registers', 'day');

    // 用戶行為 - 流量來源
    // eslint-disable-next-line no-undef
    c3.generate({
      bindto: '#chart3',
      data: {
        columns: [
          ['搜尋引擎', 521],
          ['社交媒體', 260],
          ['URL', 80],
        ],
        type: 'pie',
        colors: {
          搜尋引擎: '#D595F1',
          社交媒體: '#42DFC8',
          URL: '#971AA6',
        },
      },
    });

    // 用戶行為 - 檢舉與倒推
    // eslint-disable-next-line no-undef
    c3.generate({
      bindto: '#chart4',
      data: {
        columns: [
          ['評論檢舉', 201],
          ['歌曲倒推', 420],
        ],
        type: 'donut',
        colors: {
          評論檢舉: '#D595F1',
          歌曲倒推: '#42DFC8',
        },
      },
      donut: { width: 40 },
    });

    // 熱門表演者檢索量
    // eslint-disable-next-line no-undef
    c3.generate({
      bindto: '#chart5',
      data: {
        columns: [
          ['Tom Jones', 380],
          ['Apink', 230],
          ['FTIsland', 170],
          ['理想混蛋', 340],
          ['溫蒂漫步', 60],
        ],
        type: 'bar',
      },
      color: {
        pattern: ['#4D0D97', '#42DFC8', '#020087', '#D595F1', '#971AA6'],
      },
      bar: {
        width: {
          ratio: 0.7,
        },
        space: 0.3,
      },
      size: {
        height: 320,
      },
      axis: {
        x: {
          type: 'category',
          categories: ['表演者'],
        },
      },
    });

    // 熱門會場瀏覽量
    // eslint-disable-next-line no-undef
    c3.generate({
      bindto: '#chart6',
      data: {
        columns: [
          ['Legacy Taichung', 210],
          ['台北流行音樂中心', 380],
          ['高雄流行音樂中心', 300],
          ['新北工商展覽中心', 150],
          ['台北國際會議中心TICC', 250],
        ],
        type: 'bar',
      },
      color: {
        pattern: ['#4D0D97', '#42DFC8', '#020087', '#D595F1', '#971AA6'],
      },
      bar: {
        width: {
          ratio: 0.7,
        },
        space: 0.3,
      },
      size: {
        height: 350,
      },
      axis: {
        x: {
          type: 'category',
          categories: ['場地'],
        },
      },
    });
  },
};
</script>

<style></style>
