<template>
  <h6 v-for="(song, index) in concertSongs" :key="song.id" class="py-4">
    <span>{{ index + 1 }}. </span><span>{{ song.name }}</span>
  </h6>
</template>
<script>
export default {
  props: ['concertSongs'],
};
</script>
