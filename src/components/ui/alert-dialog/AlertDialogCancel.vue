<script setup>
import { AlertDialogCancel } from 'radix-vue';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
</script>

<template>
  <!-- <AlertDialogCancel v-bind="props" :class="cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', $attrs.class ?? '')"> -->
  <AlertDialogCancel v-bind="props" class="border-2 border-black-60 hover:bg-black-60 p-2 sm:py-2 sm:px-4 lg:py-2 lg:px-6 rounded-btn1">
    <slot />
  </AlertDialogCancel>
</template>
