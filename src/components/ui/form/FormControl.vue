<script setup>
import { Slot } from 'radix-vue';
import { useFormField } from './useFormField';

const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
</script>

<template>
  <Slot class="focus-visible:ring-pink tracking-[.25em] bg-transparent md:py-6 md:px-5 lg:py-8 rounded-[40px] lg:text-[20px]" :id="formItemId" :aria-describedby="!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`" :aria-invalid="!!error">
    <slot />
  </Slot>
</template>
