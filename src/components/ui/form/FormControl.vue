<script setup>
import { Slot } from 'radix-vue';
import { useFormField } from './useFormField';

const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
</script>

<template>
  <Slot 
    :id="formItemId" 
    :aria-describedby="!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`" 
    :aria-invalid="!!error"
    class="tracking-[3px] 
    bg-transparent 
    px-0
    border-0 border-b 
    rounded-none 
    text-[12px] md:text-[14px] lg:text-[16px]
    focus:border-b-2
    focus:ring-0 
    focus-visible:ring-0 
    focus-visible:ring-offset-0">
    <slot />
  </Slot>
</template>
