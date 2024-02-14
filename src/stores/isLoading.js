import { defineStore } from 'pinia';

export const loadingStore = defineStore('loadingStore', {
  state: () => ({
    isLoading: false,
    message: '',
  }),
  actions: {
    setIsLoading(message = '別走開，豐富的演唱會即出現在這') {
      this.isLoading = !this.isLoading;
      this.message = message;
    },
  },
});
