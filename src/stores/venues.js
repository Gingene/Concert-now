import { defineStore } from 'pinia';
import { http, path } from '@/api';
import { loadingStore } from '../stores/isLoading';
const { setIsLoading } = loadingStore();

export const useVenuesStore = defineStore('venues', {
  state: () => ({
    venues: [],
    venue: {},
    pagination: {},
    seatArea: '',
  }),
  actions: {
    getVenues(page = 1) {
      setIsLoading();
      http
        .get(`${path.venues}?page=${page}`)
        .then((res) => {
          window.scroll(0, 0);
          this.venues = res.data.data;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    getVenue(id) {
      setIsLoading();
      http
        .get(`${path.venues}/${id}`)
        .then((res) => {
          this.venue = res.data.data;
          console.log(this.venue);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading();
        });
    },
  },
  getters: {
    filterSeatComment() {
      if (this.seatArea === 'all' || this.seatArea === '') {
        return this.venue.comments;
      } else {
        return this.venue.comments.filter((item) => item.seat_area === this.seatArea);
      }
    },
  },
});
