<template>
  <div class="grid grid-cols-3 grid-flow-col gap-4 px-12">
    <!-- Left: Profile -->
    <div class="col-span-1">
      <div class="flex items-center">
        <!-- <CircleUserRound stroke-width="1.3" size="56" color="white" fill="black" fill-opacity="0.4" /> -->
        <span class="material-symbols-outlined text-6xl">account_circle</span>
        <h2 class="pl-4 tracking-widest">王小明</h2>
      </div>
      <p class="pb-5">1234567@gmail.com</p>
      <!-- Reset Password -->
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline">重設密碼</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle class="text-center py-4">請輸入以下資料</DialogTitle>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="old-password">舊密碼</Label>
              <Input id="old-password" type="password" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="new-password">新密碼</Label>
              <Input id="new-password" type="password" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose as-child>
              <Button type="button" variant="secondary">放棄變更</Button>
            </DialogClose>
            <!-- 不會真的送出資料，所以用 DialogClose -->
            <DialogClose as-child>
              <Button type="button">確認送出</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    <!-- Right: Table -->
    <div class="col-span-2">
      <div class="flex">
        <!-- 新增成員 -->
        <Dialog>
          <DialogTrigger as-child>
            <Button class="bg-black border-2 border-[#D595F1] rounded-[24px] transition ease-in-out hover:-translate-y-1 duration-300">新增成員</Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle class="text-center py-4">新增成員</DialogTitle>
            </DialogHeader>
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="name">姓名</Label>
                <Input id="name" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="email">信箱</Label>
                <Input id="email" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="password">密碼</Label>
                <Input id="password" type="password" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="photo">上傳大頭照</Label>
                <Input id="photo" type="file" class="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose as-child>
                <Button type="button" variant="secondary">捨棄編輯</Button>
              </DialogClose>
              <!-- 不會真的送出資料，所以用 DialogClose -->
              <DialogClose as-child>
                <Button type="button">確認新增</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { CircleUserRound } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
</script>

<!-- <style lang=""></style> -->
