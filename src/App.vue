<template>
  <LoadingComponent />
  <RouterView />
  <Toaster />
</template>

<script setup>
import Toaster from '@/components/ui/toast/Toaster.vue';
</script>

<script>
import LoadingComponent from './components/layout/LoadingComponent.vue';

export default {
  components: { LoadingComponent },
};
</script>

<style scoped></style>
