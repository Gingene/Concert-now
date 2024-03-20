<template>
  <div class="min-h-[80vh]">
    <div class="absolute top-36 md:top-40 -z-10 w-full h-[450px] md:h-[500px] lg:h-[600px] bg-gradient-to-bl from-tiffany from-10% via-pink to-primary opacity-60 blur-[100px] rounded-full"></div>
    <Tabs default-value="login" class="px-0 pt-16 xs:pt-28 pb-24 sm:py-32 lg:py-40 container w-[300px] xs:w-[400px] md:w-[500px] lg:w-[600px]">
      <!-- Trigger: Login / Sign Up -->
      <TabsList class="grid grid-cols-2 w-full gap-1 p-0 px-7 h-10 md:h-12 lg:h-16 text-white bg-transparent">
        <TabsTrigger
          value="login"
          class="rounded-[24px] rounded-b-none py-3 md:py-4 lg:py-6 bg-black-90 text-[10px] md:text-[14px] lg:text-[16px] data-[state=active]:bg-white/[80%] data-[state=active]:text-black">
          登入
        </TabsTrigger>
        <TabsTrigger
          value="signup"
          class="rounded-[24px] rounded-b-none py-3 md:py-4 lg:py-6 bg-black-90 text-[10px] md:text-[14px] lg:text-[16px] data-[state=active]:bg-white/[80%] data-[state=active]:text-black">
          註冊
        </TabsTrigger>
      </TabsList>

      <!-- Login -->
      <TabsContent value="login" class="relative m-0">
        <Card class="rounded-[40px] bg-shadow-trans-text p-3 sm:p-5 md:p-8 lg:p-12">
          <span class="-z-30 blur-[12px] md:blur-[16px] font-black text-white/[0.5] absolute bottom-10 text-[90px] xs:text-[115px] md:text-[140px] lg:text-[160px]"> LOGIN </span>
          <!-- Card: header -->
          <CardHeader class="py-4 lg:py-6">
            <CardTitle class="text-lg md:text-[24px] lg:text-[30px] text-white"> 登入 </CardTitle>
            <CardDescription class="text-[10px] lg:text-[14px] text-white/[50%]"> 若你還沒有加入會員，請先去註冊。 </CardDescription>
          </CardHeader>
          <!-- Card: content -->
          <CardContent class="flex flex-col pb-5 md:pb-8 relative">
            <form @submit="handleLogin">
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
                <Button type="submit" variant="white-outline" class="text-[12px] px-6 md:py-6 md:text-[14px] lg:text-[18px] lg:p-8 rounded-[40px]"> 確認送出 </Button>
                <HoverCard>
                  <HoverCardTrigger as-child>
                    <Button class="text-[12px] lg:text-[18px] underline decoration-solid underline-offset-8 self-end bg-transparent hover:bg-transparent hover:-translate-y-2 px-0"> 忘記密碼 </Button>
                  </HoverCardTrigger>
                  <HoverCardContent class="w-80"> oops! 這是 demo 網頁，不許你忘記密碼喔 (´・Å・`) </HoverCardContent>
                </HoverCard>
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
          <!-- Card: header -->
          <CardHeader class="py-4 lg:py-6">
            <CardTitle class="text-lg md:text-[24px] lg:text-[30px] text-white"> 註冊 </CardTitle>
            <CardDescription class="text-[10px] lg:text-[14px] text-white/[50%]"> 若你已有會員帳號，可以直接到登入頁面。 </CardDescription>
          </CardHeader>
          <!-- Card: content -->
          <CardContent class="flex flex-col pb-5 md:pb-8 relative">
            <form @submit="handleSignup">
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
              <Button type="submit" variant="white-outline" class="text-[12px] md:text-[14px] lg:text-[18px] px-6 md:py-6 lg:p-8 rounded-[40px] my-2 xs:mt-6 sm:mt-6 md:mt-8 lg:mt-10"> 確認送出 </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { http, path } from '@/api';
import { useRouter } from 'vue-router';
import { useToast } from '@/components/ui/toast/use-toast';
const { toast } = useToast();
const router = useRouter();

const loginFormSchema = toTypedSchema(
  z.object({
    email: z.string({ required_error: '必填' }),
    password: z.string({ required_error: '必填' }),
  }),
);

const signupFormSchema = toTypedSchema(
  z
    .object({
      name: z.string({ required_error: '必填' }).min(3, { message: '名稱至少3個字' }).max(20, { message: '需要少於20個字' }),
      email: z.string({ required_error: '必填' }).email('信箱格式不正確'),
      password: z.string({ required_error: '必填' }).min(8, { message: '密碼至少為8碼' }),
      confirm: z.string({ required_error: '必填' }),
    })
    .refine((data) => data.password === data.confirm, {
      message: '密碼不相符',
      path: ['confirm'],
    }),
);

// useForm 使用的 Schema 有最新會覆蓋前面的狀況
const signupForm = useForm({
  validationSchema: signupFormSchema,
});
const loginForm = useForm({
  validationSchema: loginFormSchema,
});

const handleLogin = loginForm.handleSubmit((values) => {
  console.log(values);
  // login(values);
  // loginForm.resetForm();
});

const handleSignup = signupForm.handleSubmit((values) => {
  console.log(values);
  // signup(values);
  // signupForm.resetForm();
});

const login = (user) => {
  http
    .post(path.login, user)
    .then((res) => {
      const { data } = res.data;
      document.cookie = `AccessToken=${data.access_token}; path=/`;
      localStorage.setItem('user', JSON.stringify(res.data.data.user));
      toast({
        title: '登入成功',
      });
      router.push('/member');
    })
    .catch(() => {
      toast({
        title: '登入失敗，請再次確認資料是否正確。',
      });
    });
};

const signup = (user) => {
  http
    .post(path.register, user)
    .then((res) => {
      toast({
        title: '註冊成功！可以去登入了ヽ(●´∀`●)ﾉ',
      });
      location.reload();
    })
    .catch(() => {
      toast({
        title: '註冊失敗，請再次確認資料是否正確。',
      });
      alert('註冊失敗！');
    });
};
</script>
