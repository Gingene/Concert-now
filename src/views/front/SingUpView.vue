<template>
  <LoginComponent :defaultPage="'signup'" @method="handleSignup" />
</template>

<script setup>
import LoginComponent from '@/components/front/login/loginComponent.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { http, path } from '@/api';
import { useRouter } from 'vue-router';
const router = useRouter();

const formSchema = toTypedSchema(
  z.object({
    name: z.string({ required_error: '必填' }).max(20, { message: '需要少於20個字' }),
    email: z.string({ required_error: '必填' }).email('信箱格式不正確'),
    password: z.string({ required_error: '必填' }).min(8, { message: '密碼至少為8碼' }),
  }),
);

const form = useForm({
  validationSchema: formSchema,
});

const signup = (user) => {
  console.log(user);
  http
    .post(path.register, user)
    .then((res) => {
      alert('註冊成功！可以去登入了ヽ(●´∀`●)ﾉ');
      router.push({ name: 'login' });
    })
    .catch((err) => {
      console.log(err);
      alert('註冊失敗！');
    });
};

const handleSignup = form.handleSubmit((values) => {
  // loginValue = values;
  // this.$ref.form.reset();
  console.log(values);
  signup(values);

  form.resetForm();
});
</script>
