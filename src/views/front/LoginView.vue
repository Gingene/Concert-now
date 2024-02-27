<template>
  <Tabs default-value="login" class="px-0 mt-48 mb-24 w-[400px] container">
    <!-- Trigger: Login / Sign Up -->
    <TabsList class="grid grid-cols-2 w-full gap-1 p-0 px-6 h-12 text-white bg-transparent">
      <TabsTrigger value="login" class="rounded-b-none py-4 bg-accent data-[state=active]:bg-white data-[state=active]:text-black"> 登入 </TabsTrigger>
      <TabsTrigger value="signup" class="rounded-b-none py-4 bg-accent data-[state=active]:bg-white data-[state=active]:text-black"> 註冊 </TabsTrigger>
    </TabsList>

    <!-- Login -->
    <TabsContent value="login" class="relative m-0">
      <!-- background texts -->
      <span class="font-lato-display3 text-stroke absolute -right-[300px] -top-[170px]">Login</span>
      <span class="font-lato-display3 absolute -right-[340px] -top-[80px] drop-shadow-light">Login</span>
      <span class="font-lato-display3 text-stroke absolute -right-[380px] top-[10px]">Login</span>
      <Card class="p-2 border-4 rounded-[20px] shadow-[0_20px_50px_-5px_rgba(255,255,255,0.3)]">
        <!-- Card: header -->
        <CardHeader>
          <CardTitle>登入</CardTitle>
          <CardDescription> 若你還沒有加入會員，請先去註冊。 </CardDescription>
        </CardHeader>
        <!-- Card: content -->
        <CardContent class="space-y-2">
          <div class="space-y-1">
            <Label for="login-email" class="text-base"> 信箱 </Label>
            <Input id="login-email" v-model="userLogin.email" type="email" default-value="" class="text-base tracking-widest" />
          </div>
          <div class="space-y-1">
            <Label for="login-password" class="text-base"> 密碼 </Label>
            <Input id="login-password" v-model="userLogin.password" type="password" class="text-base tracking-widest" />
          </div>
        </CardContent>
        <!-- Card: footer -->
        <CardFooter class="flex justify-between items-center">
          <Button variant="btn2" class="my-2 py-6 px-8 rounded-[30px]" @click="login"> 確認送出 </Button>
          <!-- forget passwords -->
          <HoverCard>
            <HoverCardTrigger as-child>
              <Button class="underline decoration-solid underline-offset-8"> 忘記密碼 </Button>
            </HoverCardTrigger>
            <HoverCardContent class="w-80"> oops! 這是 demo 網頁，不許你忘記密碼喔 (´・Å・`) </HoverCardContent>
          </HoverCard>
        </CardFooter>
      </Card>
    </TabsContent>

    <!-- Sign Up -->
    <TabsContent value="signup" class="relative m-0">
      <!-- background texts -->
      <span class="font-lato-display3 text-stroke absolute -left-[390px] -top-[180px]">Sign up</span>
      <span class="font-lato-display3 absolute -left-[430px] -top-[85px] drop-shadow-light">Sign up</span>
      <span class="font-lato-display3 text-stroke absolute -left-[470px] top-[10px]">Sign up</span>
      <Card class="p-2 border-4 rounded-[20px] shadow-[0_20px_50px_-5px_rgba(255,255,255,0.3)]">
        <!-- Card: header -->
        <CardHeader>
          <CardTitle>註冊</CardTitle>
          <CardDescription> 若你已有會員帳號，可以直接到登入頁面。 </CardDescription>
        </CardHeader>
        <!-- Card: content -->
        <CardContent class="space-y-2">
          <div class="space-y-1">
            <Label for="signup-name" class="text-base"> 名稱 </Label>
            <Input id="signup-name" v-model="userSignUp.name" class="text-base tracking-widest" />
          </div>
          <div class="space-y-1">
            <Label for="signup-email" class="text-base"> 信箱 </Label>
            <Input id="signup-email" v-model="userSignUp.email" type="email" class="text-base tracking-widest" />
          </div>
          <div class="space-y-1">
            <Label for="signup-password" class="text-base"> 密碼 </Label>
            <Input id="signup-password" v-model="userSignUp.password" type="password" class="text-base tracking-widest" />
          </div>
        </CardContent>
        <!-- Card: footer -->
        <CardFooter>
          <Button variant="btn2" class="my-2 py-6 px-8 rounded-[30px]" @click="signup">確認送出</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
</script>

<script>
import axios from 'axios';
const { VITE_APP_SERVICE_API } = import.meta.env;
export default {
  data() {
    return {
      userSignUp: {
        name: '',
        email: '',
        password: '',
      },
      userLogin: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signup() {
      axios
        .post(`${VITE_APP_SERVICE_API}/api/register`, this.userSignUp)
        .then((res) => {
          alert('註冊成功！可以去登入了ヽ(●´∀`●)ﾉ');
          this.userSignUp.name = '';
          this.userSignUp.email = '';
          this.userSignUp.password = '';
          // window.location = '@/login#/login';
        })
        .catch((err) => {
          console.log(err);
          alert('註冊失敗！');
        });
    },
    login() {
      axios
        .post(`${VITE_APP_SERVICE_API}/api/login`, this.userLogin)
        .then((res) => {
          const { data } = res.data;
          document.cookie = `AccessToken=${data.access_token}; path=/`;
          localStorage.setItem('user', JSON.stringify(res.data.data.user));
          alert('登入成功！');
          this.userLogin.email = '';
          this.userLogin.password = '';
          // window.location = '@/me';
          // console.log(this.$router);
          this.$router.push('/member');
        })
        .catch((err) => {
          console.log(err);
          alert('登入失敗！');
          this.userLogin.password = '';
        });
    },
  },
};
</script>
