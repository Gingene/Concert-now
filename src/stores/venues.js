import { defineStore } from 'pinia';
import { http, path, adminPath } from '@/api';
import { loadingStore } from '../stores/isLoading';
import { useDebounceFn } from '@vueuse/core';
import { toast } from '@/components/ui/toast';
const { setIsLoading } = loadingStore();

export const useVenuesStore = defineStore('venues', {
  state: () => ({
    venueInfo: [],
    venues: [],
    venue: {},
    adminVenues: [],
    adminSearchText: '',
    adminCity: '',
    adminCityOptions: '',
    pagination: {},
    seatArea: '',
    searchText: '',
    city: '',
    searchPage: 1,
  }),
  actions: {
    getVenueInfo() {
      http
        .get(`${path.venues}?comments=1`)
        .then((res) => {
          this.venueInfo = res.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getVenues(page = 1) {
      setIsLoading();
      http
        .get(`${path.venues}?page=${page}`)
        .then((res) => {
          window.scroll(0, 0);
          this.venues = res.data.data;
          this.pagination = res.data.pagination;
          // console.log(this.venues);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    getVenuesByCity(city) {
      this.city = city;
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
    getVenue(id) {
      setIsLoading();
      http
        .get(`${path.venues}/${id}`)
        .then((res) => {
          this.venue = res.data.data;
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setTimeout(() => {
            setIsLoading();
          }, 100);
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
      this.searchPage = 1;
    },
    reportUser(name) {
      toast({
        title: `已檢舉該使用者${name}`,
        description: '',
      });
    },
    // 以下為 Admin Venue
    getAdminVenues() {
      setIsLoading();
      http
        .get(`${adminPath.venues}?page=1`)
        .then((res) => {
          this.adminVenues = res.data.data;
          this.adminCityOptions = [...new Set(res.data.data.map((i) => i.city))];
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    searchAdminVenues: useDebounceFn(function (searchText, city = '') {
      this.adminSearchText = searchText;
      this.adminCity = city;
      http
        .get(`${adminPath.venues}/?q=${searchText}&city=${this.adminCity}&page=1`)
        .then((res) => {
          this.adminVenues = res.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    }, 300),
    deleteVenue(id, type) {
      if (!id) return;
      const venueImportant = [1, 2, 3, 4, 5, 6];
      const data = {
        _method: 'DELETE',
      };

      if (type === 'multiple') {
        if (id.some((i) => venueImportant.includes(i))) {
          toast({
            title: '重要的場地不允許刪除',
          });
          return;
        }
        data.ids = id;
      } else if (type === 'single') {
        if (id <= 6) {
          toast({
            title: '重要的場地不允許刪除',
          });
          return;
        }
        data.ids = [id];
      }
      http
        .post(adminPath.venues, data)
        .then(() => {
          toast({
            title: '刪除成功',
          });
          this.getAdminVenues();
        })
        .catch(() => {
          toast({
            title: '刪除失敗',
          });
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
