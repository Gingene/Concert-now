<template>
  <!-- Search/Command -->
  <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-32 mb-8 lg:pt-6">
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
      <Input type="text" placeholder="輸入會場、用戶信箱查詢..." @input="searchComment" class="bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0" />
      <Button class="rounded-l-none">
        <span class="material-symbols-outlined absolute"> search </span>
      </Button>
    </div>

    <div class="flex flex-wrap space-y-4 sm:space-y-0 col-span-2 items-center justify-between">
      <p>列表數量: {{ filterDatas.length }}</p>
      <div>
        <Button class="bg-lime-500 hover:bg-lime-700" @click="checkSelectReview" :disabled="!commentCheckList.length">已審閱</Button>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button class="ml-4" variant="destructive" :disabled="!commentCheckList.length">刪除</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <div v-if="commentCheckList.length">
              <AlertDialogHeader>
                <AlertDialogTitle>是否刪除以下評論</AlertDialogTitle>
                <AlertDialogDescription>
                  <p v-for="selectComment in commentCheckList" :key="selectComment.id">
                    {{ selectComment.comment }}
                  </p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction @click="deleteSelectReview" class="bg-destructive hover:bg-destructive/90">刪除</AlertDialogAction>
              </AlertDialogFooter>
            </div>
            <div v-else>
              <AlertDialogHeader>
                <AlertDialogTitle class="text-center">請先點取評論</AlertDialogTitle>
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

  <main>
    <Table class="bg-white rounded-lg text-md mb-10" v-show="filterDatas.length !== 0">
      <TableCaption>評論管理控制面板</TableCaption>
      <TableHeader>
        <TableRow class="hover:bg-white" style="color: black !important">
          <TableHead><Checkbox @click="allCheckList" /></TableHead>
          <TableHead
            ><Button variant="ghost" @click="sortCommentByReportNum"
              >檢舉人數<span class="material-symbols-outlined" v-if="sortInitial"> stat_1 </span><span class="material-symbols-outlined" v-else> stat_minus_1 </span></Button
            ></TableHead
          >
          <TableHead>評論內容</TableHead>
          <TableHead>場地名稱</TableHead>
          <TableHead>用戶名</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-gray-600">
        <TableRow class="py-8" v-for="comment in filterDatas" :key="comment.id">
          <TableCell class="text-purple-primary">
            <Checkbox :id="comment.id" @click="chagneCheckList(comment.id)" class="checkboxList" />
            <label :for="comment.id" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
          </TableCell>
          <TableCell class="text-purple-primary text-center">{{ comment.report_num }}</TableCell>
          <TableCell>{{ comment.comment }}</TableCell>
          <TableCell>{{ comment.venueId.title }}</TableCell>
          <TableCell>{{ comment.userId1.email }}</TableCell>
          <TableCell class="space-x-4 flex">
            <Button class="bg-gray-200" v-if="!comment.isReview" @click="checkReview(comment.id)">未審閱</Button>
            <Button class="bg-lime-500 hover:bg-lime-700" v-else>已審閱</Button>

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
                    <Select v-model="warningReason">
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
                  <DialogClose><Button class="bg-lime-500" @click="deleteComment(comment.id)">不警告</Button></DialogClose>
                  <DialogClose><Button variant="destructive" @click="warnUser(comment.id, comment.userId1)">送出警告</Button></DialogClose>
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
  </main>
  <!-- Pagination -->
  <div class="flex justify-center">
    <Pagination v-slot="{ page }" :total="10" :sibling-count="1" show-edges :default-page="1">
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
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

// pagination
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';
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
import { mapActions, mapState, mapWritableState } from 'pinia';
import { commentStore } from '@/stores/comments';
export default {
  methods: {
    ...mapActions(commentStore, [
      'getComments',
      'checkReview',
      'chagneCheckList',
      'checkSelectReview',
      'allCheckList',
      'checkSelectReview',
      'deleteSelectReview',
      'sortCommentByReportNum',
      'searchComment',
      'deleteComment',
      'warnUser',
      'alertMessage',
      'backupData',
    ]),
  },
  computed: {
    ...mapState(commentStore, ['comments', 'commentCheckList', 'sortInitial', 'filterDatas']),
    ...mapWritableState(commentStore, ['selectReview', 'warningReason']),
  },
  mounted() {
    this.backupData();
  },
};
</script>

<style>
th,
td {
  white-space: nowrap;
}
</style>
