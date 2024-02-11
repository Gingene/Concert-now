<template>
  <LoadingComponent />
  <RouterView />
</template>

<script>
import LoadingComponent from './components/layout/LoadingComponent.vue';

export default {
  components: { LoadingComponent },
};
</script>

<style scoped></style>
