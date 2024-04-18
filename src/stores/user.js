import { defineStore } from 'pinia';
import { loadingStore } from '../stores/isLoading';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useToast } from '@/components/ui/toast/use-toast';
import { useDebounceFn } from '@vueuse/core';
import { http, path, adminPath } from '@/api';

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
    allstatus: ['全部','啟用中','停權中'],
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
    // 後台會員管理頁
    getAdminMembers: useDebounceFn(function(type, current_page){
      let status = '';
      this.selectStatus === '全部'? status = '' : status = this.selectStatus;

      let page = 1;
      if (type === 'page' ) page = current_page;

      const { setIsLoading } = loadingStore();
      setIsLoading();

      http
      .get(`${adminPath.users}?q=${this.searchText}&status=${status}&page=${page}`)
      .then(res=>{
        this.adminMembers = res.data.data;
        // 如何一次取得所有資料？
        this.adminMembers.sort((a, b) => a.warning_list.length - b.warning_list.length);
        this.page = res.data.pagination.current_page;
        this.pageTotal = res.data.pagination.total;
      })
      .catch (()=>{
        toast({ title: '無法取得會員列表'});
      })
      .finally(() => {
        setIsLoading();
      });

    },500),
  },
});
