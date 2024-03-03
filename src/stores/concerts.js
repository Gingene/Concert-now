import { defineStore } from 'pinia';
import useTimeCountryFilter from '@/hooks/useTimeCountryFilter';
import { http, path } from '@/api';
import { useUserStore } from '@/stores/user';
import useDarkAlert from '@/hooks/useDarkAlert';

const { timeCountryFilter } = useTimeCountryFilter();
const { getUserSavedAndFollowed } = useUserStore();
const { swalWithStylingButtons } = useDarkAlert();

export const useConcertsStore = defineStore('concerts', {
  state: () => {
    return {
      concerts: [],
      singleConcert: {},
      pagination: {},
      // 儲存篩選條件
      timeFactor: '',
      countryFactor: '',
      pageFactor: '',
    };
  },
  actions: {
    getConcerts(filterFactor, rangeFactor, page = 1) {
      // 全部按鈕帶空字串，其他按鈕帶該字
      if (filterFactor === 'time') rangeFactor === 'all' ? (this.timeFactor = '') : (this.timeFactor = rangeFactor);
      if (filterFactor === 'country') rangeFactor === 'all' ? (this.countryFactor = '') : (this.countryFactor = rangeFactor);
      this.pageFactor = page;

      timeCountryFilter('concerts', this.timeFactor, this.countryFactor, this.pageFactor).then((data) => {
        this.concerts = data.data;
        this.pagination = data.pagination;
      });
    },
    getSingleConcert(id) {
      http
        .get(`${path.concerts}/${id}`)
        .then((res) => {
          // console.log(res);
          this.singleConcert = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveUnSavedConcert(request, id) {
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
      // 未登入
      if (AccessToken === undefined) {
        // 自訂alert樣式
        swalWithStylingButtons
          .fire({
            title: '登入後才能用收藏功能喔！',
            showCancelButton: true,
            confirmButtonText: '前往登入',
          })
          .then((result) => {
            if (result.isConfirmed) {
              window.location.href = 'https://gingene.github.io/Concert-now/#/login';
            }
          });
        return;
      }

      // 取消收藏
      if ([...savedConcerts].some((item) => item.id === id)) {
        this.saveUnSavedConcert('delete', id);
      }
      // 收藏
      else {
        this.saveUnSavedConcert('post', id);
      }
    },
  },
});
