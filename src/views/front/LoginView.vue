<template>
  <LoginComponent :defaultPage="'login'" @method="handleLogin" />
</template>

<script setup>
import LoginComponent from '@/components/front/login/loginComponent.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { http, path } from '@/api';
import { useRouter } from 'vue-router';
import { useToast } from '@/components/ui/toast/use-toast';
const { toast } = useToast();
const router = useRouter();

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
      router.push('/member');
    })
    .catch(() => {
      toast({
        title: '登入失敗，請再次確認資料是否正確。',
      });
      this.userLogin.password = '';
    });
};

const handleLogin = form.handleSubmit((values) => {
  login(values);
  form.resetForm();
});
</script>
