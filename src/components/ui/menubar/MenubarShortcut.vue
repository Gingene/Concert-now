<script setup>
import { cn } from '@/lib/utils';
</script>

<template>
  <span :class="cn('text-xxs ml-auto tracking-widest opacity-50', $attrs.class ?? '')">
    <slot />
  </span>
</template>
