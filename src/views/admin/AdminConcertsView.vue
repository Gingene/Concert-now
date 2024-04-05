<template>
  <!-- Search/Command -->
  <div class="flex gap-6 mb-8 relative">
    <div class="w-[36%] lg:w-[290px] relative lg:pt-6">
      <Input type="text" placeholder="輸入演唱會名稱" v-model="searchText" @keyup="searchAdminConcerts(searchText)" />
      <span class="material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"> search </span>
    </div>
    <!-- 國籍選擇 -->
    <div class="w-[15%] lg:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="表演者國籍" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel class="tracking-wide">表演者國籍</SelectLabel>
            <SelectItem v-for="country in countryRanges" :key="country" :value="country" @click="getFilterAdminConcerts('country', country)"> {{ country }} </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <!-- 演唱會選擇 -->
    <div class="w-[15%] lg:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="演唱會時間" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>演唱會時間</SelectLabel>
            <SelectItem v-for="time in timeRanges" :key="time" :value="time" @click="getFilterAdminConcerts('time', time)">{{ time }}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <!-- 新增演唱會 -->
    <div class="lg:pt-5 mt-auto">
      <Form ref="form">
        <Dialog :open="openTwo" @update:open="(open) => (openTwo = open)">
          <DialogTrigger as-child>
            <Button variant="outline" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 新增演唱會 </Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[850px]">
            <DialogHeader>
              <DialogTitle class="text-center">新增演唱會</DialogTitle>
              <DialogDescription>請新增演唱會</DialogDescription>
            </DialogHeader>
            <div class="grid grid-cols-2 place-items-start gap-8">
              <div class="grid gap-4 py-4 w-full">
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="title" class="text-left"> 演唱會名稱 </Label>
                  <Field name="title" rules="required" v-model="tempConcert.title" v-slot="{ errors, field }">
                    <Input type="text" class="col-span-3" v-bind="field" />
                    <span v-show="errors[0]" class="errorText">演唱會名稱必填</span>
                  </Field>
                </div>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="artist" class="text-left"> 表演者名稱 </Label>
                  <Field name="artist" rules="required" v-model="tempConcert.artist_id" v-slot="{ errors, field }">
                    <Select v-bind="field">
                      <SelectTrigger class="w-full col-span-3">
                        <SelectValue placeholder="表演者" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>表演者</SelectLabel>
                          <SelectItem :value="artist.id" v-for="artist in artistOptions" :key="artist.id">{{ artist.name }}</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <span v-show="errors[0]" class="errorText">表演者必填</span>
                  </Field>
                </div>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="location" class="text-left"> 舉辦場地 </Label>
                  <Field name="location" rules="required" v-model="tempConcert.venue_id" v-slot="{ errors, field }">
                    <Select v-bind="field">
                      <SelectTrigger class="w-full col-span-3">
                        <SelectValue placeholder="場地" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>場地</SelectLabel>
                          <SelectItem :value="venue.id" v-for="venue in venueOptions" :key="venue.id">{{ venue.title }}</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <span v-show="errors[0]" class="errorText">場地必填</span>
                  </Field>
                </div>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="price" class="text-left"> 演唱會價格 </Label>
                  <Field name="price" rules="required" v-model="tempConcert.priceList" v-slot="{ errors, field }">
                    <Input type="text" class="col-span-3" v-bind="field" />
                    <span v-show="errors[0]" class="errorText">演唱會價格必填</span>
                  </Field>
                </div>
                <span class="-mt-3 text-tiny text-black-60">※ 請以半形逗號區隔</span>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="holdingDate" class="text-left"> 舉辦日期 </Label>
                  <Field name="holdingDate" rules="required" v-model="tempConcert.holdingDate" v-slot="{ errors, field }">
                    <Input type="date" class="col-span-3" v-bind="field" />
                    <span v-show="errors[0]" class="errorText">舉辦日期必填</span>
                  </Field>
                </div>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="holdingTime" class="text-left"> 舉辦時間 </Label>
                  <Field name="holdingTime" rules="required" v-model="tempConcert.holdingTime" v-slot="{ errors, field }">
                    <Input type="text" class="col-span-3" placeholder="00:00" v-bind="field" />
                    <span v-show="errors[0]" class="errorText">舉辦時間必填</span>
                  </Field>
                </div>
                <span class="-mt-3 text-tiny text-black-60">※ 請以此格式撰寫 19:00</span>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="salesDate" class="text-left"> 售票日期 </Label>
                  <Field name="salesDate" rules="required" v-model="tempConcert.salesDate" v-slot="{ errors, field }">
                    <Input type="date" class="col-span-3" v-bind="field" />
                    <span v-show="errors[0]" class="errorText">售票日期必填</span>
                  </Field>
                </div>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="salesTime" class="text-left"> 售票時間 </Label>
                  <Field name="salesTime" rules="required" v-model="tempConcert.salesTime" v-slot="{ errors, field }">
                    <Input type="text" class="col-span-3" placeholder="00:00" v-bind="field" />
                    <span v-show="errors[0]" class="errorText">售票時間必填</span>
                  </Field>
                </div>
                <span class="-mt-3 text-tiny text-black-60">※ 請以此格式撰寫 19:00</span>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="organizerList" class="text-left"> 主辦單位 </Label>
                  <Field name="organizerList" rules="required" v-model="tempConcert.organizerList" v-slot="{ errors, field }">
                    <Input type="text" class="col-span-3" placeholder="00:00" v-bind="field" />
                    <span v-show="errors[0]" class="errorText">主辦單位必填</span>
                  </Field>
                </div>
                <span class="-mt-3 text-tiny text-black-60">※ 請以半形逗號區隔</span>
              </div>
              <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="pictures-horizontal" class="text-left"> 圖片 - 橫圖 </Label>
                  <Field name="pictures-horizontal" rules="required" v-slot="{ errors, field }">
                    <Input type="file" id="pictures-horizontal" class="col-span-3 hover:bg-accent" v-bind="field" @change="readFile($event, 'horizontal')" />
                    <span v-show="errors[0]" class="errorText">圖片必填</span>
                  </Field>
                </div>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="pictures-square" class="text-left"> 圖片 - 方圖 </Label>
                  <Field name="pictures-square" rules="required" v-slot="{ errors, field }">
                    <Input type="file" id="pictures-square" class="col-span-3 hover:bg-accent" v-bind="field" @change="readFile($event, 'square')" />
                    <span v-show="errors[0]" class="errorText">圖片必填</span>
                  </Field>
                </div>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="pictures-straight" class="text-left"> 圖片 - 直圖 </Label>
                  <Field name="pictures-straight" rules="required" v-slot="{ errors, field }">
                    <Input type="file" id="pictures-straight" class="col-span-3 hover:bg-accent" v-bind="field" @change="readFile($event, 'straight')" />
                    <span v-show="errors[0]" class="errorText">圖片必填</span>
                  </Field>
                </div>
                <hr />
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="foreignUrl0" class="text-left"> 購票網站 1 </Label>
                  <Field name="foreignUrl0" rules="required" v-model="tempConcert.foreignUrl0" v-slot="{ errors, field }">
                    <Input type="text" class="col-span-3" v-bind="field" />
                    <span v-show="errors[0]" class="errorText">必填1個購票網站</span>
                  </Field>
                </div>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="foreignUrl1" class="text-left"> 購票網站 2 </Label>
                  <Input type="text" class="col-span-3" v-model="tempConcert.foreignUrl1" />
                </div>
                <div class="grid grid-cols-4 items-center gap-x-3">
                  <Label for="foreignUrl2" class="text-left"> 購票網站 3 </Label>
                  <Input type="text" class="col-span-3" v-model="tempConcert.foreignUrl2" />
                </div>
                <span class="-mt-3 text-tiny text-black-60">※ 請以半形逗號區隔購票網站名稱與網站連結</span>
              </div>
            </div>
            <DialogFooter>
              <DialogClose><Button variant="outline" class="px-6">取消</Button></DialogClose>
              <Button type="button" @click="validate">新增</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Form>
    </div>
    <!-- 刪除多筆資料 -->
    <div class="lg:pt-5 mt-auto">
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="outline" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 刪除資料 </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>確定要刪除資料?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel class="bg-black-60">取消</AlertDialogCancel>
            <AlertDialogAction class="text-black-100 bg-tiffany">確定</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  </div>
  <!-- Table -->
  <Table class="bg-white rounded-lg text-md mb-10">
    <TableHeader>
      <TableRow class="hover:bg-white text-nowrap" style="color: black !important">
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
      <TableRow v-for="(concert, index) in adminConcerts" :key="concert.id">
        <TableCell class="text-purple-primary">
          <Checkbox id="terms" />
          <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
        </TableCell>
        <TableCell class="text-purple-primary">{{ concert.artist?.name }}</TableCell>
        <TableCell>{{ concert.title }}</TableCell>
        <TableCell>{{ concert.holding_time.slice(0, 16) }}</TableCell>
        <TableCell>{{ concert.venue?.title }}</TableCell>
        <TableCell>{{ ((concert.saver_count * 7) / 6) * 258 * (index + 4) }}</TableCell>
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
                <DialogDescription>請編輯演唱會</DialogDescription>
              </DialogHeader>
              <div class="grid grid-cols-2 place-items-start gap-4">
                <div class="grid gap-4 py-4">
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="title" class="text-left"> 演唱會標題 </Label>
                    <Input type="text" id="title" class="col-span-3" />
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
    </TableBody>
  </Table>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// table
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Select
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
// Dialog
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  // AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
</script>

<script>
import { mapState, mapActions } from 'pinia';
import { useConcertsStore } from '@/stores/concerts';
import { http, adminPath } from '@/api';
import { loadingStore } from '@/stores/isLoading';
import { useToast } from '@/components/ui/toast/use-toast';
import { defineRule, Field, Form } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';

const { setIsLoading } = loadingStore();
const { toast } = useToast();

// import all validate rules
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

export default {
  data() {
    return {
      // 篩選選項
      timeRanges: ['全部', '本日', '本週', '本月'],
      countryRanges: ['全部', '台灣', '日本', '韓國', '歐美', '其它'],
      searchText: '',
      // 表單選項
      venueOptions: [],
      artistOptions: [],
      // 暫存待處理的資料
      tempConcert: {},
      // 操控 Dialog
      open: false,
      openTwo: false,
    };
  },
  methods: {
    ...mapActions(useConcertsStore, ['getAllAdminConcerts', 'getFilterAdminConcerts', 'searchAdminConcerts']),
    readFile(event, topic) {
      this.tempConcert[`cover_${topic}`] = event.target.files[0];
    },
    addNewConcert() {
      setIsLoading();
      this.tempConcert.price_list = this.tempConcert.priceList?.split(',');
      this.tempConcert.holding_time = `${this.tempConcert.holdingDate} ${this.tempConcert.holdingTime}:00`;
      this.tempConcert.sales_time = `${this.tempConcert.salesDate} ${this.tempConcert.salesTime}:00`;
      this.tempConcert.organizers = this.tempConcert.organizerList?.split(',');

      const deleteList = ['priceList', 'holdingDate', 'holdingTime', 'salesDate', 'salesTime', 'organizerList'];
      for (let i = 0; i < deleteList.length; i++) {
        delete this.tempConcert[`${deleteList[i]}`];
      }

      this.tempConcert.foreign_urls = [];
      for (let i = 0; i < 3; i++) {
        if (this.tempConcert[`foreignUrl${i}`]) {
          this.tempConcert.foreign_urls.push({
            name: this.tempConcert[`foreignUrl${i}`]?.split(',')[0],
            url: this.tempConcert[`foreignUrl${i}`]?.split(',')[1],
          });
        }
        delete this.tempConcert[`foreignUrl${i}`];
      }

      http
        .post(adminPath.concerts, { ...this.tempConcert })
        .then((res) => {
          this.getAllAdminConcerts();
          toast({
            title: '演唱會新增成功',
          });
          this.openTwo = false;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    validate: async function () {
      const result = await this.$refs.form.validate();
      if (!result.valid) return;
      this.addNewConcert();
    },
    getVenuesOptions() {
      http
        .get(adminPath.venues)
        .then((res) => {
          this.venueOptions = res.data.data.map((item) => {
            return { id: item.id.toString(), title: item.title };
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getArtistOptions() {
      http
        .get(adminPath.artists)
        .then((res) => {
          this.artistOptions = res.data.data.map((item) => {
            return { id: item.id.toString(), name: item.name };
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  computed: {
    ...mapState(useConcertsStore, ['adminConcerts', 'pagination']),
  },
  mounted() {
    this.getAllAdminConcerts();
    this.getVenuesOptions();
    this.getArtistOptions();
  },
};
</script>

<style scoped>
.errorText {
  color: rgb(239 68 68);
  font-size: 0.75rem;
  grid-column: span 4 / span 12;
  padding-top: 4px;
  padding-left: 99px;
}
</style>
