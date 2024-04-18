<template lang="">
  <!-- Search/Command -->
  <div>
    <div class="flex flex-wrap gap-6 mb-8 relative">
      <!-- 關鍵字搜尋 -->
      <div class="w-full xs:w-[290px] relative">
        <Input type="text" placeholder="請輸入信箱查詢" v-model="searchText" />
        <span class="material-symbols-outlined absolute top-1 right-2.5 cursor-pointer hidden lg:block"> search </span>
      </div>
      <!-- 會員狀態選單 -->
      <div class="w-full xs:w-[250px]">
        <Select v-model="selectStatus">
          <SelectTrigger>
            <SelectValue placeholder="選擇會員狀態" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel class="tracking-wide">會員狀態</SelectLabel>
              <SelectItem v-for="(status,index) in allstatus" :key="index" :value="status">
                {{ status }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>

  <!-- Table -->
  <TableCaption class="block py-2 text-start">搜尋結果：{{ pageTotal }} 筆資料</TableCaption>
  <Table class="bg-white rounded-lg text-md mb-10 whitespace-nowrap" v-show="adminMembers?.length !== 0">
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
      <TableRow v-for="user in adminMembers" :key="user.id">
        <TableCell class="font-medium w-[200px]">
          <div class="flex items-center mr-2">
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

  <!-- Pagination -->
  <Pagination v-if="pageTotal" v-slot="{ page }" :page="page" :itemsPerPage="15" :total="pageTotal" :sibling-count="1" show-edges :default-page="1" :disabled="pageTotal <= 15" class="flex justify-center py-6">
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst @click="getAdminMembers('page',1)" />
      <PaginationPrev @click="getAdminMembers('page',page-1)" />

      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
          <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'" @click="getAdminMembers('page',item.value)">
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="item.type" :index="index" />
      </template>

      <PaginationNext @click="getAdminMembers('page',page+1)" />
      <PaginationLast @click="getAdminMembers('page',items.length)" />
    </PaginationList>
  </Pagination>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev} from '@/components/ui/pagination';
</script>

<script>
import { mapState, mapActions, mapWritableState } from 'pinia';
import { useUserStore } from '@/stores/user';

export default {
  methods: {
    ...mapActions(useUserStore,['getAdminMembers'] ),
  },
  computed: {
    ...mapState(useUserStore, ['adminMembers','allstatus']),
    ...mapWritableState(useUserStore, ['searchText', 'selectStatus', 'page', 'pageTotal']),
  },
  watch: {
    searchText: function(search) {
      this.getAdminMembers('search', search);
    },
    selectStatus: function(status) {
      this.getAdminMembers('select', status);
    },
  },
  mounted() {
    this.getAdminMembers();
  },
  unmounted() {
    this.selectStatus = '';
    this.searchText = '';
  },
};
</script>