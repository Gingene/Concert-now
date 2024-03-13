import { defineStore } from 'pinia';
import { postFollowConcets, deleteFollowConcets } from '@/api';

export const useArtistsStore = defineStore('artists', {
  state: () => {
    return {};
  },
  actions: {
    async postFollowConcetsData(id) {
      try {
        await postFollowConcets(id);
        // console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteFollowConcetsData(id) {
      try {
        await deleteFollowConcets(id);
        // console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
