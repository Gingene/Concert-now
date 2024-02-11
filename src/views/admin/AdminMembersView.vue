<template lang="">
  <div>
    <div class="flex gap-6 mt-3 relative">
      <div class="w-[36%] lg:w-[290px] relative pt-8 lg:pt-6">
        <Input type="text" placeholder="請輸入姓名及信箱查詢" v-model.trim()="searchText" />
        <span class="material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"> search </span>
      </div>
      <div class="w-[20%] lg:w-[250px] flex flex-col items-center lg:flex-row lg:justify-center lg:pt-5">
        <Select>
          <label for="status" class="pt-2 font-semibold lg:w-[50%]"> 會員狀態 </label>
          <SelectTrigger>
            <SelectValue placeholder="全部" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel class="tracking-wide">全部</SelectLabel>
              <SelectItem value="open">啟用中</SelectItem>
              <SelectItem value="disable">停權中</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="w-[33%] lg:w-[330px] flex flex-col items-center lg:flex-row lg:justify-center lg:pt-5">
        <Select>
          <label for="member-time" class="pt-2 font-semibold lg:w-[50%]">加入會員時間</label>
          <SelectTrigger>
            <SelectValue placeholder="場地選擇" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>場地選擇</SelectLabel>
              <SelectItem v-for="jointime in jointimes" :key="jointime.id" :value="jointime.time">
                {{ jointime.time }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
</script>

<script>
export default {
  data() {
    return {
      searchText: '',
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
};
</script>
<style lang=""></style>
