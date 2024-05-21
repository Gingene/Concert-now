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
  class="absolute right-0 -bottom-5
  text-[12px]
  font-medium text-tiffany"/>
</template>
