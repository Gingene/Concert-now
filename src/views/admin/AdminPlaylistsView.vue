<template lang="">
  <!-- Search/Command -->
  <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8">
    <div class="col-span-2 lg:col-span-1">
      <Select v-model="selectReview">
        <SelectTrigger>
          <SelectValue placeholder="未審閱" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>評論審閱</SelectLabel>
            <SelectItem value="未審閱"> 未審閱 </SelectItem>
            <SelectItem value="已審閱"> 已審閱 </SelectItem>
            <SelectItem value="全部"> 全部 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div class="flex col-span-2">
      <Input type="text" placeholder="輸入會場、用戶名稱查詢..." @input="matchSong" class="bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0" />
      <Button class="rounded-l-none">
        <span class="material-symbols-outlined absolute"> search </span>
      </Button>
    </div>

    <div class="flex col-span-2 items-center justify-between">
      列表數量: {{ filterDatas.length }}
      <div>
        <Button class="bg-lime-500" @click="checkAllReview">已審閱</Button>
        <Button class="ml-4" variant="destructive">刪除</Button>
      </div>
    </div>
  </div>
  <div>
    {{ songCheckList }}
  </div>
  
  <!-- Table -->

  <Table class="bg-white rounded-lg text-md mb-10" v-show="filterDatas.length !== 0">
    <TableCaption>歌單管理控制面板</TableCaption>
    <TableHeader>
      <TableRow class="hover:bg-white" style="color: black !important">
        <TableHead><Checkbox @click="allCheckList" /></TableHead>
        <TableHead
          ><Button variant="ghost" @click="sortSongByDownVotes"
            >倒推人數<span class="material-symbols-outlined" v-if="initial"> stat_1 </span><span class="material-symbols-outlined" v-else> stat_minus_1 </span></Button
          ></TableHead
        >
        <TableHead>歌曲</TableHead>
        <TableHead>全部歌單</TableHead>
        <TableHead>演唱會</TableHead>
        <TableHead>用戶名</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody class="text-gray-600">
      <TableRow class="py-8" v-for="song in filterDatas" :key="song.id">
        <TableCell class="text-purple-primary">
          <Checkbox :id="song.id" @click="chagneCheckList(song.id)" class="checkboxList" />
          <label :for="song.id" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
        </TableCell>
        <TableCell class="text-purple-primary text-center">{{ song.down_votes }}</TableCell>
        <TableCell>{{ song.name }}</TableCell>
        <TableCell>
          <Dialog>
            <DialogTrigger>
              <Button> 檢視 </Button>
            </DialogTrigger>
            <DialogContent>
              <ScrollArea class="h-[200px] rounded-md border p-4">
                <DialogHeader class="border-b-2 pb-4">
                  <DialogTitle>{{ song.concertId4.title }}</DialogTitle>
                  <DialogDescription> 歌單列表 </DialogDescription>
                </DialogHeader>

                <div v-for="songForModel in mockDatas" :key="songForModel.id" class="py-2">
                  <span>{{ songForModel.id }}. </span><span>{{ songForModel.name }}</span>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </TableCell>
        <TableCell
          ><router-link class="text-purple-500 hover:text-purple-800" :to="`/concert/4`">{{ song.concertId4.title }}</router-link></TableCell
        >
        <TableCell>{{ song.userId1.email }}</TableCell>
        <TableCell class="space-x-4 flex">
          <Button class="bg-gray-200" v-if="!song.isReview" @click="checkReview(song.id)">未審閱</Button>
          <Button class="bg-lime-500" v-else>已審閱</Button>

          <Dialog>
            <DialogTrigger>
              <Button variant="destructive">
                <span class="material-symbols-outlined">delete</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle class="text-center">是否要警告使用者？</DialogTitle>
                <DialogDescription>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="警告原因" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>警告原因</SelectLabel>
                        <SelectItem value="不實評論"> 不實評論 </SelectItem>
                        <SelectItem value="惡意評論"> 惡意評論 </SelectItem>
                        <SelectItem value="腥羶色內容"> 腥羶色內容 </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <DialogClose><Button class="bg-lime-500" @click="deleteSong(song.id)">不警告</Button></DialogClose>
                <DialogClose><Button variant="destructive" @click="warnUser(song.userId1)">送出警告</Button></DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
  <div v-show="!filterDatas.length" class="flex justify-center py-12">
    <h2>哇! 找不到資料~</h2>
  </div>
  <!-- Pagination -->
  <div class="flex justify-center">
    <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="1">
      <PaginationList v-slot="{ items }" class="flex items-center md:gap-1">
        <PaginationFirst />
        <PaginationPrev />

        <template v-for="(item, index) in items">
          <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
            <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'page'">
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" class="hidden sm:flex" />
        </template>

        <PaginationNext />
        <PaginationLast />
      </PaginationList>
    </Pagination>
  </div>
</template>
<script setup>
// sidebar
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
// pagination
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationList, PaginationLast, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';
// table
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Select
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
// Dialog
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
</script>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      songCheckList: [],
      selectReview: '未審閱',
      initial: true,
      backupDatas: [],
      mockDatas: [
        {
          id: '1',
          name: '在地球爆炸之前',
          youtube_url: 'https://www.youtube.com/watch?v=c6IKZrAIUtQ&pp=ygUV5Zyo5Zyw55CD54iG54K45LmL5YmN',
          up_votes: 38,
          down_votes: 0,
          isReview: false,
          concertId4: {
            title: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          },
          userId1: {
            email: '1@gmail.com',
          },
        },
        {
          id: '2',
          name: '愚者',
          youtube_url: 'https://www.youtube.com/watch?v=FYNNLjn-CuI&pp=ygUG5oSa6ICF',
          up_votes: 34,
          down_votes: 0,
          isReview: false,
          concertId4: {
            title: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          },
          userId1: {
            email: '1@gmail.com',
          },
        },
        {
          id: '3',
          name: '白晝將盡',
          youtube_url: 'https://www.youtube.com/watch?v=V8w7ixBfV4M&pp=ygUM55m95pmd5bCH55uh',
          up_votes: 32,
          down_votes: 0,
          isReview: false,
          concertId4: {
            title: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          },
          userId1: {
            email: '1@gmail.com',
          },
        },
        {
          id: '4',
          name: '天真世界的叛徒 - 天真版',
          youtube_url: 'https://www.youtube.com/watch?v=sq6r4JQpO7Y&pp=ygUh5aSp55yf5LiW55WM55qE5Y-b5b6SIC0g5aSp55yf54mI',
          up_votes: 26,
          down_votes: 0,
          isReview: false,
          concertId4: {
            title: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          },
          userId1: {
            email: '1@gmail.com',
          },
        },
        {
          id: '5',
          name: 'Easy Peasy',
          youtube_url: 'https://www.youtube.com/watch?v=jVDJV4lotbk&pp=ygUKRWFzeSBQZWFzeQ%3D%3D',
          up_votes: 25,
          down_votes: 1,
          isReview: false,
          concertId4: {
            title: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          },
          userId1: {
            email: '1@gmail.com',
          },
        },
        {
          id: '6',
          name: '撲火的蝶',
          youtube_url: 'https://www.youtube.com/watch?v=59YbeUtIloM&pp=ygUM5pKy54Gr55qE6J22',
          up_votes: 23,
          down_votes: 0,
          isReview: false,
          concertId4: {
            title: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          },
          userId1: {
            email: '1@gmail.com',
          },
        },
        {
          id: '7',
          name: '門',
          youtube_url: 'https://www.youtube.com/watch?v=IBI0OjA0X0s&pp=ygUD6ZaA',
          up_votes: 17,
          down_votes: 1,
          isReview: false,
          concertId4: {
            title: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          },
          userId1: {
            email: '1@gmail.com',
          },
        },
        {
          id: '8',
          name: '絕地花園',
          youtube_url: 'https://www.youtube.com/watch?v=ju_0Jy9ZYSk&pp=ygUM57WV5Zyw6Iqx5ZyS',
          up_votes: 15,
          down_votes: 1,
          isReview: false,
          concertId4: {
            title: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          },
          userId1: {
            email: '1@gmail.com',
          },
        },
      ],
    };
  },
  methods: {
    checkReview(id) {
      const song = this.mockDatas.find((song) => song.id === id);
      song.isReview = true;
    },
    checkAllReview() {
      for (const song of this.mockDatas) {
        song.isReview = true;
      }
    },
    chagneCheckList(id) {
      const song = this.mockDatas.find((song) => song.id === id);
      const check = this.songCheckList.findIndex((item) => item.id === song.id);
      if (check === -1) {
        this.songCheckList.push(song);
      } else {
        this.songCheckList.splice(check, 1);
      }
    },
    allCheckList() {
      if (this.songCheckList.length < this.mockDatas.length) {
        this.songCheckList = this.mockDatas;
      } else {
        this.songCheckList = [];
      }
    },
    sortSongByDownVotes() {
      this.initial = !this.initial;
      if (this.initial) {
        this.mockDatas.sort((a, b) => a.down_votes - b.down_votes);
      } else {
        this.mockDatas.sort((a, b) => b.down_votes - a.down_votes);
      }
    },
    matchSong(e) {
      this.mockDatas = [...this.backupDatas];
      if (e.target.value === '') return;
      const songContents = this.mockDatas.filter((item) => item.name.match(e.target.value));
      const songUser = this.mockDatas.filter((item) => item.userId1.email.match(e.target.value));
      this.mockDatas = [...songContents, ...songUser];
    },
    // comment 操作
    deleteSong(id) {
      console.log(id);
      this.alertMessage('success', '評論已刪除');
    },
    warnUser(id) {
      console.log(id);
      this.alertMessage('success', `對${id.email}使用者警告已送出`);
    },
    alertMessage(icon, text) {
      Swal.fire({
        icon,
        text,
      });
    },
  },
  computed: {
    filterDatas() {
      if (this.selectReview === '全部') {
        return this.mockDatas;
      } else {
        if (this.selectReview === '未審閱') {
          return this.mockDatas.filter((item) => !item.isReview);
        } else {
          return this.mockDatas.filter((item) => item.isReview);
        }
      }
    },
  },
  mounted() {
    this.backupDatas = [...this.mockDatas];
  },
};
</script>
<style>
th,
td {
  white-space: nowrap;
}
</style>
