<script setup>
import { PaginationNext, useForwardProps } from 'radix-vue';
import { ChevronRight } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';

const props = defineProps({
  asChild: { type: Boolean, required: false, default: true },
  as: { type: null, required: false },
});
const forwarded = useForwardProps(props);
</script>

<template>
  <PaginationNext v-bind="forwarded">
    <Button class="w-10 h-10 p-0" variant="outline">
      <slot>
        <ChevronRight class="h-4 w-4" />
      </slot>
    </Button>
  </PaginationNext>
</template>
