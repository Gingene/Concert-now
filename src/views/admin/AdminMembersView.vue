<template lang="">
  <!-- Search/Command -->
  <div>
    <div class="flex gap-6 mb-8 relative">
      <div class="w-[36%] lg:w-[290px] relative lg:pt-6">
        <Input type="text" placeholder="請輸入信箱查詢" v-model.trim="searchText" @keyup="searchInput" />
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
              <SelectItem v-for="status in allstatus" :key="status.id" :value="status.type">
                {{ status.type }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>

  <!-- Table -->
  <Table class="w-[700px] lg:w-full overflow-x-auto bg-white rounded-lg text-md mb-10" v-show="filteredData?.length !== 0">
    <!-- <TableCaption>會員管理</TableCaption> -->
    <TableHeader>
      <TableRow>
        <TableHead class="font-semibold w-[200px]"> 名稱 </TableHead>
        <TableHead class="font-semibold">信箱</TableHead>
        <TableHead class="font-semibold pl-6">會員狀態</TableHead>
        <TableHead class="font-semibold"> 警告次數 </TableHead>
        <TableHead class="font-semibold"> 會員編號 </TableHead>
        <TableHead class="font-semibold"> 加入會員日期 </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in filteredData" :key="user.id">
        <TableCell class="font-medium w-[200px]">
          <div class="flex items-center">
            <img class="size-[56px] border-2 rounded-full bg-white p-1" :src="user?.profile_image_url" alt="使用者大頭貼" />
            <p class="ml-3">{{ user?.name }}</p>
          </div>
        </TableCell>
        <TableCell>{{ user?.email }}</TableCell>
        <TableCell>
          <div class="flex items-center">
            <span v-if="user.status === '啟用中'" class="material-symbols-outlined mr-1"> check_circle </span>
            <span v-else class="material-symbols-outlined mr-1 text-violet-800"> warning </span>
            {{ user.status }}
          </div>
        </TableCell>
        <TableCell class="pl-10">{{ user?.warning_list.length }}</TableCell>
        <TableCell class="pl-10">{{ user?.id }}</TableCell>
        <TableCell>{{ user?.created_at }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <div v-show="!filteredData?.length" class="flex justify-center py-12">
    <h2>哇! 找不到資料~</h2>
  </div>
</template>

<script setup>
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
</script>

<script>
// 引入api
import { getAdminMembers, filterAdminMembers } from '@/api/admin/members';
import { useDebounceFn } from '@vueuse/core';

export default {
  data() {
    return {
      searchText: '',
      selectStatus: '',
      selectTime: '',
      usersData: null,
      allstatus: [
        {
          id: 1,
          type: '全部',
        },
        {
          id: 2,
          type: '啟用中',
        },
        {
          id: 3,
          type: '停權中',
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
      const filterStatus = this.selectStatus;

      if (filterStatus === '全部') {
        return this.usersData;
      } else {
        return this.usersData?.filter((user) => {
          let filtered = true;

          // 會員身分篩選

          if (filterStatus && filterStatus.length > 0) {
            filtered = user.status === filterStatus;
          }

          return filtered;
        });
      }
    },
  },
  methods: {
    async getAdminMembersData(page = 1) {
      try {
        const res = await getAdminMembers(page);
        this.usersData = res.data.data;

      } catch (error) {
        console.error(error);
      }
    },
    searchInput: useDebounceFn(async function (page = 1) {
      try {
        const res = await filterAdminMembers(this.searchText, this.selectStatus, page);
        this.usersData = res.data.data;

      } catch (error) {
        console.error(error);
      }
    }, 300),
  },
  mounted() {
    this.getAdminMembersData();
  },
};
</script>

