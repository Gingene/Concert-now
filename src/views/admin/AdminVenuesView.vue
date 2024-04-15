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
              <SelectItem value="全部" @click="searchAdminVenues(adminSearchText)">
                全部
              </SelectItem>
              <SelectItem v-for="city in adminCityOptions" :key="city" :value="city"
                @click="searchAdminVenues(adminSearchText, city)"> {{ city }} 
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <!-- 新增場地 -->
      <div class="lg:pt-5 mt-auto">
        <Dialog :open="isModalOpen" @update:open="handelModel">
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
            <Form @submit="onSubmit">
              <section class="grid grid-cols-2 place-items-start gap-6">
                <section class="grid grid-cols-1 gap-3">
                  <!-- 中文名稱 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="title" class="text-left">中文名稱</Label>
                    <Field name="title" type="text" rules="required" class="col-span-3 form-field" />
                    <ErrorMessage name="title" class="errorText" />
                  </div>
                  <!-- 英文名稱 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="eng_title" class="text-left">英文名稱</Label>
                    <Field name="eng_title" type="text" rules="required|alphaDash" class="col-span-3 form-field" />
                    <ErrorMessage name="eng_title" class="errorText" />
                  </div>
                  <!-- 地址 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="address" class="text-left">地址</Label>
                    <Field name="address" type="text" rules="required" class="col-span-3 form-field" />
                    <ErrorMessage name="address" class="errorText" />
                  </div>
                  <!-- 地區 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="city" class="text-left">地區</Label>
                    <Field name="city" rules="required" v-slot="{ field }" class="col-span-3">
                      <Select v-bind="field">
                        <SelectTrigger class="w-full col-span-3">
                          <SelectValue placeholder="地區" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel class="tracking-wide">地區</SelectLabel>
                              <SelectItem 
                                v-for="city in adminCityOptions" 
                                :key="city" 
                                :value="city"> {{ city }} 
                              </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                      </Select>
                      <ErrorMessage name="city" class="errorText" />
                    </Field>
                  </div>
                  <!-- 座位區分類 -->
                  <div class="grid grid-cols-4 items-start gap-x-3">
                    <Label for="seat_areas" class="text-left py-2">座位區分類</Label>
                    <div class="col-span-3 grid grid-cols-6 gap-3">
                        <Input
                          v-model="tempSeatArea"
                          :disabled="canEditSeats"
                          type="text"
                          class="col-span-4" />
                        <div class="col-span-2 flex justify-start px-1">
                          <!-- add seat area -->
                          <Button 
                            type="button"
                            variant="none" 
                            :disabled="!tempSeatArea" 
                            class="w-10 hover:text-[#6366f1]"
                            @click="addSeatArea(tempSeatArea)" >
                            <span class="material-symbols-outlined hover:scale-110" >add_circle</span>
                          </Button>
                          <!-- edit seat area -->
                          <Button
                            type="button"
                            v-if="tempVenue.seat_areas.length !== 0"
                            variant="none"
                            class="w-10 hover:text-[#6366f1]"
                            @click="editSeatOptions">
                            <span class="material-symbols-outlined hover:scale-110 ">edit</span>
                          </Button>
                        </div>
                        <ErrorMessage name="seat_areas" class="errorText" style="padding: 0px;" />
                        <!-- show seat areas -->
                        <Field name="seat_areas" rules="required" v-slot="{ field }" v-model="tempVenue.seat_areas">
                          <div v-bind="field" :value="tempVenue.seat_areas" class="col-span-6 flex flex-wrap gap-x-1 gap-y-3" >
                            <div 
                            v-for="(area,index) in tempVenue.seat_areas" :key="index" class="relative me-4">
                              <p class="rounded-full bg-secondary px-3 py-1 text-sm">{{ area }}</p>
                              <Button
                                type="button"
                                v-if="canEditSeats"
                                variant="none"
                                class="w-10 h-10 absolute -top-3 -right-5 motion-safe:animate-bounce"
                                @click="removeSeat(index)">
                                <span class="material-symbols-outlined">do_not_disturb_on</span>
                              </Button>
                            </div>
                          </div>
                      </Field>
                    </div>
                  </div>
                  <!-- 座位數量 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="seat_amount" class="text-left">座位數量</Label>
                    <Field name="seat_amount" type="text" rules="required|numeric" class="col-span-3 form-field" />
                    <ErrorMessage name="seat_amount" class="errorText" />
                  </div>
                  <!-- Google 地圖連結 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="map_link" class="text-left">地圖連結</Label>
                    <Field name="map_link" type="text" rules="required|url" class="col-span-3 form-field" />
                    <ErrorMessage name="map_link" class="errorText" />
                  </div>
                  <span class="-mt-3 text-tiny text-black-60">※ 請輸入 Google 地圖連結</span>
                </section>
                <section class="grid grid-cols-1 gap-3">
                  <!-- 圖片：橫的 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="picture_horizontal" class="text-left"> 圖片 - 橫圖 </Label>
                    <Field name="picture_horizontal">
                      <Input
                      id="picture_horizontal"
                      type="file"
                      accept="image/png, image/jpeg, image/webp"
                      class="col-span-3 hover:bg-accent"
                      @change="readImg($event, 'horizontal')" />
                      <span v-show="imageSize[0]" class="errorText">{{ sizeError }}</span>
                    </Field>
                  </div>
                  <img 
                    v-if="imageUrl[0]" 
                    :src="imageUrl[0]" 
                    alt="Preview Image" 
                    class="max-w-[150px] max-h-[150px]">
                  <span v-else class="-mt-3 text-tiny text-black-60">※ 圖片不能超過 3MB、圖片寬度必須大於 1800 像素</span>
                  <!-- 圖片：方的 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="picture_square" class="text-left"> 圖片 - 方圖 </Label>
                    <Field name="picture_square">
                      <Input 
                      id="picture_square"
                      type="file" 
                      accept="image/png, image/jpeg, image/webp"
                      class="col-span-3 hover:bg-accent"
                      @change="readImg($event, 'square')" />
                      <span v-show="imageSize[1]" class="errorText">{{ sizeError }}</span>
                    </Field>
                  </div>
                  <img 
                    v-if="imageUrl[1]" 
                    :src="imageUrl[1]" 
                    alt="Preview Image" 
                    class="max-w-[150px] max-h-[150px]">
                  <span v-else class="-mt-3 text-tiny text-black-60">※ 圖片不能超過 3MB</span>
                  <!-- 圖片：座位圖 -->
                  <div class="grid grid-cols-4 items-center gap-x-3">
                    <Label for="seat_picture" class="text-left"> 座位圖 </Label>
                    <Field name="seat_picture">
                      <Input 
                      id="seat_picture"
                      type="file" 
                      accept="image/png, image/jpeg, image/webp"
                      class="col-span-3 hover:bg-accent"
                      @change="readImg($event, 'seat')" />
                      <span v-show="imageSize[2]" class="errorText">{{ sizeError }}</span>
                    </Field>
                  </div>
                  <img 
                    v-if="imageUrl[2]" 
                    :src="imageUrl[2]" 
                    alt="Preview Image" 
                    class="max-w-[150px] max-h-[150px]">
                  <span v-else class="-mt-3 text-tiny text-black-60">※ 圖片不能超過 3MB</span>
                  <!-- 交通方式 -->
                  <div class="flex flex-col item-start gap-x-3">
                    <div class="flex justify-start items-center py-2">
                      <p class="text-sm border-b-2 border-primary p-2 me-4">交通方式</p>
                      <!-- 新增欄位-->
                      <Button
                        :disabled="!tempVenue.transportation[tempVenue.transportation.length-1].type || !tempVenue.transportation[tempVenue.transportation.length-1].info"
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
                      <Field 
                        type="text" rules="required" class="form-field"
                        v-model="tempVenue.transportation[index].type"
                        :name="`transportation_type_${index}`" />
                      <ErrorMessage 
                        :name="`transportation_type_${index}`" 
                        class="errorText" 
                        style="padding-left: 0px !important;" />
                      <!-- 交通方式：內容 -->
                      <Label :for="`transportation_info_${index}`" class="text-left">內容</Label>
                      <Field :name="`transportation_info_${index}`" rules="required" v-slot="{ field }" v-model="tempVenue.transportation[index].info">
                        <textarea 
                          type="text" rows="3" cols="48"
                          class="border border-primary-foreground focus-visible:outline-black focus-visible:rounded-[10px] p-3 text-sm"
                          v-bind="field" />
                      </Field>
                      <ErrorMessage 
                        :name="`transportation_info_${index}`" 
                        class="errorText" 
                        style="padding-left: 0px !important;" />
                      <span v-if="index+1 !== tempVenue.transportation.length" class="my-3">/</span>
                    </div>
                  </div>
                </section>
              </section>
              <DialogFooter>
                <DialogClose><Button variant="outline" class="px-6">取消</Button></DialogClose>
                <Button type="submit">新增</Button>
              </DialogFooter>
            </Form>
            <!-- 場地內容 end -->
          </DialogScrollContent>
        </Dialog>
      </div>
      <!-- 刪除多筆資料 -->
      <div class="lg:pt-5 mt-auto">
        <AlertDialog>
          <AlertDialogTrigger as-child>
            <Button :disabled="deleteArray.length === 0" variant="outline" class="bg-primary text-white hover:bg-[#6366f1] hover:text-white"> 刪除多筆資料 </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>確定要刪除以下場地?</AlertDialogTitle>
              <AlertDialogDescription></AlertDialogDescription>
            </AlertDialogHeader>
            <div v-for="(title, index) in deleteTitle" :key="index" class="text-black">{{ title }}</div>
            <AlertDialogFooter>
              <AlertDialogCancel class="bg-black-60">取消</AlertDialogCancel>
              <AlertDialogAction class="text-black-100 bg-tiffany" @click="deleteVenue(deleteArray,'multiple')">確定</AlertDialogAction>
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
            <Checkbox id="venueItem" @click="handelCheckList(venue.id, venue.title)"/>
            <label for="venueItem" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </label>
          </TableCell>
          <TableCell class="text-purple-primary">{{ venue.title }}</TableCell>
          <TableCell>{{ venue.city }}</TableCell>
          <TableCell>{{ venue.seat_areas?.join('、') }}</TableCell>
          <TableCell class="text-right">
            <!-- 編輯場地 -->
            <Dialog>
              <DialogTrigger as-child>
                <Button variant="none" class="hover:text-[#6366f1]">
                  <span class="material-symbols-outlined">edit</span>
                </Button>
              </DialogTrigger>
              <DialogScrollContent class="sm:max-w-[850px]">
                <DialogHeader>
                  <DialogTitle class="text-center">編輯場地</DialogTitle>
                  <DialogDescription>請編輯場地</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose><Button variant="outline" class="px-6">取消</Button></DialogClose>
                  <Button type="submit">儲存資料</Button>
                </DialogFooter>
              </DialogScrollContent>
            </Dialog>
            <!-- 刪除單一演唱會 -->
            <AlertDialog>
              <AlertDialogTrigger as-child>
                <Button variant="none" class="hover:text-[#6366f1]" :disabled="venue.id<=6">
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
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogClose,DialogScrollContent, DialogFooter, DialogHeader, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
</script>

<script>
import { http, adminPath } from '@/api';
import { mapActions, mapState } from 'pinia';
import { useVenuesStore } from '@/stores/venues';
import { defineRule, Form, Field, ErrorMessage, configure } from 'vee-validate';
import { required, size, alpha_dash as alphaDash, numeric, url } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import { useToast } from '@/components/ui/toast/use-toast';
const { toast } = useToast();

defineRule('required', required);
defineRule('size', size);
defineRule('alphaDash', alphaDash);
defineRule('numeric', numeric);
defineRule('url', url);

configure({
  // create and set a localization handler
  generateMessage: localize('zh_TW', {
    messages: {
      required: '必填欄位',
      size: '圖片不能超過 3MB',
      alphaDash: '須為英數、破折號及底線的組合',
      numeric: '須為數字',
      url: '須為有效的連結',
      width: '圖片寬度必須大於 1800 像素'
    },
  }),
  validateOnInput: true,
});

export default {
  data() {
    return {
      searchText: '',
      tempSeatArea: '',
      canEditSeats: false,
      imageUrl: [],
      imageSize: [false, false, false],
      sizeError: '圖片不能超過 3MB',
      isModalOpen: false,
      deleteTitle: [],
      deleteArray: [],
      tempVenue: {
        seat_areas: [],
        transportation: [
          {
            type: '',
            info: '',
          }
        ],
      },
    };
  },
  methods: {
    handelModel(val){
      this.isModalOpen = val;
      if (val === false) {
        this.resetAddVenue();
      }
    }, 
    handelCheckList(id, title){
      const index = this.deleteArray.indexOf(id);
      if (index !== -1) {
          this.deleteArray.splice(index, 1); 
          this.deleteTitle.splice(title, 1);
      } else {
          this.deleteArray.push(id);
          this.deleteTitle.push(title);
      }
    }, 
    readImg(event, type){
      if(event.target.files[0].size > 3 * 1024 ** 2){
        if (type === 'horizontal'){
          this.imageSize[0] = true;
          document.getElementById('picture_horizontal').value = '';
        }else if (type === 'square'){
          this.imageSize[1] = true;
          document.getElementById('square').value = '';
        }else if (type === 'seat'){
          this.imageSize[2] = true;
          document.getElementById('seat').value = '';
        };
        return;
      }

      if (type === 'horizontal'){
        this.tempVenue.picture_horizontal = event.target.files[0];
        this.imageUrl[0] = URL.createObjectURL(this.tempVenue.picture_horizontal);
        this.imageSize[0] = false;
      }else if (type === 'square'){
        this.tempVenue.picture_square = event.target.files[0];
        this.imageUrl[1] = URL.createObjectURL(this.tempVenue.picture_square);
        this.imageSize[1] = false;
      }else if (type === 'seat'){
        this.tempVenue.seat_picture = event.target.files[0];
        this.imageUrl[2] = URL.createObjectURL(this.tempVenue.seat_picture);
        this.imageSize[2] = false;
      };
    },
    resetAddVenue(){
      this.imageUrl = [];
      this.tempSeatArea = '';
      this.canEditSeats = false;
      this.imageSize= [false,false, false];
      this.tempVenue = {
        seat_areas: [],
        transportation: [
          {
            type: '',
            info: '',
          }
        ],
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
    onSubmit(values) {
      if(this.imageUrl.length !== 3){
        toast({
          title: '請確認所有圖檔都上傳了',
        });
        return;
      }

      const payload = {
        // _method: 'PUT',
        title: values.title,
        eng_title: values.eng_title,
        address: values.address,
        city: values.city,
        picture_horizontal: this.tempVenue.picture_horizontal,
        picture_square: this.tempVenue.picture_square,
        map_link: values.map_link,
        seat_picture: this.tempVenue.seat_picture,
        seat_areas: values.seat_areas,
        seat_amount: values.seat_amount,
        transportation: [],
      };

      this.tempVenue.transportation.forEach( (i, index)=>{
        payload.transportation[index] = { 'type': i.type, 'info': i.info };
      });

      http
        .post(adminPath.venues, payload)
        .then(()=>{
          toast({
            title: '新增成功',
          });
          this.isModalOpen = false;
          this.resetAddVenue();
          this.getAdminVenues();
        })
        .catch(()=>{
          toast({
            title: '新增失敗',
          });
        });
    },
    ...mapActions(useVenuesStore, ['getAdminVenues','searchAdminVenues','deleteVenue']),
  },
  computed: {
    ...mapState(useVenuesStore, ['adminVenues','adminCity','adminSearchText','adminCityOptions']),
  },
  mounted() {
    this.getAdminVenues();
  },
};
</script>
