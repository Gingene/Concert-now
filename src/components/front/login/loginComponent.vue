<template>
  <Tabs :default-value="defaultPage" class="min-h-full px-0 mt-48 mb-24 w-[400px] container">
    <!-- Trigger: Login / Sign Up -->
    <TabsList class="grid grid-cols-2 w-full gap-1 p-0 px-6 h-12 text-white bg-transparent">
      <TabsTrigger @click="$router.push({ name: 'login' })" value="login" class="rounded-b-none py-4 bg-black-85 data-[state=active]:bg-white data-[state=active]:text-black"> 登入 </TabsTrigger>
      <TabsTrigger @click="$router.push({ name: 'signup' })" value="signup" class="rounded-b-none py-4 bg-black-85 data-[state=active]:bg-white data-[state=active]:text-black"> 註冊 </TabsTrigger>
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
        <CardContent class="flex flex-col">
          <form @submit="method">
            <FormField v-slot="{ componentField }" name="email" class="space-y-4">
              <FormItem>
                <FormLabel>信箱</FormLabel>
                <FormControl>
                  <Input 
                  type="email" 
                  v-bind="componentField" 
                  autocomplete="email" 
                  class="tracking-widest" />
                </FormControl>
                <FormMessage class="text-tiffany" />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="password">
              <FormItem>
                <FormLabel>密碼</FormLabel>
                <FormControl>
                  <Input 
                  type="password" 
                  v-bind="componentField" 
                  autocomplete="password" 
                  class="tracking-widest" />
                </FormControl>
                <FormMessage class="text-tiffany" />
              </FormItem>
            </FormField>
            <Button variant="white-outline" class="mt-5"> 確認送出 </Button>
          </form>
          <HoverCard>
            <HoverCardTrigger as-child>
              <Button class="underline decoration-solid underline-offset-8 self-end"> 忘記密碼 </Button>
            </HoverCardTrigger>
            <HoverCardContent class="w-80"> oops! 這是 demo 網頁，不許你忘記密碼喔 (´・Å・`) </HoverCardContent>
          </HoverCard>
        </CardContent>
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
        <CardContent class="flex flex-col">
          <form @submit="method">
            <FormField v-slot="{ componentField }" name="name">
              <FormItem>
                <FormLabel>名稱</FormLabel>
                <FormControl>
                  <Input 
                  type="text" 
                  v-bind="componentField" 
                  class="tracking-widest" />
                </FormControl>
                <FormMessage class="text-tiffany" />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel>信箱</FormLabel>
                <FormControl>
                  <Input 
                  type="email" 
                  v-bind="componentField" 
                  autocomplete="email" 
                  class="tracking-widest" />
                </FormControl>
                <FormMessage class="text-tiffany" />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="password">
              <FormItem>
                <FormLabel>密碼</FormLabel>
                <FormControl>
                  <Input 
                  type="password" 
                  v-bind="componentField" 
                  autocomplete="password" 
                  class="tracking-widest" />
                </FormControl>
                <FormMessage class="text-tiffany" />
              </FormItem>
            </FormField>
            <Button type="submit" variant="white-outline" class="mt-5"> 送出訂單 </Button>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const props = defineProps(['defaultPage']);
const emits = defineEmits(['method']);

const method = (values) => {
  emits('method', values);
};
</script>

<script>
export default {
  methods: {
    method(test) {
      this.$emit('method', test);
    },
  },
};
</script>

<style scoped>
</style>
