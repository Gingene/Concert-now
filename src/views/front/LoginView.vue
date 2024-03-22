<template>
  <LoginComponent :defaultPage="'login'" @method="handleLogin" class="overflow-hidden" />
</template>

<script setup>
import LoginComponent from '@/components/front/LoginComponent.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { http, path } from '@/api';
import { useRouter } from 'vue-router';
import { useToast } from '@/components/ui/toast/use-toast';
const { toast } = useToast();
const router = useRouter();

// 錯誤訊息文字顏色可以直接在元件外改class或是改/ui/form/FormMessage.vue的text-destructive
const formSchema = toTypedSchema(
  z.object({
    email: z.string({ required_error: '必填' }),
    password: z.string({ required_error: '必填' }),
  }),
);

const form = useForm({
  validationSchema: formSchema,
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
        // description: `信箱${values.email}, 密碼${values.password}`,
        // h function 是用來渲染html用的如果沒有需要產生DOM的話用上面的字串就可以了，沒有要讓使用者看到表單裡的資料的話callback的values也可以直接去掉
        // description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
      });
      router.push('/member');
    })
    .catch(() => {
      toast({
        title: '登入失敗，請再次確認資料是否正確。',
      });
    });
};

const handleLogin = form.handleSubmit((values) => {
  login(values);
  form.resetForm();
});
</script>
