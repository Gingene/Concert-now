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
      // 首頁選定的，圖片和資料庫不一樣
      selectedConcerts: [
        {
          id: 10,
          show: 'false',
          name: 'King Gnu Asia Tour『THE GREATEST UNKNOWN』in Taipei',
          date: '2024-04-06 (六) 19:00',
          image: 'https://i.imgur.com/ZbzHz0X.jpg',
        },
        {
          id: 7,
          show: 'false',
          name: '原子邦妮「明明早點放棄就沒事了」',
          date: '2024-04-20 (六) 19:30',
          image: 'https://i.imgur.com/CDtPlHG.png',
        },
        {
          id: 4,
          show: 'true',
          name: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          date: '2024-01-27 (六) 19:00',
          image: 'https://i.imgur.com/kPcCvf8.jpg',
        },

        {
          id: 5,
          show: 'false',
          name: '溫蒂漫步 Wendy Wander 2024 Tour “Midnight Wandering 午夜漫遊“',
          date: '2024-01-27 (六) 19:00',
          image: 'https://i.imgur.com/FlEOLfm.jpg',
        },

        {
          id: 6,
          show: 'false',
          name: 'YOASOBI演唱會2024台北站',
          date: '2024-01-21 (日) 19:00',
          image: 'https://i.imgur.com/E6JbF0S.jpg',
        },
        {
          id: 3,
          show: 'false',
          name: 'FTISLAND演唱會2024台北站',
          date: '2024-02-18 (六) 17:00',
          image: 'https://i.imgur.com/2VtzkiT.png',
        },
        {
          id: 12,
          show: 'false',
          name: 'ITZY 2ND WORLD TOUR <BORN TO BE> in TAIPEI',
          date: '2024-07-20 (六) 18:00',
          image: 'https://i.imgur.com/GWg5REN.png',
        },

        {
          id: 11,
          show: 'false',
          name: '宇宙人《α：回到未來》20週年演唱會',
          date: '2024-04-27 (六) 19:30',
          image: 'https://i.imgur.com/TkXaaeF.png',
        },
      ],
      adminConcerts: [],
      singleConcert: {},
      pagination: {},
      // 儲存篩選條件
      timeFactor: '',
      countryFactor: '',
      textFactor: '',
      pageFactor: 1,
    };
  },
  actions: {
    searchConcerts: useDebounceFn(function (searchText) {
      this.textFactor = searchText;
      this.getFilterFrontConcerts();
    }, 300),
    searchAdminConcerts: useDebounceFn(function (searchText) {
      this.textFactor = searchText;
      this.getFilterAdminConcerts();
    }, 300),
    getAllConcerts() {
      this.timeFactor = '';
      this.countryFactor = '';
      this.textFactor = '';
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
    getFilterFrontConcerts(filterFactor, rangeFactor, page = 1) {
      // 全部按鈕帶空字串，其它按鈕帶該字
      if (filterFactor === 'time') rangeFactor === 'all' ? (this.timeFactor = '') : (this.timeFactor = rangeFactor);
      if (filterFactor === 'country') rangeFactor === 'all' ? (this.countryFactor = '') : (this.countryFactor = rangeFactor);
      this.pageFactor = page;

      timeCountryFilter('front', this.timeFactor, this.countryFactor, this.textFactor, page).then((data) => {
        this.concerts = data.data;
        this.pagination = data.pagination;
      });
    },
    getSingleConcert(id, fn = null) {
      setIsLoading();
      http
        .get(`${path.concerts}/${id}`)
        .then((res) => {
          this.singleConcert = res.data.data;
          if (fn) fn();
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading();
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
    getAllAdminConcerts() {
      setIsLoading();
      http
        .get(adminPath.concerts)
        .then((res) => {
          this.adminConcerts = res.data.data.reverse();
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
        this.adminConcerts = [...data.data].sort((a, b) => b.id - a.id);
        this.pagination = data.pagination;
      });
    },
  },
});
