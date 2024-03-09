import { defineStore } from 'pinia';
import useTimeCountryFilter from '@/hooks/useTimeCountryFilter';
import { adminPath, http, path } from '@/api';
import { useUserStore } from '@/stores/user';
import { useDebounceFn } from '@vueuse/core';
import { loadingStore } from '../stores/isLoading';
import { useToast } from '@/components/ui/toast/use-toast';

const { timeCountryFilter } = useTimeCountryFilter();
const { getUserSavedAndFollowed } = useUserStore();
const { setIsLoading } = loadingStore();
const { toast } = useToast();

export const useConcertsStore = defineStore('concerts', {
  state: () => {
    return {
      concerts: [],
      adminConcerts: [],
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
      this.getFilterConcerts();
    }, 300),
    searchAdminConcerts: useDebounceFn(function (searchText) {
      this.textFactor = searchText;
      this.getAdminConcerts();
    }, 300),
    getAllConcerts() {
      setIsLoading();
      http
        .get(path.concerts)
        .then((res) => {
          this.concerts = res.data.data;
          this.pagination = res.data.pagination;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    getFilterConcerts(filterFactor, rangeFactor, page = 1) {
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
          console.error(error);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    getAllAdminConcerts() {
      setIsLoading();
      http
        .get(adminPath.concerts)
        .then((res) => {
          this.adminConcerts = res.data.data;
          this.pagination = res.data.pagination;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    getFilterAdminConcerts(filterFactor, rangeFactor, page = 1) {
      // 全部按鈕帶空字串，其它按鈕帶該字
      if (filterFactor === 'time') rangeFactor === '全部' ? (this.timeFactor = '') : (this.timeFactor = rangeFactor);
      if (filterFactor === 'country') rangeFactor === '全部' ? (this.countryFactor = '') : (this.countryFactor = rangeFactor);

      this.pageFactor = page;

      timeCountryFilter('admin', this.timeFactor, this.countryFactor, this.textFactor, this.pageFactor).then((data) => {
        // this.concerts = data.data;
        this.adminConcerts = [...data.data].sort((a, b) => b.id - a.id);
        this.pagination = data.pagination;
      });
    },
    callSaveAction(id) {
      // 每次調用callSaveAction，重新取得savedConcerts資料
      const { savedConcerts, AccessToken } = useUserStore();
      // 未登入，在頁面上已做過一次驗證
      if (AccessToken === undefined) return;

      let request = '';

      // 取消收藏
      if ([...savedConcerts].some((item) => item.id === id)) {
        request = 'delete';
      }
      // 收藏
      else {
        request = 'post';
      }

      http[request](`${path.concerts}/${id}/${request === 'post' ? 'save' : 'unsave'}`)
        .then((res) => {
          // console.log(res);
        })
        .then(() => {
          // 重新取得收藏與追蹤結果
          getUserSavedAndFollowed(request);
          toast({
            title: request === 'post' ? '已加入收藏' : '已取消收藏',
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
