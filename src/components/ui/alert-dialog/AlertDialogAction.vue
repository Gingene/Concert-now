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
  <AlertDialogAction v-bind="props" class="border-2 border-tiffany hover:bg-tiffany text-white hover:text-primary p-2 md:py-2 md:px-4 lg:py-2 lg:px-6 rounded-btn1">
    <slot />
  </AlertDialogAction>
</template>
