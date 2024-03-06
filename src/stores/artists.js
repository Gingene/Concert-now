import { defineStore } from 'pinia';
import { postFollowConcets, deleteFollowConcets } from '@/api';

export const useArtistsStore = defineStore('artists', {
  state: () => {
    return {};
  },
  actions: {
    async postFollowConcetsData(id) {
      try {
        const res = await postFollowConcets(id);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteFollowConcetsData(id) {
      try {
        const res = await deleteFollowConcets(id);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
});