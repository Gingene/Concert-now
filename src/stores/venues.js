import { defineStore } from 'pinia';
import useApiData from '@/hooks/useApiData';

const { httpData } = useApiData();

export const useVenuesStore = defineStore('venues', {
  state: () => ({
    venues: [],
    pagination: {},
  }),
  actions: {
    getVenues(thePath) {
      httpData('get', thePath).then((data) => {
        console.log(data);
        this.venues = data.data;
        this.pagination = data.pagination;
        localStorage.setItem('tempVenues', JSON.stringify(data.data));
      });
    },
  },
});
