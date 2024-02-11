<template>
  <h6 v-for="songForModel in mapSongs[concertTitle]" :key="songForModel.id" class="py-4">
    <span>{{ songForModel.id }}. </span><span>{{ songForModel.name }}</span>
  </h6>
</template>
<script>
export default {
  props: ['mapSongs', 'concertTitle'],
};
</script>
