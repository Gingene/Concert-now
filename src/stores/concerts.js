import { defineStore } from 'pinia';
import useTimeCountryFilter from '@/hooks/useTimeCountryFilter';
import { http, path } from '@/api';
import { useUserStore } from '@/stores/user';
import { useDebounceFn } from '@vueuse/core';
import { loadingStore } from '../stores/isLoading';

const { timeCountryFilter } = useTimeCountryFilter();
const { getUserSavedAndFollowed } = useUserStore();
const { setIsLoading } = loadingStore();

export const useConcertsStore = defineStore('concerts', {
  state: () => {
    return {
      concerts: [],
      singleConcert: {},
      pagination: {},
      // 儲存篩選條件
      timeFactor: '',
      countryFactor: '',
      textFactor: '',
      pageFactor: '',
    };
  },
  actions: {
    searchConcerts: useDebounceFn(function (searchText) {
      this.textFactor = searchText;
      this.getConcerts();
    }, 300),
    searchAdminConcerts: useDebounceFn(function (searchText) {
      this.textFactor = searchText;
      this.getAdminConcerts();
    }, 300),
    getConcerts(filterFactor, rangeFactor, page = 1) {
      // 全部按鈕帶空字串，其他按鈕帶該字
      if (filterFactor === 'time') rangeFactor === 'all' ? (this.timeFactor = '') : (this.timeFactor = rangeFactor);
      if (filterFactor === 'country') rangeFactor === 'all' ? (this.countryFactor = '') : (this.countryFactor = rangeFactor);

      this.pageFactor = page;

      timeCountryFilter('front', this.timeFactor, this.countryFactor, this.textFactor, this.pageFactor).then((data) => {
        this.concerts = data.data;
        this.pagination = data.pagination;
      });
    },
    getSingleConcert(id) {
      setIsLoading();
      http
        .get(`${path.concerts}/${id}`)
        .then((res) => {
          // console.log(res);
          this.singleConcert = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    getAdminConcerts(filterFactor, rangeFactor, page = 1) {
      // 全部按鈕帶空字串，其它按鈕帶該字
      if (filterFactor === 'time') rangeFactor === '全部' ? (this.timeFactor = '') : (this.timeFactor = rangeFactor);
      if (filterFactor === 'country') rangeFactor === '全部' ? (this.countryFactor = '') : (this.countryFactor = rangeFactor);

      this.pageFactor = page;

      timeCountryFilter('admin', this.timeFactor, this.countryFactor, this.textFactor, this.pageFactor).then((data) => {
        // this.concerts = data.data;
        this.concerts = [...data.data].sort((a, b) => b.id - a.id);
        this.pagination = data.pagination;
      });
    },
    saveConcertAction(request, id) {
      http[request](`${path.concerts}/${id}/${request === 'post' ? 'save' : 'unsave'}`)
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          // 重新取得收藏與追蹤結果
          getUserSavedAndFollowed();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    callSaveAction(id) {
      // 每次調用callSaveAction，重新取得savedConcerts資料
      const { savedConcerts, AccessToken } = useUserStore();
      // 未登入，在頁面上已做過一次驗證
      if (AccessToken === undefined) return;

      // 取消收藏
      if ([...savedConcerts].some((item) => item.id === id)) {
        this.saveConcertAction('delete', id);
      }
      // 收藏
      else {
        this.saveConcertAction('post', id);
      }
    },
  },
});
