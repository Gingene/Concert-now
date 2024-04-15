<script setup>
import { ErrorMessage } from 'vee-validate';
import { toValue } from 'vue';
import { useFormField } from './useFormField';

const { name, formMessageId } = useFormField();
</script>

<template>
  <ErrorMessage 
  :id="formMessageId" 
  as="p" 
  :name="toValue(name)" 
  class="absolute right-0 top-0 
  py-2 px-4 
  text-[12px] lg:text-[14px]
  font-medium text-tiffany bg-primary/70 backdrop-blur-xl border-0 rounded-full"/>
</template>
