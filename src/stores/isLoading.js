import { defineStore } from 'pinia';

export const loadingStore = defineStore('loadingStore', {
  state: () => ({
    isLoading: false,
    image: '',
  }),
  actions: {
    setIsLoading(image) {
      this.isLoading = !this.isLoading;
      this.image = image;
    },
  },
});
