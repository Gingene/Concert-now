<template>
  <section class="container">
    <h2>表單驗證測試</h2>
    <div>
      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>信箱:</FormLabel>
            <FormControl>
              <Input type="email" placeholder="請輸入信箱" v-bind="componentField" autocomplete="on" />
            </FormControl>
            <FormDescription> 填寫信箱 </FormDescription>
            <FormMessage class="text-lime-300" />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>密碼:</FormLabel>
            <FormControl>
              <Input type="password" placeholder="請輸入密碼" v-bind="componentField" autocomplete="current-password" />
            </FormControl>
            <FormDescription> 填寫密碼 </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit" variant="btn1"> 送出訂單 </Button>
      </form>
    </div>
  </section>
</template>
<script setup>
import { h } from 'vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { useRouter } from 'vue-router';

import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { http, path } from '@/api';

import { useToast } from '@/components/ui/toast/use-toast';
const router = useRouter();

const { toast } = useToast();

// 錯誤訊息文字顏色可以直接在元件外改class或是改/ui/form/FormMessage.vue的text-destructive
const formSchema = toTypedSchema(
  z.object({
    email: z.string({ required_error: '必填' }).email('信箱格式不正確'),
    password: z.string({ required_error: '必填' }).min(8, { message: '密碼至少為8碼' }),
  }),
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  toast({
    title: '登入中，請稍等',
    // description: `信箱${values.email}, 密碼${values.password}`,
    // h function 是用來渲染html用的如果沒有需要產生DOM的話用上面的字串就可以了，沒有要讓使用者看到表單裡的資料的話callback的values也可以直接去掉
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  });
  login(values);
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
        description: '',
      });

      router.push('/member');
    })
    .catch((err) => {
      console.error(err);
      toast({
        title: '登入失敗',
        description: '',
      });
    });
};
</script>

<script>
export default {};
</script>
