import { defineStore } from 'pinia';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useToast } from '@/components/ui/toast/use-toast';
import { useDebounceFn } from '@vueuse/core';
import { http, path, adminPath } from '@/api';
import { loadingStore } from '../stores/isLoading';

const cookies = useCookies();
const { toast } = useToast();

export const useUserStore = defineStore('user', {
  state: () => ({
    AccessToken: '',
    user: {},
    userDynamic: {},
    // 收藏與追蹤列表
    savedConcerts: [],
    followedArtists: [],
    // 後台會員管理頁面
    adminMembers: {},
    searchText: '',
    selectStatus: '',
    page : 1,
    pageTotal : 1,
  }),
  actions: {
    getUserDynamic() {
      const { setIsLoading } = loadingStore();
      setIsLoading();
      http
        .get(`${path.me}`)
        .then((res) => {
          this.userDynamic = res.data.data;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading();
        });
    },
    getToken() {
      this.AccessToken = cookies.get('AccessToken');
    },
    getUser() {
      this.user = JSON.parse(localStorage.getItem('user'));
    },
    // 備註: 使用者登入API不會回傳收藏saved_concerts與追蹤followed_artists欄位
    // 取得收藏與追蹤列表
    getUserSavedAndFollowed() {
      http
        .get(`${path.me}`)
        .then((res) => {
          this.savedConcerts = res.data.data.saved_concerts;
          this.followedArtists = res.data.data.followed_artists;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    logout() {
      // cookies.remove('AccessToken');
      const key = 'AccessToken';
      document.cookie = key + '="";expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      localStorage.removeItem('user');
      this.AccessToken = '';
      this.user = {};
      toast({
        title: '登出成功',
        description: '',
      });
      location.reload();
    },
    // admin
    // 取得後台會員管理資料
    getAdminMembers(searchText = '', status = '', page = 1, callback){
      console.log('test');
      const { setIsLoading } = loadingStore();
      setIsLoading();

      http
      .get(`${adminPath.users}?q=${searchText}&status=${status}&page=${page}`)
      .then(res=>{
        this.adminMembers = res.data.data;
        this.page = res.data.pagination.current_page;
        this.pageTotal = res.data.pagination.total;
        console.log(this.page, this.pageTotal, '1');
        if (callback) callback();
      })
      .catch (()=>{
        toast({ title: '無法取得會員列表'});
      })
      .finally(() => {
        setIsLoading();
      });
    },
    // 後台會員管理篩選 (email & 啟用中/停權中)
    filterAdminMembers: useDebounceFn(async function(type){
      let status = '';
      this.selectStatus === '全部'? status = '' : status = this.selectStatus;
      let page = 1;
      if (type === 'page' ) page = this.page;
      await this.getAdminMembers(this.searchText, status, page);

    },300),
  },
});
