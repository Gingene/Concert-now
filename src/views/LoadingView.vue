<template>
  <div>
    <Button variant="btn1" size="btn1" @click="setAnimation"> 5 秒</Button>
  </div>
</template>
<script setup>
import { Button } from '@/components/ui/button';
</script>

<script>
import { mapState, mapActions } from 'pinia';
import { loadingStore } from '@/stores/isLoading';
export default {
  methods: {
    ...mapActions(loadingStore, ['setIsLoading']),
    setAnimation() {
      this.setIsLoading('乖拉');
      setTimeout(() => {
        this.setIsLoading();
      }, 5000);
    },
  },
  computed: {
    ...mapState(loadingStore, ['isLoading']),
  },
};
</script>
<style lang=""></style>
