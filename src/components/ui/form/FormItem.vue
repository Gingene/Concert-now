<script>
export const FORM_ITEM_INJECTION_KEY = Symbol();
</script>

<script setup>
import { provide } from 'vue';
import { useId } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps({
  class: { type: null, required: false },
});

const id = useId();
provide(FORM_ITEM_INJECTION_KEY, id);
</script>

<template>
  <div :class="cn('relative flex items-end justify-between space-y-4', props.class)">
    <slot />
  </div>
</template>
