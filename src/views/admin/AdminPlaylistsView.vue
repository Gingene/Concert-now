<template>
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
      <Input type="text" placeholder="輸入會場、用戶名稱查詢..." @input="searchSong" class="bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0" />
      <Button class="rounded-l-none">
        <span class="material-symbols-outlined absolute"> search </span>
      </Button>
    </div>

    <div class="flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between">
      <p>列表數量: {{ filterDatas.length }}</p>
      <div>
        <Button class="bg-lime-500 hover:bg-lime-700" :disabled="!songCheckList.length" @click="checkSelectReview">已審閱</Button>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button class="ml-4" variant="destructive" :disabled="!songCheckList.length">刪除</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <div v-if="songCheckList.length">
              <AlertDialogHeader>
                <AlertDialogTitle>是否刪除以下歌曲</AlertDialogTitle>
                <AlertDialogDescription>
                  <p v-for="selectSong in songCheckList" :key="selectSong.id">
                    {{ selectSong.name }}
                  </p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction @click="deleteSelectReview">Continue</AlertDialogAction>
              </AlertDialogFooter>
            </div>
            <div v-else>
              <AlertDialogHeader>
                <AlertDialogTitle class="text-center">請先點取歌曲</AlertDialogTitle>
                <AlertDialogDescription> </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  </div>
  <!-- Table -->

  <Table class="bg-white rounded-lg text-md mb-10" v-show="filterDatas.length !== 0">
    <TableCaption>歌單管理控制面板</TableCaption>
    <TableHeader>
      <TableRow class="hover:bg-white" style="color: black !important">
        <TableHead><Checkbox @click="checkAllList" /> </TableHead>
        <TableHead
          ><Button variant="ghost" @click="sortSongByDownVotes"
            >倒推人數<span class="material-symbols-outlined" v-if="sortInitial"> stat_1 </span><span class="material-symbols-outlined" v-else> stat_minus_1 </span></Button
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
      <Suspense>
        <template #default>
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

                <DialogContent class="p-12">
                  <DialogHeader class="border-b-2 pb-4">
                    <DialogTitle>{{ song.concert.title }}</DialogTitle>
                    <DialogDescription> 歌單列表 </DialogDescription>
                  </DialogHeader>
                  <ScrollArea class="h-[300px] rounded-md border p-4">
                    <SongList :mapSongs="mapSongs" :concertTitle="song.concert.title" />
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </TableCell>
            <TableCell
              ><router-link class="text-purple-500 hover:text-purple-800" :to="`/concert/4`">{{ song.concert.title }}</router-link></TableCell
            >
            <TableCell>{{ song.user.email }}</TableCell>
            <TableCell class="space-x-4 flex">
              <Button class="bg-gray-200" v-if="!song.is_reviewed" @click="checkReview(song.id)">未審閱</Button>
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
                    <DialogClose><Button variant="destructive" @click="warnUser(song.user.email)">送出警告</Button></DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        </template>
        <template #fallback>
          <TableRow class="py-8" v-for="num in 10" :key="num">
            <TableCell class="text-purple-primary">
              <Skeleton class="size-5 rounded-xl" />
            </TableCell>
            <TableCell class="text-purple-primary text-center"><Skeleton class="h-5" /></TableCell>
            <TableCell><Skeleton class="h-5" /></TableCell>
            <TableCell>
              <Skeleton class="h-5" />
            </TableCell>
            <TableCell><Skeleton class="h-5" /></TableCell>
            <TableCell><Skeleton class="h-5" /></TableCell>
            <TableCell>
              <Skeleton class="h-5" />
            </TableCell>
          </TableRow>
        </template>
      </Suspense>
    </TableBody>
  </Table>
  <div v-show="!filterDatas.length" class="flex justify-center py-12">
    <h2>哇! 找不到資料~</h2>
  </div>
  <!-- Pagination -->
  <div class="flex justify-center">
    <Pagination v-slot="{ page }" :total="pagination.total * 10" :sibling-count="1" show-edges :default-page="1">
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
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';
// pagination
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationList, PaginationLast, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';
// table
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Select
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
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
import SongList from '@/components/admin/AdminPlaylists/SongList.vue';

import { mapActions, mapState, mapWritableState } from 'pinia';
import { songsStore } from '@/stores/songs';

export default {
  components: { SongList },
  inject: ['http', 'path', 'adminPath'],
  methods: {
    ...mapActions(songsStore, [
      'getSongs',
      'checkReview',
      'checkSelectReview',
      'chagneCheckList',
      'checkAllList',
      'searchSong',
      'sortSongByDownVotes',
      'deleteSong',
      'warnUser',
      'alertMessage',
      'deleteSelectReview',
    ]),
  },
  computed: {
    ...mapState(songsStore, ['songs', 'mapSongs', 'songCheckList', 'sortInitial', 'filterDatas', 'pagination']),
    ...mapWritableState(songsStore, ['selectReview']),
  },
  mounted() {
    // this.logIn();
    this.getSongs(this.adminPath.songs);
  },
};
</script>
<style>
th,
td {
  white-space: nowrap;
}
</style>
