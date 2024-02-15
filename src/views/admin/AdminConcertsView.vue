<template>
  <!-- Search/Command -->
  <div class="flex gap-6 mt-3 mb-8 relative">
    <div class="w-[36%] lg:w-[290px] relative pt-8 lg:pt-6">
      <Input type="text" placeholder="輸入演唱會、表演者、地點..." />
      <span class="material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"> search </span>
    </div>
    <!-- 地點選擇 -->
    <div class="w-[15%] lg:w-[200px] flex flex-col items-center lg:flex-row lg:justify-center lg:pt-5">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="地點選擇" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel class="tracking-wide">地點選擇</SelectLabel>
            <SelectItem v-for="city in cities" :key="city" :value="city"> {{ city }} </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <!-- 場地選擇 -->
    <div class="w-[15%] lg:w-[200px] flex flex-col items-center lg:flex-row lg:justify-center lg:pt-5">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="場地選擇" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>場地選擇</SelectLabel>
            <SelectItem value="台北國際會議中心"> 台北國際會議中心 </SelectItem>
            <SelectItem value="台中 Legacy"> 台中 Legacy </SelectItem>
            <SelectItem value="高雄流行音樂中心"> 高雄流行音樂中心 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <!-- 新增演唱會 -->
    <div class="lg:pt-5">
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 新增演唱會 </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[850px]">
          <DialogHeader>
            <DialogTitle class="text-center">新增演唱會</DialogTitle>
          </DialogHeader>
          <div class="grid grid-cols-2 place-items-start gap-4">
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="title" class="text-left"> 演唱會標題 </Label>
                <Input id="title" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="artist" class="text-left"> 表演者名稱 </Label>
                <Input id="artist" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="date" class="text-left"> 演唱會日期 </Label>
                <Input id="date" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="location" class="text-left"> 演唱會地點 </Label>
                <Input id="location" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="address" class="text-left"> 演唱會地址 </Label>
                <Input id="address" class="col-span-3" />
              </div>
            </div>
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="pictures" class="text-left"> 演唱會圖片 </Label>
                <Input type="file" id="pictures" class="col-span-3 hover:bg-accent" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose><Button variant="outline" class="px-6">取消</Button></DialogClose>
            <Button type="submit">儲存資料</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    <!-- 刪除多筆資料 -->
    <div class="lg:pt-5">
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="outline" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 刪除資料 </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>確定要刪除 N 筆資料?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction>確定</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  </div>
  <!-- Table -->
  <Table class="bg-white rounded-lg text-md mb-10">
    <TableHeader>
      <TableRow class="hover:bg-white" style="color: black !important">
        <TableHead></TableHead>
        <TableHead>表演者名稱</TableHead>
        <TableHead>演唱會標題</TableHead>
        <TableHead>演唱會日期</TableHead>
        <TableHead>演唱會地點</TableHead>
        <TableHead>收藏數</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody class="text-gray-600">
      <TableRow class="py-8">
        <TableCell class="text-purple-primary">
          <Checkbox id="terms" />
          <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
        </TableCell>
        <TableCell class="text-purple-primary">Tom Jones</TableCell>
        <TableCell>Tom Jones湯姆瓊斯演唱會2024台北站</TableCell>
        <TableCell>2024-03-12 (二) 19:30</TableCell>
        <TableCell>台北國際會議中心TICC</TableCell>
        <TableCell>168,168,168</TableCell>
        <TableCell>
          <Dialog>
            <DialogTrigger as-child>
              <Button variant="none" class="hover:text-[#6366f1]">
                <span class="material-symbols-outlined">edit</span>
              </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[850px]">
              <DialogHeader>
                <DialogTitle class="text-center">編輯演唱會</DialogTitle>
              </DialogHeader>
              <div class="grid grid-cols-2 place-items-start gap-4">
                <div class="grid gap-4 py-4">
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="title" class="text-left"> 演唱會標題 </Label>
                    <Input type="text" id="title" class="col-span-3" value="Tom Jones湯姆瓊斯演唱會2024台北站" />
                  </div>
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="artist" class="text-left"> 表演者名稱 </Label>
                    <Input id="artist" class="col-span-3" />
                  </div>
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="date" class="text-left"> 演唱會日期 </Label>
                    <Input id="date" class="col-span-3" />
                  </div>
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="location" class="text-left"> 演唱會地點 </Label>
                    <Input id="location" class="col-span-3" />
                  </div>
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="address" class="text-left"> 演唱會地址 </Label>
                    <Input id="address" class="col-span-3" />
                  </div>
                </div>
                <div class="grid gap-4 py-4">
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="pictures" class="text-left"> 演唱會圖片 </Label>
                    <Input type="file" id="pictures" class="col-span-3 hover:bg-accent" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose><Button variant="outline" class="px-6">取消</Button></DialogClose>
                <Button type="submit">儲存資料</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <AlertDialog>
            <AlertDialogTrigger as-child>
              <Button variant="none" class="hover:text-[#6366f1]">
                <span class="material-symbols-outlined">delete</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>確定要刪除該筆資料?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction>確定</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-purple-primary">
          <Checkbox id="terms" />
          <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
        </TableCell>
        <TableCell class="text-purple-primary">Apink</TableCell>
        <TableCell>2023 Apink FANCONCERT in Taipei [Pink drive]</TableCell>
        <TableCell>2023-04-01 (六) 18:00</TableCell>
        <TableCell>新北工商展覽中心</TableCell>
        <TableCell>34,567,890</TableCell>
        <TableCell>
          <span class="material-symbols-outlined px-4 py-2">edit</span>
          <AlertDialog>
            <AlertDialogTrigger as-child>
              <Button variant="none" class="hover:text-[#6366f1]">
                <span class="material-symbols-outlined">delete</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>確定要刪除該筆資料?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction>確定</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="text-purple-primary">
          <Checkbox id="terms" />
          <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
        </TableCell>
        <TableCell class="text-purple-primary">FTIsland</TableCell>
        <TableCell>FTISLAND演唱會2024台北站</TableCell>
        <TableCell>2024-02-18 (六) 17:00</TableCell>
        <TableCell>台北流行音樂中心</TableCell>
        <TableCell>2,846,213,037</TableCell>
        <TableCell>
          <span class="material-symbols-outlined px-4 py-2">edit</span>
          <AlertDialog>
            <AlertDialogTrigger as-child>
              <Button variant="none" class="hover:text-[#6366f1]">
                <span class="material-symbols-outlined">delete</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>確定要刪除該筆資料?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction>確定</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <!-- Pagination -->
  <div class="flex justify-center">
    <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="2">
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
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev } from '@/components/ui/pagination';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// Command
// import {
//   Command,
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
// } from "@/components/ui/command";
import { Input } from '@/components/ui/input';
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
import { mapState, mapActions } from 'pinia';
import { concertStore } from '@/stores/concerts';
export default {
  data() {
    return {
      cities: ['臺北市', '新北市', '桃園市', '臺中市', '高雄市'],
    };
  },
  methods: {
    ...mapActions(concertStore, ['getConcerts']),
  },
  computed: {
    ...mapState(concertStore, ['concerts']),
  },
};
</script>

<style lang=""></style>
