<!-- 此頁為寫死的靜態資料，沒有串API，也不會存資料 -->
<template>
  <div class="grid grid-cols-1 mt-36 lg:grid-cols-4 lg:grid-flow-col gap-4">
    <!-- Left: Profile -->
    <section class="flex lg:flex-col justify-center lg:justify-start">
      <!-- ! 圖片未綁 -->
      <img class="border-2 rounded-full w-[130px] h-[140px]" :src="user.profile_image_url" />
      <div class="ms-6 lg:ms-0">
        <h2 class="font-bold">{{ user.name }}</h2>
        <p class="pb-3 lg:pb-6">{{ user.email }}</p>
        <!-- Reset Password -->
        <Dialog>
          <DialogTrigger as-child>
            <Button class="hover:bg-[#D595F1] text-white transition ease-in-out hover:-translate-y-1 duration-300"> 重設密碼 </Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle class="text-center py-4"> 請輸入以下資料 </DialogTitle>
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
              <DialogClose>
                <Button type="button">確認送出</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
    <!-- Right: Table -->
    <main class="lg:col-span-3 flex flex-col">
      <div class="flex">
        <!-- 新增成員 -->
        <Dialog>
          <DialogTrigger as-child>
            <Button class="hover:bg-[#D595F1] text-white transition ease-in-out hover:-translate-y-1 duration-300"> 新增成員 </Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle class="text-center py-4"> 新增成員 </DialogTitle>
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
                <Button type="button" variant="secondary"> 捨棄編輯 </Button>
              </DialogClose>
              <!-- 不會真的送出資料，所以用 DialogClose -->
              <DialogClose as-child>
                <Button type="button">確認新增</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <!-- 刪除多筆成員 -->
        <AlertDialog>
          <AlertDialogTrigger>
            <Button class="ml-4 hover:bg-[#D595F1] text-white transition ease-in-out hover:-translate-y-1 duration-300"> 刪除成員 </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>確定要刪除成員嗎？</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel class="bg-black-60">取消</AlertDialogCancel>
              <AlertDialogAction class="text-black-100 bg-tiffany">確定</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <!-- Table -->
      <Table class="my-6 bg-white text-base text-gray-800 rounded-lg">
        <TableHeader>
          <TableRow class="hover:bg-inherit">
            <TableHead class="w-[100px]"></TableHead>
            <TableHead>姓名</TableHead>
            <TableHead>信箱</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="member in members" :key="member.id">
            <TableCell><Checkbox class="ml-3" /></TableCell>
            <TableCell class="flex items-center">
              <span class="border-2 rounded-full w-14 h-14 bg-white p-1">
                <img :src="member.avatar" :alt="member.name" />
              </span>
              <span class="ml-4">{{ member.name }}</span></TableCell
            >
            <TableCell>{{ member.email }}</TableCell>
            <!-- edit -->
            <TableCell>
              <Dialog>
                <DialogTrigger as-child>
                  <span class="material-symbols-outlined hover:text-[#D595F1] hover:cursor-pointer transition ease-in-out hover:-translate-y-1 duration-300"> edit </span>
                </DialogTrigger>
                <DialogContent class="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle class="text-center py-4"> 編輯成員 </DialogTitle>
                  </DialogHeader>
                  <div class="grid gap-4 pb-4">
                    <!-- edit: photo -->
                    <div class="grid grid-cols-subgrid pb-4 relative">
                      <span class="border-2 rounded-full w-24 h-24 bg-white p-1 col-start-2 relative">
                        <img :src="member.avatar" :alt="member.name" class="w-20" />
                        <Upload class="p-2 absolute -bottom-5 -right-3 opacity-30 bg-black rounded-full" size="40" stroke-width="2" color="#fff" />
                      </span>
                      <Input type="file" class="absolute w-24 h-24 col-start-2 opacity-0 hover:cursor-pointer" />
                    </div>
                    <!-- edit: name -->
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label for="name">姓名</Label>
                      <Input id="name" class="col-span-3" :value="member.name" />
                    </div>
                    <!-- edit: email -->
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label for="email">信箱</Label>
                      <Input id="email" class="col-span-3" :value="member.email" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose as-child>
                      <Button type="button" variant="secondary"> 捨棄編輯 </Button>
                    </DialogClose>
                    <!-- 不會真的送出資料，所以用 DialogClose -->
                    <DialogClose as-child>
                      <Button type="button"> 確認修改 </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TableCell>
            <!-- delete -->
            <TableCell>
              <AlertDialog>
                <AlertDialogTrigger>
                  <span class="material-symbols-outlined hover:text-[#D595F1] transition ease-in-out hover:-translate-y-1 duration-300"> delete </span>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>確定要刪除該成員嗎？</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>取消</AlertDialogCancel>
                    <AlertDialogAction>確定刪除</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  </div>
</template>

<script setup>
import { Upload } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
</script>

<script>
export default {
  data() {
    return {
      members: [
        {
          id: 1,
          name: '豪豪',
          email: 'b0936486128@gmail.com',
          avatar: 'https://blush.design/api/download?shareUri=aMylVqvsAIdbUCWF&c=Skin_0%7Eedb98a&w=300&h=300&fm=png',
        },
        {
          id: 2,
          name: '銀光菇',
          email: 'ginx2618@gmail.com',
          avatar: 'https://blush.design/api/download?shareUri=Ot4kL7W8vXaZuIln&c=Skin_0%7Effdbb4&w=300&h=300&fm=png',
        },
        {
          id: 3,
          name: 'Celine 510',
          email: 'celinewu1010@gmail.com',
          avatar: 'https://blush.design/api/download?shareUri=SrcR-6gR3qxMRiBp&c=Skin_0%7Eedb98a&w=300&h=300&fm=png',
        },
        {
          id: 4,
          name: 'Celine',
          email: 'celine41104@gmail.com',
          avatar: 'https://blush.design/api/download?shareUri=r7SbaqZLzqnnhy1b&c=Skin_0%7Effdbb4&w=300&h=300&fm=png',
        },
        {
          id: 5,
          name: '人平',
          email: 'chen.jen.ping@hotmail.com',
          avatar: 'https://blush.design/api/download?shareUri=ZK0hThocjZ27JP1R&c=Skin_0%7Eedb98a&w=300&h=300&fm=png',
        },
      ],
      user: {},
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
  },
};
</script>
