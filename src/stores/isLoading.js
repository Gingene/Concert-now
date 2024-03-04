import { defineStore } from 'pinia';

export const loadingStore = defineStore('loadingStore', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    setIsLoading() {
      this.isLoading = !this.isLoading;
    },
  },
});
