<template>
  <main>
    <!-- Search/Command -->
    <nav class="flex gap-6 mb-8 relative">
      <!-- 關鍵字搜尋 -->
      <div class="w-[36%] lg:w-[290px] relative lg:pt-6">
        <Input 
          type="text" 
          placeholder="輸入場地名稱" 
          v-model="searchText" 
          @keyup="searchAdminVenues(searchText, adminCity)" />
        <span class="material-symbols-outlined absolute top-7 right-2.5 cursor-pointer hidden lg:block"> 
          search 
        </span>
      </div>
      <!-- 地區篩選 -->
      <div class="w-[15%] lg:w-[200px] flex flex-col items-end lg:flex-row lg:justify-center lg:pt-5">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="地區" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel class="tracking-wide">地區</SelectLabel>
              <SelectItem 
              v-for="city in cityRanges" 
              :key="city" 
              :value="city"
              @click="city === '全部'? searchAdminVenues(adminSearchText) : searchAdminVenues(adminSearchText, city)"> {{ city }} </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <!-- 新增場地 -->
      <div class="lg:pt-5 mt-auto">
        <Form>
          <Dialog @update:open="resetAddVenue">
            <DialogTrigger as-child>
              <Button variant="outline" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 
                新增場地 
              </Button>
            </DialogTrigger>
            <DialogScrollContent class="sm:max-w-[850px]">
              <DialogHeader>
                <DialogTitle class="text-center">新增場地</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <!-- 場地內容 start -->
              <section class="grid grid-cols-2 place-items-start gap-6">
                <section class="grid grid-cols-1 gap-3">
                  <!-- 中文名稱 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="title" class="text-left"> 
                      中文名稱 
                    </Label>
                    <Field name="title" rules="required" v-slot="{ errors, field }" v-model="tempVenue.title">
                      <Input 
                        type="text" 
                        class="col-span-3" 
                        v-model="tempVenue.title" 
                        v-bind="field" 
                        :value="tempVenue.title" />
                      <span v-show="errors[0]" class="errorText">必填欄位</span>
                    </Field>
                  </div>
                  <!-- 英文名稱 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="eng_title" class="text-left"> 
                      英文名稱 
                    </Label>
                    <Field name="eng_title" rules="required" v-slot="{ errors, field }" v-model="tempVenue.eng_title">
                      <Input 
                        type="text" 
                        class="col-span-3" 
                        v-model="tempVenue.eng_title" 
                        v-bind="field" 
                        :value="tempVenue.eng_title" />
                      <span v-show="errors[0]" class="errorText">必填欄位</span>
                    </Field>
                  </div>
                  <!-- 地址 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="address" class="text-left"> 
                      地址 
                    </Label>
                    <Field name="address" rules="required" v-slot="{ errors, field }" v-model="tempVenue.address">
                      <Input 
                        type="text" 
                        class="col-span-3" 
                        v-model="tempVenue.address" 
                        v-bind="field" 
                        :value="tempVenue.address" />
                      <span v-show="errors[0]" class="errorText">必填欄位</span>
                    </Field>
                  </div>
                  <!-- 地區 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="city" class="text-left"> 
                      地區 
                    </Label>
                    <Field name="city" rules="required" v-slot="{ errors, field }" v-model="tempVenue.city" class="col-span-3">
                      <Select v-bind="field" v-model="tempVenue.city">
                        <SelectTrigger class="w-full col-span-3">
                          <SelectValue placeholder="地區" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel class="tracking-wide">地區</SelectLabel>
                            <SelectItem 
                            v-for="city in adminCityOptions" 
                            :key="city" 
                            :value="city"> {{ city }} </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <span v-show="errors[0]" class="errorText">必填欄位</span>
                    </Field>
                  </div>
                  <!-- 座位區分類 -->
                  <div class="grid grid-cols-4 items-start gap-x-3">
                    <Label for="seat_areas" class="text-left py-2"> 
                      座位區分類 
                    </Label>
                    <div class="col-span-3 grid grid-cols-6 gap-3">
                      <Field name="seat_areas" rules="required" v-slot="{ errors, field }" v-model="tempVenue.seat_areas">
                        <Input
                          v-model="tempSeatArea"
                          :disabled="canEditSeats"
                          type="text"
                          class="col-span-4" />
                        <div class="col-span-2 flex justify-start px-1">
                          <!-- add seat area -->
                          <Button 
                            variant="none" 
                            :disabled="!tempSeatArea" 
                            class="w-10 hover:text-[#6366f1]"
                            @click="addSeatArea(tempSeatArea)" >
                            <span class="material-symbols-outlined hover:scale-110" >add_circle</span>
                          </Button>
                          <!-- edit seat area -->
                          <Button
                            v-if="tempVenue.seat_areas.length !== 0"
                            variant="none"
                            class="w-10 hover:text-[#6366f1]"
                            @click="editSeatOptions">
                            <span class="material-symbols-outlined hover:scale-110">edit</span>
                          </Button>
                        </div>
                        <!-- show seat areas -->
                        <div class="col-span-6 flex flex-wrap gap-x-1 gap-y-3" v-bind="field">
                          <div v-for="(area,index) in tempVenue.seat_areas" :key="index" class="relative me-4">
                            <p class="rounded-full bg-secondary px-3 py-1 text-sm">
                              {{ area }}
                            </p>
                            <Button
                              v-if="canEditSeats" 
                              variant="none"
                              class="w-10 h-10 absolute -top-3 -right-5 motion-safe:animate-bounce"
                              @click="removeSeat(index)">
                              <span class="material-symbols-outlined">do_not_disturb_on</span>
                            </Button>
                          </div>
                        </div>
                        <span v-show="errors[0]" class="errorText">必填欄位</span>
                      </Field>
                    </div>
                  </div>
                  <!-- 座位數量 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="seat_amount" class="text-left"> 
                      座位數量
                    </Label>
                    <Field name="seat_amount" rules="required" v-slot="{ errors, field }" v-model="tempVenue.seat_amount">
                      <Input 
                        type="number" 
                        class="col-span-3" 
                        v-model="tempVenue.seat_amount" 
                        v-bind="field" 
                        :value="tempVenue.seat_amount" />
                      <span v-show="errors[0]" class="errorText">必填欄位</span>
                    </Field>
                  </div>
                  <!-- Google 地圖連結 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="map_link" class="text-left"> 
                      Google <br> 地圖連結 
                    </Label>
                    <Field name="map_link" rules="required" v-slot="{ errors, field }" v-model="tempVenue.map_link">
                      <Input 
                        type="text" 
                        class="col-span-3" 
                        v-model="tempVenue.map_link" 
                        v-bind="field" 
                        :value="tempVenue.map_link" />
                      <span v-show="errors[0]" class="errorText">必填欄位</span>
                    </Field>
                  </div>
                </section>
                <section class="grid grid-cols-1 gap-3">
                  <!-- 圖片：橫的 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="picture_horizontal" class="text-left"> 圖片 - 橫圖 </Label>
                    <Field name="picture_horizontal">
                      <Input
                      type="file" 
                      id="picture_horizontal"
                      class="col-span-3 hover:bg-accent"
                      @change="readImg($event, 'horizontal')"/>
                    </Field>
                    <img 
                      v-if="imageUrl[0]" 
                      :src="imageUrl[0]" 
                      alt="Preview Image" 
                      class="max-w-[150px] max-h-[150px]">
                  </div>
                  <!-- 圖片：方的 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="picture_square" class="text-left"> 圖片 - 方圖 </Label>
                    <Field name="picture_square">
                      <Input 
                      type="file" 
                      id="picture_square"
                      class="col-span-3 hover:bg-accent"
                      @change="readImg($event, 'square')" />
                    </Field>
                    <img 
                      v-if="imageUrl[1]" 
                      :src="imageUrl[1]" 
                      alt="Preview Image" 
                      class="max-w-[150px] max-h-[150px]">
                  </div>
                  <!-- 圖片：座位圖 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="seat_picture" class="text-left"> 座位圖 </Label>
                    <Field name="seat_picture">
                      <Input 
                      type="file" 
                      id="seat_picture"
                      class="col-span-3 hover:bg-accent"
                      @change="readImg($event, 'seat')" />
                    </Field>
                    <img 
                      v-if="imageUrl[2]" 
                      :src="imageUrl[2]" 
                      alt="Preview Image" 
                      class="max-w-[150px] max-h-[150px]">
                  </div>
                  <!-- 交通方式 -->
                  <div class="flex flex-col item-start gap-x-3">
                    <div class="flex justify-start items-center py-2">
                      <p class="text-sm border-b-2 border-primary p-2 me-4">交通方式</p>
                      <!-- 新增欄位-->
                      <Button
                      variant="none" 
                      class="text-sm rounded-[10px] hover:scale-105 hover:text-[#6366f1]" 
                      @click="addInputGroup">
                        <span class="material-symbols-outlined me-2" >add_circle</span>
                        <span>新增欄位</span> 
                      </Button>
                    </div>
                    <div v-for="(item, index) in tempVenue.transportation" :key="index"
                      class="flex flex-col items-start gap-2 pt-3">
                      <!-- 交通方式：類型 -->
                      <Label :for="`transportation_type_${index}`" class="text-left">類型</Label>
                      <Field :name="`transportation_type_${index}`" rules="required" v-slot="{ errors, field }" class="grid"
                      v-model="tempVenue.transportation[index].type">
                        <Input 
                          type="text"
                          v-model="tempVenue.transportation[index].type"
                          v-bind="field" />
                        <span v-show="errors[0]" class="errorText" style="padding-left: 0px !important;">必填欄位</span>
                      </Field>
                      <!-- 交通方式：內容 -->
                      <Label :for="`transportation_info_${index}`" class="text-left">內容</Label>
                      <Field :name="`transportation_info_${index}`" rules="required" v-slot="{ errors, field }" 
                      v-model="tempVenue.transportation[index].info">
                        <textarea 
                          type="text" rows="3" cols="48"
                          class="border border-primary-foreground focus-visible:outline-black focus-visible:rounded-[10px] p-3 text-sm"
                          v-model="tempVenue.transportation[index].info"
                          v-bind="field">
                        </textarea>
                        <span v-show="errors[0]" class="errorText" style="padding-left: 0px !important;">必填欄位</span>
                      </Field>
                      <span v-if="index+1 !== inputGroup.length" class="my-3">/</span>
                    </div>
                  </div>
                </section>
              </section>
              <!-- 場地內容 end -->
              <DialogFooter>
                <DialogClose><Button variant="outline" class="px-6">取消</Button></DialogClose>
                <Button type="button" @click="formCheck()">新增</Button>
              </DialogFooter>
            </DialogScrollContent>
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
    </nav>
    <!-- 搜尋不到資料 -->
    <p v-if="adminVenues.length === 0" class="text-primary tracking-wider text-lg">
      oops! 搜尋不到相關資料 ╮(′～‵〞)╭
    </p>
    <!-- Table -->
    <Table v-else class="bg-white rounded-lg text-md mb-10">
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
            <Checkbox id="terms" />
            <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
          </TableCell>
          <TableCell class="text-purple-primary">{{ venue.title }}</TableCell>
          <TableCell>{{ venue.city }}</TableCell>
          <TableCell>{{ venue.seat_areas?.join('、') }}</TableCell>
          <TableCell class="text-right">
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
                      <Label for="city" class="text-left"> 表演者名稱 </Label>
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
  </main>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogClose,DialogScrollContent, DialogContent, DialogFooter, DialogHeader, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
import { mapActions, mapState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';
import { defineRule, Field, Form } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

export default {
  data() {
    return {
      searchText: '',
      cityRanges: ['全部','台北市', '新北市', '台中市', '高雄市'],
      tempVenue: {
        seat_areas: [],
        transportation: [
          {
            type: '',
            info: '',
          }
        ],
      },
      tempSeatArea: '',
      canEditSeats: false,
      imageUrl: [],
      inputGroup: [0],
    };
  },
  inject: ['http', 'path', 'adminPath'],
  methods: {
    readImg(event, type){
      if (type === 'horizontal'){
        this.tempVenue.picture_horizontal = event.target.files[0];
        this.imageUrl[0] = URL.createObjectURL(this.tempVenue.picture_horizontal);
      }else if (type === 'square'){
        this.tempVenue.picture_square = event.target.files[0];
        this.imageUrl[1] = URL.createObjectURL(this.tempVenue.picture_square);
      }else if (type === 'seat'){
        this.tempVenue.seat_picture = event.target.files[0];
        this.imageUrl[2] = URL.createObjectURL(this.tempVenue.seat_picture);
      };
    },
    formCheck(){
      // console.log(this.tempVenue);
    },
    resetAddVenue(isOpen){
      if(!isOpen){
        this.imageUrl = [];
        this.inputGroup = [0];
        this.tempSeatArea = '';
        this.canEditSeats = false;
        this.tempVenue = {
          seat_areas: [],
          transportation: [
            {
              type: '',
              info: '',
            }
          ],
        };
      };
    },
    addSeatArea(seat){
      this.tempVenue.seat_areas.push(seat);
      this.tempSeatArea='';
    },
    editSeatOptions(){
      this.canEditSeats? this.canEditSeats = false : this.canEditSeats = true;
    },
    removeSeat(id){
      this.tempVenue.seat_areas.splice(id, 1);
      if(this.tempVenue.seat_areas.length === 0) this.canEditSeats = false;
    },
    addInputGroup(){
      this.tempVenue.transportation.push({ type: '', info: '',});
    },
    ...mapActions(useVenuesStore, ['getAdminVenues','searchAdminVenues']),
  },
  computed: {
    ...mapState(useVenuesStore, ['adminVenues','adminCity','adminSearchText','adminCityOptions']),
  },
  mounted() {
    this.getAdminVenues();
  },
};
</script>
