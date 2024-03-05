import { defineStore } from 'pinia';
import { http, path } from '@/api';
import { loadingStore } from '../stores/isLoading';
import { useDebounceFn } from '@vueuse/core';
import { toast } from '@/components/ui/toast';
const { setIsLoading } = loadingStore();

export const useVenuesStore = defineStore('venues', {
  state: () => ({
    venues: [],
    venue: {},
    pagination: {},
    seatArea: '',
    searchText: '',
    city: '',
    searchPage: 1,
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
    getVenuesByCity(city, e) {
      this.city = city;
      this.activeButton(e);
      this.page = 1;
      setIsLoading();
      this.searchVenues(this.searchText, 1);
      setTimeout(() => {
        setIsLoading();
      }, 500);
    },
    getVenuesByPage(page) {
      setIsLoading();
      this.searchVenues(this.searchText, page);
      setTimeout(() => {
        setIsLoading();
      }, 600);
    },
    activeButton(e) {
      const cityButtons = document.querySelectorAll('.city-button');
      cityButtons.forEach((button) => button.classList.remove('active'));
      e.target.classList.add('active');
    },
    getVenue(id) {
      setIsLoading();
      http
        .get(`${path.venues}/${id}`)
        .then((res) => {
          this.venue = res.data.data;
          console.log(this.venue);
          setTimeout(() => {
            setIsLoading();
          }, 100);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    searchVenues: useDebounceFn(function (searchText, page = 1) {
      this.searchText = searchText;
      this.searchPage = page;
      http
        .get(`${path.venues}/?q=${searchText}&city=${this.city}&page=${page}`)
        .then((res) => {
          this.venues = res.data.data;
          this.pagination = res.data.pagination;
          // console.log(this.venues);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 300),
    resetState() {
      this.searchText = '';
      this.city = '';
      this.page = 1;
    },
    reportUser(name) {
      toast({
        title: `已檢舉該使用者${name}`,
        description: '',
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
    transportation() {
      return this.venue.transportation?.map((item, index) => ({ ...item, value: `item-${index + 1}` }));
    },
  },
});
