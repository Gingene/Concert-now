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
    allstatus: ['全部', '啟用中', '停權中'],
    searchText: '',
    selectStatus: '',
    page: 1,
    pageTotal: 0,
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
    getAdminMembers: useDebounceFn(async function (type, currentPage) {
      const { searchText, selectStatus } = this;
      const params = {
        q: searchText || '',
        status: selectStatus && selectStatus !== '全部' ? selectStatus : '',
        page: type === 'page' ? currentPage : 1,
      };
      const queryParams = new URLSearchParams(params).toString();
      const url = `${adminPath.users}?${queryParams}`;

      const { setIsLoading } = loadingStore();
      setIsLoading();

      try {
        const res = await http.get(url);
        this.adminMembers = res.data.data;
        this.page = res.data.pagination.current_page;
        this.pageTotal = res.data.pagination.total;
      } catch (error) {
        toast({ title: '無法取得會員列表' });
      } finally {
        setIsLoading();
      }
    }, 300),
  },
});
