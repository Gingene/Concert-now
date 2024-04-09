<template>
  <main class="min-h-[80vh]">
    <div class="absolute top-36 md:top-40 -z-10 w-full h-[450px] md:h-[500px] lg:h-[600px] bg-gradient-to-bl from-tiffany from-10% via-pink to-primary opacity-60 blur-[100px] rounded-full"></div>
    <Tabs :default-value="defaultPage" class="px-0 pt-16 xs:pt-28 pb-24 sm:py-32 lg:py-40 container w-[300px] xs:w-[400px] md:w-[500px] lg:w-[600px]">
      <!-- Trigger: Login / Sign Up -->
      <TabsList class="grid grid-cols-2 w-full gap-1 p-0 px-7 h-10 md:h-12 lg:h-16 text-white bg-transparent">
        <TabsTrigger
          @click="$router.push({ name: 'login' })"
          value="login"
          class="rounded-[24px] rounded-b-none py-3 md:py-4 lg:py-6 bg-black-90 text-[10px] md:text-[14px] lg:text-[16px] data-[state=active]:bg-white/[80%] data-[state=active]:text-black">
          登入
        </TabsTrigger>
        <TabsTrigger
          @click="$router.push({ name: 'signup' })"
          value="signup"
          class="rounded-[24px] rounded-b-none py-3 md:py-4 lg:py-6 bg-black-90 text-[10px] md:text-[14px] lg:text-[16px] data-[state=active]:bg-white/[80%] data-[state=active]:text-black">
          註冊
        </TabsTrigger>
      </TabsList>

      <!-- Login -->
      <TabsContent value="login" class="relative m-0">
        <Card class="rounded-[40px] bg-shadow-trans-text p-3 sm:p-5 md:p-8 lg:p-12">
          <span class="-z-30 blur-[12px] md:blur-[16px] font-black text-white/[0.5] absolute bottom-10 text-[90px] xs:text-[115px] md:text-[140px] lg:text-[160px]"> LOGIN </span>
          <CardHeader class="py-4 lg:py-6">
            <CardTitle class="text-lg md:text-[24px] lg:text-[30px] text-white"> 登入 </CardTitle>
            <CardDescription class="text-[10px] lg:text-[14px] text-white/[50%]"> 若你還沒有加入會員，請先去註冊。 </CardDescription>
          </CardHeader>
          <CardContent class="flex flex-col pb-5 md:pb-8 relative">
            <form @submit="method">
              <FormField v-slot="{ componentField }" name="email" class="space-y-4">
                <FormItem>
                  <FormLabel>信箱</FormLabel>
                  <FormControl>
                    <Input type="email" v-bind="componentField" autocomplete="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="password">
                <FormItem>
                  <FormLabel>密碼</FormLabel>
                  <FormControl>
                    <Input type="password" v-bind="componentField" autocomplete="current-password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <div class="flex justify-between items-end mt-2 xs:mt-6 md:mt-8 sm:mt-10 lg:mt-10">
                <Button variant="white-outline" class="text-[12px] px-6 md:py-6 md:text-[14px] lg:text-[18px] lg:p-8 rounded-[40px]"> 確認送出 </Button>
                <Popover>
                  <PopoverTrigger class="text-[12px] lg:text-[18px] underline decoration-solid underline-offset-8 self-end bg-transparent hover:-translate-y-1 px-0"> 忘記密碼 </PopoverTrigger>
                  <PopoverContent class="w-80"> oops! 這是 demo 網頁，不許你忘記密碼喔 (´・Å・`) </PopoverContent>
                </Popover>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <!-- Sign Up -->
      <TabsContent value="signup" class="relative m-0">
        <Card class="rounded-[40px] bg-shadow-trans-text p-3 sm:p-5 md:p-8 lg:p-12">
          <span
            class="tracking-wider -z-30 blur-[12px] md:blur-[16px] font-black text-white/[0.5] absolute left-8 xs:left-10 md:left-12 lg:left-[70px] bottom-[80px] text-[90px] xs:text-[120px] md:text-[150px] lg:text-[170px]">
            JOIN
          </span>
          <CardHeader class="py-4 lg:py-6">
            <CardTitle class="text-lg md:text-[24px] lg:text-[30px] text-white"> 註冊 </CardTitle>
            <CardDescription class="text-[10px] lg:text-[14px] text-white/[50%]"> 若你已有會員帳號，可以直接到登入頁面。 </CardDescription>
          </CardHeader>
          <CardContent class="flex flex-col pb-5 md:pb-8 relative">
            <form @submit="method">
              <FormField v-slot="{ componentField }" name="name">
                <FormItem>
                  <FormLabel>名稱</FormLabel>
                  <FormControl>
                    <Input type="text" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="email">
                <FormItem>
                  <FormLabel>信箱</FormLabel>
                  <FormControl>
                    <Input type="email" v-bind="componentField" autocomplete="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="password">
                <FormItem>
                  <FormLabel>密碼</FormLabel>
                  <FormControl>
                    <Input type="password" v-bind="componentField" autocomplete="new-password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="confirm">
                <FormItem>
                  <FormLabel>確認密碼</FormLabel>
                  <FormControl>
                    <Input type="password" v-bind="componentField" autocomplete="new-password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <slot></slot>
              <Button variant="white-outline" class="text-[12px] md:text-[14px] lg:text-[18px] px-6 md:py-6 lg:p-8 rounded-[40px] my-2 xs:mt-6 sm:mt-6 md:mt-8 lg:mt-10"> 確認送出 </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </main>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

defineProps(['defaultPage']);
const emits = defineEmits(['method']);

const method = (values) => {
  emits('method', values);
};
</script>
