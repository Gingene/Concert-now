import { defineStore } from 'pinia';
import useTimeCountryFilter from '@/hooks/useTimeCountryFilter';
import { http, path } from '@/api';

const { timeCountryFilter } = useTimeCountryFilter();

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
      // console.log(this.$refs.timeButtons);
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
          console.log(res);
          this.singleConcert = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
