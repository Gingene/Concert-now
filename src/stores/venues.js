import { defineStore } from 'pinia';
import { http, path } from '@/api';
import { loadingStore } from '../stores/isLoading';
import { useDebounceFn } from '@vueuse/core';
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
          console.log(this.venues);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    getVenuesByCity(city) {
      setIsLoading();
      console.log(city);
      http
        .get(`${path.venues}?city=${city}&page=${1}`)
        .then((res) => {
          window.scroll(0, 0);
          this.venues = res.data.data;
          this.pagination = res.data.pagination;
          console.log(this.venues);
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
    searchVenues: useDebounceFn(function (searchText) {
      http
        .get(`${path.venues}/?q=${searchText}`)
        .then((res) => {
          this.venues = res.data.data;
          this.pagination = res.data.pagination;
          console.log(this.venues);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 300),
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
