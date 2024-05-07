<template>
  <DialogScrollContent class="sm:max-w-[850px]">
    <DialogHeader>
      <DialogTitle class="text-center" v-if="isNew">新增場地</DialogTitle>
      <DialogTitle class="text-center" v-else>編輯場地</DialogTitle>
      <DialogDescription></DialogDescription>
    </DialogHeader>
    <!-- 場地內容 start -->
    <Form @submit="onSubmit">
      <section class="grid grid-cols-2 place-items-start gap-6">
        <section class="grid grid-cols-1 gap-3">
          <!-- 中文名稱 -->
          <div class="grid grid-cols-4 items-center gap-x-3">
            <Label for="title" class="text-left">中文名稱</Label>
            <Field name="title" type="text" rules="required" class="col-span-3 form-field" v-model="tempAdminVenue.title" />
            <ErrorMessage name="title" class="errorText" />
          </div>
          <!-- 英文名稱 -->
          <div class="grid grid-cols-4 items-center gap-x-3">
            <Label for="eng_title" class="text-left">英文名稱</Label>
            <Field name="eng_title" type="text" rules="required" class="col-span-3 form-field" v-model="tempAdminVenue.eng_title" />
            <ErrorMessage name="eng_title" class="errorText" />
          </div>
          <!-- 地址 -->
          <div class="grid grid-cols-4 items-center gap-x-3">
            <Label for="address" class="text-left">地址</Label>
            <Field name="address" type="text" rules="required" class="col-span-3 form-field" v-model="tempAdminVenue.address" />
            <ErrorMessage name="address" class="errorText" />
          </div>
          <!-- 地區 -->
          <div class="grid grid-cols-4 items-center gap-x-3">
            <Label for="city" class="text-left">地區</Label>
            <Field name="city" rules="required" class="col-span-3" v-model="tempAdminVenue.city">
              <Select v-model="tempAdminVenue.city">
                <SelectTrigger class="w-full col-span-3">
                  <SelectValue placeholder="地區" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel class="tracking-wide">地區</SelectLabel>
                    <SelectItem v-for="city in adminCityOptions" :key="city" :value="city"> {{ city }} </SelectItem>
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
              <Input v-model="tempSeatArea" :disabled="canEditSeats" type="text" class="col-span-4" />
              <div class="col-span-2 flex justify-start px-1">
                <!-- add seat area -->
                <Button type="button" variant="none" :disabled="!tempSeatArea" class="w-10 hover:text-[#6366f1]" @click="addSeatArea(tempSeatArea)">
                  <span class="material-symbols-outlined hover:scale-110">add_circle</span>
                </Button>
                <!-- edit seat area -->
                <Button type="button" v-if="tempAdminVenue.seat_areas !== []" variant="none" class="w-10 hover:text-[#6366f1]" @click="editSeatOptions">
                  <span class="material-symbols-outlined hover:scale-110">edit</span>
                </Button>
              </div>
              <ErrorMessage name="seat_areas" class="errorText" style="padding: 0px" />
              <!-- show seat areas -->
              <Field name="seat_areas" rules="required" v-slot="{ field }" v-model="tempAdminVenue.seat_areas">
                <div v-bind="field" :value="tempAdminVenue.seat_areas" class="col-span-6 flex flex-wrap gap-x-1 gap-y-3">
                  <div v-for="(area, index) in tempAdminVenue.seat_areas" :key="index" class="relative me-4">
                    <p class="rounded-full bg-secondary px-3 py-1 text-sm">{{ area }}</p>
                    <Button type="button" v-if="canEditSeats" variant="none" class="w-10 h-10 absolute -top-3 -right-5 motion-safe:animate-bounce" @click="removeSeat(index)">
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
            <Field name="seat_amount" type="text" rules="required|numeric" class="col-span-3 form-field" v-model="tempAdminVenue.seat_amount" />
            <ErrorMessage name="seat_amount" class="errorText" />
          </div>
          <!-- Google 地圖連結 -->
          <div class="grid grid-cols-4 items-center gap-x-3">
            <Label for="map_link" class="text-left">地圖連結</Label>
            <Field name="map_link" type="text" rules="required|url" class="col-span-3 form-field" v-model="tempAdminVenue.map_link" />
            <ErrorMessage name="map_link" class="errorText" />
          </div>
          <span class="-mt-3 text-tiny text-black-60">※ 請輸入 Google 地圖連結</span>
        </section>
        <section class="grid grid-cols-1 gap-3">
          <!-- 圖片：橫的 -->
          <div class="grid grid-cols-4 items-center gap-x-3">
            <Label for="picture_horizontal" class="text-left"> 圖片 - 橫圖 </Label>
            <Field
              v-if="isNew"
              name="picture_horizontal"
              rules="required|size:3072"
              type="file"
              accept="image/png, image/jpeg, image/webp"
              class="fieldStyle col-span-3 hover:bg-accent"
              @change="readImg($event, 0, 'horizontal')" />
            <Field v-else name="picture_horizontal" type="file" accept="image/png, image/jpeg, image/webp" class="fieldStyle col-span-3 hover:bg-accent" @change="readImg($event, 0, 'horizontal')" />
            <ErrorMessage name="picture_horizontal" class="errorText" />
          </div>
          <img v-if="imageUrl[0]" :src="imageUrl[0]" alt="Preview Image" class="max-w-[150px] max-h-[150px]" />
          <span v-else class="-mt-3 text-tiny text-black-60">※ 圖片不能超過 3MB、圖片寬度必須大於 1800 像素</span>

          <!-- 圖片：方的 -->
          <div class="grid grid-cols-4 items-center gap-x-3">
            <Label for="picture_square" class="text-left"> 圖片 - 方圖 </Label>
            <Field
              v-if="isNew"
              name="picture_square"
              rules="required|size:3072"
              type="file"
              accept="image/png, image/jpeg, image/webp"
              class="fieldStyle col-span-3 hover:bg-accent"
              @change="readImg($event, 1, 'square')" />
            <Field v-else name="picture_square" type="file" accept="image/png, image/jpeg, image/webp" class="fieldStyle col-span-3 hover:bg-accent" @change="readImg($event, 1, 'square')" />
            <ErrorMessage name="picture_square" class="errorText" />
          </div>
          <img v-if="imageUrl[1]" :src="imageUrl[1]" alt="Preview Image" class="max-w-[150px] max-h-[150px]" />
          <span v-else class="-mt-3 text-tiny text-black-60">※ 圖片不能超過 3MB</span>

          <!-- 圖片：座位圖 -->
          <div class="grid grid-cols-4 items-center gap-x-3">
            <Label for="seat_picture" class="text-left"> 座位圖 </Label>
            <Field
              v-if="isNew"
              name="seat_picture"
              rules="required|size:3072"
              type="file"
              accept="image/png, image/jpeg, image/webp"
              class="fieldStyle col-span-3 hover:bg-accent"
              @change="readImg($event, 2, 'seat')" />
            <Field v-else name="seat_picture" type="file" accept="image/png, image/jpeg, image/webp" class="fieldStyle col-span-3 hover:bg-accent" @change="readImg($event, 2, 'seat')" />
            <ErrorMessage name="seat_picture" class="errorText" />
          </div>
          <img v-if="imageUrl[2]" :src="imageUrl[2]" alt="Preview Image" class="max-w-[150px] max-h-[150px]" />
          <span v-else class="-mt-3 text-tiny text-black-60">※ 圖片不能超過 3MB</span>

          <!-- 交通方式 -->
          <div class="flex flex-col item-start gap-x-3">
            <div class="flex justify-start items-center py-2">
              <p class="text-sm border-b-2 border-primary p-2 me-4">交通方式</p>
              <!-- 新增欄位-->
              <Button
                :disabled="!tempAdminVenue.transportation[tempAdminVenue.transportation.length - 1].type || !tempAdminVenue.transportation[tempAdminVenue.transportation.length - 1].info"
                type="button"
                variant="none"
                class="text-sm rounded-[10px] hover:scale-105 hover:text-[#6366f1]"
                @click="addInputGroup">
                <span class="material-symbols-outlined me-2">add_circle</span>
                <span>新增欄位</span>
              </Button>
            </div>
            <div v-for="(item, index) in tempAdminVenue.transportation" :key="index" class="flex flex-col items-start gap-2 pt-3">
              <!-- 交通方式：類型 -->
              <Label :for="`transportation_type_${index}`" class="text-left">類型</Label>
              <Field type="text" rules="required" class="form-field" v-model="item.type" :name="`transportation_type_${index}`" />
              <ErrorMessage :name="`transportation_type_${index}`" class="errorText" style="padding-left: 0px !important" />
              <!-- 交通方式：內容 -->
              <Label :for="`transportation_info_${index}`" class="text-left">內容</Label>
              <Field :name="`transportation_info_${index}`" rules="required" v-slot="{ field }" v-model="item.info">
                <textarea type="text" rows="3" cols="48" class="border border-[hsl(var(--input))] rounded-md focus-visible:outline-black focus-visible:rounded-[10px] p-3 text-sm" v-bind="field" />
              </Field>
              <ErrorMessage :name="`transportation_info_${index}`" class="errorText" style="padding-left: 0px !important" />
              <span v-if="index + 1 !== tempAdminVenue?.transportation.length" class="my-3">/</span>
            </div>
          </div>
        </section>
      </section>
      <DialogFooter>
        <DialogClose><Button variant="outline" class="px-6">取消</Button></DialogClose>
        <Button type="submit">送出</Button>
      </DialogFooter>
    </Form>
    <!-- 場地內容 end -->
  </DialogScrollContent>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DialogClose, DialogScrollContent, DialogFooter, DialogHeader, DialogDescription, DialogTitle } from '@/components/ui/dialog';
</script>

<script>
import { http, adminPath } from '@/api';
import { mapActions, mapState, mapWritableState } from 'pinia';
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
      width: '圖片寬度必須大於 1800 像素',
    },
  }),
  validateOnInput: true,
});

export default {
  data() {
    return {
      tempSeatArea: '',
      canEditSeats: false,
    };
  },
  methods: {
    readImg(event, index, type) {
      const file = event.target.files[0];
      if (file.size > 3 * 1024 ** 2) {
        return;
      }

      type === 'seat' ? (this.tempAdminVenue.seat_picture = file) : (this.tempAdminVenue.picture[`${type}`] = file);

      this.imageUrl[index] = URL.createObjectURL(file);
    },
    resetAddVenue() {
      this.imageUrl = [];
      this.tempSeatArea = '';
      this.canEditSeats = false;
      this.tempAdminVenue = {
        picture: {},
        seat_areas: [],
        transportation: [
          {
            type: '',
            info: '',
          },
        ],
      };
    },
    addSeatArea(seat) {
      this.tempAdminVenue.seat_areas.push(seat);
      this.tempSeatArea = '';
    },
    editSeatOptions() {
      this.canEditSeats ? (this.canEditSeats = false) : (this.canEditSeats = true);
    },
    removeSeat(id) {
      this.tempAdminVenue.seat_areas.splice(id, 1);
      if (this.tempAdminVenue.seat_areas.length === 0) this.canEditSeats = false;
    },
    addInputGroup() {
      this.tempAdminVenue.transportation.push({ type: '', info: '' });
    },
    onSubmit() {
      if (this.imageUrl.length !== 3) {
        toast({
          title: '請確認所有圖檔都上傳了',
        });
        return;
      }

      let url = adminPath.venues;
      if (!this.isNew) {
        url = `${adminPath.venues}/${this.tempAdminVenue.id}`;
        this.tempAdminVenue._method = 'PUT';
      }

      http
        .post(url, this.tempAdminVenue)
        .then(() => {
          if (this.isNew) {
            toast({
              title: '新增成功',
            });
          } else {
            toast({
              title: '編輯成功',
            });
          }

          this.isModalOpen = false;
          this.resetAddVenue();
          this.getAdminVenues();
        })
        .catch(() => {
          if (this.isNew) {
            toast({
              title: '新增失敗',
            });
          } else {
            toast({
              title: '編輯失敗',
            });
          }
        });
    },
    ...mapActions(useVenuesStore, ['getAdminVenues']),
  },
  computed: {
    ...mapState(useVenuesStore, ['adminVenues', 'adminCityOptions']),
    ...mapWritableState(useVenuesStore, ['adminCity', 'adminSearchText', 'isModalOpen', 'isNew', 'tempAdminVenue', 'imageUrl']),
  },
  watch: {
    isModalOpen: 'resetAddVenue',
  },
};
</script>

<style>
/* 使用 shadcn Input 樣式 */
.fieldStyle {
  @apply flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50;
}
</style>
