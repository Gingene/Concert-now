<script setup>
import { MenubarCheckboxItem, MenubarItemIndicator } from 'radix-vue';
import { Check } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

const props = defineProps({
  checked: { type: [Boolean, String], required: false },
  disabled: { type: Boolean, required: false },
  textValue: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: String, required: false },
});

const emit = defineEmits(['select', 'update:checked']);
</script>

<template>
  <MenubarCheckboxItem
    v-bind="props"
    :class="[
      cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      ),
    ]"
    @update:checked="emit('update:checked', $event)"
    @select="emit('select', $event)">
    <MenubarItemIndicator class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Check class="w-4 h-4" />
    </MenubarItemIndicator>
    <slot />
  </MenubarCheckboxItem>
</template>
