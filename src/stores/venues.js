import { defineStore } from 'pinia';
import { http, path } from '@/api';

export const useVenuesStore = defineStore('venues', {
  state: () => ({
    venues: [],
    venue: {},
    pagination: {},
  }),
  actions: {
    getVenues() {
      // httpData('get', thePath).then((data) => {
      //   this.venues = data.data;
      //   this.pagination = data.pagination;
      // });
      http
        .get(`${path.venues}?page=1`)
        .then((res) => {
          console.log(res);
          this.venues = res.data.data;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {});
    },
    getVenue(id) {
      http
        .get(`${path.venues}/${id}`)
        .then((res) => {
          this.venue = res.data.data;
          console.log(this.venue);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {});
    },
  },
});
