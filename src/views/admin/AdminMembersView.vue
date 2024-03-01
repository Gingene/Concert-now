<template lang="">
  <!-- Search/Command -->
  <div>
    <!-- <div> 會員身分{{ memberStatus }}</div> -->
    <div class="flex gap-6 mt-3 mb-8 relative">
      <div class="w-[36%] lg:w-[290px] relative pt-8 lg:pt-6">
        <Input type="text" placeholder="請輸入姓名及信箱查詢" v-model.trim="searchText" />
        <span class="material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"> search </span>
      </div>
      <div class="w-[20%] lg:w-[250px] flex flex-col items-center lg:flex-row lg:justify-center lg:pt-5">
        <Select v-model="selectStatus">
          <label for="status" class="pb-2 font-semibold lg:w-[50%]"> 會員狀態 </label>
          <SelectTrigger>
            <SelectValue placeholder="全部" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel class="tracking-wide">會員狀態</SelectLabel>
              <SelectItem value="全部"> 全部 </SelectItem>
              <SelectItem value="啟用中"> 啟用中</SelectItem>
              <SelectItem value="停權中">停權中</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>

  <!-- 會員人數 -->
  <div class="mb-4 pl-2"><strong>會員人數: </strong> {{ filteredData.length }} 人</div>

  <!-- Table -->
  <Table class="w-[700px] lg:w-full overflow-x-auto bg-white rounded-lg text-md mb-10" v-show="filteredData.length !== 0">
    <TableCaption>會員管理</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px] font-semibold"> 名稱 </TableHead>
        <TableHead class="font-semibold">信箱</TableHead>
        <TableHead class="font-semibold pl-6">會員狀態</TableHead>
        <TableHead class="font-semibold"> 警告次數 </TableHead>
        <TableHead class="font-semibold"> 會員編號 </TableHead>
        <TableHead class="font-semibold"> 加入會員日期 </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in filteredData" :key="user.id">
        <TableCell class="font-medium"> {{ user.username }} </TableCell>
        <TableCell>{{ user.email }}</TableCell>
        <TableCell class="flex items-center">
          <span v-if="user.status === '啟用中'" class="material-symbols-outlined mr-1"> check_circle </span>
          <span v-else class="material-symbols-outlined mr-1 text-violet-800"> warning </span>
          {{ user.status }}
        </TableCell>
        <TableCell class="pl-10">{{ user.warning_list.length }}</TableCell>
        <TableCell class="pl-10">{{ user.id }}</TableCell>
        <TableCell>{{ user.created_at }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <div v-show="!filteredData.length" class="flex justify-center py-12">
    <h2>哇! 找不到資料~</h2>
  </div>
</template>

<script setup>
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
</script>

<script>
export default {
  data() {
    return {
      searchText: '',
      selectStatus: '全部',
      selectTime: '',
      changeFilter: 'true',
      filteredUsers: [],
      users: [
        {
          id: 1,
          username: '小明',
          email: '01@gamail.com',
          status: '啟用中',
          created_at: '2022-01-05',
          warning_list: [],
        },
        {
          id: 2,
          username: '明明',
          email: '02@gamail.com',
          status: '啟用中',
          created_at: '2020-05-06',
          warning_list: ['不實評論', '惡意評論', '腥羶色內容', '不實評論', '不實評論'],
        },
        {
          id: 3,
          username: '小華',
          email: '03@gamail.com',
          status: '停權中',
          created_at: '2020-03-06',
          warning_list: ['不實評論', '惡意評論', '腥羶色內容'],
        },
        {
          id: 4,
          username: '小壯',
          email: '04@gamail.com',
          status: '停權中',
          created_at: '2020-03-29',
          warning_list: ['不實評論', '惡意評論', '腥羶色內容'],
        },
        {
          id: 5,
          username: '阿嬌',
          email: '05@gamail.com',
          status: '啟用中',
          created_at: '2023-07-15',
          warning_list: ['不實評論', '惡意評論'],
        },
      ],
      jointimes: [
        {
          id: 1,
          time: '2023/01-2023/02',
        },
        {
          id: 2,
          time: '2023/02-2023/03',
        },
        {
          id: 3,
          time: '2023/03-2023/04',
        },
        {
          id: 4,
          time: '2023/04-2023/05',
        },
        {
          id: 5,
          time: '2023/05-2023/06',
        },
      ],
    };
  },
  computed: {
    filteredData() {
      // 宣告filter變數

      const filterInput = this.searchText;
      const filterStatus = this.selectStatus;

      // 條件篩選 input
      if (filterInput) {
        return this.users.filter((user) => user.username.match(filterInput) || user.email.match(filterInput));
      } else {
        // 條件篩選 select

        if (filterStatus === '全部') {
          return this.users;
        } else {
          return this.users.filter((user) => {
            let filtered = true;

            // 會員身分篩選
            if (filterStatus && filterStatus.length > 0) {
              filtered = user.status === filterStatus;
            }

            return filtered;
          });
        }
      }
    },
    filterSelect() {
      // this.changeFilter = false;
      // console.log(this.changeFilter)

      const filterStatus = this.selectStatus;

      // let filterTimes = this.selectTime;

      if (filterStatus === '全部') {
        return this.users;
      } else {
        return this.users.filter((user) => {
          let filtered = true;

          // 會員身分篩選
          if (filterStatus && filterStatus.length > 0) {
            filtered = user.status === filterStatus;
          }

          // 會員加入時間篩選
          // if(filtered) {
          //   if( filterTimes && filterTimes.length > 0 ) {
          //     filtered = user.created_at === filterTimes
          //   }
          // }

          return filtered;
        });
      }
    },
  },
  mounted() {},
};
</script>
<style lang=""></style>
