<template>
  <main class="container flex justify-center items-center py-24 overflow-hidden min-h-[80vh]">
    <Tabs :default-value="defaultPage" class="w-full flex flex-col lg:flex-row justify-center items-center">
      <!-- Tabs: Login / Sign Up -->
      <TabsList class="relative w-full lg:w-[60px] h-full lg:h-[250px] bg-transparent">
        <TabsTrigger
          @click="$router.push({ name: 'login' })"
          value="login"
          class="items-end lg:items-center bg-black lg:h-[150px] lg:w-[60px] text-[12px] lg:text-[14px] rounded-none rounded-t-[25px] xs:rounded-t-[30px] lg:rounded-l-[30px] lg:rounded-r-none absolute -top-9 xs:-top-10 left-[12%] md:left-[15%] lg:left-0 lg:right-0 px-5 xs:px-10 lg:px-5 data-[state=active]:bg-secondary">
          <div class="lg:-rotate-90 space-x-3 lg:space-x-5 py-2 xs:py-3">
            <span>登入</span>
            <span>LOGIN</span>
          </div>
        </TabsTrigger>
        <TabsTrigger
          @click="$router.push({ name: 'signup' })"
          value="signup"
          class="items-end bg-black lg:h-[150px] lg:w-[60px] text-[12px] lg:text-[14px] rounded-none rounded-t-[25px] xs:rounded-t-[30px] lg:rounded-l-[30px] lg:rounded-r-none absolute -top-9 xs:-top-10 lg:top-28 left-[calc(12%+100px)] xs:left-[calc(12%+140px)] md:left-[calc(15%+140px)] lg:left-0 lg:right-0 px-5 xs:px-10 lg:px-5 data-[state=active]:bg-secondary">
          <div class="lg:-rotate-90 lg:w-[10px] space-x-3 lg:space-x-5 py-2 xs:py-3">
            <span>註冊</span>
            <span>SIGNUP</span>
          </div>
        </TabsTrigger>
      </TabsList>
      <!-- Content: Login -->
      <TabsContent value="login" class="mt-0 bg-none w-full sm:w-[600px] md:w-[680px]">
        <Card class="flex flex-col sm:flex-row p-3 xs:p-5 sm:p-3 rounded-[40px] border border-white backdrop-blur-[5px] bg-primary/20 overflow-hidden">
          <CardHeader class="sm:w-[42%] space-y-3 border-b sm:border-b-0 sm:border-e border-dashed pl-4 pr-6">
            <CardTitle>
              <h3 class="text-[24px] lg:text-[30px] xl:text-[34px] font-light font-lato">登入</h3>
              <span class="font-lato text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px]">LOGIN</span>
            </CardTitle>
            <CardDescription class="flex-1 text-[12px]"> 若你還沒有加入會員，請先去註冊。 </CardDescription>
            <div class="hidden text-[12px] lg:text-[14px] sm:flex sm:justify-between sm:items-end">
              <span class="font-lato">CONCERT NOW.</span>
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 28 L86 86" stroke="white" stroke-width="8" stroke-linecap="square" stroke-linejoin="round" />
                <path d="M90 28 V90 H28" stroke="white" stroke-width="8" stroke-linecap="square" stroke-linejoin="round" />
              </svg>
            </div>
          </CardHeader>
          <CardContent class="sm:w-[58%] sm:h-[480px] flex flex-col justify-between p-4 sm:p-6 md:px-12 lg:px-8 space-y-3">
            <!-- Google 登入 -->
            <div class="text-[12px] lg:text-[14px] flex justify-between items-center space-x-3 pt-4 sm:pt-0 md:p-0">
              <Button type="submit" variant="white-outline" @click="handleGoogleAuthCodeLogin" class="space-x-4 rounded-[40px] border-[1px] md:border-2">
                <font-awesome-icon :icon="['fab', 'google']" />
                <span>使用 Google 進行登入</span>
              </Button>
              <span class="ml-auto lg:text-sm">/ OR</span>
            </div>
            <!-- 一般登入 -->
            <form @submit="method">
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
                    <Input type="password" v-bind="componentField" autocomplete="current-password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <div class="flex justify-between items-end mt-6 sm:mt-10 md:mt-8 lg:mt-10 space-y-3">
                <Popover>
                  <PopoverTrigger class="text-[12px] lg:text-[14px] underline decoration-solid underline-offset-8 self-end bg-transparent hover:-translate-y-1 px-0 mb-1"> 忘記密碼 </PopoverTrigger>
                  <PopoverContent class="ml-2 text-[12px] lg:text-[14px] w-80"> oops! 這是 demo 網頁，不許你忘記密碼喔 (´・Å・`) </PopoverContent>
                </Popover>
                <Button variant="white-outline" class="text-[12px] lg:text-[14px] px-6 rounded-[40px] mb-1 mt-6 ml-auto"> 確認送出 </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter class="w-[10px] p-3 sm:p-0 sm:-mr-2 sm:pl-4">
            <div class="flex justify-start items-end sm:rotate-90 space-x-3 -ml-7 text-[12px]">
              <span class="text-nowrap">登入</span>
              <span class="text-nowrap">LOGIN</span>
              <span class="text-nowrap">登入</span>
              <span class="text-nowrap">LOGIN</span>
              <span class="text-nowrap">登入</span>
              <span class="text-nowrap">LOGIN</span>
              <span class="text-nowrap">登入</span>
              <span class="text-nowrap">LOGIN</span>
              <span class="text-nowrap">登入</span>
              <span class="text-nowrap">LOGIN</span>
              <span class="text-nowrap">登入</span>
              <span class="text-nowrap">LOGIN</span>
              <span class="text-nowrap">登入</span>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
      <!-- Content: Sign up -->
      <TabsContent value="signup" class="mt-0 bg-none w-full sm:w-[600px] md:w-[680px]">
        <Card class="flex flex-col sm:flex-row p-3 xs:p-5 sm:p-3 rounded-[40px] border border-white backdrop-blur-[5px] bg-primary/20 overflow-hidden">
          <CardHeader class="sm:w-[42%] space-y-3 border-b sm:border-b-0 sm:border-e border-dashed pl-4 pr-6">
            <CardTitle>
              <h3 class="text-[24px] lg:text-[30px] xl:text-[34px] font-light font-lato">註冊</h3>
              <span class="font-lato text-[28px] md:text-[36px] lg:text-[44px] xl:text-[50px]">SIGNUP</span>
            </CardTitle>
            <CardDescription class="flex-1 text-[12px]"> 若你已有會員帳號，可以直接到登入頁面。 </CardDescription>
            <div class="hidden text-sm sm:flex sm:justify-between sm:items-end">
              <span class="font-lato text-[12px] lg:text-[14px]">CONCERT NOW.</span>
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 28 L86 86" stroke="white" stroke-width="8" stroke-linecap="square" stroke-linejoin="round" />
                <path d="M90 28 V90 H28" stroke="white" stroke-width="8" stroke-linecap="square" stroke-linejoin="round" />
              </svg>
            </div>
          </CardHeader>
          <CardContent class="sm:w-[58%] sm:h-[480px] flex flex-col justify-between p-4 sm:p-6 md:px-12 lg:px-8 space-y-3">
            <!-- Google 登入 -->
            <div class="text-[12px] lg:text-[14px] flex justify-between items-center space-x-3 pt-4 sm:pt-0 md:p-0">
              <Button type="submit" variant="white-outline" @click="handleGoogleAuthCodeLogin" class="space-x-4 rounded-[40px] border-[1px] md:border-2">
                <font-awesome-icon :icon="['fab', 'google']" />
                <span>使用 Google 進行登入</span>
              </Button>
              <span class="ml-auto lg:text-sm">/ OR</span>
            </div>
            <!-- 一般註冊 -->
            <form @submit="method" class="flex flex-col">
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
              <div class="my-2 mt-4 sm:mt-6">
                <slot></slot>
                <div class="flex justify-end">
                  <Button variant="white-outline" class="text-[12px] lg:text-[14px] px-6 rounded-[40px] mb-1 mt-6 ml-auto"> 確認送出 </Button>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter class="w-[10px] p-3 sm:p-0 sm:-mr-2 sm:pl-4">
            <div class="flex justify-start items-end sm:rotate-90 space-x-3 -ml-7 text-[12px]">
              <span class="text-nowrap">註冊</span>
              <span class="text-nowrap">SIGNUP</span>
              <span class="text-nowrap">註冊</span>
              <span class="text-nowrap">SIGNUP</span>
              <span class="text-nowrap">註冊</span>
              <span class="text-nowrap">SIGNUP</span>
              <span class="text-nowrap">註冊</span>
              <span class="text-nowrap">SIGNUP</span>
              <span class="text-nowrap">註冊</span>
              <span class="text-nowrap">SIGNUP</span>
              <span class="text-nowrap">註冊</span>
              <span class="text-nowrap">SIGNUP</span>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    <!-- Decoration -->
    <div class="opacity-40 sm:hidden rotate-0 -z-30 fixed top-0 font-lato-display2 text-[150px]" style="-webkit-text-stroke: 1px var(--black-85)">
      <div class="-mb-8 text-transparent">HELLO</div>
      <div class="-mb-8 text-white/10">HELLO</div>
      <div class="-mb-8 text-transparent">HELLO</div>
      <div class="-mb-8 text-white/10">HELLO</div>
      <div class="-mb-8 text-transparent">HELLO</div>
      <div class="-mb-8 text-white/10">HELLO</div>
      <div class="-mb-8 text-transparent">HELLO</div>
      <div class="-mb-8 text-white/10">HELLO</div>
    </div>
    <div
      class="opacity-40 hidden sm:inline rotate-0 -z-30 fixed top-0 font-lato-display2 text-[140px] md:text-[160px] lg:text-[200px] xl:text-[250px]"
      style="-webkit-text-stroke: 1px var(--black-85)">
      <div class="-mb-8 lg:-mb-20 text-transparent">WELCOME</div>
      <div class="-mb-8 lg:-mb-20 text-white/10">WELCOME</div>
      <div class="-mb-8 lg:-mb-20 text-transparent">WELCOME</div>
      <div class="-mb-8 lg:-mb-20 text-white/10">WELCOME</div>
      <div class="-mb-8 lg:-mb-20 text-transparent">WELCOME</div>
      <div class="-mb-8 lg:-mb-20 text-white/10">WELCOME</div>
      <div class="-mb-8 lg:-mb-20 text-transparent">WELCOME</div>
      <div class="-mb-8 lg:-mb-20 text-white/10">WELCOME</div>
    </div>
  </main>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ref } from 'vue';
import { googleTokenLogin } from 'vue3-google-login';
import { http, path } from '@/api';
import { useRouter } from 'vue-router';
import { useToast } from '@/components/ui/toast/use-toast';

const authData = ref();
const { toast } = useToast();
const router = useRouter();
const { VITE_CLIENT_ID } = import.meta.env;

const handleGoogleAuthCodeLogin = () => {
  googleTokenLogin({
    clientId: VITE_CLIENT_ID,
  }).then((response) => {
    authData.value = response;
    http.post(path.auth, { token: authData.value.access_token }).then((res) => {
      const data = res.data.data;
      document.cookie = `AccessToken=${data.access_token}; path=/`;
      localStorage.setItem('user', JSON.stringify(data.user));
      toast({
        title: '登入成功',
        // description: `信箱${values.email}, 密碼${values.password}`,
        // h function 是用來渲染html用的如果沒有需要產生DOM的話用上面的字串就可以了，沒有要讓使用者看到表單裡的資料的話callback的values也可以直接去掉
        // description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
      });
      router.push('/member');
    });
  });
};

defineProps(['defaultPage']);
const emits = defineEmits(['method']);

const method = (values) => {
  emits('method', values);
};
</script>
