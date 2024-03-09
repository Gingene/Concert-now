<template>
  <div class="grid grid-flow-row gap-5 lg:pt-6">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
      <Card v-for="item in totalData" :key="item.title" class="flex-1 hover:bg-slate-50">
        <CardHeader class="h-[72px]">
          <CardTitle class="text-base xl:text-lg">{{ item.title }}</CardTitle>
        </CardHeader>
        <CardContent class="text-4xl font-bold text-center"> {{ item.count }} </CardContent>
      </Card>
    </div>
    <div class="grid grid-flow-row xl:grid-flow-col gap-4">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Card>
          <CardHeader class="flex flex-row items-center justify-between h-[94px]">
            <CardTitle class="text-xl">用戶瀏覽人數</CardTitle>
            <Select>
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
        <Card>
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
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">用戶行為 - 流量來源</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="chart3"></div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">用戶行為 - 檢舉與倒推</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="chart4"></div>
          </CardContent>
        </Card>
      </div>
    </div>
    <div class="xl:grid grid-flow-row xl:grid-flow-col xl:gap-4">
      <div class="xl:col-span-1 mb-4 xl:mb-0">
        <Card>
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">演唱會檢索</CardTitle>
          </CardHeader>
          <CardContent class="pb-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead class="w-[100px]">檢視量</TableHead>
                  <TableHead class="text-nowrap">收藏量</TableHead>
                  <TableHead>演唱會</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="(concert, index) in concerts.splice(0, 5)" :key="concert + index">
                  <TableCell class="font-medium">
                    {{ Number.parseInt(5451 / (index + 1)) }}
                  </TableCell>
                  <TableCell>{{ Number.parseInt(1622 / (index + 1)) }}</TableCell>
                  <TableCell>
                    <router-link :to="`/concerts/${concert.id}`" target="_blank">
                      {{ concert.title }}
                    </router-link>
                  </TableCell>
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
            <!-- 保留換頁位置 -->
          </CardFooter>
        </Card>
      </div>
      <div class="col-span-3 grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-4">
        <Card>
          <CardHeader class="h-[94px]">
            <CardTitle class="text-xl my-auto">熱門表演者檢索量</CardTitle>
          </CardHeader>
          <CardContent>
            <div id="chart5"></div>
          </CardContent>
        </Card>
        <Card>
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
</script>

<script>
import '@/assets/c3.css';
import '@/helpers/c3';
import '@/helpers/d3';

import { mapActions, mapState } from 'pinia';
import { useConcertsStore } from '@/stores/concerts';
import { loadingStore } from '@/stores/isLoading';

const { setIsLoading } = loadingStore();

export default {
  data() {
    return {
      januaryDateAry: [],
      totalData: [
        {
          title: '總瀏覽人數',
          count: 2365,
        },
        {
          title: '總會員數',
          count: 240,
        },
        {
          title: '總演唱會量',
          count: 130,
        },
        {
          title: '總歌單曲目量',
          count: 370,
        },
        {
          title: '總會場評論量',
          count: 246,
        },
      ],
    };
  },
  methods: {
    ...mapActions(useConcertsStore, ['getAllConcerts']),
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
  computed: {
    ...mapState(useConcertsStore, ['concerts']),
  },
  mounted() {
    setIsLoading();
    this.getAllConcerts();

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

    // 等演唱會檢索圖表生成完畢後再生成，避免跑版
    setTimeout(() => {
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
      setIsLoading();
    }, 1000);
  },
};
</script>

<style></style>
