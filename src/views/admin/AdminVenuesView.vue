<template>
  <main>
    <!-- Search/Command -->
    <nav class="grid grid-cols-4 gap-2 mb-6">
      <!-- 關鍵字搜尋 -->
      <div class="col-span-4 sm:col-span-2 md:col-span-1 relative">
        <Input type="text" placeholder="輸入場地名稱" v-model="adminSearchText" />
        <span class="material-symbols-outlined absolute top-0 right-0 pe-3 py-1 text-gray-600"> search </span>
      </div>
      <!-- 地區篩選 -->
      <div class="col-span-4 xs:col-span-2 md:col-span-1">
        <Select v-model="adminCity">
          <SelectTrigger><SelectValue placeholder="地區" /></SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel class="tracking-wide">地區</SelectLabel>
              <SelectItem value="全部"> 全部 </SelectItem>
              <SelectItem v-for="city in adminCityOptions" :key="city" :value="city"> {{ city }} </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex gap-2">
        <!-- 新增場地 -->
        <Dialog :open="isModalOpen" @update:open="isModalOpen = $event">
          <DialogTrigger as-child>
            <Button variant="outline" @click="openDialog()" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white text-sm"> 新增場地 </Button>
          </DialogTrigger>
          <VenueModal />
        </Dialog>
        <!-- 刪除多筆資料 -->
        <AlertDialog>
          <AlertDialogTrigger as-child>
            <Button :disabled="deleteArray.length === 0" variant="outline" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white text-sm"> 刪除多筆資料 </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>確定要刪除以下場地?</AlertDialogTitle>
              <AlertDialogDescription></AlertDialogDescription>
            </AlertDialogHeader>
            <div v-for="(title, index) in deleteTitle" :key="index" class="text-black">{{ title }}</div>
            <AlertDialogFooter>
              <AlertDialogCancel class="bg-black-60">取消</AlertDialogCancel>
              <AlertDialogAction class="text-black-100 bg-tiffany" @click="deleteVenue(deleteArray, 'multiple')">確定</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </nav>
    <!-- 搜尋不到資料 -->
    <p v-if="adminVenues.length === 0" class="text-primary tracking-wider text-lg">oops! 搜尋不到相關資料 ╮(′～‵〞)╭</p>
    <!-- Table -->
    <Table v-else class="bg-white rounded-lg text-md mb-3">
      <TableHeader>
        <TableRow class="hover:bg-white text-nowrap" style="color: black !important">
          <TableHead></TableHead>
          <TableHead>名稱</TableHead>
          <TableHead>地區</TableHead>
          <TableHead>座位區分類</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-gray-600">
        <TableRow v-for="venue in adminVenues" :key="venue.id">
          <TableCell class="text-purple-primary">
            <Checkbox id="venueItem" @click="handelCheckList(venue.id, venue.title)" />
            <label for="venueItem" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
          </TableCell>
          <TableCell class="text-purple-primary">{{ venue.title }}</TableCell>
          <TableCell>{{ venue.city }}</TableCell>
          <TableCell>{{ venue.seat_areas?.join('、') }}</TableCell>
          <TableCell class="text-right">
            <!-- 編輯場地 -->
            <Button variant="none" @click="openDialog(venue.id)" class="hover:text-[#6366f1]">
              <span class="material-symbols-outlined">edit</span>
            </Button>
            <!-- 刪除單一演唱會 -->
            <AlertDialog>
              <AlertDialogTrigger as-child>
                <Button variant="none" class="hover:text-[#6366f1]" :disabled="venue.id <= 6">
                  <span class="material-symbols-outlined">delete</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>確定要刪除 {{ venue.title }} ?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>一旦刪除後就無法恢復摟～</AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel>取消</AlertDialogCancel>
                  <AlertDialogAction @click="deleteVenue(venue.id, 'single')">確定</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </main>
</template>

<script setup>
  import { Button } from '@/components/ui/button';
  import { Checkbox } from '@/components/ui/checkbox';
  import { Input } from '@/components/ui/input';
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
  import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
  import { Dialog, DialogTrigger } from '@/components/ui/dialog';
  import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
</script>

<script>
import VenueModal from '@/components/admin/AdminVenues/VenueModal.vue';
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';

export default {
  data() {
    return {
      deleteTitle: [],
      deleteArray: [],
    };
  },
  components: { VenueModal },
  methods: {
    handelCheckList(id, title) {
      const index = this.deleteArray.indexOf(id);
      if (index !== -1) {
        this.deleteArray.splice(index, 1);
        this.deleteTitle.splice(title, 1);
      } else {
        this.deleteArray.push(id);
        this.deleteTitle.push(title);
      }
    },
    openDialog(id) {
      if (!id) {
        this.isNew = true;
        this.tempAdminVenue = {
          seat_areas: [],
          transportation: [
            {
              type: '',
              info: '',
            },
          ],
        };
      } else {
        this.isModalOpen = true;
        this.isNew = false;
        this.getAdminSingleVenue(id);
      }
    },
    ...mapActions(useVenuesStore, ['getAdminVenues', 'deleteVenue']),
  },
  computed: {
    ...mapState(useVenuesStore, ['adminVenues', 'adminCityOptions']),
    ...mapWritableState(useVenuesStore, ['adminCity', 'adminSearchText', 'isModalOpen', 'isNew', 'tempAdminVenue', 'getAdminSingleVenue']),
  },
  watch: {
    adminSearchText: 'getAdminVenues',
    adminCity: 'getAdminVenues',
  },
  mounted() {
    this.getAdminVenues();
  },
  unmounted() {
    this.adminCity = '';
    this.adminSearchText = '';
  },
};
</script>
