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
      <Input type="text" placeholder="輸入會場、用戶名稱查詢..." @input="matchComment" class="bg-white rounded-r-none border h-10 px-2 w-full focus-visible:ring-offset-0" />
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
    {{ commentCheckList }}
  </div>
  <!-- Table -->

  <Table class="bg-white rounded-lg text-md mb-10" v-show="filterDatas.length !== 0">
    <TableCaption>評論管理控制面板</TableCaption>
    <TableHeader>
      <TableRow class="hover:bg-white" style="color: black !important">
        <TableHead><Checkbox @click="allCheckList" /></TableHead>
        <TableHead
          ><Button variant="ghost" @click="sortCommentByReportNum"
            >檢舉人數<span class="material-symbols-outlined" v-if="initial"> stat_1 </span><span class="material-symbols-outlined" v-else> stat_minus_1 </span></Button
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
                <DialogClose><Button class="bg-lime-500" @click="deleteComment(comment.id)">不警告</Button></DialogClose>
                <DialogClose><Button variant="destructive" @click="warnUser(comment.userId1)">送出警告</Button></DialogClose>
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
</script>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      commentCheckList: [],
      selectReview: '未審閱',
      initial: true,
      backupDatas: [],
      mockDatas: [
        {
          id: '1',
          report_num: 0,
          comment: '距離非常近，可以握到手！',
          isReview: false,
          venueId: {
            title: '台北國際會議中心TICC',
          },
          userId1: {
            email: '1@gmail.com',
          },
        },
        {
          id: '2',
          report_num: 0,
          comment: '場地佈置太爛的吧，超大布條擋住視線1',
          isReview: false,
          venueId: {
            title: '台北國際會議中心TICC',
          },
          userId1: {
            email: '2@gmail.com',
          },
        },
        {
          id: '3',
          report_num: 1,
          comment: '有點遠，建議帶望遠鏡',
          isReview: false,
          venueId: {
            title: '台北國際會議中心TICC',
          },
          userId1: {
            email: '3@gmail.com',
          },
        },
        {
          id: '4',
          report_num: 0,
          comment: '前面有柱子擋住，根本看不太到舞台，傻眼',
          isReview: false,
          venueId: {
            title: '新北工商展覽中心',
          },
          userId1: {
            email: '1@gmail.com',
          },
        },
        {
          id: '5',
          report_num: 0,
          comment: '接得到舞台丟下來的禮物！超讚的！',
          isReview: false,
          venueId: {
            title: '新北工商展覽中心',
          },
          userId1: {
            email: '4@gmail.com',
          },
        },
        {
          id: '6',
          report_num: 31,
          comment: '我喜歡吃可麗餅',
          isReview: false,
          venueId: {
            title: '新北工商展覽中心',
          },
          userId1: {
            email: '5@gmail.com',
          },
        },
        {
          id: '7',
          report_num: 1,
          comment: '靠近右邊離音響好近，好大聲，不舒服',
          isReview: false,
          venueId: {
            title: '台北流行音樂中心',
          },
          userId1: {
            email: '7@gmail.com',
          },
        },
        {
          id: '8',
          report_num: 0,
          comment: '視野很好，而且是有座位的，很不錯',
          isReview: false,
          venueId: {
            title: '台北流行音樂中心',
          },
          userId1: {
            email: '8@gmail.com',
          },
        },
        {
          id: '9',
          report_num: 0,
          comment: '空間寬敞，也看得很清楚',
          isReview: false,
          venueId: {
            title: '台北流行音樂中心',
          },
          userId1: {
            email: '9@gmail.com',
          },
        },
        {
          id: '10',
          report_num: 0,
          comment: '空間寬敞，站在噴霧旁邊超衰的',
          isReview: false,
          venueId: {
            title: '高雄流行音樂中心',
          },
          userId1: {
            email: '10@gmail.com',
          },
        },
        {
          id: '11',
          report_num: 25,
          comment: '香雞排好香，想ㄘ',
          isReview: false,
          venueId: {
            title: '高雄流行音樂中心',
          },
          userId1: {
            email: '11@gmail.com',
          },
        },
        {
          id: '12',
          report_num: 0,
          comment: '很遠，要帶望遠鏡。而且很偏，看不是很清楚',
          isReview: false,
          venueId: {
            title: '高雄流行音樂中心',
          },
          userId1: {
            email: '12@gmail.com',
          },
        },
        {
          id: '13',
          report_num: 0,
          comment: '場地不大，前面好擠',
          isReview: false,
          venueId: {
            title: 'Legacy Taichung',
          },
          userId1: {
            email: '13@gmail.com',
          },
        },
        {
          id: '14',
          report_num: 0,
          comment: '視野很不錯，離舞台好近好讚',
          isReview: false,
          venueId: {
            title: 'Legacy Taichung',
          },
          userId1: {
            email: '14@gmail.com',
          },
        },
        {
          id: '15',
          report_num: 0,
          comment: '好遠，應援布條舞台應該看不太到QQ',
          isReview: false,
          venueId: {
            title: 'Legacy Taichung',
          },
          userId1: {
            email: '15@gmail.com',
          },
        },
      ],
    };
  },
  methods: {
    checkReview(id) {
      const comment = this.mockDatas.find((comment) => comment.id === id);
      comment.isReview = true;
    },
    checkAllReview() {
      for (const comment of this.mockDatas) {
        comment.isReview = true;
      }
    },
    chagneCheckList(id) {
      const comment = this.mockDatas.find((comment) => comment.id === id);
      const check = this.commentCheckList.findIndex((item) => item.id === comment.id);
      if (check === -1) {
        this.commentCheckList.push(comment);
      } else {
        this.commentCheckList.splice(check, 1);
      }
    },
    allCheckList() {
      if (this.commentCheckList.length < this.mockDatas.length) {
        this.commentCheckList = this.mockDatas;
      } else {
        this.commentCheckList = [];
      }
    },
    sortCommentByReportNum() {
      this.initial = !this.initial;
      if (this.initial) {
        this.mockDatas.sort((a, b) => a.report_num - b.report_num);
      } else {
        this.mockDatas.sort((a, b) => b.report_num - a.report_num);
      }
    },
    matchComment(e) {
      this.mockDatas = [...this.backupDatas];
      if (e.target.value === '') return;
      const commentContents = this.mockDatas.filter((item) => {
        const regex = new RegExp(e.target.value, 'i');
        return regex.test(item.venueId.title);
      });
      const commentUser = this.mockDatas.filter((item) => item.userId1.email.match(e.target.value));
      // if (commentContents.length) this.mockDatas = commentContents;
      // else this.mockDatas = commentUser;
      this.mockDatas = [...commentContents, ...commentUser];
    },
    // comment 操作
    deleteComment(id) {
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
