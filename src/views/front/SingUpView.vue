<template>
  <LoginComponent :defaultPage="'signup'" @method="handleSignup">
    <div>
      <vue-turnstile theme="dark" :site-key="VITE_SITE_KEY" v-model="token" />
    </div>
  </LoginComponent>
</template>

<script setup>
import LoginComponent from '@/components/front/LoginComponent.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { http, path } from '@/api';
import { useRouter } from 'vue-router';
import { useToast } from '@/components/ui/toast/use-toast';
import { ref } from 'vue';
import VueTurnstile from 'vue-turnstile';
const { VITE_SITE_KEY } = import.meta.env;

const { toast } = useToast();

const token = ref('');

const router = useRouter();

const formSchema = toTypedSchema(
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

const form = useForm({
  validationSchema: formSchema,
});

const signup = (user) => {
  http
    .post(path.register, { ...user, token: token.value })
    .then(() => {
      toast({
        title: '註冊成功！可以去登入了ヽ(●´∀`●)ﾉ',
      });
      router.push({ name: 'login' });
    })
    .catch(() => {
      toast({
        title: '註冊失敗，請再次確認資料是否正確。',
      });
      alert('註冊失敗！');
    });
};

const handleSignup = form.handleSubmit((values) => {
  const data = { ...values };
  delete data.confirm;
  signup(data);
  form.resetForm();
});
</script>
