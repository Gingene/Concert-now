<script setup>
import { useFormField } from './useFormField';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

const props = defineProps({
  for: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const { error, formItemId } = useFormField();
</script>

<template>
  <Label class="w-[25%] pb-3 
  text-[12px] lg:text-[14px]" :class="cn(error, props.class)" :for="formItemId">
    <slot />
  </Label>
</template>
