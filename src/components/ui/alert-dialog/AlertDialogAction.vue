<script setup>
import { AlertDialogAction } from 'radix-vue';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
});
</script>

<template>
  <!-- <AlertDialogAction v-bind="props" :class="cn(buttonVariants(), $attrs.class ?? '')"> -->
  <AlertDialogAction v-bind="props" class="text-center border-2 border-tiffany hover:bg-tiffany hover:text-primary p-2 sm:py-2 sm:px-4 lg:py-2 lg:px-6 rounded-btn1">
    <slot />
  </AlertDialogAction>
</template>
